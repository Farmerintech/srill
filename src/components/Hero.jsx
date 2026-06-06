import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import { company, proofPoints } from "../data/content.js";
import ImageCluster from "./ImageCluster.jsx";

export default function Hero() {
  return (
    <section className="hero-grid-bg overflow-hidden bg-white">
      <div className="section-shell grid min-h-[calc(100vh-5rem)] items-center gap-12 py-14 lg:grid-cols-[1.02fr_0.98fr] lg:py-20">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
        >
          <p className="eyebrow">{company.descriptor}</p>
          <h1 className="mt-5 max-w-4xl text-5xl font-black tracking-normal text-ink sm:text-6xl lg:text-7xl">
            {company.name}
          </h1>
          <p className="mt-4 text-2xl font-extrabold text-gold sm:text-3xl">
            {company.fullName.replace(`${company.name} `, "")}
          </p>
          <p className="mt-6 max-w-2xl text-xl font-semibold leading-8 text-slate-700">
            {company.tagline}
          </p>
          <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
            {company.intro}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              to="/services"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-ink px-6 py-3.5 text-sm font-black text-white shadow-soft transition hover:-translate-y-0.5 hover:bg-navy"
            >
              Explore Services
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-3.5 text-sm font-black text-ink transition hover:-translate-y-0.5 hover:border-gold hover:bg-amberSoft"
            >
              Start a Request
            </Link>
          </div>

          <div className="mt-10 grid gap-3 sm:grid-cols-2">
            {proofPoints.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.label} className="flex items-center gap-3 rounded-lg border border-slate-200 bg-white/[0.85] p-4 shadow-sm">
                  <div className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-amberSoft text-gold">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-sm font-black text-ink">{item.label}</p>
                    <p className="text-sm text-slate-600">{item.value}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.65, ease: "easeOut", delay: 0.08 }}
          className="relative"
        >
          <ImageCluster />
          <div className="panel absolute -bottom-5 left-4 right-4 hidden items-center gap-3 p-4 sm:flex lg:left-10 lg:right-auto lg:w-80">
            <CheckCircle2 className="h-6 w-6 shrink-0 text-gold" aria-hidden="true" />
            <p className="text-sm font-bold leading-6 text-slate-700">
              Construction, logistics, and trade services unified under one professional partner.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
