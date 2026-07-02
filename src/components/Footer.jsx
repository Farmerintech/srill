import { company, navigation, values } from "../data/content.js";
import Logo from "./Logo.jsx";
import { NavLink } from "react-router-dom";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
} from "lucide-react";
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
       <div className="mt-12 border-t border-slate-200 pt-10">
  <div className="grid gap-8 lg:grid-cols-2">

    {/* Contact */}

    <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
      <h2 className="text-lg font-black text-ink">
        Contact Information
      </h2>

      <div className="mt-6 space-y-5">

        <div className="flex items-start gap-4">
          <div className="rounded-lg bg-gold/10 p-3">
            <Phone className="h-5 w-5 text-gold" />
          </div>

          <div>
            <p className="font-semibold text-ink">
              Phone
            </p>

            <a
              href="tel:08161205620"
              className="text-slate-600 hover:text-gold"
            >
              +234 816 120 5620
            </a>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <div className="rounded-lg bg-gold/10 p-3">
            <Mail className="h-5 w-5 text-gold" />
          </div>

          <div>
            <p className="font-semibold text-ink">
              Email
            </p>

            <a
              href="mailto:info@srilintegratedservices.com"
              className="text-slate-600 hover:text-gold"
            >
              info@srilintegratedservices.com
            </a>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <div className="rounded-lg bg-gold/10 p-3">
            <Clock className="h-5 w-5 text-gold" />
          </div>

          <div>
            <p className="font-semibold text-ink">
              Working Hours
            </p>

            <p className="text-slate-600">
              Monday – Friday
              <br />
              8:00 AM – 5:00 PM
            </p>
          </div>
        </div>

      </div>
    </div>

    {/* Addresses */}

    <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
      <h2 className="text-lg font-black text-ink">
        Our Locations
      </h2>

      <div className="mt-6 space-y-6">

        <div className="flex gap-4">
          <div className="rounded-lg bg-gold/10 p-3 h-fit">
            <MapPin className="h-5 w-5 text-gold" />
          </div>

          <div>
            <p className="font-semibold text-ink">
              Lagos Office
            </p>

            <p className="text-slate-600 leading-7">
              30 Murtala Muhammed International Airport Road,
              Ikeja, Lagos.
            </p>
          </div>
        </div>

        <div className="flex gap-4">
          <div className="rounded-lg bg-gold/10 p-3 h-fit">
            <MapPin className="h-5 w-5 text-gold" />
          </div>

          <div>
            <p className="font-semibold text-ink">
              Abuja Office
            </p>

            <p className="text-slate-600 leading-7">
              Area 1, Old Secretariat,
              By City Lodge,
              Cadastral Street,
              Abuja.
            </p>
          </div>
        </div>

        <div className="flex gap-4">
          <div className="rounded-lg bg-gold/10 p-3 h-fit">
            <MapPin className="h-5 w-5 text-gold" />
          </div>

          <div>
            <p className="font-semibold text-ink">
              Airport Office
            </p>

            <p className="text-slate-600 leading-7">
              Suite 2, Arewa Pavilion,
              Hajj Camp,
              Murtala Muhammed International Airport Road,
              Ikeja, Lagos.
            </p>
          </div>
        </div>

      </div>
    </div>

  </div>

  <div className="mt-10 border-t border-slate-200 pt-6 flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
    <p className="text-sm text-slate-500">
      © {new Date().getFullYear()} {company.fullName}. All rights reserved.
    </p>

    <p className="text-sm text-slate-500">
      Building • Logistics • Trade Excellence
    </p>
  </div>
</div>
     
      </div>
    </footer>
  );
}
