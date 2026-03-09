"use client";
import { useState, useEffect } from "react";

const slides = [
  "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=900&q=80",
  "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=900&q=80",
  "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=900&q=80",
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setCurrent(p => (p + 1) % slides.length), 5000);
    return () => clearInterval(t);
  }, []);

  return (
    <section style={{ background: "#F8F6F1", borderBottom: "1px solid #E2DDD6" }}>
      <div style={{ maxWidth: "1140px", margin: "0 auto", padding: "0 2rem" }}>
        <div style={{
          display: "grid", gridTemplateColumns: "1fr 1fr",
          gap: "5rem", alignItems: "center",
          minHeight: "calc(100vh - 68px)",
          paddingTop: "5rem", paddingBottom: "5rem"
        }}>

          {/* LEFT */}
          <div>
            <p style={{
              fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase",
              color: "#CE9562", fontWeight: "600", marginBottom: "1.5rem",
              display: "flex", alignItems: "center", gap: "0.75rem",
              fontFamily: "var(--font-source-sans)"
            }}>
              <span style={{ display: "block", width: "24px", height: "1px", background: "#CE9562" }} />
              Commercial Loan Brokerage · Richardson, TX
            </p>

            <h1 style={{
              fontFamily: "var(--font-playfair)",
              fontSize: "clamp(2rem, 3vw, 2.8rem)",
              fontWeight: "700", color: "#0F172A",
              lineHeight: "1.1", letterSpacing: "-0.02em",
              marginBottom: "1.5rem"
            }}>
              SBA Loans & Business Financing,{" "}
              <span style={{ color: "#082B09", fontStyle: "italic" }}>Built for Approval.</span>
            </h1>

            <p style={{
              fontSize: "1.05rem", color: "#475569", lineHeight: "1.75",
              maxWidth: "440px", marginBottom: "2rem",
              fontFamily: "var(--font-source-sans)"
            }}>
              We structure SBA loans, commercial real estate, and working capital deals
              the way underwriters expect — so your file gets funded, not declined.
            </p>

            {/* Trust strip */}
            <div style={{
              display: "flex", flexWrap: "wrap", gap: "0.6rem 1.5rem",
              marginBottom: "2rem"
            }}>
              {[
                "No Upfront Fees",
                "Lender-Aligned Structuring",
                "We Close Deals Others Can't",
                "Nationwide · Based in Richardson, TX"
              ].map(item => (
                <span key={item} style={{
                  display: "inline-flex", alignItems: "center", gap: "0.4rem",
                  fontSize: "0.8rem", fontWeight: "600", color: "#082B09",
                  fontFamily: "var(--font-source-sans)"
                }}>
                  <span style={{ color: "#118241", fontSize: "0.9rem" }}>✓</span>
                  {item}
                </span>
              ))}
            </div>

            {/* CTAs */}
            <div style={{ display: "flex", gap: "1rem", alignItems: "center", flexWrap: "wrap", marginBottom: "2.5rem" }}>
              <a href="/apply" style={{
                display: "inline-flex", alignItems: "center", gap: "0.5rem",
                background: "#118241", color: "white",
                padding: "0.9rem 2rem", fontSize: "0.88rem", fontWeight: "600",
                letterSpacing: "0.05em", textTransform: "uppercase",
                textDecoration: "none", borderRadius: "2px",
                fontFamily: "var(--font-source-sans)"
              }}>
                Start Pre-Qualification →
              </a>
              <a href="/financing-options" style={{
                display: "inline-flex", alignItems: "center", gap: "0.4rem",
                color: "#082B09", fontSize: "0.9rem", fontWeight: "600",
                textDecoration: "none", borderBottom: "1px solid #CE9562",
                paddingBottom: "2px", fontFamily: "var(--font-source-sans)"
              }}>
                Explore Financing Options →
              </a>
            </div>

            {/* Trusted by */}
            <div style={{ paddingTop: "1.75rem", borderTop: "1px solid #E2DDD6" }}>
              <p style={{
                fontSize: "10px", letterSpacing: "0.18em", textTransform: "uppercase",
                color: "#94A3B8", marginBottom: "0.65rem",
                fontFamily: "var(--font-source-sans)"
              }}>Trusted by operators in</p>
              <div style={{
                display: "flex", flexWrap: "wrap", gap: "0 1.75rem",
                fontSize: "0.83rem", fontWeight: "500", color: "#475569",
                fontFamily: "var(--font-source-sans)"
              }}>
                {["Construction", "Healthcare", "Restaurants", "Real Estate", "Transportation"].map((ind, i, arr) => (
                  <span key={ind} style={{ display: "flex", alignItems: "center", gap: "1.75rem" }}>
                    {ind}
                    {i < arr.length - 1 && <span style={{ width: "4px", height: "4px", background: "#CE9562", borderRadius: "50%", display: "inline-block" }} />}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT: Slideshow */}
          <div style={{ position: "relative" }}>
            <div style={{
              position: "absolute", top: "-20px", right: "-20px",
              bottom: "20px", left: "20px",
              border: "1px solid #CE9562", borderRadius: "2px", zIndex: 0
            }} />
            <div style={{
              position: "relative", zIndex: 1, borderRadius: "2px",
              overflow: "hidden", height: "540px"
            }}>
              {slides.map((src, i) => (
                <div key={i} style={{
                  position: "absolute", inset: 0,
                  backgroundImage: `url(${src})`,
                  backgroundSize: "cover", backgroundPosition: "center",
                  opacity: i === current ? 1 : 0,
                  transition: "opacity 1s ease-in-out"
                }} />
              ))}
              {/* Dots */}
              <div style={{
                position: "absolute", bottom: "1.25rem", right: "1.25rem",
                zIndex: 3, display: "flex", gap: "6px"
              }}>
                {slides.map((_, i) => (
                  <button key={i} onClick={() => setCurrent(i)} style={{
                    width: "6px", height: "6px", borderRadius: "50%",
                    background: i === current ? "#CE9562" : "rgba(255,255,255,0.4)",
                    border: "none", cursor: "pointer", padding: 0,
                    transition: "background 0.3s"
                  }} />
                ))}
              </div>
            </div>
            {/* Badge */}
            <div style={{
              position: "absolute", bottom: "-20px", left: "2rem", zIndex: 2,
              background: "#082B09", padding: "1rem 1.5rem", borderRadius: "2px",
              borderLeft: "3px solid #CE9562"
            }}>
              <p style={{
                fontSize: "10px", letterSpacing: "0.18em", textTransform: "uppercase",
                color: "#CE9562", marginBottom: "0.2rem",
                fontFamily: "var(--font-source-sans)"
              }}>Programs Available</p>
              <p style={{
                fontFamily: "var(--font-playfair)", fontSize: "1.4rem",
                fontWeight: "700", color: "white"
              }}>10+ Financing Paths</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
