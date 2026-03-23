import type { Metadata } from "next";
import type { ReactNode } from "react";

const isProd = process.env.VERCEL_ENV === "production";

export const metadata: Metadata = {
  title: "Business Financing Options | SBA Loans, Equipment, CRE & More | Starting Gate Financial",
  description: "Explore all business financing programs at Starting Gate Financial — SBA 7(a) & 504 loans, equipment financing, commercial real estate, business lines of credit, fix & flip, DSCR rental loans, and more.",
  keywords: [
    "business financing options", "SBA loans", "equipment financing",
    "commercial real estate loans", "business lines of credit", "DSCR loans",
    "fix and flip loans", "merchant cash advance", "accounts receivable financing",
    "startup financing Texas", "Starting Gate Financial",
  ],
  openGraph: {
    title: "Business Financing Options | Starting Gate Financial",
    description: "SBA loans, equipment financing, commercial real estate, DSCR, fix & flip, and more — all in one place.",
    url: "https://startinggatefinancial.com/financing-options",
    siteName: "Starting Gate Financial",
    type: "website",
  },
  alternates: { canonical: "https://startinggatefinancial.com/financing-options" },
  robots: isProd
    ? { index: true, follow: true }
    : { index: false, follow: false },
};

export default function FinancingOptionsLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
