"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const HIDE_FOOTER_PATHS = ["/test"];

const businessInfo: { label: string; value: string }[] = [
  { label: "상호명", value: "그릿" },
  { label: "대표자", value: "이재민" },
  { label: "사업자등록번호", value: "231-15-02173" },
  { label: "통신판매업 신고번호", value: "2022-고양일산동-2720" },
  {
    label: "주소",
    value:
      "경기도 고양시 일산서구 산현로 17번길 7-8, 1층 102호 q33호(탄현동, 아트다운)",
  },
  { label: "이메일", value: "yeongsaju@gmail.com" },
  { label: "전화", value: "010-2889-0744" },
];

export default function Footer() {
  const pathname = usePathname();
  const shouldHide = HIDE_FOOTER_PATHS.some((p) => pathname.startsWith(p));
  if (shouldHide) return null;

  return (
    <footer className="mt-auto border-t border-[#2e2e2e] bg-[#1a1a1a] px-4 py-6 text-sm text-[#a3a3a3]">
      <nav
        aria-label="약관 및 정책"
        className="flex flex-wrap items-center gap-x-3 gap-y-2"
      >
        <Link href="/terms" className="hover:text-white">
          이용약관
        </Link>
        <span className="text-[#3a3a3a]" aria-hidden="true">
          |
        </span>
        <Link href="/privacy" className="hover:text-white">
          개인정보처리방침
        </Link>
      </nav>

      <dl className="mt-4 grid grid-cols-[auto_1fr] gap-x-3 gap-y-1 text-xs text-[#a3a3a3]">
        {businessInfo.map(({ label, value }) => (
          <div key={label} className="contents">
            <dt className="text-[#6b6b6b]">{label}</dt>
            <dd className="break-keep">
              {label === "이메일" ? (
                <a href={`mailto:${value}`} className="hover:text-white">
                  {value}
                </a>
              ) : label === "전화" ? (
                <a
                  href={`tel:${value.replace(/-/g, "")}`}
                  className="hover:text-white"
                >
                  {value}
                </a>
              ) : (
                value
              )}
            </dd>
          </div>
        ))}
      </dl>

      <p className="mt-4 pt-3 text-xs text-[#6b6b6b]">
        &copy; 2026 그릿. All rights reserved.
      </p>
    </footer>
  );
}
