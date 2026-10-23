// The "career molecule": atoms are roles, projects and wins; bonds are the skills they share.
// The static hero image uses x/y (on a 480 x 480 board); the 3D scene adds z for depth.

export type AtomKind = "product" | "engineering" | "leadership";

export type Atom = {
  id: string;
  label: string;
  detail: string;
  kind: AtomKind;
  size: number;
  section: string;
  x: number;
  y: number;
  // Depth for the 3D scene, roughly -1 (back) to 1 (front)
  z: number;
};

export const atoms: Atom[] = [
  { id: "onemetric", label: "OneMetric", detail: "PM intern, 2 tools in production", kind: "product", size: 30, section: "experience", x: 236, y: 214, z: 0 },
  { id: "ekyc", label: "eKYC OCR", detail: "-70% onboarding delays", kind: "engineering", size: 20, section: "work", x: 112, y: 140, z: 0.9 },
  { id: "intent", label: "Intent analyzer", detail: "-60% lead qualification time", kind: "engineering", size: 20, section: "agents", x: 362, y: 124, z: -0.8 },
  { id: "wallet", label: "Digital Wallet", detail: "Hash-chained ledger, QR pay", kind: "engineering", size: 16, section: "work", x: 78, y: 290, z: -1.1 },
  { id: "interiit", label: "Inter IIT 14.0", detail: "9th of 23 IITs", kind: "product", size: 14, section: "achievements", x: 214, y: 66, z: 0.6 },
  { id: "inventive", label: "Inventive AI", detail: "Growth intern, YC S23", kind: "product", size: 16, section: "experience", x: 388, y: 268, z: 1.0 },
  { id: "gumbo", label: "Gumbo Tech", detail: "PM intern", kind: "product", size: 12, section: "experience", x: 432, y: 176, z: -0.4 },
  { id: "placement", label: "Placement Cell", detail: "Overall Coordinator", kind: "leadership", size: 18, section: "achievements", x: 252, y: 360, z: -0.7 },
  { id: "productclub", label: "Product Club", detail: "Overall Coordinator", kind: "leadership", size: 14, section: "achievements", x: 392, y: 398, z: 0.8 },
  { id: "pitch", label: "Pitch Rush", detail: "3rd place, 2025", kind: "leadership", size: 13, section: "achievements", x: 122, y: 412, z: 0.4 },
];

export const bonds: [string, string][] = [
  ["onemetric", "ekyc"],
  ["onemetric", "intent"],
  ["onemetric", "inventive"],
  ["onemetric", "placement"],
  ["ekyc", "wallet"],
  ["ekyc", "interiit"],
  ["interiit", "intent"],
  ["intent", "gumbo"],
  ["gumbo", "inventive"],
  ["placement", "productclub"],
  ["placement", "pitch"],
  ["wallet", "pitch"],
];

export const kindColor: Record<AtomKind, string> = {
  product: "var(--color-product)",
  engineering: "var(--color-engineering)",
  leadership: "var(--color-leadership)",
};

// Same colours as hex values, for the 3D scene (WebGL cannot read CSS variables).
export const kindHex: Record<AtomKind, string> = {
  product: "#2dd4bf",
  engineering: "#7aa2ff",
  leadership: "#f5b74e",
};
