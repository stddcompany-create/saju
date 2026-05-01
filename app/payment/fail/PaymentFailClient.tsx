"use client";

import { useSearchParams } from "next/navigation";
import Link from "next/link";

const ERROR_MESSAGES: Record<string, string> = {
  PAY_PROCESS_CANCELED: "결제가 취소되었습니다.",
  PAY_PROCESS_ABORTED: "결제 진행 중 오류가 발생했습니다.",
  REJECT_CARD_COMPANY:
    "카드사에서 승인을 거절했습니다. 다른 카드를 이용해주세요.",
  INVALID_CARD_EXPIRATION: "카드 유효기간이 잘못되었습니다.",
  INVALID_STOPPED_CARD: "정지된 카드입니다.",
  EXCEED_MAX_DAILY_PAYMENT_COUNT: "일일 결제 한도를 초과했습니다.",
  NOT_SUPPORTED_INSTALLMENT_PLAN: "지원하지 않는 할부 개월 수입니다.",
  INVALID_REQUEST: "잘못된 요청입니다.",
};

export default function PaymentFailClient() {
  const searchParams = useSearchParams();
  const code = searchParams.get("code");
  const message = searchParams.get("message");
  const orderId = searchParams.get("orderId");

  const displayMessage =
    (code && ERROR_MESSAGES[code]) ?? message ?? "결제에 실패했습니다.";

  return (
    <main className="flex-1 bg-[#1a1a1a] min-h-screen flex items-center justify-center">
      <div className="mx-auto max-w-md px-4 pb-12 pt-20">
        <div className="flex flex-col items-center text-center">
          <div className="flex h-16 w-16 items-center justify-center text-2xl">
            ❌
          </div>
          <h1 className="mt-4 text-2xl font-extrabold text-white">
            결제에 실패했습니다
          </h1>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-[#a3a3a3]">
            {displayMessage}
          </p>
        </div>

        {(code || orderId) && (
          <div className="mt-8 rounded-2xl bg-[#222222] p-5">
            <h2 className="mb-3 text-base font-bold text-white">오류 정보</h2>
            <dl className="grid grid-cols-[auto_1fr] gap-x-3 gap-y-2 text-xs">
              {code && (
                <>
                  <dt className="text-[#6b6b6b]">오류 코드</dt>
                  <dd className="font-mono text-[#a3a3a3]">{code}</dd>
                </>
              )}
              {orderId && (
                <>
                  <dt className="text-[#6b6b6b]">주문 번호</dt>
                  <dd className="break-all font-mono text-[#a3a3a3]">
                    {orderId}
                  </dd>
                </>
              )}
            </dl>
          </div>
        )}

        <div className="mt-3 rounded-2xl bg-[#282828] px-5 py-4 text-xs text-[#a3a3a3]">
          <p>※ 결제가 정상 처리되지 않았다면 청구되지 않으니 안심하세요.</p>
          <p className="mt-1">
            ※ 문제가 지속되면{" "}
            <a
              href="mailto:yeongsaju@gmail.com"
              className="text-white hover:underline"
            >
              yeongsaju@gmail.com
            </a>
            으로 문의해주세요.
          </p>
        </div>

        <div className="mt-8 flex flex-col gap-3">
          <button
            onClick={() => window.history.back()}
            className="rounded-full bg-amber-300 py-3 text-center text-sm font-bold text-[#1a1a1a] transition hover:opacity-80"
          >
            다시 시도하기
          </button>
          <Link
            href="/"
            className="rounded-full border border-[#3a3a3a] bg-[#222222] py-3 text-center text-sm font-medium text-white transition hover:bg-[#2e2e2e]"
          >
            홈으로 가기
          </Link>
        </div>
      </div>
    </main>
  );
}
