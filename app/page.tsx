"use client";
import { useState, useEffect } from "react";

const G = {
  dark: "#082B09",
  primary: "#118241",
  gold: "#CE9562",
  cream: "#F8F6F1",
  border: "#E2DDD6",
  textDark: "#0F172A",
  textMid: "#475569",
  textLight: "#94A3B8",
  serif: "var(--font-playfair)",
  sans: "var(--font-source-sans)",
};

const programs = [
  { title: "SBA Financing", desc: "Long-term capital for owner-operated growth", href: "/financing-options/sba-financing" },
  { title: "Commercial Real Estate", desc: "Acquisition, refinance, and construction execution", href: "/financing-options/commercial-real-estate" },
  { title: "Business LOC & Term Loans", desc: "Working capital and operational stability", href: "/financing-options/business-loc-term-loans" },
  { title: "Equipment Financing", desc: "Acquire without straining cash flow", href: "/financing-options/equipment-financing" },
  { title: "DSCR Rental Loans", desc: "Investment property financing on cash flow", href: "/financing-options/dscr-rental-loans" },
  { title: "Fix & Flip Loans", desc: "Short-term capital for rehab execution", href: "/financing-options/fix-and-flip-loans" },
  { title: "Accounts Receivable", desc: "Turn outstanding invoices into working capital", href: "/financing-options/accounts-receivable-financing" },
  { title: "Franchise Financing", desc: "Structured capital for startup and expansion", href: "/financing-options/franchise-financing" },
  { title: "Merchant Cash Advance", desc: "Revenue-based advances for fast-moving businesses", href: "/financing-options/merchant-cash-advance" },
  { title: "Startup Financing", desc: "Capital pathways for early-stage businesses", href: "/financing-options/startup-financing" },
];

const industries = [
  { name: "Construction & Contractors", desc: "Project-driven capital for builders, GCs, and specialty trades", href: "/industries/construction" },
  { name: "Healthcare & Medical", desc: "Practice acquisition, expansion, and equipment upgrades", href: "/industries/healthcare" },
  { name: "Restaurants & Food Service", desc: "Cash flow-aware financing for operators", href: "/industries/restaurants" },
  { name: "Real Estate Investors", desc: "Portfolio growth, DSCR, and bridge capital", href: "/industries/real-estate-investors" },
  { name: "Oil & Gas Services", desc: "Capital for equipment, expansion, and project execution", href: "/industries/oil-and-gas" },
  { name: "Trucking & Transportation", desc: "Fleet financing and working capital for operators", href: "/industries/trucking-transportation" },
  { name: "Professional Services", desc: "Growth capital for established service businesses", href: "/industries/professional-services" },
];

const reviews = [
  { text: "Syed helped us secure an SBA loan when two other brokers couldn't get it done. He knew exactly what the lender needed and walked us through every step. Closed in under 60 days.", name: "Marcus T.", detail: "Restaurant Owner · Dallas TX" },
  { text: "Very professional and knowledgeable. SGF structured our equipment financing the right way — no surprises at closing. Will use again for our next location.", name: "Linda K.", detail: "Healthcare Practice Owner" },
  { text: "I came to SGF after getting turned down twice. Syed reviewed my financials, told me exactly where I stood, and got us funded. Straight shooter, no runaround.", name: "Carlos R.", detail: "Trucking Company Owner" },
  { text: "SGF handled our commercial real estate financing from start to finish. Syed knows lenders, knows the market, and delivers. Highly recommend for any serious business owner.", name: "David M.", detail: "Real Estate Investor · Fort Worth TX" },
];

const slides = [
  "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=900&q=80",
  "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=900&q=80",
  "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=900&q=80",
];

const tools = [
  { title: "SBA Loan Calculator", desc: "Payment scenarios for SBA and term loans", href: "/tools/sba-loan-calculator" },
  { title: "DSCR Calculator", desc: "Evaluate debt service coverage ratio for rental properties", href: "/tools/dscr-calculator" },
  { title: "MCA Calculator", desc: "Estimate true cost of a merchant cash advance", href: "/tools/mca-calculator" },
  { title: "Working Capital Calculator", desc: "Estimate short-term capital coverage needs", href: "/tools/working-capital-calculator" },
];

function SectionHeader({ eyebrow, h2, sub, light = false }: { eyebrow: string; h2: string; sub: string; light?: boolean }) {
  return (
    <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
      <p style={{ fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase" as const, color: G.gold, fontWeight: "600", marginBottom: "1rem", fontFamily: G.sans, display: "block" }}>{eyebrow}</p>
      <h2 style={{ fontFamily: G.serif, fontSize: "clamp(1.9rem, 3vw, 2.5rem)", fontWeight: "700", color: light ? "white" : G.textDark, lineHeight: "1.2", marginBottom: "1rem" }} dangerouslySetInnerHTML={{ __html: h2 }} />
      <p style={{ fontSize: "1rem", color: light ? "rgba(255,255,255,0.55)" : "#64748B", maxWidth: "480px", margin: "0 auto", lineHeight: "1.75", fontFamily: G.sans }}>{sub}</p>
    </div>
  );
}

export default function HomePage() {
  const [current, setCurrent] = useState(0);
  const [hoveredProgram, setHoveredProgram] = useState<number | null>(null);
  const [hoveredIndustry, setHoveredIndustry] = useState<number | null>(null);
  const [hoveredTool, setHoveredTool] = useState<number | null>(null);

  useEffect(() => {
    const t = setInterval(() => setCurrent(p => (p + 1) % slides.length), 5000);
    return () => clearInterval(t);
  }, []);

  return (
    <main>

      {/* — HERO — */}
      <section style={{ background: G.cream, borderBottom: `1px solid ${G.border}` }}>
        <div style={{ maxWidth: "1140px", margin: "0 auto", padding: "0 2rem" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem", alignItems: "center", minHeight: "calc(100vh - 68px)", paddingTop: "5rem", paddingBottom: "5rem" }}>

            {/* Left */}
            <div>
              <p style={{ fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase", color: G.gold, fontWeight: "600", marginBottom: "1.5rem", display: "flex", alignItems: "center", gap: "0.75rem", fontFamily: G.sans }}>
                <span style={{ display: "block", width: "24px", height: "1px", background: G.gold, flexShrink: 0 }} />
                Commercial Loan Brokerage · Richardson, TX
              </p>

              <h1 style={{ fontFamily: G.serif, fontSize: "clamp(2.2rem, 3.5vw, 3rem)", fontWeight: "700", color: G.textDark, lineHeight: "1.15", letterSpacing: "-0.02em", marginBottom: "1.25rem" }}>
                SBA Loans & Business Financing,{" "}
                <em style={{ color: G.dark, fontStyle: "italic" }}>Built for Approval.</em>
              </h1>

              <p style={{ fontSize: "1rem", color: G.textMid, lineHeight: "1.75", maxWidth: "440px", marginBottom: "1.75rem", fontFamily: G.sans }}>
                We structure SBA loans, commercial real estate, and working capital deals the way underwriters expect — so your file gets funded, not declined.
              </p>

              {/* Trust strip */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem 1.5rem", marginBottom: "2rem" }}>
                {["No Upfront Fees", "Lender-Aligned Structuring", "We Close Deals Others Can't", "Nationwide · Based in Richardson, TX"].map(item => (
                  <span key={item} style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem", fontSize: "0.78rem", fontWeight: "600", color: G.dark, fontFamily: G.sans }}>
                    <span style={{ color: G.primary }}>✓</span>{item}
                  </span>
                ))}
              </div>

              {/* CTAs */}
              <div style={{ display: "flex", gap: "1rem", alignItems: "center", flexWrap: "wrap", marginBottom: "2.5rem" }}>
                <a href="/apply" style={{ display: "inline-block", background: G.primary, color: "white", padding: "0.85rem 2rem", fontSize: "0.85rem", fontWeight: "600", letterSpacing: "0.05em", textTransform: "uppercase", textDecoration: "none", borderRadius: "2px", fontFamily: G.sans }}>
                  Start Pre-Qualification →
                </a>
                <a href="/financing-options" style={{ display: "inline-block", color: G.dark, fontSize: "0.88rem", fontWeight: "600", textDecoration: "none", borderBottom: `1px solid ${G.gold}`, paddingBottom: "2px", fontFamily: G.sans }}>
                  Explore Financing Options →
                </a>
              </div>

              {/* Industries */}
              <div style={{ paddingTop: "1.75rem", borderTop: `1px solid ${G.border}` }}>
                <p style={{ fontSize: "10px", letterSpacing: "0.18em", textTransform: "uppercase", color: G.textLight, marginBottom: "0.65rem", fontFamily: G.sans }}>Trusted by operators in</p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0 1.5rem", fontSize: "0.82rem", fontWeight: "500", color: G.textMid, fontFamily: G.sans }}>
                  {["Construction", "Healthcare", "Restaurants", "Real Estate", "Transportation"].map((ind, i, arr) => (
                    <span key={ind} style={{ display: "flex", alignItems: "center", gap: "1.5rem" }}>
                      {ind}
                      {i < arr.length - 1 && <span style={{ width: "4px", height: "4px", background: G.gold, borderRadius: "50%", display: "inline-block" }} />}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Slideshow */}
            <div style={{ position: "relative" }}>
              <div style={{ position: "absolute", top: "-20px", right: "-20px", bottom: "20px", left: "20px", border: `1px solid ${G.gold}`, borderRadius: "2px", zIndex: 0 }} />
              <div style={{ position: "relative", zIndex: 1, borderRadius: "2px", overflow: "hidden", height: "520px" }}>
                {slides.map((src, i) => (
                  <div key={i} style={{ position: "absolute", inset: 0, backgroundImage: `url(${src})`, backgroundSize: "cover", backgroundPosition: "center", opacity: i === current ? 1 : 0, transition: "opacity 1s ease-in-out" }} />
                ))}
                <div style={{ position: "absolute", bottom: "1.25rem", right: "1.25rem", zIndex: 3, display: "flex", gap: "6px" }}>
                  {slides.map((_, i) => (
                    <button key={i} onClick={() => setCurrent(i)} style={{ width: "6px", height: "6px", borderRadius: "50%", background: i === current ? G.gold : "rgba(255,255,255,0.4)", border: "none", cursor: "pointer", padding: 0 }} />
                  ))}
                </div>
              </div>
              <div style={{ position: "absolute", bottom: "-20px", left: "2rem", zIndex: 2, background: G.dark, padding: "1rem 1.5rem", borderRadius: "2px", borderLeft: `3px solid ${G.gold}` }}>
                <p style={{ fontSize: "10px", letterSpacing: "0.18em", textTransform: "uppercase", color: G.gold, marginBottom: "0.2rem", fontFamily: G.sans }}>Programs Available</p>
                <p style={{ fontFamily: G.serif, fontSize: "1.4rem", fontWeight: "700", color: "white" }}>10+ Financing Paths</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* — FINANCING OPTIONS — */}
      <section style={{ background: "white", padding: "6rem 0", borderBottom: `1px solid ${G.border}` }}>
        <div style={{ maxWidth: "1140px", margin: "0 auto", padding: "0 2rem" }}>
          <SectionHeader
            eyebrow="01 — Capital Solutions"
            h2="Financing Paths Built for How<br />Businesses Actually Operate"
            sub="From SBA loans to commercial real estate — capital structured for your stage and sector."
          />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", border: `1px solid ${G.border}` }}>
            {programs.map((p, i) => (
              <a key={p.href} href={p.href}
                onMouseEnter={() => setHoveredProgram(i)}
                onMouseLeave={() => setHoveredProgram(null)}
                style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "1.35rem 1.75rem", background: hoveredProgram === i ? G.cream : "white", textDecoration: "none", borderRight: i % 2 === 0 ? `1px solid ${G.border}` : "none", borderBottom: `1px solid ${G.border}`, transition: "background 0.15s" }}>
                <div>
                  <p style={{ fontFamily: G.serif, fontSize: "0.98rem", fontWeight: "600", color: G.textDark, marginBottom: "0.2rem" }}>{p.title}</p>
                  <p style={{ fontSize: "0.8rem", color: "#64748B", fontFamily: G.sans }}>{p.desc}</p>
                </div>
                <span style={{ color: G.gold, fontSize: "1rem", marginLeft: "1rem", flexShrink: 0 }}>→</span>
              </a>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: "2.25rem" }}>
            <a href="/financing-options" style={{ fontSize: "0.88rem", fontWeight: "600", color: G.dark, textDecoration: "none", borderBottom: `1px solid ${G.gold}`, paddingBottom: "2px", fontFamily: G.sans }}>View all financing options →</a>
          </div>
        </div>
      </section>

      {/* — INDUSTRIES — */}
      <section style={{ background: G.dark, padding: "6rem 0" }}>
        <div style={{ maxWidth: "1140px", margin: "0 auto", padding: "0 2rem" }}>
          <SectionHeader
            eyebrow="02 — Industry Expertise"
            h2="We Understand How Your<br />Industry Operates"
            sub="And what lenders need to see. Industry fluency is not optional in commercial financing."
            light
          />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", border: "1px solid rgba(255,255,255,0.08)" }}>
            {industries.map((ind, i) => (
              <a key={ind.href} href={ind.href}
                onMouseEnter={() => setHoveredIndustry(i)}
                onMouseLeave={() => setHoveredIndustry(null)}
                style={{ display: "block", padding: "2rem", background: hoveredIndustry === i ? "rgba(255,255,255,0.04)" : G.dark, textDecoration: "none", borderRight: (i % 3 !== 2) ? "1px solid rgba(255,255,255,0.08)" : "none", borderBottom: "1px solid rgba(255,255,255,0.08)", borderTop: hoveredIndustry === i ? `2px solid ${G.gold}` : "2px solid transparent", transition: "all 0.2s", gridColumn: i === 6 ? "2 / 3" : "auto" }}>
                <div style={{ width: "28px", height: "2px", background: G.gold, marginBottom: "1.1rem" }} />
                <p style={{ fontFamily: G.serif, fontSize: "0.98rem", fontWeight: "600", color: "white", marginBottom: "0.4rem" }}>{ind.name}</p>
                <p style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.45)", fontFamily: G.sans, lineHeight: "1.55" }}>{ind.desc}</p>
              </a>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: "2.25rem" }}>
            <a href="/industries" style={{ fontSize: "0.88rem", fontWeight: "600", color: "rgba(255,255,255,0.65)", textDecoration: "none", borderBottom: `1px solid ${G.gold}`, paddingBottom: "2px", fontFamily: G.sans }}>Explore all industries →</a>
          </div>
        </div>
      </section>

      {/* — CLIENT OUTCOMES — */}
      <section style={{ background: G.cream, padding: "6rem 0", borderTop: `1px solid ${G.border}` }}>
        <div style={{ maxWidth: "1140px", margin: "0 auto", padding: "0 2rem" }}>
          <SectionHeader
            eyebrow="03 — Client Outcomes"
            h2="Real Businesses. Real Closings."
            sub="What business owners say about working with Starting Gate Financial."
          />

          {/* Google trust row */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "2rem", marginBottom: "2.5rem", padding: "1.25rem 2rem", background: "white", border: `1px solid ${G.border}`, borderRadius: "2px", flexWrap: "wrap" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
              <span style={{ color: G.gold, fontSize: "1.1rem" }}>★★★★★</span>
              <span style={{ fontWeight: "700", fontSize: "0.95rem", color: G.textDark }}>5.0</span>
              <span style={{ fontSize: "0.82rem", color: "#64748B", fontFamily: G.sans }}>Google Rating</span>
            </div>
            <div style={{ width: "1px", height: "24px", background: G.border }} />
            <span style={{ fontSize: "0.82rem", color: "#64748B", fontFamily: G.sans }}>SBA · CRE · Equipment · Working Capital</span>
            <div style={{ width: "1px", height: "24px", background: G.border }} />
            <a href="https://g.page/r/startinggatefinancial/review" style={{ fontSize: "0.82rem", fontWeight: "600", color: G.primary, textDecoration: "none", borderBottom: `1px solid ${G.gold}`, paddingBottom: "1px", fontFamily: G.sans }}>Read All Reviews →</a>
          </div>

          {/* Review cards */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "1.25rem", marginBottom: "5rem" }}>
            {reviews.map((r, i) => (
              <div key={i} style={{ background: "white", border: `1px solid ${G.border}`, padding: "1.75rem 2rem", borderRadius: "2px" }}>
                <div style={{ display: "flex", gap: "3px", marginBottom: "1rem" }}>
                  {[...Array(5)].map((_, j) => <span key={j} style={{ color: G.gold, fontSize: "13px" }}>★</span>)}
                </div>
                <p style={{ fontSize: "0.9rem", color: "#334155", lineHeight: "1.75", fontStyle: "italic", marginBottom: "1.25rem", fontFamily: G.sans }}>&ldquo;{r.text}&rdquo;</p>
                <div style={{ borderTop: `1px solid ${G.border}`, paddingTop: "0.9rem" }}>
                  <p style={{ fontWeight: "600", color: G.textDark, fontSize: "0.87rem", fontFamily: G.sans }}>{r.name}</p>
                  <p style={{ fontSize: "0.77rem", color: G.textLight, fontFamily: G.sans }}>{r.detail}</p>
                  <p style={{ fontSize: "0.71rem", color: G.gold, marginTop: "0.3rem", fontFamily: G.sans, letterSpacing: "0.05em" }}>★ Google Review</p>
                </div>
              </div>
            ))}
          </div>

          {/* Process steps */}
          <div style={{ borderTop: `1px solid ${G.border}`, paddingTop: "4rem", marginBottom: "3rem", textAlign: "center" }}>
            <p style={{ fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase", color: G.gold, fontWeight: "600", marginBottom: "1rem", fontFamily: G.sans, display: "block" }}>How We Work</p>
            <h2 style={{ fontFamily: G.serif, fontSize: "clamp(1.7rem, 2.5vw, 2.2rem)", fontWeight: "700", color: G.textDark, marginBottom: "1rem" }}>Assess. Structure. Close.</h2>
            <p style={{ fontSize: "1rem", color: "#64748B", maxWidth: "440px", margin: "0 auto", fontFamily: G.sans, lineHeight: "1.75" }}>A financing process built around how lenders actually think — not how brokers hope it works.</p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", border: `1px solid ${G.border}`, marginBottom: "3rem" }}>
            {[
              { num: "01", title: "Assess", desc: "We review your business profile, goals, and financials to identify the right capital path — before any lender sees your file." },
              { num: "02", title: "Structure", desc: "We build your deal the way lenders expect it — clean package, correct program, right timing. No credit pull. No obligation." },
              { num: "03", title: "Close", desc: "We manage lender communication, underwriting questions, and closing coordination from start to funded." },
            ].map((s, i) => (
              <div key={s.num} style={{ padding: "2.5rem 2rem", textAlign: "center", borderRight: i < 2 ? `1px solid ${G.border}` : "none" }}>
                <p style={{ fontFamily: G.serif, fontSize: "2.8rem", fontWeight: "700", color: G.primary, lineHeight: "1", marginBottom: "0.75rem" }}>{s.num}</p>
                <p style={{ fontFamily: G.serif, fontSize: "1.1rem", fontWeight: "600", color: G.textDark, marginBottom: "0.5rem" }}>{s.title}</p>
                <p style={{ fontSize: "0.85rem", color: "#64748B", lineHeight: "1.65", fontFamily: G.sans }}>{s.desc}</p>
              </div>
            ))}
          </div>

          <div style={{ textAlign: "center" }}>
            <a href="/apply" style={{ display: "inline-block", background: G.primary, color: "white", padding: "0.9rem 2.25rem", fontSize: "0.88rem", fontWeight: "600", letterSpacing: "0.05em", textTransform: "uppercase", textDecoration: "none", borderRadius: "2px", fontFamily: G.sans }}>Start Pre-Qualification</a>
          </div>
        </div>
      </section>

      {/* — TOOLS — */}
      <section style={{ background: "white", padding: "6rem 0", borderTop: `1px solid ${G.border}` }}>
        <div style={{ maxWidth: "1140px", margin: "0 auto", padding: "0 2rem" }}>
          <SectionHeader
            eyebrow="Planning Tools"
            h2="Numbers Before Narratives"
            sub="Deterministic calculators built for clarity — not assumptions. Model your financing before you apply."
          />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "1.25rem", marginBottom: "2.5rem" }}>
            {tools.map((t, i) => (
              <a key={t.href} href={t.href}
                onMouseEnter={() => setHoveredTool(i)}
                onMouseLeave={() => setHoveredTool(null)}
                style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "1.75rem 2rem", border: `1px solid ${hoveredTool === i ? G.primary : G.border}`, background: hoveredTool === i ? G.cream : "white", textDecoration: "none", borderRadius: "2px", transition: "all 0.15s" }}>
                <div>
                  <p style={{ fontFamily: G.serif, fontSize: "1rem", fontWeight: "600", color: G.textDark, marginBottom: "0.3rem" }}>{t.title}</p>
                  <p style={{ fontSize: "0.81rem", color: "#64748B", fontFamily: G.sans }}>{t.desc}</p>
                </div>
                <span style={{ color: G.primary, fontSize: "1.1rem", marginLeft: "1rem", flexShrink: 0 }}>→</span>
              </a>
            ))}
          </div>
          <div style={{ textAlign: "center" }}>
            <a href="/tools" style={{ fontSize: "0.88rem", fontWeight: "600", color: G.dark, textDecoration: "none", borderBottom: `1px solid ${G.gold}`, paddingBottom: "2px", fontFamily: G.sans }}>Open all calculators →</a>
          </div>
        </div>
      </section>

      {/* — CTA BAND — */}
      <section style={{ background: G.dark, padding: "5rem 2rem", textAlign: "center", borderTop: `3px solid ${G.gold}` }}>
        <p style={{ fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase", color: G.gold, fontWeight: "600", marginBottom: "1.25rem", fontFamily: G.sans, display: "block" }}>Ready to Move Forward?</p>
        <h2 style={{ fontFamily: G.serif, fontSize: "clamp(2rem, 3vw, 2.8rem)", fontWeight: "700", color: "white", marginBottom: "1rem", lineHeight: "1.2" }}>Structure Your Next Move<br />with Confidence</h2>
        <p style={{ fontSize: "1rem", color: "rgba(255,255,255,0.6)", maxWidth: "440px", margin: "0 auto 2.5rem", lineHeight: "1.75", fontFamily: G.sans }}>No credit pull. No obligation. Just a structured conversation about your financing options.</p>
        <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
          <a href="/apply" style={{ display: "inline-block", background: "white", color: G.dark, padding: "0.9rem 2.25rem", fontSize: "0.88rem", fontWeight: "700", letterSpacing: "0.04em", textTransform: "uppercase", textDecoration: "none", borderRadius: "2px" }}>Get Pre-Qualified</a>
          <a href="/contact" style={{ display: "inline-block", border: "1px solid rgba(255,255,255,0.3)", color: "white", padding: "0.9rem 2.25rem", fontSize: "0.88rem", fontWeight: "600", textDecoration: "none", borderRadius: "2px" }}>Contact Us</a>
        </div>
      </section>

    </main>
  );
}
