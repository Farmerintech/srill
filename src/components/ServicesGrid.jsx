import { services } from "../data/content.js";
import SectionHeader from "./SectionHeader.jsx";
import ServiceCard from "./ServiceCard.jsx";

export default function ServicesGrid({ compact = false }) {
  const items = compact ? services.slice(0, 4) : services;

  return (
    <section className="bg-pearl py-20 sm:py-24">
      <div className="section-shell">
        <SectionHeader
          eyebrow="Our Services"
          title="Integrated capabilities for national and global growth."
          description="The graphic positions SRIL as a professional partner across construction, auctioning, customs licensed freight forwarding, and import/export operations."
        />
        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {items.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
