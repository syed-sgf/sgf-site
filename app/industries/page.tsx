import type { Metadata } from "next";
import Link from "next/link";
import { industries } from "@/lib/industry-data";

export const metadata: Metadata = {
  title: "Industries We Serve | Starting Gate Financial",
  description:
    "Business financing solutions tailored to construction, food & beverage, healthcare, oil & gas, and real estate investors.",
};

const icons: Record<string, React.ReactNode> = {
  construction: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" className="w-7 h-7">
      <path d="M2 20h20" />
      <path d="M4 20V10l8-6 8 6v10" />
      <rect x="8" y="13" width="8" height="7" rx="0.5" />
    </svg>
  ),
  "food-beverage": (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" className="w-7 h-7">
      <path d="M3 2v7c0 1.5 2 3 2 3v9a1 1 0 002 0v-9s2-1.5 2-3V2" />
      <path d="M8 2v5" />
      <path d="M13 2c0 0 3 2.5 3 6s-3 6-3 6v7a1 1 0 002 0V2" />
    </svg>
  ),
  healthcare: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" className="w-7 h-7">
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M12 8v8M8 12h8" />
    </svg>
  ),
  "oil-gas": (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" className="w-7 h-7">
      <path d="M12 2C10 7 6 10 6 15a6 6 0 0012 0c0-5-4-8-6-13z" />
      <path d="M12 12v5" />
    </svg>
  ),
  "real-estate-investors": (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" className="w-7 h-7">
      <path d="M3 10.5L12 3l9 7.5V20a1 1 0 01-1 1H4a1 1 0 01-1-1v-9.5z" />
      <path d="M9 21V13h6v8" />
    </svg>
  ),
};

export default function IndustriesHubPage() {
  return (
    <main className="bg-white text-slate-900">

      {/* Page Hero */}
      <section className="border-b py-20">
        <div className="max-w-5xl mx-auto px-6">
          <p className="text-sm uppercase tracking-widest text-[var(--sgf-green-500)] font-semibold mb-4">
            Industry Focus
          </p>
          <h1 className="font-serif text-5xl font-semibold leading-tight">
            Industries We Serve
          </h1>
          <p className="mt-5 text-lg text-slate-600 max-w-2xl">
            We understand that financing needs vary by industry. Select your sector
            to see the programs, structures, and lender relationships most relevant
            to your business.
          </p>
        </div>
      </section>

      {/* Industry Cards */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-6 lg:gap-8">
          {industries.map((industry) => (
            <Link
              key={industry.slug}
              href={`/industries/${industry.slug}`}
              className="group flex gap-6 items-start border border-slate-200 rounded-xl p-8 hover:border-[var(--sgf-green-500)] hover:shadow-md transition-all duration-200"
            >
              {/* Icon */}
              <div className="shrink-0 w-12 h-12 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-500 group-hover:bg-[var(--sgf-green-500)] group-hover:border-[var(--sgf-green-500)] group-hover:text-white transition-all">
                {icons[industry.slug]}
              </div>

              <div className="min-w-0">
                <h2 className="font-serif text-xl font-semibold group-hover:text-[var(--sgf-green-500)] transition-colors">
                  {industry.title}
                </h2>
                <p className="mt-1 text-sm text-slate-500">{industry.subtitle}</p>
                <p className="mt-3 text-sm text-slate-700 line-clamp-2">
                  {industry.description}
                </p>
                <p className="mt-4 text-sm font-semibold text-[var(--sgf-green-500)] group-hover:underline underline-offset-4">
                  View financing options →
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-slate-50 border-t">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-serif text-3xl font-semibold">
            Don&apos;t see your industry?
          </h2>
          <p className="mt-4 text-slate-600">
            We work across many sectors. Start a pre-qualification and we&apos;ll
            identify the right programs for your business.
          </p>
          <Link
            href="/apply"
            className="inline-block mt-8 bg-[var(--sgf-green-500)] hover:bg-[var(--sgf-green-600)] text-white px-10 py-3 font-semibold transition-colors"
          >
            Start Pre-Qualification
          </Link>
        </div>
      </section>

    </main>
  );
}
