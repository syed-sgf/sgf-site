export default function PrivacyPage() {
  const G = { dark: "#082B09", gold: "#CE9562", cream: "#F8F6F1", textDark: "#0F172A", textMid: "#475569" };
  return (
    <main className="sgf-privacy-page" style={{ background: G.cream, minHeight: "60vh", padding: "5rem 2rem" }}>
      <div style={{ maxWidth: 800, margin: "0 auto" }}>
        <p style={{ fontSize: "11px", letterSpacing: "0.15em", textTransform: "uppercase", color: G.gold, fontWeight: 600, marginBottom: "1rem" }}>Legal</p>
        <h1 style={{ fontFamily: "var(--font-playfair)", fontSize: "clamp(2rem, 4vw, 2.75rem)", color: G.textDark, marginBottom: "2rem", fontWeight: 700 }}>Privacy Policy</h1>
        <div style={{ fontSize: "0.95rem", color: G.textMid, lineHeight: 1.8, display: "flex", flexDirection: "column", gap: "1.25rem" }}>
          <p>Last updated: {new Date().getFullYear()}</p>
          <p>Starting Gate Financial (&quot;SGF&quot;) is committed to protecting your privacy. This policy outlines how we collect, use, and safeguard your personal information.</p>
          <p><strong style={{ color: G.textDark }}>Information We Collect:</strong> We collect information you provide directly, such as name, contact details, and business information submitted through our forms and applications.</p>
          <p><strong style={{ color: G.textDark }}>How We Use Your Information:</strong> Information is used solely to evaluate financing inquiries, communicate with you about your request, and improve our services. We do not sell your personal information to third parties.</p>
          <p><strong style={{ color: G.textDark }}>Data Security:</strong> We implement appropriate security measures to protect your information. However, no method of transmission over the internet is 100% secure.</p>
          <p><strong style={{ color: G.textDark }}>Third Parties:</strong> We may share your information with lending partners as part of the financing process, with your consent.</p>
          <p><strong style={{ color: G.textDark }}>Cookies:</strong> Our website uses cookies to improve user experience and analyze traffic. You may disable cookies in your browser settings.</p>
          <p>For privacy-related inquiries, contact us at <a href="mailto:info@startinggatefinancial.com" style={{ color: "#118241" }}>info@startinggatefinancial.com</a> or 803 Business Parkway, Richardson, TX 75081.</p>
        </div>
      </div>
    </main>
  );
}
