import Link from "next/link";
import Image from "next/image";

type IndustryCard = { label: string; desc: string; image: string };
type ToolCard = { label: string; desc: string; href: string };
type Pillar = { title: string; desc: string; items: string[] };

const PILLARS: Pillar[] = [
  {
    title: "Business & Working Capital",
    desc: "Flexible capital structured around cash-flow timing and operating realities.",
    items: [
      "Business Lines of Credit",
      "Term Loans",
      "Accounts Receivable Financing",
      "Equipment Financing",
    ],
  },
  {
    title: "Commercial & Investment Real Estate",
    desc: "Acquisition, refinance, construction, and DSCR-based financing for income-producing assets.",
    items: ["Commercial Real Estate Loans", "DSCR Rental Loans", "Fix & Flip Financing"],
  },
  {
    title: "SBA & Structured Financing",
    desc: "Long-term capital for qualified owner-operated businesses requiring disciplined underwriting.",
    items: ["SBA 7(a)", "SBA 504", "Franchise Financing", "Startup Financing"],
  },
];

const INDUSTRIES: IndustryCard[] = [
  {
    label: "Construction",
    desc: "Project-based cash flow, equipment-heavy operations, and seasonal working capital needs.",
    image: "/images/industries/construction.jpg",
  },
  {
    label: "Restaurants & Food",
    desc: "Weekly revenue variability, equipment needs, and expansion build-outs.",
    image: "/images/industries/restaurants.jpg",
  },
  {
    label: "Healthcare",
    desc: "Credentialing delays, collections cycles, and growth capex planning.",
    image: "/images/industries/healthcare.jpg",
  },
  {
    label: "Oil & Gas Services",
    desc: "Service operators requiring equipment and working capital aligned to contracts.",
    image: "/images/industries/oil-gas.jpg",
  },
  {
    label: "Transportation",
    desc: "Asset intensity, fuel volatility, and receivables timing across lanes.",
    image: "/images/industries/transportation.jpg",
  },
  {
    label: "Professional Services",
    desc: "Cash-flow underwriting for service operators scaling delivery capacity.",
    image: "/images/industries/professional.jpg",
  },
];

const TOOLS: ToolCard[] = [
  {
    label: "Business Loan Calculator",
    desc: "Estimate monthly payment ranges for term-style financing.",
    href: "/tools/business-loan-calculator",
  },
  {
    label: "DSCR Calculator",
    desc: "Evaluate DSCR using income, expenses, and projected debt service.",
    href: "/tools/dscr-calculator",
  },
  {
    label: "Cash Flow Planning Tool",
    desc: "Quick working-capital planning based on revenue timing and outflows.",
    href: "/tools",
  },
];

export default function HomePage() {
  return (
    <main className="bg-white text-slate-900">
      {/* =========================
          SECTION 2: HERO
      ========================== */}
      <section className="border-b bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-12 gap-14 items-center">
          <div className="md:col-span-7">
            <h1 className="text-5xl md:text-6xl font-semibold tracking-tight leading-[1.05]">
              Capital Solutions
              <br />
              <span className="text-slate-600 font-normal">
                for Established Businesses
              </span>
            </h1>

            <p className="mt-6 text-lg text-slate-600 max-w-xl">
              SBA loans, commercial real estate, and working capital—structured with underwriting discipline, not sales pressure.
            </p>

            <div className="mt-10 flex flex-wrap gap-4 items-center">
              <Link
                href="/apply"
                className="bg-sgf-green-500 hover:bg-sgf-green-600 text-white px-7 py-3 font-semibold rounded-md"
              >
                Start Pre-Qualification
              </Link>

              <Link
                href="/financing-options"
                className="font-semibold text-slate-700 underline underline-offset-4"
              >
                Explore Financing Options
              </Link>

              <span className="text-sm text-slate-500">
                No obligation. No impact to credit.
              </span>
            </div>
          </div>

          <div className="md:col-span-5">
            <div className="rounded-2xl border bg-white shadow-soft overflow-hidden">
              <div className="aspect-[4/3] bg-slate-100 flex items-center justify-center text-slate-400 font-semibold">
                Hero Image
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================
          SECTION 7: TRUST (moved here for flow)
      ========================== */}
      <section className="border-b">
        <div className="max-w-7xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-6 text-sm text-slate-600">
          <div className="flex items-center gap-3">
            <span className="font-semibold text-slate-900">★★★★★</span>
            <span>Google Reviews</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="font-semibold text-slate-900">Nationwide</span>
            <span>Serving business owners across the U.S.</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="font-semibold text-slate-900">Structured</span>
            <span>SBA, CRE, and institutional capital experience</span>
          </div>
        </div>
      </section>

      {/* =========================
          SECTION 3: FINANCING PROGRAMS (designed as cards)
      ========================== */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-end justify-between gap-8">
            <div>
              <h2 className="text-3xl font-semibold tracking-tight">
                Financing Programs Overview
              </h2>
              <p className="mt-3 text-slate-600 max-w-2xl">
                Choose the right structure based on cash flow, collateral, timeline, and documentation readiness.
              </p>
            </div>
            <Link
              href="/financing-options"
              className="hidden md:inline-block font-semibold underline underline-offset-4"
            >
              View all programs
            </Link>
          </div>

          <div className="mt-10 grid lg:grid-cols-3 gap-6">
            {PILLARS.map((p, idx) => (
              <div
                key={p.title}
                className={`rounded-2xl border bg-white p-8 shadow-soft ${
                  idx === 1 ? "ring-1 ring-sgf-green-100" : ""
                }`}
              >
                <h3 className="text-xl font-semibold">{p.title}</h3>
                <p className="mt-3 text-slate-600">{p.desc}</p>

                <ul className="mt-6 space-y-2 text-slate-700 font-medium">
                  {p.items.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="text-sgf-green-600">—</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-7">
                  <Link
                    href="/financing-options"
                    className="font-semibold text-slate-800 hover:underline underline-offset-4"
                  >
                    Explore options →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================
          SECTION 4: INDUSTRIES (with image + description)
      ========================== */}
      <section className="py-20 bg-slate-50 border-y">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-end justify-between gap-8">
            <div>
              <h2 className="text-3xl font-semibold tracking-tight">
                Industries We Serve
              </h2>
              <p className="mt-3 text-slate-600 max-w-2xl">
                Industry operations change cash flow patterns, collateral profile, and lender expectations.
              </p>
            </div>
            <Link
              href="/industries"
              className="hidden md:inline-block font-semibold underline underline-offset-4"
            >
              View all industries
            </Link>
          </div>

          <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {INDUSTRIES.map((i) => (
              <div key={i.label} className="rounded-2xl border bg-white overflow-hidden shadow-soft">
                <div className="relative aspect-[16/10] bg-slate-100">
                  {/* If images don’t exist yet, you’ll just see the bg. Add them later. */}
                  <Image
                    src={i.image}
                    alt={i.label}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <div className="font-semibold text-slate-900">{i.label}</div>
                  <p className="mt-2 text-sm text-slate-600">{i.desc}</p>
                  <div className="mt-4">
                    <Link
                      href="/industries"
                      className="text-sm font-semibold hover:underline underline-offset-4"
                    >
                      Learn more →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <p className="mt-6 text-xs text-slate-500">
            Images are placeholders until you add files under <code>/public/images/industries/</code>.
          </p>
        </div>
      </section>

      {/* =========================
          SECTION 5: TOOLS & CALCULATORS (cards + links)
      ========================== */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-semibold tracking-tight">
            Tools & Calculators
          </h2>
          <p className="mt-3 text-slate-600 max-w-2xl">
            Practical tools to estimate affordability and structure. Estimates only—no approvals.
          </p>

          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {TOOLS.map((t) => (
              <Link
                key={t.label}
                href={t.href}
                className="rounded-2xl border bg-white p-7 shadow-soft hover:bg-slate-50 transition"
              >
                <div className="font-semibold text-slate-900">{t.label}</div>
                <p className="mt-2 text-sm text-slate-600">{t.desc}</p>
                <div className="mt-6 text-sm font-semibold text-slate-800">
                  Open tool →
                </div>
              </Link>
            ))}
          </div>

          <p className="mt-6 text-sm text-slate-500">
            Estimates only. Calculators do not determine eligibility or approval.
          </p>
        </div>
      </section>

      {/* =========================
          SECTION 6: TECHNOLOGY (Acquirely contextual only)
      ========================== */}
      <section className="py-20 border-t">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-6">
            <h2 className="text-3xl font-semibold tracking-tight">
              SGF Technology
            </h2>
            <p className="mt-3 text-slate-600 max-w-xl">
              Our internal technology improves intake, analysis, and routing—without replacing underwriting judgment.
            </p>

            <ul className="mt-6 space-y-3 text-slate-700">
              <li>Structured deal intake and screening</li>
              <li>Cleaner documentation readiness</li>
              <li>More productive lender conversations</li>
            </ul>

            <Link
              href="/technology"
              className="inline-block mt-6 font-semibold underline underline-offset-4"
            >
              View SGF Technology
            </Link>
          </div>

          <div className="md:col-span-6">
            <div className="rounded-2xl border bg-white shadow-soft overflow-hidden">
              <div className="aspect-[16/10] bg-slate-100 flex items-center justify-center text-slate-400 font-semibold">
                Technology Visual
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================
          SECTION 8: PRIMARY CTA
      ========================== */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold">
            Ready to Explore the Right Capital Structure?
          </h2>
          <p className="mt-4 text-slate-300">
            Start with a simple pre-qualification. No obligation. No impact to credit.
          </p>

          <div className="mt-10">
            <Link
              href="/apply"
              className="inline-flex items-center justify-center bg-white text-slate-900 px-8 py-3 font-semibold rounded-md hover:bg-slate-100"
            >
              Start Pre-Qualification
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
