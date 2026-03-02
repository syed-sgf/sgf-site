export default function TrustBar() {
  return (
    <section className="py-5 border-y border-slate-200 bg-white">
      <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-8">
        <span className="text-[11px] uppercase tracking-widest text-slate-400 font-semibold">
          Trusted by Business Owners Nationwide
        </span>
        <span className="hidden sm:block w-px h-4 bg-slate-300" aria-hidden="true" />
        <span className="text-sm font-semibold text-[var(--sgf-gold-500)]">
          ★★★★★ Google Reviews
        </span>
      </div>
    </section>
  );
}
