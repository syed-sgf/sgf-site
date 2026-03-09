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
    <section className="py-20 bg-slate-50 border-b border-slate-100">
      <div className="max-w-5xl mx-auto px-6">

        <div className="text-center mb-12">
          <p className="text-xs tracking-widest uppercase font-semibold mb-3" style={{ color: "#CE9562" }}>
            Our Process
          </p>
          <h2
            className="font-serif text-3xl md:text-4xl font-bold text-slate-900 mb-4"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            A Structured Path to Capital
          </h2>
          <p className="text-base text-slate-500 max-w-xl mx-auto">
            We remove the guesswork from the financing process.
          </p>
        </div>

        {/* Google review cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-slate-200">
          {reviews.map(({ text, name, detail }) => (
            <div key={name} className="bg-white p-6">
              <div className="flex gap-0.5 mb-3">
                {[...Array(5)].map((_, i) => (
                  <span key={i} style={{ color: "#CE9562", fontSize: "13px" }}>★</span>
                ))}
              </div>
              <p className="text-sm text-slate-700 italic leading-relaxed">"{text}"</p>
              <div className="mt-4 pt-4 border-t border-slate-100">
                <p className="text-sm font-semibold text-slate-900">{name}</p>
                <p className="text-xs text-slate-400 mt-0.5">{detail}</p>
              </div>
            </div>
          ))}
        </div>

        {/* 3-step process */}
        <div className="grid md:grid-cols-3 gap-px bg-slate-200 mt-px">
          {steps.map(({ num, label, desc }) => (
            <div key={num} className="bg-white px-8 py-10 text-center">
              <p
                className="font-serif leading-none"
                style={{ fontFamily: "var(--font-playfair)", fontSize: "3rem", fontWeight: 700, color: "#118241" }}
              >
                {num}
              </p>
              <p className="mt-4 font-semibold text-slate-900 text-sm">{label}</p>
              <p className="mt-2 text-sm text-slate-500 leading-relaxed" style={{ maxWidth: "22ch", margin: "8px auto 0" }}>
                {desc}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/apply"
            className="inline-block bg-[#118241] hover:bg-[#082B09] text-white text-sm font-semibold px-10 py-3 transition-colors duration-200"
          >
            Start Pre-Qualification
          </Link>
        </div>

      </div>
    </section>
  );
}
