import type { Metadata } from "next";
import type { ReactNode } from "react";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Working Capital Calculator — Ratios & Credit Line Sizing",
  description:
    "Calculate your working capital ratio, quick ratio, and line of credit sizing. Free tool for business owners evaluating short-term liquidity and revolving credit needs.",
  path: "/tools/working-capital-calculator",
});

export default function WorkingCapitalCalculatorLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
