import { Suspense } from "react";
import PaymentSuccessClient from "./PaymentSuccessClient";

export const metadata = {
  title: "결제 완료 | 영사주",
};

export default function PaymentSuccessPage() {
  return (
    <Suspense
      fallback={
        <main className="flex flex-1 flex-col items-center justify-center bg-[#1a1a1a] px-4 py-20">
          <div className="h-12 w-12 animate-spin rounded-full border-4 border-[#2e2e2e] border-t-white" />
          <p className="mt-4 text-sm text-[#a3a3a3]">
            결제를 승인하고 있습니다
          </p>
        </main>
      }
    >
      <PaymentSuccessClient />
    </Suspense>
  );
}
