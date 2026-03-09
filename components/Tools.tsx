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
    <section className="py-20 bg-white border-b border-slate-100">
      <div className="max-w-5xl mx-auto px-6">

        <div className="text-center mb-12">
          <p className="text-xs tracking-widest uppercase font-semibold mb-3" style={{ color: "#CE9562" }}>
            Planning Tools
          </p>
          <h2
            className="font-serif text-3xl md:text-4xl font-bold text-slate-900 mb-4"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Model Your Financing Before You Apply
          </h2>
          <p className="text-base text-slate-500 max-w-xl mx-auto">
            Deterministic calculators built for clarity — not assumptions.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-px bg-slate-200">
          {tools.map(({ label, desc, href }) => (
            <Link
              key={href}
              href={href}
              className="group flex flex-col justify-between p-6 bg-white hover:bg-slate-50 transition-colors duration-150 min-h-[120px]"
            >
              <div>
                <p className="text-sm font-semibold text-slate-900 group-hover:text-[#118241] transition-colors leading-snug">
                  {label}
                </p>
                <p className="mt-1.5 text-xs text-slate-500">{desc}</p>
              </div>
              <p className="mt-5 text-xs font-semibold text-[#118241]">
                Open →
              </p>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
