import Link from "next/link";

type PillarItem = { label: string; href: string };

const pillars: {
  title: string;
  desc: string;
  items: PillarItem[];
  featured?: boolean;
}[] = [
  {
    title: "Business & Working Capital",
    desc: "Flexible capital solutions designed around cash flow, timing, and operational realities.",
    items: [
      { label: "Business Lines of Credit & Term Loans", href: "/financing/business-loc" },
      { label: "Accounts Receivable Financing",         href: "/financing/accounts-receivable" },
      { label: "Equipment Financing",                   href: "/financing/equipment-financing" },
      { label: "Merchant Cash Advance",                 href: "/financing/merchant-cash-advance" },
    ],
  },
  {
    title: "Commercial & Investment Real Estate",
    desc: "Acquisition, refinance, construction, and DSCR-based financing for income-producing properties.",
    items: [
      { label: "Commercial Real Estate Loans", href: "/financing/commercial-real-estate" },
      { label: "DSCR Rental Loans",            href: "/financing/rental-loans" },
      { label: "Fix & Flip Financing",         href: "/financing/fix-and-flip" },
    ],
    featured: true,
  },
  {
    title: "SBA & Structured Financing",
    desc: "Long-term capital for qualified owner-operated businesses requiring disciplined underwriting.",
    items: [
      { label: "SBA 7(a) & 504 Loans",  href: "/financing/sba-loans" },
      { label: "Franchise Financing",    href: "/financing/franchise-financing" },
      { label: "Startup Financing",      href: "/financing/startup-financing" },
    ],
  },
];

function Pillar({
  title,
  desc,
  items,
}: {
  title: string;
  desc: string;
  items: PillarItem[];
}) {
  return (
    <div>
      <h2 className="font-serif text-3xl font-semibold">{title}</h2>
      <p className="mt-6 text-slate-600 max-w-[52ch]">{desc}</p>
      <ul className="mt-8 space-y-2 font-medium">
        {items.map(({ label, href }) => (
          <li key={href}>
            <Link
              href={href}
              className="text-slate-700 hover:text-[var(--sgf-green-500)] transition-colors"
            >
              — {label}
            </Link>
          </li>
        ))}
      </ul>
      <Link
        href="/financing"
        className="inline-block mt-6 text-sm font-semibold text-[var(--sgf-green-500)] underline underline-offset-4 hover:text-[var(--sgf-green-600)]"
      >
        View all programs →
      </Link>
    </div>
  );
}

export default function FinancingOptions() {
  return (
    <section className="py-32">
      <div className="max-w-6xl mx-auto px-6 space-y-28">
        {pillars.map((pillar) =>
          pillar.featured ? (
            <div key={pillar.title} className="bg-slate-50 py-24 px-14 rounded-xl">
              <div className="pl-8 border-l-4 border-[var(--sgf-green-500)]">
                <Pillar {...pillar} />
              </div>
            </div>
          ) : (
            <Pillar key={pillar.title} {...pillar} />
          )
        )}
      </div>
    </section>
  );
}
