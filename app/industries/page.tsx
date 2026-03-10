"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { industries } from "@/lib/industry-data";

const G = {
  dark: "#082B09",
  primary: "#118241",
  gold: "#CE9562",
  cream: "#F8F6F1",
  border: "#E2DDD6",
  textDark: "#0F172A",
  textMid: "#475569",
  serif: "var(--font-playfair)",
  sans: "var(--font-source-sans)",
};

const heroSlides = [
  { url: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&q=90&auto=format&fit=crop", label: "Construction" },
  { url: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1200&q=90&auto=format&fit=crop", label: "Food & Beverage" },
  { url: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1200&q=90&auto=format&fit=crop", label: "Healthcare" },
  { url: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=1200&q=90&auto=format&fit=crop", label: "Oil & Gas" },
  { url: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=90&auto=format&fit=crop", label: "Real Estate" },
];

function SectionHeader({ eyebrow, h2, sub, light = false }: { eyebrow: string; h2: string; sub?: string; light?: boolean }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", marginBottom: "2.5rem" }}>
      <p style={{ fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase", color: G.gold, fontWeight: "600", marginBottom: "0.6rem", fontFamily: G.sans }}>{eyebrow}</p>
      <h2 style={{ fontFamily: G.serif, fontSize: "clamp(1.8rem,3vw,2.4rem)", fontWeight: "700", color: light ? "#fff" : G.textDark, lineHeight: "1.2", margin: "0 0 0.75rem", textAlign: "center" }}>{h2}</h2>
      {sub && <p style={{ fontSize: "1rem", color: light ? "rgba(255,255,255,0.72)" : G.textMid, maxWidth: "520px", lineHeight: "1.7", fontFamily: G.sans, textAlign: "center", margin: 0 }}>{sub}</p>}
    </div>
  );
}

export default function IndustriesPage() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setCurrent((p) => (p + 1) % heroSlides.length), 5000);
    return () => clearInterval(t);
  }, []);

  const isLastOdd = industries.length % 2 !== 0;

  return (
    <main style={{ background: G.cream, fontFamily: G.sans }}>

      {/* HERO */}
      <section style={{ position: "relative", minHeight: "480px", overflow: "hidden", background: G.dark }}>
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "3px", background: `linear-gradient(90deg, transparent, ${G.gold}, transparent)`, zIndex: 10 }} />
        {heroSlides.map((slide, i) => (
          <div key={slide.url} style={{ position: "absolute", inset: 0, opacity: i === current ? 1 : 0, transition: "opacity 1.2s ease-in-out" }}>
            <img src={slide.url} alt={slide.label} loading={i === 0 ? "eager" : "lazy"} fetchPriority={i === 0 ? "high" : "low"} decoding={i === 0 ? "sync" : "async"} style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center", display: "block" }} />
          </div>
        ))}
        <div style={{ position: "absolute", inset: 0, background: `linear-gradient(135deg, ${G.dark}CC 0%, ${G.dark}88 55%, ${G.dark}55 100%)`, zIndex: 2 }} />
        <div style={{ position: "relative", zIndex: 3, maxWidth: "800px", margin: "0 auto", padding: "5rem 2rem 4rem", textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center" }}>
          <p style={{ fontSize: "11px", letterSpacing: "0.25em", textTransform: "uppercase", color: G.gold, fontWeight: "600", marginBottom: "1.25rem", fontFamily: G.sans }}>Industry Focus</p>
          <h1 style={{ fontFamily: G.serif, fontSize: "clamp(2.2rem,4vw,3rem)", fontWeight: "700", color: "#fff", lineHeight: "1.15", marginBottom: "1.25rem" }}>
            Industries We Finance
          </h1>
          <p style={{ fontSize: "1.05rem", color: "rgba(255,255,255,0.78)", lineHeight: "1.75", marginBottom: "2.5rem", fontFamily: G.sans }}>
            We understand that financing needs vary by industry. Select your sector to see the programs, structures, and lender relationships most relevant to your business.
          </p>
          <div style={{ display: "flex", gap: "0.5rem", justifyContent: "center" }}>
            {heroSlides.map((_, i) => (
              <button key={i} onClick={() => setCurrent(i)} style={{ width: i === current ? "24px" : "8px", height: "8px", borderRadius: "4px", background: i === current ? G.gold : "rgba(255,255,255,0.35)", border: "none", cursor: "pointer", padding: 0, transition: "all 0.3s ease" }} aria-label={`Slide ${i + 1}`} />
            ))}
          </div>

          <div style={{ display: "flex", gap: "1rem", marginTop: "2rem", justifyContent: "center" }}>
            <Link href="/apply" style={{ display: "inline-block", padding: "0.9rem 2rem", background: G.primary, color: "#fff", fontFamily: G.sans, fontWeight: "700", fontSize: "0.8rem", letterSpacing: "0.1em", textTransform: "uppercase", textDecoration: "none", borderRadius: "2px" }}>Start Pre-Qualification →</Link>
            <Link href="/financing-options" style={{ display: "inline-block", padding: "0.9rem 2rem", background: "transparent", color: "#fff", border: "1.5px solid rgba(255,255,255,0.45)", fontFamily: G.sans, fontWeight: "600", fontSize: "0.8rem", letterSpacing: "0.1em", textTransform: "uppercase", textDecoration: "none", borderRadius: "2px" }}>Explore Financing Options →</Link>
          </div>
        </div>
      </section>

      {/* INDUSTRY CARDS */}
      <section style={{ padding: "4rem 2rem", background: G.cream }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <SectionHeader eyebrow="Select Your Sector" h2="Find Financing Built for Your Business" sub="Each industry page outlines the programs, structures, and capital considerations most relevant to how you operate." />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "1.25rem" }}>
            {industries.map((ind, idx) => {
              const isLast = isLastOdd && idx === industries.length - 1;
              return (
                <Link key={ind.slug} href={`/industries/${ind.slug}`}
                  style={{ gridColumn: isLast ? "1 / -1" : undefined, maxWidth: isLast ? "540px" : undefined, margin: isLast ? "0 auto" : undefined, display: "flex", alignItems: "flex-start", gap: "1.25rem", padding: "1.75rem", background: "#fff", border: `1px solid ${G.border}`, borderTop: `3px solid ${G.primary}`, borderRadius: "3px", textDecoration: "none", transition: "border-top-color 0.2s, box-shadow 0.2s", width: "100%" }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderTopColor = G.gold; (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 20px rgba(8,43,9,0.1)"; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderTopColor = G.primary; (e.currentTarget as HTMLElement).style.boxShadow = "none"; }}>
                  <div style={{ width: "44px", height: "44px", borderRadius: "4px", background: G.cream, border: `1px solid ${G.border}`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, fontSize: "1.3rem" }}>
                    {ind.title.charAt(0)}
                  </div>
                  <div style={{ flex: 1 }}>
                    <h3 style={{ fontFamily: G.serif, fontSize: "1.1rem", fontWeight: "700", color: G.textDark, margin: "0 0 0.3rem" }}>{ind.title}</h3>
                    <p style={{ fontSize: "0.8rem", letterSpacing: "0.08em", textTransform: "uppercase", color: G.gold, fontWeight: "600", margin: "0 0 0.6rem", fontFamily: G.sans }}>{ind.subtitle}</p>
                    <p style={{ fontSize: "0.9rem", color: G.textMid, lineHeight: "1.6", margin: "0 0 1rem", fontFamily: G.sans }}>{ind.description.substring(0, 120)}{(ind.description.length) > 120 ? "…" : ""}</p>
                    <span style={{ fontSize: "0.8rem", color: G.primary, fontWeight: "600", fontFamily: G.sans }}>View financing options →</span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* DARK INSIGHT SECTION */}
      <section style={{ background: G.cream, padding: "4rem 2rem", borderTop: `1px solid ${G.border}`, borderBottom: `1px solid ${G.border}` }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <SectionHeader eyebrow="Our Approach" h2="Industry Context Drives Capital Structure" sub="Lenders evaluate risk through the lens of your sector. We know what they look for — and how to position your file accordingly." />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1.5rem" }}>
            {[
              { title: "Sector-Specific Underwriting", body: "Every industry has different revenue patterns, collateral types, and risk profiles. We structure your file around what lenders in your sector actually require." },
              { title: "Lender Network Alignment", body: "We match your industry to lenders who specialize in it — not generalist banks unfamiliar with your business model or seasonal cash flow patterns." },
              { title: "Program Fit Over Product Push", body: "We don't start with a product and fit your business into it. We start with your use case, your industry, and build the capital structure from there." },
            ].map((item) => (
              <div key={item.title} style={{ padding: "1.75rem", background: "#fff", border: `1px solid ${G.border}`, borderTop: `3px solid ${G.primary}`, borderRadius: "4px" }}>
                <p style={{ fontFamily: G.serif, fontSize: "1rem", fontWeight: "700", color: G.textDark, margin: "0 0 0.75rem" }}>{item.title}</p>
                <p style={{ fontSize: "0.9rem", color: G.textMid, lineHeight: "1.7", margin: 0, fontFamily: G.sans }}>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BAND */}
      <section style={{ background: G.dark, padding: "3.5rem 2rem", borderTop: `1px solid rgba(255,255,255,0.08)` }}>
        <div style={{ maxWidth: "680px", margin: "0 auto", textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center" }}>
          <p style={{ fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase", color: G.gold, fontWeight: "600", marginBottom: "0.75rem", fontFamily: G.sans }}>Ready to Move Forward</p>
          <h2 style={{ fontFamily: G.serif, fontSize: "clamp(1.6rem,2.5vw,2.1rem)", fontWeight: "700", color: "#fff", marginBottom: "1rem" }}>Not Sure Which Program Fits?</h2>
          <p style={{ fontSize: "1rem", color: "rgba(255,255,255,0.7)", lineHeight: "1.7", marginBottom: "2rem", fontFamily: G.sans }}>Tell us about your business and we'll identify the right structure — no cost, no obligation.</p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/apply" style={{ display: "inline-block", padding: "0.9rem 2.25rem", background: G.gold, color: G.dark, fontFamily: G.sans, fontWeight: "700", fontSize: "0.8rem", letterSpacing: "0.1em", textTransform: "uppercase", textDecoration: "none", borderRadius: "2px" }}>Start Pre-Qualification</Link>
            <Link href="/financing-options" style={{ display: "inline-block", padding: "0.9rem 2.25rem", background: "transparent", color: "#fff", border: "1.5px solid rgba(255,255,255,0.4)", fontFamily: G.sans, fontWeight: "600", fontSize: "0.8rem", letterSpacing: "0.1em", textTransform: "uppercase", textDecoration: "none", borderRadius: "2px" }}>Explore Programs</Link>
          </div>
        </div>
      </section>

    </main>
  );
}
