import type { ComponentType } from "react";
import { Helmet } from "react-helmet-async";
import Hero from "@/components/hero/Hero";
import ProofStrip from "@/components/hero/ProofStrip";
import Section from "@/components/ui/Section";
import About from "@/components/sections/About";
import Agents from "@/components/sections/Agents";
import Work from "@/components/sections/Work";
import Experience from "@/components/sections/Experience";
import Achievements from "@/components/sections/Achievements";
import Contact from "@/components/sections/Contact";
import { site, sections } from "@/content/site";

// Heading and one-line intro for each section, keyed by the ids in content/site.ts.
const content: Record<string, { title: string; intro: string; Body: ComponentType }> = {
  about: {
    title: "About",
    intro: "Chemistry taught me systems. Entrepreneurship taught me users. Now I build AI products that connect the two.",
    Body: About,
  },
  agents: {
    title: "AI & Automation",
    intro: "Tools that take a manual workflow and run it end to end. Each card reads top to bottom: what goes in, what the system does, what comes out.",
    Body: Agents,
  },
  work: {
    title: "Selected work",
    intro: "Case studies that show the thinking behind the build, plus the projects and decks around them.",
    Body: Work,
  },
  experience: {
    title: "Experience",
    intro: "Where I have shipped, and what changed because of it.",
    Body: Experience,
  },
  achievements: {
    title: "Achievements & leadership",
    intro: "Competitions, roles I was trusted with, and the academic side.",
    Body: Achievements,
  },
  contact: {
    title: "Let's talk",
    intro: "Hiring for AI engineering, product or consulting roles? I would like to hear about it.",
    Body: Contact,
  },
};

export default function Home() {
  return (
    <>
      <Helmet>
        <title>{site.title}</title>
        <meta name="description" content={site.description} />
      </Helmet>
      <Hero />
      <ProofStrip />
      {sections.map(({ id }, i) => {
        const { title, intro, Body } = content[id];
        return (
          <Section key={id} id={id} index={String(i + 1).padStart(2, "0")} title={title} intro={intro}>
            <Body />
          </Section>
        );
      })}
    </>
  );
}
