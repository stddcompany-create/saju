import Link from "next/link";

export default function ProductHeader() {
  return (
    <header className="absolute left-0 right-0 top-0 z-20 flex items-center justify-between px-4 py-3">
      <Link
        href="/"
        className="font-[family-name:var(--font-deogon)] text-2xl text-white drop-shadow-lg"
      >
        영사주
      </Link>
      <Link
        href="/login"
        className="text-white drop-shadow-lg"
        aria-label="로그인"
      >
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
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
          <circle cx="12" cy="7" r="4" />
        </svg>
      </Link>
    </header>
  );
}
