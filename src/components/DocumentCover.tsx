import { motion } from "framer-motion";
import type { DocumentType } from "../data/documents";

export type DocumentAccent =
  | "blue-violet"
  | "violet"
  | "cyan-blue"
  | "emerald"
  | "indigo"
  | "blue-cyan"
  | "sky"
  | "teal";

interface DocumentCoverProps {
  title: string;
  fileType: DocumentType;
  category: string;
  accent: DocumentAccent;
  variant: "document" | "spreadsheet" | "docx";
}

export function DocumentCover({
  title,
  fileType,
  category,
  accent,
  variant,
}: DocumentCoverProps) {
  const isSpreadsheet = variant === "spreadsheet";
  const isWordDoc = variant === "docx";

  return (
    <div
      className={`document-cover-stage document-cover-accent-${accent}`}
      aria-hidden="true"
    >
      <div className="document-cover-halo" />
      <motion.div
        className={`document-cover ${
          isSpreadsheet
            ? "document-cover-spreadsheet"
            : isWordDoc
              ? "document-cover-docx"
              : "document-cover-pdf"
        }`}
        whileHover={{ y: -3, scale: 1.02 }}
        transition={{ type: "spring", stiffness: 260, damping: 24 }}
      >
        <span className="document-cover-fold" />

        <div className="document-cover-header">
          <span className="document-cover-brand">COMPLIVIBE</span>
          <span className="document-cover-mark">CV</span>
        </div>

        {isSpreadsheet ? (
          <div className="document-sheet">
            <div className="document-sheet-bar">
              <span />
              <span />
              <span />
            </div>
            <div className="document-sheet-grid">
              {Array.from({ length: 20 }, (_, index) => (
                <span key={index} />
              ))}
            </div>
          </div>
        ) : isWordDoc ? (
          <div className="document-doc">
            <span className="document-doc-rule" />
            <div className="document-doc-body">
              <span className="document-doc-heading" />
              {Array.from({ length: 6 }, (_, index) => (
                <span key={index} />
              ))}
            </div>
          </div>
        ) : (
          <div className="document-cover-content">
            <span className="document-cover-category">{category}</span>
            <p className="document-cover-title">{title}</p>
            <div className="document-cover-lines">
              <span />
              <span />
              <span />
              <span />
            </div>
          </div>
        )}

        <div className="document-cover-footer">
          <span className="document-cover-rule" />
          <span className="document-cover-type">{fileType}</span>
        </div>
      </motion.div>
    </div>
  );
}
