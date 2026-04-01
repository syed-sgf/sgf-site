import type { Metadata } from "next";
import type { ReactNode } from "react";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Business Loan Calculator — Payment, Interest & Amortization",
  description:
    "Free business loan calculator. Enter loan amount, rate, and term to see your monthly payment, total interest, and full amortization schedule. Built for SBA 7(a), term loans, and commercial financing.",
  path: "/tools/business-loan-calculator",
});

export default function BusinessLoanCalculatorLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
