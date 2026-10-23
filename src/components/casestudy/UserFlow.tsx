import { ArrowRight, CornerDownRight } from "lucide-react";
import type { FlowStep } from "@/content/caseStudies";

const actorTone: Record<FlowStep["actor"], string> = {
  User: "text-accent-strong border-accent/40",
  Customer: "text-accent-strong border-accent/40",
  System: "text-engineering border-engineering/40",
  Admin: "text-leadership border-leadership/40",
  Reviewer: "text-leadership border-leadership/40",
};

// Steps read left to right, top to bottom. An arrow sits between steps in the same row
// (2 per row on tablets, 4 on desktops), never after the last step of a row.
export default function UserFlow({ steps }: { steps: FlowStep[] }) {
  return (
    <ol className="grid gap-x-8 gap-y-4 sm:grid-cols-2 lg:grid-cols-4">
      {steps.map((s, i) => (
        <li key={s.label} className="relative flex flex-col">
          <div className="flex flex-1 flex-col rounded-xl border border-line bg-surface p-4">
            <div className="flex items-center justify-between gap-2">
              <span className="font-mono text-xs text-subtle">{String(i + 1).padStart(2, "0")}</span>
              <span className={`rounded-full border px-2 py-0.5 font-mono text-[10px] uppercase ${actorTone[s.actor]}`}>{s.actor}</span>
            </div>
            <p className="mt-3 font-medium text-text">{s.label}</p>
            {s.detail && <p className="mt-1 text-sm leading-snug text-muted">{s.detail}</p>}
          </div>
          {s.branch && (
            <p className="mt-2 flex gap-2 rounded-xl border border-dashed border-leadership/40 px-3 py-2 text-xs leading-snug text-muted">
              <CornerDownRight size={14} aria-hidden className="mt-0.5 shrink-0 text-leadership" />
              {s.branch}
            </p>
          )}
          {i < steps.length - 1 && (
            <ArrowRight
              size={16}
              aria-hidden
              className={`absolute top-8 -right-6 hidden text-subtle ${i % 2 === 0 ? "sm:block" : "sm:hidden"} ${
                i % 4 === 3 ? "lg:hidden" : "lg:block"
              }`}
            />
          )}
        </li>
      ))}
    </ol>
  );
}
