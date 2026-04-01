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
  { url: "/images/hero-2.jpg", label: "Commercial Real Estate" },
  { url: "/images/hero-1.jpg", label: "Business Capital" },
  { url: "/images/hero-3.jpg", label: "Construction" },
  { url: "/images/hero-4.webp", label: "Oil & Gas" },
  { url: "/images/hero-5.jpg", label: "Business Financing" },
];

const DURATION = 5;
const TOTAL = heroSlides.length;
const CYCLE = DURATION * TOTAL;

export function HeroSection() {
  return (
    <section style={{ position: "relative", minHeight: "580px", overflow: "hidden", background: G.dark }}>
      <style>{`
        @keyframes sgf-fade {
          0%, 16%  { opacity: 1; }
          20%, 100% { opacity: 0; }
        }
        .sgf-slide-0 { animation: sgf-fade ${CYCLE}s 0s infinite; }
        .sgf-slide-1 { animation: sgf-fade ${CYCLE}s ${1 * DURATION}s infinite; opacity: 0; }
        .sgf-slide-2 { animation: sgf-fade ${CYCLE}s ${2 * DURATION}s infinite; opacity: 0; }
        .sgf-slide-3 { animation: sgf-fade ${CYCLE}s ${3 * DURATION}s infinite; opacity: 0; }
        .sgf-slide-4 { animation: sgf-fade ${CYCLE}s ${4 * DURATION}s infinite; opacity: 0; }
        @media (max-width: 768px) {
          .sgf-hero-grid { grid-template-columns: 1fr !important; }
          .sgf-hero-card { display: none !important; }
        }
      `}</style>

      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "3px", background: `linear-gradient(90deg, transparent, ${G.gold}, transparent)`, zIndex: 10 }} />

      {heroSlides.map((slide, i) => (
        <div key={slide.url} className={`sgf-slide-${i}`} style={{ position: "absolute", inset: 0 }}>
          <Image
            src={slide.url}
            alt={slide.label}
            fill
            priority={i === 0}
            loading={i === 0 ? "eager" : "lazy"}
            fetchPriority={i === 0 ? "high" : "auto"}
            sizes="(max-width: 768px) 100vw, 100vw"
            style={{ objectFit: "cover", objectPosition: "center" }}
          />
        </div>
      ))}

      <div style={{ position: "absolute", inset: 0, background: `linear-gradient(135deg, ${G.dark}CC 0%, ${G.dark}88 55%, ${G.dark}55 100%)`, zIndex: 2 }} />

      <div className="sgf-hero-grid" style={{ position: "relative", zIndex: 3, maxWidth: "1200px", margin: "0 auto", padding: "5rem 2rem 4rem", display: "grid", gridTemplateColumns: "1fr 420px", gap: "4rem", alignItems: "center" }}>
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
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.6rem", marginBottom: "2rem" }}>
            {["No Upfront Fees", "Lender-Aligned Structuring", "We Close Deals Others Can't", "Nationwide · Based in Richardson, TX"].map((badge) => (
              <span key={badge} style={{ fontSize: "0.78rem", color: "rgba(255,255,255,0.8)", fontFamily: G.sans, display: "flex", alignItems: "center", gap: "0.3rem" }}>
                <span style={{ color: G.gold }}>✓</span> {badge}
              </span>
            ))}
          </div>
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <Link href="/apply" style={{ display: "inline-block", padding: "0.9rem 2rem", background: G.primary, color: "#fff", fontFamily: G.sans, fontWeight: "700", fontSize: "0.8rem", letterSpacing: "0.1em", textTransform: "uppercase", textDecoration: "none", borderRadius: "2px" }}>
              Get Pre-Qualified →
            </Link>
            <Link href="/financing-options" style={{ display: "inline-block", padding: "0.9rem 2rem", background: "transparent", color: "#fff", border: "1.5px solid rgba(255,255,255,0.45)", fontFamily: G.sans, fontWeight: "600", fontSize: "0.8rem", letterSpacing: "0.1em", textTransform: "uppercase", textDecoration: "none", borderRadius: "2px" }}>
              Explore Financing Options →
            </Link>
          </div>
        </div>

        <div className="sgf-hero-card" style={{ background: "rgba(255,255,255,0.04)", border: `1px solid rgba(255,255,255,0.12)`, borderTop: `3px solid ${G.gold}`, borderRadius: "4px", padding: "2.5rem 2rem", display: "flex", flexDirection: "column", gap: "1.5rem" }}>
          <p style={{ fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase", color: G.gold, fontWeight: "600", fontFamily: G.sans, margin: 0 }}>Get Pre-Qualified</p>
          <p style={{ fontFamily: G.serif, fontSize: "1.35rem", fontWeight: "700", color: "#fff", lineHeight: "1.35", margin: 0 }}>Find Out If You Qualify — No Cost, No Commitment</p>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.65rem" }}>
            {["SBA 7(a) & 504 Loans","Commercial Real Estate","Equipment Financing","Business Lines of Credit","Fix & Flip · DSCR Rentals","Startup & Franchise Capital"].map((item) => (
              <div key={item} style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
                <span style={{ color: G.gold, fontSize: "0.75rem", flexShrink: 0 }}>◆</span>
                <span style={{ fontSize: "0.875rem", color: "rgba(255,255,255,0.8)", fontFamily: G.sans }}>{item}</span>
              </div>
            ))}
          </div>
          <div style={{ height: "1px", background: "rgba(255,255,255,0.1)" }} />
          <Link href="/apply" style={{ display: "block", textAlign: "center", padding: "1rem 1.5rem", background: G.gold, color: G.dark, fontFamily: G.sans, fontWeight: "700", fontSize: "0.8rem", letterSpacing: "0.12em", textTransform: "uppercase", textDecoration: "none", borderRadius: "2px" }}>
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
