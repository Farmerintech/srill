import { motion } from "framer-motion";
import AssumptionsNote from "../components/AssumptionsNote.jsx";
import PageTransition from "../components/PageTransition.jsx";
import SectionHeader from "../components/SectionHeader.jsx";
import ValuesBar from "../components/ValuesBar.jsx";
import { company, values } from "../data/content.js";

export default function AboutPage() {
  return (
    <PageTransition>
      <section className="bg-white py-16 sm:py-20">
        <div className="section-shell grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <SectionHeader
            eyebrow="Who We Are"
            title={company.fullName}
            description={company.intro}
          />
          <div className="panel overflow-hidden p-3">
            <img
              src="/sril-source.png"
              alt="SRIL Integrated Services original source graphic."
              className="max-h-[640px] w-full rounded-md object-contain"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      <section className="bg-pearl py-20 sm:py-24">
        <div className="section-shell">
          <SectionHeader
            align="center"
            eyebrow="Operating Principles"
            title="Values stated directly in the graphic."
            description="These values were extracted from the lower value strip and are used as the foundation of the site’s trust language."
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.article
                  key={value.label}
                  className="panel p-6 text-center"
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.35, delay: index * 0.04 }}
                >
                  <div className="mx-auto grid h-14 w-14 place-items-center rounded-lg bg-amberSoft text-gold">
                    <Icon className="h-7 w-7" aria-hidden="true" />
                  </div>
                  <h2 className="mt-5 text-lg font-black text-ink">{value.label}</h2>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>
      <ValuesBar />
      {/* <AssumptionsNote /> */}
    </PageTransition>
  );
}
