"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { products } from "@/lib/financing-data";
import { localBusinessSchema } from "@/lib/seo/schema";

/* ── Design tokens ──────────────────────────────────────────────── */
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

/* ── Hero slides ────────────────────────────────────────────────── */
const heroSlides = [
  { url: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=90&auto=format&fit=crop", label: "Commercial Real Estate" },
  { url: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&q=90&auto=format&fit=crop", label: "Construction" },
  { url: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=1200&q=90&auto=format&fit=crop", label: "Business Capital" },
  { url: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=1200&q=90&auto=format&fit=crop", label: "Oil & Gas" },
  { url: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1200&q=90&auto=format&fit=crop", label: "Food & Beverage" },
];

/* ── Section heading ────────────────────────────────────────────── */
function SectionHeader({ eyebrow, h2, sub, light = false }: { eyebrow: string; h2: string; sub?: string; light?: boolean }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", marginBottom: "2.5rem" }}>
      <p style={{ fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase", color: G.gold, fontWeight: "600", marginBottom: "0.6rem", fontFamily: G.sans }}>{eyebrow}</p>
      <h2 style={{ fontFamily: G.serif, fontSize: "clamp(1.8rem,3vw,2.4rem)", fontWeight: "700", color: light ? "#fff" : G.textDark, lineHeight: "1.2", margin: "0 0 0.75rem", textAlign: "center" }}>{h2}</h2>
      {sub && <p style={{ fontSize: "1rem", color: light ? "rgba(255,255,255,0.72)" : G.textMid, maxWidth: "520px", lineHeight: "1.7", fontFamily: G.sans, textAlign: "center", margin: 0 }}>{sub}</p>}
    </div>
  );
}

/* ── Page ───────────────────────────────────────────────────────── */
export default function HomePage() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setCurrent((p) => (p + 1) % heroSlides.length), 5000);
    return () => clearInterval(t);
  }, []);

  const industries = [
    { name: "Construction & Contractors", slug: "construction", icon: "⚒" },
    { name: "Restaurants & Food", slug: "restaurants-food", icon: "🍽" },
    { name: "Medical & Healthcare", slug: "medical-healthcare", icon: "⚕" },
    { name: "Oil & Gas Services", slug: "oil-gas-services", icon: "⛽" },
    { name: "Trucking & Transportation", slug: "trucking-transportation", icon: "🚛" },
  ];

  const testimonials = [
    { stars: 5, quote: "Syed helped us secure an SBA loan when two other sources couldn't get it done. He knew exactly what the lender needed and walked us through every step. Closed in under 60 days.", name: "Marcus T.", title: "Restaurant Owner · Dallas TX" },
    { stars: 5, quote: "Very professional and knowledgeable. SGF structured our equipment financing the right way — no surprises at closing. Will use again for our next location.", name: "Linda K.", title: "Healthcare Practice Owner" },
    { stars: 5, quote: "I came to SGF after getting turned down twice. Syed reviewed my financials, told me exactly where I stood, and got us funded. Straight shooter, no runaround.", name: "David R.", title: "Contractor · Fort Worth TX" },
    { stars: 5, quote: "SGF handled our commercial real estate financing from start to finish. Syed knows lenders, knows the market, and delivers. Highly recommend for any serious business owner.", name: "Priya M.", title: "CRE Investor · DFW" },
  ];

  return (
    <main style={{ background: G.cream, fontFamily: G.sans }}>
      {/* LocalBusiness structured data */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema()) }} />

      {/* ── HERO ── */}
      <section style={{ position: "relative", minHeight: "580px", overflow: "hidden", background: G.dark }}>
        {/* Gold top line */}
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "3px", background: `linear-gradient(90deg, transparent, ${G.gold}, transparent)`, zIndex: 10 }} />

        {/* Slides */}
        {heroSlides.map((slide, i) => (
          <div key={slide.url} style={{ position: "absolute", inset: 0, opacity: i === current ? 1 : 0, transition: "opacity 1.2s ease-in-out" }}>
            <Image src={slide.url} alt={slide.label} fill priority={i === 0} sizes="100vw"
              style={{ objectFit: "cover", objectPosition: "center" }} />
          </div>
        ))}
        <div style={{ position: "absolute", inset: 0, background: `linear-gradient(135deg, ${G.dark}CC 0%, ${G.dark}88 55%, ${G.dark}55 100%)`, zIndex: 2 }} />

        {/* Hero content: left copy + right GHL form */}
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

          {/* Right — CTA Card (replaces empty GHL slot) */}
          <div style={{ background: "rgba(255,255,255,0.04)", border: `1px solid rgba(255,255,255,0.12)`, borderTop: `3px solid ${G.gold}`, borderRadius: "4px", padding: "2.5rem 2rem", display: "flex", flexDirection: "column", gap: "1.5rem" }}>

            {/* Eyebrow */}
            <p style={{ fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase", color: G.gold, fontWeight: "600", fontFamily: G.sans, margin: 0 }}>
              Get Pre-Qualified
            </p>

            {/* Heading */}
            <p style={{ fontFamily: G.serif, fontSize: "1.35rem", fontWeight: "700", color: "#fff", lineHeight: "1.35", margin: 0 }}>
              Find Out If You Qualify — No Cost, No Commitment
            </p>

            {/* Checklist */}
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

            {/* Divider */}
            <div style={{ height: "1px", background: "rgba(255,255,255,0.1)" }} />

            {/* CTA Button */}
            <Link
              href="/apply"
              style={{ display: "block", textAlign: "center", padding: "1rem 1.5rem", background: G.gold, color: G.dark, fontFamily: G.sans, fontWeight: "700", fontSize: "0.8rem", letterSpacing: "0.12em", textTransform: "uppercase", textDecoration: "none", borderRadius: "2px" }}
            >
              Start Pre-Qualification →
            </Link>

            {/* Reassurance */}
            <p style={{ fontSize: "0.78rem", color: "rgba(255,255,255,0.45)", fontFamily: G.sans, textAlign: "center", margin: 0, lineHeight: "1.6" }}>
              No upfront fees · No obligation<br />Response within 1 business day
            </p>

          </div>
        </div>
      </section>

      {/* ── TRUST BAR ── */}
      <section style={{ background: G.dark, borderBottom: `1px solid rgba(255,255,255,0.08)` }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "1.25rem 2rem", display: "flex", alignItems: "center", justifyContent: "center", gap: "3rem", flexWrap: "wrap" }}>
          {[
            { label: "Trusted by Operators In", value: "Construction · Healthcare · Restaurants · Real Estate · Transportation" },
            { label: "Programs Available", value: "10+ Financing Paths" },
            { label: "Google Rating", value: "★★★★★  5.0" },
          ].map((item) => (
            <div key={item.label} style={{ textAlign: "center" }}>
              <p style={{ fontSize: "10px", letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(255,255,255,0.45)", fontFamily: G.sans, marginBottom: "0.25rem" }}>{item.label}</p>
              <p style={{ fontSize: "0.85rem", color: G.gold, fontFamily: G.sans, fontWeight: "600" }}>{item.value}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── FINANCING PROGRAMS ── */}
      <section style={{ padding: "4rem 2rem", background: G.cream }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <SectionHeader eyebrow="01 — Financing Programs" h2="Capital Structures We Work With" sub="Every program is matched to your business profile, not reverse-engineered from a product sheet." />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "0.75rem", marginBottom: "2rem" }} className="sgf-programs-grid">
            {products.map((p) => (
              <Link key={p.slug} href={`/financing-options/${p.slug}`} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "1rem 1.25rem", background: "#fff", border: `1px solid ${G.border}`, borderLeft: `3px solid ${G.primary}`, borderRadius: "3px", textDecoration: "none", transition: "border-color 0.2s, box-shadow 0.2s" }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderLeftColor = G.gold; (e.currentTarget as HTMLElement).style.boxShadow = "0 2px 12px rgba(8,43,9,0.08)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderLeftColor = G.primary; (e.currentTarget as HTMLElement).style.boxShadow = "none"; }}>
                <div>
                  <p style={{ fontFamily: G.serif, fontSize: "0.95rem", fontWeight: "700", color: G.textDark, margin: "0 0 0.2rem" }}>{p.title}</p>
                  <p style={{ fontSize: "0.8rem", color: G.textMid, margin: 0, fontFamily: G.sans }}>{p.subtitle}</p>
                </div>
                <span style={{ color: G.gold, fontSize: "1rem", flexShrink: 0, marginLeft: "1rem" }}>→</span>
              </Link>
            ))}
          </div>
          <div style={{ textAlign: "center" }}>
            <Link href="/financing-options" style={{ fontSize: "0.85rem", color: G.primary, fontWeight: "600", fontFamily: G.sans, textDecoration: "none" }}>
              View all financing programs →
            </Link>
          </div>
        </div>
      </section>

      {/* ── INDUSTRY EXPERTISE ── */}
      <section style={{ background: G.dark, padding: "4rem 2rem", borderTop: `3px solid ${G.gold}`, borderBottom: `3px solid ${G.gold}` }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <SectionHeader eyebrow="02 — Industry Expertise" h2="We Understand How Your Industry Operates" sub="Capital needs differ by sector. We structure financing around how your business actually earns, spends, and grows." light />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: "1rem" }} className="sgf-industry-grid">
            {industries.map((ind) => (
              <Link key={ind.slug} href={`/industries/${ind.slug}`} style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", padding: "1.5rem 1rem", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "4px", textDecoration: "none", transition: "background 0.2s, border-color 0.2s" }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "rgba(206,149,98,0.12)"; (e.currentTarget as HTMLElement).style.borderColor = G.gold; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.05)"; (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.1)"; }}>
                <span style={{ fontSize: "1.75rem", marginBottom: "0.75rem", opacity: 0.85 }}>
                  {ind.slug === "construction" && <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8"><path d="M2 20h20M6 20V10l6-6 6 6v10M10 20v-6h4v6"/></svg>}
                  {ind.slug === "restaurants-food" && <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8"><path d="M18 8h1a4 4 0 0 1 0 8h-1M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8zM6 1v3M10 1v3M14 1v3"/></svg>}
                  {ind.slug === "medical-healthcare" && <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>}
                  {ind.slug === "oil-gas-services" && <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>}
                  {ind.slug === "trucking-transportation" && <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8"><path d="M1 3h15v13H1zM16 8h4l3 3v5h-7V8z"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>}
                </span>
                <p style={{ fontFamily: G.serif, fontSize: "0.9rem", fontWeight: "700", color: "#fff", margin: "0 0 0.5rem", lineHeight: "1.3" }}>{ind.name}</p>
                <span style={{ fontSize: "0.75rem", color: G.gold, fontFamily: G.sans }}>View Programs →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section style={{ padding: "4rem 2rem", background: G.cream }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <SectionHeader eyebrow="03 — Client Outcomes" h2="Real Businesses. Real Closings." sub="What business owners say about working with Starting Gate Financial." />

          {/* Rating bar */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "2rem", padding: "1rem 2rem", background: "#fff", border: `1px solid ${G.border}`, borderRadius: "4px", marginBottom: "2rem", flexWrap: "wrap" }}>
            <span style={{ color: G.gold, fontSize: "1rem" }}>★★★★★ <strong style={{ color: G.textDark, fontFamily: G.sans }}>5.0</strong> <span style={{ color: G.textMid, fontSize: "0.85rem" }}>Google Rating</span></span>
            <span style={{ width: "1px", height: "24px", background: G.border }} />
            <span style={{ fontSize: "0.85rem", color: G.textMid, fontFamily: G.sans }}>SBA · CRE · Equipment · Working Capital</span>
            <span style={{ width: "1px", height: "24px", background: G.border }} />
            <Link href="#" style={{ fontSize: "0.85rem", color: G.primary, fontWeight: "600", fontFamily: G.sans, textDecoration: "none" }}>Read All Reviews →</Link>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "1.25rem" }} className="sgf-testimonials-grid">
            {testimonials.map((t) => (
              <div key={t.name} style={{ background: "#fff", border: `1px solid ${G.border}`, borderRadius: "4px", padding: "1.75rem" }}>
                <div style={{ color: G.gold, fontSize: "0.9rem", marginBottom: "1rem" }}>{"★".repeat(t.stars)}</div>
                <p style={{ fontFamily: G.serif, fontSize: "1rem", color: G.textDark, lineHeight: "1.7", marginBottom: "1.25rem", fontStyle: "italic" }}>&ldquo;{t.quote}&rdquo;</p>
                <div style={{ borderTop: `1px solid ${G.border}`, paddingTop: "1rem" }}>
                  <p style={{ fontFamily: G.sans, fontWeight: "700", fontSize: "0.9rem", color: G.textDark, margin: "0 0 0.2rem" }}>{t.name}</p>
                  <p style={{ fontFamily: G.sans, fontSize: "0.8rem", color: G.textMid, margin: "0 0 0.4rem" }}>{t.title}</p>
                  <span style={{ fontSize: "0.75rem", color: G.gold, fontFamily: G.sans }}>★ Google Review</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BAND ── */}
      <section style={{ background: G.dark, padding: "3.5rem 2rem", borderTop: `3px solid ${G.gold}` }}>
        <div style={{ maxWidth: "680px", margin: "0 auto", textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center" }}>
          <p style={{ fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase", color: G.gold, fontWeight: "600", marginBottom: "0.75rem", fontFamily: G.sans }}>Ready to Move Forward</p>
          <h2 style={{ fontFamily: G.serif, fontSize: "clamp(1.6rem,2.5vw,2.1rem)", fontWeight: "700", color: "#fff", marginBottom: "1rem" }}>Let&apos;s Talk About Your Capital Need</h2>
          <p style={{ fontSize: "1rem", color: "rgba(255,255,255,0.7)", lineHeight: "1.7", marginBottom: "2rem", fontFamily: G.sans }}>
            No cost. No obligation. A direct conversation about whether SGF is the right fit for your deal.
          </p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/apply" style={{ display: "inline-block", padding: "0.9rem 2.25rem", background: G.gold, color: G.dark, fontFamily: G.sans, fontWeight: "700", fontSize: "0.8rem", letterSpacing: "0.1em", textTransform: "uppercase", textDecoration: "none", borderRadius: "2px" }}>
              Get Pre-Qualified
            </Link>
            <Link href="/financing-options" style={{ display: "inline-block", padding: "0.9rem 2.25rem", background: "transparent", color: "#fff", border: "1.5px solid rgba(255,255,255,0.4)", fontFamily: G.sans, fontWeight: "600", fontSize: "0.8rem", letterSpacing: "0.1em", textTransform: "uppercase", textDecoration: "none", borderRadius: "2px" }}>
              Explore Programs
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}

