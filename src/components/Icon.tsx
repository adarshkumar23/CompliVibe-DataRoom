interface IconProps {
  name:
    | "arrow"
    | "download"
    | "file"
    | "lock"
    | "mail"
    | "external"
    | "check"
    | "clock"
    | "plus"
    | "shield"
    | "menu"
    | "close"
    | "eye";
  className?: string;
}

export function Icon({ name, className = "h-5 w-5" }: IconProps) {
  const paths = {
    arrow: <path d="m9 18 6-6-6-6M3 12h12" />,
    download: (
      <>
        <path d="M12 3v12m0 0 4-4m-4 4-4-4" />
        <path d="M5 19h14" />
      </>
    ),
    file: (
      <>
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z" />
        <path d="M14 2v6h6M8 13h8M8 17h6" />
      </>
    ),
    lock: (
      <>
        <rect width="16" height="12" x="4" y="10" rx="2" />
        <path d="M8 10V7a4 4 0 0 1 8 0v3" />
      </>
    ),
    mail: (
      <>
        <rect width="20" height="16" x="2" y="4" rx="2" />
        <path d="m22 7-8.97 5.7a1.9 1.9 0 0 1-2.06 0L2 7" />
      </>
    ),
    external: (
      <>
        <path d="M15 3h6v6M10 14 21 3" />
        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      </>
    ),
    check: <path d="m5 12 4 4L19 6" />,
    clock: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" />
      </>
    ),
    plus: <path d="M12 5v14M5 12h14" />,
    shield: (
      <>
        <path d="M20 13c0 5-3.5 7.5-8 9-4.5-1.5-8-4-8-9V5l8-3 8 3Z" />
        <path d="m9 12 2 2 4-4" />
      </>
    ),
    menu: (
      <>
        <path d="M4 7h16M4 12h16M4 17h16" />
      </>
    ),
    close: <path d="m6 6 12 12M18 6 6 18" />,
    eye: (
      <>
        <path d="M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6S2 12 2 12Z" />
        <circle cx="12" cy="12" r="2.5" />
      </>
    ),
  };

  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {paths[name]}
    </svg>
  );
}
