import { motion } from "framer-motion";
import { Building2, Plane, Scale, Ship, Truck } from "lucide-react";

const tiles = [
  { label: "Building", icon: Building2, className: "col-span-2 row-span-2 bg-ink text-white" },
  { label: "Freight", icon: Truck, className: "bg-gold text-ink" },
  { label: "Auction", icon: Scale, className: "bg-white text-ink" },
  { label: "Shipping", icon: Ship, className: "bg-navy text-white" },
  { label: "Aviation", icon: Plane, className: "bg-amberSoft text-ink" }
];

export default function ImageCluster() {
  return (
    <div className="relative mx-auto max-w-xl">
      <div className="absolute inset-8 rounded-full bg-gold/20 blur-3xl" aria-hidden="true" />
      <div className="relative overflow-hidden rounded-lg border border-white bg-ink p-3 shadow-soft">
        <img
          src="/sril-source.png"
          alt="Original SRIL Integrated Services graphic showing construction, freight, auctioning, shipping, aviation, services, and values."
          className="aspect-[4/5] w-full rounded-md object-cover object-top opacity-95"
          loading="eager"
        />
      </div>
      <div className="absolute -right-2 top-8 grid w-44 grid-cols-2 gap-2 sm:-right-6 sm:w-56">
        {tiles.map((tile, index) => {
          const Icon = tile.icon;
          return (
            <motion.div
              key={tile.label}
              className={`clip-hex grid aspect-square place-items-center border-4 border-white p-4 text-center shadow-soft ${tile.className}`}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.18 + index * 0.06, duration: 0.35 }}
            >
              <div>
                <Icon className="mx-auto h-6 w-6" aria-hidden="true" />
                <p className="mt-2 text-xs font-black uppercase">{tile.label}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
