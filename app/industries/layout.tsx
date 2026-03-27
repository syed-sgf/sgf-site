import type { Metadata } from "next";
import type { ReactNode } from "react";

const isProd = process.env.VERCEL_ENV === "production";

export const metadata: Metadata = {
  title: "Industries We Finance | Construction, Healthcare, Oil & Gas & More | Starting Gate Financial",
  description: "Starting Gate Financial provides specialized business financing for construction, food & beverage, healthcare, oil & gas, and real estate investors. Find the capital solution built for your industry.",
  keywords: [
    "industry financing", "construction financing", "restaurant financing",
    "healthcare practice loans", "oil gas financing", "real estate investor loans",
    "SBA loans by industry", "business loans nationwide", "Starting Gate Financial",
  ],
  openGraph: {
    title: "Industries We Finance | Starting Gate Financial",
    description: "Specialized financing for construction, food & beverage, healthcare, oil & gas, and real estate investors.",
    url: "https://startinggatefinancial.com/industries",
    siteName: "Starting Gate Financial",
    type: "website",
  },
  alternates: { canonical: "https://startinggatefinancial.com/industries" },
  robots: isProd
    ? { index: true, follow: true }
    : { index: false, follow: false },
};

export default function IndustriesLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
