import type { ReactNode } from "react";
import { Link, useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ArrowLeft, ArrowRight, ArrowUpRight, Lock } from "lucide-react";
import { caseStudies, findCaseStudy, type Image } from "@/content/caseStudies";
import Container from "@/components/ui/Container";
import UserFlow from "@/components/casestudy/UserFlow";
import WireframePhone from "@/components/casestudy/WireframePhone";
import ArchDiagram from "@/components/casestudy/ArchDiagram";
import DecisionTable from "@/components/casestudy/DecisionTable";
import NotFound from "./NotFound";

// The design-process steps, in reading order. Also drives the sticky table of contents.
const steps = [
  { id: "problem", label: "Problem" },
  { id: "users", label: "Users & constraints" },
  { id: "flow", label: "User flow" },
  { id: "wireframes", label: "Wireframes" },
  { id: "architecture", label: "Architecture" },
  { id: "decisions", label: "Decisions" },
  { id: "outcome", label: "Outcome" },
  { id: "next", label: "What's next" },
];

function Step({ id, children }: { id: string; children: ReactNode }) {
  const index = steps.findIndex((s) => s.id === id);
  return (
    <section id={id} aria-labelledby={`${id}-title`} className="scroll-mt-24 border-t border-line py-12 first:border-t-0 first:pt-0 sm:py-16">
      <p className="font-mono text-xs tracking-widest text-accent uppercase">{String(index + 1).padStart(2, "0")}</p>
      <h2 id={`${id}-title`} className="mt-2 mb-6 text-2xl font-semibold tracking-tight sm:text-3xl">
        {steps[index].label}
      </h2>
      {children}
    </section>
  );
}

function Shot({ shot }: { shot: Image }) {
  return (
    <figure>
      <img
        src={shot.src}
        alt={shot.alt}
        width={shot.width}
        height={shot.height}
        loading="lazy"
        decoding="async"
        className="w-full rounded-xl border border-line bg-white"
      />
      <figcaption className="mt-2 text-sm text-muted">{shot.caption}</figcaption>
    </figure>
  );
}

export default function CaseStudy() {
  const { slug } = useParams();
  const study = findCaseStudy(slug);
  if (!study) return <NotFound />;

  const nextStudy = caseStudies[(caseStudies.indexOf(study) + 1) % caseStudies.length];

  return (
    <article className="pt-24 pb-20 sm:pt-32">
      <Helmet>
        <title>{`${study.title} | Case study | Sanchit Garg`}</title>
        <meta name="description" content={study.summary} />
      </Helmet>

      <Container>
        <Link to="/#work" className="inline-flex min-h-11 items-center gap-2 text-sm text-muted hover:text-accent-strong">
          <ArrowLeft size={16} aria-hidden /> All work
        </Link>

        <header className="mt-6 max-w-3xl">
          <p className="font-mono text-xs tracking-widest text-subtle uppercase">Case study / {study.kicker}</p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight text-balance sm:text-5xl">{study.title}</h1>
          <p className="mt-5 text-lg leading-relaxed text-muted">{study.summary}</p>
        </header>

        <dl className="mt-10 grid gap-6 border-y border-line py-6 sm:grid-cols-3">
          {study.meta.map((m) => (
            <div key={m.label}>
              <dt className="font-mono text-[11px] tracking-widest text-subtle uppercase">{m.label}</dt>
              <dd className="mt-1 text-sm text-text">{m.value}</dd>
            </div>
          ))}
        </dl>

        <ul className="mt-8 grid gap-4 sm:grid-cols-3">
          {study.stats.map((s) => (
            <li key={s.label} className="rounded-(--radius-card) border border-line bg-surface p-5">
              <p className="font-mono text-3xl font-medium text-accent-strong">{s.value}</p>
              <p className="mt-2 text-sm leading-snug text-muted">{s.label}</p>
            </li>
          ))}
        </ul>

        {(study.links.length > 0 || study.confidentiality) && (
          <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2">
            {study.links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-11 items-center gap-1 text-sm text-muted hover:text-accent-strong"
              >
                {l.label} <ArrowUpRight size={14} aria-hidden />
              </a>
            ))}
            {study.confidentiality && (
              <p className="flex items-center gap-2 text-sm text-subtle">
                <Lock size={14} aria-hidden /> {study.confidentiality}
              </p>
            )}
          </div>
        )}

        <div className="mt-16 grid gap-12 lg:grid-cols-[12rem_1fr] lg:gap-16">
          <nav aria-label="Case study sections" className="hidden lg:block">
            <div className="sticky top-24">
              <p className="mb-3 font-mono text-[11px] tracking-widest text-subtle uppercase">Design process</p>
              <ol className="space-y-1 border-l border-line">
                {steps.map((s, i) => (
                  <li key={s.id}>
                    <a href={`#${s.id}`} className="-ml-px block border-l border-transparent py-1.5 pl-4 text-sm text-muted hover:border-accent hover:text-text">
                      <span className="mr-2 font-mono text-[11px] text-subtle">{String(i + 1).padStart(2, "0")}</span>
                      {s.label}
                    </a>
                  </li>
                ))}
              </ol>
            </div>
          </nav>

          <div className="min-w-0">
            <Step id="problem">
              <p className="max-w-3xl text-lg leading-relaxed text-text">{study.problem.statement}</p>
              <ul className="mt-6 space-y-3">
                {study.problem.questions.map((q) => (
                  <li key={q} className="flex gap-3 text-muted">
                    <span aria-hidden className="mt-1 font-mono text-accent">?</span>
                    {q}
                  </li>
                ))}
              </ul>
            </Step>

            <Step id="users">
              <ul className="grid gap-4 sm:grid-cols-3">
                {study.users.people.map((p) => (
                  <li key={p.name} className="rounded-xl border border-line bg-surface p-4">
                    <p className="font-medium text-text">{p.name}</p>
                    <p className="mt-1 text-sm leading-snug text-muted">{p.need}</p>
                  </li>
                ))}
              </ul>
              <h3 className="mt-8 mb-3 font-mono text-xs tracking-widest text-subtle uppercase">Constraints</h3>
              <ul className="flex flex-wrap gap-2">
                {study.users.constraints.map((c) => (
                  <li key={c} className="rounded-full border border-line px-3 py-1.5 text-sm text-muted">
                    {c}
                  </li>
                ))}
              </ul>
            </Step>

            <Step id="flow">
              <p className="mb-6 max-w-3xl text-muted">{study.flow.intro}</p>
              <UserFlow steps={study.flow.steps} />
            </Step>

            <Step id="wireframes">
              <p className="mb-8 max-w-3xl text-muted">{study.wireframes.intro}</p>
              <div className="grid gap-10 sm:grid-cols-2 xl:grid-cols-3">
                {study.wireframes.frames.map((f) => (
                  <WireframePhone key={f.title} frame={f} />
                ))}
              </div>
              {study.sketches.length > 0 && (
                <>
                  <h3 className="mt-12 mb-4 font-mono text-xs tracking-widest text-subtle uppercase">From the whiteboard</h3>
                  <div className="grid gap-6 sm:grid-cols-2">
                    {study.sketches.map((s) => (
                      <Shot key={s.src} shot={s} />
                    ))}
                  </div>
                </>
              )}
            </Step>

            <Step id="architecture">
              <p className="mb-6 max-w-3xl text-muted">{study.architecture.intro}</p>
              <ArchDiagram layers={study.architecture.layers} />
            </Step>

            <Step id="decisions">
              <p className="mb-6 max-w-3xl text-muted">The calls that shaped the build, and what I chose not to do.</p>
              <DecisionTable decisions={study.decisions} />
            </Step>

            <Step id="outcome">
              <ul className="space-y-3">
                {study.outcome.points.map((p) => (
                  <li key={p} className="flex gap-3 text-muted">
                    <span aria-hidden className="mt-2.5 size-1.5 shrink-0 rounded-full bg-accent" />
                    {p}
                  </li>
                ))}
              </ul>
              {study.outcome.shots.length > 0 && (
                <div className="mt-10 grid gap-8 sm:grid-cols-2">
                  {study.outcome.shots.map((s) => (
                    <Shot key={s.src} shot={s} />
                  ))}
                </div>
              )}
            </Step>

            <Step id="next">
              <ul className="space-y-3">
                {study.next.map((n) => (
                  <li key={n} className="flex gap-3 text-muted">
                    <ArrowRight size={16} aria-hidden className="mt-1 shrink-0 text-subtle" />
                    {n}
                  </li>
                ))}
              </ul>
            </Step>
          </div>
        </div>

        <Link
          to={`/work/${nextStudy.slug}`}
          className="group mt-8 flex items-center justify-between gap-4 rounded-(--radius-card) border border-line bg-surface p-6 transition-colors hover:border-accent sm:p-8"
        >
          <span>
            <span className="block font-mono text-[11px] tracking-widest text-subtle uppercase">Next case study</span>
            <span className="mt-1 block text-xl font-semibold tracking-tight group-hover:text-accent-strong">{nextStudy.title}</span>
          </span>
          <ArrowRight aria-hidden className="text-subtle transition-transform group-hover:translate-x-1 group-hover:text-accent-strong" />
        </Link>
      </Container>
    </article>
  );
}
