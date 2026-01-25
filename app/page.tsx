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
          HERO
      ========================== */}
      <section className="border-b">
        <div className="max-w-7xl mx-auto px-6 py-28 grid md:grid-cols-12 gap-12 items-center">
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

            <div className="mt-10 flex gap-6">
              <Link
                href="/apply"
                className="bg-emerald-700 text-white px-7 py-3 font-semibold"
              >
                Start Pre-Qualification
              </Link>
              <Link
                href="/financing-options"
                className="text-slate-700 font-semibold underline underline-offset-4"
              >
                Explore Financing Options
              </Link>
            </div>
          </div>

          <div className="md:col-span-5">
            <Image
              src="/images/hero-business-owner.jpg"
              alt="Business owner reviewing financial documents"
              width={640}
              height={480}
              priority
              className="rounded-lg shadow-sm"
            />
          </div>
        </div>
      </section>

      {/* =========================
          TRUST
      ========================== */}
      <section className="py-10 border-b">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <p className="text-sm uppercase tracking-wide text-slate-500">
            Trusted by Business Owners Nationwide
          </p>
          <p className="text-sm text-slate-600">★★★★★ Google Reviews</p>
        </div>
      </section>

      {/* =========================
          THREE CORE PILLARS
      ========================== */}
      <section className="py-28">
        <div className="max-w-6xl mx-auto px-6 space-y-24">

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
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-xl font-semibold mb-8">Industries We Serve</h3>

          <div className="grid md:grid-cols-3 gap-10">
            <Industry label="Construction" image="/images/industry-construction.jpg" />
            <Industry label="Restaurants & Food" image="/images/industry-restaurant.jpg" />
            <Industry label="Healthcare" image="/images/industry-healthcare.jpg" />
            <Industry label="Oil & Gas Services" image="/images/industry-oil-gas.jpg" />
            <Industry label="Transportation" image="/images/industry-transportation.jpg" />
            <Industry label="Professional Services" image="/images/industry-professional.jpg" />
          </div>
        </div>
      </section>

      {/* =========================
          TECHNOLOGY
      ========================== */}
      <section className="py-28">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-5">
            <Image
              src="/images/technology-analytics.jpg"
              alt="Financial analytics and intake technology"
              width={560}
              height={420}
              className="rounded-lg shadow-sm"
            />
          </div>

          <div className="md:col-span-7">
            <h2 className="text-3xl font-semibold">
              Technology That Supports Better Outcomes
            </h2>
            <p className="mt-4 text-slate-600 max-w-xl">
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
          TOOLS
      ========================== */}
      <section className="py-16 border-y">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap gap-12 text-slate-700 font-medium">
          <span>Business Loan Calculator</span>
          <span>DSCR Calculator</span>
          <span>MCA Planning Tool</span>
        </div>
      </section>

      {/* =========================
          PROCESS
      ========================== */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 space-y-4 text-slate-700">
          <p>1. Explore financing paths</p>
          <p>2. Complete pre-qualification</p>
          <p>3. Execute lender-aligned next steps</p>
        </div>
      </section>

      {/* =========================
          PARTNERS
      ========================== */}
      <section className="py-28 bg-slate-900 text-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold">
            Built for Advisors, Operators, and Strategic Partners
          </h2>
          <p className="mt-4 text-slate-300">
            Structured alignment. Clean execution. Long-term relationships.
          </p>
          <Link
            href="/partners"
            className="inline-block mt-8 border border-white px-8 py-3 font-semibold"
          >
            Become a Partner
          </Link>
        </div>
      </section>

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
      <p className="mt-4 text-slate-600 max-w-xl">{desc}</p>
      <ul className="mt-6 space-y-2 text-slate-700">
        {items.map((item) => (
          <li key={item}>— {item}</li>
        ))}
      </ul>
    </div>
  );
}

function Industry({ label, image }: { label: string; image: string }) {
  return (
    <div>
      <Image
        src={image}
        alt={`${label} industry`}
        width={400}
        height={260}
        className="rounded-md"
      />
      <p className="mt-3 font-semibold">{label}</p>
    </div>
  );
}
