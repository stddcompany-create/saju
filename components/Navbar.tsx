"use client";

import { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import { createClient } from "@/lib/supabase/client";
import type { User } from "@supabase/supabase-js";

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

  return (
    <nav className="bg-white shadow-md">
      {/* 1줄: 사이트 이름 + 햄버거 */}
      <div className="flex items-center justify-between px-4 py-3">
        {isHome ? (
          <Link href="/" className="text-xl font-bold text-gray-900">
            연인당
          </Link>
        ) : (
          <button
            onClick={() => router.back()}
            className="text-2xl text-gray-700"
            aria-label="뒤로가기"
          >
            &#x3C;
          </button>
        )}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-2xl text-gray-700 focus:outline-none"
          aria-label="메뉴 열기"
        >
          ☰
        </button>
      </div>

      {/* 햄버거 메뉴 */}
      {menuOpen && (
        <div className="border-t border-gray-200 px-4 py-2">
          <Link
            href="/"
            className="block py-2 text-gray-700 hover:text-gray-900"
            onClick={() => setMenuOpen(false)}
          >
            홈
          </Link>
          <Link
            href="/jonghap"
            className="block py-2 text-gray-700 hover:text-gray-900"
            onClick={() => setMenuOpen(false)}
          >
            평생사주
          </Link>
          <Link
            href="/sinnyeon"
            className="block py-2 text-gray-700 hover:text-gray-900"
            onClick={() => setMenuOpen(false)}
          >
            2026년 신년운세
          </Link>

          <hr className="my-2 border-gray-200" />

          {user ? (
            <button
              onClick={handleLogout}
              className="block w-full py-2 text-left text-gray-700 hover:text-gray-900"
            >
              로그아웃 ({user.user_metadata?.name || "사용자"})
            </button>
          ) : (
            <Link
              href="/login"
              className="block py-2 text-blue-600 font-semibold hover:text-blue-800"
              onClick={() => setMenuOpen(false)}
            >
              로그인
            </Link>
          )}
        </div>
      )}
    </nav>
  );
}
