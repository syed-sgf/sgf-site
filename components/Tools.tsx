"use client";
import Link from "next/link";

const tools = [
  { title: "SBA Loan Calculator", desc: "Payment scenarios for SBA and term loans", href: "/tools/sba-loan-calculator" },
  { title: "DSCR Calculator", desc: "Evaluate debt service coverage ratio for rental properties", href: "/tools/dscr-calculator" },
  { title: "MCA Calculator", desc: "Estimate true cost of a merchant cash advance", href: "/tools/mca-calculator" },
  { title: "Working Capital Calculator", desc: "Estimate short-term capital coverage needs", href: "/tools/working-capital-calculator" },
];

export default function Tools() {
  return (
    <section style={{ background: "white", padding: "6rem 0", borderTop: "1px solid #E2DDD6" }}>
      <div style={{ maxWidth: "1140px", margin: "0 auto", padding: "0 2rem" }}>
        <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
          <p style={{
            fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase",
            color: "#CE9562", fontWeight: "600", marginBottom: "1rem",
            fontFamily: "var(--font-source-sans)", display: "block", textAlign: "center", width: "100%"
          }}>Planning Tools</p>
          <h2 style={{
            fontFamily: "var(--font-playfair)", fontSize: "clamp(1.9rem, 3vw, 2.5rem)",
            fontWeight: "700", color: "#0F172A", lineHeight: "1.2", marginBottom: "1rem"
          }}>Numbers Before Narratives</h2>
          <p style={{
            fontSize: "1rem", color: "#64748B", maxWidth: "420px",
            margin: "0 auto", lineHeight: "1.75", fontFamily: "var(--font-source-sans)"
          }}>Deterministic calculators built for clarity — not assumptions. Model your financing before you apply.</p>
        </div>

        <div style={{
          display: "grid", gridTemplateColumns: "repeat(2, 1fr)",
          gap: "1.25rem", marginBottom: "2.5rem"
        }}>
          {tools.map((t) => (
            <Link key={t.href} href={t.href} style={{
              display: "flex", justifyContent: "space-between", alignItems: "center",
              padding: "1.75rem 2rem", border: "1px solid #E2DDD6",
              background: "white", textDecoration: "none", borderRadius: "2px",
              transition: "border-color 0.2s, background 0.15s"
            }}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = "#118241";
              e.currentTarget.style.background = "#F8F6F1";
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = "#E2DDD6";
              e.currentTarget.style.background = "white";
            }}
            >
              <div>
                <p style={{
                  fontFamily: "var(--font-playfair)", fontSize: "1rem",
                  fontWeight: "600", color: "#0F172A", marginBottom: "0.3rem"
                }}>{t.title}</p>
                <p style={{ fontSize: "0.81rem", color: "#64748B", fontFamily: "var(--font-source-sans)" }}>{t.desc}</p>
              </div>
              <span style={{ color: "#118241", fontSize: "1.1rem", marginLeft: "1rem", flexShrink: 0 }}>→</span>
            </Link>
          ))}
        </div>

        <div style={{ textAlign: "center" }}>
          <Link href="/tools" style={{
            fontSize: "0.88rem", fontWeight: "600", color: "#082B09",
            textDecoration: "none", borderBottom: "1px solid #CE9562",
            paddingBottom: "2px", fontFamily: "var(--font-source-sans)"
          }}>Open all calculators →</Link>
        </div>
      </div>
    </section>
  );
}
