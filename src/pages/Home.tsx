import Hero from "@/components/hero/Hero";
import ProofStrip from "@/components/hero/ProofStrip";
import Section from "@/components/ui/Section";

// Section shells for Phase 1. Each placeholder lists what Phase 2 fills in.
const shells = [
  {
    id: "about",
    title: "About",
    intro: "Chemistry taught me systems. Entrepreneurship taught me users. Now I build AI products that connect the two.",
    planned: ["Three short paragraphs", "Photo", "Currently card"],
  },
  {
    id: "agents",
    title: "AI Agents",
    intro: "Agents and automations I have built, each shown as input, agent steps and output.",
    planned: ["B2B intent analyzer", "Email campaign automation", "Agentic RAG for healthcare", "Flow diagram per card"],
  },
  {
    id: "work",
    title: "Work",
    intro: "Case studies that show the thinking: problem, user flows, wireframes, architecture and trade-offs.",
    planned: ["Digital Wallet & eKYC (full)", "OneMetric eKYC OCR (full)", "4 short case studies and decks"],
  },
  {
    id: "experience",
    title: "Experience",
    intro: "Where I have shipped, and what changed because of it.",
    planned: ["OneMetric", "Gumbo Tech", "Inventive AI (YC S23)", "Inter IIT 14.0"],
  },
  {
    id: "achievements",
    title: "Achievements",
    intro: "Leadership roles and competitions.",
    planned: ["Placement Cell OC", "Product Club OC", "E-Cell Assistant Head", "Pitch Rush 3rd", "IIT Ropar AI minor"],
  },
  {
    id: "contact",
    title: "Contact",
    intro: "Hiring for AI engineering, product or consulting roles? I would like to hear about it.",
    planned: ["Working contact form", "Email, LinkedIn, GitHub"],
  },
];

export default function Home() {
  return (
    <>
      <Hero />
      <ProofStrip />
      {shells.map((s, i) => (
        <Section key={s.id} id={s.id} index={String(i + 1).padStart(2, "0")} title={s.title} intro={s.intro}>
          <div className="rounded-(--radius-card) border border-dashed border-line-strong p-6">
            <p className="mb-3 font-mono text-xs tracking-widest text-subtle uppercase">Phase 2 fills in</p>
            <ul className="flex flex-wrap gap-2">
              {s.planned.map((p) => (
                <li key={p} className="rounded-full border border-line bg-surface px-3 py-1.5 text-sm text-muted">
                  {p}
                </li>
              ))}
            </ul>
          </div>
        </Section>
      ))}
    </>
  );
}
