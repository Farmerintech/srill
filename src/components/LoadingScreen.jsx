import { motion } from "framer-motion";
import Logo from "./Logo.jsx";

export default function LoadingScreen() {
  return (
    <motion.div
      className="fixed inset-0 z-[90] grid place-items-center bg-pearl"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, pointerEvents: "none" }}
      transition={{ duration: 0.28 }}
      role="status"
      aria-live="polite"
    >
      <motion.div
        className="flex flex-col items-center gap-5"
        initial={{ scale: 0.96, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.35 }}
      >
        <Logo />
        <div className="h-1.5 w-44 overflow-hidden rounded-full bg-slate-200">
          <motion.div
            className="h-full rounded-full bg-gold"
            initial={{ x: "-100%" }}
            animate={{ x: "100%" }}
            transition={{ duration: 0.9, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
        <span className="sr-only">Loading SRIL Integrated Services</span>
      </motion.div>
    </motion.div>
  );
}
