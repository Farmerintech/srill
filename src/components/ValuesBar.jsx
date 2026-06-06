import { values } from "../data/content.js";

export default function ValuesBar() {
  return (
    <section className="bg-white py-6 text-black" aria-label="Company values">
      <div className="section-shell">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {values.map((value) => {
            const Icon = value.icon;
            return (
              <div key={value.label} className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/[0.04] p-4">
                <Icon className="h-6 w-6 shrink-0 text-gold" aria-hidden="true" />
                <p className="text-sm font-black uppercase tracking-normal">{value.label}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
