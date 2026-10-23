import type { ReactNode } from "react";
import Container from "./Container";

type Props = {
  id: string;
  index: string;
  title: string;
  intro?: string;
  children: ReactNode;
};

// Every main section shares this header: a mono index ("02"), a title and a one-line intro.
export default function Section({ id, index, title, intro, children }: Props) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className="border-t border-line py-20 sm:py-28">
      <Container>
        <header className="mb-10 max-w-2xl sm:mb-14">
          <p className="mb-3 font-mono text-xs tracking-widest text-accent uppercase">
            {index} / {title}
          </p>
          <h2 id={`${id}-title`} className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
            {title}
          </h2>
          {intro && <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">{intro}</p>}
        </header>
        {children}
      </Container>
    </section>
  );
}
