const programs = [
  { title: 'SBA Financing', desc: 'Long-term capital for owner-operated growth', href: '/financing-options/sba-financing' },
  { title: 'Commercial Real Estate', desc: 'Acquisition, refinance, and construction execution', href: '/financing-options/commercial-real-estate' },
  { title: 'Business LOC & Term Loans', desc: 'Working capital and operational stability', href: '/financing-options/business-loc-term-loans' },
  { title: 'Equipment Financing', desc: 'Acquire without straining cash flow', href: '/financing-options/equipment-financing' },
  { title: 'DSCR Rental Loans', desc: 'Investment property financing on cash flow', href: '/financing-options/dscr-rental-loans' },
  { title: 'Fix & Flip Loans', desc: 'Short-term capital for rehab execution', href: '/financing-options/fix-and-flip-loans' },
  { title: 'Merchant Cash Advance', desc: 'Revenue-based advances for fast-moving businesses', href: '/financing-options/merchant-cash-advance' },
  { title: 'Accounts Receivable', desc: 'Turn outstanding invoices into working capital', href: '/financing-options/accounts-receivable-financing' },
  { title: 'Franchise Financing', desc: 'Structured capital for startup and expansion', href: '/financing-options/franchise-financing' },
  { title: 'Startup Financing', desc: 'Capital pathways for early-stage businesses', href: '/financing-options/startup-financing' },
]
export default function FinancingOptions() {
  return (
    <section style={{ background: 'white', padding: '6rem 0', borderBottom: '1px solid #E5E0D8' }}>
      <div style={{ maxWidth: '1140px', margin: '0 auto', padding: '0 2rem' }}>
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <p style={{ fontSize: '11px', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#CE9562', fontWeight: '600', marginBottom: '1rem', fontFamily: 'var(--font-source-sans)', textAlign: 'center', width: '100%', display: 'block' }}>01 — Capital Solutions</p>
          <h2 style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(1.8rem, 3vw, 2.4rem)', fontWeight: '700', color: '#0F172A', marginBottom: '1rem', lineHeight: '1.2' }}>
            Financing Paths Built for How<br />Businesses Actually Operate
          </h2>
          <p style={{ fontSize: '1rem', color: '#64748B', maxWidth: '480px', margin: '0 auto', lineHeight: '1.7', fontFamily: 'var(--font-source-sans)' }}>
            From SBA loans to commercial real estate — capital structured for your stage and sector.
          </p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1px', background: '#E5E0D8', border: '1px solid #E5E0D8' }}>
          {programs.map((p) => (
            <a key={p.href} href={p.href} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1.4rem 1.75rem', background: 'white', textDecoration: 'none', transition: 'background 0.15s' }}>
              <div>
                <p style={{ fontFamily: 'var(--font-playfair)', fontSize: '1rem', fontWeight: '600', color: '#0F172A', marginBottom: '0.2rem' }}>{p.title}</p>
                <p style={{ fontSize: '0.82rem', color: '#64748B', fontFamily: 'var(--font-source-sans)' }}>{p.desc}</p>
              </div>
              <span style={{ color: '#CE9562', fontSize: '1.1rem', marginLeft: '1rem' }}>→</span>
            </a>
          ))}
        </div>
        <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
          <a href="/financing-options" style={{ fontSize: '0.9rem', fontWeight: '600', color: '#082B09', textDecoration: 'none', borderBottom: '1px solid #CE9562', paddingBottom: '2px', fontFamily: 'var(--font-source-sans)' }}>
            View all financing options →
          </a>
        </div>
      </div>
    </section>
  )
}