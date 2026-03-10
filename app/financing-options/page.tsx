"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { industries } from "@/lib/industry-data";
import type { Metadata } from "next";

/* ─── Design tokens (matches financing-options page exactly) ────── */
const G = {
  dark: "#082B09",
  primary: "#118241",
  gold: "#CE9562",
  cream: "#F8F6F1",
  border: "#E2DDD6",
  textDark: "#0F172A",
  textMid: "#475569",
  textLight: "#94A3B8",
  slate50: "#F8FAFC",
  serif: "var(--font-playfair)",
  sans: "var(--font-source-sans)",
};

/* ─── Hero slideshow images ────────────────────────────────────── */
const heroSlides = [
  {
    url: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&q=90&auto=format&fit=crop",
    label: "Construction",
  },
  {
    url: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1200&q=90&auto=format&fit=crop",
    label: "Healthcare",
  },
  {
    url: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1200&q=90&auto=format&fit=crop",
    label: "Food & Beverage",
  },
  {
    url: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=90&auto=format&fit=crop",
    label: "Commercial Real Estate",
  },
  {
    url: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=1200&q=90&auto=format&fit=crop",
    label: "Oil & Gas",
  },
];

/* ─── Industry SVG icons ───────────────────────────────────────── */
const icons: Record<string, React.ReactNode> = {
  construction: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" className="w-7 h-7">
      <path d="M2 20h20" />
      <path d="M4 20V10l8-6 8 6v10" />
      <rect x="8" y="13" width="8" height="7" rx="0.5" />
    </svg>
  ),
  "food-beverage": (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" className="w-7 h-7">
      <path d="M3 2v7c0 1.5 2 3 2 3v9a1 1 0 002 0v-9s2-1.5 2-3V2" />
      <path d="M8 2v5" />
      <path d="M13 2c0 0 3 2.5 3 6s-3 6-3 6v7a1 1 0 002 0V2" />
    </svg>
  ),
  healthcare: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" className="w-7 h-7">
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M12 8v8M8 12h8" />
    </svg>
  ),
  "oil-gas": (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" className="w-7 h-7">
      <path d="M12 2C10 7 6 10 6 15a6 6 0 0012 0c0-5-4-8-6-13z" />
      <path d="M12 12v5" />
    </svg>
  ),
  "real-estate-investors": (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" className="w-7 h-7">
      <path d="M3 10.5L12 3l9 7.5V20a1 1 0 01-1 1H4a1 1 0 01-1-1v-9.5z" />
      <path d="M9 21V13h6v8" />
    </svg>
  ),
};

/* ─── Hero Slideshow component ─────────────────────────────────── */
function HeroSlideshow() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "540px",
        overflow: "hidden",
      }}
    >
      {/* Slides — img tags for LCP/lazy-load control */}
      {heroSlides.map((slide, i) => (
        <div
          key={slide.url}
          style={{
            position: "absolute",
            inset: 0,
            opacity: i === current ? 1 : 0,
            transition: "opacity 1.2s ease-in-out",
          }}
        >
          <img
            src={slide.url}
            alt={slide.label}
            loading={i === 0 ? "eager" : "lazy"}
            fetchPriority={i === 0 ? "high" : "low"}
            decoding={i === 0 ? "sync" : "async"}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center",
              display: "block",
            }}
          />
        </div>
      ))}

      {/* Dark overlay — SGF green tinted */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(to bottom, rgba(8,43,9,0.72) 0%, rgba(8,43,9,0.55) 60%, rgba(8,43,9,0.75) 100%)",
          zIndex: 1,
        }}
      />

      {/* Gold accent line — top */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "3px",
          background: `linear-gradient(to right, transparent, ${G.gold}, transparent)`,
          zIndex: 2,
        }}
      />

      {/* Hero content — centered */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 2,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: "2rem",
        }}
      >
        <p
          style={{
            fontSize: "11px",
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: G.gold,
            fontWeight: "600",
            marginBottom: "1.25rem",
            fontFamily: G.sans,
          }}
        >
          Industry Focus
        </p>

        <h1
          style={{
            fontFamily: G.serif,
            fontSize: "clamp(2.4rem, 4.5vw, 3.5rem)",
            fontWeight: "700",
            color: "white",
            lineHeight: "1.1",
            letterSpacing: "-0.02em",
            marginBottom: "1.5rem",
            maxWidth: "700px",
          }}
        >
          Industries We Finance
        </h1>

        <p
          style={{
            fontSize: "1.05rem",
            color: "rgba(255,255,255,0.78)",
            maxWidth: "520px",
            lineHeight: "1.75",
            fontFamily: G.sans,
            marginBottom: "2.5rem",
          }}
        >
          Every industry has its own capital rhythm. We structure financing around how your
          sector actually operates — not generic loan templates.
        </p>

        <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", justifyContent: "center" }}>
          <Link
            href="/apply"
            style={{
              display: "inline-block",
              background: G.gold,
              color: G.dark,
              padding: "0.85rem 2.25rem",
              fontSize: "0.85rem",
              fontWeight: "700",
              letterSpacing: "0.04em",
              textTransform: "uppercase",
              textDecoration: "none",
              fontFamily: G.sans,
            }}
          >
            Start Pre-Qualification
          </Link>
          <Link
            href="/financing-options"
            style={{
              display: "inline-block",
              background: "transparent",
              color: "white",
              border: "1px solid rgba(255,255,255,0.45)",
              padding: "0.85rem 2.25rem",
              fontSize: "0.85rem",
              fontWeight: "600",
              letterSpacing: "0.04em",
              textTransform: "uppercase",
              textDecoration: "none",
              fontFamily: G.sans,
            }}
          >
            Explore Programs
          </Link>
        </div>

        {/* Slide dots */}
        <div
          style={{
            position: "absolute",
            bottom: "1.75rem",
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            gap: "8px",
          }}
        >
          {heroSlides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              style={{
                width: i === current ? "28px" : "8px",
                height: "8px",
                borderRadius: "4px",
                background: i === current ? G.gold : "rgba(255,255,255,0.4)",
                border: "none",
                cursor: "pointer",
                padding: 0,
                transition: "all 0.3s ease",
              }}
              aria-label={`Slide ${i + 1}: ${heroSlides[i].label}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

/* ─── Page ─────────────────────────────────────────────────────── */
export default function IndustriesHubPage() {
  return (
    <main>
      {/* ── HERO — image slideshow ──────────────────────────────── */}
      <HeroSlideshow />

      {/* ── INDUSTRY CARDS GRID ─────────────────────────────────── */}
      <section
        style={{
          background: G.cream,
          padding: "5rem 2rem",
          borderBottom: `1px solid ${G.border}`,
        }}
      >
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          {/* Section heading — centered */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
              marginBottom: "3.5rem",
            }}
          >
            <p
              style={{
                fontSize: "11px",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: G.gold,
                fontWeight: "600",
                marginBottom: "1rem",
                fontFamily: G.sans,
              }}
            >
              Select Your Sector
            </p>
            <h2
              style={{
                fontFamily: G.serif,
                fontSize: "clamp(1.9rem, 3vw, 2.5rem)",
                fontWeight: "700",
                color: G.textDark,
                lineHeight: "1.2",
                marginBottom: "1rem",
                textAlign: "center",
              }}
            >
              Industries We Serve
            </h2>
            <p
              style={{
                fontSize: "1rem",
                color: G.textMid,
                maxWidth: "480px",
                lineHeight: "1.75",
                fontFamily: G.sans,
                textAlign: "center",
              }}
            >
              Select your sector to see the programs, structures, and lender relationships
              most relevant to your business.
            </p>
          </div>

          {/* Industry grid — 2-col, last odd card centered */}
          <div
            className="industries-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: "1.5rem",
            }}
          >
            {industries.map((industry, idx) => {
              const isLastOdd =
                idx === industries.length - 1 && industries.length % 2 !== 0;
              return (
                <Link
                  key={industry.slug}
                  href={`/industries/${industry.slug}`}
                  style={{
                    gridColumn: isLastOdd ? "1 / -1" : undefined,
                    maxWidth: isLastOdd ? "560px" : undefined,
                    margin: isLastOdd ? "0 auto" : undefined,
                    width: isLastOdd ? "100%" : undefined,
                    display: "flex",
                    gap: "1.5rem",
                    alignItems: "flex-start",
                    border: `1px solid ${G.border}`,
                    padding: "2rem",
                    textDecoration: "none",
                    background: "white",
                    transition: "border-color 0.2s, box-shadow 0.2s",
                  }}
                  className="industry-card-link"
                >
                  {/* Icon */}
                  <div
                    style={{
                      flexShrink: 0,
                      width: "48px",
                      height: "48px",
                      border: `1px solid ${G.border}`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: G.primary,
                      background: G.cream,
                    }}
                  >
                    {icons[industry.slug]}
                  </div>

                  <div style={{ minWidth: 0 }}>
                    <h3
                      style={{
                        fontFamily: G.serif,
                        fontSize: "1.2rem",
                        fontWeight: "700",
                        color: G.textDark,
                        marginBottom: "0.35rem",
                        lineHeight: "1.3",
                      }}
                    >
                      {industry.title}
                    </h3>
                    <p
                      style={{
                        fontSize: "0.82rem",
                        color: G.gold,
                        fontWeight: "600",
                        marginBottom: "0.75rem",
                        fontFamily: G.sans,
                        textTransform: "uppercase",
                        letterSpacing: "0.04em",
                      }}
                    >
                      {industry.subtitle}
                    </p>
                    <p
                      style={{
                        fontSize: "0.9rem",
                        color: G.textMid,
                        lineHeight: "1.65",
                        fontFamily: G.sans,
                        display: "-webkit-box",
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                      }}
                    >
                      {industry.description}
                    </p>
                    <p
                      style={{
                        marginTop: "1rem",
                        fontSize: "0.83rem",
                        fontWeight: "700",
                        color: G.primary,
                        fontFamily: G.sans,
                        letterSpacing: "0.02em",
                      }}
                    >
                      View financing options →
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── WHY INDUSTRY CONTEXT MATTERS ─────────────────────────── */}
      <section
        style={{
          background: G.dark,
          padding: "5rem 2rem",
          borderTop: `3px solid ${G.gold}`,
          borderBottom: `3px solid ${G.gold}`,
        }}
      >
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          {/* Centered heading */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
              marginBottom: "3.5rem",
            }}
          >
            <p
              style={{
                fontSize: "11px",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: G.gold,
                fontWeight: "600",
                marginBottom: "1rem",
                fontFamily: G.sans,
              }}
            >
              Why It Matters
            </p>
            <h2
              style={{
                fontFamily: G.serif,
                fontSize: "clamp(1.9rem, 3vw, 2.5rem)",
                fontWeight: "700",
                color: "white",
                lineHeight: "1.2",
                textAlign: "center",
                marginBottom: "1rem",
              }}
            >
              Industry Context Shapes Capital Structure
            </h2>
            <p
              style={{
                fontSize: "1rem",
                color: "rgba(255,255,255,0.55)",
                maxWidth: "480px",
                lineHeight: "1.75",
                fontFamily: G.sans,
                textAlign: "center",
              }}
            >
              Lenders underwrite differently by sector. Knowing your industry means knowing
              which lenders fit, how they evaluate risk, and what documentation they require.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "2rem",
            }}
            className="fo-structure-grid"
          >
            {[
              {
                n: "01",
                title: "Cash Flow Patterns",
                body: "Construction draws differently than a restaurant. Healthcare reimbursement cycles differ from oil & gas contract payments. Lenders evaluate repayment capacity against your industry's actual revenue timing.",
              },
              {
                n: "02",
                title: "Asset Intensity",
                body: "Equipment-heavy industries — construction, oil & gas, trucking — have stronger asset-backed financing options. Service businesses rely more on cash flow and receivables-based structures.",
              },
              {
                n: "03",
                title: "Lender Familiarity",
                body: "Not every lender understands every industry. We route files to lenders with documented experience in your sector — which means faster underwriting and fewer unnecessary conditions.",
              },
            ].map((item) => (
              <div
                key={item.n}
                style={{
                  padding: "2rem",
                  border: "1px solid rgba(255,255,255,0.1)",
                  background: "rgba(255,255,255,0.04)",
                }}
              >
                <div
                  style={{
                    fontSize: "clamp(2.5rem, 3vw, 3rem)",
                    fontFamily: G.serif,
                    fontWeight: "700",
                    color: G.gold,
                    opacity: 0.35,
                    lineHeight: "1",
                    marginBottom: "1rem",
                  }}
                >
                  {item.n}
                </div>
                <h3
                  style={{
                    fontFamily: G.serif,
                    fontSize: "1.15rem",
                    fontWeight: "700",
                    color: "white",
                    marginBottom: "0.85rem",
                    lineHeight: "1.3",
                  }}
                >
                  {item.title}
                </h3>
                <p
                  style={{
                    fontSize: "0.92rem",
                    color: "rgba(255,255,255,0.6)",
                    lineHeight: "1.75",
                    fontFamily: G.sans,
                  }}
                >
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────── */}
      <section
        style={{
          background: G.cream,
          padding: "5rem 2rem",
          borderBottom: `1px solid ${G.border}`,
        }}
      >
        <div
          style={{
            maxWidth: "600px",
            margin: "0 auto",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          {/* Centered heading */}
          <p
            style={{
              fontSize: "11px",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: G.gold,
              fontWeight: "600",
              marginBottom: "1rem",
              fontFamily: G.sans,
            }}
          >
            Don&apos;t See Your Industry?
          </p>
          <h2
            style={{
              fontFamily: G.serif,
              fontSize: "clamp(1.9rem, 3vw, 2.4rem)",
              fontWeight: "700",
              color: G.textDark,
              lineHeight: "1.2",
              marginBottom: "1.25rem",
              textAlign: "center",
            }}
          >
            We Work Across Many Sectors
          </h2>
          <p
            style={{
              fontSize: "1rem",
              color: G.textMid,
              maxWidth: "440px",
              lineHeight: "1.75",
              fontFamily: G.sans,
              marginBottom: "2.5rem",
              textAlign: "center",
            }}
          >
            Start a pre-qualification and we&apos;ll identify the right programs for your
            business — regardless of industry classification.
          </p>
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", justifyContent: "center" }}>
            <Link
              href="/apply"
              style={{
                display: "inline-block",
                background: G.dark,
                color: "white",
                padding: "0.9rem 2.5rem",
                fontSize: "0.85rem",
                fontWeight: "700",
                letterSpacing: "0.04em",
                textTransform: "uppercase",
                textDecoration: "none",
                fontFamily: G.sans,
              }}
            >
              Start Pre-Qualification
            </Link>
            <Link
              href="/financing-options"
              style={{
                display: "inline-block",
                background: "transparent",
                color: G.dark,
                border: `1px solid ${G.border}`,
                padding: "0.9rem 2.5rem",
                fontSize: "0.85rem",
                fontWeight: "600",
                letterSpacing: "0.04em",
                textTransform: "uppercase",
                textDecoration: "none",
                fontFamily: G.sans,
              }}
            >
              Browse Programs
            </Link>
          </div>
          <p
            style={{
              marginTop: "2rem",
              fontSize: "0.78rem",
              color: G.textLight,
              fontFamily: G.sans,
            }}
          >
            Financing is subject to underwriting, lender guidelines, and eligibility.
          </p>
        </div>
      </section>
    </main>
  );
}
