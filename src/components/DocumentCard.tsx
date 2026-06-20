import { motion } from "framer-motion";
import type { DataRoomDocument } from "../data/documents";
import { getDocumentUrl } from "../data/documents";
import { Icon } from "./Icon";
import { scaleIn } from "./MotionSection";

interface DocumentCardProps {
  document: DataRoomDocument;
  onPreview: (document: DataRoomDocument) => void;
}

export function DocumentCard({ document, onPreview }: DocumentCardProps) {
  const url = getDocumentUrl(document);
  const isSpreadsheet = document.type === "XLSX";

  return (
    <motion.article
      className="document-card group"
      variants={scaleIn}
      layout
      whileHover={{ y: -7, scale: 1.008 }}
      transition={{ type: "spring", stiffness: 270, damping: 24 }}
    >
      <div
        className={`document-visual ${
          isSpreadsheet ? "document-visual-sheet" : "document-visual-pdf"
        }`}
      >
        {isSpreadsheet ? (
          <>
            <div className="spreadsheet-bar" />
            <div className="spreadsheet-grid" />
          </>
        ) : (
          <div className="pdf-page">
            <div className="flex items-center justify-between">
              <span className="text-[0.52rem] font-bold tracking-[0.12em] text-blue-600">
                COMPLIVIBE
              </span>
              <span className="h-5 w-5 rounded-md bg-gradient-to-br from-blue-600 via-cyan-500 to-violet-600" />
            </div>
            <div className="mt-5 h-2 w-3/4 rounded-full bg-slate-800/80" />
            <div className="mt-2 h-1.5 w-1/2 rounded-full bg-blue-200" />
            <div className="mt-5 space-y-2">
              <div className="h-1 rounded-full bg-slate-200" />
              <div className="h-1 w-5/6 rounded-full bg-slate-200" />
              <div className="h-1 w-2/3 rounded-full bg-slate-200" />
            </div>
          </div>
        )}
        <span className="absolute bottom-3 right-3 rounded-full border border-white/80 bg-white/85 px-2.5 py-1 text-[0.6rem] font-semibold text-slate-500 shadow-sm backdrop-blur">
          {document.type}
        </span>
      </div>

      <div className="mt-5 flex items-start justify-between gap-5">
        <div className="file-icon">
          <Icon name="file" className="h-6 w-6" />
        </div>
        <span
          className={`file-badge ${
            isSpreadsheet
              ? "bg-emerald-50 text-emerald-700 ring-emerald-600/10"
              : "bg-blue-50 text-blue-700 ring-blue-600/10"
          }`}
        >
          {document.type}
        </span>
      </div>
      <div className="mt-5 flex-1">
        <p className="inline-flex rounded-full bg-blue-50 px-2.5 py-1 text-[0.62rem] font-semibold uppercase tracking-[0.12em] text-blue-700">
          {document.category}
        </p>
        <h3 className="mt-2 text-lg font-semibold tracking-[-0.025em] text-slate-950">
          {document.title}
        </h3>
        <p className="mt-3 text-sm leading-6 text-slate-600">
          {document.description}
        </p>
      </div>
      <div className="mt-6 grid grid-cols-3 gap-2 border-t border-slate-200/70 pt-5">
        <button
          type="button"
          className="card-action-primary"
          onClick={() => onPreview(document)}
        >
          <Icon name="eye" className="h-4 w-4" />
          Preview
        </button>
        {!isSpreadsheet ? (
          <a
            className="card-action-secondary"
            href={url}
            target="_blank"
            rel="noreferrer"
          >
            Open
            <Icon name="external" className="h-4 w-4" />
          </a>
        ) : (
          <a
            className="card-action-secondary"
            href={url}
            target="_blank"
            rel="noreferrer"
            aria-label={`Open ${document.title}`}
          >
            <Icon name="external" className="h-4 w-4" />
            <span className="sm:hidden lg:inline">Open</span>
          </a>
        )}
        {!isSpreadsheet ? (
          <a
            className="card-action-secondary"
            href={url}
            download
            aria-label={`Download ${document.title}`}
          >
            <Icon name="download" className="h-4 w-4" />
            <span className="sm:hidden lg:inline">Download</span>
          </a>
        ) : (
          <a className="card-action-secondary" href={url} download>
            <Icon name="download" className="h-4 w-4" />
            <span className="sm:hidden lg:inline">Download</span>
          </a>
        )}
      </div>
    </motion.article>
  );
}
