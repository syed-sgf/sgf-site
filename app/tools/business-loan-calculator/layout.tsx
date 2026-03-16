import type { Metadata } from "next";
import type { ReactNode } from "react";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Business Loan Calculator — Monthly Payment & Amortization",
  description:
    "Estimate monthly payments and total interest on SBA 7(a), term loans, and commercial financing. Free amortization calculator with full payment schedule for business owners.",
  path: "/tools/business-loan-calculator",
});

export default function BusinessLoanCalculatorLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
