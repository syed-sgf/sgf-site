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
  title: "Starting Gate Financial | Business Financing Built for Real-World Growth",
  description:
    "SBA loans, commercial real estate financing, business LOC & term loans, equipment financing, DSCR and MCA planning tools—structured for real businesses and real underwriting.",
};

/* -------------------------
   Google Reviews Data
-------------------------- */
const reviews = [
  {
    name: "Michael R.",
    text: "Starting Gate Financial guided us through SBA financing with clarity and speed.",
    rating: 5,
  },
  {
    name: "Ayesha K.",
    text: "Professional, transparent, and extremely knowledgeable about commercial financing.",
    rating: 5,
  },
  {
    name: "Carlos M.",
    text: "They structured our deal properly and saved us months of back and forth.",
    rating: 5,
  },
  {
    name: "David S.",
    text: "Best experience we've had securing growth capital for our business.",
    rating: 5,
  },
];

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
              <Link href="/apply" className="bg-emerald-700 text-white px-6 py-3 rounded-md font-semibold hover:bg-emerald-800 transition">
                Get Pre-Qualified
              </Link>

              <Link href="/financing-options" className="border border-slate-300 px-6 py-3 rounded-md font-semibold text-slate-800 hover:bg-white transition">
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
              Financing is subject to underwriting and lender guidelines.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-sm border p-8">
            <h3 className="text-lg font-semibold mb-4">Start Here</h3>
            <nav className="space-y-3 text-sm">
              <QuickLink href="/apply" label="Apply / Pre-Qualification" />
              <QuickLink href="/financing-options" label="Financing Options" />
              <QuickLink href="/industries" label="Industries We Serve" />
              <QuickLink href="/tools" label="Financial Tools" />
              <QuickLink href="/technology" label="SGF Technology" />
            </nav>
          </div>
        </div>
      </section>

      {/* =========================
          GOOGLE REVIEWS MARQUEE
      ========================== */}
      <section className="bg-white border-b overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold">
              Trusted by Business Owners Nationwide
            </h2>
            <div className="flex items-center gap-2 text-sm text-slate-500">
              <GoogleIcon /> Google Reviews
            </div>
          </div>

          <div className="relative">
            <div className="flex gap-6 animate-review-marquee hover:[animation-play-state:paused]">
              {reviews.concat(reviews).map((review, i) => (
                <ReviewCard key={i} {...review} />
              ))}
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}

/* =========================================================
   Components
========================================================= */

function ReviewCard({ name, text, rating }: { name: string; text: string; rating: number }) {
  return (
    <div className="min-w-[320px] max-w-[320px] border rounded-lg p-4 bg-slate-50">
      <div className="flex gap-1 text-amber-400 mb-2">
        {Array.from({ length: rating }).map((_, i) => (
          <span key={i}>★</span>
        ))}
      </div>
      <p className="text-sm text-slate-700 line-clamp-2">{text}</p>
      <p className="mt-3 text-xs text-slate-500 font-medium">{name}</p>
    </div>
  );
}

function QuickLink({ href, label }: { href: string; label: string }) {
  return (
    <Link href={href} className="block border rounded-md px-4 py-2 hover:bg-slate-50">
      {label}
    </Link>
  );
}

function GoogleIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 48 48">
      <path fill="#EA4335" d="M24 9.5c3.3 0 5.7 1.4 7 2.6l5.2-5.2C32.6 3.6 28.6 2 24 2 14.8 2 7.2 7.8 4.3 15.4l6.1 4.7C12.3 13.9 17.7 9.5 24 9.5z"/>
      <path fill="#4285F4" d="M46.5 24c0-1.6-.1-2.8-.4-4.1H24v8h12.7c-.5 2.7-2.1 5.1-4.6 6.6l7 5.4C43.7 35.6 46.5 30.3 46.5 24z"/>
      <path fill="#FBBC05" d="M10.4 28.1c-.5-1.4-.8-2.8-.8-4.1s.3-2.7.8-4.1l-6.1-4.7C2.8 18.3 2 21.1 2 24s.8 5.7 2.3 8.8l6.1-4.7z"/>
      <path fill="#34A853" d="M24 46c6.5 0 12-2.1 16-5.7l-7-5.4c-1.9 1.3-4.4 2.1-9 2.1-6.3 0-11.7-4.4-13.6-10.3l-6.1 4.7C7.2 40.2 14.8 46 24 46z"/>
    </svg>
  );
}
