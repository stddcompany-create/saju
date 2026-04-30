import { Suspense } from "react";
import PaymentSuccessClient from "./PaymentSuccessClient";

export const metadata = {
  title: "결제 완료 | 영사주",
};

export default function PaymentSuccessPage() {
  return (
    <Suspense
      fallback={
        <main className="mx-auto flex min-h-[60vh] max-w-md flex-col items-center justify-center px-4 py-8">
          <div className="h-12 w-12 animate-spin rounded-full border-4 border-gray-200 border-t-gray-900" />
          <p className="mt-4 text-sm text-gray-600">
            결제를 승인하고 있습니다...
          </p>
        </main>
      }
    >
      <PaymentSuccessClient />
    </Suspense>
  );
}
