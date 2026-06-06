import { motion } from "framer-motion";
import { processSteps } from "../data/content.js";
import SectionHeader from "./SectionHeader.jsx";

export default function ProcessSection() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="section-shell">
        <SectionHeader
          align="center"
          eyebrow="How SRIL Works"
          title="A clear service rhythm from brief to delivery."
          description="The source graphic emphasizes professionalism, quality, and value. This workflow translates those ideas into a practical web experience."
        />
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {processSteps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.article
                key={step.title}
                className="panel p-6"
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.4, delay: index * 0.07 }}
              >
                <div className="flex items-center justify-between">
                  <div className="grid h-12 w-12 place-items-center rounded-lg bg-ink text-white">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <span className="text-sm font-black text-gold">Step {index + 1}</span>
                </div>
                <h3 className="mt-7 text-xl font-black text-ink">{step.title}</h3>
                <p className="mt-4 text-base leading-7 text-slate-600">{step.description}</p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
