import { motion } from "framer-motion";
import { Icon } from "./Icon";
import {
  fadeUp,
  MotionSection,
  staggerContainer,
} from "./MotionSection";

const checklist = [
  "Company overview",
  "Investment memo",
  "Investor FAQ",
  "Startup thesis",
  "Traction",
  "Team bios",
  "Use of funds",
  "Cap table",
  "Financial model",
  "Advisor agreement",
];

export function DiligenceChecklist() {
  return (
    <MotionSection
      id="diligence"
      className="section-shell scroll-mt-28"
    >
      <div className="section-heading">
        <div>
          <p className="section-kicker">Coverage</p>
          <h2 className="section-title">Diligence checklist</h2>
        </div>
        <p className="section-copy">
          Current investor materials available in this data room for review.
        </p>
      </div>

      <motion.div
        className="mt-10 grid gap-3 sm:grid-cols-2"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
      >
        {checklist.map((item, index) => (
          <motion.div
            className="checklist-card"
            key={item}
            variants={fadeUp}
            whileHover={{ y: -3 }}
          >
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-blue-50 to-emerald-50 text-blue-600 ring-1 ring-blue-100">
              <Icon name="check" className="h-4 w-4" />
            </span>
            <div className="min-w-0 flex-1">
              <p className="text-sm font-medium text-slate-800">{item}</p>
              <p className="mt-1 text-xs text-slate-400">
                Data room item {String(index + 1).padStart(2, "0")}
              </p>
            </div>
            <span className="status-chip status-available">
              <Icon name="check" className="h-3.5 w-3.5" />
              Available
            </span>
          </motion.div>
        ))}
      </motion.div>
    </MotionSection>
  );
}
