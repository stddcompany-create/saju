import Link from "next/link";
import ProductHeader from "@/components/ProductHeader";

export default function TestPage() {
  return (
    <main className="flex-1">
      {/* 풀스크린 히어로 */}
      <section
        className="relative flex h-svh flex-col overflow-hidden"
        style={{
          backgroundImage: "url('/images/test-main-webtoon.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* 어두운 오버레이 */}
        <div className="absolute inset-0 bg-black/65" />

        {/* 상단 로고 + 로그인 */}
        <ProductHeader />

        {/* 중앙 타이틀 */}
        <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-6 text-center">
          <h1
            className="text-[30px] font-extrabold leading-normal tracking-[0.02em] text-white"
            style={{
              textShadow:
                "0 2px 4px rgba(0,0,0,0.9), 0 4px 12px rgba(0,0,0,0.8), 0 0 30px rgba(0,0,0,0.5)",
            }}
          >
            <span
              className="text-[#FF6F0F]"
              style={{
                textShadow:
                  "0 2px 4px rgba(0,0,0,0.95), 0 4px 12px rgba(0,0,0,0.85), 0 0 20px rgba(255,111,15,0.4)",
              }}
            >
              3평 철학관 10년
            </span>
            <br />
            지인소개로만
            <br />
            사주를 봐왔습니다
          </h1>
          <p className="mt-6 text-[13px] leading-relaxed text-gray-200 drop-shadow">
            냉정하고 직설적인 사주 분석으로
            <br />
            인생의 나침반이 되어드립니다
          </p>
        </div>

        {/* 하단 CTA 버튼 */}
        <div className="relative z-10 px-4 pb-6">
          <Link
            href="/test/greeting"
            className="block w-full rounded-lg bg-[#FF6F0F] py-4 text-center text-base font-bold text-white transition hover:bg-[#E65F00]"
          >
            내 사주팔자 바로 확인하기
          </Link>
        </div>
      </section>
    </main>
  );
}
