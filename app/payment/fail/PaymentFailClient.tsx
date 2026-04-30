"use client";

import { useSearchParams } from "next/navigation";
import Link from "next/link";

const ERROR_MESSAGES: Record<string, string> = {
  PAY_PROCESS_CANCELED: "결제가 취소되었습니다.",
  PAY_PROCESS_ABORTED: "결제 진행 중 오류가 발생했습니다.",
  REJECT_CARD_COMPANY: "카드사에서 승인을 거절했습니다. 다른 카드를 이용해주세요.",
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
    <main className="mx-auto max-w-md px-4 py-12">
      <div className="flex flex-col items-center">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-red-100 text-3xl">
          ❌
        </div>
        <h1 className="mt-4 text-2xl font-bold text-gray-900">
          결제에 실패했습니다
        </h1>
        <p className="mt-2 text-center text-sm text-gray-600">
          {displayMessage}
        </p>
      </div>

      {(code || orderId) && (
        <div className="mt-6 rounded-lg border border-gray-200 bg-white p-4">
          <h2 className="mb-2 text-sm font-semibold text-gray-900">오류 정보</h2>
          <dl className="grid grid-cols-[auto_1fr] gap-x-3 gap-y-1 text-xs">
            {code && (
              <>
                <dt className="text-gray-500">오류 코드</dt>
                <dd className="font-mono text-gray-700">{code}</dd>
              </>
            )}
            {orderId && (
              <>
                <dt className="text-gray-500">주문 번호</dt>
                <dd className="break-all font-mono text-gray-700">{orderId}</dd>
              </>
            )}
          </dl>
        </div>
      )}

      <div className="mt-6 rounded-lg bg-yellow-50 px-4 py-3 text-xs text-gray-600">
        <p>
          ※ 결제가 정상 처리되지 않았다면 청구되지 않으니 안심하세요.
        </p>
        <p className="mt-1">
          ※ 문제가 지속되면{" "}
          <a
            href="mailto:yeongsaju@gmail.com"
            className="text-blue-600 hover:underline"
          >
            yeongsaju@gmail.com
          </a>
          으로 문의해주세요.
        </p>
      </div>

      <div className="mt-6 flex flex-col gap-3">
        <button
          onClick={() => window.history.back()}
          className="rounded-lg bg-gray-900 py-3 text-center text-sm font-medium text-white hover:bg-gray-700"
        >
          돌아가서 다시 시도하기
        </button>
        <Link
          href="/"
          className="rounded-lg border border-gray-300 bg-white py-3 text-center text-sm font-medium text-gray-700 hover:bg-gray-50"
        >
          홈으로 가기
        </Link>
      </div>
    </main>
  );
}
