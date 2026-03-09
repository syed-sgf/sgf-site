"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { products } from "@/lib/financing-data";
import { industries } from "@/lib/industry-data";

type MenuKey = "financing" | "industries" | "tools" | null;

const toolLinks = [
  { label: "Business Loan Calculator", href: "/tools/business-loan-calculator" },
  { label: "DSCR Calculator",          href: "/tools/dscr-calculator" },
  { label: "MCA Planning Tool",         href: "/tools/mca-calculator" },
  { label: "FICA Tip Credit Calculator",href: "/tools/fica-tip-calculator" },
];

/* ─── Micro-components ──────────────────────────────────────────────── */

function Chevron({ rotated }: { rotated: boolean }) {
  return (
    <svg
      className={`w-[11px] h-[11px] transition-transform duration-200 ${rotated ? "rotate-180" : ""}`}
      viewBox="0 0 12 8"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden="true"
    >
      <path d="M1 1l5 5 5-5" />
    </svg>
  );
}

function DropdownLink({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      className="block px-5 py-[9px] text-[13px] text-slate-700 hover:bg-slate-50 hover:text-[var(--sgf-green-500)] transition-colors"
    >
      {label}
    </Link>
  );
}

function MobileSection({
  label,
  isOpen,
  onToggle,
  links,
  allHref,
  allLabel,
}: {
  label: string;
  isOpen: boolean;
  onToggle: () => void;
  links: { label: string; href: string }[];
  allHref: string;
  allLabel: string;
}) {
  return (
    <div className="border-b border-slate-100 last:border-b-0">
      <button
        className="w-full flex items-center justify-between py-4 text-sm font-semibold text-slate-700 hover:text-slate-900"
        onClick={onToggle}
      >
        {label}
        <Chevron rotated={isOpen} />
      </button>
      {isOpen && (
        <div className="pb-4 pl-3 space-y-0.5">
          {links.map(({ label: lbl, href }) => (
            <Link
              key={href}
              href={href}
              className="block py-1.5 text-[13px] text-slate-600 hover:text-[var(--sgf-green-500)] transition-colors"
            >
              {lbl}
            </Link>
          ))}
          <Link
            href={allHref}
            className="block pt-2 mt-1 text-xs font-semibold text-[var(--sgf-green-500)] hover:underline underline-offset-2"
          >
            {allLabel} →
          </Link>
        </div>
      )}
    </div>
  );
}

/* ─── Header ────────────────────────────────────────────────────────── */

export default function Header() {
  const [open, setOpen]               = useState<MenuKey>(null);
  const [mobileOpen, setMobileOpen]   = useState(false);
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

  const financingLinks = products.map((p) => ({
    label: p.title,
    href:  `/financing/${p.slug}`,
  }));
  const industryLinks = industries.map((i) => ({
    label: i.title,
    href:  `/industries/${i.slug}`,
  }));

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between gap-6">

        {/* ── Logo ── */}
        <Link href="/" className="flex items-center">
          <Image
            src="/images/sgf-icon.png"
            alt="Starting Gate Financial"
            width={48}
            height={48}
            priority
            className="h-12 w-12 object-contain"
          />
        </Link>

        {/* ── Desktop nav ── */}
        <nav className="hidden lg:flex items-stretch flex-1 justify-center" aria-label="Primary">

          {/* Financing */}
          <div
            className="relative flex items-stretch"
            onMouseEnter={() => enter("financing")}
            onMouseLeave={leave}
          >
            <button className="flex items-center gap-[5px] px-4 text-[13px] font-semibold text-slate-700 hover:text-slate-900 transition-colors">
              Financing <Chevron rotated={open === "financing"} />
            </button>
            {open === "financing" && (
              <div
                className="absolute top-full left-0 bg-white border border-slate-200 shadow-lg py-3 z-50"
                style={{ width: 500 }}
                onMouseEnter={() => enter("financing")}
                onMouseLeave={leave}
              >
                <p className="px-5 pb-2 mb-1 text-[10px] uppercase tracking-widest text-slate-400 font-semibold border-b border-slate-100">
                  Financing Programs
                </p>
                <div className="grid grid-cols-2">
                  {financingLinks.map(({ label, href }) => (
                    <DropdownLink key={href} href={href} label={label} />
                  ))}
                </div>
                <div className="border-t border-slate-100 mt-2 pt-2 px-5">
                  <Link
                    href="/financing"
                    className="text-[11px] font-semibold text-[var(--sgf-green-500)] hover:underline underline-offset-2"
                  >
                    Browse all programs →
                  </Link>
                </div>
              </div>
            )}
          </div>

          {/* Industries */}
          <div
            className="relative flex items-stretch"
            onMouseEnter={() => enter("industries")}
            onMouseLeave={leave}
          >
            <button className="flex items-center gap-[5px] px-4 text-[13px] font-semibold text-slate-700 hover:text-slate-900 transition-colors">
              Industries <Chevron rotated={open === "industries"} />
            </button>
            {open === "industries" && (
              <div
                className="absolute top-full left-0 bg-white border border-slate-200 shadow-lg py-3 z-50 w-60"
                onMouseEnter={() => enter("industries")}
                onMouseLeave={leave}
              >
                <p className="px-5 pb-2 mb-1 text-[10px] uppercase tracking-widest text-slate-400 font-semibold border-b border-slate-100">
                  Industries
                </p>
                {industryLinks.map(({ label, href }) => (
                  <DropdownLink key={href} href={href} label={label} />
                ))}
                <div className="border-t border-slate-100 mt-2 pt-2 px-5">
                  <Link
                    href="/industries"
                    className="text-[11px] font-semibold text-[var(--sgf-green-500)] hover:underline underline-offset-2"
                  >
                    All industries →
                  </Link>
                </div>
              </div>
            )}
          </div>

          {/* Tools */}
          <div
            className="relative flex items-stretch"
            onMouseEnter={() => enter("tools")}
            onMouseLeave={leave}
          >
            <button className="flex items-center gap-[5px] px-4 text-[13px] font-semibold text-slate-700 hover:text-slate-900 transition-colors">
              Tools <Chevron rotated={open === "tools"} />
            </button>
            {open === "tools" && (
              <div
                className="absolute top-full left-0 bg-white border border-slate-200 shadow-lg py-3 z-50 w-60"
                onMouseEnter={() => enter("tools")}
                onMouseLeave={leave}
              >
                <p className="px-5 pb-2 mb-1 text-[10px] uppercase tracking-widest text-slate-400 font-semibold border-b border-slate-100">
                  Calculators
                </p>
                {toolLinks.map(({ label, href }) => (
                  <DropdownLink key={href} href={href} label={label} />
                ))}
                <div className="border-t border-slate-100 mt-2 pt-2 px-5">
                  <Link
                    href="/tools"
                    className="text-[11px] font-semibold text-[var(--sgf-green-500)] hover:underline underline-offset-2"
                  >
                    All tools →
                  </Link>
                </div>
              </div>
            )}
          </div>

          <Link
            href="/about"
            className="flex items-center px-4 text-[13px] font-semibold text-slate-700 hover:text-slate-900 transition-colors"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="flex items-center px-4 text-[13px] font-semibold text-slate-700 hover:text-slate-900 transition-colors"
          >
            Contact
          </Link>
        </nav>

        {/* ── Right side ── */}
        <div className="hidden lg:flex items-center gap-5 shrink-0">
          <Link
            href="/partners"
            className="text-[13px] font-semibold text-slate-600 hover:text-slate-900 transition-colors"
          >
            Become a Partner
          </Link>
          <Link
            href="/apply"
            className="bg-[var(--sgf-green-500)] hover:bg-[var(--sgf-green-600)] text-white px-5 py-2 text-[13px] font-semibold transition-colors"
          >
            Apply Now
          </Link>
        </div>

        {/* ── Mobile hamburger ── */}
        <button
          className="lg:hidden p-2 -mr-2 text-slate-700 hover:text-slate-900 transition-colors"
          onClick={() => {
            setMobileOpen((prev) => !prev);
            setMobileSection(null);
          }}
          aria-label="Toggle navigation"
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? (
            <svg className="w-5 h-5" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 4l12 12M16 4L4 16" />
            </svg>
          ) : (
            <svg className="w-5 h-5" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 5h14M3 10h14M3 15h14" />
            </svg>
          )}
        </button>

      </div>

      {/* ── Mobile menu ── */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white max-h-[75vh] overflow-y-auto">
          <div className="px-6 divide-y divide-slate-100">
            <MobileSection
              label="Financing"
              isOpen={mobileSection === "financing"}
              onToggle={() => toggleMobile("financing")}
              links={financingLinks}
              allHref="/financing"
              allLabel="All financing programs"
            />
            <MobileSection
              label="Industries"
              isOpen={mobileSection === "industries"}
              onToggle={() => toggleMobile("industries")}
              links={industryLinks}
              allHref="/industries"
              allLabel="All industries"
            />
            <MobileSection
              label="Tools"
              isOpen={mobileSection === "tools"}
              onToggle={() => toggleMobile("tools")}
              links={toolLinks}
              allHref="/tools"
              allLabel="All tools"
            />
            <Link
              href="/about"
              className="block py-4 text-sm font-semibold text-slate-700 hover:text-[var(--sgf-green-500)] transition-colors"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="block py-4 text-sm font-semibold text-slate-700 hover:text-[var(--sgf-green-500)] transition-colors"
            >
              Contact
            </Link>
          </div>
          <div className="px-6 py-5 border-t border-slate-200 flex flex-col gap-3">
            <Link
              href="/partners"
              className="block text-center py-2.5 border border-slate-300 text-sm font-semibold text-slate-700 hover:border-slate-400 transition-colors"
            >
              Become a Partner
            </Link>
            <Link
              href="/apply"
              className="block text-center py-3 bg-[var(--sgf-green-500)] hover:bg-[var(--sgf-green-600)] text-white text-sm font-semibold transition-colors"
            >
              Apply Now
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
