import Link from "next/link";

export const metadata = {
  title: "Thank You | Starting Gate Financial",
  robots: { index: false, follow: false },
};

const G = {
  dark:    "#082B09",
  gold:    "#CE9562",
  cream:   "#F8F6F1",
  textDark: "#0F172A",
  textMid:  "#475569",
  serif:   "var(--font-playfair)",
  sans:    "var(--font-source-sans)",
};

export default function ThankYouPage() {
  return (
    <main style={{
      fontFamily: G.sans,
      background: G.cream,
      minHeight: "70vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "6rem 2rem 4rem",
    }}>
      <div style={{
        maxWidth: 600,
        margin: "0 auto",
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "1.25rem",
      }} className="sgf-thankyou-container">

        <p style={{
          fontSize: 11, letterSpacing: "0.25em", textTransform: "uppercase",
          color: G.gold, fontWeight: 600, fontFamily: G.sans, margin: 0,
        }}>
          Submission Received
        </p>

        <h1 style={{
          fontFamily: G.serif,
          fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
          fontWeight: 700,
          color: G.dark,
          lineHeight: 1.2,
          margin: 0,
        }}>
          Thank You — We Will Be in Touch
        </h1>

        <div style={{
          width: 48, height: 3,
          background: `linear-gradient(90deg, transparent, ${G.gold}, transparent)`,
        }} />

        <p style={{
          fontSize: "1rem",
          color: G.textMid,
          lineHeight: 1.8,
          maxWidth: 480,
          margin: 0,
        }}>
          Your information has been received. A member of the SGF team will review
          your submission and follow up within one business day. If you have
          questions in the meantime, you can reach us at{" "}
          <a href="mailto:info@startinggatefinancial.com" style={{ color: "#118241", textDecoration: "none" }}>
            info@startinggatefinancial.com
          </a>{" "}
          or call{" "}
          <a href="tel:+12149231694" style={{ color: "#118241", textDecoration: "none" }}>
            +1 (214) 923-1694
          </a>.
        </p>

        <Link href="/financing-options" style={{
          marginTop: "0.75rem",
          fontSize: "0.9rem",
          color: G.textMid,
          textDecoration: "none",
          fontFamily: G.sans,
          display: "inline-flex",
          alignItems: "center",
          gap: "0.4rem",
        }}>
          ← Back to Financing Options
        </Link>

      </div>
    </main>
  );
}
