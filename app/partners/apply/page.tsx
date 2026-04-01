import type { Metadata } from "next";

const isProd = process.env.VERCEL_ENV === "production";

export const metadata: Metadata = {
  title: "Partner Application | Starting Gate Financial",
  description:
    "Apply to join the Starting Gate Financial partner network. IC Brokers, referral partners, CPAs, and real estate professionals — earn on every funded transaction.",
  alternates: { canonical: "https://startinggatefinancial.com/partners/apply" },
  robots: isProd
    ? { index: true, follow: true }
    : { index: false, follow: false },
};

export default function PartnersApplyPage() {
  return (
    <main className="sgf-partners-apply-page" style={{ fontFamily: "var(--font-source-sans)", background: "#fff" }}>

      {/* Hero */}
      <section style={{ background: "#082B09", padding: "60px 24px", textAlign: "center" }}>
        <div style={{ maxWidth: 720, margin: "0 auto" }}>
          <h1 style={{
            fontFamily: "var(--font-playfair)",
            fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
            fontWeight: 700,
            color: "#fff",
            lineHeight: 1.2,
            marginBottom: "1rem",
          }}>
            Apply to Become a Partner
          </h1>
          <p style={{
            fontFamily: "var(--font-source-sans)",
            fontSize: "1rem",
            color: "rgba(255,255,255,0.85)",
            lineHeight: 1.7,
            margin: 0,
          }}>
            Complete the form below and our team will be in touch within one business day.
          </p>
        </div>
      </section>

      {/* Form */}
      <section style={{ background: "#F8F6F1", padding: "60px 24px" }}>
        <div style={{ maxWidth: "720px", margin: "0 auto" }}>
          <div style={{ width: "100%", boxShadow: '0 4px 24px rgba(0,0,0,0.08)', border: '1px solid #E2DDD6', borderRadius: '4px', background: '#fff', padding: '0', overflow: 'hidden' }}>
            <iframe
              src="https://api.leadconnectorhq.com/widget/survey/Z5ndLPu9ozYpURppdcuF"
              style={{ border: "none", width: "100%", minHeight: 750, display: "block" }}
              scrolling="yes"
              id="Z5ndLPu9ozYpURppdcuF"
              title="SGF Partner Signup Form"
            />
            <script src="https://link.msgsndr.com/js/form_embed.js" async />
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          .sgf-partners-apply-page > section:first-child { padding: 40px 20px !important; }
          .sgf-partners-apply-page > section:nth-child(2) { padding: 40px 16px !important; }
        }
      `}</style>
    </main>
  );
}
