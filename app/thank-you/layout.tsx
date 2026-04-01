import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Thank You | Starting Gate Financial",
  robots: { index: false, follow: false },
};

export default function ThankYouLayout({ children }: { children: ReactNode }) {
  return <Suspense>{children}</Suspense>;
}
