import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { industries, getIndustry } from "@/lib/industry-data";
import { getProduct } from "@/lib/financing-data";

/* ─── Static generation ─────────────────────────────────────────────── */

export function generateStaticParams() {
  return industries.map((i) => ({ slug: i.slug }));
}

/* ─── Per-page metadata ──────────────────────────────────────────────── */

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const industry = getIndustry(slug);
  if (!industry) return { title: "Not Found" };
  return {
    title: `${industry.title} Financing | Starting Gate Financial`,
    description: industry.description,
  };
}

/* ─── Page ───────────────────────────────────────────────────────────── */

export default async function IndustryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const industry = getIndustry(slug);
  if (!industry) notFound();

  const relatedProducts = industry.relevantProducts
    .map((s) => getProduct(s))
    .filter(Boolean);

  return (
    <main className="bg-white text-slate-900">

      {/* ── Hero ──────────────────────────────────────────────────── */}
      <section className="bg-slate-900 text-white py-24">
        <div className="max-w-5xl mx-auto px-6">
          <p className="text-sm uppercase tracking-widest text-[var(--sgf-gold-500)] font-semibold mb-4">
            Industry Focus
          </p>
          <h1 className="font-serif text-5xl md:text-6xl font-semibold leading-tight">
            {industry.title}
          </h1>
          <p className="mt-4 text-xl text-slate-300 max-w-2xl">
            {industry.subtitle}
          </p>
          <p className="mt-4 text-slate-400 max-w-2xl leading-relaxed">
            {industry.description}
          </p>
          <Link
            href="/apply"
            className="inline-block mt-8 bg-[var(--sgf-green-500)] hover:bg-[var(--sgf-green-600)] text-white px-8 py-3 font-semibold transition-colors"
          >
            Start Pre-Qualification
          </Link>
        </div>
      </section>

      {/* ── Key Stats bar ─────────────────────────────────────────── */}
      <section className="border-b bg-white">
        <div className="max-w-5xl mx-auto px-6 py-8 grid grid-cols-3 divide-x divide-slate-200 text-center">
          {industry.keyStats.map((stat) => (
            <div key={stat.label} className="px-4">
              <p className="text-xs uppercase tracking-widest text-slate-500">
                {stat.label}
              </p>
              <p className="mt-2 font-serif text-2xl font-semibold">
                {stat.value}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Common Financing Needs ────────────────────────────────── */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="font-serif text-2xl font-semibold mb-8">
            Common Financing Needs
          </h2>
          <ul className="space-y-4">
            {industry.commonFinancingNeeds.map((need) => (
              <li key={need} className="flex gap-3 items-start">
                <span
                  className="mt-1 shrink-0 text-[var(--sgf-green-500)] font-bold"
                  aria-hidden="true"
                >
                  ✓
                </span>
                <span className="text-slate-700">{need}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── Related Financing Products ────────────────────────────── */}
      <section className="py-20 bg-slate-50 border-t">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="font-serif text-2xl font-semibold mb-8">
            Relevant Financing Programs
          </h2>
          <div className="grid md:grid-cols-2 gap-5">
            {relatedProducts.map((product) => {
              if (!product) return null;
              return (
                <Link
                  key={product.slug}
                  href={`/financing/${product.slug}`}
                  className="group flex flex-col border border-slate-200 rounded-xl p-6 bg-white hover:border-[var(--sgf-green-500)] hover:shadow-sm transition-all"
                >
                  <h3 className="font-serif font-semibold group-hover:text-[var(--sgf-green-500)] transition-colors">
                    {product.title}
                  </h3>
                  <p className="mt-1 text-sm text-slate-500">{product.subtitle}</p>
                  <div className="mt-3 flex flex-wrap gap-4 text-xs text-slate-500">
                    <span>
                      <span className="font-semibold text-slate-700">From</span>{" "}
                      {product.minAmount}
                    </span>
                    <span>
                      <span className="font-semibold text-slate-700">Up to</span>{" "}
                      {product.maxAmount}
                    </span>
                  </div>
                  <p className="mt-3 text-sm font-semibold text-[var(--sgf-green-500)] group-hover:underline underline-offset-4">
                    View program →
                  </p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────── */}
      <section className="py-24 bg-[var(--sgf-green-500)]">
        <div className="max-w-3xl mx-auto px-6 text-center text-white">
          <h2 className="font-serif text-3xl font-semibold">
            Ready to structure your deal?
          </h2>
          <p className="mt-4 text-green-100 max-w-xl mx-auto">
            Complete a short pre-qualification and we&apos;ll match you with the
            right lenders for your industry and financing need.
          </p>
          <Link
            href="/apply"
            className="inline-block mt-8 bg-white text-[var(--sgf-green-600)] hover:bg-slate-100 px-10 py-3 font-semibold transition-colors"
          >
            Start Pre-Qualification
          </Link>
          <p className="mt-4 text-green-200 text-sm">
            Or{" "}
            <Link
              href="/industries"
              className="underline underline-offset-4 hover:text-white"
            >
              browse all industries
            </Link>
          </p>
        </div>
      </section>

    </main>
  );
}
