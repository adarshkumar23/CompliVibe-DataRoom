import { motion } from "framer-motion";
import { Icon } from "./Icon";
import { MetricCard } from "./MetricCard";
import { blurReveal, fadeUp, staggerContainer } from "./MotionSection";

export function Hero() {
  return (
    <section
      id="top"
      className="relative mx-auto max-w-7xl px-5 pb-16 pt-40 sm:px-8 sm:pb-20 sm:pt-44 lg:px-10 lg:pb-28 lg:pt-48"
    >
      <motion.div
        className="hero-glow hero-glow-one"
        animate={{ x: [0, 24, 0], y: [0, -18, 0], scale: [1, 1.08, 1] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="hero-glow hero-glow-two"
        animate={{ x: [0, -18, 0], y: [0, 22, 0], scale: [1, 1.06, 1] }}
        transition={{ duration: 17, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="floating-file floating-file-left hidden xl:block"
        animate={{ y: [0, -9, 0], rotate: [-5, -3, -5] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        aria-hidden="true"
      >
        <div className="floating-file-page">
          <span className="floating-file-label">Investment Memo</span>
          <span className="floating-file-line w-4/5" />
          <span className="floating-file-line w-3/5" />
          <span className="floating-file-line w-2/3" />
        </div>
      </motion.div>
      <motion.div
        className="floating-file floating-file-right hidden xl:block"
        animate={{ y: [0, 11, 0], rotate: [5, 3, 5] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        aria-hidden="true"
      >
        <div className="floating-file-page">
          <span className="floating-file-label">Financial Model</span>
          <div className="mini-grid mt-4" />
        </div>
      </motion.div>

      <motion.div
        className="relative mx-auto max-w-5xl text-center"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
          <motion.div className="eyebrow-badge" variants={fadeUp}>
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-500 shadow-[0_0_0_4px_rgba(6,182,212,0.12)]" />
            Confidential Investor Data Room
          </motion.div>
          <motion.h1
            className="mt-7 text-balance text-[2.8rem] font-semibold leading-[0.99] tracking-[-0.065em] text-slate-950 sm:text-6xl lg:text-[5.2rem]"
            variants={blurReveal}
          >
            AI Trust Infrastructure
            <span className="gradient-text block pb-2">for the AI economy</span>
          </motion.h1>
          <motion.p
            className="mx-auto mt-6 max-w-3xl text-pretty text-base leading-7 text-slate-600 sm:text-lg sm:leading-8"
            variants={fadeUp}
          >
            CompliVibe helps AI-first companies govern, evidence, monitor, and
            prove readiness across AI governance, compliance, risk, and buyer
            trust workflows.
          </motion.p>
          <motion.div
            className="mt-9 flex flex-col justify-center gap-3 sm:flex-row"
            variants={fadeUp}
          >
            <motion.a
              className="button-primary"
              href="/documents/CompliVibe_Investment_Document.pdf"
              target="_blank"
              rel="noreferrer"
              whileHover={{ y: -3, scale: 1.015 }}
              whileTap={{ scale: 0.98 }}
            >
              View investment memo
              <Icon name="external" className="h-4 w-4" />
            </motion.a>
            <motion.a
              className="button-secondary"
              href="#documents"
              whileHover={{ y: -3, scale: 1.015 }}
              whileTap={{ scale: 0.98 }}
            >
              Open full document room
              <Icon name="arrow" className="h-4 w-4" />
            </motion.a>
            <a
              className="button-quiet sm:hidden"
              href="mailto:adarsh@complivibe.in"
            >
              Contact founder
            </a>
          </motion.div>
      </motion.div>

        <motion.div
          className="relative mt-14 grid grid-cols-2 gap-3 sm:mt-20 sm:grid-cols-3 lg:grid-cols-6"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <MetricCard value="3" label="Paying customers" />
          <MetricCard value="5" label="Beta trials" />
          <MetricCard value="13" label="Waitlist accounts" />
          <MetricCard value="$150K" label="Angel / pre-seed round" />
          <MetricCard value="$1.5M" label="Post-money" />
          <MetricCard
            value="Live"
            label="Product"
            detail="complivibe.in · app.complivibe.in"
            wide
          />
        </motion.div>
    </section>
  );
}
