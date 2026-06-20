import { motion } from "framer-motion";
import type { DataRoomDocument } from "../data/documents";
import { getDocumentUrl } from "../data/documents";
import {
  DocumentCover,
  type DocumentAccent,
} from "./DocumentCover";
import { Icon } from "./Icon";
import { scaleIn } from "./MotionSection";

interface DocumentCardProps {
  document: DataRoomDocument;
  onPreview: (document: DataRoomDocument) => void;
}

function getDocumentAccent(document: DataRoomDocument): DocumentAccent {
  const category = document.category.toLowerCase();

  if (document.type === "XLSX" || category.includes("financial")) {
    return "emerald";
  }
  if (category.includes("legal")) return "violet";
  if (category.includes("traction")) return "cyan-blue";
  if (category.includes("team")) return "indigo";
  if (category.includes("use of funds")) return "blue-cyan";
  return "blue-violet";
}

export function DocumentCard({ document, onPreview }: DocumentCardProps) {
  const url = getDocumentUrl(document);
  const isSpreadsheet = document.type === "XLSX";
  const accent = getDocumentAccent(document);

  return (
    <motion.article
      className="document-card group"
      variants={scaleIn}
      layout
      whileHover={{ y: -7, scale: 1.008 }}
      transition={{ type: "spring", stiffness: 270, damping: 24 }}
    >
      <DocumentCover
        title={document.title}
        fileType={document.type}
        category={document.category}
        accent={accent}
        variant={isSpreadsheet ? "spreadsheet" : "document"}
      />

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
