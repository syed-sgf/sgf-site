import Link from "next/link";
import { products } from "@/lib/financing-data";

function ArrowRight() {
  return (
    <svg
      className="w-4 h-4 shrink-0 text-slate-400 group-hover:text-[var(--sgf-green-500)] transition-colors"
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden="true"
    >
      <path d="M3 8h10M9 4l4 4-4 4" />
    </svg>
  );
}

export default function FinancingOptions() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-5xl mx-auto px-6">

        {/* Centered heading */}
        <div className="text-center mb-14">
          <p className="text-xs uppercase tracking-widest text-[var(--sgf-green-500)] font-semibold mb-3">
            Capital Solutions
          </p>
          <h2 className="font-serif text-4xl font-semibold text-slate-900">
            Discover Optimal Financing for Your Business
          </h2>
          <p className="mt-4 text-slate-600 max-w-[600px] mx-auto">
            From SBA loans to commercial real estate — capital structured for
            your stage and sector.
          </p>
        </div>

        {/* Compact 2-col product grid — 5 rows × 2 cols = 10 cards */}
        <div className="grid md:grid-cols-2 gap-2">
          {products.map((product) => (
            <Link
              key={product.slug}
              href={`/financing/${product.slug}`}
              className="group flex items-center justify-between px-5 py-[14px] border border-slate-200 hover:shadow-[inset_3px_0_0_#2E7D32] hover:bg-slate-50 transition-all duration-150"
            >
              <div className="min-w-0 pr-4">
                <p className="text-sm font-semibold text-slate-900 group-hover:text-[var(--sgf-green-500)] transition-colors truncate">
                  {product.title}
                </p>
                <p className="text-xs text-slate-500 mt-0.5 truncate">
                  {product.subtitle}
                </p>
              </div>
              <ArrowRight />
            </Link>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/financing"
            className="text-sm font-semibold text-[var(--sgf-green-500)] underline underline-offset-4 hover:text-[var(--sgf-green-600)] transition-colors"
          >
            Browse all financing programs →
          </Link>
        </div>

      </div>
    </section>
  );
}
