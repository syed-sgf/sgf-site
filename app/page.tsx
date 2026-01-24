import Link from "next/link";
import type { ReactNode } from "react";

export const metadata = {
  title: "Starting Gate Financial | Business Financing Built for Real-World Growth",
  description:
    "SBA loans, commercial real estate financing, business LOC & term loans, equipment financing, DSCR and MCA planning tools—structured for real businesses and real underwriting.",
};

/* -------------------------
   Google Reviews Data
-------------------------- */
const reviews = [
  { name: "Michael R.", text: "Guided us through SBA financing with clarity and speed.", rating: 5 },
  { name: "Ayesha K.", text: "Professional, transparent, and extremely knowledgeable.", rating: 5 },
  { name: "Carlos M.", text: "Structured our deal properly and saved months of time.", rating: 5 },
  { name: "David S.", text: "Best experience securing growth capital for our business.", rating: 5 },
];

export default function HomePage() {
  return (
    <main className="flex flex-col">

      {/* HERO */}
      <section className="bg-slate-50 border-b">
        <div className="max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-12">
          <div>
            <p className="text-sm uppercase tracking-wide text-emerald-700 font-semibold mb-3">
              Funding Built for Business Owners Who Need Clarity
            </p>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Business Financing Designed to Match How You Actually Operate
            </h1>
            <p className="mt-6 text-lg text-slate-600 max-w-xl">
              SBA loans, CRE financing, business lines of credit, equipment financing,
              and growth capital—structured around your timeline and lender reality.
            </p>
            <div className="mt-8 flex gap-4">
              <Link href="/apply" className="bg-emerald-700 text-white px-6 py-3 rounded-md font-semibold">
                Get Pre-Qualified
              </Link>
              <Link href="/financing-options" className="border px-6 py-3 rounded-md font-semibold">
                Explore Financing Options
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* GOOGLE REVIEWS */}
      <section className="border-b py-12 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-xl font-semibold mb-6">
            Trusted by Business Owners Nationwide
          </h2>
          <div className="flex gap-6 animate-review-marquee hover:[animation-play-state:paused]">
            {reviews.concat(reviews).map((r, i) => (
              <div key={i} className="min-w-[320px] border rounded-lg p-4 bg-slate-50">
                <div className="text-amber-400 mb-2">★★★★★</div>
                <p className="text-sm">{r.text}</p>
                <p className="mt-2 text-xs text-slate-500">{r.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINANCING OPTIONS */}
      <Section title="Financing Options">
        <Grid>
          <Card title="Business LOC & Term Loans" href="/financing-options/business-loc-term-loans" />
          <Card title="Commercial Real Estate Financing" href="/financing-options/commercial-real-estate" />
          <Card title="SBA Financing" href="/financing-options/sba-financing" />
          <Card title="Equipment Financing" href="/financing-options/equipment-financing" />
          <Card title="Fix & Flip Loans" href="/financing-options/fix-and-flip-loans" />
          <Card title="Rental Loans (DSCR)" href="/financing-options/dscr-rental-loans" />
        </Grid>
      </Section>

      {/* INDUSTRIES */}
      <Section title="Industries We Serve">
        <Grid>
          <Card title="Construction" href="/industries/construction" />
          <Card title="Restaurants & Food" href="/industries/restaurants" />
          <Card title="Healthcare" href="/industries/healthcare" />
          <Card title="Retail & E-Commerce" href="/industries/retail-ecommerce" />
          <Card title="Trucking & Transportation" href="/industries/transportation" />
          <Card title="Oil & Gas Services" href="/industries/oil-and-gas" />
        </Grid>
      </Section>

      {/* TOOLS */}
      <Section title="Financial Tools">
        <Grid>
          <Card title="Business Loan Calculator" href="/tools/business-loan-calculator" />
          <Card title="DSCR Calculator" href="/tools/dscr-calculator" />
          <Card title="MCA Calculator" href="/tools/mca-calculator" />
        </Grid>
      </Section>

      {/* PARTNERS */}
      <Section title="Partners">
        <p className="text-center text-slate-600">
          Built for referral partners, advisors, and strategic relationships.
        </p>
        <div className="text-center mt-6">
          <Link href="/partners" className="bg-emerald-700 text-white px-6 py-3 rounded-md font-semibold">
            Become a Partner
          </Link>
        </div>
      </Section>

    </main>
  );
}

/* -------------------------
   Shared Components
-------------------------- */

function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-10">{title}</h2>
        {children}
      </div>
    </section>
  );
}

function Grid({ children }: { children: ReactNode }) {
  return <div className="grid gap-6 md:grid-cols-3">{children}</div>;
}

function Card({ title, href }: { title: string; href: string }) {
  return (
    <Link href={href} className="border rounded-lg p-6 hover:shadow-md transition">
      <h3 className="font-semibold">{title}</h3>
    </Link>
  );
}

