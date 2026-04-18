"use client";

import { useState } from "react";
import Link from "next/link";

const years = Array.from({ length: 100 }, (_, i) => 2026 - i);
const months = Array.from({ length: 12 }, (_, i) => i + 1);
const days = Array.from({ length: 31 }, (_, i) => i + 1);
const hours = Array.from({ length: 24 }, (_, i) => i);
const minutes = Array.from({ length: 60 }, (_, i) => i);

interface SajuFormProps {
  productId: string;
  price: number;
}

export default function SajuForm({ productId, price }: SajuFormProps) {
  const [gender, setGender] = useState<"남" | "여">("남");
  const [calendarType, setCalendarType] = useState("양력");
  const [year, setYear] = useState(1985);
  const [month, setMonth] = useState(1);
  const [day, setDay] = useState(1);
  const [birthHour, setBirthHour] = useState<number | null>(null);
  const [birthMinute, setBirthMinute] = useState<number | null>(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [agreeAll, setAgreeAll] = useState(false);
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [agreePrivacy, setAgreePrivacy] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  function handleAgreeAll() {
    const next = !agreeAll;
    setAgreeAll(next);
    setAgreeTerms(next);
    setAgreePrivacy(next);
  }

  async function handleSubmit() {
    if (!name.trim()) {
      alert("이름을 입력해주세요.");
      return;
    }
    if (!email.trim() || !email.includes("@")) {
      alert("올바른 이메일 주소를 입력해주세요.");
      return;
    }
    if (!agreeTerms || !agreePrivacy) {
      alert("필수 동의 항목에 모두 동의해주세요.");
      return;
    }

    setIsSubmitting(true);

    try {
      const res = await fetch("/api/orders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          productId,
          name: name.trim(),
          email: email.trim(),
          calendarType,
          birthYear: year,
          birthMonth: month,
          birthDay: day,
          birthHour,
          birthMinute,
          gender,
          agreeTerms,
          agreePrivacy,
        }),
      });

      if (!res.ok) {
        const data = (await res.json().catch(() => null)) as {
          error?: string;
        } | null;
        alert(data?.error ?? "주문 중 오류가 발생했습니다. 다시 시도해주세요.");
        return;
      }

      alert("주문이 완료되었습니다! 결제 기능은 추후 연동 예정입니다.");
    } catch (err) {
      alert("주문 중 오류가 발생했습니다. 다시 시도해주세요.");
      console.error("Order error:", err);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="space-y-6">
      {/* 주문자 정보 */}
      <div className="rounded-lg border border-gray-200 bg-white p-4">
        <h3 className="mb-4 text-lg font-bold text-red-500">주문자 정보</h3>
        <div className="mb-4">
          <p className="mb-2 text-sm text-gray-600">이름</p>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="이름을 입력하세요"
            className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm"
          />
        </div>
        <div>
          <p className="mb-2 text-sm text-gray-600">이메일</p>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="이메일을 입력하세요"
            className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm"
          />
        </div>
      </div>

      {/* 사주 정보 입력 */}
      <div className="rounded-lg border border-gray-200 bg-white p-4">
        <h3 className="mb-4 text-lg font-bold text-red-500">사주 정보</h3>

        {/* 성별 */}
        <div className="mb-4">
          <p className="mb-2 text-sm text-gray-600">성별</p>
          <div className="flex gap-2">
            <button
              onClick={() => setGender("남")}
              className={`rounded-lg border px-6 py-2 text-sm font-medium transition ${
                gender === "남"
                  ? "border-gray-900 bg-gray-900 text-white"
                  : "border-gray-300 bg-white text-gray-700 hover:bg-gray-50"
              }`}
            >
              남자
            </button>
            <button
              onClick={() => setGender("여")}
              className={`rounded-lg border px-6 py-2 text-sm font-medium transition ${
                gender === "여"
                  ? "border-gray-900 bg-gray-900 text-white"
                  : "border-gray-300 bg-white text-gray-700 hover:bg-gray-50"
              }`}
            >
              여자
            </button>
          </div>
        </div>

        {/* 생년월일 */}
        <div className="mb-4">
          <p className="mb-2 text-sm text-gray-600">생년월일</p>
          <div className="flex gap-2">
            <select
              value={calendarType}
              onChange={(e) => setCalendarType(e.target.value)}
              className="rounded-lg border border-gray-300 px-3 py-2 text-sm"
            >
              <option>양력</option>
              <option>음력</option>
            </select>
            <select
              value={year}
              onChange={(e) => setYear(Number(e.target.value))}
              className="rounded-lg border border-gray-300 px-3 py-2 text-sm"
            >
              {years.map((y) => (
                <option key={y} value={y}>
                  {y}년
                </option>
              ))}
            </select>
            <select
              value={month}
              onChange={(e) => setMonth(Number(e.target.value))}
              className="rounded-lg border border-gray-300 px-3 py-2 text-sm"
            >
              {months.map((m) => (
                <option key={m} value={m}>
                  {m}월
                </option>
              ))}
            </select>
            <select
              value={day}
              onChange={(e) => setDay(Number(e.target.value))}
              className="rounded-lg border border-gray-300 px-3 py-2 text-sm"
            >
              {days.map((d) => (
                <option key={d} value={d}>
                  {d}일
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* 태어난 시간 */}
        <div>
          <p className="mb-2 text-sm text-gray-600">
            태어난 시간 (모르면 비워두세요)
          </p>
          <div className="flex gap-2">
            <select
              value={birthHour ?? ""}
              onChange={(e) =>
                setBirthHour(
                  e.target.value === "" ? null : Number(e.target.value),
                )
              }
              className="rounded-lg border border-gray-300 px-3 py-2 text-sm"
            >
              <option value="">시</option>
              {hours.map((h) => (
                <option key={h} value={h}>
                  {h}시
                </option>
              ))}
            </select>
            <select
              value={birthMinute ?? ""}
              onChange={(e) =>
                setBirthMinute(
                  e.target.value === "" ? null : Number(e.target.value),
                )
              }
              className="rounded-lg border border-gray-300 px-3 py-2 text-sm"
            >
              <option value="">분</option>
              {minutes.map((m) => (
                <option key={m} value={m}>
                  {m}분
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* 동의 항목 */}
      <div className="space-y-3">
        <label className="flex cursor-pointer items-center gap-2 text-sm text-gray-700">
          <input
            type="checkbox"
            checked={agreeAll}
            onChange={handleAgreeAll}
            className="h-4 w-4 rounded border-gray-300"
          />
          전체동의
        </label>
        <hr className="border-gray-200" />
        <div className="flex items-center justify-between text-sm text-gray-600">
          <label className="flex cursor-pointer items-center gap-2">
            <input
              type="checkbox"
              checked={agreeTerms}
              onChange={(e) => {
                setAgreeTerms(e.target.checked);
                if (!e.target.checked) setAgreeAll(false);
                if (e.target.checked && agreePrivacy) setAgreeAll(true);
              }}
              className="h-4 w-4 rounded border-gray-300"
            />
            서비스 이용 약관에 동의(필수)
          </label>
          <Link
            href="/terms"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-gray-700"
            aria-label="이용약관 전문 보기 (새 창)"
          >
            &gt;
          </Link>
        </div>
        <div className="flex items-center justify-between text-sm text-gray-600">
          <label className="flex cursor-pointer items-center gap-2">
            <input
              type="checkbox"
              checked={agreePrivacy}
              onChange={(e) => {
                setAgreePrivacy(e.target.checked);
                if (!e.target.checked) setAgreeAll(false);
                if (e.target.checked && agreeTerms) setAgreeAll(true);
              }}
              className="h-4 w-4 rounded border-gray-300"
            />
            개인정보 수집 및 이용동의(필수)
          </label>
          <Link
            href="/privacy"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-gray-700"
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
        className="w-full rounded-lg bg-gray-900 py-4 text-lg font-bold text-white transition hover:bg-gray-700 disabled:bg-gray-400"
      >
        {isSubmitting
          ? "주문 처리 중..."
          : `${price.toLocaleString()}원 결제하기`}
      </button>

      {/* 안내 사항 */}
      <div className="rounded-lg bg-yellow-50 px-4 py-3 text-xs text-gray-500">
        <p>※ 운세 구매 후 90일 동안 운세를 다시 보실 수 있습니다.</p>
        <p className="mt-1">
          ※ 고객님의 실수로 인하여 결제된 서비스에 대해서는 교환 및 환불이
          불가능해요.
        </p>
      </div>
    </div>
  );
}
