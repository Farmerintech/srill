import {
  Award,
  BadgeCheck,
  Building2,
  CheckCircle2,
  FileCheck2,
  Globe2,
  Handshake,
  Plane,
  Scale,
  ShieldCheck,
  Ship,
  Target,
  Truck,
  UsersRound
} from "lucide-react";

export const company = {
  name: "SRIL",
  fullName: "SRIL Integrated Services",
  descriptor: "Integrated Services",
  tagline: "Building. Connecting. Delivering Value.",
  closingLine: "Your Partner in Construction, Logistics and Trade Excellence",
  intro:
    "SRIL Integrated Services is a dynamic and solution-driven company committed to delivering quality and professional services across key sectors that drive national and global growth."
};

export const navigation = [
  { label: "Home", path: "/" },
  { label: "Services", path: "/services" },
  { label: "About", path: "/about" },
  { label: "Contact", path: "/contact" }
];

export const services = [
  {
    title: "Building Constructions & General Contracts",
    shortTitle: "Construction",
    description:
      "We deliver top-quality construction projects and general contracting services with excellence and integrity.",
    icon: Building2,
    imageCue: "Construction projects and active building sites"
  },
  {
    title: "Federal Government Licensed Auctioning",
    shortTitle: "Licensed Auctioning",
    description:
      "Authorized to conduct transparent and compliant auctioning services on behalf of the Federal Government.",
    icon: Scale,
    imageCue: "Auctioning authority and compliance"
  },
  {
    title: "Customs Licensed Freight Forwarding",
    shortTitle: "Freight Forwarding",
    description:
      "Licensed by customs to handle all freight forwarding and logistics with professionalism and efficiency.",
    icon: Truck,
    imageCue: "Container movement and customs logistics"
  },
  {
    title: "Import & Export Services",
    shortTitle: "Import & Export",
    description:
      "We facilitate seamless import and export operations across the globe.",
    icon: Globe2,
    imageCue: "International trade, shipping, and aviation"
  }
];

export const values = [
  { label: "Integrity", icon: ShieldCheck },
  { label: "Professionalism", icon: Award },
  { label: "Reliability", icon: UsersRound },
  { label: "Excellence", icon: Target },
  { label: "Partnership", icon: Handshake }
];

export const proofPoints = [
  {
    label: "Construction",
    value: "Quality projects",
    icon: Building2
  },
  {
    label: "Logistics",
    value: "Professional handling",
    icon: Truck
  },
  {
    label: "Trade",
    value: "Global operations",
    icon: Ship
  },
  {
    label: "Aviation",
    value: "Connected movement",
    icon: Plane
  }
];

export const processSteps = [
  {
    title: "Understand the brief",
    description:
      "SRIL aligns each engagement around the required sector, compliance needs, destination, and delivery expectations.",
    icon: FileCheck2
  },
  {
    title: "Coordinate execution",
    description:
      "Construction, logistics, auctioning, freight, import, and export workstreams are managed with a professional service approach.",
    icon: CheckCircle2
  },
  {
    title: "Deliver value",
    description:
      "Every project is guided by integrity, reliability, excellence, and partnership.",
    icon: BadgeCheck
  }
];

export const assumptions = [
  "No contact information was visible in the provided graphic.",
  "The inquiry form is added as a modern web conversion feature and is not present in the original graphic.",
  "The phrase 'Licensed by customs' is preserved exactly in service copy because the graphic does not specify a particular customs authority."
];
