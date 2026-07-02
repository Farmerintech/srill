
import { serviceDetails } from "../data/content";
import ServicePage from "./sectionPage";

export default function LogisticsPage() {
  return (
    <ServicePage
      service={serviceDetails.logistics}
    />
  );
}