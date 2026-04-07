import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center px-4">
      <h1 className="text-4xl font-bold text-gray-900">404</h1>
      <p className="mt-2 text-gray-500">페이지를 찾을 수 없습니다.</p>
      <Link
        href="/"
        className="mt-4 rounded-lg bg-gray-900 px-4 py-2 text-sm text-white hover:bg-gray-700"
      >
        홈으로 돌아가기
      </Link>
    </main>
  );
}
