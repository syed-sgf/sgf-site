import Link from "next/link";
import { industries } from "@/lib/industry-data";

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

export default function Industries() {
  return (
    <section className="py-16 bg-slate-50">
      <div className="max-w-5xl mx-auto px-6">

        {/* Centered heading */}
        <div className="text-center mb-14 max-w-2xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-[#CE9562] font-semibold mb-3 text-center">
            Industry Focus
          </p>
          <h2 className="font-serif text-4xl font-semibold text-slate-900 text-center">
            Funding Designed to Match Your Industry
          </h2>
          <p className="text-center text-base text-slate-500 max-w-xl mx-auto">
            Every sector has unique capital needs. We speak your language.
          </p>
        </div>

        {/* Compact 2-col horizontal cards */}
        <div className="grid md:grid-cols-2 gap-2">
          {industries.map(({ slug, title, subtitle }) => (
            <Link
              key={slug}
              href={`/industries/${slug}`}
              className="group flex items-center justify-between px-5 py-[14px] border border-slate-200 bg-white hover:shadow-[inset_3px_0_0_#2E7D32] hover:bg-white transition-all duration-150"
            >
              <div className="min-w-0 pr-4">
                <p className="text-sm font-semibold text-slate-900 group-hover:text-[var(--sgf-green-500)] transition-colors">
                  {title}
                </p>
                <p className="text-xs text-slate-500 mt-0.5 truncate">
                  {subtitle}
                </p>
              </div>
              <ArrowRight />
            </Link>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/industries"
            className="text-sm font-semibold text-[#118241] underline underline-offset-4 hover:text-[#082B09] transition-colors"
          >
            View all industries →
          </Link>
        </div>

      </div>
    </section>
  );
}
