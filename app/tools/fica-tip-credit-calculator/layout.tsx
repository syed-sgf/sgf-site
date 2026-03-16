import type { Metadata } from "next";
import type { ReactNode } from "react";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata({
  title: "FICA Tip Credit Calculator — §45B Tax Credit Estimator",
  description:
    "Estimate your §45B FICA tip credit for restaurant and food service businesses. Calculate eligible wages, annual credit amount, and three-year recovery projections.",
  path: "/tools/fica-tip-credit-calculator",
});

export default function FICATipCreditLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
