import Link from 'next/link'

const financingLinks = [
  { label: 'Business LOC & Term Loans', href: '/financing-options/business-loc-term-loans' },
  { label: 'SBA Financing', href: '/financing-options/sba-financing' },
  { label: 'Commercial Real Estate', href: '/financing-options/commercial-real-estate' },
  { label: 'Equipment Financing', href: '/financing-options/equipment-financing' },
  { label: 'Merchant Cash Advance', href: '/financing-options/merchant-cash-advance' },
  { label: 'Fix & Flip Loans', href: '/financing-options/fix-and-flip-loans' },
  { label: 'DSCR Rental Loans', href: '/financing-options/dscr-rental-loans' },
  { label: 'Accounts Receivable', href: '/financing-options/accounts-receivable-financing' },
  { label: 'Franchise Financing', href: '/financing-options/franchise-financing' },
  { label: 'Startup Financing', href: '/financing-options/startup-financing' },
]

const industryLinks = [
  { label: 'Construction', href: '/industries/construction' },
  { label: 'Restaurants & Food', href: '/industries/restaurants' },
  { label: 'Oil & Gas Services', href: '/industries/oil-and-gas' },
  { label: 'Healthcare & Medical', href: '/industries/healthcare' },
  { label: 'Real Estate Investors', href: '/industries/real-estate-investors' },
  { label: 'Trucking & Transportation', href: '/industries/trucking-transportation' },
  { label: 'Professional Services', href: '/industries/professional-services' },
]

const toolLinks = [
  { label: 'MCA Calculator', href: '/tools/mca-calculator' },
  { label: 'SBA Loan Calculator', href: '/tools/sba-loan-calculator' },
  { label: 'DSCR Calculator', href: '/tools/dscr-calculator' },
  { label: 'Working Capital Calculator', href: '/tools/working-capital-calculator' },
]

const companyLinks = [
  { label: 'About Us', href: '/about' },
  { label: 'Contact Us', href: '/contact' },
  { label: 'Blog', href: '/blog' },
  { label: 'Become a Partner', href: '/partners' },
  { label: 'Apply Now', href: '/apply' },
]

export default function Footer() {
  return (
    <footer className="bg-[#082B09] text-white">

      {/* Gold gradient accent line */}
      <div className="h-[3px] w-full bg-gradient-to-r from-transparent via-[#CE9562] to-transparent" />

      {/* Main footer body */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">

          {/* Column 1 — Brand + Contact */}
          <div className="lg:col-span-1 flex flex-col gap-5">
            <Link href="/" className="flex items-center">
              <img
                src="/FB_Logo.png"
                alt="Starting Gate Financial"
                style={{ height: "40px", width: "auto", filter: "brightness(0) invert(1)" }}
              />
            </Link>

            <p className="text-sm text-white/60 leading-relaxed">
              Commercial loan brokerage serving the DFW Metroplex. SBA loans, CRE financing, equipment, and more.
            </p>

            <div className="flex flex-col gap-2 mt-1">
              <a
                href="tel:+12149231694"
                className="text-sm text-white/70 hover:text-[#CE9562] transition-colors duration-200 flex items-center gap-2"
              >
                <span className="text-[#CE9562]">T</span>
                +1 (214) 923-1694
              </a>
              <a
                href="mailto:info@startinggatefinancial.com"
                className="text-sm text-white/70 hover:text-[#CE9562] transition-colors duration-200 flex items-center gap-2"
              >
                <span className="text-[#CE9562]">E</span>
                info@startinggatefinancial.com
              </a>
              <p className="text-sm text-white/50 leading-snug mt-1">
                803 Business Parkway<br />
                Richardson, TX 75081
              </p>
            </div>
          </div>

          {/* Column 2 — Financing Programs */}
          <div className="lg:col-span-1">
            <h4 className="text-xs uppercase tracking-widest text-[#CE9562] font-semibold mb-4">
              Financing Programs
            </h4>
            <ul className="flex flex-col gap-2">
              {financingLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — Industries */}
          <div className="lg:col-span-1">
            <h4 className="text-xs uppercase tracking-widest text-[#CE9562] font-semibold mb-4">
              Industries
            </h4>
            <ul className="flex flex-col gap-2">
              {industryLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 — Tools & Calculators */}
          <div className="lg:col-span-1">
            <h4 className="text-xs uppercase tracking-widest text-[#CE9562] font-semibold mb-4">
              Tools & Calculators
            </h4>
            <ul className="flex flex-col gap-2">
              {toolLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 5 — Company */}
          <div className="lg:col-span-1">
            <h4 className="text-xs uppercase tracking-widest text-[#CE9562] font-semibold mb-4">
              Company
            </h4>
            <ul className="flex flex-col gap-2">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-white/10" />

      {/* Legal band */}
      <div className="max-w-7xl mx-auto px-6 py-6">
        <div className="flex flex-col items-center gap-2">
          <p className="text-xs text-white/25 text-center">
            © {new Date().getFullYear()} Starting Gate Financial. All rights reserved. &nbsp;·&nbsp; Richardson, TX
          </p>
          <div className="flex items-center gap-4">
            <Link href="/terms" className="text-xs text-white/30 hover:text-white/60 transition-colors">
              Terms of Use
            </Link>
            <span className="text-white/20 text-xs">|</span>
            <Link href="/privacy" className="text-xs text-white/30 hover:text-white/60 transition-colors">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>

    </footer>
  )
}
