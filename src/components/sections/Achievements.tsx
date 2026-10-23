import { achievements, type Achievement } from "@/content/achievements";

const valueColor: Record<Achievement["kind"], string> = {
  leadership: "text-leadership",
  competition: "text-accent-strong",
  academic: "text-engineering",
};

const kindLabel: Record<Achievement["kind"], string> = {
  leadership: "Leadership",
  competition: "Competition",
  academic: "Academic",
};

export default function Achievements() {
  return (
    <ul className="grid gap-px overflow-hidden rounded-(--radius-card) border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
      {achievements.map((a) => (
        <li key={a.title} className="flex flex-col bg-surface p-6">
          <div className="flex items-baseline justify-between gap-4">
            <p className={`font-mono text-3xl font-medium ${valueColor[a.kind]}`}>{a.value}</p>
            <p className="font-mono text-[11px] text-subtle uppercase">{kindLabel[a.kind]}</p>
          </div>
          <h3 className="mt-4 font-medium">{a.title}</h3>
          <p className="mt-1 text-sm leading-relaxed text-muted">{a.detail}</p>
          <p className="mt-auto pt-4 font-mono text-xs text-subtle">{a.period}</p>
        </li>
      ))}
    </ul>
  );
}
