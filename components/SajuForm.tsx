"use client";

import { useState } from "react";

const years = Array.from({ length: 100 }, (_, i) => 2026 - i);
const months = Array.from({ length: 12 }, (_, i) => i + 1);
const days = Array.from({ length: 31 }, (_, i) => i + 1);
const birthTimes = [
  "태어난 시 - 모름",
  "자시 (23:00~01:00)",
  "축시 (01:00~03:00)",
  "인시 (03:00~05:00)",
  "묘시 (05:00~07:00)",
  "진시 (07:00~09:00)",
  "사시 (09:00~11:00)",
  "오시 (11:00~13:00)",
  "미시 (13:00~15:00)",
  "신시 (15:00~17:00)",
  "유시 (17:00~19:00)",
  "술시 (19:00~21:00)",
  "해시 (21:00~23:00)",
];

export default function SajuForm({ productName }: { productName: string }) {
  const [gender, setGender] = useState<"male" | "female">("male");
  const [calendarType, setCalendarType] = useState("양력");
  const [year, setYear] = useState(1985);
  const [month, setMonth] = useState(1);
  const [day, setDay] = useState(1);
  const [birthTime, setBirthTime] = useState(birthTimes[0]);
  const [agreeAll, setAgreeAll] = useState(false);
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [agreePrivacy, setAgreePrivacy] = useState(false);

  function handleAgreeAll() {
    const next = !agreeAll;
    setAgreeAll(next);
    setAgreeTerms(next);
    setAgreePrivacy(next);
  }

  function handleSubmit() {
    if (!agreeTerms || !agreePrivacy) {
      alert("필수 동의 항목에 모두 동의해주세요.");
      return;
    }
    alert("결제 기능은 추후 연동 예정입니다.");
  }

  return (
    <div className="space-y-6">
      {/* 사주 정보 입력 */}
      <div className="rounded-lg border border-gray-200 bg-white p-4">
        <h3 className="mb-4 text-lg font-bold text-red-500">사주 정보</h3>

        {/* 성별 */}
        <div className="mb-4">
          <p className="mb-2 text-sm text-gray-600">성별</p>
          <div className="flex gap-2">
            <button
              onClick={() => setGender("male")}
              className={`rounded-lg border px-6 py-2 text-sm font-medium transition ${
                gender === "male"
                  ? "border-gray-900 bg-gray-900 text-white"
                  : "border-gray-300 bg-white text-gray-700 hover:bg-gray-50"
              }`}
            >
              남자
            </button>
            <button
              onClick={() => setGender("female")}
              className={`rounded-lg border px-6 py-2 text-sm font-medium transition ${
                gender === "female"
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
                  {y} 년
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
          <p className="mb-2 text-sm text-gray-600">태어난 시간</p>
          <select
            value={birthTime}
            onChange={(e) => setBirthTime(e.target.value)}
            className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm"
          >
            {birthTimes.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
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
        <label className="flex cursor-pointer items-center justify-between text-sm text-gray-600">
          <span className="flex items-center gap-2">
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
          </span>
          <span className="text-gray-400">&gt;</span>
        </label>
        <label className="flex cursor-pointer items-center justify-between text-sm text-gray-600">
          <span className="flex items-center gap-2">
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
          </span>
          <span className="text-gray-400">&gt;</span>
        </label>
      </div>

      {/* 결제 버튼 */}
      <button
        onClick={handleSubmit}
        className="w-full rounded-lg bg-gray-900 py-4 text-lg font-bold text-white transition hover:bg-gray-700"
      >
        운세보기
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
