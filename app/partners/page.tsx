import type { Metadata } from "next";
import Link from "next/link";
import { partners } from "@/lib/partner-data";

export const metadata: Metadata = {
  title: "Become a Partner | Starting Gate Financial",
  description:
    "Join the Starting Gate Financial partner network. IC Brokers, referral partners, CPAs, and real estate professionals — earn on every funded transaction.",
  openGraph: {
    title: "Become a Partner | Starting Gate Financial",
    description:
      "Join the SGF partner network and earn referral or broker compensation on every funded commercial financing transaction.",
    url: "https://startinggatefinancial.com/partners",
    siteName: "Starting Gate Financial",
    type: "website",
  },
  alternates: { canonical: "https://startinggatefinancial.com/partners" },
  robots: { index: true, follow: true },
};

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

const partnerIcons: Record<string, string> = {
  "ic-broker": `<svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="16" cy="10" r="5" stroke="#118241" stroke-width="2"/><path d="M6 26c0-5.523 4.477-10 10-10s10 4.477 10 10" stroke="#118241" stroke-width="2" stroke-linecap="round"/><path d="M20 18l3 3-3 3" stroke="#CE9562" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  "referral-partner": `<svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="11" cy="12" r="4" stroke="#118241" stroke-width="2"/><circle cx="22" cy="9" r="3" stroke="#CE9562" stroke-width="1.5"/><path d="M4 26c0-3.866 3.134-7 7-7h1" stroke="#118241" stroke-width="2" stroke-linecap="round"/><path d="M16 19c1.5-.65 3.2-1 5-1 3.866 0 7 3.134 7 7" stroke="#CE9562" stroke-width="1.5" stroke-linecap="round"/><path d="M14 16l3-3 3 3" stroke="#118241" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  "cpa-accountant": `<svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="6" y="4" width="20" height="24" rx="2" stroke="#118241" stroke-width="2"/><path d="M11 12h10M11 17h7M11 22h5" stroke="#CE9562" stroke-width="1.5" stroke-linecap="round"/></svg>`,
  "real-estate-agent": `<svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 14L16 5l11 9" stroke="#118241" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><rect x="10" y="18" width="12" height="9" rx="1" stroke="#118241" stroke-width="2"/><path d="M14 27v-5h4v5" stroke="#CE9562" stroke-width="1.5" stroke-linecap="round"/></svg>`,
};

const partnerBadges: Record<string, string> = {
  "ic-broker": "Commission-Based",
  "referral-partner": "Referral Fee",
  "cpa-accountant": "Referral Fee",
  "real-estate-agent": "Referral Fee",
};

export default function PartnersPage() {
  return (
    <main className="sgf-partners-page" style={{ fontFamily: G.sans, color: G.textDark, background: "#fff" }}>

      {/* Hero */}
      <section style={{ background: G.dark, padding: "5rem 1.5rem 4rem" }}>
        <div style={{ maxWidth: 780, margin: "0 auto", textAlign: "center" }}>
          <p style={{ fontFamily: G.sans, fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", color: G.gold, fontWeight: 700, marginBottom: "1rem" }}>
            Partner Program
          </p>
          <h1 style={{ fontFamily: G.serif, fontSize: "clamp(2rem, 5vw, 3.25rem)", fontWeight: 700, color: "#fff", lineHeight: 1.15, marginBottom: "1.5rem" }}>
            Grow With Starting Gate Financial
          </h1>
          <p style={{ fontSize: "clamp(1rem, 2.5vw, 1.15rem)", color: "#cbd5e1", lineHeight: 1.75, maxWidth: 580, margin: "0 auto 2.5rem" }}>
            We work with finance professionals, trusted advisors, and real estate specialists who want to add commercial capital to the value they already deliver. Find the right program for how you work.
          </p>
          <Link
            href="#partner-programs"
            style={{ display: "inline-block", background: G.gold, color: "#fff", padding: "0.9rem 2rem", fontSize: 14, fontWeight: 700, textDecoration: "none", letterSpacing: "0.04em" }}
          >
            Explore Partner Programs
          </Link>
        </div>
      </section>

      {/* Why Partner with SGF */}
      <section style={{ background: G.cream, padding: "4rem 1.5rem" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <p style={{ fontFamily: G.sans, fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", color: G.gold, fontWeight: 700, textAlign: "center", marginBottom: "0.75rem" }}>
            Why SGF
          </p>
          <h2 style={{ fontFamily: G.serif, fontSize: "clamp(1.6rem, 3vw, 2.25rem)", fontWeight: 700, color: G.dark, textAlign: "center", marginBottom: "3rem" }}>
            Capital Without Compromise
          </h2>
          <div className="sgf-partner-why-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "2rem" }}>
            {[
              { title: "Full Program Access", body: "Your clients gain access to SGF's complete financing universe — SBA, CRE, equipment, fix-and-flip, working capital, and more. One partner relationship covers every deal type." },
              { title: "Institutional Credibility", body: "We operate as a commercial financing firm, not a marketplace. Your clients are handled with the professionalism your reputation demands." },
              { title: "Transparent Compensation", body: "Commissions and referral fees are defined in writing before your first deal. No ambiguity, no renegotiation after the fact." },
            ].map((item) => (
              <div key={item.title} style={{ background: "#fff", border: `1px solid ${G.border}`, padding: "2rem", borderLeft: `4px solid ${G.primary}` }}>
                <h3 style={{ fontFamily: G.serif, fontSize: "1.15rem", fontWeight: 700, color: G.dark, marginBottom: "0.75rem" }}>{item.title}</h3>
                <p style={{ fontSize: "0.925rem", color: G.textMid, lineHeight: 1.7, margin: 0 }}>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Programs Grid */}
      <section id="partner-programs" style={{ padding: "5rem 1.5rem" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <p style={{ fontFamily: G.sans, fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", color: G.gold, fontWeight: 700, textAlign: "center", marginBottom: "0.75rem" }}>
            Programs
          </p>
          <h2 style={{ fontFamily: G.serif, fontSize: "clamp(1.6rem, 3vw, 2.25rem)", fontWeight: 700, color: G.dark, textAlign: "center", marginBottom: "0.75rem" }}>
            Choose Your Partnership Track
          </h2>
          <p style={{ fontSize: "1rem", color: G.textMid, textAlign: "center", maxWidth: 560, margin: "0 auto 3rem", lineHeight: 1.7 }}>
            We offer four distinct partner tracks based on your professional role, your level of deal involvement, and how you prefer to earn.
          </p>
          <div className="sgf-partner-card-grid" style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "2rem" }}>
            {partners.map((p) => (
              <Link
                key={p.slug}
                href={`/partners/${p.slug}`}
                className="sgf-partner-card"
                style={{ display: "block", textDecoration: "none", border: `1px solid ${G.border}`, background: "#fff", padding: "2rem", transition: "border-color 0.2s, box-shadow 0.2s" }}
              >
                <div style={{ display: "flex", alignItems: "flex-start", gap: "1.25rem" }}>
                  <div
                    style={{ width: 48, height: 48, flexShrink: 0 }}
                    dangerouslySetInnerHTML={{ __html: partnerIcons[p.slug] }}
                  />
                  <div style={{ flex: 1 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", flexWrap: "wrap", marginBottom: "0.5rem" }}>
                      <h3 style={{ fontFamily: G.serif, fontSize: "1.15rem", fontWeight: 700, color: G.dark, margin: 0 }}>{p.title}</h3>
                      <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: G.primary, background: "#e8f5ee", padding: "2px 8px" }}>
                        {partnerBadges[p.slug]}
                      </span>
                    </div>
                    <p style={{ fontSize: "0.9rem", color: G.textMid, lineHeight: 1.65, margin: "0 0 1rem" }}>{p.tagline}</p>
                    <span style={{ fontSize: 13, fontWeight: 700, color: G.primary }}>Learn more →</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section style={{ background: G.cream, padding: "5rem 1.5rem" }}>
        <div style={{ maxWidth: 860, margin: "0 auto" }}>
          <p style={{ fontFamily: G.sans, fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", color: G.gold, fontWeight: 700, textAlign: "center", marginBottom: "0.75rem" }}>
            Process
          </p>
          <h2 style={{ fontFamily: G.serif, fontSize: "clamp(1.6rem, 3vw, 2.25rem)", fontWeight: 700, color: G.dark, textAlign: "center", marginBottom: "3rem" }}>
            From Application to First Deal
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
            {[
              { n: "01", title: "Apply to the Program", body: "Select your partner track and submit a brief application. We review every application personally — no automated approvals." },
              { n: "02", title: "Vetting & Agreement", body: "A brief conversation confirms fit. You'll review and sign your partner agreement, which defines compensation, conduct standards, and deal submission protocols." },
              { n: "03", title: "Onboarding", body: "Receive access to SGF's deal intake process, financing program overview, and any co-branded materials relevant to your track." },
              { n: "04", title: "Submit Your First Deal", body: "When your first client is ready, walk them through intake. SGF handles qualification, lender routing, underwriting, and close." },
              { n: "05", title: "Get Paid", body: "Compensation is calculated at close and paid promptly per the terms of your agreement." },
            ].map((step, i, arr) => (
              <div key={step.n} style={{ display: "flex", gap: "1.5rem", paddingBottom: i < arr.length - 1 ? "2rem" : 0, position: "relative" }}>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", flexShrink: 0 }}>
                  <div style={{ width: 44, height: 44, borderRadius: "50%", background: G.dark, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <span style={{ fontFamily: G.serif, fontSize: 13, fontWeight: 700, color: G.gold }}>{step.n}</span>
                  </div>
                  {i < arr.length - 1 && (
                    <div style={{ width: 1, flex: 1, background: G.border, marginTop: 6 }} />
                  )}
                </div>
                <div style={{ paddingTop: "0.6rem", paddingBottom: "0.5rem" }}>
                  <h3 style={{ fontFamily: G.serif, fontSize: "1.05rem", fontWeight: 700, color: G.dark, marginBottom: "0.35rem" }}>{step.title}</h3>
                  <p style={{ fontSize: "0.9rem", color: G.textMid, lineHeight: 1.7, margin: 0 }}>{step.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: G.dark, padding: "4.5rem 1.5rem", textAlign: "center" }}>
        <div style={{ maxWidth: 600, margin: "0 auto" }}>
          <h2 style={{ fontFamily: G.serif, fontSize: "clamp(1.5rem, 3vw, 2.25rem)", fontWeight: 700, color: "#fff", marginBottom: "1rem" }}>
            Ready to Partner with SGF?
          </h2>
          <p style={{ fontSize: "1rem", color: "rgba(255,255,255,0.85)", lineHeight: 1.7, marginBottom: "2rem" }}>
            Select your program track and start the conversation. We review every application personally.
          </p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="#partner-programs" style={{ display: "inline-block", background: G.gold, color: "#fff", padding: "0.9rem 2rem", fontSize: 14, fontWeight: 700, textDecoration: "none" }}>
              Choose Your Track
            </Link>
            <Link href="/contact" style={{ display: "inline-block", background: "transparent", color: "#fff", padding: "0.9rem 2rem", fontSize: 14, fontWeight: 700, textDecoration: "none", border: "1px solid rgba(255,255,255,0.4)" }}>
              Talk to Us First
            </Link>
          </div>
        </div>
      </section>

      <style>{`
        .sgf-partner-card:hover { border-color: #CE9562 !important; box-shadow: 0 4px 24px rgba(0,0,0,0.06) !important; }
        @media (max-width: 768px) {
          .sgf-partner-why-grid { grid-template-columns: 1fr !important; }
          .sgf-partner-card-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </main>
  );
}
