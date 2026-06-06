import { company, navigation, values } from "../data/content.js";
import Logo from "./Logo.jsx";
import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="section-shell py-10">
        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr_1fr]">
          <div>
            <Logo />
            <p className="mt-5 max-w-md text-sm leading-7 text-slate-600">{company.intro}</p>
          </div>
          <div>
            <h2 className="text-sm font-black uppercase tracking-[0.16em] text-ink">Navigation</h2>
            <div className="mt-4 grid gap-2">
              {navigation.map((item) => (
                <NavLink key={item.path} to={item.path} className="text-sm font-semibold text-slate-600 hover:text-gold">
                  {item.label}
                </NavLink>
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-sm font-black uppercase tracking-[0.16em] text-ink">Values</h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {values.map((value) => (
                <span key={value.label} className="rounded-full bg-amberSoft px-3 py-1.5 text-xs font-black text-ink">
                  {value.label}
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-10 border-t border-slate-200 pt-6 text-sm text-slate-500">
          Content extracted from the provided SRIL Integrated Services graphic.
        </div>
      </div>
    </footer>
  );
}
