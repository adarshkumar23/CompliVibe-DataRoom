import { AnimatePresence, motion } from "framer-motion";
import { useEffect } from "react";
import type { DataRoomDocument } from "../data/documents";
import { getDocumentUrl } from "../data/documents";
import { Icon } from "./Icon";

interface DocumentPreviewModalProps {
  document: DataRoomDocument | null;
  onClose: () => void;
}

export function DocumentPreviewModal({
  document: selectedDocument,
  onClose,
}: DocumentPreviewModalProps) {
  useEffect(() => {
    if (!selectedDocument) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [selectedDocument, onClose]);

  const url = selectedDocument ? getDocumentUrl(selectedDocument) : "";
  const previewUrl = selectedDocument?.type === "PDF"
    ? `${url}#toolbar=1&navpanes=0`
    : url;

  return (
    <AnimatePresence>
      {selectedDocument && (
        <motion.div
          className="fixed inset-0 z-[70] flex items-center justify-center bg-slate-900/30 p-0 backdrop-blur-md sm:p-5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onMouseDown={(event) => {
            if (event.currentTarget === event.target) onClose();
          }}
        >
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="preview-title"
            className="flex h-dvh w-full flex-col overflow-hidden bg-[#f8fafc] shadow-2xl sm:h-[92vh] sm:max-w-6xl sm:rounded-[1.75rem] sm:border sm:border-white/90"
            initial={{ opacity: 0, y: 28, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.98 }}
            transition={{ duration: 0.36, ease: [0.22, 1, 0.36, 1] }}
          >
            <header className="flex shrink-0 items-center justify-between gap-4 border-b border-slate-200/80 bg-white/80 px-4 py-3 backdrop-blur-xl sm:px-6 sm:py-4">
              <div className="min-w-0">
                <p className="text-[0.64rem] font-semibold uppercase tracking-[0.14em] text-blue-600">
                  {selectedDocument.category}
                </p>
                <h2
                  id="preview-title"
                  className="truncate text-base font-semibold tracking-[-0.02em] text-slate-950 sm:text-lg"
                >
                  {selectedDocument.title}
                </h2>
              </div>
              <div className="flex shrink-0 items-center gap-2">
                <a className="modal-action" href={url} download>
                  <Icon name="download" className="h-4 w-4" />
                  <span className="hidden sm:inline">Download</span>
                </a>
                <button
                  type="button"
                  className="modal-close"
                  onClick={onClose}
                  aria-label="Close document preview"
                  autoFocus
                >
                  <Icon name="close" className="h-5 w-5" />
                </button>
              </div>
            </header>

            <div className="min-h-0 flex-1 bg-slate-100/70 p-0 sm:p-3">
              {selectedDocument.type === "PDF" ? (
                <iframe
                  className="h-full w-full border-0 bg-white sm:rounded-xl"
                  src={previewUrl}
                  title={`${selectedDocument.title} PDF preview`}
                />
              ) : (
                <div className="flex h-full items-center justify-center p-5">
                  <div className="w-full max-w-lg rounded-3xl border border-white bg-white/80 p-8 text-center shadow-glass backdrop-blur-xl">
                    <div className="spreadsheet-preview mx-auto max-w-xs">
                      <div className="spreadsheet-bar" />
                      <div className="spreadsheet-grid" />
                    </div>
                    <p className="mt-7 text-xs font-semibold uppercase tracking-[0.14em] text-emerald-600">
                      {selectedDocument.filename}
                    </p>
                    <h3 className="mt-2 text-xl font-semibold text-slate-950">
                      Spreadsheet preview is available by download
                    </h3>
                    <p className="mt-3 text-sm leading-6 text-slate-500">
                      Financial model and cap table are provided as Excel files.
                    </p>
                    <a
                      className="button-primary mt-6"
                      href={url}
                      download
                    >
                      <Icon name="download" className="h-4 w-4" />
                      Download spreadsheet
                    </a>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
