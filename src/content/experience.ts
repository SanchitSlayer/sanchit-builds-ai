import onemetricPhoto from "@/assets/img/onemetric.webp";
import interIitPhoto from "@/assets/img/inter-iit.webp";

export type Role = {
  company: string;
  title: string;
  place: string;
  period: string;
  tag?: string;
  points: string[];
  photo?: { src: string; alt: string; width: number; height: number };
};

export const roles: Role[] = [
  {
    company: "OneMetric",
    title: "Product Management Intern",
    place: "Gurgaon",
    period: "May – Jul 2026",
    points: [
      "Built an eKYC identity-verification tool with OCR and image recognition, cutting onboarding delays by 70%.",
      "Owned an AI/ML intent analyzer for B2B sales from scoping to deployment, cutting lead qualification time by 60%.",
      "Turned stakeholder needs into user flows, ranked features by value against effort, and explained model output to leadership. 2 solutions reached production.",
    ],
    photo: { src: onemetricPhoto, alt: "Sanchit with a colleague at the OneMetric office in Gurgaon", width: 960, height: 720 },
  },
  {
    company: "Gumbo Tech",
    title: "Product Management Intern",
    place: "Remote",
    period: "Jan – Mar 2026",
    points: [
      "Worked on product strategy and the roadmap with engineering, design and business teams.",
      "Ran market research and competitor analysis to feed feature prioritisation.",
    ],
  },
  {
    company: "Inventive AI",
    title: "Growth Intern",
    place: "Remote",
    period: "Jun – Aug 2025",
    tag: "YC S23",
    points: [
      "Ran growth campaigns to drive product adoption and worked with product and business development on go-to-market.",
      "Analysed user behaviour to find and fix drop-offs in conversion funnels.",
    ],
  },
  {
    company: "Inter IIT Tech Meet 14.0",
    title: "Product lead, Jilo Health problem statement",
    place: "IIT Patna",
    period: "2025",
    tag: "9th of 23 IITs",
    points: [
      "Led product for a mobile and cloud MVP that captures face and eye images and uses multimodal AI to screen for 50+ health conditions.",
      "Designed the image-capture flows, an elderly-first interface and the phone-to-cloud inference pipeline.",
    ],
    photo: { src: interIitPhoto, alt: "Sanchit with teammates at Inter IIT Tech Meet 14.0, IIT Patna", width: 720, height: 960 },
  },
];
