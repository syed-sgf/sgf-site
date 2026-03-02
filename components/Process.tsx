const steps = [
  "Explore financing paths by program or industry",
  "Complete a short pre-qualification",
  "Execute lender-aligned next steps",
];

export default function Process() {
  return (
    <section className="py-20 bg-slate-50 border-t">
      <div className="max-w-7xl mx-auto px-6">
        <h3 className="font-serif text-xl font-semibold">How It Works</h3>

        <ol className="mt-6 space-y-4 text-slate-700">
          {steps.map((step, i) => (
            <li key={i} className="flex gap-4 items-start">
              <span className="font-serif font-semibold text-[var(--sgf-green-500)] text-lg leading-tight">
                {i + 1}.
              </span>
              <span>{step}</span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
