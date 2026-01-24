/* =========================================================
   Starting Gate Financial – Homepage
   Route: /
   Architecture: v1.3 (Locked)
   Framework: Next.js App Router
   ========================================================= */

import Link from "next/link";
import type { ReactNode } from "react";

/* -------------------------
   Metadata
-------------------------- */
export const metadata = {
  title:
    "Starting Gate Financial | Business Financing Built for Real-World Growth",
  description:
    "SBA loans, commercial real estate financing, business LOC & term loans, equipment financing, DSCR and MCA planning tools—structured for real businesses and real underwriting.",
};

/* -------------------------
   Page Component
-------------------------- */
export default function HomePage() {
  return (
    <main className="flex flex-col">

      {/* =========================
          HERO
      ========================== */}
      <section className="bg-slate-50 border-b">
        <div className="max-w-7xl mx-auto px-6 py-24 grid gap-12 md:grid-cols-2">
          <div>
            <p className="text-sm uppercase tracking-wide text-emerald-700 font-semibold mb-3">
              Funding Built for Business Owners Who Need Clarity
            </p>

            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
              Business Financing Designed to Match How You Actually Operate
            </h1>

            <p className="mt-6 text-lg text-slate-600 max-w-xl">
              SBA loans, commercial real estate financing, business lines of
              credit, equipment financing, and growth capital—structured around
              your use of funds, timing, and lender requirements.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/apply"
                className="bg-emerald-700 text-white px-6 py-3 rounded-md font-semibold hover:bg-emerald-800 transition"
              >
                Get Pre-Qualified
              </Link>

              <Link
                href="/financing-options"
                className="border border-slate-300 px-6 py-3 rounded-md font-semibold text-slate-800 hover:bg-white transition"
              >
                Explore Financing Options
              </Link>
            </div>

            <ul className="mt-8 space-y-2 text-sm text-slate-600">
              <li>• Structured guidance, not guesswork</li>
              <li>• Lender-ready intake process</li>
              <li>• Industry-aware financing paths</li>
              <li>• No obligation to proceed</li>
            </ul>

            <p className="mt-4 text-xs text-slate-500">
              Financing is subject to underwriting, lender guidelines, and
              eligibility.
            </p>
          </div>

          {/* Right-side quick nav card */}
          <div className="bg-white rounded-xl shadow-sm border p-8">
            <h3 className="text-lg font-semibold text-slate-900 mb-4">
              Start Here
            </h3>

            <nav className="space-y-3 text-sm">
              <QuickLink href="/apply" label="Apply / Pre-Qualification" />
              <QuickLink
                href="/financing-options"
                label="Financing Options"
              />
              <QuickLink href="/industries" label="Industries We Serve" />
              <QuickLink href="/tools" label="Financial Tools" />
              <QuickLink href="/technology" label="SGF Technology" />
            </nav>
          </div>
        </div>
      </section>

      {/* =========================
          FINANCING OPTIONS PREVIEW
      ========================== */}
      <Section
        eyebrow="Financing Options"
        title="Funding Solutions Built Around Your Business Stage"
        intro="Choose the route that matches your plan. Each option below leads to a canonical financing program."
      >
        <CardGrid>
          <ProgramCard
            title="Business LOC & Term Loans"
            desc="Flexible capital for working needs, growth, and operational stability."
            href="/financing-options/business-loc-term-loans"
          />
          <ProgramCard
            title="Commercial Real Estate Financing"
            desc="Acquisition, refinance, construction, and value-add CRE execution."
            href="/financing-options/commercial-real-estate"
          />
          <ProgramCard
            title="SBA Financing"
            desc="Long-term financing for qualified owner-operated businesses."
            href="/financing-options/sba-financing"
          />
          <ProgramCard
            title="Equipment Financing"
            desc="Acquire or refinance equipment without straining cash flow."
            href="/financing-options/equipment-financing"
          />
          <ProgramCard
            title="Fix & Flip Loans"
            desc="Short-term capital for purchase and rehab execution."
            href="/financing-options/fix-and-flip-loans"
          />
          <ProgramCard
            title="Rental Loans (DSCR)"
            desc="Investor financing aligned to property cash flow."
            href="/financing-options/dscr-rental-loans"
          />
          <ProgramCard
            title="Franchise Financing"
            desc="Funding paths built for approved franchise models."
            href="/financing-options/franchise-financing"
          />
          <ProgramCard
            title="Accounts Receivable Financing"
            desc="Unlock cash tied up in outstanding invoices."
            href="/financing-options/accounts-receivable-financing"
          />
          <ProgramCard
            title="Startup Financing"
            desc="Early-stage capital pathways for new ventures."
            href="/financing-options/startup-financing"
          />
          <ProgramCard
            title="Merchant Cash Advance"
            desc="Alternative funding for specific, last-resort situations."
            href="/financing-options/merchant-cash-advance"
          />
        </CardGrid>

        <CenteredCTA href="/financing-options" label="View All Financing Options" />
      </Section>

      {/* =========================
          INDUSTRIES
      ========================== */}
      <Section
        eyebrow="Industries"
        title="Industry-Aware Financing, Not One-Size-Fits-All"
        intro="Industry pages guide you to the right financing paths without duplicating programs."
      >
        <CardGrid>
          <IndustryCard title="Construction" href="/industries/construction" />
          <IndustryCard title="Restaurants & Food" href="/industries/restaurants" />
          <IndustryCard title="Medical & Healthcare" href="/industries/healthcare" />
          <IndustryCard title="Retail & E-Commerce" href="/industries/retail-ecommerce" />
          <IndustryCard title="Trucking & Transportation" href="/industries/transportation" />
          <IndustryCard title="Professional Services" href="/industries/professional-services" />
          <IndustryCard title="Oil & Gas Services" href="/industries/oil-and-gas" />
        </CardGrid>

        <CenteredCTA href="/industries" label="Explore Industries" />
      </Section>

      {/* =========================
          SGF TECHNOLOGY
      ========================== */}
      <Section
        eyebrow="SGF Technology"
        title="Technology That Accelerates Better Funding Outcomes"
        intro="Our technology supports faster screening and cleaner intake—without replacing underwriting."
      >
        <CardGrid columns={2}>
          <InfoCard
            title="Acquirely"
            desc="A standalone acquisition and intake platform used to attract, screen, and route financing opportunities efficiently."
            bullets={[
              "Deal-ready intake structure",
              "Faster internal review and routing",
              "Designed for lender-ready workflows",
            ]}
            href="/technology"
          />

          <InfoCard
            title="SGF GPT – Business Funding Assistant"
            desc="An AI-powered guidance experience trained on SGF programs to help borrowers prepare and understand next steps."
            bullets={[
              "Educational guidance only",
              "Clarifies documents and readiness",
              "Not a calculator or approval system",
            ]}
            href="/technology"
          />
        </CardGrid>
      </Section>

      {/* =========================
          TOOLS
      ========================== */}
      <Section
        eyebrow="Tools"
        title="Practical Financial Tools for Smarter Decisions"
        intro="Deterministic calculators only—built for planning clarity."
      >
        <CardGrid columns={3}>
          <ToolCard
            title="Business Loan Calculator"
            desc="Estimate payment scenarios for SBA and working capital loans."
            href="/tools/business-loan-calculator"
          />
          <ToolCard
            title="DSCR Calculator"
            desc="Evaluate DSCR using rental income and operating expenses."
            href="/tools/dscr-calculator"
          />
          <ToolCard
            title="MCA Calculator"
            desc="Estimate MCA payments, term impact, and total payback."
            href="/tools/mca-calculator"
          />
        </CardGrid>

        <CenteredCTA href="/tools" label="View All Tools" />
      </Section>

      {/* =========================
          PROCESS
      ========================== */}
      <Section
        eyebrow="How It Works"
        title="A Simple Process That Produces Lender-Ready Next Steps"
      >
        <ol className="max-w-4xl mx-auto grid gap-6 md:grid-cols-3 text-center">
          <Step number="1" text="Explore financing by program or industry" />
          <Step number="2" text="Complete a short pre-qualification" />
          <Step number="3" text="Get routed into the best-fit funding path" />
        </ol>

        <div className="mt-10 flex justify-center gap-4">
          <Link href="/apply" className="bg-emerald-700 text-white px-6 py-3 rounded-md font-semibold">
            Start Pre-Qualification
          </Link>
          <Link href="/contact" className="border px-6 py-3 rounded-md font-semibold">
            Contact Us
          </Link>
        </div>
      </Section>

      {/* =========================
          PARTNERS
      ========================== */}
      <Section
        eyebrow="Partners"
        title="Built for Referral and Strategic Partners"
        intro="If you advise business owners or serve operators who need capital, SGF offers structured partner alignment."
      >
        <ul className="max-w-xl mx-auto space-y-2 text-slate-700 text-center">
          <li>• Referral Partners</li>
          <li>• Strategic Partners</li>
          <li>• Program-aligned routing</li>
        </ul>

        <CenteredCTA href="/partners" label="Become a Partner" />
      </Section>

    </main>
  );
}

/* =========================================================
   Reusable Components (Local)
========================================================= */

function Section({
  eyebrow,
  title,
  intro,
  children,
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
  children: ReactNode;
}) {
  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {eyebrow && (
          <p className="text-sm uppercase tracking-wide text-emerald-700 font-semibold mb-2">
            {eyebrow}
          </p>
        )}
        <h2 className="text-3xl font-bold text-slate-900">{title}</h2>
        {intro && <p className="mt-4 text-slate-600 max-w-2xl">{intro}</p>}
        <div className="mt-10">{children}</div>
      </div>
    </section>
  );
}

function CardGrid({
  children,
  columns = 3,
}: {
  children: React.ReactNode;
  columns?: number;
}) {
  return (
    <div
      className={`grid gap-6 ${
        columns === 2
          ? "md:grid-cols-2"
          : columns === 3
          ? "md:grid-cols-3"
          : "md:grid-cols-3"
      }`}
    >
      {children}
    </div>
  );
}

function ProgramCard({ title, desc, href }: any) {
  return (
    <Link href={href} className="block border rounded-lg p-6 hover:shadow-md transition">
      <h3 className="font-semibold text-slate-900">{title}</h3>
      <p className="mt-2 text-sm text-slate-600">{desc}</p>
    </Link>
  );
}

function IndustryCard({ title, href }: any) {
  return (
    <Link href={href} className="block border rounded-lg p-6 text-center hover:shadow-md">
      <h3 className="font-semibold">{title}</h3>
    </Link>
  );
}

function ToolCard({ title, desc, href }: any) {
  return (
    <Link href={href} className="block border rounded-lg p-6 hover:shadow-md">
      <h3 className="font-semibold">{title}</h3>
      <p className="mt-2 text-sm text-slate-600">{desc}</p>
    </Link>
  );
}

function InfoCard({ title, desc, bullets, href }: any) {
  return (
    <div className="border rounded-lg p-6">
      <h3 className="font-semibold text-lg">{title}</h3>
      <p className="mt-2 text-slate-600">{desc}</p>
      <ul className="mt-4 space-y-1 text-sm text-slate-700">
        {bullets.map((b: string) => (
          <li key={b}>• {b}</li>
        ))}
      </ul>
      <Link href={href} className="inline-block mt-4 text-emerald-700 font-semibold">
        Learn more →
      </Link>
    </div>
  );
}

function Step({ number, text }: any) {
  return (
    <li className="border rounded-lg p-6">
      <div className="text-2xl font-bold text-emerald-700 mb-2">{number}</div>
      <p>{text}</p>
    </li>
  );
}

function CenteredCTA({ href, label }: any) {
  return (
    <div className="mt-10 text-center">
      <Link href={href} className="inline-block bg-emerald-700 text-white px-6 py-3 rounded-md font-semibold">
        {label}
      </Link>
    </div>
  );
}

function QuickLink({ href, label }: any) {
  return (
    <Link href={href} className="block border rounded-md px-4 py-2 hover:bg-slate-50">
      {label}
    </Link>
  );
}
