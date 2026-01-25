import Link from "next/link";
import Image from "next/image";
import type { ReactNode } from "react";

export const metadata = {
  title: "Starting Gate Financial | Business Financing, Structured",
  description:
    "SBA loans, commercial real estate financing, and business capital structured the way lenders expect.",
};

export default function HomePage() {
  return (
    <main className="bg-white text-slate-900">

      {/* =========================
          HEADER
      ========================== */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="font-semibold tracking-tight">
            Starting Gate Financial
          </Link>

          <nav className="hidden md:flex gap-8 text-sm font-semibold text-slate-600">
            <Link href="/financing-options">Financing</Link>
            <Link href="/industries">Industries</Link>
            <Link href="/tools">Tools</Link>
            <Link href="/technology">Technology</Link>
            <Link href="/partners">Partners</Link>
          </nav>

          <Link
            href="/apply"
            className="bg-emerald-700 text-white px-5 py-2 font-semibold"
          >
            Pre-Qualify
          </Link>
        </div>
      </header>

      {/* =========================
          HERO
      ========================== */}
      <section className="border-b">
        <div className="max-w-7xl mx-auto px-6 py-32 grid md:grid-cols-12 gap-16 items-center">
          <div className="md:col-span-7">
            <h1 className="text-5xl md:text-6xl font-semibold tracking-tight leading-[1.05]">
              Business Financing,
              <br />
              <span className="text-slate-600 font-normal">
                Structured the Way Lenders Expect
              </span>
            </h1>

            <p className="mt-6 text-lg text-slate-600 max-w-xl">
              We help business owners navigate SBA loans, commercial real estate,
              and growth capital with discipline, clarity, and lender-aligned structure.
            </p>

            <div className="mt-10 flex gap-8 items-center">
              <Link
                href="/apply"
                className="bg-emerald-700 text-white px-7 py-3 font-semibold"
              >
                Start Pre-Qualification
              </Link>
              <Link
                href="/financing-options"
                className="font-semibold text-slate-700 underline underline-offset-4"
              >
                Explore Financing Options
              </Link>
            </div>
          </div>

          <div className="md:col-span-5">
            <div className="aspect-[4/3] bg-slate-100 rounded-lg border flex items-center justify-center text-slate-400 font-semibold">
              Hero Image
            </div>
          </div>
        </div>
      </section>

      {/* =========================
          TRUST BAR (we refine later)
      ========================== */}
      <section className="py-8 border-b">
        <div className="max-w-7xl mx-auto px-6 flex justify-between text-sm text-slate-500 uppercase tracking-wide">
          <span>Trusted by Business Owners Nationwide</span>
          <span className="normal-case tracking-normal font-semibold">
            ★★★★★ Google Reviews
          </span>
        </div>
      </section>

      {/* =========================
          THREE CORE PILLARS
      ========================== */}
      <section className="py-32">
        <div className="max-w-6xl mx-auto px-6 space-y-28">

          <Pillar
            title="Business & Working Capital"
            desc="Flexible capital solutions designed around cash flow, timing,
                  and operational realities."
            items={[
              "Business Lines of Credit",
              "Term Loans",
              "Accounts Receivable Financing",
              "Equipment Financing",
            ]}
          />

          {/* Anchored middle pillar */}
          <div className="bg-slate-50 py-24 px-14 rounded-xl">
            <div className="pl-8 border-l-4 border-emerald-700">
              <Pillar
                title="Commercial & Investment Real Estate"
                desc="Acquisition, refinance, construction, and DSCR-based financing
                      for income-producing properties."
                items={[
                  "Commercial Real Estate Loans",
                  "DSCR Rental Loans",
                  "Fix & Flip Financing",
                ]}
              />
            </div>
          </div>

          <Pillar
            title="SBA & Structured Financing"
            desc="Long-term capital for qualified owner-operated businesses
                  requiring disciplined underwriting."
            items={[
              "SBA 7(a)",
              "SBA 504",
              "Franchise Financing",
              "Startup Financing",
            ]}
          />

        </div>
      </section>

      {/* =========================
          INDUSTRIES
      ========================== */}
      <section className="py-28 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-xl font-semibold mb-12">Industries We Serve</h2>

          <div className="grid md:grid-cols-3 gap-12">
            <Industry label="Construction" />
            <Industry label="Restaurants & Food" />
            <Industry label="Healthcare" />
            <Industry label="Oil & Gas Services" />
            <Industry label="Transportation" />
            <Industry label="Professional Services" />
          </div>
        </div>
      </section>

      {/* =========================
          TECHNOLOGY
      ========================== */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-12 gap-16 items-center">
          <div className="md:col-span-5">
            <div className="aspect-[4/3] bg-slate-100 rounded-lg border flex items-center justify-center text-slate-400 font-semibold">
              Technology Image
            </div>
          </div>

          <div className="md:col-span-7">
            <h2 className="text-3xl font-semibold">
              Technology That Supports Better Outcomes
            </h2>

            <p className="mt-6 text-slate-600 max-w-xl">
              Our internal technology accelerates intake and routing
              without replacing underwriting judgment.
            </p>

            <div className="mt-6 space-y-3 text-slate-700">
              <p>
                <strong>Acquirely</strong> — Structured deal intake and screening
              </p>
              <p>
                <strong>SGF GPT</strong> — Educational funding guidance, not approvals
              </p>
            </div>

            <Link
              href="/technology"
              className="inline-block mt-6 font-semibold underline underline-offset-4"
            >
              View SGF Technology
            </Link>
          </div>
        </div>
      </section>

      {/* =========================
          TOOLS + PROCESS (FIXED)
      ========================== */}
      <section className="py-28 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20">

          <div>
            <h3 className="text-xl font-semibold">Planning Tools</h3>
            <p className="mt-3 text-slate-600 max-w-md">
              Deterministic calculators built for clarity—not assumptions.
            </p>

            <div className="mt-6 flex gap-10 flex-wrap font-semibold text-slate-700">
              <Link href="/tools/business-loan-calculator" className="underline underline-offset-4">
                Business Loan Calculator
              </Link>
              <Link href="/tools/dscr-calculator" className="underline underline-offset-4">
                DSCR Calculator
              </Link>
              <Link href="/tools/mca-calculator" className="underline underline-offset-4">
                MCA Planning Tool
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold">How It Works</h3>
            <ol className="mt-6 space-y-4 text-slate-700">
              <li><strong>1.</strong> Explore financing paths by program or industry</li>
              <li><strong>2.</strong> Complete a short pre-qualification</li>
              <li><strong>3.</strong> Execute lender-aligned next steps</li>
            </ol>
          </div>

        </div>
      </section>

      {/* =========================
          FOOTER / PARTNERS
      ========================== */}
      <footer className="py-32 bg-slate-900 text-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold">
            Built for Advisors, Operators, and Strategic Partners
          </h2>
          <p className="mt-6 text-slate-300 max-w-xl mx-auto">
            Structured alignment. Clean execution. Long-term relationships.
          </p>
          <Link
            href="/partners"
            className="inline-block mt-10 border border-white px-8 py-3 font-semibold"
          >
            Become a Partner
          </Link>
        </div>
      </footer>

    </main>
  );
}

/* =========================
   Helper Components
========================= */

function Pillar({
  title,
  desc,
  items,
}: {
  title: string;
  desc: string;
  items: string[];
}) {
  return (
    <div>
      <h2 className="text-3xl font-semibold">{title}</h2>
      <p className="mt-6 text-slate-600 max-w-[52ch]">{desc}</p>
      <ul className="mt-8 space-y-2 text-slate-700 font-medium">
        {items.map((item) => (
          <li key={item}>— {item}</li>
        ))}
      </ul>
    </div>
  );
}

function Industry({ label }: { label: string }) {
  return (
    <div>
      <div className="aspect-[16/10] bg-slate-200 rounded-md mb-4" />
      <p className="font-semibold">{label}</p>
    </div>
  );
}
