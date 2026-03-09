import Link from "next/link";

const tools = [
  {
    label: "Business Loan Calculator",
    desc:  "Monthly payment & amortization",
    href:  "/tools/business-loan-calculator",
  },
  {
    label: "DSCR Calculator",
    desc:  "Debt service coverage ratio",
    href:  "/tools/dscr-calculator",
  },
  {
    label: "MCA Planning Tool",
    desc:  "True cost of capital",
    href:  "/tools/mca-calculator",
  },
  {
    label: "FICA Tip Credit",
    desc:  "IRC § 45B employer credit",
    href:  "/tools/fica-tip-calculator",
  },
];

export default function Tools() {
  return (
    <section className="py-16 bg-white border-t border-slate-100">
      <div className="max-w-5xl mx-auto px-6">

        {/* Centered heading */}
        <div className="text-center mb-14 max-w-2xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-[#CE9562] font-semibold mb-3 text-center">
            Planning Tools
          </p>
          <h2 className="font-serif text-4xl font-semibold text-slate-900 text-center">
            Model Your Financing Before You Apply
          </h2>
          <p className="mt-4 text-slate-600 mx-auto text-center">
            Deterministic calculators built for clarity — not assumptions.
          </p>
        </div>

        {/* 4-card grid — bank-style ruled grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-2">
          {tools.map(({ label, desc, href }) => (
            <Link
              key={href}
              href={href}
              className="group border border-slate-200 p-6 hover:shadow-[inset_3px_0_0_#2E7D32] hover:bg-slate-50 transition-all duration-150"
            >
              <p className="text-sm font-semibold text-slate-900 group-hover:text-[var(--sgf-green-500)] transition-colors">
                {label}
              </p>
              <p className="mt-1 text-xs text-slate-500">{desc}</p>
              <p className="mt-5 text-xs font-semibold text-[var(--sgf-green-500)]">
                Open →
              </p>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
