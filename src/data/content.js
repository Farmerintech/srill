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
    imageCue: "Construction projects and active building sites",
     to:'/construction'
  },
  {
    title: "Federal Government Licensed Auctioning",
    shortTitle: "Licensed Auctioning",
    description:
      "Authorized to conduct transparent and compliant auctioning services on behalf of the Federal Government.",
    icon: Scale,
    imageCue: "Auctioning authority and compliance",
     to:'/auction'
  },
  {
    title: "Customs Licensed Freight Forwarding, Logistics/Import & Export Services",
    shortTitle: "Freight Forwarding",
    description:
      "Licensed by customs to handle all freight forwarding, logistics, import and export operations across the globe with professionalism and efficiency.",
    icon: Truck,
    imageCue: "Container movement and customs logistics",
    to:'/logistics'
  },
  // {
  //   title: "Import & Export Services",
  //   shortTitle: "Import & Export",
  //   description:
  //     "We facilitate seamless import and export operations across the globe.",
  //   icon: Globe2,
  //   imageCue: "International trade, shipping, and aviation"
  // }
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


export const serviceDetails = {
  construction: {
    hero: {
      title: "Building Construction & General Contracts",
      subtitle:
        "Delivering quality construction projects with professionalism, integrity and excellence.",
    },

    overview:
      "SRIL Integrated Services provides professional building construction and general contracting services for residential, commercial and public sector projects. We combine experienced professionals, quality materials and efficient project management to deliver durable and reliable infrastructure.",

    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd",

    features: [
      "Residential Construction",
      "Commercial Buildings",
      "Civil Engineering Works",
      "Renovation & Remodeling",
      "General Contracting",
      "Project Supervision",
      "Procurement Services",
      "Facility Maintenance",
    ],

    benefits: [
      "Experienced Construction Professionals",
      "High Quality Standards",
      "Timely Project Delivery",
      "Competitive Pricing",
      "Safety Compliance",
      "Reliable Project Management",
    ],

    process: [
      "Consultation",
      "Planning & Design",
      "Project Execution",
      "Inspection & Quality Assurance",
      "Project Delivery",
    ],
  },

  auction: {
    hero: {
      title: "Federal Government Licensed Auctioning",
      subtitle:
        "Professional auction management with transparency and regulatory compliance.",
    },

    overview:
      "SRIL Integrated Services is authorized to conduct Federal Government licensed auctioning exercises with complete transparency and professionalism. We ensure every auction follows approved regulatory procedures while maximizing value for clients.",

    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f",

    features: [
      "Government Asset Auctions",
      "Public Auctions",
      "Asset Valuation",
      "Auction Administration",
      "Bid Management",
      "Compliance Documentation",
      "Auction Consultancy",
    ],

    benefits: [
      "Government Licensed",
      "Transparent Procedures",
      "Professional Administration",
      "Regulatory Compliance",
      "Efficient Documentation",
      "Trusted Service",
    ],

    process: [
      "Asset Evaluation",
      "Auction Planning",
      "Registration",
      "Bidding",
      "Award",
      "Documentation",
    ],
  },

  logistics: {
    hero: {
      title:
        "Customs Licensed Freight Forwarding, Logistics, Import & Export Services",

      subtitle:
        "Reliable global logistics solutions for businesses and individuals.",
    },

    overview:
      "SRIL Integrated Services provides customs licensed freight forwarding, logistics, import and export solutions across local and international markets. We handle documentation, customs clearance, transportation and delivery with professionalism and efficiency.",

    image:
      "https://images.unsplash.com/photo-1578575437130-527eed3abbec",

    features: [
      "Air Freight",
      "Sea Freight",
      "Road Transport",
      "Import Documentation",
      "Export Documentation",
      "Customs Clearance",
      "Door-to-Door Delivery",
      "Warehousing",
      "Cargo Consolidation",
      "Supply Chain Logistics",
    ],

    benefits: [
      "Licensed Customs Operations",
      "Fast Clearance",
      "Global Shipping Network",
      "Secure Cargo Handling",
      "Reliable Documentation",
      "Competitive Pricing",
    ],

    process: [
      "Booking",
      "Documentation",
      "Customs Clearance",
      "Transportation",
      "Final Delivery",
    ],
  },
};