import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center bg-[#1a1a1a] px-6 pb-10 text-center min-h-screen">
      <h1 className="mt-4 text-7xl font-extrabold text-white drop-shadow-lg">
        404
      </h1>
      <p className="mt-4 max-w-xs text-sm leading-relaxed text-[#a3a3a3]">
        요청하신 페이지를 찾을 수 없습니다.
        <br />
        주소가 변경되었거나 삭제되었을 수 있습니다.
      </p>
      <Link
        href="/"
        className="mt-8 inline-block rounded-full bg-white px-8 py-3 text-sm font-bold text-gray-900 transition hover:bg-white/80"
      >
        홈으로 돌아가기
      </Link>
    </main>
  );
}
