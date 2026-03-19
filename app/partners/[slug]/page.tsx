import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { partners } from "@/lib/partner-data";

export async function generateStaticParams() {
  return partners.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const partner = partners.find((p) => p.slug === slug);
  if (!partner) return { title: "Not Found" };
  return {
    title: `${partner.title} | Starting Gate Financial`,
    description: partner.description.substring(0, 160),
    openGraph: {
      title: `${partner.title} | Starting Gate Financial`,
      description: partner.description.substring(0, 160),
      url: `https://startinggatefinancial.com/partners/${slug}`,
      siteName: "Starting Gate Financial",
      type: "website",
    },
    alternates: { canonical: `https://startinggatefinancial.com/partners/${slug}` },
    robots: { index: true, follow: true },
  };
}

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

function CheckIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 20 20" fill="none" style={{ flexShrink: 0, marginTop: 2 }}>
      <circle cx="10" cy="10" r="10" fill="#118241" />
      <path d="M6 10l3 3 5-5" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 20 20" fill="none" style={{ flexShrink: 0, marginTop: 2 }}>
      <circle cx="10" cy="10" r="10" fill="#e2e8f0" />
      <path d="M7 7l6 6M13 7l-6 6" stroke="#94a3b8" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export default async function PartnerSlugPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const partner = partners.find((p) => p.slug === slug);
  if (!partner) notFound();

  const otherPartners = partners.filter((p) => p.slug !== slug).slice(0, 3);

  return (
    <main style={{ fontFamily: G.sans, color: G.textDark, background: "#fff" }}>

      {/* Breadcrumb */}
      <div style={{ background: G.cream, borderBottom: `1px solid ${G.border}`, padding: "0.75rem 1.5rem" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "flex", gap: "0.5rem", alignItems: "center", fontSize: 12, color: G.textMid }}>
          <Link href="/" style={{ color: G.textMid, textDecoration: "none" }}>Home</Link>
          <span>›</span>
          <Link href="/partners" style={{ color: G.textMid, textDecoration: "none" }}>Partners</Link>
          <span>›</span>
          <span style={{ color: G.primary, fontWeight: 600 }}>{partner.title}</span>
        </div>
      </div>

      {/* Hero */}
      <section style={{
        position: "relative", overflow: "hidden",
        background: G.dark, padding: "5rem 1.5rem 4rem",
        minHeight: 320, display: "flex", alignItems: "center",
      }}>
        <div
          style={{
            position: "absolute", inset: 0,
            backgroundImage: `url(${partner.heroImage})`,
            backgroundSize: "cover", backgroundPosition: "center",
            opacity: 0.12, zIndex: 0,
          }}
        />
        <div style={{ position: "relative", zIndex: 1, maxWidth: 780, margin: "0 auto", textAlign: "center" }}>
          <p style={{ fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", color: G.gold, fontWeight: 700, marginBottom: "1rem" }}>
            Partner Program
          </p>
          <h1 style={{ fontFamily: G.serif, fontSize: "clamp(1.9rem, 4.5vw, 3rem)", fontWeight: 700, color: "#fff", lineHeight: 1.15, marginBottom: "1.25rem" }}>
            {partner.title}
          </h1>
          <p style={{ fontSize: "clamp(1rem, 2.5vw, 1.1rem)", color: "#cbd5e1", lineHeight: 1.75, maxWidth: 560, margin: "0 auto 2.5rem" }}>
            {partner.tagline}
          </p>
          <Link
            href="/contact"
            style={{ display: "inline-block", background: G.gold, color: "#fff", padding: "0.9rem 2rem", fontSize: 14, fontWeight: 700, textDecoration: "none" }}
          >
            Apply to This Program
          </Link>
        </div>
      </section>

      {/* Overview */}
      <section style={{ padding: "4.5rem 1.5rem" }}>
        <div style={{ maxWidth: 780, margin: "0 auto" }}>
          <p style={{ fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", color: G.gold, fontWeight: 700, marginBottom: "0.75rem" }}>
            Overview
          </p>
          <h2 style={{ fontFamily: G.serif, fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: 700, color: G.dark, marginBottom: "1.25rem" }}>
            Is This the Right Program for You?
          </h2>
          <p style={{ fontSize: "1rem", color: G.textMid, lineHeight: 1.8 }}>{partner.description}</p>
        </div>
      </section>

      {/* Fit grid */}
      <section style={{ background: G.cream, padding: "4rem 1.5rem" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div className="sgf-slug-fit-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2.5rem" }}>
            <div>
              <h3 style={{ fontFamily: G.serif, fontSize: "1.25rem", fontWeight: 700, color: G.dark, marginBottom: "1.25rem" }}>
                Who This Program Is For
              </h3>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.85rem" }}>
                {partner.whoIsThis.map((item) => (
                  <div key={item} style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start" }}>
                    <CheckIcon />
                    <p style={{ fontSize: "0.9rem", color: G.textMid, lineHeight: 1.65, margin: 0 }}>{item}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 style={{ fontFamily: G.serif, fontSize: "1.25rem", fontWeight: 700, color: G.dark, marginBottom: "1.25rem" }}>
                When This Program Is Not the Right Fit
              </h3>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.85rem" }}>
                {partner.notAFit.map((item) => (
                  <div key={item} style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start" }}>
                    <XIcon />
                    <p style={{ fontSize: "0.9rem", color: G.textMid, lineHeight: 1.65, margin: 0 }}>{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What you do / What we provide */}
      <section style={{ padding: "4.5rem 1.5rem" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div className="sgf-slug-provide-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2.5rem" }}>
            <div>
              <p style={{ fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", color: G.gold, fontWeight: 700, marginBottom: "0.75rem" }}>Your Role</p>
              <h3 style={{ fontFamily: G.serif, fontSize: "1.25rem", fontWeight: 700, color: G.dark, marginBottom: "1.25rem" }}>What You Do</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.85rem" }}>
                {partner.whatYouDo.map((item) => (
                  <div key={item} style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start" }}>
                    <div style={{ width: 6, height: 6, borderRadius: "50%", background: G.primary, marginTop: 7, flexShrink: 0 }} />
                    <p style={{ fontSize: "0.9rem", color: G.textMid, lineHeight: 1.65, margin: 0 }}>{item}</p>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ background: G.cream, padding: "2rem", borderLeft: `4px solid ${G.gold}` }}>
              <p style={{ fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", color: G.gold, fontWeight: 700, marginBottom: "0.75rem" }}>SGF&apos;s Commitment</p>
              <h3 style={{ fontFamily: G.serif, fontSize: "1.25rem", fontWeight: 700, color: G.dark, marginBottom: "1.25rem" }}>What We Provide</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.85rem" }}>
                {partner.whatWeProvide.map((item) => (
                  <div key={item} style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start" }}>
                    <CheckIcon />
                    <p style={{ fontSize: "0.9rem", color: G.textMid, lineHeight: 1.65, margin: 0 }}>{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section style={{ background: G.cream, padding: "4.5rem 1.5rem" }}>
        <div style={{ maxWidth: 780, margin: "0 auto" }}>
          <p style={{ fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", color: G.gold, fontWeight: 700, textAlign: "center", marginBottom: "0.75rem" }}>
            Common Questions
          </p>
          <h2 style={{ fontFamily: G.serif, fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: 700, color: G.dark, textAlign: "center", marginBottom: "2.5rem" }}>
            Frequently Asked Questions
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {partner.faqs.map((faq) => (
              <div key={faq.q} style={{ background: "#fff", border: `1px solid ${G.border}`, padding: "1.5rem 1.75rem" }}>
                <h4 style={{ fontFamily: G.serif, fontSize: "1rem", fontWeight: 700, color: G.dark, marginBottom: "0.6rem" }}>{faq.q}</h4>
                <p style={{ fontSize: "0.9rem", color: G.textMid, lineHeight: 1.75, margin: 0 }}>{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Other programs */}
      {otherPartners.length > 0 && (
        <section style={{ padding: "4rem 1.5rem" }}>
          <div style={{ maxWidth: 1100, margin: "0 auto" }}>
            <h2 style={{ fontFamily: G.serif, fontSize: "1.5rem", fontWeight: 700, color: G.dark, marginBottom: "2rem" }}>
              Other Partner Programs
            </h2>
            <div className="sgf-slug-other-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1.5rem" }}>
              {otherPartners.map((p) => (
                <Link
                  key={p.slug}
                  href={`/partners/${p.slug}`}
                  className="sgf-slug-other-card"
                  style={{ display: "block", textDecoration: "none", border: `1px solid ${G.border}`, padding: "1.5rem", background: G.cream }}
                >
                  <h3 style={{ fontFamily: G.serif, fontSize: "1rem", fontWeight: 700, color: G.dark, marginBottom: "0.4rem" }}>{p.title}</h3>
                  <p style={{ fontSize: "0.85rem", color: G.textMid, margin: "0 0 0.75rem", lineHeight: 1.6 }}>{p.tagline}</p>
                  <span style={{ fontSize: 13, fontWeight: 700, color: G.primary }}>Learn more →</span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section style={{ background: G.dark, padding: "4.5rem 1.5rem", textAlign: "center" }}>
        <div style={{ maxWidth: 580, margin: "0 auto" }}>
          <h2 style={{ fontFamily: G.serif, fontSize: "clamp(1.5rem, 3vw, 2.1rem)", fontWeight: 700, color: "#fff", marginBottom: "1rem" }}>
            Ready to Get Started?
          </h2>
          <p style={{ fontSize: "1rem", color: "rgba(255,255,255,0.8)", lineHeight: 1.7, marginBottom: "2rem" }}>
            Contact us to start the application process. We review every partner application personally.
          </p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/contact" style={{ display: "inline-block", background: G.gold, color: "#fff", padding: "0.9rem 2rem", fontSize: 14, fontWeight: 700, textDecoration: "none" }}>
              Apply to This Program
            </Link>
            <Link href="/partners" style={{ display: "inline-block", background: "transparent", color: "#fff", padding: "0.9rem 2rem", fontSize: 14, fontWeight: 700, textDecoration: "none", border: "1px solid rgba(255,255,255,0.35)" }}>
              View All Programs
            </Link>
          </div>
        </div>
      </section>

      <style>{`
        .sgf-slug-other-card:hover { border-color: #CE9562 !important; }
        @media (max-width: 768px) {
          .sgf-slug-fit-grid { grid-template-columns: 1fr !important; }
          .sgf-slug-provide-grid { grid-template-columns: 1fr !important; }
          .sgf-slug-other-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </main>
  );
}
