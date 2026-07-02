import { motion } from "framer-motion";
import {
  CheckCircle2,
  ShieldCheck,
  Clock3,
  ArrowRight,
} from "lucide-react";

import ContactCTA from "../components/ContactCTA";
import PageTransition from "../components/PageTransition";

export default function ServicePage({ service }) {
  return (
    <PageTransition>
      {/* HERO */}
      <section className=" text-black py-5 md:py-10">
        <div className="section-shell grid lg:grid-cols-2 gap-12 items-center">
          <div>
            {/* <p className="text-gold uppercase tracking-[4px] mb-3">
              Our Services
            </p> */}

            <h1 className="md:text-3xl text-[24px] text-5xl font-black leading-tight">
              {service.hero.title}
            </h1>

            <p className="mt-6 text-lg text-gray-500 leading-8">
              {service.hero.subtitle}
            </p>
          </div>

          <img
            src={service.image}
            alt={service.hero.title}
            className="rounded-xl shadow-2xl h-[420px] w-full object-cover"
          />
        </div>
      </section>

      {/* ABOUT */}

      <section className="py-20 bg-white">
        <div className="section-shell max-w-4xl">
          <h2 className="text-4xl font-black text-ink">
            About this Service
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            {service.overview}
          </p>
        </div>
      </section>

      {/* FEATURES */}

      <section className="py-20 bg-pearl">
        <div className="section-shell">
          <h2 className="text-4xl font-black mb-12">
            What We Offer
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.features.map((item) => (
              <div
                key={item}
                className="bg-white flex justify-start gap-4 rounded-xl p-6 border border-slate-400"
              >
                <CheckCircle2 className="text-gold mb-4" />

                <h3 className="font-semibold text-lg">
                  {item}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BENEFITS */}

      <section className="py-20 bg-white">
        <div className="section-shell">
          <h2 className="text-4xl font-black mb-12">
            Why Choose SRIL
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.benefits.map((item) => (
              <div
                key={item}
                className="rounded-xl border border-slate-400 p-6 flex justify-start gap-4 "
              >
                <ShieldCheck className="text-gold mb-4" />

                <p className="font-medium">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}

      <section className="py-20 bg-pearl">
        <div className="section-shell">
          <h2 className="text-4xl font-black mb-12">
            Our Process
          </h2>

          <div className="grid md:grid-cols-5 gap-6">
            {service.process.map((step, index) => (
              <motion.div
                key={step}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 rounded-full bg-gold text-white bg-yellow-600 flex items-center justify-center text-2xl font-bold mx-auto">
                  {index + 1}
                </div>

                <p className="mt-5 font-semibold">
                  {step}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <ContactCTA />
    </PageTransition>
  );
}