import type { Metadata } from "next";
import type { ReactNode } from "react";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata({
  title: "MCA Calculator — Free Merchant Cash Advance & Loan Calculator",
  description:
    "Free MCA calculator. Enter your advance amount and factor rate to see total repayment, APR equivalent, and daily payment. Know the true cost before you sign any merchant cash advance.",
  path: "/tools/mca-calculator",
});

export default function MCACalculatorLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
