import { Suspense } from "react";
import PaymentFailClient from "./PaymentFailClient";

export const metadata = {
  title: "결제 실패 | 영사주",
};

export default function PaymentFailPage() {
  return (
    <Suspense
      fallback={
        <main className="mx-auto flex min-h-[60vh] max-w-md flex-col items-center justify-center px-4 py-8">
          <div className="h-12 w-12 animate-spin rounded-full border-4 border-gray-200 border-t-gray-900" />
        </main>
      }
    >
      <PaymentFailClient />
    </Suspense>
  );
}
