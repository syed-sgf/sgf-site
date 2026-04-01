import Link from "next/link";

export default function Hero() {
  return (
    <section className="border-b">
      <div className="max-w-7xl mx-auto px-6 py-32 grid md:grid-cols-12 gap-16 items-center">
        {/* Left: Copy */}
        <div className="md:col-span-7">
          <h1 className="text-5xl md:text-6xl font-semibold tracking-tight leading-[1.05]">
            Business Financing,
            <br />
            <span className="text-slate-600 font-normal">
              Structured the Way Lenders Expect
            </span>
          </h1>

          <p className="mt-6 text-lg text-slate-600 max-w-xl">
            We help business owners navigate SBA loans, commercial real estate,
            and growth capital with discipline, clarity, and lender-aligned
            structure.
          </p>

          <div className="mt-10 flex gap-8 items-center">
            <Link
              href="/apply"
              className="bg-emerald-700 text-white px-7 py-3 font-semibold"
            >
              Start Pre-Qualification
            </Link>

            <Link
              href="/financing-options"
              className="font-semibold text-slate-700 underline underline-offset-4"
            >
              Explore Financing Options
            </Link>
          </div>
        </div>

        {/* Right: Image placeholder */}
        <div className="md:col-span-5">
          <div className="aspect-[4/3] bg-slate-100 rounded-lg border flex items-center justify-center text-slate-400 font-semibold">
            Hero Image
          </div>
        </div>
      </div>
    </section>
  );
}
