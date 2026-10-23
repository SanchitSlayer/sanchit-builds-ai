import type { Decision } from "@/content/caseStudies";

// A table on wide screens; on phones each decision becomes its own card.
export default function DecisionTable({ decisions }: { decisions: Decision[] }) {
  return (
    <>
      <div className="hidden overflow-hidden rounded-(--radius-card) border border-line md:block">
        <table className="w-full text-left text-sm">
          <thead className="bg-surface-2 font-mono text-[11px] tracking-widest text-subtle uppercase">
            <tr>
              <th scope="col" className="w-[24%] px-4 py-3 font-normal">Problem</th>
              <th scope="col" className="w-[24%] px-4 py-3 font-normal">Decision</th>
              <th scope="col" className="w-[18%] px-4 py-3 font-normal">Instead of</th>
              <th scope="col" className="px-4 py-3 font-normal">Why</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-line bg-surface align-top">
            {decisions.map((d) => (
              <tr key={d.problem}>
                <td className="px-4 py-4 text-muted">{d.problem}</td>
                <td className="px-4 py-4 font-medium text-text">{d.choice}</td>
                <td className="px-4 py-4 text-subtle line-through decoration-line-strong">{d.alternative}</td>
                <td className="px-4 py-4 leading-relaxed text-muted">{d.why}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <ul className="space-y-3 md:hidden">
        {decisions.map((d) => (
          <li key={d.problem} className="rounded-xl border border-line bg-surface p-4 text-sm">
            <p className="text-muted">{d.problem}</p>
            <p className="mt-3 font-mono text-[10px] tracking-widest text-subtle uppercase">Decision</p>
            <p className="font-medium text-text">{d.choice}</p>
            <p className="mt-2 text-subtle">
              Instead of: <span className="line-through decoration-line-strong">{d.alternative}</span>
            </p>
            <p className="mt-3 leading-relaxed text-muted">{d.why}</p>
          </li>
        ))}
      </ul>
    </>
  );
}
