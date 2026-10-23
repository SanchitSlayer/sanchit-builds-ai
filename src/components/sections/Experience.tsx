import { roles } from "@/content/experience";
import Emphasize from "@/components/ui/Emphasize";
import Tag from "@/components/ui/Tag";

export default function Experience() {
  return (
    <ol className="divide-y divide-line border-y border-line">
      {roles.map((r) => (
        <li key={r.company} className="grid gap-4 py-8 md:grid-cols-[10rem_1fr] md:gap-8">
          <div className="font-mono text-xs leading-relaxed text-subtle md:pt-1.5">
            <p className="text-muted">{r.period}</p>
            <p>{r.place}</p>
          </div>

          <div className={r.photo ? "grid gap-6 lg:grid-cols-[1fr_12rem]" : undefined}>
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <h3 className="text-lg font-semibold tracking-tight">{r.company}</h3>
                {r.tag && <Tag tone="accent">{r.tag}</Tag>}
              </div>
              <p className="text-sm text-muted">{r.title}</p>
              <ul className="mt-4 space-y-2.5 text-[15px] leading-relaxed text-muted">
                {r.points.map((p) => (
                  <li key={p} className="flex gap-3">
                    <span aria-hidden className="mt-2.5 size-1 shrink-0 rounded-full bg-line-strong" />
                    <span>
                      <Emphasize text={p} />
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            {r.photo && (
              <img
                src={r.photo.src}
                alt={r.photo.alt}
                width={r.photo.width}
                height={r.photo.height}
                loading="lazy"
                decoding="async"
                className="aspect-[4/3] w-full max-w-[14rem] rounded-xl border border-line object-cover sm:max-w-xs lg:aspect-square"
              />
            )}
          </div>
        </li>
      ))}
    </ol>
  );
}
