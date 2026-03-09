const reviews = [
  { stars: 5, text: "Syed helped us secure an SBA loan when two other brokers couldn't get it done. He knew exactly what the lender needed and walked us through every step. Closed in under 60 days.", name: "Marcus T.", detail: "Restaurant Owner · Dallas TX" },
  { stars: 5, text: "Very professional and knowledgeable. SGF structured our equipment financing the right way — no surprises at closing. Will use again for our next location.", name: "Linda K.", detail: "Healthcare Practice Owner" },
  { stars: 5, text: "I came to SGF after getting turned down twice. Syed reviewed my financials, told me exactly where I stood, and got us funded. Straight shooter, no runaround.", name: "Carlos R.", detail: "Trucking Company Owner" },
  { stars: 5, text: "SGF handled our commercial real estate financing from start to finish. Syed knows lenders, knows the market, and delivers. Highly recommend for any serious business owner.", name: "David M.", detail: "Real Estate Investor · Fort Worth TX" },
];

const steps = [
  { num: "01", title: "Assess", desc: "We review your business profile, goals, and financials to identify the right capital path — before any lender sees your file." },
  { num: "02", title: "Structure", desc: "We build your deal the way lenders expect it — clean package, correct program, right timing. No credit pull. No obligation." },
  { num: "03", title: "Close", desc: "We manage lender communication, underwriting questions, and closing coordination from start to funded." },
];

export default function Process() {
  return (
    <section style={{ background: "#F8F6F1", padding: "6rem 0", borderTop: "1px solid #E2DDD6" }}>
      <div style={{ maxWidth: "1140px", margin: "0 auto", padding: "0 2rem" }}>

        {/* Section header */}
        <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
          <p style={{
            fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase",
            color: "#CE9562", fontWeight: "600", marginBottom: "1rem",
            fontFamily: "var(--font-source-sans)", display: "block", textAlign: "center", width: "100%"
          }}>03 — Client Outcomes</p>
          <h2 style={{
            fontFamily: "var(--font-playfair)", fontSize: "clamp(1.9rem, 3vw, 2.5rem)",
            fontWeight: "700", color: "#0F172A", lineHeight: "1.2", marginBottom: "1rem"
          }}>Real Businesses. Real Closings.</h2>
          <p style={{
            fontSize: "1rem", color: "#64748B", maxWidth: "420px",
            margin: "0 auto", lineHeight: "1.75", fontFamily: "var(--font-source-sans)"
          }}>What business owners say about working with Starting Gate Financial.</p>
        </div>

        {/* Google trust row */}
        <div style={{
          display: "flex", alignItems: "center", justifyContent: "center",
          gap: "2rem", marginBottom: "2.5rem", padding: "1.25rem 2rem",
          background: "white", border: "1px solid #E2DDD6", borderRadius: "2px",
          flexWrap: "wrap"
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
            <span style={{ color: "#CE9562", fontSize: "1.1rem" }}>★★★★★</span>
            <span style={{ fontWeight: "700", fontSize: "0.95rem", color: "#0F172A" }}>5.0</span>
            <span style={{ fontSize: "0.82rem", color: "#64748B", fontFamily: "var(--font-source-sans)" }}>Google Rating</span>
          </div>
          <div style={{ width: "1px", height: "24px", background: "#E2DDD6" }} />
          <span style={{ fontSize: "0.82rem", color: "#64748B", fontFamily: "var(--font-source-sans)" }}>SBA · CRE · Equipment · Working Capital</span>
          <div style={{ width: "1px", height: "24px", background: "#E2DDD6" }} />
          <a href="https://g.page/r/startinggatefinancial/review" style={{
            fontSize: "0.82rem", fontWeight: "600", color: "#118241",
            textDecoration: "none", borderBottom: "1px solid #CE9562",
            paddingBottom: "1px", fontFamily: "var(--font-source-sans)"
          }}>Read All Reviews →</a>
        </div>

        {/* Review cards */}
        <div style={{
          display: "grid", gridTemplateColumns: "repeat(2, 1fr)",
          gap: "1.25rem", marginBottom: "5rem"
        }}>
          {reviews.map((r, i) => (
            <div key={i} style={{
              background: "white", border: "1px solid #E2DDD6",
              padding: "1.75rem 2rem", borderRadius: "2px"
            }}>
              <div style={{ display: "flex", gap: "3px", marginBottom: "1rem" }}>
                {[...Array(r.stars)].map((_, j) => (
                  <span key={j} style={{ color: "#CE9562", fontSize: "13px" }}>★</span>
                ))}
              </div>
              <p style={{
                fontSize: "0.9rem", color: "#334155", lineHeight: "1.75",
                fontStyle: "italic", marginBottom: "1.25rem",
                fontFamily: "var(--font-source-sans)"
              }}>&ldquo;{r.text}&rdquo;</p>
              <div style={{ borderTop: "1px solid #E2DDD6", paddingTop: "0.9rem" }}>
                <p style={{ fontWeight: "600", color: "#0F172A", fontSize: "0.87rem", fontFamily: "var(--font-source-sans)" }}>{r.name}</p>
                <p style={{ fontSize: "0.77rem", color: "#94A3B8", fontFamily: "var(--font-source-sans)" }}>{r.detail}</p>
                <p style={{ fontSize: "0.71rem", color: "#CE9562", marginTop: "0.3rem", fontFamily: "var(--font-source-sans)", letterSpacing: "0.05em" }}>★ Google Review</p>
              </div>
            </div>
          ))}
        </div>

        {/* Process steps */}
        <div style={{ borderTop: "1px solid #E2DDD6", paddingTop: "4rem", marginBottom: "3rem", textAlign: "center" }}>
          <p style={{
            fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase",
            color: "#CE9562", fontWeight: "600", marginBottom: "1rem",
            fontFamily: "var(--font-source-sans)", display: "block", textAlign: "center", width: "100%"
          }}>How We Work</p>
          <h2 style={{
            fontFamily: "var(--font-playfair)", fontSize: "clamp(1.7rem, 2.5vw, 2.2rem)",
            fontWeight: "700", color: "#0F172A", marginBottom: "1rem"
          }}>Assess. Structure. Close.</h2>
          <p style={{
            fontSize: "1rem", color: "#64748B", maxWidth: "440px",
            margin: "0 auto", fontFamily: "var(--font-source-sans)", lineHeight: "1.75"
          }}>A financing process built around how lenders actually think — not how brokers hope it works.</p>
        </div>

        <div style={{
          display: "grid", gridTemplateColumns: "repeat(3, 1fr)",
          border: "1px solid #E2DDD6", marginBottom: "3rem"
        }}>
          {steps.map((s, i) => (
            <div key={s.num} style={{
              padding: "2.5rem 2rem", textAlign: "center",
              borderRight: i < 2 ? "1px solid #E2DDD6" : "none"
            }}>
              <p style={{
                fontFamily: "var(--font-playfair)", fontSize: "2.8rem",
                fontWeight: "700", color: "#118241", lineHeight: "1", marginBottom: "0.75rem"
              }}>{s.num}</p>
              <p style={{
                fontFamily: "var(--font-playfair)", fontSize: "1.1rem",
                fontWeight: "600", color: "#0F172A", marginBottom: "0.5rem"
              }}>{s.title}</p>
              <p style={{
                fontSize: "0.85rem", color: "#64748B", lineHeight: "1.65",
                fontFamily: "var(--font-source-sans)"
              }}>{s.desc}</p>
            </div>
          ))}
        </div>

        <div style={{ textAlign: "center" }}>
          <a href="/apply" style={{
            display: "inline-block", background: "#118241", color: "white",
            padding: "0.9rem 2.25rem", fontSize: "0.88rem", fontWeight: "600",
            letterSpacing: "0.05em", textTransform: "uppercase", textDecoration: "none",
            borderRadius: "2px", fontFamily: "var(--font-source-sans)"
          }}>Start Pre-Qualification</a>
        </div>
      </div>
    </section>
  );
}
