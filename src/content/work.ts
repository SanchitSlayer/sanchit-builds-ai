import deckBlusmart from "@/assets/img/deck-blusmart.webp";
import deckElchemy from "@/assets/img/deck-elchemy.webp";
import deckMaternal from "@/assets/img/deck-maternal.webp";

export type Featured = {
  slug: string;
  title: string;
  kicker: string;
  summary: string;
  metric: { value: string; label: string };
  highlights: string[];
  stack: string[];
  repo?: string;
};

// Full case studies. Their own pages (/work/:slug) arrive in Phase 4.
export const featured: Featured[] = [
  {
    slug: "digital-wallet",
    title: "Digital Wallet & eKYC",
    kicker: "Fintech prototype, Oct 2026",
    summary:
      "A working digital wallet: sign-up, OCR-based identity checks before activation, and QR payments between wallets recorded in a ledger where tampering is detectable.",
    metric: { value: "SHA-256", label: "hash-chained, append-only ledger" },
    highlights: [
      "eKYC with a Pending, Verified, Rejected review flow",
      "Atomic transfers and HMAC-signed QR payments",
      "Security review against the OWASP Top 10, 27 integration tests",
    ],
    stack: ["FastAPI", "PostgreSQL", "React", "TypeScript", "Tesseract OCR"],
    repo: "https://github.com/SanchitSlayer/digital-wallet-ekyc",
  },
  {
    slug: "onemetric-ekyc",
    title: "eKYC OCR tool at OneMetric",
    kicker: "Internship, shipped to production",
    summary:
      "Manual document checks were slowing customer onboarding. I scoped, built and validated an OCR and image-recognition tool that automates them.",
    metric: { value: "-70%", label: "onboarding delays" },
    highlights: [
      "Requirements turned into user flows with the operations team",
      "Proof of concept validated with users before rollout",
      "One of 2 tools from the internship that reached production",
    ],
    stack: ["OCR", "Image recognition", "Python", "User flows"],
  },
];

export type Project = {
  title: string;
  date: string;
  summary: string;
  stack: string[];
  href: string;
  note?: string;
};

export const projects: Project[] = [
  {
    title: "Walkins",
    date: "2026",
    summary:
      "Walk-in interview platform: employers post drives tied to a venue and time window; candidates are matched by the travel radius they chose, shown on a live city map.",
    stack: ["Next.js", "NestJS", "PostGIS", "BullMQ", "FastAPI"],
    href: "https://github.com/SanchitSlayer/walkins",
  },
  {
    title: "Delivery System Database",
    date: "Jun 2026",
    summary:
      "Normalised (3NF) SQL Server model of a delivery platform: 8 tables, about 164,000 rows, 20 analysis queries and 6 Power BI KPIs.",
    stack: ["SQL Server", "T-SQL", "Power BI"],
    href: "https://github.com/SanchitSlayer/delivery-system-database",
  },
  {
    title: "Crypto market sentiment",
    date: "May 2025",
    summary:
      "Async Reddit collection plus 10,000+ tweets, scored with VADER into 3 sentiment classes and correlated with daily Bitcoin returns.",
    stack: ["Python", "asyncio", "PRAW", "NLTK"],
    href: "https://github.com/aman2810-jsr/crypto_sentiment",
    note: "Team project",
  },
  {
    title: "Vehicle routing optimiser",
    date: "Apr 2025",
    summary:
      "Five routing algorithms, from nearest neighbour to a genetic algorithm, compared on real roads through OSRM in an interactive Streamlit app.",
    stack: ["Python", "OSRM", "Streamlit", "Folium"],
    href: "https://github.com/SanchitSlayer/Vehicle_Routing_Optimization",
    note: "Team project",
  },
  {
    title: "Maternal health risk",
    date: "Nov 2024",
    summary: "Machine learning course project comparing classifiers to predict maternal health risk levels.",
    stack: ["Python", "scikit-learn"],
    href: "https://github.com/SanchitSlayer/Maternal-Health-Risk",
  },
];

export type Deck = {
  title: string;
  kind: string;
  summary: string;
  cover: string;
  view: string;
  download?: string;
  badge?: string;
};

export const decks: Deck[] = [
  {
    title: "BluSmart product teardown",
    kind: "Product teardown",
    summary: "Product teardown of BluSmart, India's all-electric ride-hailing service.",
    cover: deckBlusmart,
    view: "https://docs.google.com/presentation/d/1ZoPg859M2dBU0DnOXQ8_WPOqJkPZjo9D/edit?usp=sharing&ouid=106754144357812763211&rtpof=true&sd=true",
    download: "/decks/Blusmart.pptx",
    badge: "3rd, Pitch Rush 2025",
  },
  {
    title: "Elchemy case study",
    kind: "Case study",
    summary: "How Elchemy pairs supply chain depth with engineering to run high-margin, high-trust cross-border fulfilment.",
    cover: deckElchemy,
    view: "https://www.canva.com/design/DAHFgzlTk_4/9dAwRKwGnURF7_K0bHcpdA/edit",
  },
  {
    title: "Maternal health risk",
    kind: "ML project deck",
    summary: "Slides for the maternal health risk classification project.",
    cover: deckMaternal,
    view: "https://docs.google.com/presentation/d/1v0zyfCliJN41efkwgOgC9H5tSpwRPzi9/edit?slide=id.p1#slide=id.p1",
    download: "/decks/MATERNAL_HEALTH_RISK.pptx",
  },
];
