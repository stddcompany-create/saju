export const TIME_OPTIONS = [
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
] as const;

export interface OrderInput {
  name: string;
  email: string;
  birthdate: string;
  calendarType: "solar" | "lunar";
  birthTime: string;
  gender: "male" | "female";
}

export interface OrderApiPayload {
  name: string;
  email: string;
  calendarType: "양력" | "음력";
  birthYear: number;
  birthMonth: number;
  birthDay: number;
  birthHour: number | null;
  birthMinute: number | null;
  gender: "남" | "여";
}

export const ORDER_INPUT_STORAGE_KEY = "saju:order-input:v1";

export function saveOrderInput(input: OrderInput): void {
  if (typeof window === "undefined") return;
  sessionStorage.setItem(ORDER_INPUT_STORAGE_KEY, JSON.stringify(input));
}

export function loadOrderInput(): OrderInput | null {
  if (typeof window === "undefined") return null;
  const raw = sessionStorage.getItem(ORDER_INPUT_STORAGE_KEY);
  if (!raw) return null;
  try {
    const parsed: unknown = JSON.parse(raw);
    return isOrderInput(parsed) ? parsed : null;
  } catch {
    return null;
  }
}

export function clearOrderInput(): void {
  if (typeof window === "undefined") return;
  sessionStorage.removeItem(ORDER_INPUT_STORAGE_KEY);
}

function isOrderInput(o: unknown): o is OrderInput {
  if (!o || typeof o !== "object") return false;
  const x = o as Record<string, unknown>;
  return (
    typeof x.name === "string" &&
    typeof x.email === "string" &&
    typeof x.birthdate === "string" &&
    (x.calendarType === "solar" || x.calendarType === "lunar") &&
    typeof x.birthTime === "string" &&
    (x.gender === "male" || x.gender === "female")
  );
}

const TIME_TO_HM: Record<string, { hour: number; minute: number }> = {
  "00": { hour: 0, minute: 45 },
  "02": { hour: 2, minute: 30 },
  "04": { hour: 4, minute: 30 },
  "06": { hour: 6, minute: 30 },
  "08": { hour: 8, minute: 30 },
  "10": { hour: 10, minute: 30 },
  "12": { hour: 12, minute: 30 },
  "14": { hour: 14, minute: 30 },
  "16": { hour: 16, minute: 30 },
  "18": { hour: 18, minute: 30 },
  "20": { hour: 20, minute: 30 },
  "22": { hour: 22, minute: 30 },
  "24": { hour: 23, minute: 45 },
};

export function toApiPayload(input: OrderInput): OrderApiPayload {
  const [year, month, day] = input.birthdate.split(".").map(Number);
  const time = input.birthTime === "99" ? null : TIME_TO_HM[input.birthTime];
  return {
    name: input.name.trim(),
    email: input.email.trim(),
    calendarType: input.calendarType === "solar" ? "양력" : "음력",
    birthYear: year,
    birthMonth: month,
    birthDay: day,
    birthHour: time?.hour ?? null,
    birthMinute: time?.minute ?? null,
    gender: input.gender === "male" ? "남" : "여",
  };
}

export function getTimeLabel(value: string): string {
  return TIME_OPTIONS.find((t) => t.value === value)?.label ?? "-";
}
