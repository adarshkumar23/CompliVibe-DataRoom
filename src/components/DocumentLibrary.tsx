import { AnimatePresence, motion } from "framer-motion";
import { useMemo, useState } from "react";
import type { DataRoomDocument } from "../data/documents";
import { documentGroups } from "../data/documents";
import { DocumentCard } from "./DocumentCard";
import { DocumentPreviewModal } from "./DocumentPreviewModal";
import {
  fadeUp,
  MotionSection,
  staggerContainer,
} from "./MotionSection";

const filters = [
  { label: "All", categories: [] },
  { label: "Overview", categories: ["Company Overview"] },
  { label: "Investment", categories: ["Investment Materials"] },
  { label: "Traction", categories: ["Traction & Proof"] },
  { label: "Financials", categories: ["Financials", "Use of Funds"] },
  { label: "Team", categories: ["Team"] },
  {
    label: "Legal",
    categories: ["Legal / Advisory", "Founder IP Assignment"],
  },
];

export function DocumentLibrary() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [previewDocument, setPreviewDocument] =
    useState<DataRoomDocument | null>(null);

  const visibleGroups = useMemo(() => {
    const selected = filters.find((filter) => filter.label === activeFilter);
    if (!selected || selected.categories.length === 0) return documentGroups;
    return documentGroups.filter((group) =>
      selected.categories.includes(group.category),
    );
  }, [activeFilter]);

  return (
    <>
      <MotionSection
        id="documents"
        className="section-shell section-shell-documents scroll-mt-28"
        reveal="immediate"
      >
        <div className="section-heading">
          <div>
            <p className="section-kicker">Diligence materials</p>
            <h2 className="section-title">Document library</h2>
          </div>
          <p className="section-copy">
            Preview PDFs without leaving the room. Excel financials remain
            available through secure direct download.
          </p>
        </div>

        <div
          className="tabs-scroll mt-9 flex gap-2 overflow-x-auto pb-2"
          role="tablist"
          aria-label="Filter documents"
        >
          {filters.map((filter) => (
            <button
              key={filter.label}
              type="button"
              role="tab"
              aria-selected={activeFilter === filter.label}
              className={`filter-tab ${
                activeFilter === filter.label ? "filter-tab-active" : ""
              }`}
              onClick={() => setActiveFilter(filter.label)}
            >
              {activeFilter === filter.label && (
                <motion.span
                  layoutId="active-filter"
                  className="absolute inset-0 rounded-full bg-slate-950"
                  transition={{ type: "spring", stiffness: 420, damping: 34 }}
                />
              )}
              <span className="relative">{filter.label}</span>
            </button>
          ))}
        </div>

        <AnimatePresence mode="popLayout">
          <motion.div
            key={activeFilter}
            className="mt-10 space-y-14"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0, y: 8 }}
          >
            {visibleGroups.map((group) => (
              <motion.div key={group.category} variants={fadeUp} layout>
                <div className="mb-5 flex items-end justify-between border-b border-slate-200/80 pb-4">
                  <div>
                    <p className="text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-blue-600">
                      {group.eyebrow}
                    </p>
                    <h3 className="mt-1 text-xl font-semibold tracking-[-0.03em] text-slate-950">
                      {group.category}
                    </h3>
                  </div>
                  <span className="text-xs font-medium text-slate-400">
                    {group.documents.length}{" "}
                    {group.documents.length === 1 ? "document" : "documents"}
                  </span>
                </div>
                <motion.div
                  className="grid gap-4 md:grid-cols-2"
                  variants={staggerContainer}
                >
                  {group.documents.map((document) => (
                    <DocumentCard
                      key={document.filename}
                      document={document}
                      onPreview={setPreviewDocument}
                    />
                  ))}
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </MotionSection>

      <DocumentPreviewModal
        document={previewDocument}
        onClose={() => setPreviewDocument(null)}
      />
    </>
  );
}
