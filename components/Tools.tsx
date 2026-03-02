import Link from "next/link";

const tools = [
  {
    label: "Business Loan Calculator",
    desc: "Monthly payment & total cost",
    href: "/tools/business-loan-calculator",
  },
  {
    label: "DSCR Calculator",
    desc: "Debt service coverage ratio",
    href: "/tools/dscr-calculator",
  },
  {
    label: "MCA Planning Tool",
    desc: "True cost of capital",
    href: "/tools/mca-calculator",
  },
  {
    label: "FICA Tip Credit Calculator",
    desc: "IRC § 45B employer credit",
    href: "/tools/fica-tip-calculator",
  },
];

export default function Tools() {
  return (
    <section className="py-20 border-t">
      <div className="max-w-7xl mx-auto px-6">
        <h3 className="font-serif text-xl font-semibold">Planning Tools</h3>
        <p className="mt-3 text-slate-600 max-w-md">
          Deterministic calculators built for clarity—not assumptions.
        </p>

        <div className="mt-8 grid sm:grid-cols-2 md:grid-cols-4 gap-4">
          {tools.map(({ label, desc, href }) => (
            <Link
              key={href}
              href={href}
              className="group border border-slate-200 rounded-lg p-5 hover:border-[var(--sgf-green-500)] hover:shadow-sm transition-all"
            >
              <p className="font-semibold text-slate-900 group-hover:text-[var(--sgf-green-500)] transition-colors">
                {label}
              </p>
              <p className="mt-1 text-sm text-slate-500">{desc}</p>
              <p className="mt-3 text-sm font-semibold text-[var(--sgf-green-500)] group-hover:underline underline-offset-4">
                Open →
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
