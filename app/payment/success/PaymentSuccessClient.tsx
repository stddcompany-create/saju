"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

interface ConfirmResult {
  ok: true;
  orderId: string;
  paymentKey?: string;
  method?: string;
  receiptUrl?: string | null;
  approvedAt?: string;
  alreadyPaid?: boolean;
}

interface ConfirmError {
  error: string;
  code?: string;
}

type ConfirmState =
  | { status: "loading" }
  | { status: "success"; data: ConfirmResult }
  | { status: "error"; message: string };

export default function PaymentSuccessClient() {
  const searchParams = useSearchParams();
  const [state, setState] = useState<ConfirmState>({ status: "loading" });

  useEffect(() => {
    const paymentKey = searchParams.get("paymentKey");
    const orderId = searchParams.get("orderId");
    const amountStr = searchParams.get("amount");

    if (!paymentKey || !orderId || !amountStr) {
      setState({
        status: "error",
        message: "결제 정보가 누락되었습니다.",
      });
      return;
    }

    const amount = Number(amountStr);
    if (!Number.isFinite(amount) || amount <= 0) {
      setState({
        status: "error",
        message: "결제 금액이 올바르지 않습니다.",
      });
      return;
    }

    let cancelled = false;

    (async () => {
      try {
        const res = await fetch("/api/payments/confirm", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ paymentKey, orderId, amount }),
        });
        const data: unknown = await res.json();

        if (cancelled) return;

        if (!res.ok) {
          const err = data as ConfirmError;
          setState({
            status: "error",
            message: err.error ?? "결제 승인에 실패했습니다.",
          });
          return;
        }

        setState({ status: "success", data: data as ConfirmResult });
      } catch (err) {
        if (cancelled) return;
        console.error(err);
        setState({
          status: "error",
          message: "결제 승인 중 네트워크 오류가 발생했습니다.",
        });
      }
    })();

    return () => {
      cancelled = true;
    };
  }, [searchParams]);

  if (state.status === "loading") {
    return (
      <main className="mx-auto flex min-h-[60vh] max-w-md flex-col items-center justify-center px-4 py-8">
        <div className="h-12 w-12 animate-spin rounded-full border-4 border-gray-200 border-t-gray-900" />
        <p className="mt-4 text-sm text-gray-600">결제를 승인하고 있습니다...</p>
      </main>
    );
  }

  if (state.status === "error") {
    return (
      <main className="mx-auto flex min-h-[60vh] max-w-md flex-col items-center justify-center px-4 py-8">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-red-100 text-3xl">
          ❌
        </div>
        <h1 className="mt-4 text-xl font-bold text-gray-900">
          결제 승인 실패
        </h1>
        <p className="mt-2 text-center text-sm text-gray-600">
          {state.message}
        </p>
        <Link
          href="/"
          className="mt-6 rounded-lg bg-gray-900 px-6 py-3 text-sm font-medium text-white hover:bg-gray-700"
        >
          홈으로 돌아가기
        </Link>
      </main>
    );
  }

  const { data } = state;
  const orderIdShort = data.orderId.slice(0, 8);

  return (
    <main className="mx-auto max-w-md px-4 py-12">
      <div className="flex flex-col items-center">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-3xl">
          ✅
        </div>
        <h1 className="mt-4 text-2xl font-bold text-gray-900">
          결제가 완료되었습니다
        </h1>
        <p className="mt-2 text-center text-sm text-gray-600">
          결제 완료 후 영업일 1~2일 이내 PDF 파일로 발송됩니다.
        </p>
      </div>

      <div className="mt-8 rounded-lg border border-gray-200 bg-white p-4">
        <h2 className="mb-3 text-base font-semibold text-gray-900">
          결제 정보
        </h2>
        <dl className="grid grid-cols-[auto_1fr] gap-x-3 gap-y-2 text-sm">
          <dt className="text-gray-500">주문 번호</dt>
          <dd className="break-all font-mono text-xs text-gray-700">
            {orderIdShort}...
          </dd>
          {data.method && (
            <>
              <dt className="text-gray-500">결제 수단</dt>
              <dd className="text-gray-900">{data.method}</dd>
            </>
          )}
          {data.approvedAt && (
            <>
              <dt className="text-gray-500">승인 일시</dt>
              <dd className="text-gray-900">
                {new Date(data.approvedAt).toLocaleString("ko-KR")}
              </dd>
            </>
          )}
        </dl>
      </div>

      <div className="mt-4 rounded-lg bg-yellow-50 px-4 py-3 text-xs text-gray-600">
        <p>※ 입력하신 이메일로 결제 영수증과 PDF 파일이 발송됩니다.</p>
        <p className="mt-1">
          ※ 영업일 기준 1~2일 이내 발송 (주말·공휴일 제외)
        </p>
      </div>

      <div className="mt-6 flex flex-col gap-3">
        {data.receiptUrl && (
          <a
            href={data.receiptUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-gray-300 bg-white py-3 text-center text-sm font-medium text-gray-700 hover:bg-gray-50"
          >
            영수증 보기
          </a>
        )}
        <Link
          href="/"
          className="rounded-lg bg-gray-900 py-3 text-center text-sm font-medium text-white hover:bg-gray-700"
        >
          홈으로 돌아가기
        </Link>
      </div>
    </main>
  );
}
