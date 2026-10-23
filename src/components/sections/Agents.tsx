import { ArrowUpRight } from "lucide-react";
import { agents } from "@/content/agents";
import Tag from "@/components/ui/Tag";

export default function Agents() {
  return (
    <ul className="grid gap-5 md:grid-cols-2">
      {agents.map((a) => (
        <li key={a.title} className="flex flex-col rounded-(--radius-card) border border-line bg-surface p-6">
          <div className="flex flex-wrap items-center gap-2">
            <Tag tone={a.status === "In production" ? "accent" : "engineering"}>{a.status}</Tag>
            <span className="text-xs text-subtle">{a.context}</span>
          </div>
          <h3 className="mt-4 text-xl font-semibold tracking-tight">{a.title}</h3>
          <p className="mt-1 font-mono text-sm text-accent-strong">{a.outcome}</p>

          <ol aria-label={`${a.title} pipeline`} className="relative mt-6 space-y-3 pl-7">
            <span aria-hidden className="absolute top-2 bottom-2 left-[7px] w-px bg-line-strong" />
            {a.steps.map((step, i) => {
              const edge = i === 0 ? "In" : i === a.steps.length - 1 ? "Out" : null;
              return (
                <li key={step} className="relative text-sm text-muted">
                  <span
                    aria-hidden
                    className={`absolute top-1.5 -left-7 size-[15px] rounded-full border-2 ${
                      edge ? "border-accent bg-bg" : "border-line-strong bg-surface-2"
                    }`}
                  />
                  {edge && <span className="mr-2 font-mono text-[11px] text-accent uppercase">{edge}</span>}
                  <span className={edge ? "text-text" : undefined}>{step}</span>
                </li>
              );
            })}
          </ol>

          <div className="mt-auto flex flex-wrap items-end justify-between gap-4 pt-6">
            <ul className="flex flex-wrap gap-1.5">
              {a.stack.map((s) => (
                <li key={s}>
                  <Tag>{s}</Tag>
                </li>
              ))}
            </ul>
            {a.href && (
              <a
                href={a.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-11 items-center gap-1 text-sm text-muted hover:text-accent-strong"
              >
                Code <ArrowUpRight size={14} aria-hidden />
                <span className="sr-only">for {a.title} on GitHub</span>
              </a>
            )}
          </div>
        </li>
      ))}
    </ul>
  );
}
