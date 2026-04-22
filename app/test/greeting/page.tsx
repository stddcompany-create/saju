import Link from "next/link";
import ProductHeader from "@/components/ProductHeader";

export default function GreetingPage() {
  return (
    <main className="flex-1">
      <section
        className="relative flex h-svh flex-col overflow-hidden"
        style={{
          backgroundImage: "url('/images/test-input-webtoon.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* 어두운 오버레이 */}
        <div className="absolute inset-0 bg-black/40" />

        {/* 상단 로고 + 로그인 */}
        <ProductHeader />

        {/* 말풍선 영역 */}
        <div className="relative z-10 mt-20 space-y-3 px-6">
          {/* 말풍선 1 - 왼쪽 */}
          <div className="relative max-w-[75%] rounded-3xl bg-white px-5 py-3 text-sm font-medium text-gray-900 shadow-lg">
            어서오세요
            <span className="absolute -bottom-2 left-6 h-0 w-0 border-x-8 border-t-8 border-x-transparent border-t-white" />
          </div>

          {/* 말풍선 2 - 오른쪽 */}
          <div className="relative ml-auto max-w-[85%] rounded-3xl bg-white px-5 py-3 text-sm font-medium text-gray-900 shadow-lg">
            성함과 생년월일을 알려주세요
            <span className="absolute -bottom-2 right-6 h-0 w-0 border-x-8 border-t-8 border-x-transparent border-t-white" />
          </div>
        </div>

        {/* 중간 공간 (캐릭터 이미지 자리) */}
        <div className="relative z-10 flex flex-1 items-center justify-center" />

        {/* 하단 버튼 (이전 / 다음) */}
        <div className="relative z-10 flex gap-3 px-4 pb-6">
          <Link
            href="/test"
            className="shrink-0 rounded-lg border border-white/80 bg-white/10 px-6 py-4 text-center text-base font-bold text-white backdrop-blur-sm transition hover:bg-white/20"
          >
            이전
          </Link>
          <Link
            href="/test/input"
            className="flex-1 rounded-lg bg-[#FF6F0F] py-4 text-center text-base font-bold text-white transition hover:bg-[#E65F00]"
          >
            좋아, 내 이름은..
          </Link>
        </div>
      </section>
    </main>
  );
}
