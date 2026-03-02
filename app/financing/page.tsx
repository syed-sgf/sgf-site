import type { Metadata } from "next";
import Link from "next/link";
import { products } from "@/lib/financing-data";

export const metadata: Metadata = {
  title: "Financing Options | Starting Gate Financial",
  description:
    "Explore all 10 business financing products — from SBA loans and commercial real estate to equipment financing and working capital.",
};

export default function FinancingHubPage() {
  return (
    <main className="bg-white text-slate-900">

      {/* Page Hero */}
      <section className="border-b py-20">
        <div className="max-w-5xl mx-auto px-6">
          <p className="text-sm uppercase tracking-widest text-[var(--sgf-green-500)] font-semibold mb-4">
            All Programs
          </p>
          <h1 className="font-serif text-5xl font-semibold leading-tight">
            Financing Options
          </h1>
          <p className="mt-5 text-lg text-slate-600 max-w-2xl">
            Every product we offer is structured to meet lender expectations.
            Select a program below to explore terms, use cases, and qualification criteria.
          </p>
        </div>
      </section>

      {/* Product Grid */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-6">
          {products.map((product) => (
            <Link
              key={product.slug}
              href={`/financing/${product.slug}`}
              className="group flex flex-col border border-slate-200 rounded-xl p-8 hover:border-[var(--sgf-green-500)] hover:shadow-md transition-all duration-200"
            >
              <h2 className="font-serif text-xl font-semibold group-hover:text-[var(--sgf-green-500)] transition-colors">
                {product.title}
              </h2>
              <p className="mt-1 text-sm text-slate-500">{product.subtitle}</p>
              <p className="mt-3 text-sm text-slate-700 line-clamp-2 flex-1">
                {product.description}
              </p>

              {/* Stats row */}
              <div className="mt-5 flex flex-wrap gap-6 text-xs text-slate-500 border-t border-slate-100 pt-4">
                <span>
                  <span className="font-semibold text-slate-700">From</span>{" "}
                  {product.minAmount}
                </span>
                <span>
                  <span className="font-semibold text-slate-700">Up to</span>{" "}
                  {product.maxAmount}
                </span>
                <span>
                  <span className="font-semibold text-slate-700">Terms</span>{" "}
                  {product.termRange}
                </span>
              </div>

              <p className="mt-4 text-sm font-semibold text-[var(--sgf-green-500)] group-hover:underline underline-offset-4 transition-all">
                Learn more →
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 bg-slate-50 border-t">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-serif text-3xl font-semibold">
            Not sure which program fits?
          </h2>
          <p className="mt-4 text-slate-600">
            Complete a short pre-qualification and we'll identify the right path for your situation.
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
