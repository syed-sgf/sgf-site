import Link from "next/link";

const steps = [
  {
    num:   "01",
    label: "Explore",
    desc:  "Browse financing paths by program or industry — no commitment required.",
  },
  {
    num:   "02",
    label: "Pre-Qualify",
    desc:  "Complete a short intake. We assess fit and identify the right capital structure.",
  },
  {
    num:   "03",
    label: "Execute",
    desc:  "We place your deal with aligned lenders and guide you through closing.",
  },
];

export default function Process() {
  return (
    <section className="py-24 bg-slate-50 border-t border-slate-100">
      <div className="max-w-5xl mx-auto px-6">

        {/* Centered heading */}
        <div className="text-center mb-16">
          <p className="text-xs uppercase tracking-widest text-[var(--sgf-green-500)] font-semibold mb-3">
            Our Process
          </p>
          <h2 className="font-serif text-4xl font-semibold text-slate-900">
            A Structured Path to Capital
          </h2>
          <p className="mt-4 text-slate-600 max-w-[600px] mx-auto">
            We remove the guesswork from the financing process.
          </p>
        </div>

        {/* 3-column steps */}
        <div className="grid md:grid-cols-3 gap-10 text-center">
          {steps.map(({ num, label, desc }) => (
            <div key={num}>
              <p className="font-serif text-5xl font-semibold text-[var(--sgf-green-500)] leading-none">
                {num}
              </p>
              <p className="mt-5 font-semibold text-slate-900">{label}</p>
              <p className="mt-2 text-sm text-slate-600 max-w-[24ch] mx-auto">{desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link
            href="/apply"
            className="inline-block bg-[var(--sgf-green-500)] hover:bg-[var(--sgf-green-600)] text-white px-10 py-3 font-semibold transition-colors"
          >
            Start Pre-Qualification
          </Link>
        </div>

      </div>
    </section>
  );
}
