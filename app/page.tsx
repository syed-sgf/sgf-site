import Link from "next/link";
import type { ReactNode } from "react";

export const metadata = {
  title: "Starting Gate Financial | Business Financing Built for Real-World Growth",
  description:
    "SBA loans, commercial real estate financing, business LOC & term loans, equipment financing, DSCR and MCA planning tools—structured for real businesses and real underwriting.",
};

/* =========================
   Google Reviews (placeholder data)
   Replace later with your real reviews.
========================= */
const reviews: Array<{ name: string; text: string; rating: 5 | 4 }> = [
  {
    name: "Michael R.",
    text: "Clear guidance and fast execution. Best SBA support we’ve had.",
    rating: 5,
  },
  {
    name: "Ayesha K.",
    text: "Professional, transparent, and genuinely lender-aware.",
    rating: 5,
  },
  {
    name: "Carlos M.",
    text: "They structured our deal properly and saved us months of back-and-forth.",
    rating: 5,
  },
  {
    name: "David S.",
    text: "Strong process and communication. We knew exactly what was needed.",
    rating: 5,
  },
];

export default function HomePage() {
  return (
    <main className="bg-white text-slate-900">
      {/* =========================
          HERO
      ========================== */}
      <section className="relative overflow-hidden border-b">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(16,185,129,0.18),_transparent_55%),radial-gradient(ellipse_at_bottom,_rgba(34,197,94,0.10),_transparent_60%)]" />
        <div className="relative max-w-7xl mx-auto px-6 py-20 md:py-28">
          <div className="grid gap-12 md:grid-cols-12 items-center">
            <div className="md:col-span-7">
              <div className="inline-flex items-center gap-2 rounded-full border bg-white/70 px-4 py-2 text-sm font-semibold text-emerald-800 backdrop-blur">
                <span className="h-2 w-2 rounded-full bg-emerald-600" />
                Funding built for real underwriting, not hype
              </div>

              <h1 className="mt-6 text-4xl md:text-6xl font-bold tracking-tight leading-[1.05]">
                Business Financing Designed to Match{" "}
                <span className="text-emerald-700">How You Actually Operate</span>
              </h1>

              <p className="mt-6 text-lg md:text-xl text-slate-600 max-w-2xl">
                SBA financing, commercial real estate funding, business lines of credit,
                equipment financing, and growth capital—structured around your use of funds,
                timeline, and lender requirements.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/apply"
                  className="inline-flex items-center justify-center rounded-md bg-emerald-700 px-6 py-3 font-semibold text-white shadow-sm hover:bg-emerald-800 transition"
                >
                  Get Pre-Qualified
                </Link>
                <Link
                  href="/financing-options"
                  className="inline-flex items-center justify-center rounded-md border border-slate-300 bg-white px-6 py-3 font-semibold text-slate-900 hover:bg-slate-50 transition"
                >
                  Explore Financing Options
                </Link>
              </div>

              <div className="mt-8 grid gap-2 text-sm text-slate-600">
                <Bullet>Structured guidance, not guesswork</Bullet>
                <Bullet>Lender-ready intake process</Bullet>
                <Bullet>Industry-aware financing paths</Bullet>
                <Bullet>No obligation to proceed</Bullet>
              </div>

              <p className="mt-4 text-xs text-slate-500">
                Financing is subject to underwriting, lender guidelines, and eligibility.
              </p>
            </div>

            <div className="md:col-span-5">
              <div className="rounded-2xl border bg-white shadow-sm p-6 md:p-8">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-semibold text-slate-900">Start Here</p>
                  <span className="text-xs rounded-full bg-emerald-50 px-2 py-1 font-semibold text-emerald-800">
                    Guided
                  </span>
                </div>

                <div className="mt-5 grid gap-3">
                  <QuickLink href="/apply" label="Apply / Pre-Qualification" />
                  <QuickLink href="/financing-options" label="Financing Options" />
                  <QuickLink href="/industries" label="Industries We Serve" />
                  <QuickLink href="/tools" label="Tools & Calculators" />
                  <QuickLink href="/technology" label="SGF Technology" />
                </div>

                <div className="mt-6 rounded-xl bg-slate-50 p-4 text-sm text-slate-600">
                  <p className="font-semibold text-slate-900">Tip</p>
                  <p className="mt-1">
                    Start with <span className="font-semibold">Pre-Qualification</span> to get a
                    clean, lender-ready path.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================
          GOOGLE REVIEWS MARQUEE
      ========================== */}
      <section className="border-b overflow-hidden bg-white">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="flex items-center justify-between gap-4">
            <h2 className="text-xl md:text-2xl font-bold tracking-tight">
              Trusted by Business Owners Nationwide
            </h2>
            <div className="hidden sm:flex items-center gap-2 text-sm text-slate-500">
              <GoogleIcon />
              Google Reviews
            </div>
          </div>

          <p className="mt-2 text-slate-600 max-w-2xl">
            Social proof matters. Here’s what business owners say about working with SGF.
          </p>

          <div className="mt-8 relative">
            <div className="flex gap-6 animate-review-marquee hover:[animation-play-state:paused]">
              {reviews.concat(reviews).map((r, i) => (
                <ReviewCard key={i} name={r.name} text={r.text} rating={r.rating} />
              ))}
            </div>
          </div>

          <div className="mt-6 text-sm">
            <Link
              href="https://g.page/r/Ce4JN4bjU5HuEAI/review"
              className="inline-flex items-center gap-2 font-semibold text-emerald-800 hover:text-emerald-900"
              target="_blank"
              rel="noreferrer"
            >
              Leave a Google Review <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* =========================
          FINANCING OPTIONS
      ========================== */}
      <Section
        eyebrow="Financing Options"
        title="Funding Solutions Built Around Your Business Stage"
        intro="Each option routes to a canonical program page (no duplicates, no confusion)."
      >
        <Grid>
          <Card
            title="Business LOC & Term Loans"
            desc="Flexible capital for working needs, growth, and operational stability."
            href="/financing-options/business-loc-term-loans"
          />
          <Card
            title="Commercial Real Estate Financing"
            desc="Acquisition, refinance, construction, and value-add CRE execution."
            href="/financing-options/commercial-real-estate"
          />
          <Card
            title="SBA Financing"
            desc="Long-term financing for qualified owner-operated businesses."
            href="/financing-options/sba-financing"
          />
          <Card
            title="Equipment Financing"
            desc="Acquire or refinance equipment without straining cash flow."
            href="/financing-options/equipment-financing"
          />
          <Card
            title="Fix & Flip Loans"
            desc="Short-term capital for purchase and rehab execution."
            href="/financing-options/fix-and-flip-loans"
          />
          <Card
            title="Rental Loans (DSCR)"
            desc="Investor financing aligned to property cash flow and DSCR."
            href="/financing-options/dscr-rental-loans"
          />
          <Card
            title="Franchise Financing"
            desc="Financing paths built for approved franchise models."
            href="/financing-options/franchise-financing"
          />
          <Card
            title="Accounts Receivable Financing"
            desc="Unlock cash tied up in outstanding invoices."
            href="/financing-options/accounts-receivable-financing"
          />
          <Card
            title="Startup Financing"
            desc="Early-stage pathways for new ventures and launches."
            href="/financing-options/startup-financing"
          />
          <Card
            title="Merchant Cash Advance (Alternative)"
            desc="Last-resort funding option when traditional approvals aren’t feasible."
            href="/financing-options/merchant-cash-advance"
            badge="Alternative"
          />
        </Grid>

        <div className="mt-10">
          <PrimaryCTA href="/financing-options" label="View All Financing Options" />
        </div>
      </Section>

      {/* =========================
          INDUSTRIES
      ========================== */}
      <Section
        eyebrow="Industries"
        title="Industry-Aware Financing, Not One-Size-Fits-All"
        intro="Industry pages guide you to the right programs without duplicating program pages."
        tint
      >
        <Grid>
          <Card title="Construction" desc="Project-driven funding paths." href="/industries/construction" />
          <Card title="Restaurants & Food" desc="Cash-flow aware routes." href="/industries/restaurants" />
          <Card title="Medical & Healthcare" desc="Practice growth and expansion." href="/industries/healthcare" />
          <Card title="Retail & E-Commerce" desc="Inventory and growth alignment." href="/industries/retail-ecommerce" />
          <Card title="Trucking & Transportation" desc="Fleet, equipment, working capital." href="/industries/transportation" />
          <Card title="Professional Services" desc="Recurring revenue models." href="/industries/professional-services" />
          <Card title="Oil & Gas Services" desc="Service/support businesses only." href="/industries/oil-and-gas" />
        </Grid>

        <div className="mt-10">
          <PrimaryCTA href="/industries" label="Explore Industries" />
        </div>
      </Section>

      {/* =========================
          SGF TECHNOLOGY (Acquirely + SGF GPT)
      ========================== */}
      <Section
        eyebrow="SGF Technology"
        title="Technology That Accelerates Better Funding Outcomes"
        intro="Our technology supports faster screening and cleaner intake—without replacing underwriting."
      >
        <div className="grid gap-6 md:grid-cols-2">
          <TechCard
            title="Acquirely"
            desc="Acquirely is a standalone acquisition and intake platform used to attract, screen, and route financing opportunities efficiently."
            bullets={[
              "Deal-ready intake structure",
              "Faster internal review and routing",
              "Designed for lender-ready workflows",
            ]}
            href="/technology"
            badge="Platform"
          />

          <TechCard
            title="SGF GPT – Business Funding Assistant"
            desc="An AI-powered funding guidance assistant trained on SGF programs to help borrowers understand options, assess readiness, and prepare lender-ready next steps."
            bullets={[
              "Educational guidance only",
              "Clarifies documents and readiness",
              "Not a calculator or approval system",
            ]}
            href="/technology"
            badge="Advisory"
          />
        </div>

        <div className="mt-10">
          <PrimaryCTA href="/technology" label="View SGF Technology" />
        </div>
      </Section>

      {/* =========================
          TOOLS (Calculators Only)
      ========================== */}
      <Section
        eyebrow="Tools"
        title="Deterministic Calculators for Planning Clarity"
        intro="Numeric tools only. No approvals, no advisory logic, no underwriting outputs."
        tint
      >
        <Grid>
          <Card
            title="Business Loan Calculator"
            desc="Estimate payment scenarios for SBA and working capital loans."
            href="/tools/business-loan-calculator"
          />
          <Card
            title="DSCR Calculator"
            desc="Evaluate DSCR using rental income and operating expenses."
            href="/tools/dscr-calculator"
          />
          <Card
            title="MCA Calculator"
            desc="Estimate MCA payments, term impact, and total payback."
            href="/tools/mca-calculator"
            badge="Planning"
          />
        </Grid>

        <div className="mt-10">
          <PrimaryCTA href="/tools" label="View All Tools" />
        </div>
      </Section>

      {/* =========================
          PROCESS
      ========================== */}
      <Section
        eyebrow="How It Works"
        title="A Simple Process That Produces Lender-Ready Next Steps"
        intro="Clear steps. Clean intake. Better outcomes."
      >
        <div className="grid gap-6 md:grid-cols-3">
          <StepCard
            step="1"
            title="Explore"
            desc="Choose a program or start from your industry."
          />
          <StepCard
            step="2"
            title="Pre-Qualify"
            desc="Complete a short pre-qualification to route correctly."
          />
          <StepCard
            step="3"
            title="Execute"
            desc="Get structured next steps aligned to lenders and underwriting."
          />
        </div>

        <div className="mt-10 flex flex-wrap gap-3">
          <Link
            href="/apply"
            className="inline-flex items-center justify-center rounded-md bg-emerald-700 px-6 py-3 font-semibold text-white shadow-sm hover:bg-emerald-800 transition"
          >
            Start Pre-Qualification
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-md border border-slate-300 bg-white px-6 py-3 font-semibold text-slate-900 hover:bg-slate-50 transition"
          >
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
        intro="If you advise operators or serve business owners who need capital, SGF offers structured partner alignment."
        tint
      >
        <div className="grid gap-4 md:grid-cols-3">
          <MiniPill title="Referral Partners" />
          <MiniPill title="Strategic Partners" />
          <MiniPill title="Program-Aligned Routing" />
        </div>

        <div className="mt-10">
          <PrimaryCTA href="/partners" label="Become a Partner" />
        </div>
      </Section>
    </main>
  );
}

/* =========================
   Shared UI Components
========================= */

function Section({
  eyebrow,
  title,
  intro,
  children,
  tint,
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
  children: ReactNode;
  tint?: boolean;
}) {
  return (
    <section className={tint ? "bg-slate-50 border-y" : "bg-white"}>
      <div className="max-w-7xl mx-auto px-6 py-16 md:py-20">
        {eyebrow ? (
          <p className="text-sm uppercase tracking-wide text-emerald-800 font-semibold">
            {eyebrow}
          </p>
        ) : null}
        <h2 className="mt-3 text-3xl md:text-4xl font-bold tracking-tight">{title}</h2>
        {intro ? <p className="mt-4 text-lg text-slate-600 max-w-3xl">{intro}</p> : null}
        <div className="mt-10">{children}</div>
      </div>
    </section>
  );
}

function Grid({ children }: { children: ReactNode }) {
  return <div className="grid gap-6 md:grid-cols-3">{children}</div>;
}

function Card({
  title,
  desc,
  href,
  badge,
}: {
  title: string;
  desc: string;
  href: string;
  badge?: string;
}) {
  return (
    <Link
      href={href}
      className="group rounded-2xl border bg-white p-6 shadow-sm hover:shadow-md transition"
    >
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-lg font-semibold tracking-tight group-hover:text-emerald-800 transition">
          {title}
        </h3>
        {badge ? (
          <span className="shrink-0 rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-800">
            {badge}
          </span>
        ) : null}
      </div>
      <p className="mt-3 text-sm text-slate-600 leading-relaxed">{desc}</p>
      <p className="mt-5 text-sm font-semibold text-emerald-800">
        View details <span aria-hidden>→</span>
      </p>
    </Link>
  );
}

function TechCard({
  title,
  desc,
  bullets,
  href,
  badge,
}: {
  title: string;
  desc: string;
  bullets: string[];
  href: string;
  badge: string;
}) {
  return (
    <div className="rounded-2xl border bg-white p-6 shadow-sm">
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-xl font-bold tracking-tight">{title}</h3>
        <span className="shrink-0 rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">
          {badge}
        </span>
      </div>
      <p className="mt-3 text-slate-600 leading-relaxed">{desc}</p>

      <ul className="mt-5 space-y-2 text-sm text-slate-700">
        {bullets.map((b) => (
          <li key={b} className="flex gap-2">
            <span className="mt-[6px] h-2 w-2 rounded-full bg-emerald-600" />
            <span>{b}</span>
          </li>
        ))}
      </ul>

      <Link
        href={href}
        className="mt-6 inline-flex items-center gap-2 font-semibold text-emerald-800 hover:text-emerald-900"
      >
        Learn more <span aria-hidden>→</span>
      </Link>
    </div>
  );
}

function StepCard({ step, title, desc }: { step: string; title: string; desc: string }) {
  return (
    <div className="rounded-2xl border bg-white p-6 shadow-sm">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-700 text-white font-bold">
          {step}
        </div>
        <h3 className="text-lg font-semibold">{title}</h3>
      </div>
      <p className="mt-3 text-slate-600">{desc}</p>
    </div>
  );
}

function MiniPill({ title }: { title: string }) {
  return (
    <div className="rounded-2xl border bg-white p-6 text-center shadow-sm">
      <p className="font-semibold">{title}</p>
      <p className="mt-2 text-sm text-slate-600">Structured alignment and clean routing.</p>
    </div>
  );
}

function Bullet({ children }: { children: ReactNode }) {
  return (
    <div className="flex items-start gap-2">
      <span className="mt-[7px] h-2 w-2 rounded-full bg-emerald-700" />
      <span>{children}</span>
    </div>
  );
}

function QuickLink({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      className="flex items-center justify-between rounded-xl border px-4 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-50 transition"
    >
      <span>{label}</span>
      <span aria-hidden className="text-slate-400">
        →
      </span>
    </Link>
  );
}

function PrimaryCTA({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      className="inline-flex items-center justify-center rounded-md bg-emerald-700 px-6 py-3 font-semibold text-white shadow-sm hover:bg-emerald-800 transition"
    >
      {label}
    </Link>
  );
}

/* =========================
   Reviews UI
========================= */
function ReviewCard({
  name,
  text,
  rating,
}: {
  name: string;
  text: string;
  rating: number;
}) {
  return (
    <div className="min-w-[320px] max-w-[320px] rounded-2xl border bg-slate-50 p-5">
      <div className="flex items-center gap-1 text-amber-400">
        {Array.from({ length: rating }).map((_, i) => (
          <span key={i}>★</span>
        ))}
      </div>
      <p className="mt-3 text-sm text-slate-700 leading-relaxed line-clamp-3">{text}</p>
      <div className="mt-4 flex items-center justify-between">
        <p className="text-xs font-semibold text-slate-600">{name}</p>
        <div className="flex items-center gap-2 text-xs text-slate-500">
          <GoogleIcon />
          Google
        </div>
      </div>
    </div>
  );
}

function GoogleIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 48 48" aria-hidden="true">
      <path
        fill="#EA4335"
        d="M24 9.5c3.3 0 5.7 1.4 7 2.6l5.2-5.2C32.6 3.6 28.6 2 24 2 14.8 2 7.2 7.8 4.3 15.4l6.1 4.7C12.3 13.9 17.7 9.5 24 9.5z"
      />
      <path
        fill="#4285F4"
        d="M46.5 24c0-1.6-.1-2.8-.4-4.1H24v8h12.7c-.5 2.7-2.1 5.1-4.6 6.6l7 5.4C43.7 35.6 46.5 30.3 46.5 24z"
      />
      <path
        fill="#FBBC05"
        d="M10.4 28.1c-.5-1.4-.8-2.8-.8-4.1s.3-2.7.8-4.1l-6.1-4.7C2.8 18.3 2 21.1 2 24s.8 5.7 2.3 8.8l6.1-4.7z"
      />
      <path
        fill="#34A853"
        d="M24 46c6.5 0 12-2.1 16-5.7l-7-5.4c-1.9 1.3-4.4 2.1-9 2.1-6.3 0-11.7-4.4-13.6-10.3l-6.1 4.7C7.2 40.2 14.8 46 24 46z"
      />
    </svg>
  );
}
