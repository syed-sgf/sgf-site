import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { products, getProduct } from "@/lib/financing-data";

/* ─── Static generation ────────────────────────────────────────────── */

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

/* ─── Per-page metadata ─────────────────────────────────────────────── */

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return { title: "Not Found" };
  return {
    title: `${product.title} | Starting Gate Financial`,
    description: product.description,
  };
}

/* ─── Page ──────────────────────────────────────────────────────────── */

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  return (
    <main className="bg-white text-slate-900">

      {/* ── Hero ──────────────────────────────────────────────────── */}
      <section className="bg-slate-900 text-white py-24">
        <div className="max-w-5xl mx-auto px-6">
          <p className="text-sm uppercase tracking-widest text-[var(--sgf-gold-500)] font-semibold mb-4">
            Financing Solutions
          </p>
          <h1 className="font-serif text-5xl md:text-6xl font-semibold leading-tight">
            {product.title}
          </h1>
          <p className="mt-4 text-xl text-slate-300 max-w-2xl">
            {product.subtitle}
          </p>
          <p className="mt-4 text-slate-400 max-w-2xl leading-relaxed">
            {product.description}
          </p>
          <Link
            href="/apply"
            className="inline-block mt-8 bg-[var(--sgf-green-500)] hover:bg-[var(--sgf-green-600)] text-white px-8 py-3 font-semibold transition-colors"
          >
            {product.ctaText}
          </Link>
        </div>
      </section>

      {/* ── Loan summary bar ──────────────────────────────────────── */}
      <section className="border-b bg-white">
        <div className="max-w-5xl mx-auto px-6 py-8 grid grid-cols-3 divide-x divide-slate-200 text-center">
          <div className="px-4">
            <p className="text-xs uppercase tracking-widest text-slate-500">
              Minimum Amount
            </p>
            <p className="mt-2 font-serif text-2xl font-semibold">
              {product.minAmount}
            </p>
          </div>
          <div className="px-4">
            <p className="text-xs uppercase tracking-widest text-slate-500">
              Maximum Amount
            </p>
            <p className="mt-2 font-serif text-2xl font-semibold">
              {product.maxAmount}
            </p>
          </div>
          <div className="px-4">
            <p className="text-xs uppercase tracking-widest text-slate-500">
              Term Range
            </p>
            <p className="mt-2 font-serif text-2xl font-semibold">
              {product.termRange}
            </p>
          </div>
        </div>
      </section>

      {/* ── Key Features + Use Cases ──────────────────────────────── */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-16">

          <div>
            <h2 className="font-serif text-2xl font-semibold mb-8">
              Key Features
            </h2>
            <ul className="space-y-4">
              {product.keyFeatures.map((feat) => (
                <li key={feat} className="flex gap-3 items-start">
                  <span
                    className="mt-1 shrink-0 text-[var(--sgf-green-500)] font-bold"
                    aria-hidden="true"
                  >
                    ✓
                  </span>
                  <span className="text-slate-700">{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="font-serif text-2xl font-semibold mb-8">
              Common Use Cases
            </h2>
            <ul className="space-y-4">
              {product.useCases.map((uc) => (
                <li key={uc} className="flex gap-3 items-start">
                  <span
                    className="mt-1 shrink-0 text-[var(--sgf-gold-500)] font-bold"
                    aria-hidden="true"
                  >
                    —
                  </span>
                  <span className="text-slate-700">{uc}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────── */}
      <section className="py-24 bg-[var(--sgf-green-500)]">
        <div className="max-w-3xl mx-auto px-6 text-center text-white">
          <h2 className="font-serif text-3xl font-semibold">
            Ready to move forward?
          </h2>
          <p className="mt-4 text-green-100 max-w-xl mx-auto">
            Complete a short pre-qualification and we&apos;ll structure the right
            path for your situation — no commitment required.
          </p>
          <Link
            href="/apply"
            className="inline-block mt-8 bg-white text-[var(--sgf-green-600)] hover:bg-slate-100 px-10 py-3 font-semibold transition-colors"
          >
            {product.ctaText}
          </Link>
          <p className="mt-4 text-green-200 text-sm">
            Or{" "}
            <Link
              href="/financing"
              className="underline underline-offset-4 hover:text-white"
            >
              browse all financing options
            </Link>
          </p>
        </div>
      </section>

    </main>
  );
}
