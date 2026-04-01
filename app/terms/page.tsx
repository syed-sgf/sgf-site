export default function TermsPage() {
  const G = { dark: "#082B09", gold: "#CE9562", cream: "#F8F6F1", textDark: "#0F172A", textMid: "#475569" };
  return (
    <main className="sgf-terms-page" style={{ background: G.cream, minHeight: "60vh", padding: "5rem 2rem" }}>
      <div style={{ maxWidth: 800, margin: "0 auto" }}>
        <p style={{ fontSize: "11px", letterSpacing: "0.15em", textTransform: "uppercase", color: G.gold, fontWeight: 600, marginBottom: "1rem" }}>Legal</p>
        <h1 style={{ fontFamily: "var(--font-playfair)", fontSize: "clamp(2rem, 4vw, 2.75rem)", color: G.textDark, marginBottom: "2rem", fontWeight: 700 }}>Terms of Use</h1>
        <div style={{ fontSize: "0.95rem", color: G.textMid, lineHeight: 1.8, display: "flex", flexDirection: "column", gap: "1.25rem" }}>
          <p>Last updated: {new Date().getFullYear()}</p>
          <p>By accessing and using the Starting Gate Financial website, you agree to the following terms and conditions. This website is provided for informational purposes only and does not constitute a commitment to lend.</p>
          <p>Starting Gate Financial is a commercial loan broker, not a lender. All financing is subject to lender approval, underwriting review, and applicable terms and conditions.</p>
          <p>The content on this site is for general informational purposes only. Starting Gate Financial makes no representations or warranties of any kind regarding the accuracy, completeness, or suitability of any information on this site.</p>
          <p>All calculator tools provided are for estimation purposes only and do not represent actual loan offers, commitments, or approvals.</p>
          <p>Starting Gate Financial reserves the right to modify these terms at any time without prior notice. Continued use of the site following any changes constitutes acceptance of the revised terms.</p>
          <p>For questions regarding these terms, contact us at <a href="mailto:info@startinggatefinancial.com" style={{ color: "#118241" }}>info@startinggatefinancial.com</a>.</p>
        </div>
      </div>
    </main>
  );
}
