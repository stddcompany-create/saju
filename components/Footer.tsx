import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-gray-200 bg-white px-4 py-6 text-sm text-gray-500">
      <div>
        <div className="flex gap-3">
          <Link href="/terms" className="hover:text-gray-700">
            이용약관
          </Link>
          <span>|</span>
          <Link href="/privacy" className="hover:text-gray-700">
            개인정보처리방침
          </Link>
          <span>|</span>
          <Link href="/payment-policy" className="hover:text-gray-700">
            결제정책
          </Link>
        </div>
        <div className="mt-4 space-y-1 text-xs text-gray-400">
          <p>상호명: 연인당 | 대표: 홍길동</p>
          <p>사업자등록번호: 000-00-00000</p>
          <p>주소: 서울특별시 강남구</p>
          <p>이메일: contact@yeonindang.com</p>
          <p className="mt-2">&copy; 2026 연인당. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
