import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { company } from "../data/content.js";

export default function ContactCTA() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="section-shell">
        <div className="overflow-hidden rounded-lg bg-ink p-8 text-white shadow-soft sm:p-10 lg:p-12">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="eyebrow">Partner with SRIL</p>
              <h2 className="mt-4 max-w-3xl text-3xl font-black tracking-normal sm:text-4xl">
                {company.closingLine}
              </h2>
              <div className="gold-divider mt-6 max-w-xl" />
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-yellow-600 px-6 py-3.5 text-sm font-black text-ink shadow-glow transition hover:-translate-y-0.5 hover:bg-[#e5aa37]"
            >
              Start a Request
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
