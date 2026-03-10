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

export function generateStaticParams() {
  return industries.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const industry = getIndustry(slug);
  if (!industry) return { title: "Not Found" };
  return {
    title: `${industry.title} Financing | Starting Gate Financial`,
    description: industry.description,
  };
}

export default async function IndustryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const industry = getIndustry(slug);
  if (!industry) notFound();

  const relatedProducts = industry.relevantProducts.map((s) => getProduct(s)).filter(Boolean);

  return (
    <main style={{ background: G.cream, fontFamily: G.sans }}>

      {/* HERO — dark green, centered */}
      <section style={{ background: G.dark, padding: "5rem 2rem 4rem", borderBottom: `3px solid ${G.gold}` }}>
        <div style={{ maxWidth: "780px", margin: "0 auto", display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "1.5rem" }}>
            <Link href="/industries" style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.5)", textDecoration: "none", fontFamily: G.sans }}>Industries</Link>
            <span style={{ color: "rgba(255,255,255,0.3)" }}>›</span>
            <span style={{ fontSize: "0.8rem", color: G.gold, fontFamily: G.sans }}>{industry.title}</span>
          </div>
          <p style={{ fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase", color: G.gold, fontWeight: "600", marginBottom: "1rem", fontFamily: G.sans }}>Industry Focus</p>
          <h1 style={{ fontFamily: G.serif, fontSize: "clamp(2rem,4vw,3rem)", fontWeight: "700", color: "#fff", lineHeight: "1.15", marginBottom: "1.25rem" }}>{industry.title}</h1>
          <p style={{ fontSize: "1.1rem", color: "rgba(255,255,255,0.78)", lineHeight: "1.7", maxWidth: "580px", marginBottom: "0.85rem", fontFamily: G.sans }}>{industry.subtitle}</p>
          <p style={{ fontSize: "0.95rem", color: "rgba(255,255,255,0.58)", lineHeight: "1.75", maxWidth: "580px", marginBottom: "2.25rem", fontFamily: G.sans }}>{industry.description}</p>
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", justifyContent: "center" }}>
            <Link href="/apply" style={{ display: "inline-block", padding: "0.9rem 2.25rem", background: G.gold, color: G.dark, fontFamily: G.sans, fontWeight: "700", fontSize: "0.8rem", letterSpacing: "0.1em", textTransform: "uppercase", textDecoration: "none", borderRadius: "2px" }}>Start Pre-Qualification</Link>
            <Link href="/financing-options" style={{ display: "inline-block", padding: "0.9rem 2.25rem", background: "transparent", color: "#fff", border: "1.5px solid rgba(255,255,255,0.4)", fontFamily: G.sans, fontWeight: "600", fontSize: "0.8rem", letterSpacing: "0.1em", textTransform: "uppercase", textDecoration: "none", borderRadius: "2px" }}>Explore Programs</Link>
          </div>
        </div>
      </section>

      {/* KEY STATS — cream, 3-col centered */}
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

      {/* FINANCING NEEDS — white bg */}
      <section style={{ padding: "4rem 2rem", background: "#fff", borderBottom: `1px solid ${G.border}` }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", marginBottom: "2.5rem" }}>
            <p style={{ fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase", color: G.gold, fontWeight: "600", marginBottom: "0.6rem", fontFamily: G.sans }}>What We See Most</p>
            <h2 style={{ fontFamily: G.serif, fontSize: "clamp(1.6rem,2.5vw,2.1rem)", fontWeight: "700", color: G.textDark, margin: "0", textAlign: "center" }}>Common Financing Needs</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "1rem" }} className="ind-needs-grid">
            {industry.commonFinancingNeeds.map((need) => (
              <div key={need} style={{ padding: "1.25rem 1.5rem", background: G.cream, border: `1px solid ${G.border}`, borderLeft: `3px solid ${G.primary}`, borderRadius: "3px", display: "flex", alignItems: "flex-start", gap: "0.75rem" }}>
                <span style={{ color: G.primary, flexShrink: 0, marginTop: "0.1rem" }}>✓</span>
                <p style={{ fontSize: "0.9rem", color: G.textDark, lineHeight: "1.6", margin: 0, fontFamily: G.sans }}>{need}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RELEVANT PROGRAMS — dark green */}
      <section style={{ padding: "4rem 2rem", background: G.dark }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", marginBottom: "2.5rem" }}>
            <p style={{ fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase", color: G.gold, fontWeight: "600", marginBottom: "0.6rem", fontFamily: G.sans }}>Capital Solutions</p>
            <h2 style={{ fontFamily: G.serif, fontSize: "clamp(1.6rem,2.5vw,2.1rem)", fontWeight: "700", color: "#fff", margin: "0", textAlign: "center" }}>Relevant Financing Programs</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "1rem" }} className="ind-products-grid">
            {relatedProducts.map((product) => {
              if (!product) return null;
              return (
                <Link key={product.slug} href={`/financing/${product.slug}`} style={{ padding: "1.75rem", background: "rgba(255,255,255,0.04)", border: `1px solid rgba(206,149,98,0.25)`, borderTop: `3px solid ${G.gold}`, borderRadius: "3px", textDecoration: "none", display: "block" }}>
                  <h3 style={{ fontFamily: G.serif, fontSize: "1.05rem", fontWeight: "700", color: "#fff", margin: "0 0 0.4rem" }}>{product.title}</h3>
                  <p style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.58)", margin: "0 0 0.85rem", fontFamily: G.sans, lineHeight: "1.5" }}>{product.subtitle}</p>
                  <div style={{ display: "flex", gap: "1.25rem", marginBottom: "0.85rem" }}>
                    <span style={{ fontSize: "0.78rem", color: "rgba(255,255,255,0.45)", fontFamily: G.sans }}>From <strong style={{ color: G.gold }}>{product.minAmount}</strong></span>
                    <span style={{ fontSize: "0.78rem", color: "rgba(255,255,255,0.45)", fontFamily: G.sans }}>Up to <strong style={{ color: G.gold }}>{product.maxAmount}</strong></span>
                  </div>
                  <span style={{ fontSize: "0.8rem", color: G.gold, fontWeight: "600", fontFamily: G.sans }}>View program →</span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA BAND — dark green */}
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
