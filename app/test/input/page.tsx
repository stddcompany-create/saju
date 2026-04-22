"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import ProductHeader from "@/components/ProductHeader";

// ─── 유효성 검사 ────────────────────────────────────────────
const BIRTHDATE_PATTERN = /^\d{4}\.\d{2}\.\d{2}$/;

function validateBirthdate(value: string): string | null {
  if (!value.trim()) return "생년월일을 입력하세요";
  if (!BIRTHDATE_PATTERN.test(value))
    return "YYYY.MM.DD 형식으로 입력하세요 (예: 1991.01.01)";

  const [year, month, day] = value.split(".").map(Number);
  if (year < 1900 || year > 2100) return "올바른 연도를 입력하세요";
  if (month < 1 || month > 12) return "월은 1~12 사이여야 합니다";
  if (day < 1 || day > 31) return "일은 1~31 사이여야 합니다";

  return null;
}

function validateName(value: string): string | null {
  if (!value.trim()) return "이름을 입력하세요";
  if (value.trim().length > 4) return "이름은 최대 4글자입니다";
  return null;
}

// ─── 시간 옵션 ────────────────────────────────────────────
const TIME_OPTIONS = [
  { label: "태어난 시간", value: "" },
  { label: "시간 모름", value: "99" },
  { label: "조자/朝子 (00:00~01:29)", value: "00" },
  { label: "축/丑 (01:30~03:29)", value: "02" },
  { label: "인/寅 (03:30~05:29)", value: "04" },
  { label: "묘/卯 (05:30~07:29)", value: "06" },
  { label: "진/辰 (07:30~09:29)", value: "08" },
  { label: "사/巳 (09:30~11:29)", value: "10" },
  { label: "오/午 (11:30~13:29)", value: "12" },
  { label: "미/未 (13:30~15:29)", value: "14" },
  { label: "신/申 (15:30~17:29)", value: "16" },
  { label: "유/酉 (17:30~19:29)", value: "18" },
  { label: "술/戌 (19:30~21:29)", value: "20" },
  { label: "해/亥 (21:30~23:29)", value: "22" },
  { label: "야자/夜子 (23:30~23:59)", value: "24" },
];

// ─── 메인 컴포넌트 ────────────────────────────────────────
export default function InputPage() {
  const router = useRouter();

  // 입력값 상태
  const [name, setName] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [calendarType, setCalendarType] = useState<"solar" | "lunar">("solar");
  const [birthTime, setBirthTime] = useState("");
  const [gender, setGender] = useState<"male" | "female" | null>(null);

  // 검증 관련 상태
  const [submitted, setSubmitted] = useState(false);
  const [nameError, setNameError] = useState<string | null>(null);
  const [birthdateError, setBirthdateError] = useState<string | null>(null);

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setName(val);
    if (submitted) setNameError(validateName(val));
  };

  const formatBirthdate = (input: string): string => {
    // 숫자만 추출 (최대 8자리: YYYYMMDD)
    const digits = input.replace(/\D/g, "").slice(0, 8);

    if (digits.length <= 4) return digits;
    if (digits.length <= 6)
      return `${digits.slice(0, 4)}.${digits.slice(4)}`;
    return `${digits.slice(0, 4)}.${digits.slice(4, 6)}.${digits.slice(6)}`;
  };

  const handleBirthdateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatBirthdate(e.target.value);
    setBirthdate(formatted);
    if (submitted) setBirthdateError(validateBirthdate(formatted));
  };

  const handleTimeUnknown = () => {
    setBirthTime((prev) => (prev === "99" ? "" : "99"));
  };

  const isBirthdateValid = validateBirthdate(birthdate) === null;
  const isNameValid = validateName(name) === null;
  const isTimeSelected = birthTime !== "";
  const isGenderSelected = gender !== null;
  const canSubmit =
    isNameValid && isBirthdateValid && isTimeSelected && isGenderSelected;

  const handleSubmit = () => {
    setSubmitted(true);
    const nErr = validateName(name);
    const bErr = validateBirthdate(birthdate);
    setNameError(nErr);
    setBirthdateError(bErr);

    if (!canSubmit) return;

    console.log({ name, birthdate, calendarType, birthTime, gender });
    router.push("/jonghap");
  };

  return (
    <main className="flex-1">
      <section
        className="relative flex min-h-svh flex-col overflow-hidden"
        style={{
          backgroundImage: "url('/images/test-input-webtoon.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* 어두운 오버레이 */}
        <div className="absolute inset-0 bg-black/85" />

        {/* 상단 로고 + 로그인 */}
        <ProductHeader />

        {/* 폼 영역 */}
        <div className="relative z-10 flex flex-1 flex-col justify-end space-y-6 px-6 pb-6 pt-20">
          {/* 이름 */}
          <div>
            <label className="mb-2 block text-sm font-semibold text-white">
              이름
            </label>
            <input
              type="text"
              placeholder="이름을 입력해 주세요. (최대 4글자)"
              value={name}
              onChange={handleNameChange}
              maxLength={4}
              className={`w-full border-b bg-transparent py-2 text-sm text-white placeholder-gray-500 outline-none ${
                nameError ? "border-red-500" : "border-gray-600"
              }`}
            />
            {nameError && (
              <p className="mt-1 text-xs text-red-500">{nameError}</p>
            )}
          </div>

          {/* 생년월일 */}
          <div>
            <div className="mb-2 flex items-center justify-between">
              <label className="text-sm font-semibold text-white">
                생년월일
              </label>
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => setCalendarType("solar")}
                  className="flex items-center gap-1 text-sm"
                >
                  <span
                    className={`flex h-4 w-4 items-center justify-center rounded-full border-2 ${
                      calendarType === "solar"
                        ? "border-white bg-white"
                        : "border-gray-500 bg-transparent"
                    }`}
                  >
                    {calendarType === "solar" && (
                      <span className="h-2 w-2 rounded-full bg-black" />
                    )}
                  </span>
                  <span
                    className={
                      calendarType === "solar" ? "text-white" : "text-gray-500"
                    }
                  >
                    양력
                  </span>
                </button>
                <button
                  type="button"
                  onClick={() => setCalendarType("lunar")}
                  className="flex items-center gap-1 text-sm"
                >
                  <span
                    className={`flex h-4 w-4 items-center justify-center rounded-full border-2 ${
                      calendarType === "lunar"
                        ? "border-white bg-white"
                        : "border-gray-500 bg-transparent"
                    }`}
                  >
                    {calendarType === "lunar" && (
                      <span className="h-2 w-2 rounded-full bg-black" />
                    )}
                  </span>
                  <span
                    className={
                      calendarType === "lunar" ? "text-white" : "text-gray-500"
                    }
                  >
                    음력
                  </span>
                </button>
              </div>
            </div>

            <input
              type="text"
              inputMode="numeric"
              placeholder="예: 19911004 → 1991.10.04"
              value={birthdate}
              onChange={handleBirthdateChange}
              maxLength={10}
              className={`w-full border-b bg-transparent py-2 text-sm text-white placeholder-gray-500 outline-none ${
                birthdateError ? "border-red-500" : "border-gray-600"
              }`}
            />
            {birthdateError && (
              <p className="mt-1 text-xs text-red-500">{birthdateError}</p>
            )}
          </div>

          {/* 태어난 시간 */}
          <div>
            <div className="mb-2 flex items-center justify-between">
              <label className="text-sm font-semibold text-white">
                태어난 시간
              </label>
              <button
                type="button"
                onClick={handleTimeUnknown}
                className="flex items-center gap-1 text-sm"
              >
                <span
                  className={`flex h-4 w-4 items-center justify-center rounded-full border-2 ${
                    birthTime === "99"
                      ? "border-white bg-white"
                      : "border-gray-500 bg-transparent"
                  }`}
                >
                  {birthTime === "99" && (
                    <span className="h-2 w-2 rounded-full bg-black" />
                  )}
                </span>
                <span
                  className={birthTime === "99" ? "text-white" : "text-gray-500"}
                >
                  시간 모름
                </span>
              </button>
            </div>

            <div className="relative">
              <select
                value={birthTime}
                onChange={(e) => setBirthTime(e.target.value)}
                className="w-full appearance-none border-b border-gray-600 bg-transparent py-2 text-sm text-white outline-none [&>option]:bg-gray-900 [&>option]:text-white"
              >
                {TIME_OPTIONS.map((opt) => (
                  <option
                    key={opt.value}
                    value={opt.value}
                    disabled={opt.value === ""}
                    className="bg-gray-900"
                  >
                    {opt.label}
                  </option>
                ))}
              </select>
              <span className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 text-gray-400">
                ▾
              </span>
            </div>
          </div>

          {/* 성별 */}
          <div>
            <label className="mb-3 block text-sm font-semibold text-white">
              성별
            </label>
            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => setGender("male")}
                className={`rounded-xl border py-3 text-sm font-medium transition-colors ${
                  gender === "male"
                    ? "border-white bg-white/10 text-white"
                    : "border-gray-700 text-gray-400"
                }`}
              >
                남성
              </button>
              <button
                type="button"
                onClick={() => setGender("female")}
                className={`rounded-xl border py-3 text-sm font-medium transition-colors ${
                  gender === "female"
                    ? "border-white bg-white/10 text-white"
                    : "border-gray-700 text-gray-400"
                }`}
              >
                여성
              </button>
            </div>
          </div>

          {/* 하단 버튼 */}
          <div className="flex gap-3 pt-2">
            <Link
              href="/test/greeting"
              className="flex items-center justify-center rounded-xl border border-gray-600 px-5 py-4 text-sm font-medium text-white"
            >
              이전
            </Link>
            <button
              type="button"
              onClick={handleSubmit}
              disabled={!canSubmit}
              className={`flex-1 rounded-xl py-4 text-sm font-semibold transition-all ${
                canSubmit
                  ? "cursor-pointer bg-[#FF6F0F] text-white hover:bg-[#E65F00]"
                  : "cursor-not-allowed bg-gray-700 text-gray-400"
              }`}
            >
              다 입력했어!
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
