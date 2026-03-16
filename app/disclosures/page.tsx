export const metadata = { robots: { index: false, follow: false } };

export default function DisclosuresPage() {
  const G = { textDark: "#0F172A", textMid: "#475569", gold: "#CE9562", cream: "#F8F6F1" };
  return (
    <main style={{ background: G.cream, minHeight: "60vh", padding: "5rem 2rem" }}>
      <div style={{ maxWidth: 800, margin: "0 auto" }}>
        <p style={{ fontSize: "11px", letterSpacing: "0.15em", textTransform: "uppercase", color: G.gold, fontWeight: 600, marginBottom: "1rem" }}>Legal</p>
        <h1 style={{ fontFamily: "var(--font-playfair)", fontSize: "clamp(2rem, 4vw, 2.75rem)", color: G.textDark, marginBottom: "2rem", fontWeight: 700 }}>Disclosures</h1>
        <div style={{ fontSize: "0.95rem", color: G.textMid, lineHeight: 1.8, display: "flex", flexDirection: "column", gap: "1.25rem" }}>
          <p>Last updated: {new Date().getFullYear()}</p>
          <p>Starting Gate Financial arranges commercial financing on behalf of business owners and investors. We are not a lender and do not make lending decisions, set interest rates, or guarantee approval outcomes.</p>
          <p><strong style={{ color: G.textDark }}>No Guarantee of Financing:</strong> Submission of an inquiry or application does not guarantee financing. All financing is subject to lender approval, underwriting, and creditworthiness review.</p>
          <p><strong style={{ color: G.textDark }}>Rate Disclosures:</strong> Interest rates, fees, and terms vary by program, lender, and borrower profile. Any rates referenced on this site are illustrative only and subject to change without notice.</p>
          <p><strong style={{ color: G.textDark }}>Calculator Disclaimers:</strong> All calculators on this site provide estimates only. Results do not represent a loan offer, rate quote, or lender commitment.</p>
          <p><strong style={{ color: G.textDark }}>Compensation:</strong> Starting Gate Financial may receive compensation from lenders when financing is arranged. This does not influence our assessment of which programs are appropriate for a given borrower.</p>
          <p>For questions, contact us at <a href="mailto:info@startinggatefinancial.com" style={{ color: "#118241" }}>info@startinggatefinancial.com</a> or 803 Business Parkway, Richardson, TX 75081.</p>
        </div>
      </div>
    </main>
  );
}
