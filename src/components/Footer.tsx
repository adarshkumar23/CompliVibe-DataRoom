import { Icon } from "./Icon";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-slate-200/70 bg-slate-950 text-slate-300">
      <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8 lg:px-10">
        <div className="grid gap-10 md:grid-cols-[1.2fr_1fr_1fr]">
          <div>
            <Logo inverse />
            <p className="mt-5 max-w-sm text-sm leading-6 text-slate-400">
              CompliVibe Private Limited
              <br />
              Confidential investor data room
            </p>
          </div>
          <div>
            <p className="footer-label">Confidentiality</p>
            <p className="mt-4 flex items-center gap-2 text-sm text-slate-300">
              <Icon name="lock" className="h-4 w-4 text-cyan-400" />
              Do not forward without permission
            </p>
          </div>
          <div>
            <p className="footer-label">Links</p>
            <div className="mt-4 flex flex-col items-start gap-2 text-sm">
              <a className="footer-link" href="https://complivibe.in">
                Website: complivibe.in
              </a>
              <a className="footer-link" href="https://app.complivibe.in">
                Product: app.complivibe.in
              </a>
              <a className="footer-link" href="mailto:adarsh@complivibe.in">
                Contact: adarsh@complivibe.in
              </a>
            </div>
          </div>
        </div>
        <div className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 CompliVibe</p>
          <p>AI governance · Evidence · Trust infrastructure</p>
        </div>
      </div>
    </footer>
  );
}
