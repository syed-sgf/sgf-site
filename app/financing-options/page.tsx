"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { products } from "@/lib/financing-data";

/* ── Design tokens ──────────────────────────────────────────────── */
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

/* ── Hero slideshow images ────────────────────────────────────────── */
const heroSlides = [
  { url: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=90&auto=format&fit=crop", label: "Commercial Real Estate" },
  { url: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&q=90&auto=format&fit=crop", label: "Construction" },
  { url: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=1200&q=90&auto=format&fit=crop", label: "Business Capital" },
  { url: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=1200&q=90&auto=format&fit=crop", label: "Energy & Industry" },
  { url: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1200&q=90&auto=format&fit=crop", label: "Financial Advisory" },
];

/* ── Program icons ──────────────────────────────────────────────── */
const programIcons: Record<string, string> = {
  "business-loc-term-loans": "◈",
  "commercial-real-estate": "⬡",
  "sba-financing": "★",
  "equipment-financing": "⚙",
  "fix-and-flip": "⌂",
  "dscr-rental-loans": "⊞",
  "franchise-financing": "◉",
  "accounts-receivable-financing": "⊜",
  "startup-financing": "◎",
  "merchant-cash-advance": "⟁",
};

/* ── SectionHeader ──────────────────────────────────────────────── */
function SectionHeader({
  eyebrow, h2, sub, light = false,
}: { eyebrow: string; h2: string; sub?: string; light?: boolean }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", marginBottom: "2.5rem" }}>
      <p style={{ fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase", color: G.gold, fontWeight: "600", marginBottom: "0.75rem", fontFamily: G.sans }}>{eyebrow}</p>
      <h2 style={{ fontFamily: G.serif, fontSize: "clamp(1.8rem,3vw,2.4rem)", fontWeight: "700", color: light ? "#fff" : G.textDark, lineHeight: "1.2", textAlign: "center", margin: "0 0 0.75rem" }}>{h2}</h2>
      {sub && <p style={{ fontSize: "1rem", color: light ? "rgba(255,255,255,0.75)" : G.textMid, maxWidth: "520px", lineHeight: "1.7", fontFamily: G.sans, textAlign: "center", margin: 0 }}>{sub}</p>}
    </div>
  );
}

/* ── HeroSlideshow ──────────────────────────────────────────────── */
function HeroSlideshow() {
  const [current, setCurrent] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setCurrent((p) => (p + 1) % heroSlides.length), 5000);
    return () => clearInterval(t);
  }, []);

  return (
    <section style={{ position: "relative", height: "480px", overflow: "hidden", background: G.dark }}>
      {/* Gold accent line */}
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "3px", background: `linear-gradient(90deg, transparent, ${G.gold}, transparent)`, zIndex: 10 }} />

      {/* Slides */}
      {heroSlides.map((slide, i) => (
        <div key={slide.url} style={{ position: "absolute", inset: 0, opacity: i === current ? 1 : 0, transition: "opacity 1.2s ease-in-out" }}>
          <Image src={slide.url} alt={slide.label} fill priority={i === 0} sizes="100vw"
            style={{ objectFit: "cover", objectPosition: "center" }} />
        </div>
      ))}

      {/* Overlay */}
      <div style={{ position: "absolute", inset: 0, background: `linear-gradient(135deg, ${G.dark}E8 0%, ${G.dark}B0 60%, ${G.dark}80 100%)`, zIndex: 2 }} />

      {/* Content */}
      <div style={{ position: "relative", zIndex: 3, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100%", padding: "0 2rem", textAlign: "center" }}>
        <p style={{ fontSize: "11px", letterSpacing: "0.25em", textTransform: "uppercase", color: G.gold, fontWeight: "600", marginBottom: "1rem", fontFamily: G.sans }}>Financing Programs</p>
        <h1 style={{ fontFamily: G.serif, fontSize: "clamp(2rem,4vw,3rem)", fontWeight: "700", color: "#fff", lineHeight: "1.15", maxWidth: "700px", marginBottom: "1.25rem" }}>
          Financing Programs for Business Operators
        </h1>
        <p style={{ fontSize: "1.05rem", color: "rgba(255,255,255,0.8)", maxWidth: "540px", lineHeight: "1.7", fontFamily: G.sans, marginBottom: "2rem" }}>
          Each program is structured around use of funds, underwriting requirements, and business profile — not marketing categories.
        </p>
        <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", justifyContent: "center" }}>
          <Link href="/contact" style={{ display: "inline-block", padding: "0.85rem 2rem", background: G.gold, color: G.dark, fontFamily: G.sans, fontWeight: "700", fontSize: "0.8rem", letterSpacing: "0.1em", textTransform: "uppercase", textDecoration: "none", borderRadius: "2px" }}>
            Start a Financing Review
          </Link>
          <Link href="/industries" style={{ display: "inline-block", padding: "0.85rem 2rem", background: "transparent", color: "#fff", border: "1.5px solid rgba(255,255,255,0.5)", fontFamily: G.sans, fontWeight: "600", fontSize: "0.8rem", letterSpacing: "0.1em", textTransform: "uppercase", textDecoration: "none", borderRadius: "2px" }}>
            Explore All Programs
          </Link>
        </div>
      </div>

      {/* Dot nav */}
      <div style={{ position: "absolute", bottom: "1.5rem", left: "50%", transform: "translateX(-50%)", display: "flex", gap: "0.5rem", zIndex: 4 }}>
        {heroSlides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            style={{ width: i === current ? "24px" : "8px", height: "8px", borderRadius: "4px", background: i === current ? G.gold : "rgba(255,255,255,0.4)", border: "none", cursor: "pointer", padding: 0, transition: "all 0.3s ease" }}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}

/* ── Main Page ──────────────────────────────────────────────────── */
export default function FinancingOptionsPage() {
  const isLastOdd = products.length % 2 !== 0;

  return (
    <main style={{ background: G.cream, fontFamily: G.sans }}>
      {/* Hero */}
      <HeroSlideshow />

      {/* Programs Grid */}
      <section style={{ padding: "4rem 2rem" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <SectionHeader
            eyebrow="Core Programs"
            h2="Financing Programs We Structure"
            sub="Each program represents a category of capital we actively structure and submit through our lender network."
          />

          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "1.25rem" }} className="sgf-programs-grid">
            {products.map((program, idx) => {
              const isLastAndOdd = isLastOdd && idx === products.length - 1;
              return (
                <Link
                  key={program.slug}
                  href={`/financing-options/${program.slug}`}
                  style={{
                    gridColumn: isLastAndOdd ? "1 / -1" : undefined,
                    maxWidth: isLastAndOdd ? "560px" : undefined,
                    margin: isLastAndOdd ? "0 auto" : undefined,
                    width: isLastAndOdd ? "100%" : undefined,
                    display: "block",
                    background: "#fff",
                    border: `1px solid ${G.border}`,
                    borderTop: `3px solid ${G.primary}`,
                    borderRadius: "4px",
                    padding: "1.5rem",
                    textDecoration: "none",
                    transition: "box-shadow 0.2s, border-color 0.2s",
                  }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 20px rgba(8,43,9,0.12)"; (e.currentTarget as HTMLElement).style.borderTopColor = G.gold; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.boxShadow = "none"; (e.currentTarget as HTMLElement).style.borderTopColor = G.primary; }}
                >
                  <div style={{ display: "flex", alignItems: "flex-start", gap: "1rem" }}>
                    <div style={{ width: "40px", height: "40px", borderRadius: "6px", background: G.cream, border: `1px solid ${G.border}`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.1rem", color: G.primary, flexShrink: 0 }}>
                      {programIcons[program.slug] || "◈"}
                    </div>
                    <div style={{ flex: 1 }}>
                      <h3 style={{ fontFamily: G.serif, fontSize: "1.15rem", fontWeight: "700", color: G.textDark, margin: "0 0 0.25rem", lineHeight: "1.3" }}>{program.title}</h3>
                      <p style={{ fontSize: "0.78rem", letterSpacing: "0.1em", textTransform: "uppercase", color: G.gold, fontWeight: "600", margin: "0 0 0.6rem", fontFamily: G.sans }}>{program.subtitle}</p>
                      <p style={{ fontSize: "0.9rem", color: G.textMid, lineHeight: "1.6", margin: "0 0 1rem" }}>
                        {program.description?.substring(0, 110)}{program.description?.length > 110 ? "…" : ""}
                      </p>
                      <span style={{ fontSize: "0.85rem", color: G.primary, fontWeight: "600", fontFamily: G.sans }}>
                        View Program Details →
                      </span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Dark insight section */}
      <section style={{ background: G.cream, padding: "4rem 2rem", borderTop: `1px solid ${G.border}`, borderBottom: `1px solid ${G.border}` }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <SectionHeader
            eyebrow="How We Think About Capital"
            h2="Structure Before Source"
            sub="The right lender means nothing without the right structure. We start with use of funds, repayment horizon, and risk profile — then match to lenders."
          />

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1.5rem" }} className="fin-insight-grid">
            {[
              { n: "01", title: "Working Capital vs. Asset-Backed", body: "Cash flow financing is repaid from operations. Asset-backed financing is secured by something tangible. The right structure depends on what the capital is actually being used for." },
              { n: "02", title: "Short-Term vs. Long-Term", body: "Match the repayment horizon to the purpose. Inventory gaps need short-term structures. Real estate and equipment need amortization that matches the asset's useful life." },
              { n: "03", title: "Startup vs. Established", body: "Lenders underwrite startups and established businesses differently. Time in business, revenue history, and collateral availability shape which programs apply." },
            ].map((item) => (
              <div key={item.n} style={{ background: "#fff", border: "1px solid #E2DDD6", borderTop: "3px solid #118241", borderRadius: "3px", padding: "1.75rem" }}>
                <p style={{ fontSize: "2rem", fontFamily: G.serif, color: "#118241", opacity: 0.5, margin: "0 0 0.75rem", lineHeight: 1 }}>{item.n}</p>
                <h3 style={{ fontFamily: G.serif, fontSize: "1.1rem", fontWeight: "700", color: "#0F172A", margin: "0 0 0.75rem" }}>{item.title}</h3>
                <p style={{ fontSize: "0.9rem", color: "#475569", lineHeight: "1.7", margin: 0, fontFamily: G.sans }}>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA band */}
      <section style={{ background: G.dark, padding: "3.5rem 2rem", borderTop: "1px solid rgba(255,255,255,0.08)" }}>
        <div style={{ maxWidth: "700px", margin: "0 auto", textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center" }}>
          <p style={{ fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase", color: G.gold, fontWeight: "600", marginBottom: "0.75rem", fontFamily: G.sans }}>Ready to Move Forward</p>
          <h2 style={{ fontFamily: G.serif, fontSize: "clamp(1.6rem,2.5vw,2.1rem)", fontWeight: "700", color: "#fff", marginBottom: "1rem" }}>Not Sure Which Program Fits?</h2>
          <p style={{ fontSize: "1rem", color: "rgba(255,255,255,0.7)", lineHeight: "1.7", marginBottom: "2rem", fontFamily: G.sans }}>
            We&apos;ll review your business profile and identify which programs are worth pursuing — before any lender sees your file.
          </p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/contact" style={{ display: "inline-block", padding: "0.9rem 2.25rem", background: G.gold, color: G.dark, fontFamily: G.sans, fontWeight: "700", fontSize: "0.8rem", letterSpacing: "0.1em", textTransform: "uppercase", textDecoration: "none", borderRadius: "2px" }}>
              Request a Financing Review
            </Link>
            <Link href="/industries" style={{ display: "inline-block", padding: "0.9rem 2.25rem", background: "transparent", color: "#fff", border: "1.5px solid rgba(255,255,255,0.4)", fontFamily: G.sans, fontWeight: "600", fontSize: "0.8rem", letterSpacing: "0.1em", textTransform: "uppercase", textDecoration: "none", borderRadius: "2px" }}>
              Browse by Industry
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
