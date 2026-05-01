"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { loadTossPayments, ANONYMOUS } from "@tosspayments/tosspayments-sdk";
import {
  getTimeLabel,
  loadOrderInput,
  toApiPayload,
  type OrderInput,
} from "@/lib/order-input";

interface SajuFormProps {
  productId: string;
  price: number;
}

interface OrderResponse {
  ok: true;
  orderId: string;
  orderName: string;
  amount: number;
  customerName: string;
  customerEmail: string;
}

export default function SajuForm({ productId, price }: SajuFormProps) {
  const router = useRouter();
  const params = useParams<{ category: string }>();
  const category = params.category;

  const [input, setInput] = useState<OrderInput | null>(null);
  const [hydrated, setHydrated] = useState(false);
  const [agreeAll, setAgreeAll] = useState(false);
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [agreePrivacy, setAgreePrivacy] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const stored = loadOrderInput();
    if (!stored) {
      router.replace(`/${category}/input`);
      return;
    }
    setInput(stored);
    setHydrated(true);
  }, [category, router]);

  function handleAgreeAll() {
    const next = !agreeAll;
    setAgreeAll(next);
    setAgreeTerms(next);
    setAgreePrivacy(next);
  }

  async function handleSubmit() {
    if (!input) return;
    if (!agreeTerms || !agreePrivacy) {
      alert("필수 동의 항목에 모두 동의해주세요.");
      return;
    }

    const clientKey = process.env.NEXT_PUBLIC_TOSS_CLIENT_KEY;
    if (!clientKey) {
      alert("결제 시스템 설정 오류입니다. 관리자에게 문의해주세요.");
      console.error("NEXT_PUBLIC_TOSS_CLIENT_KEY is not set");
      return;
    }

    setIsSubmitting(true);

    try {
      // 1. 주문 생성 (DB에 pending 상태로 저장)
      const payload = toApiPayload(input);
      const res = await fetch("/api/orders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          productId,
          ...payload,
          agreeTerms,
          agreePrivacy,
        }),
      });

      if (!res.ok) {
        const data = (await res.json().catch(() => null)) as {
          error?: string;
        } | null;
        alert(data?.error ?? "주문 중 오류가 발생했습니다. 다시 시도해주세요.");
        setIsSubmitting(false);
        return;
      }

      const order = (await res.json()) as OrderResponse;

      // 2. 토스페이먼츠 결제창 호출
      const tossPayments = await loadTossPayments(clientKey);
      const payment = tossPayments.payment({ customerKey: ANONYMOUS });

      await payment.requestPayment({
        method: "CARD",
        amount: { currency: "KRW", value: order.amount },
        orderId: order.orderId,
        orderName: order.orderName,
        customerName: order.customerName,
        customerEmail: order.customerEmail,
        successUrl: `${window.location.origin}/payment/success`,
        failUrl: `${window.location.origin}/payment/fail`,
        card: {
          useEscrow: false,
          flowMode: "DEFAULT",
          useCardPoint: false,
          useAppCardOnly: false,
        },
      });
      // requestPayment는 페이지를 이동시키므로 이후 코드는 실행되지 않음
    } catch (err) {
      console.error("Payment error:", err);
      const errorObj = err as { code?: string; message?: string };
      if (errorObj?.code === "USER_CANCEL") {
        // 사용자가 결제창을 닫은 경우 - 알림 없이 폼 유지
      } else {
        alert(errorObj?.message ?? "결제 진행 중 오류가 발생했습니다.");
      }
      setIsSubmitting(false);
    }
  }

  if (!hydrated || !input) {
    return (
      <div className="rounded-2xl bg-[#222222] p-5 text-center text-sm text-[#a3a3a3]">
        입력 정보를 불러오는 중...
      </div>
    );
  }

  const genderLabel = input.gender === "male" ? "남자" : "여자";
  const calendarLabel = input.calendarType === "solar" ? "양력" : "음력";

  return (
    <div className="space-y-6">
      {/* 입력 정보 요약 */}
      <div className="rounded-2xl bg-[#222222] p-5">
        <div className="mb-3 flex items-center justify-between">
          <h3 className="text-lg font-bold text-white">입력 정보</h3>
          <Link
            href={`/${category}/input`}
            className="text-xs text-[#a3a3a3] underline-offset-2 hover:text-amber-300 hover:underline"
          >
            수정
          </Link>
        </div>
        <dl className="grid grid-cols-[auto_1fr] gap-x-3 gap-y-2 text-sm">
          <dt className="text-[#6b6b6b]">이름</dt>
          <dd className="text-white">{input.name}</dd>
          <dt className="text-[#6b6b6b]">이메일</dt>
          <dd className="break-all text-white">{input.email}</dd>
          <dt className="text-[#6b6b6b]">성별</dt>
          <dd className="text-white">{genderLabel}</dd>
          <dt className="text-[#6b6b6b]">생년월일</dt>
          <dd className="text-white">
            {input.birthdate} ({calendarLabel})
          </dd>
          <dt className="text-[#6b6b6b]">태어난 시간</dt>
          <dd className="text-white">{getTimeLabel(input.birthTime)}</dd>
        </dl>
      </div>

      {/* 동의 항목 */}
      <div className="space-y-3 rounded-2xl bg-[#222222] p-5">
        <label className="flex cursor-pointer items-center gap-2 text-sm font-medium text-white">
          <input
            type="checkbox"
            checked={agreeAll}
            onChange={handleAgreeAll}
            className="h-4 w-4 rounded border-[#3a3a3a] bg-[#1a1a1a] accent-amber-300"
          />
          전체동의
        </label>
        <hr className="border-[#2e2e2e]" />
        <div className="flex items-center justify-between text-sm text-[#a3a3a3]">
          <label className="flex cursor-pointer items-center gap-2">
            <input
              type="checkbox"
              checked={agreeTerms}
              onChange={(e) => {
                setAgreeTerms(e.target.checked);
                if (!e.target.checked) setAgreeAll(false);
                if (e.target.checked && agreePrivacy) setAgreeAll(true);
              }}
              className="h-4 w-4 rounded border-[#3a3a3a] bg-[#1a1a1a] accent-amber-300"
            />
            서비스 이용 약관에 동의(필수)
          </label>
          <Link
            href="/terms"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#6b6b6b] hover:text-white"
            aria-label="이용약관 전문 보기 (새 창)"
          >
            &gt;
          </Link>
        </div>
        <div className="flex items-center justify-between text-sm text-[#a3a3a3]">
          <label className="flex cursor-pointer items-center gap-2">
            <input
              type="checkbox"
              checked={agreePrivacy}
              onChange={(e) => {
                setAgreePrivacy(e.target.checked);
                if (!e.target.checked) setAgreeAll(false);
                if (e.target.checked && agreeTerms) setAgreeAll(true);
              }}
              className="h-4 w-4 rounded border-[#3a3a3a] bg-[#1a1a1a] accent-amber-300"
            />
            개인정보 수집 및 이용동의(필수)
          </label>
          <Link
            href="/privacy"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#6b6b6b] hover:text-white"
            aria-label="개인정보처리방침 보기 (새 창)"
          >
            &gt;
          </Link>
        </div>
      </div>

      {/* 결제 버튼 */}
      <button
        onClick={handleSubmit}
        disabled={isSubmitting}
        className="w-full rounded-full bg-amber-300 py-4 text-base font-bold text-[#1a1a1a] transition hover:opacity-80 disabled:bg-[#3a3a3a] disabled:text-[#6b6b6b]"
      >
        {isSubmitting
          ? "주문 처리 중..."
          : `${price.toLocaleString()}원 결제하기`}
      </button>

      {/* 안내 사항 */}
      <div className="space-y-6">
        <div className="rounded-2xl bg-[#282828] px-5 py-4 text-xs text-[#a3a3a3]">
          <p>※ 결제 완료 후 영업일 1~2일 이내 PDF 파일로 발송됩니다.</p>
          <p className="mt-1">※ 발송 후 7일간 재다운로드가 가능합니다.</p>
        </div>

        <div className="rounded-2xl bg-[#222222] px-5 py-4 text-xs">
          <p className="font-semibold text-white">[환불 안내]</p>

          <p className="mt-2 font-medium text-white">환불 가능</p>
          <ul className="mt-1 list-disc space-y-0.5 pl-5 text-[#a3a3a3]">
            <li>결제일로부터 7일 이내</li>
            <li>결제 후 PDF 미수령 (3영업일 경과)</li>
            <li>회사 귀책으로 콘텐츠 미제공·오류</li>
          </ul>

          <p className="mt-2 font-medium text-white">환불 불가</p>
          <ul className="mt-1 list-disc space-y-0.5 pl-5 text-[#a3a3a3]">
            <li>PDF 열람 또는 다운로드 이후</li>
            <li>단순 변심·해석 불만족</li>
          </ul>

          <p className="mt-3 text-[#6b6b6b]">
            자세한 환불 기준은{" "}
            <Link
              href="/terms#article-7"
              target="_blank"
              className="text-white hover:underline"
            >
              이용약관 제7조
            </Link>
            를 확인해주세요.
          </p>
        </div>
      </div>
    </div>
  );
}
