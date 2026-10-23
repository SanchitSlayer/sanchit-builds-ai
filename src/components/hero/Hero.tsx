import { ArrowDown, FileText } from "lucide-react";
import { site } from "@/content/site";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import HeroVisual from "./HeroVisual";

const legend = [
  { label: "Product", color: "bg-product" },
  { label: "Engineering", color: "bg-engineering" },
  { label: "Leadership", color: "bg-leadership" },
];

export default function Hero() {
  return (
    <section aria-labelledby="hero-title" className="relative overflow-hidden pt-28 pb-16 sm:pt-36 sm:pb-24">
      <div aria-hidden className="bg-grid pointer-events-none absolute inset-0" />
      <Container className="relative grid items-center gap-12 lg:grid-cols-[1.1fr_1fr]">
        <div>
          <p className="mb-6 font-mono text-xs tracking-widest text-muted uppercase">
            IIT Jodhpur '27 <span className="text-subtle">/</span> B.S. Chemistry, Entrepreneurship
          </p>
          <h1 id="hero-title" className="text-4xl leading-[1.05] font-semibold tracking-tight text-balance sm:text-5xl xl:text-6xl">
            <span className="block">{site.name}.</span>
            <span className="block text-muted">Product builder who ships AI tools to production.</span>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
            At OneMetric I shipped an OCR eKYC tool that cut onboarding delays by{" "}
            <span className="font-mono text-accent-strong">70%</span> and an AI lead-intent analyzer that cut
            qualification time by <span className="font-mono text-accent-strong">60%</span>.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="#work">
              See case studies <ArrowDown size={16} aria-hidden />
            </Button>
            <Button variant="ghost" href={site.resumeUrl} target="_blank" rel="noreferrer">
              <FileText size={16} aria-hidden /> Resume
            </Button>
          </div>
        </div>

        <figure className="mx-auto w-full max-w-[30rem]">
          <HeroVisual />
          <figcaption className="mt-2 text-center font-mono text-[11px] text-subtle">
            <span className="block">fig. 1, career as a molecule</span>
            <span className="mt-1.5 flex flex-wrap justify-center gap-x-4 gap-y-1">
              {legend.map((l) => (
                <span key={l.label} className="inline-flex items-center gap-1.5">
                  <span aria-hidden className={`size-2 rounded-full ${l.color}`} />
                  {l.label}
                </span>
              ))}
            </span>
          </figcaption>
        </figure>
      </Container>
    </section>
  );
}
