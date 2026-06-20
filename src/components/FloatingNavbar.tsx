import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Icon } from "./Icon";
import { Logo } from "./Logo";

const links = [
  { label: "Snapshot", href: "#snapshot", id: "snapshot" },
  { label: "Documents", href: "#documents", id: "documents" },
  { label: "Diligence", href: "#diligence", id: "diligence" },
];

export function FloatingNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("top");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-28% 0px -58% 0px", threshold: [0.05, 0.2, 0.5] },
    );

    links.forEach(({ id }) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

    return () => {
      window.removeEventListener("scroll", onScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <div className="fixed inset-x-0 top-0 z-40 px-3 pt-3 sm:px-5 sm:pt-4">
      <motion.header
        className="floating-nav mx-auto"
        animate={{
          maxWidth: scrolled ? 930 : 1080,
          paddingTop: scrolled ? 9 : 12,
          paddingBottom: scrolled ? 9 : 12,
        }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      >
        <Logo />

        <nav
          className="hidden items-center rounded-full bg-slate-100/60 p-1 md:flex"
          aria-label="Primary navigation"
        >
          {links.map((link) => (
            <a
              key={link.id}
              href={link.href}
              className={`relative rounded-full px-4 py-2 text-xs font-semibold transition-colors ${
                active === link.id
                  ? "text-blue-700"
                  : "text-slate-500 hover:text-slate-900"
              }`}
            >
              {active === link.id && (
                <motion.span
                  layoutId="active-nav"
                  className="absolute inset-0 rounded-full border border-blue-100 bg-white shadow-sm"
                  transition={{ type: "spring", stiffness: 420, damping: 34 }}
                />
              )}
              <span className="relative">{link.label}</span>
            </a>
          ))}
        </nav>

        <a
          href="mailto:adarsh@complivibe.in"
          className="button-secondary hidden !min-h-10 !rounded-full !px-4 !text-xs md:inline-flex"
        >
          Contact founder
          <Icon name="mail" className="h-4 w-4" />
        </a>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white/80 text-slate-700 shadow-sm md:hidden"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((value) => !value)}
        >
          <Icon name={menuOpen ? "close" : "menu"} className="h-5 w-5" />
        </button>
      </motion.header>

      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            className="mobile-nav mx-auto mt-2 md:hidden"
            aria-label="Mobile navigation"
            initial={{ opacity: 0, y: -10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.98 }}
            transition={{ duration: 0.24 }}
          >
            {links.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`rounded-xl px-4 py-3 text-sm font-medium ${
                  active === link.id
                    ? "bg-blue-50 text-blue-700"
                    : "text-slate-600"
                }`}
              >
                {link.label}
              </a>
            ))}
            <a
              href="mailto:adarsh@complivibe.in"
              className="mt-1 inline-flex items-center justify-center gap-2 rounded-xl bg-slate-950 px-4 py-3 text-sm font-semibold text-white"
            >
              Contact founder
              <Icon name="mail" className="h-4 w-4" />
            </a>
          </motion.nav>
        )}
      </AnimatePresence>
    </div>
  );
}
