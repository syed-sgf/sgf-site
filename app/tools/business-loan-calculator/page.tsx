// app/tools/business-loan-calculator/page.tsx
// Fixed: breadcrumb (Tools → not Tools Hub →), centered 4-card grid,
//        golden border hover, mobile responsive, full SEO, 4 related program cards

import type { Metadata } from "next";
import BusinessLoanCalculatorClient from "./BusinessLoanCalculatorClient";

/* ─── SEO Metadata ──────────────────────────────────────────────────── */
export const metadata: Metadata = {
  title: "Business Loan Calculator | Estimate Payments & Interest | Starting Gate Financial",
  description:
    "Use our free business loan calculator to estimate monthly payments, total interest, and amortization schedules for SBA 7(a), term loans, and equipment financing. Serving businesses across Texas and the DFW Metroplex.",
  keywords: [
    "business loan calculator",
    "SBA loan payment calculator",
    "commercial loan calculator",
    "monthly payment estimator",
    "amortization schedule",
    "term loan calculator",
    "Starting Gate Financial",
    "DFW business financing",
  ],
  openGraph: {
    title: "Business Loan Calculator — Starting Gate Financial",
    description:
      "Estimate monthly payments and full amortization for any business loan. Built around real underwriting standards.",
    url: "https://startinggatefinancial.com/tools/business-loan-calculator",
    siteName: "Starting Gate Financial",
    type: "website",
    images: [
      {
        url: "https://startinggatefinancial.com/og-business-loan-calculator.jpg",
        width: 1200,
        height: 630,
        alt: "Business Loan Calculator — Starting Gate Financial",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Business Loan Calculator — Starting Gate Financial",
    description:
      "Free calculator to estimate monthly loan payments, total interest, and amortization. No sign-up required.",
  },
  alternates: {
    canonical: "https://startinggatefinancial.com/tools/business-loan-calculator",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

/* ─── Structured Data (JSON-LD) ────────────────────────────────────── */
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Business Loan Calculator",
  description:
    "Estimate monthly payments, total interest, and full amortization schedule for any business term loan.",
  url: "https://startinggatefinancial.com/tools/business-loan-calculator",
  applicationCategory: "FinanceApplication",
  operatingSystem: "Web",
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  provider: {
    "@type": "Organization",
    name: "Starting Gate Financial",
    url: "https://startinggatefinancial.com",
  },
};

/* ─── Related Programs Data ─────────────────────────────────────────── */
const relatedPrograms = [
  {
    label: "SBA 7(a) & 504 Loans",
    href: "/financing-options/sba-loans",
    description: "Government-backed financing for business acquisition, expansion & real estate.",
  },
  {
    label: "Business Lines of Credit & Term Loans",
    href: "/financing-options/business-lines-of-credit",
    description: "Flexible working capital and fixed-term financing for operations and growth.",
  },
  {
    label: "Commercial Real Estate Financing",
    href: "/financing-options/commercial-real-estate",
    description: "Purchase, refinance, or cash-out on owner-occupied and investment properties.",
  },
  {
    label: "Equipment Financing",
    href: "/financing-options/equipment-financing",
    description: "Finance heavy equipment, vehicles, and machinery with terms up to 84 months.",
  },
];

/* ─── Page Component ────────────────────────────────────────────────── */
export default function BusinessLoanCalculatorPage() {
  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ── HERO SECTION ─────────────────────────────────────────────── */}
      <section className="bg-[#f5f1eb] pt-28 pb-16 px-4">
        <div className="max-w-5xl mx-auto">
          {/* Eyebrow */}
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#C9A84C] mb-3">
            Financial Tools
          </p>

          {/* ✅ FIX 1: Correct breadcrumb — "Tools → Business Loan Calculator" */}
          <p className="text-sm text-slate-500 mb-4">
            <a
              href="/tools"
              className="hover:text-[#118241] transition-colors duration-200"
            >
              Tools
            </a>
            {" → Business Loan Calculator"}
          </p>

          {/* Heading */}
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-slate-900 mb-4 leading-tight">
            Business Loan Calculator
          </h1>

          {/* Subheading */}
          <p className="text-lg text-slate-600 max-w-2xl">
            Estimate your monthly payment, total interest, and full amortization schedule
            for any term loan.
          </p>
        </div>
      </section>

      {/* ── CALCULATOR SECTION ───────────────────────────────────────── */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <BusinessLoanCalculatorClient />
        </div>
      </section>

      {/* ── RELATED PROGRAMS SECTION ─────────────────────────────────── */}
      {/* ✅ FIX 2: Centered section  ✅ FIX 3: Golden border on hover  ✅ FIX 6: 4 cards */}
      <section className="bg-[#f5f1eb] py-16 px-4">
        <div className="max-w-5xl mx-auto text-center">
          {/* Eyebrow */}
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#C9A84C] mb-2">
            Related Programs
          </p>

          {/* Section heading */}
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-slate-900 mb-3">
            Financing Programs That Use This Calculator
          </h2>
          <p className="text-slate-600 mb-10 max-w-xl mx-auto text-sm">
            Run your numbers, then explore the program that fits your deal.
          </p>

          {/*
           * ✅ FIX 2: Grid centered with auto margins
           * ✅ FIX 3: Golden border (#C9A84C) on hover
           * ✅ FIX 4: Mobile responsive — 1 col on mobile, 2 on md+
           * ✅ FIX 6: 4 cards
           */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-3xl mx-auto">
            {relatedPrograms.map((program) => (
              <a
                key={program.href}
                href={program.href}
                className="
                  group flex flex-col items-start text-left
                  bg-white rounded-lg p-6
                  border border-[#118241]
                  hover:border-[#C9A84C]
                  shadow-sm hover:shadow-md
                  transition-all duration-200
                "
              >
                <span className="font-semibold text-slate-900 group-hover:text-[#118241] transition-colors duration-200 mb-2 text-base">
                  {program.label}
                </span>
                <span className="text-sm text-slate-500 mb-4 leading-relaxed">
                  {program.description}
                </span>
                <span className="mt-auto text-sm font-medium text-[#118241] group-hover:text-[#C9A84C] transition-colors duration-200">
                  Learn More →
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA SECTION ──────────────────────────────────────────────── */}
      <section className="bg-[#0f172a] py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#C9A84C] mb-3">
            Ready to Review Your Numbers?
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-4">
            Schedule a Consultation
          </h2>
          <p className="text-slate-400 mb-8">
            Bring your estimates. We&apos;ll tell you how lenders will look at them.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="
                inline-block bg-[#C9A84C] hover:bg-[#b8973e]
                text-white font-semibold px-8 py-3 rounded
                transition-colors duration-200
              "
            >
              Schedule a Consultation →
            </a>
            <a
              href="/financing-options"
              className="
                inline-block border border-white/30 hover:border-white
                text-white font-semibold px-8 py-3 rounded
                transition-colors duration-200
              "
            >
              View Financing Programs
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
