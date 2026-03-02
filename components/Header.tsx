import Link from "next/link";

const navLinks = [
  { label: "Financing", href: "/financing-options" },
  { label: "Industries", href: "/industries" },
  { label: "Tools", href: "/tools" },
  { label: "Technology", href: "/technology" },
  { label: "Partners", href: "/partners" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link
          href="/"
          className="font-serif font-semibold tracking-tight text-slate-900"
        >
          Starting Gate Financial
        </Link>

        <nav className="hidden md:flex gap-8 text-sm font-semibold text-slate-600">
          {navLinks.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              className="hover:text-slate-900 transition-colors"
            >
              {label}
            </Link>
          ))}
        </nav>

        <Link
          href="/apply"
          className="bg-[var(--sgf-green-500)] hover:bg-[var(--sgf-green-600)] text-white px-5 py-2 text-sm font-semibold transition-colors"
        >
          Pre-Qualify
        </Link>
      </div>
    </header>
  );
}
