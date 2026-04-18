import Link from "next/link";

const businessInfo: { label: string; value: string }[] = [
  { label: "상호명", value: "연인당" },
  { label: "대표자", value: "박보람" },
  { label: "사업자등록번호", value: "646-24-01626" },
  { label: "주소", value: "경기도 김포시 김포한강9로 95, 3층 303-612호(구래동)" },
  { label: "이메일", value: "yeonindang@gmail.com" },
  { label: "전화", value: "070-7954-9161" },
];

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-gray-200 bg-white px-4 py-6 text-sm text-gray-500">
      <nav
        aria-label="약관 및 정책"
        className="flex flex-wrap items-center gap-x-3 gap-y-2"
      >
        <Link href="/terms" className="hover:text-gray-700">
          이용약관
        </Link>
        <span className="text-gray-300" aria-hidden="true">
          |
        </span>
        <Link href="/privacy" className="hover:text-gray-700">
          개인정보처리방침
        </Link>
      </nav>

      <dl className="mt-4 grid grid-cols-[auto_1fr] gap-x-3 gap-y-1 text-xs text-gray-500">
        {businessInfo.map(({ label, value }) => (
          <div key={label} className="contents">
            <dt className="text-gray-400">{label}</dt>
            <dd className="break-keep">
              {label === "이메일" ? (
                <a
                  href={`mailto:${value}`}
                  className="hover:text-gray-700"
                >
                  {value}
                </a>
              ) : label === "전화" ? (
                <a href={`tel:${value.replace(/-/g, "")}`} className="hover:text-gray-700">
                  {value}
                </a>
              ) : (
                value
              )}
            </dd>
          </div>
        ))}
      </dl>

      <p className="mt-4 border-t border-gray-100 pt-3 text-xs text-gray-400">
        &copy; 2026 연인당. All rights reserved.
      </p>
    </footer>
  );
}
