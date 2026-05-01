"use client";

import { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import { createClient } from "@/lib/supabase/client";
import type { User } from "@supabase/supabase-js";

const HIDE_NAVBAR_PATHS = ["/jonghap", "/sinnyeon", "/test"];

interface MenuCategory {
  name: string;
  items: { name: string; href: string }[];
}

const MENU_CATEGORIES: MenuCategory[] = [
  {
    name: "종합사주",
    items: [
      { name: "프리미엄 평생사주", href: "/jonghap" },
      { name: "2026년 신년운세", href: "/sinnyeon" },
    ],
  },
  { name: "연애사주", items: [] },
  { name: "재물사주", items: [] },
  { name: "궁합사주", items: [] },
  { name: "기타", items: [] },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const [expandedCategories, setExpandedCategories] = useState<
    Record<string, boolean>
  >({ 종합사주: true });
  const pathname = usePathname();
  const router = useRouter();
  const isHome = pathname === "/";
  const supabase = createClient();

  const toggleCategory = (name: string) => {
    setExpandedCategories((prev) => ({ ...prev, [name]: !prev[name] }));
  };

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => setUser(data.user));

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    setUser(null);
    setMenuOpen(false);
    router.refresh();
  };

  useEffect(() => {
    if (menuOpen) {
      const original = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = original;
      };
    }
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  const shouldHide = HIDE_NAVBAR_PATHS.some((p) => pathname.startsWith(p));
  if (shouldHide) return null;

  return (
    <nav className="relative bg-white">
      {/* 1줄: 사이트 이름 + 햄버거 */}
      <div className="flex items-center justify-between px-4 py-3">
        {isHome ? (
          <Link
            href="/"
            className="font-(family-name:--font-deogon) text-[25.5px] text-gray-900 [-webkit-text-stroke:0.4px_currentColor]"
          >
            영사주
          </Link>
        ) : (
          <button
            onClick={() => router.back()}
            className="text-gray-700"
            aria-label="뒤로가기"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M19 12H5" />
              <path d="M12 19l-7-7 7-7" />
            </svg>
          </button>
        )}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-gray-900 focus:outline-none"
          aria-label={menuOpen ? "메뉴 닫기" : "메뉴 열기"}
        >
          {menuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="26"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="6" y1="6" x2="18" y2="18" />
              <line x1="6" y1="18" x2="18" y2="6" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="26"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="4" y1="7" x2="20" y2="7" />
              <line x1="4" y1="12" x2="20" y2="12" />
              <line x1="4" y1="17" x2="20" y2="17" />
            </svg>
          )}
        </button>
      </div>

      {/* 메뉴 영역만 오버레이 */}
      {menuOpen && (
        <div className="absolute left-0 right-0 top-full z-50 border-t border-gray-100 bg-white">
          <div className="px-4 py-4">
            {/* 1. 카카오 로그인 박스 */}
            {user ? (
              <div className="flex items-center justify-between rounded-xl bg-gray-100 px-4 py-3">
                <div className="min-w-0">
                  <p className="truncate text-sm font-bold text-gray-900">
                    {user.user_metadata?.name || "사용자"}님 환영합니다
                  </p>
                  <p className="mt-0.5 text-xs text-gray-500">
                    사주정보를 간편히 관리하세요
                  </p>
                </div>
                <button
                  onClick={handleLogout}
                  className="ml-3 shrink-0 rounded-lg bg-gray-200 px-3 py-1.5 text-xs font-medium text-gray-700 hover:bg-gray-300"
                >
                  로그아웃
                </button>
              </div>
            ) : (
              <Link
                href="/login"
                onClick={closeMenu}
                className="block rounded-xl bg-[#FEE500] py-4 text-center text-base font-bold text-gray-900 hover:bg-[#FDD800]"
              >
                카카오톡 간편로그인
              </Link>
            )}

            {/* 2. 리포트 보관함 */}
            <button
              type="button"
              onClick={() => alert("준비 중인 서비스입니다.")}
              className="mt-3 flex w-full items-center gap-3 rounded-lg px-2 py-3 text-left hover:bg-gray-50"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-gray-700"
              >
                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
                <line x1="12" y1="22.08" x2="12" y2="12" />
              </svg>
              <span className="flex-1 text-sm font-medium text-gray-900">
                리포트 보관함
              </span>
              <span className="text-xs text-gray-400">준비 중</span>
            </button>

            <hr className="my-3 border-gray-200" />

            {/* 3. 카테고리 아코디언 */}
            <div>
              {MENU_CATEGORIES.map((cat) => {
                const expanded = expandedCategories[cat.name] ?? false;
                return (
                  <div key={cat.name}>
                    <button
                      type="button"
                      onClick={() => toggleCategory(cat.name)}
                      className="flex w-full items-center justify-between px-2 py-3 text-left"
                      aria-expanded={expanded}
                    >
                      <span className="text-base font-bold text-gray-900">
                        {cat.name}
                      </span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className={`text-gray-500 transition-transform ${
                          expanded ? "rotate-180" : ""
                        }`}
                      >
                        <polyline points="6 9 12 15 18 9" />
                      </svg>
                    </button>
                    {expanded && (
                      <div className="pb-2 pl-4">
                        {cat.items.length > 0 ? (
                          cat.items.map((item) => (
                            <Link
                              key={item.href}
                              href={item.href}
                              onClick={closeMenu}
                              className="block py-2 text-sm text-gray-700 hover:text-gray-900"
                            >
                              ㄴ {item.name}
                            </Link>
                          ))
                        ) : (
                          <p className="py-2 text-sm text-gray-400">
                            준비 중인 서비스입니다
                          </p>
                        )}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
