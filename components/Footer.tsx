import Link from "next/link";
import { products } from "@/lib/financing-data";
import { industries } from "@/lib/industry-data";

const colHeadingStyle: React.CSSProperties = {
  fontSize: "0.7rem",
  textTransform: "uppercase",
  letterSpacing: "0.1em",
  color: "white",
  fontWeight: 600,
  paddingBottom: "0.5rem",
  borderBottom: "1px solid #C9A227",
  marginBottom: "0.75rem",
};

const linkStyle: React.CSSProperties = {
  fontSize: "0.8rem",
  color: "rgba(255,255,255,0.55)",
  textDecoration: "none",
  display: "block",
  lineHeight: 1.5,
};

const partnerLinks = [
  { label: "Partners Home", href: "/partners" },
  { label: "Overview", href: "/partners/overview" },
  { label: "Programs", href: "/partners/programs" },
  { label: "Apply as Partner", href: "/partners/apply" },
];

const companyLinks = [
  { label: "About Us", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "Apply Now", href: "/apply" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms of Service", href: "/terms" },
];

export default function Footer() {
  return (
    <footer>
      {/* Accent bar */}
      <div
        className="sgf-footer-accent"
        style={{
          height: "3px",
          background: "linear-gradient(to right, transparent, #C9A227, transparent)",
        }}
      />

      {/* Main body */}
      <div style={{ backgroundColor: "#082B09", color: "white", padding: "3.5rem 0" }}>
        <div className="max-w-6xl mx-auto px-6">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "220px 1fr",
              gap: "3rem",
              alignItems: "start",
            }}
          >
            {/* Left column — brand + contact + social */}
            <div>
              <div
                className="font-serif"
                style={{ fontSize: "1.05rem", fontWeight: 600, lineHeight: 1.3, color: "white" }}
              >
                Starting Gate Financial
              </div>
              <p
                style={{
                  marginTop: "0.5rem",
                  fontSize: "0.85rem",
                  color: "rgba(255,255,255,0.55)",
                  fontStyle: "italic",
                  maxWidth: "none",
                }}
              >
                Business capital, structured right.
              </p>

              <div
                style={{
                  marginTop: "1.5rem",
                  fontSize: "0.8rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.9,
                }}
              >
                <div>(972) 233-4040</div>
                <div>info@startinggatefinancial.com</div>
                <div>Richardson, Texas</div>
                <div>DFW Metroplex</div>
              </div>

              {/* Social icons */}
              <div style={{ marginTop: "1.5rem", display: "flex", gap: "0.75rem" }}>
                <Link
                  href="https://www.linkedin.com/company/starting-gate-financial"
                  aria-label="LinkedIn"
                  className="footer-social"
                  style={{ color: "rgba(255,255,255,0.55)" }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </Link>
                <Link
                  href="https://www.facebook.com/startinggatefinancial"
                  aria-label="Facebook"
                  className="footer-social"
                  style={{ color: "rgba(255,255,255,0.55)" }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </Link>
                <Link
                  href="https://www.instagram.com/startinggatefinancial"
                  aria-label="Instagram"
                  className="footer-social"
                  style={{ color: "rgba(255,255,255,0.55)" }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Right column — sitemap grid */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(4, 1fr)",
                gap: "2rem",
                alignItems: "start",
              }}
            >
              {/* Financing Options */}
              <div>
                <div style={colHeadingStyle}>Financing Options</div>
                <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                  {products.map((p) => (
                    <li key={p.slug} style={{ marginBottom: "0.35rem" }}>
                      <Link href={`/financing/${p.slug}`} className="footer-link" style={linkStyle}>
                        {p.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Industries */}
              <div>
                <div style={colHeadingStyle}>Industries</div>
                <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                  {industries.map((ind) => (
                    <li key={ind.slug} style={{ marginBottom: "0.35rem" }}>
                      <Link
                        href={`/industries/${ind.slug}`}
                        className="footer-link"
                        style={linkStyle}
                      >
                        {ind.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Partners */}
              <div>
                <div style={colHeadingStyle}>Partners</div>
                <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                  {partnerLinks.map((link) => (
                    <li key={link.href} style={{ marginBottom: "0.35rem" }}>
                      <Link href={link.href} className="footer-link" style={linkStyle}>
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Company */}
              <div>
                <div style={colHeadingStyle}>Company</div>
                <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                  {companyLinks.map((link) => (
                    <li key={link.href} style={{ marginBottom: "0.35rem" }}>
                      <Link href={link.href} className="footer-link" style={linkStyle}>
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div
            style={{
              marginTop: "2.5rem",
              paddingTop: "1.5rem",
              borderTop: "1px solid rgba(255,255,255,0.1)",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              fontSize: "0.78rem",
              color: "rgba(255,255,255,0.4)",
            }}
          >
            <span>© 2025 Starting Gate Financial LLC. All rights reserved.</span>
            <div style={{ display: "flex", gap: "1.5rem" }}>
              <Link
                href="/privacy-policy"
                className="footer-link"
                style={{ ...linkStyle, color: "rgba(255,255,255,0.4)", display: "inline" }}
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="footer-link"
                style={{ ...linkStyle, color: "rgba(255,255,255,0.4)", display: "inline" }}
              >
                Terms
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Disclaimer band */}
      <div style={{ backgroundColor: "#041705", padding: "1rem 0" }}>
        <div className="max-w-6xl mx-auto px-6">
          <p
            style={{
              fontSize: "0.7rem",
              color: "rgba(255,255,255,0.35)",
              lineHeight: 1.6,
              textAlign: "center",
              maxWidth: "none",
              margin: 0,
            }}
          >
            Starting Gate Financial LLC is a commercial loan brokerage. Financing is subject to
            underwriting, lender approval, and borrower eligibility. This is not a commitment to
            lend. Not affiliated with the SBA or any government agency.
          </p>
        </div>
      </div>
    </footer>
  );
}
