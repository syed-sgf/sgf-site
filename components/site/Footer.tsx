import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t bg-white">
      <div className="max-w-7xl mx-auto px-6 py-14 grid md:grid-cols-3 gap-10 text-sm text-slate-600">
        <div>
          <div className="font-semibold text-slate-900">Starting Gate Financial</div>
          <div className="mt-2">Richardson, TX</div>
          <div className="mt-1">info@startinggatefinancial.com</div>
          <div className="mt-1">(214) 923-1694</div>

          <p className="mt-6 text-xs leading-relaxed text-slate-500">
            Information provided is for educational purposes only and does not constitute
            an offer to lend. All financing is subject to lender approval and program
            terms vary by lender and borrower qualification.
          </p>
        </div>

        <div>
          <div className="font-semibold text-slate-900">Explore</div>
          <ul className="mt-3 space-y-2">
            <li><Link className="hover:text-slate-900" href="/financing-options">Financing Options</Link></li>
            <li><Link className="hover:text-slate-900" href="/industries">Industries</Link></li>
            <li><Link className="hover:text-slate-900" href="/tools">Tools & Calculators</Link></li>
            <li><Link className="hover:text-slate-900" href="/technology">SGF Technology</Link></li>
            <li><Link className="hover:text-slate-900" href="/partners">Partners</Link></li>
          </ul>
        </div>

        <div>
          <div className="font-semibold text-slate-900">Company</div>
          <ul className="mt-3 space-y-2">
            <li><Link className="hover:text-slate-900" href="/about">About</Link></li>
            <li><Link className="hover:text-slate-900" href="/contact">Contact</Link></li>
            <li><Link className="hover:text-slate-900" href="/apply">Apply</Link></li>
            {/* Add these pages later if you want; keep links when pages exist */}
            {/* <li><Link href="/privacy">Privacy</Link></li> */}
            {/* <li><Link href="/terms">Terms</Link></li> */}
          </ul>
        </div>
      </div>
    </footer>
  );
}
