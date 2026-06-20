import { MotionConfig, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { DiligenceChecklist } from "./components/DiligenceChecklist";
import { DocumentLibrary } from "./components/DocumentLibrary";
import { FloatingNavbar } from "./components/FloatingNavbar";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Icon } from "./components/Icon";
import { Logo } from "./components/Logo";
import {
  fadeUp,
  MotionSection,
  staggerContainer,
} from "./components/MotionSection";

const snapshots = [
  {
    label: "Category",
    value: "AI-native governance and compliance infrastructure",
  },
  { label: "Wedge", value: "EU AI Act + India DPDP readiness" },
  {
    label: "Platform vision",
    value:
      "AI governance, evidence, monitoring, risk, review, and trust infrastructure",
  },
  { label: "Current status", value: "Live product + investor data room" },
  {
    label: "Proof layer",
    value: "Paying customers, beta trials, waitlist, traction docs",
  },
  {
    label: "Next milestone",
    value: "Convert pilots, harden v4.0, strengthen evidence automation",
  },
];

function AccessGate({ onEnter }: { onEnter: () => void }) {
  return (
    <div
      className="fixed inset-0 z-50 flex min-h-dvh items-center justify-center overflow-y-auto bg-[#f7f9fc] px-5 py-10"
      role="dialog"
      aria-modal="true"
      aria-labelledby="access-title"
    >
      <div className="ambient-orb ambient-orb-one" />
      <div className="ambient-orb ambient-orb-two" />
      <div className="relative w-full max-w-lg overflow-hidden rounded-[2rem] border border-white/90 bg-white/70 p-7 shadow-[0_30px_100px_-35px_rgba(30,64,175,0.35)] backdrop-blur-2xl sm:p-10">
        <div className="flex items-center justify-between">
          <Logo />
          <div className="flex h-10 w-10 items-center justify-center rounded-full border border-blue-100 bg-blue-50/80 text-blue-600">
            <Icon name="lock" className="h-[18px] w-[18px]" />
          </div>
        </div>
        <div className="mt-12">
          <p className="section-kicker">Private materials</p>
          <h1
            id="access-title"
            className="mt-3 text-balance text-3xl font-semibold tracking-[-0.045em] text-slate-950 sm:text-[2.5rem] sm:leading-[1.08]"
          >
            CompliVibe Investor Data Room
          </h1>
          <p className="mt-4 text-base leading-7 text-slate-600">
            Confidential access for angel / pre-seed diligence
          </p>
        </div>
        <button
          className="button-primary mt-8 w-full"
          type="button"
          onClick={onEnter}
        >
          Enter Data Room
          <Icon name="arrow" className="h-4 w-4" />
        </button>
        <div className="mt-6 flex items-start gap-3 rounded-2xl border border-slate-200/80 bg-white/55 p-4">
          <Icon
            name="shield"
            className="mt-0.5 h-4 w-4 shrink-0 text-blue-600"
          />
          <p className="text-xs leading-5 text-slate-500">
            This data room contains confidential business, financial, legal,
            and product materials. Please do not distribute without written
            permission.
          </p>
        </div>
        <p className="mt-5 text-center text-[0.68rem] leading-4 text-slate-400">
          By entering, you acknowledge the confidential nature of these
          materials.
        </p>
      </div>
    </div>
  );
}

function InvestorSnapshot() {
  return (
    <MotionSection id="snapshot" className="section-shell scroll-mt-28">
      <div className="section-heading">
        <div>
          <p className="section-kicker">At a glance</p>
          <h2 className="section-title">Investor snapshot</h2>
        </div>
        <p className="section-copy">
          The current company position, product wedge, and near-term execution
          priority.
        </p>
      </div>
      <motion.div
        className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
      >
        {snapshots.map((snapshot, index) => (
          <motion.article
            className="snapshot-card group"
            key={snapshot.label}
            variants={fadeUp}
            whileHover={{ y: -6, scale: 1.01 }}
            transition={{ type: "spring", stiffness: 280, damping: 24 }}
          >
            <div className="snapshot-glow" />
            <div className="flex items-center justify-between">
              <span className="text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-slate-400">
                {snapshot.label}
              </span>
              <span className="text-xs font-medium text-slate-300">
                0{index + 1}
              </span>
            </div>
            <p className="mt-8 text-base font-medium leading-7 tracking-[-0.015em] text-slate-800">
              {snapshot.value}
            </p>
          </motion.article>
        ))}
      </motion.div>
    </MotionSection>
  );
}

function FounderNote() {
  return (
    <MotionSection className="section-shell">
      <motion.article
        className="relative overflow-hidden rounded-[2rem] border border-blue-100/80 bg-gradient-to-br from-blue-600 via-blue-600 to-violet-600 px-6 py-10 text-white shadow-lift sm:px-10 sm:py-12 lg:px-14"
        whileHover={{ y: -4 }}
        transition={{ type: "spring", stiffness: 250, damping: 25 }}
      >
        <div className="absolute -right-20 -top-28 h-72 w-72 rounded-full border border-white/15 bg-white/10 blur-sm" />
        <div className="absolute -bottom-36 left-1/3 h-64 w-64 rounded-full bg-cyan-300/15 blur-3xl" />
        <div className="relative grid gap-10 lg:grid-cols-[0.35fr_1fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-blue-100">
              From the founder
            </p>
            <div className="mt-5 h-px w-12 bg-cyan-300" />
          </div>
          <div>
            <blockquote className="text-balance text-xl font-medium leading-8 tracking-[-0.025em] text-white sm:text-2xl sm:leading-9">
              “CompliVibe is being built as AI trust infrastructure for
              companies that need to govern, evidence, monitor, and prove AI
              readiness before enterprise buyers, regulated customers,
              investors, and partners ask hard questions. Compliance is our
              wedge; the larger vision is AI governance, observability,
              evidence, and trust workflows in one system.”
            </blockquote>
            <div className="mt-8 border-t border-white/20 pt-6">
              <p className="signature-name text-2xl text-white">
                Adarsh Sharma
              </p>
              <p className="mt-1 text-sm font-medium text-blue-100">
                Founder &amp; CEO, CompliVibe
              </p>
              <a
                className="mt-5 inline-flex min-h-11 items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-4 text-sm font-semibold text-white backdrop-blur transition hover:-translate-y-0.5 hover:bg-white/20"
                href="mailto:adarsh@complivibe.in"
              >
                <Icon name="mail" className="h-4 w-4" />
                Contact Adarsh
              </a>
            </div>
          </div>
        </div>
      </motion.article>
    </MotionSection>
  );
}

export default function App() {
  const [hasAccess, setHasAccess] = useState(
    () => sessionStorage.getItem("complivibe-data-room-access") === "granted",
  );

  useEffect(() => {
    document.body.style.overflow = hasAccess ? "" : "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [hasAccess]);

  const enterDataRoom = () => {
    sessionStorage.setItem("complivibe-data-room-access", "granted");
    setHasAccess(true);
  };

  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen overflow-hidden bg-[#f8fafc] text-ink">
        {!hasAccess && <AccessGate onEnter={enterDataRoom} />}
        <div aria-hidden={!hasAccess}>
          <FloatingNavbar />
          <div className="page-ambient page-ambient-one" />
          <div className="page-ambient page-ambient-two" />
          <Hero />
          <main>
            <InvestorSnapshot />
            <DocumentLibrary />
            <DiligenceChecklist />
            <FounderNote />
          </main>
          <Footer />
        </div>
      </div>
    </MotionConfig>
  );
}
