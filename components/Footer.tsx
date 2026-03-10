import Link from "next/link";

const G = {
  dark: "#082B09",
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
];

const industryLinks = [
  { label: "Industries Overview",        href: "/industries" },
  { label: "Construction & Contractors", href: "/industries/construction" },
  { label: "Food & Beverage",            href: "/industries/food-beverage" },
  { label: "Healthcare & Medical",       href: "/industries/healthcare" },
  { label: "Oil & Gas",                  href: "/industries/oil-gas" },
  { label: "Real Estate Investors",      href: "/industries/real-estate-investors" },
];

const toolLinks = [
  { label: "Business Loan Calculator",    href: "/tools/business-loan-calculator" },
  { label: "DSCR Calculator",             href: "/tools/dscr-calculator" },
  { label: "MCA Planning Tool",           href: "/tools/mca-calculator" },
  { label: "FICA Tip Credit Calculator",  href: "/tools/fica-tip-calculator" },
];

const companyLinks = [
  { label: "About Us",         href: "/about" },
  { label: "Contact Us",       href: "/contact" },
  { label: "Blog",             href: "/blog" },
  { label: "Become a Partner", href: "/partners" },
  { label: "Apply Now",        href: "/apply" },
];

function FooterColumn({ title, links }: { title: string; links: { label: string; href: string }[] }) {
  return (
    <div>
      <h4 className="footer-col-heading">{title}</h4>
      <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.5rem" }}>
        {links.map((link) => (
          <li key={link.href}>
            <Link href={link.href} className="footer-link">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

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
              <img
                src="/FB_Logo.png"
                alt="Starting Gate Financial"
                style={{ height: 56, width: "auto", display: "block" }}
              />
            </Link>
            <p style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.55)", lineHeight: 1.75, margin: 0 }}>
              Commercial financing solutions for businesses across the DFW Metroplex. SBA loans, commercial real estate, equipment financing, and more.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              <a href="tel:+12149231694" className="footer-contact-link">
                <span style={{ color: G.gold, fontWeight: 600, fontSize: "0.75rem" }}>T</span>
                +1 (214) 923-1694
              </a>
              <a href="mailto:info@startinggatefinancial.com" className="footer-contact-link">
                <span style={{ color: G.gold, fontWeight: 600, fontSize: "0.75rem" }}>E</span>
                info@startinggatefinancial.com
              </a>
              <p style={{ fontSize: "0.82rem", color: "rgba(255,255,255,0.4)", lineHeight: 1.6, margin: "0.25rem 0 0" }}>
                803 Business Parkway<br />Richardson, TX 75081
              </p>
            </div>
          </div>

          <FooterColumn title="Financing Programs" links={financingLinks} />
          <FooterColumn title="Industries"          links={industryLinks} />
          <FooterColumn title="Tools & Calculators" links={toolLinks} />
          <FooterColumn title="Company"             links={companyLinks} />

        </div>
      </div>

      {/* Divider */}
      <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)", maxWidth: 1280, margin: "0 auto" }} />

      {/* Legal band */}
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "1.5rem 2rem", display: "flex", flexDirection: "column", alignItems: "center", gap: "0.5rem" }}>
        <p style={{ fontSize: "11px", color: "rgba(255,255,255,0.22)", margin: 0, textAlign: "center", lineHeight: 1.7 }}>
          © {new Date().getFullYear()} Starting Gate Financial. All rights reserved.&nbsp;·&nbsp;Richardson, TX
        </p>
        <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
          <Link href="/terms"   className="footer-legal-link">Terms of Use</Link>
          <span style={{ color: "rgba(255,255,255,0.2)", fontSize: "11px" }}>|</span>
          <Link href="/privacy" className="footer-legal-link">Privacy Policy</Link>
        </div>
      </div>

    </footer>
  );
}
