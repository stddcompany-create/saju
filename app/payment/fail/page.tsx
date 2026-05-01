import { Suspense } from "react";
import PaymentFailClient from "./PaymentFailClient";

export const metadata = {
  title: "결제 실패 | 영사주",
};

export default function PaymentFailPage() {
  return (
    <Suspense
      fallback={
        <main className="flex flex-1 flex-col items-center justify-center bg-[#1a1a1a] px-4 py-20">
          <div className="h-12 w-12 animate-spin rounded-full border-4 border-[#2e2e2e] border-t-white" />
        </main>
      }
    >
      <PaymentFailClient />
    </Suspense>
  );
}
