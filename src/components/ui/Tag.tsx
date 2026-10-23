import type { ReactNode } from "react";

type Tone = "neutral" | "accent" | "engineering" | "leadership";

const tones: Record<Tone, string> = {
  neutral: "border-line text-muted",
  accent: "border-accent/40 text-accent-strong",
  engineering: "border-engineering/40 text-engineering",
  leadership: "border-leadership/40 text-leadership",
};

export default function Tag({ tone = "neutral", children }: { tone?: Tone; children: ReactNode }) {
  return (
    <span className={`inline-flex items-center rounded-full border px-2.5 py-0.5 font-mono text-[11px] tracking-wide ${tones[tone]}`}>
      {children}
    </span>
  );
}
