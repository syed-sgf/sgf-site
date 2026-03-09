import Link from "next/link";
import { products } from "@/lib/financing-data";

export default function FinancingOptions() {
  return (
    <section className="py-20 bg-white border-b border-slate-100">
      <div className="max-w-5xl mx-auto px-6">

        <div className="text-center mb-12">
          <p className="text-xs tracking-widest uppercase font-semibold mb-3" style={{ color: "#CE9562" }}>
            Capital Solutions
          </p>
          <h2
            className="font-serif text-3xl md:text-4xl font-bold text-slate-900 mb-4"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Discover Optimal Financing for Your Business
          </h2>
          <p className="text-base text-slate-500 max-w-xl mx-auto">
            From SBA loans to commercial real estate — capital structured for your stage and sector.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-px bg-slate-200">
          {products.map((product) => (
            <Link
              key={product.slug}
              href={`/financing/${product.slug}`}
              className="group flex items-center justify-between px-5 py-4 bg-white hover:bg-slate-50 transition-colors duration-150"
            >
              <div className="min-w-0 pr-4">
                <p className="text-sm font-semibold text-slate-900 group-hover:text-[#118241] transition-colors truncate">
                  {product.title}
                </p>
                <p className="text-xs text-slate-500 mt-0.5 truncate">
                  {product.subtitle}
                </p>
              </div>
              <svg
                className="w-4 h-4 shrink-0 text-slate-300 group-hover:text-[#118241] transition-colors"
                viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"
              >
                <path d="M3 8h10M9 4l4 4-4 4" />
              </svg>
            </Link>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/financing"
            className="text-sm font-semibold text-[#118241] underline underline-offset-4 hover:text-[#082B09] transition-colors"
          >
            Browse all financing programs →
          </Link>
        </div>

      </div>
    </section>
  );
}
