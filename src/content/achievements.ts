export type Achievement = {
  value: string;
  title: string;
  detail: string;
  period: string;
  kind: "leadership" | "competition" | "academic";
};

export const achievements: Achievement[] = [
  {
    value: "OC",
    title: "Placement Cell, IIT Jodhpur",
    detail: "Overall Coordinator of the student team that runs campus placements for IIT Jodhpur.",
    period: "Present",
    kind: "leadership",
  },
  {
    value: "3rd",
    title: "Pitch Rush 2025",
    detail: "Product Club pitch competition, with a product deck on BluSmart, an EV ride-hailing service.",
    period: "2025",
    kind: "competition",
  },
  {
    value: "9th / 23",
    title: "Inter IIT Tech Meet 14.0",
    detail: "Product lead for the Jilo Health multimodal health-screening MVP, competing against 22 other IITs.",
    period: "2025",
    kind: "competition",
  },
  {
    value: "OC",
    title: "The Product Club, IIT Jodhpur",
    detail: "Overall Coordinator: ran workshops on product thinking and mentored members on product development.",
    period: "Aug 2025 – Apr 2026",
    kind: "leadership",
  },
  {
    value: "Asst. Head",
    title: "E-Cell, Institute Innovation Council",
    detail: "Assistant Head of IIT Jodhpur's entrepreneurship cell.",
    period: "Jul 2024 – May 2025",
    kind: "leadership",
  },
  {
    value: "8.5",
    title: "Minor in AI, IIT Ropar",
    detail: "Deep learning, neural networks and applied AI, alongside the IIT Jodhpur degree.",
    period: "2025",
    kind: "academic",
  },
];
