import { atoms, bonds, kindColor } from "@/content/molecule";

const byId = Object.fromEntries(atoms.map((a) => [a.id, a]));

// Flat drawing of the career molecule. Shown before the 3D scene loads,
// and instead of it on low-end devices or when reduced motion is on.
export default function MoleculeStatic() {
  return (
    <svg
      viewBox="0 0 480 480"
      role="img"
      aria-label="Career map drawn as a molecule: OneMetric at the centre, bonded to the eKYC OCR tool, the intent analyzer, Inventive AI and the Placement Cell, with projects and leadership roles around them."
      className="h-full w-full"
    >
      <g stroke="var(--color-line-strong)" strokeWidth="1.5">
        {bonds.map(([a, b]) => (
          <line key={`${a}-${b}`} x1={byId[a].x} y1={byId[a].y} x2={byId[b].x} y2={byId[b].y} />
        ))}
      </g>
      {atoms.map((a) => (
        <g key={a.id}>
          <circle cx={a.x} cy={a.y} r={a.size + 8} fill={kindColor[a.kind]} opacity="0.08" />
          <circle cx={a.x} cy={a.y} r={a.size} fill="var(--color-surface-2)" stroke={kindColor[a.kind]} strokeWidth="1.5" />
          <circle cx={a.x} cy={a.y} r={Math.max(3, a.size * 0.22)} fill={kindColor[a.kind]} />
          <text
            x={a.x}
            y={a.y + a.size + 16}
            textAnchor="middle"
            fill="var(--color-muted)"
            style={{ font: "500 11px var(--font-mono)" }}
          >
            {a.label}
          </text>
        </g>
      ))}
    </svg>
  );
}
