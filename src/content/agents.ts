// AI and automation work. Each item reads as a pipeline: the first step is the input,
// the last step is the output.

export type Agent = {
  title: string;
  context: string;
  status: "In production" | "Open source";
  outcome: string;
  steps: string[];
  stack: string[];
  href?: string;
};

export const agents: Agent[] = [
  {
    title: "B2B lead-intent analyzer",
    context: "OneMetric, scoped to deployed",
    status: "In production",
    outcome: "-60% lead qualification time",
    steps: ["Inbound leads", "Collect intent signals", "ML model scores intent", "Explain each score", "Ranked list for sales"],
    stack: ["Python", "Machine learning", "NLP"],
  },
  {
    title: "eKYC document verification",
    context: "OneMetric, built and shipped",
    status: "In production",
    outcome: "-70% onboarding delays",
    steps: ["ID document upload", "OCR reads the fields", "Image recognition checks", "Match against the form", "Verified, or flagged for review"],
    stack: ["OCR", "Image recognition", "Python"],
  },
  {
    title: "Outreach campaign engine",
    context: "Personal project",
    status: "Open source",
    outcome: "Resumes safely after a crash",
    steps: ["Google Sheet of contacts", "Clean and normalise", "Rotate 3 templates", "Throttle: 5-10 min gaps, 35 a day", "Send with OAuth2, log status"],
    stack: ["Node.js", "Express", "Nodemailer", "Google OAuth2"],
    href: "https://github.com/SanchitSlayer/emailsender-automated",
  },
  {
    title: "Walk-in drive alerts",
    context: "Walkins, background worker",
    status: "Open source",
    outcome: "Runs fully local, no paid APIs",
    steps: ["Employer posts a drive", "Geocode the venue", "Match candidates by their own travel radius", "Queue alerts on a schedule", "Telegram or console alert"],
    stack: ["BullMQ", "PostGIS", "FastAPI ML sidecar", "Telegram bot"],
    href: "https://github.com/SanchitSlayer/walkins",
  },
];
