"use client";

import { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import { createClient } from "@/lib/supabase/client";
import type { User } from "@supabase/supabase-js";

const HIDE_NAVBAR_PATHS = ["/jonghap", "/sinnyeon", "/test"];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const pathname = usePathname();
  const router = useRouter();
  const isHome = pathname === "/";
  const supabase = createClient();

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
          <Link href="/" className="text-xl font-bold text-gray-900">
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
          className="text-2xl text-gray-700 focus:outline-none"
          aria-label={menuOpen ? "메뉴 닫기" : "메뉴 열기"}
        >
          {menuOpen ? "×" : "☰"}
        </button>
      </div>

      {/* 메뉴 영역만 오버레이 */}
      {menuOpen && (
        <div className="absolute left-0 right-0 top-full z-50 border border-gray-100 bg-white">
          <div className="px-4 py-2">
            <Link
              href="/"
              className="block py-3 text-gray-800 hover:text-gray-900"
              onClick={closeMenu}
            >
              홈
            </Link>
            <Link
              href="/jonghap"
              className="block py-3 text-gray-800 hover:text-gray-900"
              onClick={closeMenu}
            >
              평생사주
            </Link>
            <Link
              href="/sinnyeon"
              className="block py-3 text-gray-800 hover:text-gray-900"
              onClick={closeMenu}
            >
              2026년 신년운세
            </Link>

            <hr className="my-2 border-gray-200" />

            {user ? (
              <button
                onClick={handleLogout}
                className="block w-full py-3 text-left text-gray-800 hover:text-gray-900"
              >
                로그아웃 ({user.user_metadata?.name || "사용자"})
              </button>
            ) : (
              <Link
                href="/login"
                className="block py-3 font-semibold text-blue-600 hover:text-blue-800"
                onClick={closeMenu}
              >
                로그인
              </Link>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
