interface MetricCardProps {
  value: string;
  label: string;
  detail?: string;
  wide?: boolean;
}

export function MetricCard({ value, label, detail, wide }: MetricCardProps) {
  return (
    <motion.div
      className={`metric-card group ${wide ? "sm:col-span-2 lg:col-span-1" : ""}`}
      variants={scaleIn}
      whileHover={{ y: -5, scale: 1.015 }}
      transition={{ type: "spring", stiffness: 300, damping: 24 }}
    >
      <div className="metric-accent" />
      <p className="text-2xl font-semibold tracking-[-0.045em] text-slate-950">
        {value}
      </p>
      <p className="mt-1 text-sm font-medium text-slate-600">{label}</p>
      {detail && (
        <p className="mt-2 text-xs leading-5 text-slate-500">{detail}</p>
      )}
    </motion.div>
  );
}
import { motion } from "framer-motion";
import { scaleIn } from "./MotionSection";
