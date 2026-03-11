"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { products } from "@/lib/financing-data";
import { industries } from "@/lib/industry-data";

type MenuKey = "financing" | "industries" | "tools" | null;

const toolLinks = [
  { label: "Business Loan Calculator",   href: "/tools/business-loan-calculator" },
  { label: "DSCR Calculator",            href: "/tools/dscr-calculator" },
  { label: "MCA Planning Tool",          href: "/tools/mca-calculator" },
  { label: "FICA Tip Credit Calculator", href: "/tools/fica-tip-calculator" },
];

function Chevron({ rotated }: { rotated: boolean }) {
  return (
    <svg
      style={{ width: 11, height: 11, transition: "transform 0.2s", transform: rotated ? "rotate(180deg)" : "rotate(0deg)", flexShrink: 0 }}
      viewBox="0 0 12 8" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"
    >
      <path d="M1 1l5 5 5-5" />
    </svg>
  );
}

function DropdownLink({ href, label, onClick }: { href: string; label: string; onClick?: () => void }) {
  return (
    <Link
      href={href}
      onClick={onClick}
      style={{ display: "block", padding: "9px 20px", fontSize: 13, color: "#475569", textDecoration: "none", whiteSpace: "nowrap" }}
      onMouseEnter={e => { (e.target as HTMLElement).style.color = "#118241"; (e.target as HTMLElement).style.background = "#f8f6f1"; }}
      onMouseLeave={e => { (e.target as HTMLElement).style.color = "#475569"; (e.target as HTMLElement).style.background = "transparent"; }}
    >
      {label}
    </Link>
  );
}

function MobileSection({
  label, isOpen, onToggle, links, allHref, allLabel, onLinkClick,
}: {
  label: string; isOpen: boolean; onToggle: () => void;
  links: { label: string; href: string }[];
  allHref: string; allLabel: string; onLinkClick: () => void;
}) {
  return (
    <div style={{ borderBottom: "1px solid #f1f5f9" }}>
      <button
        onClick={onToggle}
        style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "1rem 0", fontSize: 14, fontWeight: 600, color: "#334155", background: "none", border: "none", cursor: "pointer" }}
      >
        {label}
        <Chevron rotated={isOpen} />
      </button>
      {isOpen && (
        <div style={{ paddingBottom: "1rem", paddingLeft: "0.75rem" }}>
          {links.map(({ label: lbl, href }) => (
            <Link
              key={href}
              href={href}
              onClick={onLinkClick}
              style={{ display: "block", padding: "0.4rem 0", fontSize: 13, color: "#475569", textDecoration: "none" }}
            >
              {lbl}
            </Link>
          ))}
          <Link
            href={allHref}
            onClick={onLinkClick}
            style={{ display: "block", paddingTop: "0.6rem", marginTop: "0.25rem", fontSize: 12, fontWeight: 700, color: "#118241", textDecoration: "none" }}
          >
            {allLabel} →
          </Link>
        </div>
      )}
    </div>
  );
}

export default function Header() {
  const [open, setOpen]             = useState<MenuKey>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSection, setMobileSection] = useState<MenuKey>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  function enter(key: MenuKey) {
    if (timerRef.current) clearTimeout(timerRef.current);
    setOpen(key);
  }
  function leave() {
    timerRef.current = setTimeout(() => setOpen(null), 130);
  }
  function toggleMobile(key: MenuKey) {
    setMobileSection((prev) => (prev === key ? null : key));
  }
  function closeMobile() {
    setMobileOpen(false);
    setMobileSection(null);
  }

  const financingLinks = products.map((p) => ({ label: p.title, href: `/financing/${p.slug}` }));
  const industryLinks  = industries.map((i) => ({ label: i.title, href: `/industries/${i.slug}` }));

  return (
    <header style={{ position: "sticky", top: 0, zIndex: 50, background: "#fff", borderBottom: "1px solid #e2e8f0" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 1.5rem", height: 64, display: "flex", alignItems: "center", justifyContent: "space-between", gap: 24 }}>

        {/* Logo — next/image for automatic WebP + size optimization */}
        <Link href="/" onClick={closeMobile} style={{ display: "flex", alignItems: "center", flexShrink: 0 }}>
          <Image
            src="/FB_Logo.png"
            alt="Starting Gate Financial"
            width={180}
            height={56}
            priority
            style={{ height: 56, width: "auto" }}
          />
        </Link>

        {/* Desktop nav */}
        <nav style={{ display: "flex", alignItems: "stretch", flex: 1, justifyContent: "center" }} className="sgf-desktop-nav">

          {/* Financing dropdown */}
          <div style={{ position: "relative", display: "flex", alignItems: "stretch" }}
            onMouseEnter={() => enter("financing")} onMouseLeave={leave}>
            <button style={{ display: "flex", alignItems: "center", gap: 5, padding: "0 1rem", fontSize: 13, fontWeight: 600, color: "#334155", background: "none", border: "none", cursor: "pointer" }}>
              Financing <Chevron rotated={open === "financing"} />
            </button>
            {open === "financing" && (
              <div style={{ position: "absolute", top: "100%", left: 0, background: "#fff", border: "1px solid #e2e8f0", boxShadow: "0 8px 24px rgba(0,0,0,0.08)", padding: "0.75rem 0", zIndex: 50, width: 480 }}
                onMouseEnter={() => enter("financing")} onMouseLeave={leave}>
                <p style={{ padding: "0 20px 8px", fontSize: 10, letterSpacing: "0.15em", textTransform: "uppercase", color: "#94a3b8", fontWeight: 600, borderBottom: "1px solid #f1f5f9", marginBottom: 4 }}>
                  Financing Programs
                </p>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
                  {financingLinks.map(({ label, href }) => (
                    <DropdownLink key={href} href={href} label={label} />
                  ))}
                </div>
                <div style={{ borderTop: "1px solid #f1f5f9", marginTop: 8, padding: "8px 20px 0" }}>
                  <Link href="/financing-options" style={{ fontSize: 11, fontWeight: 700, color: "#118241", textDecoration: "none" }}>
                    Browse all programs →
                  </Link>
                </div>
              </div>
            )}
          </div>

          {/* Industries dropdown */}
          <div style={{ position: "relative", display: "flex", alignItems: "stretch" }}
            onMouseEnter={() => enter("industries")} onMouseLeave={leave}>
            <button style={{ display: "flex", alignItems: "center", gap: 5, padding: "0 1rem", fontSize: 13, fontWeight: 600, color: "#334155", background: "none", border: "none", cursor: "pointer" }}>
              Industries <Chevron rotated={open === "industries"} />
            </button>
            {open === "industries" && (
              <div style={{ position: "absolute", top: "100%", left: 0, background: "#fff", border: "1px solid #e2e8f0", boxShadow: "0 8px 24px rgba(0,0,0,0.08)", padding: "0.75rem 0", zIndex: 50, width: 240 }}
                onMouseEnter={() => enter("industries")} onMouseLeave={leave}>
                <p style={{ padding: "0 20px 8px", fontSize: 10, letterSpacing: "0.15em", textTransform: "uppercase", color: "#94a3b8", fontWeight: 600, borderBottom: "1px solid #f1f5f9", marginBottom: 4 }}>
                  Industries
                </p>
                {industryLinks.map(({ label, href }) => (
                  <DropdownLink key={href} href={href} label={label} />
                ))}
                <div style={{ borderTop: "1px solid #f1f5f9", marginTop: 8, padding: "8px 20px 0" }}>
                  <Link href="/industries" style={{ fontSize: 11, fontWeight: 700, color: "#118241", textDecoration: "none" }}>
                    All industries →
                  </Link>
                </div>
              </div>
            )}
          </div>

          {/* Tools dropdown */}
          <div style={{ position: "relative", display: "flex", alignItems: "stretch" }}
            onMouseEnter={() => enter("tools")} onMouseLeave={leave}>
            <button style={{ display: "flex", alignItems: "center", gap: 5, padding: "0 1rem", fontSize: 13, fontWeight: 600, color: "#334155", background: "none", border: "none", cursor: "pointer" }}>
              Tools <Chevron rotated={open === "tools"} />
            </button>
            {open === "tools" && (
              <div style={{ position: "absolute", top: "100%", left: 0, background: "#fff", border: "1px solid #e2e8f0", boxShadow: "0 8px 24px rgba(0,0,0,0.08)", padding: "0.75rem 0", zIndex: 50, width: 240 }}
                onMouseEnter={() => enter("tools")} onMouseLeave={leave}>
                <p style={{ padding: "0 20px 8px", fontSize: 10, letterSpacing: "0.15em", textTransform: "uppercase", color: "#94a3b8", fontWeight: 600, borderBottom: "1px solid #f1f5f9", marginBottom: 4 }}>
                  Calculators
                </p>
                {toolLinks.map(({ label, href }) => (
                  <DropdownLink key={href} href={href} label={label} />
                ))}
                <div style={{ borderTop: "1px solid #f1f5f9", marginTop: 8, padding: "8px 20px 0" }}>
                  <Link href="/tools" style={{ fontSize: 11, fontWeight: 700, color: "#118241", textDecoration: "none" }}>
                    All tools →
                  </Link>
                </div>
              </div>
            )}
          </div>

          {/* Contact only — About/Blog/Partners hidden until pages are built */}
          <Link href="/contact"
            style={{ display: "flex", alignItems: "center", padding: "0 1rem", fontSize: 13, fontWeight: 600, color: "#334155", textDecoration: "none" }}>
            Contact
          </Link>

        </nav>

        {/* Desktop CTA — single button until /apply is live */}
        <div style={{ display: "flex", alignItems: "center", gap: 12, flexShrink: 0 }} className="sgf-desktop-ctas">
          <Link href="/contact" style={{ background: "#118241", color: "#fff", padding: "0.5rem 1.1rem", fontSize: 13, fontWeight: 600, textDecoration: "none", whiteSpace: "nowrap" }}>
            Get Started
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => { setMobileOpen(prev => !prev); setMobileSection(null); }}
          aria-label="Toggle navigation"
          aria-expanded={mobileOpen}
          style={{ display: "none", padding: "0.5rem", background: "none", border: "none", cursor: "pointer", color: "#334155" }}
          className="sgf-hamburger"
        >
          {mobileOpen ? (
            <svg width="22" height="22" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 4l12 12M16 4L4 16" />
            </svg>
          ) : (
            <svg width="22" height="22" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 5h14M3 10h14M3 15h14" />
            </svg>
          )}
        </button>

      </div>

      {/* Mobile menu panel */}
      {mobileOpen && (
        <div style={{ background: "#fff", borderTop: "1px solid #e2e8f0", maxHeight: "78vh", overflowY: "auto" }} className="sgf-mobile-menu">
          <div style={{ padding: "0 1.5rem" }}>
            <MobileSection label="Financing" isOpen={mobileSection === "financing"} onToggle={() => toggleMobile("financing")}
              links={financingLinks} allHref="/financing-options" allLabel="All financing programs" onLinkClick={closeMobile} />
            <MobileSection label="Industries" isOpen={mobileSection === "industries"} onToggle={() => toggleMobile("industries")}
              links={industryLinks} allHref="/industries" allLabel="All industries" onLinkClick={closeMobile} />
            <MobileSection label="Tools" isOpen={mobileSection === "tools"} onToggle={() => toggleMobile("tools")}
              links={toolLinks} allHref="/tools" allLabel="All tools" onLinkClick={closeMobile} />

            {/* Contact only — About/Blog hidden until pages are built */}
            <Link href="/contact" onClick={closeMobile}
              style={{ display: "block", padding: "1rem 0", fontSize: 14, fontWeight: 600, color: "#334155", textDecoration: "none", borderBottom: "1px solid #f1f5f9" }}>
              Contact
            </Link>
          </div>

          {/* Mobile CTA */}
          <div style={{ padding: "1.25rem 1.5rem", borderTop: "1px solid #e2e8f0" }}>
            <Link href="/contact" onClick={closeMobile}
              style={{ display: "block", textAlign: "center", padding: "0.85rem", background: "#118241", color: "#fff", fontSize: 14, fontWeight: 600, textDecoration: "none" }}>
              Get Started
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
