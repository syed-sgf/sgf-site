import Link from "next/link";

const G = {
  dark: "#082B09",
  primary: "#118241",
  gold: "#CE9562",
  serif: "var(--font-playfair)",
  sans: "var(--font-source-sans)",
};

const financingLinks = [
  { label: "Financing Programs Overview", href: "/financing-options" },
  { label: "SBA Loans",                   href: "/financing/sba-loans" },
  { label: "Commercial Real Estate",      href: "/financing/commercial-real-estate" },
  { label: "Equipment Financing",         href: "/financing/equipment-financing" },
  { label: "Business Lines of Credit",    href: "/financing/business-loc" },
  { label: "Fix & Flip Loans",            href: "/financing/fix-and-flip" },
  { label: "Rental Property Loans",       href: "/financing/rental-loans" },
  { label: "Accounts Receivable",         href: "/financing/accounts-receivable" },
  { label: "Franchise Financing",         href: "/financing/franchise-financing" },
  { label: "Startup Financing",           href: "/financing/startup-financing" },
  { label: "Merchant Cash Advance",       href: "/financing/merchant-cash-advance" },
];

const industryLinks = [
  { label: "Industries Overview",       href: "/industries" },
  { label: "Construction & Contractors",href: "/industries/construction" },
  { label: "Food & Beverage",           href: "/industries/food-beverage" },
  { label: "Healthcare & Medical",      href: "/industries/healthcare" },
  { label: "Oil & Gas",                 href: "/industries/oil-gas" },
  { label: "Real Estate Investors",     href: "/industries/real-estate-investors" },
];

const toolLinks = [
  { label: "Business Loan Calculator",   href: "/tools/business-loan-calculator" },
  { label: "DSCR Calculator",            href: "/tools/dscr-calculator" },
  { label: "MCA Planning Tool",          href: "/tools/mca-calculator" },
  { label: "FICA Tip Credit Calculator", href: "/tools/fica-tip-calculator" },
];

const companyLinks = [
  { label: "About Us",        href: "/about" },
  { label: "Contact Us",      href: "/contact" },
  { label: "Blog",            href: "/blog" },
  { label: "Become a Partner",href: "/partners" },
  { label: "Apply Now",       href: "/apply" },
];

export default function Footer() {
  return (
    <footer style={{ background: G.dark, color: "#fff", fontFamily: G.sans }}>

      {/* Gold accent line */}
      <div style={{ height: 3, background: `linear-gradient(90deg, transparent, ${G.gold}, transparent)` }} />

      {/* Main body */}
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "4rem 2rem 3rem" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr 1fr 1fr 1fr", gap: "2.5rem" }} className="footer-grid">

          {/* Col 1 — Brand + Contact */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            <Link href="/" style={{ textDecoration: "none" }}>
              <span style={{ fontFamily: G.serif, fontSize: "1.25rem", fontWeight: 700, color: "#fff", display: "block", lineHeight: 1.2 }}>Starting Gate</span>
              <span style={{ fontSize: "10px", letterSpacing: "0.2em", textTransform: "uppercase", color: G.gold, fontWeight: 500, display: "block", marginTop: 2 }}>Financial</span>
            </Link>
            <p style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.55)", lineHeight: 1.75, margin: 0 }}>
              Commercial financing solutions for businesses across the DFW Metroplex. SBA loans, commercial real estate, equipment financing, and more.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              <a href="tel:+12149231694" style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.65)", textDecoration: "none", display: "flex", alignItems: "center", gap: "0.5rem" }}>
                <span style={{ color: G.gold, fontWeight: 600, fontSize: "0.75rem" }}>T</span>+1 (214) 923-1694
              </a>
              <a href="mailto:info@startinggatefinancial.com" style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.65)", textDecoration: "none", display: "flex", alignItems: "center", gap: "0.5rem" }}>
                <span style={{ color: G.gold, fontWeight: 600, fontSize: "0.75rem" }}>E</span>info@startinggatefinancial.com
              </a>
              <p style={{ fontSize: "0.82rem", color: "rgba(255,255,255,0.4)", lineHeight: 1.6, margin: "0.25rem 0 0" }}>
                803 Business Parkway<br />Richardson, TX 75081
              </p>
            </div>
          </div>

          {/* Col 2 — Financing */}
          <div>
            <h4 style={{ fontSize: "10px", letterSpacing: "0.18em", textTransform: "uppercase", color: G.gold, fontWeight: 600, marginBottom: "1rem", fontFamily: G.sans }}>
              Financing Programs
            </h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              {financingLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} style={{ fontSize: "0.82rem", color: "rgba(255,255,255,0.55)", textDecoration: "none", lineHeight: 1.5 }} className="footer-link">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Industries */}
          <div>
            <h4 style={{ fontSize: "10px", letterSpacing: "0.18em", textTransform: "uppercase", color: G.gold, fontWeight: 600, marginBottom: "1rem", fontFamily: G.sans }}>
              Industries
            </h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              {industryLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} style={{ fontSize: "0.82rem", color: "rgba(255,255,255,0.55)", textDecoration: "none", lineHeight: 1.5 }} className="footer-link">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 — Tools */}
          <div>
            <h4 style={{ fontSize: "10px", letterSpacing: "0.18em", textTransform: "uppercase", color: G.gold, fontWeight: 600, marginBottom: "1rem", fontFamily: G.sans }}>
              Tools & Calculators
            </h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              {toolLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} style={{ fontSize: "0.82rem", color: "rgba(255,255,255,0.55)", textDecoration: "none", lineHeight: 1.5 }} className="footer-link">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 5 — Company */}
          <div>
            <h4 style={{ fontSize: "10px", letterSpacing: "0.18em", textTransform: "uppercase", color: G.gold, fontWeight: 600, marginBottom: "1rem", fontFamily: G.sans }}>
              Company
            </h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} style={{ fontSize: "0.82rem", color: "rgba(255,255,255,0.55)", textDecoration: "none", lineHeight: 1.5 }} className="footer-link">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>

      {/* Divider */}
      <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)", maxWidth: 1280, margin: "0 auto" }} />

      {/* Legal band */}
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "1.5rem 2rem", display: "flex", flexDirection: "column", alignItems: "center", gap: "0.6rem" }}>
        <p style={{ fontSize: "11px", color: "rgba(255,255,255,0.25)", margin: 0, textAlign: "center" }}>
          © {new Date().getFullYear()} Starting Gate Financial. All rights reserved.&nbsp;·&nbsp;Richardson, TX
        </p>
        <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
          <Link href="/terms" style={{ fontSize: "11px", color: "rgba(255,255,255,0.3)", textDecoration: "none" }}>Terms of Use</Link>
          <span style={{ color: "rgba(255,255,255,0.2)", fontSize: "11px" }}>|</span>
          <Link href="/privacy" style={{ fontSize: "11px", color: "rgba(255,255,255,0.3)", textDecoration: "none" }}>Privacy Policy</Link>
        </div>
      </div>

    </footer>
  );
}
