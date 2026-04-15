"use client";

import { createClient } from "@/lib/supabase/client";

export default function LoginPage() {
  const handleKakaoLogin = async () => {
    const supabase = createClient();
    await supabase.auth.signInWithOAuth({
      provider: "kakao",
      options: {
        redirectTo: `${window.location.origin}/auth/callback`,
      },
    });
  };

  return (
    <main className="flex flex-1 flex-col items-center justify-center px-4">
      <div className="w-full max-w-sm text-center">
        <h1 className="text-2xl font-extrabold text-gray-900">로그인</h1>
        <p className="mt-2 text-sm text-gray-500">
          카카오 계정으로 간편하게 시작하세요
        </p>

        <button
          onClick={handleKakaoLogin}
          className="mt-8 flex w-full items-center justify-center gap-2 rounded-lg bg-[#FEE500] px-4 py-3 text-sm font-bold text-[#191919] transition hover:brightness-95"
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M9 0.5C4.029 0.5 0 3.588 0 7.39C0 9.782 1.558 11.879 3.931 13.098L2.933 16.633C2.845 16.947 3.213 17.198 3.483 17.011L7.673 14.207C8.108 14.252 8.55 14.28 9 14.28C13.971 14.28 18 11.192 18 7.39C18 3.588 13.971 0.5 9 0.5Z"
              fill="#191919"
            />
          </svg>
          카카오 로그인
        </button>
      </div>
    </main>
  );
}
