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

interface MotionSectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

export function MotionSection({
  children,
  className = "",
  id,
}: MotionSectionProps) {
  return (
    <motion.section
      id={id}
      className={className}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.14 }}
    >
      {children}
    </motion.section>
  );
}
