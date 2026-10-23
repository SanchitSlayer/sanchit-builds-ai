import profilePhoto from "@/assets/img/profile.webp";
import { about } from "@/content/profile";

export default function About() {
  return (
    <div className="grid gap-12 lg:grid-cols-[1fr_20rem] lg:gap-16">
      <div>
        <div className="space-y-5 text-base leading-relaxed text-muted sm:text-lg">
          {about.paragraphs.map((p) => (
            <p key={p.slice(0, 24)}>{p}</p>
          ))}
        </div>

        <h3 className="mt-12 mb-4 font-mono text-xs tracking-widest text-subtle uppercase">Education</h3>
        <ul className="divide-y divide-line border-y border-line">
          {about.education.map((e) => (
            <li key={e.school} className="grid gap-1 py-4 sm:grid-cols-[1fr_auto] sm:gap-6">
              <div>
                <p className="font-medium text-text">{e.school}</p>
                <p className="text-sm text-muted">{e.degree}</p>
              </div>
              <p className="font-mono text-sm text-muted sm:text-right">
                {e.period}
                <span className="block text-accent-strong">{e.score}</span>
              </p>
            </li>
          ))}
        </ul>
      </div>

      <aside className="grid grid-cols-[7.5rem_1fr] items-start gap-4 sm:grid-cols-[12rem_1fr] lg:block lg:space-y-4">
        <img
          src={profilePhoto}
          alt="Sanchit Garg standing in front of a mountain waterfall"
          width={600}
          height={644}
          loading="lazy"
          decoding="async"
          className="aspect-[4/5] w-full rounded-(--radius-card) border border-line object-cover object-[50%_35%]"
        />
        <div className="rounded-(--radius-card) border border-line bg-surface p-4 sm:p-5">
          <p className="mb-4 flex items-center gap-2 font-mono text-xs tracking-widest text-subtle uppercase">
            <span aria-hidden className="size-1.5 rounded-full bg-accent" /> Currently
          </p>
          <dl className="space-y-3">
            {about.currently.map((c) => (
              <div key={c.label}>
                <dt className="text-xs text-subtle">{c.label}</dt>
                <dd className="text-sm text-text">{c.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </aside>
    </div>
  );
}
