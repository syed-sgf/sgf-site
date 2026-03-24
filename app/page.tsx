import Link from "next/link";
import { products } from "@/lib/financing-data";
import { localBusinessSchema } from "@/lib/seo/schema";
import { HeroSection } from "@/components/HeroSection";
import { getGoogleReviews } from "@/lib/google-places";

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
export default async function HomePage() {
  const placeData = await getGoogleReviews();
  const testimonials = placeData?.reviews
    ? placeData.reviews
        .filter((r) => r.rating === 5)
        .slice(0, 4)
        .map((r) => ({
          stars: r.rating,
          quote: r.text,
          name: r.author_name,
          title: r.relative_time_description,
        }))
    : [
        { stars: 5, quote: "Words cannot express how amazing our services have been. Syed takes you through each step, finds a financial institution that fits your needs, and his guidance is most valued. He has been our broker for over 3 years and it has been the best decision we made to give him a call.", name: "Google Reviewer", title: "Verified Google Review" },
        { stars: 5, quote: "They are so comprehensive and yet even if you are a new business or startup they treat you like that is their only function! They call back so much quicker than any financial service company I have ever even heard of. They take time to get to know exactly what your business needs and come up with exactly what they need.", name: "Google Reviewer", title: "Verified Google Review" },
        { stars: 5, quote: "What a breath of fresh air with this company! With the amount of knowledge and experience, you are in good hands and will be well taken care of by Starting Gate Financial.", name: "Google Reviewer", title: "Verified Google Review" },
        { stars: 5, quote: "Highly professional, competitive rates, and lightning-fast funding. Starting Gate Financial exceeded all my expectations. The process was straightforward, and their expertise in securing the right capital for my business was evident from the start. I would highly recommend them to any business owner looking for a hassle-free loan process.", name: "Google Reviewer", title: "Verified Google Review" },
      ];

  const totalReviews = placeData?.user_ratings_total ?? null;
  const overallRating = placeData?.rating ?? 4.9;

  const industries = [
    { name: "Construction & Contractors", slug: "construction" },
    { name: "Restaurants & Food",         slug: "restaurants-food" },
    { name: "Medical & Healthcare",       slug: "medical-healthcare" },
    { name: "Oil & Gas Services",         slug: "oil-gas-services" },
    { name: "Trucking & Transportation",  slug: "trucking-transportation" },
    { name: "Retail & E-Commerce",        slug: "retail-ecommerce" },
    { name: "Professional Services",      slug: "professional-services" },
    { name: "Real Estate Investors",      slug: "real-estate-investors" },
  ];

  return (
    <main style={{ background: G.cream, fontFamily: G.sans }}>
      {/* LocalBusiness structured data */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema()) }} />

      {/* ── HERO ── */}
      <HeroSection />

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
              <Link key={p.slug} href={`/financing-options/${p.slug}`}
                className="sgf-program-card"
                style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "1rem 1.25rem", background: "#fff", border: `1px solid ${G.border}`, borderLeft: `3px solid ${G.primary}`, borderRadius: "3px", textDecoration: "none", transition: "border-color 0.2s, box-shadow 0.2s" }}>
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
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "1rem" }} className="sgf-industry-grid">
            {industries.map((ind) => (
              <Link key={ind.slug} href={`/industries/${ind.slug}`}
                className="sgf-industry-card"
                style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", padding: "1.5rem 1rem", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "4px", textDecoration: "none", transition: "background 0.2s, border-color 0.2s" }}>
                <span style={{ fontSize: "1.75rem", marginBottom: "0.75rem", opacity: 0.85 }}>
                  {ind.slug === "construction" && <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8"><path d="M2 20h20M6 20V10l6-6 6 6v10M10 20v-6h4v6"/></svg>}
                  {ind.slug === "restaurants-food" && <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8"><path d="M18 8h1a4 4 0 0 1 0 8h-1M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8zM6 1v3M10 1v3M14 1v3"/></svg>}
                  {ind.slug === "medical-healthcare" && <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>}
                  {ind.slug === "oil-gas-services" && <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>}
                  {ind.slug === "trucking-transportation" && <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8"><path d="M1 3h15v13H1zM16 8h4l3 3v5h-7V8z"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>}
                  {ind.slug === "retail-ecommerce" && <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>}
                  {ind.slug === "professional-services" && <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>}
                  {ind.slug === "real-estate-investors" && <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>}
                </span>
                <p style={{ fontFamily: G.serif, fontSize: "0.9rem", fontWeight: "700", color: "#fff", margin: "0 0 0.5rem", lineHeight: "1.3" }}>{ind.name}</p>
                <span style={{ fontSize: "0.75rem", color: G.gold, fontFamily: G.sans }}>View Programs →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── TOOLS ── */}
      <section style={{ padding: "4rem 2rem", background: "#fff" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <SectionHeader
            eyebrow="03 — Calculators"
            h2="Run the Numbers Before You Apply"
            sub="Free tools to estimate payments, coverage ratios, and advance costs. No sign-up, no advisory logic — just math."
          />
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "1.5rem",
            marginTop: "2.5rem",
          }}
          className="sgf-tools-grid"
          >
            {[
              {
                title: "Business Loan Calculator",
                desc: "Estimate monthly payments for SBA 7(a), term loans, and general business financing.",
                href: "/tools/business-loan-calculator",
                icon: "💵",
              },
              {
                title: "DSCR Calculator",
                desc: "Evaluate debt service coverage ratio for rental and commercial real estate deals.",
                href: "/tools/dscr-calculator",
                icon: "🏢",
              },
              {
                title: "MCA Calculator",
                desc: "Calculate total payback and effective cost of a merchant cash advance.",
                href: "/tools/mca-calculator",
                icon: "⚡",
              },
            ].map((tool) => (
              <Link
                key={tool.href}
                href={tool.href}
                className="sgf-tool-card"
                style={{
                  display: "block",
                  padding: "2rem 1.75rem",
                  border: `1px solid #E2DDD6`,
                  borderRadius: "4px",
                  background: "#F8F6F1",
                  textDecoration: "none",
                  transition: "border-color 0.2s, box-shadow 0.2s",
                }}
              >
                <div style={{ fontSize: "1.75rem", marginBottom: "0.75rem" }}>{tool.icon}</div>
                <h3 style={{
                  fontFamily: "var(--font-playfair)",
                  fontSize: "1.1rem",
                  fontWeight: 700,
                  color: "#082B09",
                  marginBottom: "0.5rem",
                }}>
                  {tool.title}
                </h3>
                <p style={{
                  fontFamily: "var(--font-source-sans)",
                  fontSize: "0.9rem",
                  color: "#475569",
                  lineHeight: 1.6,
                  margin: 0,
                }}>
                  {tool.desc}
                </p>
              </Link>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: "2rem" }}>
            <Link
              href="/tools"
              style={{
                fontFamily: "var(--font-source-sans)",
                fontSize: "0.9rem",
                color: "#118241",
                textDecoration: "none",
                fontWeight: 600,
                letterSpacing: "0.03em",
              }}
            >
              View all calculators →
            </Link>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section style={{ padding: "4rem 2rem", background: G.cream }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <SectionHeader eyebrow="04 — Client Outcomes" h2="Real Businesses. Real Closings." sub="What business owners say about working with Starting Gate Financial." />

          {/* Rating bar */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "2rem", padding: "1rem 2rem", background: "#fff", border: `1px solid ${G.border}`, borderRadius: "4px", marginBottom: "2rem", flexWrap: "wrap" }}>
            <span style={{ color: G.gold, fontSize: "1rem" }}>★★★★★ <strong style={{ color: G.textDark, fontFamily: G.sans }}>{overallRating}</strong> <span style={{ color: G.textMid, fontSize: "0.85rem" }}>Google Rating{totalReviews ? ` · ${totalReviews} reviews` : ""}</span></span>
            <span style={{ width: "1px", height: "24px", background: G.border }} />
            <span style={{ fontSize: "0.85rem", color: G.textMid, fontFamily: G.sans }}>SBA · CRE · Equipment · Working Capital</span>
            <span style={{ width: "1px", height: "24px", background: G.border }} />
            <Link href="https://g.page/r/Ce4JN4bjU5HuEAE/review" target="_blank" rel="noopener noreferrer" style={{ fontSize: "0.85rem", color: G.primary, fontWeight: "600", fontFamily: G.sans, textDecoration: "none" }}>Read All Reviews →</Link>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "1.25rem" }} className="sgf-testimonials-grid">
            {testimonials.map((t, i) => (
              <div key={i} style={{ background: "#fff", border: `1px solid ${G.border}`, borderRadius: "4px", padding: "1.75rem" }}>
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
