import AssumptionsNote from "../components/AssumptionsNote.jsx";
import ContactCTA from "../components/ContactCTA.jsx";
import Hero from "../components/Hero.jsx";
import PageTransition from "../components/PageTransition.jsx";
import ProcessSection from "../components/ProcessSection.jsx";
import ServicesGrid from "../components/ServicesGrid.jsx";
import ValuesBar from "../components/ValuesBar.jsx";

export default function HomePage() {
  return (
    <PageTransition>
      <Hero />
      <ValuesBar />
      <ServicesGrid compact />
      <ProcessSection />
      <ContactCTA />
      <AssumptionsNote />
    </PageTransition>
  );
}
