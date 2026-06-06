import { Building2 } from "lucide-react";
import { company } from "../data/content.js";

export default function Logo({ compact = false }) {
  return (
    <div className="flex items-center gap-3" aria-label={company.fullName}>
      <div className="relative grid h-11 w-11 place-items-center rounded-lg bg-ink text-white shadow-glow">
        <Building2 className="h-6 w-6" aria-hidden="true" />
        <span className="absolute -right-1 -top-1 h-3 w-3 rounded-sm bg-gold" />
      </div>
      {!compact && (
        <div className="leading-none">
          <p className="text-2xl font-black tracking-normal text-ink">{company.name}</p>
          <p className="mt-1 text-xs font-bold uppercase tracking-[0.2em] text-gold">
            {company.descriptor}
          </p>
        </div>
      )}
    </div>
  );
}
