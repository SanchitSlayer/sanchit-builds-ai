import type { WireBlock, Wireframe } from "@/content/caseStudies";

// Deliberately grey and plain: a wireframe is about layout and wording, not colour.
function Block({ block }: { block: WireBlock }) {
  switch (block.kind) {
    case "title":
      return <p className="text-[15px] font-semibold text-text">{block.label}</p>;
    case "text":
      return <p className="text-xs leading-snug text-muted">{block.label}</p>;
    case "caption":
      return <p className="font-mono text-[10px] text-subtle uppercase">{block.label}</p>;
    case "image":
      return (
        <div className="relative flex h-24 items-center justify-center overflow-hidden rounded-md border border-line-strong">
          <svg aria-hidden className="absolute inset-0 h-full w-full text-line" preserveAspectRatio="none" viewBox="0 0 100 100">
            <line x1="0" y1="0" x2="100" y2="100" stroke="currentColor" vectorEffect="non-scaling-stroke" />
            <line x1="100" y1="0" x2="0" y2="100" stroke="currentColor" vectorEffect="non-scaling-stroke" />
          </svg>
          <span className="relative rounded bg-surface px-1.5 font-mono text-[10px] text-subtle">{block.label}</span>
        </div>
      );
    case "field":
      return <div className="rounded-md border border-line-strong px-2.5 py-2 text-xs text-muted">{block.label}</div>;
    case "button": {
      const tone =
        block.tone === "primary"
          ? "border-accent/60 text-accent-strong"
          : block.tone === "danger"
            ? "border-leadership/50 text-leadership"
            : "border-line text-subtle";
      return <div className={`rounded-md border py-2 text-center text-xs font-medium ${tone}`}>{block.label}</div>;
    }
    case "buttons":
      return (
        <div className="grid grid-cols-2 gap-2">
          <div className="rounded-md border border-accent/60 py-2 text-center text-xs font-medium text-accent-strong">{block.labels[0]}</div>
          <div className="rounded-md border border-leadership/50 py-2 text-center text-xs font-medium text-leadership">{block.labels[1]}</div>
        </div>
      );
    case "rows":
      return (
        <dl className="divide-y divide-line rounded-md border border-line text-[11px]">
          {block.rows.map(([k, v]) => (
            <div key={k} className="flex justify-between gap-2 px-2.5 py-1.5">
              <dt className="text-subtle">{k}</dt>
              <dd className="text-muted">{v}</dd>
            </div>
          ))}
        </dl>
      );
  }
}

export default function WireframePhone({ frame }: { frame: Wireframe }) {
  return (
    <figure className="flex flex-col">
      {/* Frames stretch to the tallest in the row so the captions line up */}
      <div className="mx-auto flex w-full max-w-[16rem] flex-1 flex-col rounded-[1.75rem] border border-line-strong bg-bg p-2.5">
        <div className="flex-1 rounded-[1.25rem] border border-line bg-surface px-4 pt-3 pb-5">
          <div aria-hidden className="mx-auto mb-4 h-1 w-12 rounded-full bg-line-strong" />
          <div className="space-y-3">
            {frame.blocks.map((b, i) => (
              <Block key={i} block={b} />
            ))}
          </div>
        </div>
      </div>
      <figcaption className="mx-auto mt-4 max-w-[16rem]">
        <p className="text-sm font-medium text-text">{frame.title}</p>
        <p className="mt-1 text-sm leading-snug text-muted">{frame.note}</p>
      </figcaption>
    </figure>
  );
}
