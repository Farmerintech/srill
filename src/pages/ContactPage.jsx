import ContactForm from "../components/ContactForm.jsx";
import PageTransition from "../components/PageTransition.jsx";
import SectionHeader from "../components/SectionHeader.jsx";
import { company, services } from "../data/content.js";

export default function ContactPage() {
  return (
    <PageTransition>
      <section className="bg-white py-16 sm:py-20">
        <div className="section-shell grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div>
            <SectionHeader
              eyebrow="Contact"
              title="Request SRIL support across construction, logistics, and trade."
              description="The source graphic does not include contact details, so this page provides a ready-to-connect inquiry interface for production integration."
            />
            <div className="mt-8 rounded-lg border border-slate-200 bg-pearl p-6">
              <h2 className="text-lg font-black text-ink">{company.tagline}</h2>
              <div className="mt-5 grid gap-3">
                {services.map((service) => (
                  <div key={service.title} className="flex items-center gap-3 text-sm font-semibold text-slate-700">
                    <span className="h-2 w-2 rounded-full bg-gold" aria-hidden="true" />
                    {service.title}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <ContactForm />
        </div>
      </section>
    </PageTransition>
  );
}
