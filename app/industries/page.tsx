"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
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

// Industry icon paths (SVG viewBox 0 0 24 24, stroke-based)
const ICON_PATHS: Record<string, string> = {
  "construction":            "M2 20h20M6 20V10l6-6 6 6v10M10 20v-6h4v6",
  "restaurants-food":        "M18 8h1a4 4 0 0 1 0 8h-1M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8zM6 1v3M10 1v3M14 1v3",
  "medical-healthcare":      "M22 12h-4l-3 9L9 3l-3 9H2",
  "retail-ecommerce":        "M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4zM3 6h18M16 10a4 4 0 0 1-8 0",
  "trucking-transportation": "M1 3h15v13H1zM16 8h4l3 3v5h-7V8zM5.5 21a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5zM18.5 21a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z",
  "professional-services":   "M20 7H4a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2zM16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16",
  "oil-gas-services":        "M12 2v6M12 22v-6M4.93 4.93l4.24 4.24M14.83 14.83l4.24 4.24M2 12h6M22 12h-6M4.93 19.07l4.24-4.24M14.83 9.17l4.24-4.24M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z",
};

const heroSlides = [
  { url: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&q=90&auto=format&fit=crop", label: "Construction" },
  { url: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1200&q=90&auto=format&fit=crop", label: "Restaurants & Food" },
  { url: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1200&q=90&auto=format&fit=crop", label: "Medical & Healthcare" },
  { url: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=1200&q=90&auto=format&fit=crop", label: "Trucking & Transportation" },
  { url: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=1200&q=90&auto=format&fit=crop", label: "Oil & Gas Services" },
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

function IndustryCard({ ind, isLast }: { ind: typeof industries[0]; isLast: boolean }) {
  const [hovered, setHovered] = useState(false);
  return (
    <Link
      href={`/industries/${ind.slug}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        gridColumn: isLast ? "1 / -1" : undefined,
        maxWidth: isLast ? "540px" : undefined,
        margin: isLast ? "0 auto" : undefined,
        display: "flex", alignItems: "flex-start", gap: "1.25rem",
        padding: "1.75rem", background: "#fff",
        border: `1px solid ${hovered ? "#C9A84C" : G.border}`,
        borderTop: `3px solid ${hovered ? "#C9A84C" : G.primary}`,
        borderRadius: "3px", textDecoration: "none",
        boxShadow: hovered ? "0 4px 20px rgba(201,168,76,0.15)" : "none",
        transition: "border-color 0.2s, border-top-color 0.2s, box-shadow 0.2s",
        width: "100%",
      }}
    >
      {/* Icon */}
      <div style={{
        width: "48px", height: "48px", borderRadius: "4px",
        background: hovered ? G.dark : G.cream,
        border: `1px solid ${hovered ? G.dark : G.border}`,
        display: "flex", alignItems: "center", justifyContent: "center",
        flexShrink: 0,
        transition: "background 0.2s, border-color 0.2s",
      }}>
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none"
          stroke={hovered ? G.gold : G.primary} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d={ICON_PATHS[ind.slug] ?? "M12 2l10 18H2z"} />
        </svg>
      </div>
      <div style={{ flex: 1 }}>
        <h3 style={{ fontFamily: G.serif, fontSize: "1.1rem", fontWeight: "700", color: G.textDark, margin: "0 0 0.3rem" }}>{ind.title}</h3>
        <p style={{ fontSize: "0.8rem", letterSpacing: "0.08em", textTransform: "uppercase", color: G.gold, fontWeight: "600", margin: "0 0 0.6rem", fontFamily: G.sans }}>{ind.subtitle}</p>
        <p style={{ fontSize: "0.9rem", color: G.textMid, lineHeight: "1.6", margin: "0 0 1rem", fontFamily: G.sans }}>
          {ind.description.substring(0, 120)}{ind.description.length > 120 ? "…" : ""}
        </p>
        <span style={{ fontSize: "0.8rem", color: hovered ? "#C9A84C" : G.primary, fontWeight: "600", fontFamily: G.sans, transition: "color 0.2s" }}>
          View financing options →
        </span>
      </div>
    </Link>
  );
}

export default function IndustriesPage() {
  const [current, setCurrent] = useState(0);
  const isLastOdd = industries.length % 2 !== 0;

  useEffect(() => {
    const t = setInterval(() => setCurrent((p) => (p + 1) % heroSlides.length), 5000);
    return () => clearInterval(t);
  }, []);

  return (
    <main style={{ background: G.cream, fontFamily: G.sans }}>

      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section style={{ position: "relative", minHeight: "480px", overflow: "hidden", background: G.dark }}>
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "3px", background: `linear-gradient(90deg, transparent, ${G.gold}, transparent)`, zIndex: 10 }} />
        {heroSlides.map((slide, i) => (
          <div key={slide.url} style={{ position: "absolute", inset: 0, opacity: i === current ? 1 : 0, transition: "opacity 1.2s ease-in-out" }}>
            <Image src={slide.url} alt={slide.label} fill priority={i === 0} sizes="100vw"
              style={{ objectFit: "cover", objectPosition: "center" }} />
          </div>
        ))}
        <div style={{ position: "absolute", inset: 0, background: `linear-gradient(135deg, ${G.dark}CC 0%, ${G.dark}88 55%, ${G.dark}55 100%)`, zIndex: 2 }} />

        <div style={{ position: "relative", zIndex: 3, maxWidth: "800px", margin: "0 auto", padding: "5rem 2rem 4rem", textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center" }}>
          {/* Eyebrow */}
          <p style={{ fontSize: "11px", letterSpacing: "0.25em", textTransform: "uppercase", color: G.gold, fontWeight: "600", marginBottom: "0.75rem", fontFamily: G.sans }}>
            Industry Focus
          </p>
          {/* Breadcrumb */}
          <p style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.5)", marginBottom: "1.25rem", fontFamily: G.sans }}>
            <Link href="/" style={{ color: G.gold, textDecoration: "none" }}>Home</Link>
            {" → "}Industries
          </p>
          <h1 style={{ fontFamily: G.serif, fontSize: "clamp(2.2rem,4vw,3rem)", fontWeight: "700", color: "#fff", lineHeight: "1.15", marginBottom: "1.25rem" }}>
            Financing Experience Across Core Business Industries
          </h1>
          <p style={{ fontSize: "1.05rem", color: "rgba(255,255,255,0.78)", lineHeight: "1.75", marginBottom: "2.5rem", fontFamily: G.sans, maxWidth: 560 }}>
            Capital needs vary by industry. SGF brings financing experience in construction, food service, healthcare, retail, transportation, professional services, and oil and gas.
          </p>

          {/* Slide dots */}
          <div style={{ display: "flex", gap: "0.5rem", justifyContent: "center", marginBottom: "2rem" }}>
            {heroSlides.map((_, i) => (
              <button key={i} onClick={() => setCurrent(i)} style={{ width: i === current ? "24px" : "8px", height: "8px", borderRadius: "4px", background: i === current ? G.gold : "rgba(255,255,255,0.35)", border: "none", cursor: "pointer", padding: 0, transition: "all 0.3s ease" }} aria-label={`Slide ${i + 1}`} />
            ))}
          </div>

          {/* CTAs */}
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/contact" style={{ display: "inline-block", padding: "0.9rem 2rem", background: G.primary, color: "#fff", fontFamily: G.sans, fontWeight: "700", fontSize: "0.8rem", letterSpacing: "0.1em", textTransform: "uppercase", textDecoration: "none", borderRadius: "2px" }}>
              Start a Financing Review →
            </Link>
            <Link href="/financing-options" style={{ display: "inline-block", padding: "0.9rem 2rem", background: "transparent", color: "#fff", border: "1.5px solid rgba(255,255,255,0.45)", fontFamily: G.sans, fontWeight: "600", fontSize: "0.8rem", letterSpacing: "0.1em", textTransform: "uppercase", textDecoration: "none", borderRadius: "2px" }}>
              Explore Financing Options →
            </Link>
          </div>
        </div>
      </section>

      {/* ── INDUSTRY CARDS ───────────────────────────────────────── */}
      <section style={{ padding: "4rem 2rem", background: G.cream }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <SectionHeader
            eyebrow="Select Your Sector"
            h2="Find Financing Built for Your Business"
            sub="Each industry page outlines the programs, structures, and capital considerations most relevant to how you operate."
          />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "1.25rem" }} className="sgf-programs-grid">
            {industries.map((ind, idx) => (
              <IndustryCard key={ind.slug} ind={ind} isLast={isLastOdd && idx === industries.length - 1} />
            ))}
          </div>
        </div>
      </section>

      {/* ── INSIGHT SECTION ──────────────────────────────────────── */}
      <section style={{ background: G.cream, padding: "4rem 2rem", borderTop: `1px solid ${G.border}`, borderBottom: `1px solid ${G.border}` }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <SectionHeader
            eyebrow="Our Approach"
            h2="Industry Context Drives Capital Structure"
            sub="Lenders evaluate risk through the lens of your sector. We know what they look for — and how to position your file accordingly."
          />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1.5rem" }} className="fin-insight-grid">
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

      {/* ── CTA BAND ─────────────────────────────────────────────── */}
      <section style={{ background: G.dark, padding: "3.5rem 2rem", borderTop: `1px solid rgba(255,255,255,0.08)` }}>
        <div style={{ maxWidth: "680px", margin: "0 auto", textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center" }}>
          <p style={{ fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase", color: G.gold, fontWeight: "600", marginBottom: "0.75rem", fontFamily: G.sans }}>Ready to Move Forward</p>
          <h2 style={{ fontFamily: G.serif, fontSize: "clamp(1.6rem,2.5vw,2.1rem)", fontWeight: "700", color: "#fff", marginBottom: "1rem" }}>Not Sure Which Program Fits?</h2>
          <p style={{ fontSize: "1rem", color: "rgba(255,255,255,0.7)", lineHeight: "1.7", marginBottom: "2rem", fontFamily: G.sans }}>Tell us about your business and we&rsquo;ll identify the right structure — no cost, no obligation.</p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/apply" style={{ display: "inline-block", padding: "0.9rem 2.25rem", background: G.gold, color: G.dark, fontFamily: G.sans, fontWeight: "700", fontSize: "0.8rem", letterSpacing: "0.1em", textTransform: "uppercase", textDecoration: "none", borderRadius: "2px" }}>Start Pre-Qualification</Link>
            <Link href="/financing-options" style={{ display: "inline-block", padding: "0.9rem 2.25rem", background: "transparent", color: "#fff", border: "1.5px solid rgba(255,255,255,0.4)", fontFamily: G.sans, fontWeight: "600", fontSize: "0.8rem", letterSpacing: "0.1em", textTransform: "uppercase", textDecoration: "none", borderRadius: "2px" }}>Explore Programs</Link>
          </div>
        </div>
      </section>

    </main>
  );
}
