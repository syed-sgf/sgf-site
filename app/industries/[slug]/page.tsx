import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { industries, getIndustry } from "@/lib/industry-data";
import { getProduct } from "@/lib/financing-data";

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

// ── Relevant hero photos per industry ────────────────────────────────
const HERO_PHOTOS: Record<string, string> = {
  "construction":          "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1600&q=85&auto=format&fit=crop",
  "food-beverage":         "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1600&q=85&auto=format&fit=crop",
  "healthcare":            "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1600&q=85&auto=format&fit=crop",
  "oil-gas":               "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=1600&q=85&auto=format&fit=crop",
  "real-estate-investors": "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600&q=85&auto=format&fit=crop",
};

// ── Rich SEO metadata per industry ───────────────────────────────────
const SEO_META: Record<string, { title: string; description: string; keywords: string[] }> = {
  "construction": {
    title: "Construction & Contractor Financing | SBA Loans, Equipment & LOC | Starting Gate Financial",
    description: "Finance your construction business with SBA loans, equipment financing, working capital lines, and accounts receivable financing. Built for contractors and trades in Texas and nationwide.",
    keywords: ["construction business loans", "contractor financing", "equipment financing contractors", "SBA loans construction", "working capital contractors", "accounts receivable construction"],
  },
  "food-beverage": {
    title: "Restaurant & Food Service Financing | SBA Loans, Equipment & MCA | Starting Gate Financial",
    description: "Restaurant loans, equipment financing, and working capital for food & beverage operators. SBA 7(a), franchise financing, and merchant cash advance for restaurants, bars, and food producers.",
    keywords: ["restaurant business loans", "food beverage financing", "restaurant SBA loan", "restaurant equipment financing", "franchise financing", "bar and restaurant working capital"],
  },
  "healthcare": {
    title: "Healthcare Practice Financing | Medical Equipment, SBA & Practice Acquisition | Starting Gate Financial",
    description: "Financing for physicians, dentists, and healthcare operators — medical equipment loans, practice acquisitions, SBA 7(a) loans, and working capital for healthcare businesses in Texas.",
    keywords: ["healthcare practice loans", "medical equipment financing", "dental practice loan", "physician practice acquisition", "SBA loans healthcare", "medical practice working capital"],
  },
  "oil-gas": {
    title: "Oil & Gas Business Financing | Equipment, A/R & Working Capital | Starting Gate Financial",
    description: "Capital solutions for oilfield services, upstream, and midstream companies. Equipment financing, accounts receivable financing, and working capital for oil and gas businesses in Texas.",
    keywords: ["oil gas business loans", "oilfield equipment financing", "oil gas working capital", "accounts receivable oilfield", "energy sector financing", "oilfield services financing"],
  },
  "real-estate-investors": {
    title: "Real Estate Investor Financing | DSCR Loans, Fix & Flip & CRE | Starting Gate Financial",
    description: "Financing for real estate investors — DSCR rental loans, fix-and-flip bridge loans, commercial real estate acquisition, and business lines of credit. No W-2 required for DSCR.",
    keywords: ["real estate investor loans", "DSCR rental loans", "fix and flip financing", "commercial real estate loans", "investment property loans Texas", "rental portfolio financing"],
  },
};

export function generateStaticParams() {
  return industries.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const industry = getIndustry(slug);
  if (!industry) return { title: "Not Found" };
  const seo = SEO_META[slug];
  return {
    title: seo?.title ?? `${industry.title} Financing | Starting Gate Financial`,
    description: seo?.description ?? industry.description,
    keywords: seo?.keywords,
    openGraph: {
      title: seo?.title ?? `${industry.title} Financing | Starting Gate Financial`,
      description: seo?.description ?? industry.description,
      url: `https://startinggatefinancial.com/industries/${slug}`,
      siteName: "Starting Gate Financial",
      type: "website",
      images: [{ url: HERO_PHOTOS[slug] ?? "", width: 1600, height: 900, alt: industry.title }],
    },
    alternates: { canonical: `https://startinggatefinancial.com/industries/${slug}` },
    robots: { index: true, follow: true },
  };
}

export default async function IndustryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const industry = getIndustry(slug);
  if (!industry) notFound();

  const relatedProducts = industry.relevantProducts.map((s) => getProduct(s)).filter(Boolean);
  const heroPhoto = HERO_PHOTOS[slug] ?? HERO_PHOTOS["construction"];

  return (
    <main style={{ background: G.cream, fontFamily: G.sans }}>

      {/* ── HERO — relevant photo per industry ───────────────────── */}
      <section style={{ position: "relative", minHeight: "460px", display: "flex", alignItems: "center", overflow: "hidden" }}>
        {/* Background photo */}
        <div style={{ position: "absolute", inset: 0 }}>
          <img src={heroPhoto} alt={industry.title} loading="eager" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center", display: "block" }} />
        </div>
        {/* Overlay */}
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(105deg, rgba(8,43,9,0.93) 0%, rgba(8,43,9,0.78) 60%, rgba(8,43,9,0.5) 100%)" }} />
        {/* Gold bottom accent */}
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 3, background: G.gold, zIndex: 2 }} />

        {/* Content */}
        <div style={{ position: "relative", zIndex: 3, width: "100%", maxWidth: "780px", margin: "0 auto", padding: "5rem 2rem 4rem", display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
          {/* Eyebrow */}
          <p style={{ fontSize: "11px", letterSpacing: "0.25em", textTransform: "uppercase", color: G.gold, fontWeight: "600", marginBottom: "0.75rem", fontFamily: G.sans }}>
            Industry Focus
          </p>
          {/* Breadcrumb */}
          <p style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.5)", marginBottom: "1.25rem", fontFamily: G.sans }}>
            <Link href="/industries" style={{ color: G.gold, textDecoration: "none" }}>Industries</Link>
            {" → "}{industry.title}
          </p>
          {/* H1 */}
          <h1 style={{ fontFamily: G.serif, fontSize: "clamp(2rem,4vw,3rem)", fontWeight: "700", color: "#fff", lineHeight: "1.15", marginBottom: "1rem" }}>
            {industry.title} Financing
          </h1>
          <p style={{ fontSize: "1.05rem", color: "rgba(255,255,255,0.82)", lineHeight: "1.75", maxWidth: "580px", marginBottom: "0.75rem", fontFamily: G.sans }}>
            {industry.subtitle}
          </p>
          <p style={{ fontSize: "0.95rem", color: "rgba(255,255,255,0.58)", lineHeight: "1.75", maxWidth: "560px", marginBottom: "2.25rem", fontFamily: G.sans }}>
            {industry.description}
          </p>
          {/* CTAs */}
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", justifyContent: "center" }}>
            <Link href="/apply" style={{ display: "inline-block", padding: "0.9rem 2.25rem", background: G.gold, color: G.dark, fontFamily: G.sans, fontWeight: "700", fontSize: "0.8rem", letterSpacing: "0.1em", textTransform: "uppercase", textDecoration: "none", borderRadius: "2px" }}>
              Start Pre-Qualification
            </Link>
            <Link href="/financing-options" style={{ display: "inline-block", padding: "0.9rem 2.25rem", background: "transparent", color: "#fff", border: "1.5px solid rgba(255,255,255,0.4)", fontFamily: G.sans, fontWeight: "600", fontSize: "0.8rem", letterSpacing: "0.1em", textTransform: "uppercase", textDecoration: "none", borderRadius: "2px" }}>
              Explore All Programs
            </Link>
          </div>
        </div>
      </section>

      {/* ── KEY STATS ────────────────────────────────────────────── */}
      <section style={{ background: G.cream, padding: "3rem 2rem", borderBottom: `1px solid ${G.border}` }}>
        <div style={{ maxWidth: "900px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1px", background: G.border }} className="ind-stats-grid">
          {industry.keyStats.map((stat) => (
            <div key={stat.label} style={{ background: G.cream, padding: "1.75rem", textAlign: "center" }}>
              <p style={{ fontSize: "10px", letterSpacing: "0.18em", textTransform: "uppercase", color: G.textMid, fontFamily: G.sans, marginBottom: "0.5rem" }}>{stat.label}</p>
              <p style={{ fontFamily: G.serif, fontSize: "1.9rem", fontWeight: "700", color: G.primary, lineHeight: 1 }}>{stat.value}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── FINANCING NEEDS ──────────────────────────────────────── */}
      <section style={{ padding: "4rem 2rem", background: "#fff", borderBottom: `1px solid ${G.border}` }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", marginBottom: "2.5rem" }}>
            <p style={{ fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase", color: G.gold, fontWeight: "600", marginBottom: "0.6rem", fontFamily: G.sans }}>What We See Most</p>
            <h2 style={{ fontFamily: G.serif, fontSize: "clamp(1.6rem,2.5vw,2.1rem)", fontWeight: "700", color: G.textDark, margin: "0", textAlign: "center" }}>Common Financing Needs</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "1rem" }} className="ind-needs-grid sgf-odd-center">
            {industry.commonFinancingNeeds.map((need) => (
              <div key={need} style={{ padding: "1.25rem 1.5rem", background: G.cream, border: `1px solid ${G.border}`, borderLeft: `3px solid ${G.primary}`, borderRadius: "3px", display: "flex", alignItems: "flex-start", gap: "0.75rem" }}>
                <span style={{ color: G.primary, flexShrink: 0, marginTop: "0.1rem", fontWeight: "700" }}>✓</span>
                <p style={{ fontSize: "0.9rem", color: G.textDark, lineHeight: "1.6", margin: 0, fontFamily: G.sans }}>{need}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── RELEVANT FINANCING PROGRAMS ──────────────────────────── */}
      <section style={{ padding: "4rem 2rem", background: "#fff", borderTop: `1px solid ${G.border}`, borderBottom: `1px solid ${G.border}` }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", marginBottom: "2.5rem" }}>
            <p style={{ fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase", color: G.gold, fontWeight: "600", marginBottom: "0.6rem", fontFamily: G.sans }}>Capital Solutions</p>
            <h2 style={{ fontFamily: G.serif, fontSize: "clamp(1.6rem,2.5vw,2.1rem)", fontWeight: "700", color: G.textDark, margin: "0", textAlign: "center" }}>Relevant Financing Programs</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "1rem" }} className="ind-products-grid sgf-odd-center">
            {relatedProducts.map((product) => {
              if (!product) return null;
              return (
                <Link key={product.slug} href={`/financing/${product.slug}`}
                  style={{ padding: "1.75rem", background: G.cream, border: `1px solid ${G.border}`, borderTop: `3px solid ${G.primary}`, borderRadius: "3px", textDecoration: "none", display: "block", transition: "border-color 0.2s, border-top-color 0.2s, box-shadow 0.2s" }}
                  onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = "#C9A84C"; el.style.borderTopColor = "#C9A84C"; el.style.boxShadow = "0 4px 16px rgba(201,168,76,0.15)"; }}
                  onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = G.border; el.style.borderTopColor = G.primary; el.style.boxShadow = "none"; }}
                >
                  <h3 style={{ fontFamily: G.serif, fontSize: "1.05rem", fontWeight: "700", color: G.textDark, margin: "0 0 0.4rem" }}>{product.title}</h3>
                  <p style={{ fontSize: "0.85rem", color: G.textMid, margin: "0 0 0.85rem", fontFamily: G.sans, lineHeight: "1.5" }}>{product.subtitle}</p>
                  <div style={{ display: "flex", gap: "1.25rem", marginBottom: "0.85rem" }}>
                    <span style={{ fontSize: "0.78rem", color: G.textMid, fontFamily: G.sans }}>From <strong style={{ color: G.primary }}>{product.minAmount}</strong></span>
                    <span style={{ fontSize: "0.78rem", color: G.textMid, fontFamily: G.sans }}>Up to <strong style={{ color: G.primary }}>{product.maxAmount}</strong></span>
                  </div>
                  <span style={{ fontSize: "0.8rem", color: G.primary, fontWeight: "600", fontFamily: G.sans }}>View program →</span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── WHY SGF FOR THIS INDUSTRY ────────────────────────────── */}
      <section style={{ padding: "4rem 2rem", background: G.cream, borderBottom: `1px solid ${G.border}` }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", marginBottom: "2.5rem" }}>
            <p style={{ fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase", color: G.gold, fontWeight: "600", marginBottom: "0.6rem", fontFamily: G.sans }}>Why Starting Gate Financial</p>
            <h2 style={{ fontFamily: G.serif, fontSize: "clamp(1.6rem,2.5vw,2.1rem)", fontWeight: "700", color: G.textDark, margin: "0 0 0.75rem", textAlign: "center" }}>Built Around How Your Industry Operates</h2>
            <p style={{ fontSize: "1rem", color: G.textMid, maxWidth: "520px", lineHeight: "1.7", fontFamily: G.sans, margin: 0 }}>
              Lenders evaluate risk through the lens of your sector. We know what they look for — and how to position your file to get approved.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1.25rem" }} className="fin-insight-grid">
            {[
              { icon: "📋", title: "Industry-Specific File Prep", body: "We structure your application around the revenue patterns, collateral types, and risk factors lenders in your sector actually evaluate." },
              { icon: "🏦", title: "Lender Network Alignment", body: "We match your deal to lenders who specialize in your industry — not generalist banks unfamiliar with how your business generates cash." },
              { icon: "⚡", title: "Faster Approvals", body: "When your file is positioned correctly for your industry from the start, underwriting moves faster and approval rates improve significantly." },
            ].map((item) => (
              <div key={item.title} style={{ padding: "1.75rem", background: "#fff", border: `1px solid ${G.border}`, borderTop: `3px solid ${G.primary}`, borderRadius: "4px" }}>
                <div style={{ fontSize: "1.5rem", marginBottom: "0.75rem" }}>{item.icon}</div>
                <p style={{ fontFamily: G.serif, fontSize: "1rem", fontWeight: "700", color: G.textDark, margin: "0 0 0.75rem" }}>{item.title}</p>
                <p style={{ fontSize: "0.9rem", color: G.textMid, lineHeight: "1.7", margin: 0, fontFamily: G.sans }}>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BAND ─────────────────────────────────────────────── */}
      <section style={{ background: G.dark, padding: "3.5rem 2rem", borderTop: `3px solid ${G.gold}` }}>
        <div style={{ maxWidth: "680px", margin: "0 auto", textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center" }}>
          <p style={{ fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase", color: G.gold, fontWeight: "600", marginBottom: "0.75rem", fontFamily: G.sans }}>Ready to Move Forward</p>
          <h2 style={{ fontFamily: G.serif, fontSize: "clamp(1.6rem,2.5vw,2.1rem)", fontWeight: "700", color: "#fff", marginBottom: "1rem" }}>Let&apos;s Structure Your Deal</h2>
          <p style={{ fontSize: "1rem", color: "rgba(255,255,255,0.7)", lineHeight: "1.7", marginBottom: "2rem", fontFamily: G.sans }}>No cost. No obligation. A direct conversation about whether SGF is the right fit for your deal.</p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/apply" style={{ display: "inline-block", padding: "0.9rem 2.25rem", background: G.gold, color: G.dark, fontFamily: G.sans, fontWeight: "700", fontSize: "0.8rem", letterSpacing: "0.1em", textTransform: "uppercase", textDecoration: "none", borderRadius: "2px" }}>Start Pre-Qualification</Link>
            <Link href="/industries" style={{ display: "inline-block", padding: "0.9rem 2.25rem", background: "transparent", color: "#fff", border: "1.5px solid rgba(255,255,255,0.4)", fontFamily: G.sans, fontWeight: "600", fontSize: "0.8rem", letterSpacing: "0.1em", textTransform: "uppercase", textDecoration: "none", borderRadius: "2px" }}>Browse All Industries</Link>
          </div>
        </div>
      </section>

    </main>
  );
}
