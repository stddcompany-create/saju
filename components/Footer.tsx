"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const HIDE_FOOTER_PATHS = ["/test"];

const businessInfo: { label: string; value: string }[] = [
  { label: "상호명", value: "그릿" },
  { label: "대표자", value: "이재민" },
  { label: "사업자등록번호", value: "231-15-02173" },
  { label: "통신판매업 신고번호", value: "2022-고양일산동-2720" },
  { label: "주소", value: "경기도 고양시 일산서구 산현로 17번길 7-8, 1층 102호 q33호(탄현동, 아트다운)" },
  { label: "이메일", value: "youngsaju@gmail.com" },
  { label: "전화", value: "010-2889-0744" },
];

export default function Footer() {
  const pathname = usePathname();
  const shouldHide = HIDE_FOOTER_PATHS.some((p) => pathname.startsWith(p));
  if (shouldHide) return null;

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
        &copy; 2026 그릿. All rights reserved.
      </p>
    </footer>
  );
}
