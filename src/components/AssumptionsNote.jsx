import { Info } from "lucide-react";
import { assumptions } from "../data/content.js";

export default function AssumptionsNote() {
  return (
    <section className="bg-pearl py-12">
      <div className="section-shell">
        <div className="rounded-lg border border-gold/30 bg-amberSoft p-6">
          <div className="flex flex-col gap-4 sm:flex-row">
            <Info className="h-6 w-6 shrink-0 text-gold" aria-hidden="true" />
            <div>
              <h2 className="text-lg font-black text-ink">Assumptions from the provided graphic</h2>
              <ul className="mt-3 space-y-2 text-sm leading-6 text-slate-700">
                {assumptions.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
