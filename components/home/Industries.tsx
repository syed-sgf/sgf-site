export default function Industries() {
  return (
    <section className="py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-xl font-semibold mb-12">
          Industries We Serve
        </h2>

        <div className="grid md:grid-cols-3 gap-12">
          <Industry label="Construction" />
          <Industry label="Restaurants & Food" />
          <Industry label="Healthcare" />
          <Industry label="Oil & Gas Services" />
          <Industry label="Transportation" />
          <Industry label="Professional Services" />
        </div>
      </div>
    </section>
  );
}

function Industry({ label }: { label: string }) {
  return (
    <div>
      <div className="aspect-[16/10] bg-slate-200 rounded-md mb-4" />
      <p className="font-semibold">{label}</p>
    </div>
  );
}
