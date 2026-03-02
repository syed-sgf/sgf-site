import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Planning Tools | Starting Gate Financial",
  description:
    "Deterministic calculators for business loans, DSCR, merchant cash advances, and FICA tip credits. Built for clarity — not assumptions.",
};

const calculators = [
  {
    href: "/tools/business-loan-calculator",
    title: "Business Loan Calculator",
    subtitle: "Amortization & payment planner",
    description:
      "Enter your loan amount, interest rate, and term to calculate your exact monthly payment, total interest paid, and total cost of capital.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" className="w-7 h-7">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M7 8h10M7 12h6M7 16h4" />
      </svg>
    ),
  },
  {
    href: "/tools/dscr-calculator",
    title: "DSCR Calculator",
    subtitle: "Debt service coverage ratio",
    description:
      "Calculate the debt service coverage ratio for a property using annual NOI and debt service. Includes a color-coded eligibility indicator.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" className="w-7 h-7">
        <path d="M3 17l4-8 4 5 3-4 4 7" />
        <path d="M3 21h18" />
      </svg>
    ),
  },
  {
    href: "/tools/mca-calculator",
    title: "MCA Planning Tool",
    subtitle: "Merchant cash advance true cost",
    description:
      "Model an MCA advance: enter the advance amount, factor rate, and daily sales volume to see total payback, cost of capital, and repayment timeline.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" className="w-7 h-7">
        <circle cx="12" cy="12" r="9" />
        <path d="M12 6v6l4 2" />
      </svg>
    ),
  },
  {
    href: "/tools/fica-tip-calculator",
    title: "FICA Tip Credit Calculator",
    subtitle: "IRC § 45B employer tax credit",
    description:
      "Calculate the employer FICA tip credit available on tipped employee wages. Useful for restaurants, hospitality, and food & beverage operators.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" className="w-7 h-7">
        <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6L12 2z" />
      </svg>
    ),
  },
];

export default function ToolsHubPage() {
  return (
    <main className="bg-white text-slate-900">

      {/* Page Hero */}
      <section className="border-b py-20">
        <div className="max-w-5xl mx-auto px-6">
          <p className="text-sm uppercase tracking-widest text-[var(--sgf-green-500)] font-semibold mb-4">
            Planning Tools
          </p>
          <h1 className="font-serif text-5xl font-semibold leading-tight">
            Calculators & Planning Tools
          </h1>
          <p className="mt-5 text-lg text-slate-600 max-w-2xl">
            Deterministic calculators built for clarity — not assumptions. Use
            these tools to model your financing before you apply.
          </p>
        </div>
      </section>

      {/* Calculator Cards */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-6">
          {calculators.map((calc) => (
            <Link
              key={calc.href}
              href={calc.href}
              className="group flex gap-6 items-start border border-slate-200 rounded-xl p-8 hover:border-[var(--sgf-green-500)] hover:shadow-md transition-all duration-200"
            >
              <div className="shrink-0 w-12 h-12 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-500 group-hover:bg-[var(--sgf-green-500)] group-hover:border-[var(--sgf-green-500)] group-hover:text-white transition-all">
                {calc.icon}
              </div>
              <div>
                <h2 className="font-serif text-xl font-semibold group-hover:text-[var(--sgf-green-500)] transition-colors">
                  {calc.title}
                </h2>
                <p className="mt-1 text-sm text-slate-500">{calc.subtitle}</p>
                <p className="mt-3 text-sm text-slate-700">{calc.description}</p>
                <p className="mt-4 text-sm font-semibold text-[var(--sgf-green-500)] group-hover:underline underline-offset-4">
                  Open calculator →
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

    </main>
  );
}
