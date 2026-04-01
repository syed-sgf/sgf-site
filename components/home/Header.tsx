import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Brand */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/sgf-logo.png"
            alt="Starting Gate Financial"
            width={40}
            height={40}
            priority
          />
          <span className="font-semibold tracking-tight text-slate-900">
            Starting Gate Financial
          </span>
        </Link>

        {/* Primary Navigation */}
        <nav className="hidden md:flex gap-8 text-sm font-semibold text-slate-600">
          <Link href="/financing-options" className="hover:text-slate-900">
            Financing
          </Link>
          <Link href="/industries" className="hover:text-slate-900">
            Industries
          </Link>
          <Link href="/tools" className="hover:text-slate-900">
            Tools
          </Link>
          <Link href="/technology" className="hover:text-slate-900">
            Technology
          </Link>
          <Link href="/partners" className="hover:text-slate-900">
            Partners
          </Link>
        </nav>

        {/* Primary CTA */}
        <Link
          href="/apply"
          className="bg-emerald-700 text-white px-5 py-2 font-semibold rounded-md hover:bg-emerald-800"
        >
          Pre-Qualify
        </Link>
      </div>
    </header>
  );
}
