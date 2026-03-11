"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const G = {
  green: "#118241",
  dark:  "#082B09",
  gold:  "#CE9562",
  serif: "var(--font-playfair)",
  sans:  "var(--font-source-sans)",
};

const HERO_IMAGE = "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600&q=85&auto=format&fit=crop";

function ContactCard({
  icon,
  title,
  body,
  detail,
}: {
  icon: React.ReactNode;
  title: string;
  body: string;
  detail: React.ReactNode;
}) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: "#fff",
        border: `1px solid ${hovered ? G.gold : "#e2e8f0"}`,
        padding: "2rem",
        textAlign: "center",
        transition: "border-color 0.2s",
        cursor: "default",
      }}
    >
      <div style={{
        width: 48, height: 48, borderRadius: "50%",
        background: G.green, display: "flex", alignItems: "center",
        justifyContent: "center", margin: "0 auto 1.25rem",
      }}>
        {icon}
      </div>
      <h3 style={{
        fontFamily: G.serif, fontSize: "1.1rem", fontWeight: 700,
        color: G.dark, marginBottom: "0.5rem",
      }}>
        {title}
      </h3>
      <p style={{ fontSize: "0.875rem", color: "#64748b", marginBottom: "1rem", lineHeight: 1.6 }}>
        {body}
      </p>
      {detail}
    </div>
  );
}

export default function ContactPage() {
  return (
    <main style={{ fontFamily: G.sans, color: "#1e293b" }}>

      {/* ── SECTION 1: Image Hero ────────────────────────────────── */}
      <section style={{
        position: "relative",
        minHeight: 420,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        overflow: "hidden",
      }}>
        {/* Background image */}
        <Image
          src={HERO_IMAGE}
          alt="Commercial real estate — Starting Gate Financial"
          fill
          priority
          style={{ objectFit: "cover", objectPosition: "center" }}
          sizes="100vw"
        />

        {/* Dark overlay */}
        <div style={{
          position: "absolute", inset: 0,
          background: `linear-gradient(135deg, ${G.dark}DD 0%, ${G.dark}99 60%, ${G.dark}77 100%)`,
          zIndex: 1,
        }} />

        {/* Gold bottom accent line */}
        <div style={{
          position: "absolute", bottom: 0, left: 0, right: 0, height: 3,
          background: `linear-gradient(90deg, transparent, ${G.gold}, transparent)`,
          zIndex: 2,
        }} />

        {/* Content */}
        <div style={{
          position: "relative", zIndex: 3,
          padding: "5rem 2rem 4rem",
          display: "flex", flexDirection: "column", alignItems: "center",
          width: "100%",
        }}>
          <p style={{
            fontSize: 11, letterSpacing: "0.25em", textTransform: "uppercase",
            color: G.gold, fontWeight: 600, fontFamily: G.sans,
            marginBottom: "1.25rem", textAlign: "center",
          }}>
            Richardson, TX · Nationwide Commercial Financing
          </p>
          <h1 style={{
            fontFamily: G.serif, fontSize: "clamp(2rem, 4vw, 3rem)",
            fontWeight: 700, color: "#fff", lineHeight: 1.2,
            marginBottom: "1.25rem", textAlign: "center",
            maxWidth: 700,
          }}>
            Let&rsquo;s Talk About Your Deal
          </h1>
          <p style={{
            fontSize: "1.1rem", color: "rgba(255,255,255,0.75)",
            lineHeight: 1.75, maxWidth: 540, textAlign: "center",
          }}>
            We review every inquiry personally. Tell us what you&rsquo;re working on
            and we&rsquo;ll tell you honestly whether and how we can help.
          </p>
        </div>
      </section>

      {/* ── SECTION 2: Contact Methods ──────────────────────────── */}
      <section style={{ background: "#f8f6f1", padding: "3.5rem 2rem" }}>
        <div
          style={{
            maxWidth: 1100, margin: "0 auto",
            display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "2rem",
          }}
          className="sgf-contact-methods"
        >
          <ContactCard
            title="Call Us Directly"
            body="Speak with a financing specialist during business hours."
            icon={
              <svg width="22" height="22" fill="none" stroke="#fff" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 11a19.79 19.79 0 01-3.07-8.67A2 2 0 012 .18 2 2 0 014 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
              </svg>
            }
            detail={
              <a href="tel:+12149231694" style={{ fontWeight: 700, color: G.green, textDecoration: "none", fontSize: "1.05rem" }}>
                +1 (214) 923-1694
              </a>
            }
          />

          <ContactCard
            title="Send an Email"
            body="We respond to all inquiries within one business day."
            icon={
              <svg width="22" height="22" fill="none" stroke="#fff" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
            }
            detail={
              <a href="mailto:info@startinggatefinancial.com" style={{ fontWeight: 700, color: G.green, textDecoration: "none", fontSize: "0.95rem" }}>
                info@startinggatefinancial.com
              </a>
            }
          />

          <ContactCard
            title="Our Office"
            body="Based in Richardson, TX — serving business owners nationwide."
            icon={
              <svg width="22" height="22" fill="none" stroke="#fff" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
            }
            detail={
              <p style={{ fontWeight: 600, color: G.dark, fontSize: "0.9rem", lineHeight: 1.6, margin: 0 }}>
                803 Business Parkway<br />
                Richardson, TX 75081
              </p>
            }
          />
        </div>
      </section>

      {/* ── SECTION 3: GHL Consultation Form ───────────────────── */}
      <section style={{
        background: "#fff", padding: "5rem 2rem",
        display: "flex", flexDirection: "column", alignItems: "center",
      }}>
        <p style={{
          fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase",
          color: G.gold, fontWeight: 600, marginBottom: "0.75rem", textAlign: "center",
        }}>
          Free Consultation
        </p>
        <h2 style={{
          fontFamily: G.serif, fontSize: "clamp(1.6rem, 3vw, 2.25rem)",
          fontWeight: 700, color: G.dark, marginBottom: "1rem", textAlign: "center",
        }}>
          Schedule a Consultation
        </h2>
        <p style={{
          fontSize: "1rem", color: "#64748b", maxWidth: 540,
          lineHeight: 1.75, textAlign: "center", marginBottom: "3rem",
        }}>
          Select a time that works for you. We&rsquo;ll review your situation
          before the call so we can have a productive conversation from minute one.
        </p>

        {/* GHL Embed */}
        <div style={{
          width: "100%", maxWidth: 800,
          border: "1px solid #e2e8f0", background: "#f8f6f1", overflow: "hidden",
        }}>
          <iframe
            src="https://api.leadconnectorhq.com/widget/survey/qqU3TULl3V4uA2F8hDeA"
            style={{ border: "none", width: "100%", minHeight: 750, display: "block" }}
            scrolling="yes"
            id="qqU3TULl3V4uA2F8hDeA"
            title="Schedule a Consultation — Starting Gate Financial"
          />
          <script src="https://link.msgsndr.com/js/form_embed.js" async />
        </div>
      </section>

      {/* ── SECTION 4: What to Expect ───────────────────────────── */}
      <section style={{ background: "#f8f6f1", padding: "4rem 2rem" }}>
        <div style={{ maxWidth: 860, margin: "0 auto" }}>

          <h2 style={{
            fontFamily: G.serif, fontSize: "1.5rem", fontWeight: 700,
            color: G.dark, marginBottom: "2rem", textAlign: "center",
          }}>
            What to Expect
          </h2>

          <div
            style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem" }}
            className="sgf-expectations-grid"
          >
            {[
              { step: "01", title: "We Review Your Inquiry",               body: "Every submission is reviewed by a financing specialist — not a bot, not an automated pipeline." },
              { step: "02", title: "We Reach Out Within One Business Day", body: "You'll hear from us within one business day to confirm receipt and ask any initial questions." },
              { step: "03", title: "Consultation Call",                    body: "We discuss your deal, your goals, and the realistic financing paths available to you." },
              { step: "04", title: "Honest Assessment",                    body: "We tell you what we can structure, what we can't, and why — before you commit to anything." },
            ].map(({ step, title, body }) => (
              <div key={step} style={{
                background: "#fff", border: "1px solid #e2e8f0", padding: "1.75rem",
                display: "flex", gap: "1.25rem", alignItems: "flex-start",
              }}>
                <span style={{
                  fontFamily: G.serif, fontSize: "1.5rem", fontWeight: 700,
                  color: G.gold, flexShrink: 0, lineHeight: 1,
                }}>
                  {step}
                </span>
                <div>
                  <h3 style={{ fontFamily: G.serif, fontSize: "1rem", fontWeight: 700, color: G.dark, marginBottom: "0.4rem" }}>
                    {title}
                  </h3>
                  <p style={{ fontSize: "0.875rem", color: "#64748b", lineHeight: 1.7, margin: 0 }}>
                    {body}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Quiet legal note */}
          <p style={{
            fontSize: "0.75rem", color: "#94a3b8", lineHeight: 1.75,
            textAlign: "center", maxWidth: 600, margin: "2rem auto 0",
          }}>
            Starting Gate Financial arranges commercial financing on behalf of business owners.
            All transactions are subject to lender approval. No upfront fees.
          </p>

        </div>
      </section>

      {/* ── SECTION 5: Soft Routing CTA ─────────────────────────── */}
      <section style={{
        background: G.dark, padding: "4rem 2rem",
        display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center",
      }}>
        <p style={{
          fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase",
          color: G.gold, fontWeight: 600, marginBottom: "1rem",
        }}>
          Not sure where to start?
        </p>
        <h2 style={{
          fontFamily: G.serif, fontSize: "clamp(1.4rem, 3vw, 2rem)",
          fontWeight: 700, color: "#fff", marginBottom: "1rem",
        }}>
          Explore Your Financing Options First
        </h2>
        <p style={{
          color: "rgba(255,255,255,0.6)", fontSize: "0.95rem",
          maxWidth: 480, marginBottom: "2rem", lineHeight: 1.75,
        }}>
          Browse our financing programs and industry pages to find the capital
          structure that fits your deal before we talk.
        </p>
        <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="/financing-options" style={{
            background: G.gold, color: G.dark, padding: "0.75rem 2rem",
            fontWeight: 700, fontSize: "0.9rem", textDecoration: "none",
            fontFamily: G.sans, letterSpacing: "0.05em",
          }}>
            Financing Programs →
          </Link>
          <Link href="/industries" style={{
            background: "transparent", color: "#fff",
            border: "1px solid rgba(255,255,255,0.3)",
            padding: "0.75rem 2rem", fontWeight: 600, fontSize: "0.9rem",
            textDecoration: "none", fontFamily: G.sans,
          }}>
            Industries We Serve
          </Link>
        </div>
      </section>

    </main>
  );
}
