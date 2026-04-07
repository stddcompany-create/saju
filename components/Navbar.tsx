"use client";

import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const isHome = pathname === "/";

  return (
    <nav className="bg-white shadow-md">
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

      {menuOpen && (
        <div className="border-t border-gray-200 px-4 py-2">
          <Link
            href="/"
            className="block py-2 text-gray-700 hover:text-gray-900"
            onClick={() => setMenuOpen(false)}
          >
            홈
          </Link>
        </div>
      )}
    </nav>
  );
}
