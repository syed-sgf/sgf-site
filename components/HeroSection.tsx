"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const G = {
  dark: "#082B09",
  primary: "#118241",
  gold: "#CE9562",
  sans: "var(--font-source-sans)",
  serif: "var(--font-playfair)",
};

const heroSlides = [
  { url: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=75&auto=format&fit=crop", label: "Commercial Real Estate" },
  { url: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&q=75&auto=format&fit=crop", label: "Construction" },
  { url: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=1200&q=75&auto=format&fit=crop", label: "Business Capital" },
  { url: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=1200&q=75&auto=format&fit=crop", label: "Oil & Gas" },
  { url: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1200&q=75&auto=format&fit=crop", label: "Food & Beverage" },
];

export function HeroSection() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setCurrent((p) => (p + 1) % heroSlides.length), 5000);
    return () => clearInterval(t);
  }, []);

  return (
    <section style={{ position: "relative", minHeight: "580px", overflow: "hidden", background: G.dark }}>
      {/* Gold top line */}
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "3px", background: `linear-gradient(90deg, transparent, ${G.gold}, transparent)`, zIndex: 10 }} />

      {/* Slides */}
      {heroSlides.map((slide, i) => (
        <div key={slide.url} style={{ position: "absolute", inset: 0, opacity: i === current ? 1 : 0, transition: "opacity 1.2s ease-in-out" }}>
          <Image src={slide.url} alt={slide.label} fill priority={i === 0} loading={i === 0 ? "eager" : "lazy"} sizes="(max-width: 768px) 100vw, 100vw"
            style={{ objectFit: "cover", objectPosition: "center" }} />
        </div>
      ))}
      <div style={{ position: "absolute", inset: 0, background: `linear-gradient(135deg, ${G.dark}CC 0%, ${G.dark}88 55%, ${G.dark}55 100%)`, zIndex: 2 }} />

      {/* Hero content: left copy + right CTA card */}
      <div style={{ position: "relative", zIndex: 3, maxWidth: "1200px", margin: "0 auto", padding: "5rem 2rem 4rem", display: "grid", gridTemplateColumns: "1fr 420px", gap: "4rem", alignItems: "center" }} className="sgf-hero-grid">

        {/* Left */}
        <div>
          <p style={{ fontSize: "11px", letterSpacing: "0.25em", textTransform: "uppercase", color: G.gold, fontWeight: "600", marginBottom: "1.25rem", fontFamily: G.sans }}>
            Richardson, Texas · SBA Loans · Commercial Real Estate · Business Capital
          </p>
          <h1 style={{ fontFamily: G.serif, fontSize: "clamp(2.2rem,4vw,3.2rem)", fontWeight: "700", color: "#fff", lineHeight: "1.15", marginBottom: "1.25rem" }}>
            SBA Loans, Commercial Real Estate, and Business Capital —{" "}
            <em style={{ color: G.gold, fontStyle: "italic" }}>Structured to Get Funded.</em>
          </h1>
          <p style={{ fontSize: "1.05rem", color: "rgba(255,255,255,0.78)", lineHeight: "1.75", marginBottom: "2rem", maxWidth: "480px", fontFamily: G.sans }}>
            Starting Gate Financial prepares business owners to pursue financing with stronger documentation, clearer positioning, and a direct path to lenders who fit the deal.
          </p>

          {/* Trust badges */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.6rem", marginBottom: "2rem" }}>
            {["No Upfront Fees", "Lender-Aligned Structuring", "We Close Deals Others Can't", "Nationwide · Based in Richardson, TX"].map((badge) => (
              <span key={badge} style={{ fontSize: "0.78rem", color: "rgba(255,255,255,0.8)", fontFamily: G.sans, display: "flex", alignItems: "center", gap: "0.3rem" }}>
                <span style={{ color: G.gold }}>✓</span> {badge}
              </span>
            ))}
          </div>

          {/* CTAs */}
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <Link href="/apply" style={{ display: "inline-block", padding: "0.9rem 2rem", background: G.primary, color: "#fff", fontFamily: G.sans, fontWeight: "700", fontSize: "0.8rem", letterSpacing: "0.1em", textTransform: "uppercase", textDecoration: "none", borderRadius: "2px" }}>
              Get Pre-Qualified →
            </Link>
            <Link href="/financing-options" style={{ display: "inline-block", padding: "0.9rem 2rem", background: "transparent", color: "#fff", border: "1.5px solid rgba(255,255,255,0.45)", fontFamily: G.sans, fontWeight: "600", fontSize: "0.8rem", letterSpacing: "0.1em", textTransform: "uppercase", textDecoration: "none", borderRadius: "2px" }}>
              Explore Financing Options →
            </Link>
          </div>

          {/* Dot nav */}
          <div style={{ display: "flex", gap: "0.5rem", marginTop: "2.5rem" }}>
            {heroSlides.map((_, i) => (
              <button key={i} onClick={() => setCurrent(i)}
                style={{ width: i === current ? "24px" : "8px", height: "8px", borderRadius: "4px", background: i === current ? G.gold : "rgba(255,255,255,0.35)", border: "none", cursor: "pointer", padding: 0, transition: "all 0.3s ease" }}
                aria-label={`Slide ${i + 1}`} />
            ))}
          </div>
        </div>

        {/* Right — CTA Card */}
        <div style={{ background: "rgba(255,255,255,0.04)", border: `1px solid rgba(255,255,255,0.12)`, borderTop: `3px solid ${G.gold}`, borderRadius: "4px", padding: "2.5rem 2rem", display: "flex", flexDirection: "column", gap: "1.5rem" }}>
          <p style={{ fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase", color: G.gold, fontWeight: "600", fontFamily: G.sans, margin: 0 }}>
            Get Pre-Qualified
          </p>
          <p style={{ fontFamily: G.serif, fontSize: "1.35rem", fontWeight: "700", color: "#fff", lineHeight: "1.35", margin: 0 }}>
            Find Out If You Qualify — No Cost, No Commitment
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.65rem" }}>
            {[
              "SBA 7(a) & 504 Loans",
              "Commercial Real Estate",
              "Equipment Financing",
              "Business Lines of Credit",
              "Fix & Flip · DSCR Rentals",
              "Startup & Franchise Capital",
            ].map((item) => (
              <div key={item} style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
                <span style={{ color: G.gold, fontSize: "0.75rem", flexShrink: 0 }}>◆</span>
                <span style={{ fontSize: "0.875rem", color: "rgba(255,255,255,0.8)", fontFamily: G.sans }}>{item}</span>
              </div>
            ))}
          </div>
          <div style={{ height: "1px", background: "rgba(255,255,255,0.1)" }} />
          <Link
            href="/apply"
            style={{ display: "block", textAlign: "center", padding: "1rem 1.5rem", background: G.gold, color: G.dark, fontFamily: G.sans, fontWeight: "700", fontSize: "0.8rem", letterSpacing: "0.12em", textTransform: "uppercase", textDecoration: "none", borderRadius: "2px" }}
          >
            Start Pre-Qualification →
          </Link>
          <p style={{ fontSize: "0.78rem", color: "rgba(255,255,255,0.45)", fontFamily: G.sans, textAlign: "center", margin: 0, lineHeight: "1.6" }}>
            No upfront fees · No obligation<br />Response within 1 business day
          </p>
        </div>
      </div>
    </section>
  );
}
