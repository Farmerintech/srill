import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function ServiceCard({ service, index }) {
  const Icon = service.icon;

  return (
    <motion.article
      className="group panel flex h-full flex-col overflow-hidden p-6 transition hover:-translate-y-1 hover:shadow-glow"
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.42, delay: index * 0.06 }}
    >
      <div className="flex items-start justify-between gap-5">
        <div className="grid h-14 w-14 place-items-center rounded-lg bg-amberSoft text-gold">
          <Icon className="h-7 w-7" aria-hidden="true" />
        </div>
        <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-black text-slate-600">
          0{index + 1}
        </span>
      </div>
      <h3 className="mt-7 text-xl font-black leading-7 text-ink">{service.title}</h3>
      <p className="mt-4 grow text-base leading-7 text-slate-600">{service.description}</p>
      <div className="mt-7 flex items-center justify-between border-t border-slate-200 pt-5">
        <p className="text-sm font-bold text-slate-500">{service.imageCue}</p>
        <ArrowUpRight className="h-5 w-5 text-gold transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
      </div>
    </motion.article>
  );
}
