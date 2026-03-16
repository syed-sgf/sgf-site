import Link from "next/link";

export default function CTABand() {
  return (
    <section style={{
      background: "#082B09", padding: "5rem 2rem",
      textAlign: "center", borderTop: "3px solid #CE9562"
    }}>
      <p style={{
        fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase",
        color: "#CE9562", fontWeight: "600", marginBottom: "1.25rem",
        fontFamily: "var(--font-source-sans)", display: "block"
      }}>Ready to Move Forward?</p>
      <h2 style={{
        fontFamily: "var(--font-playfair)",
        fontSize: "clamp(2rem, 3vw, 2.8rem)",
        fontWeight: "700", color: "white",
        marginBottom: "1rem", lineHeight: "1.2"
      }}>Structure Your Next Move<br />with Confidence</h2>
      <p style={{
        fontSize: "1rem", color: "rgba(255,255,255,0.6)",
        maxWidth: "440px", margin: "0 auto 2.5rem",
        lineHeight: "1.75", fontFamily: "var(--font-source-sans)"
      }}>No credit pull. No obligation. Just a structured conversation about your financing options.</p>
      <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
        <Link href="/apply" style={{
          display: "inline-block", background: "white", color: "#082B09",
          padding: "0.9rem 2.25rem", fontSize: "0.88rem", fontWeight: "700",
          letterSpacing: "0.04em", textTransform: "uppercase",
          textDecoration: "none", borderRadius: "2px"
        }}>Get Pre-Qualified</Link>
        <Link href="/contact" style={{
          display: "inline-block", border: "1px solid rgba(255,255,255,0.3)",
          color: "white", padding: "0.9rem 2.25rem", fontSize: "0.88rem",
          fontWeight: "600", textDecoration: "none", borderRadius: "2px"
        }}>Schedule a Consultation</Link>
      </div>
    </section>
  )
}
