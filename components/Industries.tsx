"use client";
import Link from "next/link";

const industries = [
  { name: "Construction", desc: "Project-driven capital for builders, GCs, and specialty trades", href: "/industries/construction" },
  { name: "Restaurants & Food", desc: "Cash flow-aware financing for operators", href: "/industries/restaurants-food" },
  { name: "Medical & Healthcare", desc: "Practice acquisition, expansion, and equipment upgrades", href: "/industries/medical-healthcare" },
  { name: "Retail & E-Commerce", desc: "Inventory financing and working capital for retail operators", href: "/industries/retail-ecommerce" },
  { name: "Trucking & Transportation", desc: "Fleet financing and working capital for operators", href: "/industries/trucking-transportation" },
  { name: "Professional Services", desc: "Growth capital for established service businesses", href: "/industries/professional-services" },
  { name: "Oil & Gas Services", desc: "Capital for oilfield service and support businesses", href: "/industries/oil-gas-services" },
];

export default function Industries() {
  return (
    <section style={{ background: "#082B09", padding: "6rem 0" }}>
      <div style={{ maxWidth: "1140px", margin: "0 auto", padding: "0 2rem" }}>
        <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
          <p style={{
            fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase",
            color: "#CE9562", fontWeight: "600", marginBottom: "1rem",
            fontFamily: "var(--font-source-sans)", display: "block", textAlign: "center", width: "100%"
          }}>02 — Industry Expertise</p>
          <h2 style={{
            fontFamily: "var(--font-playfair)", fontSize: "clamp(1.9rem, 3vw, 2.5rem)",
            fontWeight: "700", color: "white", lineHeight: "1.2", marginBottom: "1rem"
          }}>We Understand How Your<br />Industry Operates</h2>
          <p style={{
            fontSize: "1rem", color: "rgba(255,255,255,0.55)", maxWidth: "460px",
            margin: "0 auto", lineHeight: "1.75", fontFamily: "var(--font-source-sans)"
          }}>And what lenders need to see. Industry fluency is not optional in commercial financing.</p>
        </div>

        <div style={{
          display: "grid", gridTemplateColumns: "repeat(3, 1fr)",
          border: "1px solid rgba(255,255,255,0.08)"
        }}>
          {industries.map((ind, index) => (
            <Link key={ind.href} href={ind.href} style={{
              display: "block", padding: "2rem",
              background: "#082B09", textDecoration: "none",
              borderRight: (index % 3 !== 2) ? "1px solid rgba(255,255,255,0.08)" : "none",
              borderBottom: "1px solid rgba(255,255,255,0.08)",
              borderTop: "2px solid transparent",
              transition: "border-top-color 0.2s, background 0.2s",
              gridColumn: index === 6 ? "2 / 3" : "auto"
            }}
            onMouseEnter={e => {
              e.currentTarget.style.borderTopColor = "#CE9562";
              e.currentTarget.style.background = "rgba(255,255,255,0.04)";
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderTopColor = "transparent";
              e.currentTarget.style.background = "#082B09";
            }}
            >
              <div style={{ width: "28px", height: "2px", background: "#CE9562", marginBottom: "1.1rem" }} />
              <p style={{
                fontFamily: "var(--font-playfair)", fontSize: "0.98rem",
                fontWeight: "600", color: "white", marginBottom: "0.4rem"
              }}>{ind.name}</p>
              <p style={{
                fontSize: "0.8rem", color: "rgba(255,255,255,0.45)",
                fontFamily: "var(--font-source-sans)", lineHeight: "1.55"
              }}>{ind.desc}</p>
            </Link>
          ))}
        </div>

        <div style={{ textAlign: "center", marginTop: "2.25rem" }}>
          <Link href="/industries" style={{
            fontSize: "0.88rem", fontWeight: "600",
            color: "rgba(255,255,255,0.65)", textDecoration: "none",
            borderBottom: "1px solid #CE9562", paddingBottom: "2px",
            fontFamily: "var(--font-source-sans)"
          }}>Explore all industries →</Link>
        </div>
      </div>
    </section>
  );
}
