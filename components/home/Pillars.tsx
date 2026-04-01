type PillarProps = {
  title: string;
  description: string;
  items: string[];
};

function Pillar({ title, description, items }: PillarProps) {
  return (
    <div>
      <h2 className="text-3xl font-semibold tracking-tight">{title}</h2>

      <p className="mt-6 text-slate-600 max-w-[52ch]">
        {description}
      </p>

      <ul className="mt-8 space-y-2 text-slate-700 font-medium">
        {items.map((item) => (
          <li key={item}>— {item}</li>
        ))}
      </ul>
    </div>
  );
}

export default function Pillars() {
  return (
    <section className="py-32">
      <div className="max-w-6xl mx-auto px-6 space-y-28">

        {/* Pillar 1 */}
        <Pillar
          title="Business & Working Capital"
          description="Flexible capital solutions designed around cash flow, timing, and operational realities."
          items={[
            "Business Lines of Credit",
            "Term Loans",
            "Accounts Receivable Financing",
            "Equipment Financing",
          ]}
        />

        {/* Anchored Pillar */}
        <div className="bg-slate-50 py-24 px-14 rounded-xl">
          <div className="pl-8 border-l-4 border-emerald-700">
            <Pillar
              title="Commercial & Investment Real Estate"
              description="Acquisition, refinance, construction, and DSCR-based financing for income-producing properties."
              items={[
                "Commercial Real Estate Loans",
                "DSCR Rental Loans",
                "Fix & Flip Financing",
              ]}
            />
          </div>
        </div>

        {/* Pillar 3 */}
        <Pillar
          title="SBA & Structured Financing"
          description="Long-term capital for qualified owner-operated businesses requiring disciplined underwriting."
          items={[
            "SBA 7(a)",
            "SBA 504",
            "Franchise Financing",
            "Startup Financing",
          ]}
        />

      </div>
    </section>
  );
}
