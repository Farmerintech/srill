import { serviceDetails } from "../data/content";
import ServicePage from "./sectionPage";

export default function AuctionPage() {
  return (
    <ServicePage
      service={serviceDetails.auction}
    />
  );
}