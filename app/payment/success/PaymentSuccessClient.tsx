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
      <main className="flex flex-1 flex-col items-center justify-center bg-[#1a1a1a] px-4 py-20">
        <div className="h-12 w-12 animate-spin rounded-full border-4 border-[#2e2e2e] border-t-white" />
        <p className="mt-4 text-sm text-[#a3a3a3]">결제를 승인하고 있습니다</p>
      </main>
    );
  }

  if (state.status === "error") {
    return (
      <main className="flex flex-1 flex-col items-center justify-center bg-[#1a1a1a] px-4 py-20">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-rose-500/15 text-3xl">
          ❌
        </div>
        <h1 className="mt-4 text-2xl font-extrabold text-white">
          결제 승인 실패
        </h1>
        <p className="mt-2 max-w-xs text-center text-sm text-[#a3a3a3]">
          {state.message}
        </p>
        <Link
          href="/"
          className="mt-8 inline-block rounded-full bg-white px-8 py-3 text-sm font-bold text-gray-900 transition hover:bg-white/80"
        >
          홈으로 돌아가기
        </Link>
      </main>
    );
  }

  const { data } = state;
  const orderIdShort = data.orderId.slice(0, 8);

  return (
    <main className="flex-1 bg-[#1a1a1a]">
      <div className="mx-auto max-w-md px-4 pb-12 pt-20">
        <div className="flex flex-col items-center text-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-amber-300/15 text-3xl">
            ✅
          </div>
          <h1 className="mt-4 text-2xl font-extrabold text-white">
            결제가 <span className="text-amber-300">완료</span>되었습니다
          </h1>
          <p className="mt-3 text-sm leading-relaxed text-[#a3a3a3]">
            결제 완료 후 영업일 1~2일 이내
            <br />
            PDF 파일로 발송됩니다.
          </p>
        </div>

        <div className="mt-8 rounded-2xl bg-[#222222] p-5">
          <h2 className="mb-3 text-base font-bold text-amber-300">결제 정보</h2>
          <dl className="grid grid-cols-[auto_1fr] gap-x-3 gap-y-2 text-sm">
            <dt className="text-[#6b6b6b]">주문 번호</dt>
            <dd className="break-all font-mono text-xs text-[#a3a3a3]">
              {orderIdShort}...
            </dd>
            {data.method && (
              <>
                <dt className="text-[#6b6b6b]">결제 수단</dt>
                <dd className="text-white">{data.method}</dd>
              </>
            )}
            {data.approvedAt && (
              <>
                <dt className="text-[#6b6b6b]">승인 일시</dt>
                <dd className="text-white">
                  {new Date(data.approvedAt).toLocaleString("ko-KR")}
                </dd>
              </>
            )}
          </dl>
        </div>

        <div className="mt-3 rounded-2xl bg-[#282828] px-5 py-4 text-xs text-[#a3a3a3]">
          <p>※ 입력하신 이메일로 결제 영수증과 PDF 파일이 발송됩니다.</p>
          <p className="mt-1">
            ※ 영업일 기준 1~2일 이내 발송 (주말·공휴일 제외)
          </p>
        </div>

        <div className="mt-8 flex flex-col gap-3">
          {data.receiptUrl && (
            <a
              href={data.receiptUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-[#3a3a3a] bg-[#222222] py-3 text-center text-sm font-medium text-white transition hover:bg-[#2e2e2e]"
            >
              영수증 보기
            </a>
          )}
          <Link
            href="/"
            className="rounded-full bg-amber-300 py-3 text-center text-sm font-bold text-[#1a1a1a] transition hover:bg-amber-200"
          >
            홈으로 돌아가기
          </Link>
        </div>
      </div>
    </main>
  );
}
