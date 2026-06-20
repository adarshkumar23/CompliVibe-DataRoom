interface LogoProps {
  compact?: boolean;
  inverse?: boolean;
}

export function Logo({ compact = false, inverse = false }: LogoProps) {
  return (
    <a
      href="#top"
      className="group inline-flex items-center gap-3"
      aria-label="CompliVibe data room home"
    >
      <span className="logo-mark" aria-hidden="true">
        CV
      </span>
      {!compact && (
        <span
          className={`text-[1.05rem] font-semibold tracking-[-0.025em] ${
            inverse ? "text-white" : "text-slate-950"
          }`}
        >
          CompliVibe
        </span>
      )}
    </a>
  );
}
