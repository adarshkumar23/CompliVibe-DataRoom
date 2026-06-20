import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.62, ease: [0.22, 1, 0.36, 1] },
  },
};

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.04 },
  },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.96, y: 12 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

export const blurReveal: Variants = {
  hidden: { opacity: 0, filter: "blur(10px)", y: 18 },
  visible: {
    opacity: 1,
    filter: "blur(0px)",
    y: 0,
    transition: { duration: 0.72, ease: [0.22, 1, 0.36, 1] },
  },
};

const sectionReveal: Variants = {
  // Keep section content visible if IntersectionObserver is delayed or absent.
  hidden: { opacity: 1, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

interface MotionSectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  reveal?: "immediate" | "viewport";
}

export function MotionSection({
  children,
  className = "",
  id,
  reveal = "viewport",
}: MotionSectionProps) {
  const isImmediate = reveal === "immediate";

  return (
    <motion.section
      id={id}
      className={className}
      variants={sectionReveal}
      initial={isImmediate ? false : "hidden"}
      animate={isImmediate ? "visible" : undefined}
      whileInView={isImmediate ? undefined : "visible"}
      // A low threshold and early bottom margin avoid resize-only reveal bugs.
      viewport={{
        once: true,
        amount: 0.08,
        margin: "0px 0px -80px 0px",
      }}
    >
      {children}
    </motion.section>
  );
}
