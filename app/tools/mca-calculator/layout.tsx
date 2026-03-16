import type { Metadata } from "next";
import type { ReactNode } from "react";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata({
  title: "MCA Calculator — True Cost of Merchant Cash Advance",
  description:
    "Calculate the true cost of a merchant cash advance: factor rate, APR equivalent, and daily payment. Understand total repayment before you sign — includes Texas cost-of-credit disclosure.",
  path: "/tools/mca-calculator",
});

export default function MCACalculatorLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
