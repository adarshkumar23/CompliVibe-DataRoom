import { motion } from "framer-motion";
import type { DataRoomDocument } from "../data/documents";
import { getDocumentUrl } from "../data/documents";
import { DocumentCover } from "./DocumentCover";
import { Icon } from "./Icon";
import { fadeUp } from "./MotionSection";

interface FeaturedDocumentProps {
  document: DataRoomDocument;
  meta: string[];
  onPreview: (document: DataRoomDocument) => void;
}

export function FeaturedDocument({
  document,
  meta,
  onPreview,
}: FeaturedDocumentProps) {
  const url = getDocumentUrl(document);

  return (
    <motion.article className="featured-document group" variants={fadeUp} layout>
      <div className="featured-document-cover">
        <DocumentCover
          title={document.title}
          fileType={document.type}
          category={document.category}
          accent="blue-violet"
          variant="document"
        />
      </div>

      <div className="flex min-w-0 flex-1 flex-col justify-center">
        <p className="featured-document-eyebrow">
          <span className="featured-document-dot" />
          Start here
        </p>
        <h3 className="mt-3 text-2xl font-semibold tracking-[-0.03em] text-slate-950 sm:text-[1.75rem]">
          {document.title}
        </h3>
        <p className="mt-3 max-w-3xl text-[0.95rem] leading-7 text-slate-600">
          {document.description}
        </p>

        <div className="mt-5 flex flex-wrap items-center gap-2">
          {meta.map((item) => (
            <span key={item} className="featured-document-meta">
              {item}
            </span>
          ))}
        </div>

        <div className="mt-7 flex flex-wrap items-center gap-2.5">
          <button
            type="button"
            className="button-primary"
            onClick={() => onPreview(document)}
          >
            <Icon name="eye" className="h-4 w-4" />
            Preview deck
          </button>
          <a
            className="button-secondary"
            href={url}
            target="_blank"
            rel="noreferrer"
          >
            Open
            <Icon name="external" className="h-4 w-4" />
          </a>
          <a className="button-secondary" href={url} download>
            <Icon name="download" className="h-4 w-4" />
            Download
          </a>
        </div>
      </div>
    </motion.article>
  );
}
