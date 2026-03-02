import Link from "next/link";
import { industries } from "@/lib/industry-data";

export default function Industries() {
  return (
    <section className="py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="font-serif text-xl font-semibold mb-12">
          Industries We Serve
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          {industries.map(({ slug, title, subtitle }) => (
            <Link
              key={slug}
              href={`/industries/${slug}`}
              className="group"
            >
              <div className="aspect-[16/10] bg-slate-200 group-hover:bg-slate-300 rounded-md mb-4 transition-colors" />
              <p className="font-semibold group-hover:text-[var(--sgf-green-500)] transition-colors">
                {title}
              </p>
              <p className="mt-1 text-sm text-slate-500">{subtitle}</p>
            </Link>
          ))}
        </div>

        <div className="mt-10">
          <Link
            href="/industries"
            className="text-sm font-semibold text-[var(--sgf-green-500)] underline underline-offset-4 hover:text-[var(--sgf-green-600)]"
          >
            View all industries →
          </Link>
        </div>
      </div>
    </section>
  );
}
