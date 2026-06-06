import { motion } from "framer-motion";
import ContactCTA from "../components/ContactCTA.jsx";
import PageTransition from "../components/PageTransition.jsx";
import ServicesGrid from "../components/ServicesGrid.jsx";
import ValuesBar from "../components/ValuesBar.jsx";
import { services } from "../data/content.js";

export default function ServicesPage() {
  return (
    <PageTransition>
      <section className="bg-white py-16 sm:py-20">
        <div className="section-shell">
          <p className="eyebrow">Service Portfolio</p>
          <h1 className="mt-4 max-w-4xl text-4xl font-black tracking-normal text-ink sm:text-5xl">
            The complete SRIL service offer extracted from the graphic.
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">
            Each service below preserves the meaning of the original content while presenting it in a cleaner web format.
          </p>
        </div>
      </section>
      <ServicesGrid />
      <section className="bg-white py-20">
        <div className="section-shell grid gap-5 md:grid-cols-2">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.article
                key={service.title}
                className="rounded-lg border border-slate-200 bg-pearl p-6"
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.38, delay: index * 0.05 }}
              >
                <Icon className="h-8 w-8 text-gold" aria-hidden="true" />
                <h2 className="mt-5 text-2xl font-black text-ink">{service.shortTitle}</h2>
                <p className="mt-3 text-base leading-7 text-slate-600">{service.description}</p>
              </motion.article>
            );
          })}
        </div>
      </section>
      <ValuesBar />
      <ContactCTA />
    </PageTransition>
  );
}
