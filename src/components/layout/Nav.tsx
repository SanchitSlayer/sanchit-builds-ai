import { useEffect, useState, type ReactNode } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { sections, site } from "@/content/site";
import Container from "@/components/ui/Container";
import { useActiveSection } from "./useActiveSection";

const sectionIds = sections.map((s) => s.id);
const noSectionIds: string[] = [];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();
  const onHome = pathname === "/";
  const active = useActiveSection(onHome ? sectionIds : noSectionIds);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  // On the home page, section links are plain anchors (native smooth scroll).
  // On case-study pages they are router links back to that section of the home page.
  const sectionLink = (id: string, className: string, children: ReactNode) =>
    onHome ? (
      <a href={`#${id}`} onClick={() => setOpen(false)} aria-current={active === id ? "true" : undefined} className={className}>
        {children}
      </a>
    ) : (
      <Link to={`/#${id}`} onClick={() => setOpen(false)} className={className}>
        {children}
      </Link>
    );

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors ${
        scrolled || open ? "border-b border-line bg-bg/85 backdrop-blur-md" : "border-b border-transparent"
      }`}
    >
      <Container className="flex h-16 items-center justify-between">
        <Link to="/" className="-ml-2 inline-flex min-h-11 items-center px-2 font-mono text-sm font-semibold tracking-tight" aria-label={`${site.name}, home`}>
          {site.initials}
          <span className="text-accent">.</span>
        </Link>

        <nav aria-label="Main" className="hidden md:block">
          <ul className="flex items-center gap-1">
            {sections.map((s) => (
              <li key={s.id}>
                {sectionLink(
                  s.id,
                  `rounded-full px-3 py-2 text-sm transition-colors ${active === s.id ? "text-text" : "text-muted hover:text-text"}`,
                  s.label,
                )}
              </li>
            ))}
            <li className="ml-2">
              <a
                href={site.resumeUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-9 items-center rounded-full border border-line-strong px-4 text-sm transition-colors hover:border-accent hover:text-accent-strong"
              >
                Resume
              </a>
            </li>
          </ul>
        </nav>

        <button
          type="button"
          className="-mr-2 inline-flex size-11 items-center justify-center rounded-full text-muted hover:text-text md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </Container>

      {open && (
        <nav id="mobile-menu" aria-label="Main" className="border-t border-line md:hidden">
          <Container>
            <ul className="flex flex-col py-3">
              {sections.map((s) => (
                <li key={s.id}>
                  {sectionLink(s.id, "flex min-h-11 items-center text-base text-muted hover:text-text", s.label)}
                </li>
              ))}
              <li>
                <a
                  href={site.resumeUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex min-h-11 items-center text-base text-accent"
                >
                  Resume
                </a>
              </li>
            </ul>
          </Container>
        </nav>
      )}
    </header>
  );
}
