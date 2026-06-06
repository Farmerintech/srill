import { Menu, X } from "lucide-react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { navigation } from "../data/content.js";
import Logo from "./Logo.jsx";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/[0.88] backdrop-blur-xl">
      <nav className="section-shell flex h-20 items-center justify-between" aria-label="Primary navigation">
        <NavLink to="/" className="rounded-lg" onClick={() => setOpen(false)}>
          <Logo />
        </NavLink>

        <div className="hidden items-center gap-1 md:flex">
          {navigation.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) => `nav-link ${isActive ? "nav-link-active" : ""}`}
            >
              {item.label}
            </NavLink>
          ))}
        </div>

        <NavLink
          to="/contact"
          className="hidden rounded-full bg-gold px-5 py-2.5 text-sm font-black text-ink shadow-glow transition hover:-translate-y-0.5 hover:bg-[#e5aa37] md:inline-flex"
        >
          Start a Request
        </NavLink>

        <button
          type="button"
          className="grid h-11 w-11 place-items-center rounded-lg border border-slate-200 bg-white text-ink md:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open && (
        <div id="mobile-menu" className="border-t border-slate-200 bg-white md:hidden">
          <div className="section-shell flex flex-col gap-2 py-4">
            {navigation.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `rounded-lg px-4 py-3 text-base font-bold ${isActive ? "bg-ink text-white" : "text-slate-700"}`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
