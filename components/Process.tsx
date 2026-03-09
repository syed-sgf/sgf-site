import Link from "next/link";

const steps = [
  {
    num:   "01",
    label: "Explore",
    desc:  "Browse financing paths by program or industry — no commitment required.",
  },
  {
    num:   "02",
    label: "Pre-Qualify",
    desc:  "Complete a short intake. We assess fit and identify the right capital structure.",
  },
  {
    num:   "03",
    label: "Execute",
    desc:  "We place your deal with aligned lenders and guide you through closing.",
  },
];

const reviews = [
  {
    text: "Syed helped us secure an SBA loan when two other brokers couldn't get it done. He knew exactly what the lender needed and walked us through every step. Closed in under 60 days.",
    name: "Marcus T.",
    detail: "Restaurant Owner · Google Review",
  },
  {
    text: "Very professional and knowledgeable. SGF structured our equipment financing the right way — no surprises at closing. Will use again for our next location.",
    name: "Linda K.",
    detail: "Healthcare Practice Owner · Google Review",
  },
  {
    text: "I came to SGF after getting turned down twice. Syed reviewed my financials, told me exactly where I stood, and got us funded. Straight shooter, no runaround.",
    name: "Carlos R.",
    detail: "Trucking Company Owner · Google Review",
  },
  {
    text: "SGF handled our commercial real estate financing from start to finish. Syed knows lenders, knows the market, and delivers. Highly recommend for any serious business owner.",
    name: "David M.",
    detail: "Real Estate Investor · Google Review",
  },
];

export default function Process() {
  return (
    <section className="py-16 bg-slate-50 border-t border-slate-100">
      <div className="max-w-5xl mx-auto px-6">

        {/* Centered heading */}
        <div className="text-center mb-12">
          <p className="text-xs tracking-widest uppercase font-semibold mb-3" style={{ color: "#CE9562" }}>
            Our Process
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-slate-900 mb-4" style={{ fontFamily: "var(--font-playfair)" }}>
            A Structured Path to Capital
          </h2>
          <p className="text-base text-slate-500 max-w-xl mx-auto">
            We remove the guesswork from the financing process.
          </p>
        </div>

        {/* Google review cards — 2-col grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
          {reviews.map(({ text, name, detail }) => (
            <div key={name} className="bg-white border border-slate-200 p-6">
              <div className="flex gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-[#CE9562] text-sm">★</span>
                ))}
              </div>
              <p className="text-sm text-slate-700 italic">"{text}"</p>
              <div className="mt-4">
                <p className="font-semibold text-slate-900 text-sm">{name}</p>
                <span className="text-xs text-slate-400 mt-1">{detail}</span>
              </div>
            </div>
          ))}
        </div>

        {/* 3-column steps */}
        <div className="grid md:grid-cols-3 gap-10 text-center mt-16">
          {steps.map(({ num, label, desc }) => (
            <div key={num}>
              <p className="font-serif text-5xl font-semibold text-[#118241] leading-none">
                {num}
              </p>
              <p className="mt-5 font-semibold text-slate-900">{label}</p>
              <p className="mt-2 text-sm text-slate-600 max-w-[24ch] mx-auto">{desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link
            href="/apply"
            className="inline-block bg-[#118241] hover:bg-[#082B09] text-white px-10 py-3 font-semibold transition-colors duration-200"
          >
            Start Pre-Qualification
          </Link>
        </div>

      </div>
    </section>
  );
}
