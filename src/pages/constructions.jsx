import ServicePage from "./sectionPage";
import { serviceDetails } from "../data/content";

export default function ConstructionPage() {
  return (
    <ServicePage
      service={serviceDetails.construction}
    />
  );
}