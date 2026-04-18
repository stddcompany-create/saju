import { NextResponse } from "next/server";
import { createAdminClient } from "@/lib/supabase/admin";
import { getProductByCategory } from "@/lib/products";

interface OrderRequest {
  productId?: unknown;
  name?: unknown;
  email?: unknown;
  calendarType?: unknown;
  birthYear?: unknown;
  birthMonth?: unknown;
  birthDay?: unknown;
  birthHour?: unknown;
  birthMinute?: unknown;
  gender?: unknown;
  agreeTerms?: unknown;
  agreePrivacy?: unknown;
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function isIntInRange(v: unknown, min: number, max: number): v is number {
  return typeof v === "number" && Number.isInteger(v) && v >= min && v <= max;
}

function isOptionalIntInRange(
  v: unknown,
  min: number,
  max: number,
): v is number | null {
  return v === null || isIntInRange(v, min, max);
}

export async function POST(request: Request) {
  let body: OrderRequest;
  try {
    body = (await request.json()) as OrderRequest;
  } catch {
    return NextResponse.json(
      { error: "잘못된 요청 형식입니다." },
      { status: 400 },
    );
  }

  const {
    productId,
    name,
    email,
    calendarType,
    birthYear,
    birthMonth,
    birthDay,
    birthHour,
    birthMinute,
    gender,
    agreeTerms,
    agreePrivacy,
  } = body;

  if (typeof productId !== "string") {
    return NextResponse.json(
      { error: "상품 정보가 올바르지 않습니다." },
      { status: 400 },
    );
  }

  const product = getProductByCategory(productId);
  if (!product) {
    return NextResponse.json(
      { error: "존재하지 않는 상품입니다." },
      { status: 404 },
    );
  }

  const trimmedName = typeof name === "string" ? name.trim() : "";
  const trimmedEmail = typeof email === "string" ? email.trim() : "";

  if (!trimmedName) {
    return NextResponse.json(
      { error: "이름을 입력해주세요." },
      { status: 400 },
    );
  }
  if (trimmedName.length > 50) {
    return NextResponse.json({ error: "이름이 너무 깁니다." }, { status: 400 });
  }
  if (!EMAIL_RE.test(trimmedEmail) || trimmedEmail.length > 254) {
    return NextResponse.json(
      { error: "올바른 이메일 주소를 입력해주세요." },
      { status: 400 },
    );
  }
  if (agreeTerms !== true || agreePrivacy !== true) {
    return NextResponse.json(
      { error: "필수 동의 항목에 모두 동의해주세요." },
      { status: 400 },
    );
  }
  if (calendarType !== "양력" && calendarType !== "음력") {
    return NextResponse.json(
      { error: "달력 유형이 올바르지 않습니다." },
      { status: 400 },
    );
  }
  if (gender !== "남" && gender !== "여") {
    return NextResponse.json(
      { error: "성별이 올바르지 않습니다." },
      { status: 400 },
    );
  }
  if (
    !isIntInRange(birthYear, 1900, 2100) ||
    !isIntInRange(birthMonth, 1, 12) ||
    !isIntInRange(birthDay, 1, 31) ||
    !isOptionalIntInRange(birthHour, 0, 23) ||
    !isOptionalIntInRange(birthMinute, 0, 59)
  ) {
    return NextResponse.json(
      { error: "생년월일시가 올바르지 않습니다." },
      { status: 400 },
    );
  }

  const supabase = createAdminClient();
  const { error } = await supabase.from("orders").insert({
    product_id: product.id,
    product_name: product.name,
    price: product.price,
    email: trimmedEmail,
    name: trimmedName,
    calendar_type: calendarType,
    birth_year: birthYear,
    birth_month: birthMonth,
    birth_day: birthDay,
    birth_hour: birthHour,
    birth_minute: birthMinute,
    gender,
  });

  if (error) {
    console.error("Order insert error:", error);
    return NextResponse.json(
      { error: "주문 중 오류가 발생했습니다." },
      { status: 500 },
    );
  }

  return NextResponse.json({ ok: true });
}
