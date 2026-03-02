import Link from "next/link";

export default function Footer() {
  return (
    <footer className="py-32 bg-slate-900 text-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="font-serif text-3xl font-semibold">
          Built for Advisors, Operators, and Strategic Partners
        </h2>
        <p className="mt-6 text-slate-300 max-w-xl mx-auto">
          Structured alignment. Clean execution. Long-term relationships.
        </p>
        <Link
          href="/partners"
          className="inline-block mt-10 border border-white px-8 py-3 font-semibold hover:bg-white hover:text-slate-900 transition-colors"
        >
          Become a Partner
        </Link>
      </div>
    </footer>
  );
}
