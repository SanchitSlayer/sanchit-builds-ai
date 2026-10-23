import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight, Download } from "lucide-react";
import { decks, featured, projects } from "@/content/work";
import Tag from "@/components/ui/Tag";

function ExternalLink({ href, children, label }: { href: string; children: ReactNode; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      className="inline-flex min-h-11 items-center gap-1 text-sm text-muted transition-colors hover:text-accent-strong"
    >
      {children}
    </a>
  );
}

export default function Work() {
  return (
    <div className="space-y-20">
      <ul className="grid gap-5 lg:grid-cols-2">
        {featured.map((f) => (
          <li key={f.slug} className="flex flex-col rounded-(--radius-card) border border-line bg-surface p-6 sm:p-8">
            <p className="font-mono text-xs tracking-widest text-subtle uppercase">{f.kicker}</p>
            <h3 className="mt-3 text-2xl font-semibold tracking-tight">{f.title}</h3>
            <p className="mt-6 font-mono text-4xl font-medium text-accent-strong">{f.metric.value}</p>
            <p className="text-sm text-muted">{f.metric.label}</p>
            <p className="mt-6 leading-relaxed text-muted">{f.summary}</p>
            <ul className="mt-5 space-y-2 text-sm text-muted">
              {f.highlights.map((h) => (
                <li key={h} className="flex gap-3">
                  <span aria-hidden className="mt-2 size-1 shrink-0 rounded-full bg-accent" />
                  {h}
                </li>
              ))}
            </ul>
            <ul className="mt-6 mb-8 flex flex-wrap gap-1.5">
              {f.stack.map((s) => (
                <li key={s}>
                  <Tag>{s}</Tag>
                </li>
              ))}
            </ul>
            <div className="mt-auto flex flex-wrap items-center gap-x-6 border-t border-line pt-5">
              <Link
                to={`/work/${f.slug}`}
                className="group inline-flex min-h-11 items-center gap-2 text-sm font-medium text-accent-strong"
              >
                Read the case study
                <ArrowRight size={16} aria-hidden className="transition-transform group-hover:translate-x-1" />
              </Link>
              {f.repo && (
                <ExternalLink href={f.repo} label={`${f.title} code on GitHub`}>
                  Code <ArrowUpRight size={14} aria-hidden />
                </ExternalLink>
              )}
            </div>
          </li>
        ))}
      </ul>

      <div>
        <h3 className="mb-4 font-mono text-xs tracking-widest text-subtle uppercase">More projects</h3>
        <ul className="divide-y divide-line border-y border-line">
          {projects.map((p) => (
            <li key={p.title}>
              <a
                href={p.href}
                target="_blank"
                rel="noreferrer"
                className="group grid gap-2 py-5 sm:grid-cols-[7rem_1fr_auto] sm:gap-6"
              >
                <span className="font-mono text-xs text-subtle sm:pt-1">{p.date}</span>
                <span>
                  <span className="flex flex-wrap items-center gap-2">
                    <span className="font-medium text-text transition-colors group-hover:text-accent-strong">{p.title}</span>
                    {p.note && <Tag>{p.note}</Tag>}
                  </span>
                  <span className="mt-1 block max-w-2xl text-sm leading-relaxed text-muted">{p.summary}</span>
                  <span className="mt-2 block font-mono text-[11px] text-subtle">{p.stack.join("  /  ")}</span>
                </span>
                <ArrowUpRight
                  size={18}
                  aria-hidden
                  className="hidden text-subtle transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent-strong sm:block"
                />
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h3 className="mb-4 font-mono text-xs tracking-widest text-subtle uppercase">Decks and teardowns</h3>
        {/* On phones the decks scroll sideways instead of stacking */}
        <ul className="-mx-4 flex snap-x snap-mandatory scroll-px-4 gap-4 overflow-x-auto px-4 pb-2 sm:mx-0 sm:grid sm:grid-cols-2 sm:gap-5 sm:overflow-visible sm:px-0 sm:pb-0 lg:grid-cols-3">
          {decks.map((d) => (
            <li key={d.title} className="flex w-[80%] shrink-0 snap-start flex-col overflow-hidden rounded-(--radius-card) border border-line bg-surface sm:w-auto">
              <img
                src={d.cover}
                alt=""
                width={960}
                height={540}
                loading="lazy"
                decoding="async"
                className="aspect-video w-full border-b border-line object-cover"
              />
              <div className="flex flex-1 flex-col p-5">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-xs text-subtle">{d.kind}</span>
                  {d.badge && <Tag tone="leadership">{d.badge}</Tag>}
                </div>
                <h4 className="mt-2 font-medium">{d.title}</h4>
                <p className="mt-1 text-sm leading-relaxed text-muted">{d.summary}</p>
                <div className="mt-auto flex gap-5 pt-3">
                  <ExternalLink href={d.view} label={`View ${d.title}`}>
                    View <ArrowUpRight size={14} aria-hidden />
                  </ExternalLink>
                  {d.download && (
                    <a
                      href={d.download}
                      download
                      aria-label={`Download ${d.title} (PowerPoint)`}
                      className="inline-flex min-h-11 items-center gap-1 text-sm text-muted transition-colors hover:text-accent-strong"
                    >
                      <Download size={14} aria-hidden /> .pptx
                    </a>
                  )}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
