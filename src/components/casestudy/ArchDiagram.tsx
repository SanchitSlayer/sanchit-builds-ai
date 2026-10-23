import { ArrowDown } from "lucide-react";
import type { ArchLayer } from "@/content/caseStudies";

// Layers stack top to bottom in the order a request travels through them.
export default function ArchDiagram({ layers }: { layers: ArchLayer[] }) {
  return (
    <ol className="rounded-(--radius-card) border border-line bg-surface p-4 sm:p-6">
      {layers.map((layer, i) => (
        <li key={layer.name}>
          <div className="grid gap-3 sm:grid-cols-[9rem_1fr] sm:items-center sm:gap-6">
            <p className="font-mono text-xs tracking-widest text-subtle uppercase">{layer.name}</p>
            <ul className="grid gap-2 [grid-template-columns:repeat(auto-fit,minmax(9.5rem,1fr))]">
              {layer.nodes.map((n) => (
                <li key={n.label} className="rounded-lg border border-line-strong bg-bg px-3 py-2.5">
                  <p className="text-sm font-medium text-text">{n.label}</p>
                  {n.detail && <p className="mt-0.5 text-xs leading-snug text-muted">{n.detail}</p>}
                </li>
              ))}
            </ul>
          </div>
          {i < layers.length - 1 && (
            <div aria-hidden className="flex justify-center py-2 sm:pl-[9rem]">
              <ArrowDown size={16} className="text-accent" />
            </div>
          )}
        </li>
      ))}
    </ol>
  );
}
