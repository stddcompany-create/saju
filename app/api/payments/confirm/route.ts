import { NextResponse } from "next/server";
import { createAdminClient } from "@/lib/supabase/admin";

interface ConfirmRequest {
  paymentKey?: unknown;
  orderId?: unknown;
  amount?: unknown;
}

interface TossErrorResponse {
  code?: string;
  message?: string;
}

interface TossPaymentResponse {
  paymentKey: string;
  orderId: string;
  status: string;
  totalAmount: number;
  method?: string;
  approvedAt?: string;
  receipt?: { url?: string };
}

export async function POST(request: Request) {
  let body: ConfirmRequest;
  try {
    body = (await request.json()) as ConfirmRequest;
  } catch {
    return NextResponse.json(
      { error: "잘못된 요청 형식입니다." },
      { status: 400 },
    );
  }

  const { paymentKey, orderId, amount } = body;

  if (
    typeof paymentKey !== "string" ||
    typeof orderId !== "string" ||
    typeof amount !== "number" ||
    !Number.isInteger(amount) ||
    amount <= 0
  ) {
    return NextResponse.json(
      { error: "결제 정보가 올바르지 않습니다." },
      { status: 400 },
    );
  }

  const secretKey = process.env.TOSS_SECRET_KEY;
  if (!secretKey) {
    console.error("TOSS_SECRET_KEY is not configured");
    return NextResponse.json(
      { error: "서버 설정 오류입니다." },
      { status: 500 },
    );
  }

  const supabase = createAdminClient();

  // 1. 주문 정보 검증 (금액 위변조 방지)
  const { data: order, error: orderError } = await supabase
    .from("orders")
    .select("id, price, status, payment_key")
    .eq("id", orderId)
    .single();

  if (orderError || !order) {
    return NextResponse.json(
      { error: "주문 정보를 찾을 수 없습니다." },
      { status: 404 },
    );
  }

  if (order.price !== amount) {
    return NextResponse.json(
      { error: "결제 금액이 일치하지 않습니다." },
      { status: 400 },
    );
  }

  // 이미 결제된 주문인 경우 - 멱등성 보장
  if (order.status === "paid" && order.payment_key === paymentKey) {
    return NextResponse.json({
      ok: true,
      orderId: order.id,
      alreadyPaid: true,
    });
  }

  // 2. 토스페이먼츠 결제 승인 API 호출
  const tossResponse = await fetch(
    "https://api.tosspayments.com/v1/payments/confirm",
    {
      method: "POST",
      headers: {
        Authorization: `Basic ${Buffer.from(`${secretKey}:`).toString("base64")}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ paymentKey, orderId, amount }),
    },
  );

  const tossData: unknown = await tossResponse.json();

  if (!tossResponse.ok) {
    const err = tossData as TossErrorResponse;
    console.error("Toss confirm failed:", err);

    // 주문 상태를 failed로 업데이트
    await supabase
      .from("orders")
      .update({ status: "failed", updated_at: new Date().toISOString() })
      .eq("id", orderId);

    return NextResponse.json(
      {
        error: err.message ?? "결제 승인에 실패했습니다.",
        code: err.code ?? "UNKNOWN",
      },
      { status: 400 },
    );
  }

  const payment = tossData as TossPaymentResponse;

  // 3. DB 업데이트 - 결제 정보 저장
  const { error: updateError } = await supabase
    .from("orders")
    .update({
      status: "paid",
      payment_key: payment.paymentKey,
      payment_method: payment.method ?? null,
      paid_at: payment.approvedAt ?? new Date().toISOString(),
      receipt_url: payment.receipt?.url ?? null,
      updated_at: new Date().toISOString(),
    })
    .eq("id", orderId);

  if (updateError) {
    console.error("Order update error:", updateError);
    return NextResponse.json(
      { error: "주문 상태 업데이트 중 오류가 발생했습니다." },
      { status: 500 },
    );
  }

  return NextResponse.json({
    ok: true,
    orderId: payment.orderId,
    paymentKey: payment.paymentKey,
    method: payment.method,
    receiptUrl: payment.receipt?.url ?? null,
    approvedAt: payment.approvedAt,
  });
}
