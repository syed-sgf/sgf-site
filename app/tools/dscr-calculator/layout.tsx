import type { Metadata } from "next";
import type { ReactNode } from "react";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata({
  title: "DSCR Calculator — Debt Service Coverage Ratio",
  description:
    "Calculate your debt service coverage ratio (DSCR) for commercial real estate and rental property loans. Free tool with lender benchmarks and qualification thresholds.",
  path: "/tools/dscr-calculator",
});

export default function DSCRCalculatorLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
