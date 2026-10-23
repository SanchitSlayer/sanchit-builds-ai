import walletShot from "@/assets/img/wallet/wallet.webp";
import kycReviewShot from "@/assets/img/wallet/admin-kyc-review.webp";
import receiveShot from "@/assets/img/wallet/receive-qr.webp";
import payShot from "@/assets/img/wallet/pay-confirm.webp";
import ledgerShot from "@/assets/img/wallet/ledger-verification.webp";

// Each case study follows the same design-process order:
// problem, users and constraints, user flow, wireframes, architecture, decisions, outcome, next steps.

export type Image = { src: string; alt: string; caption: string; width: number; height: number };

export type FlowStep = {
  label: string;
  actor: "User" | "System" | "Admin" | "Reviewer" | "Customer";
  detail?: string;
  // An alternative path leaving this step, e.g. a rejection
  branch?: string;
};

export type WireBlock =
  | { kind: "title" | "text" | "caption"; label: string }
  | { kind: "image" | "field"; label: string }
  | { kind: "button"; label: string; tone?: "primary" | "danger" | "ghost" }
  | { kind: "buttons"; labels: [string, string] }
  | { kind: "rows"; rows: [string, string][] };

export type Wireframe = { title: string; note: string; blocks: WireBlock[] };

export type ArchLayer = { name: string; nodes: { label: string; detail?: string }[] };

export type Decision = { problem: string; choice: string; alternative: string; why: string };

export type CaseStudy = {
  slug: string;
  title: string;
  kicker: string;
  summary: string;
  meta: { label: string; value: string }[];
  links: { label: string; href: string }[];
  stats: { value: string; label: string }[];
  confidentiality?: string;
  problem: { statement: string; questions: string[] };
  users: { people: { name: string; need: string }[]; constraints: string[] };
  flow: { intro: string; steps: FlowStep[] };
  wireframes: { intro: string; frames: Wireframe[] };
  // Photos of real whiteboard or paper sketches; add files to src/assets/sketches and list them here.
  sketches: Image[];
  architecture: { intro: string; layers: ArchLayer[] };
  decisions: Decision[];
  outcome: { points: string[]; shots: Image[] };
  next: string[];
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "digital-wallet",
    title: "Digital Wallet & eKYC",
    kicker: "Fintech prototype, Oct 2026",
    summary:
      "A working digital wallet where people prove who they are with an ID card before any money moves, pay each other by QR code, and every balance change lands in a ledger that shows if anyone edits it.",
    meta: [
      { label: "Role", value: "Solo: product, design, backend and frontend" },
      { label: "Timeline", value: "October 2026" },
      { label: "Stack", value: "FastAPI, PostgreSQL, React, TypeScript, Tesseract OCR" },
    ],
    links: [{ label: "Code on GitHub", href: "https://github.com/SanchitSlayer/digital-wallet-ekyc" }],
    stats: [
      { value: "27", label: "integration tests on a real PostgreSQL database" },
      { value: "10 / 20", label: "simultaneous payments accepted when only 10 were affordable; balance ended at exactly zero" },
      { value: "10 / 10", label: "OWASP Top 10 categories reviewed, plus personal-data handling" },
    ],
    problem: {
      statement:
        "A wallet only works if people trust it. Before money moves, the system has to know who the user is. After it moves, every rupee has to be accounted for, even when two payments arrive at the same moment or a phone retries a request.",
      questions: [
        "Identity: how do we verify a user from an ID card without exposing their personal data?",
        "Correctness: how do we rule out double charges, overdrafts and money lost in a crash?",
        "Audit: how can anyone prove the transaction history was never edited?",
      ],
    },
    users: {
      people: [
        { name: "Wallet user", need: "Pay and get paid in a few taps, and trust the balance they see." },
        { name: "KYC reviewer", need: "Approve genuine IDs quickly and see why the system thinks a name matches." },
        { name: "Auditor", need: "Prove that the ledger has not been tampered with, and find the exact entry if it has." },
      ],
      constraints: [
        "Proof of concept with fake money, running locally",
        "ID images and numbers are personal data: never public, numbers masked everywhere",
        "Money stored as whole paise, never floating point",
        "Every write must stay correct under concurrent requests and retries",
      ],
    },
    flow: {
      intro: "From sign-up to a confirmed payment. Verification gates the wallet, and the payer always sees who they are paying before money moves.",
      steps: [
        { label: "Register", actor: "User", detail: "Email, phone and password (bcrypt-hashed)" },
        { label: "Upload ID card", actor: "User", detail: "Checked to be a real JPEG or PNG" },
        { label: "OCR and name match", actor: "System", detail: "Tesseract reads the ID; the name is fuzzy-matched to the account" },
        { label: "Review", actor: "Admin", detail: "Sees the image, masked ID and match score", branch: "Rejected: the user sees the reason and uploads again" },
        { label: "Wallet opens", actor: "System", detail: "Approval and wallet creation happen in one transaction" },
        { label: "Show a payment QR", actor: "User", detail: "Signed with HMAC and set to expire" },
        { label: "Scan and confirm", actor: "User", detail: "Payer sees the receiver's real name and the amount" },
        { label: "Transfer", actor: "System", detail: "Debit, credit and two ledger entries commit together" },
      ],
    },
    wireframes: {
      intro: "Low-fidelity wireframes of the three screens where trust is won or lost. Layout and wording first, colour later.",
      frames: [
        {
          title: "Verify identity",
          note: "One task per screen. The status line removes the 'did it work?' doubt after upload.",
          blocks: [
            { kind: "title", label: "Verify your identity" },
            { kind: "text", label: "Upload a clear photo of your ID card" },
            { kind: "image", label: "ID photo" },
            { kind: "button", label: "Upload", tone: "primary" },
            { kind: "rows", rows: [["Status", "Pending review"], ["ID number", "******1357"]] },
          ],
        },
        {
          title: "Confirm payment",
          note: "The receiver's name comes from the server, not the QR, so a tampered code cannot fake it.",
          blocks: [
            { kind: "caption", label: "You are paying" },
            { kind: "title", label: "Ravi Kumar" },
            { kind: "field", label: "Rs 125.50" },
            { kind: "text", label: "Code expires in 9:41" },
            { kind: "button", label: "Confirm and pay", tone: "primary" },
            { kind: "button", label: "Cancel", tone: "ghost" },
          ],
        },
        {
          title: "Admin KYC review",
          note: "Everything needed for a decision on one screen, with the ID number masked even for admins.",
          blocks: [
            { kind: "image", label: "ID image" },
            { kind: "rows", rows: [["ID number", "******1357"], ["Name match", "100%"], ["Submitted", "20 Oct, 23:51"]] },
            { kind: "field", label: "Rejection reason" },
            { kind: "buttons", labels: ["Approve", "Reject"] },
          ],
        },
      ],
    },
    sketches: [],
    architecture: {
      intro: "Each layer has one job, and each domain (auth, KYC, wallet, ledger, payments) uses the same layers, so a rule lives in exactly one place.",
      layers: [
        {
          name: "Browser",
          nodes: [
            { label: "React + TypeScript pages", detail: "Wallet, receive, pay, KYC, admin" },
            { label: "Typed API client", detail: "Types generated from the backend's OpenAPI schema" },
          ],
        },
        {
          name: "API",
          nodes: [
            { label: "FastAPI routers", detail: "Validate input, call one service" },
            { label: "Auth dependencies", detail: "JWT check, role reloaded from the database" },
          ],
        },
        {
          name: "Domain services",
          nodes: [
            { label: "KYC", detail: "OCR pipeline, review" },
            { label: "Wallet", detail: "Locked, atomic transfers" },
            { label: "Ledger", detail: "SHA-256 hash chain" },
            { label: "Payments", detail: "HMAC-signed QR codes" },
          ],
        },
        {
          name: "Data",
          nodes: [
            { label: "PostgreSQL 16", detail: "Constraints, append-only trigger" },
            { label: "ID image store", detail: "Random names, not publicly served" },
            { label: "Tesseract OCR", detail: "Grayscale, upscale, Otsu threshold" },
          ],
        },
      ],
    },
    decisions: [
      {
        problem: "Two payments from one wallet at the same moment could both pass the balance check",
        choice: "Lock both wallet rows with SELECT ... FOR UPDATE, always in id order",
        alternative: "Check the balance in application code",
        why: "Application checks race each other. Row locks plus a database CHECK make an overdraft impossible, and a fixed lock order prevents deadlocks.",
      },
      {
        problem: "A network retry could charge the payer twice",
        choice: "Idempotency-Key header, unique per sender in the database",
        alternative: "Trust the app not to retry",
        why: "Phones retry on bad networks. A unique key turns a retry into a harmless repeat of the first answer.",
      },
      {
        problem: "A crash between debit and credit would lose money",
        choice: "Debit, credit, transfer row and ledger entries in one transaction",
        alternative: "Separate writes with clean-up jobs",
        why: "All or nothing is simpler to reason about than repairing half-finished transfers. A test simulates the crash.",
      },
      {
        problem: "Floating point cannot store 0.10 exactly",
        choice: "Whole paise in BIGINT columns",
        alternative: "Rupees as decimals or floats",
        why: "Integers cannot drift. The frontend parses rupee input as text to avoid rounding on the way in.",
      },
      {
        problem: "Ledger history could be edited silently",
        choice: "SHA-256 hash chain, append-only trigger and a verify endpoint",
        alternative: "A plain audit log table",
        why: "Any edited or reordered entry breaks every hash after it, and verification names the first broken entry.",
      },
      {
        problem: "A QR code could be edited to change the amount or receiver",
        choice: "HMAC-SHA256 signature with its own key and an expiry inside the signed payload",
        alternative: "Plain JSON in the QR",
        why: "Changing one character invalidates the signature, and old codes stop working on their own.",
      },
    ],
    outcome: {
      points: [
        "Full flow works end to end: register, verify, receive, pay, verify the ledger",
        "Race test: 20 simultaneous payments against a balance for 10. Exactly 10 succeeded and the balance ended at zero",
        "Editing a ledger row directly in the database is reported at the exact entry",
        "27 integration tests run through the real migrations on PostgreSQL, mocking only the OCR call",
      ],
      shots: [
        { src: walletShot, alt: "Wallet dashboard with balance and transaction history", caption: "Wallet: balance and history with counterparties", width: 800, height: 610 },
        { src: kycReviewShot, alt: "Admin KYC review with ID image, masked ID number, OCR text and name match score", caption: "Admin review: masked ID, OCR text, name match", width: 800, height: 600 },
        { src: receiveShot, alt: "Receive screen showing a signed payment QR code with amount and expiry", caption: "Receive: signed, expiring QR code", width: 800, height: 600 },
        { src: payShot, alt: "Pay confirmation showing receiver name and amount", caption: "Pay: confirm the receiver before paying", width: 800, height: 330 },
        { src: ledgerShot, alt: "Ledger verification: chain intact, and broken at entry 5 after tampering", caption: "Ledger check: intact, then broken at entry 5 after an edit", width: 944, height: 240 },
      ],
    },
    next: [
      "Move the login token into an httpOnly cookie with CSRF protection",
      "Encrypt ID images and ID numbers at rest",
      "Rate-limit login, upload and payment attempts",
      "Publish the latest ledger hash outside the database so a full rewrite is also caught",
      "One-time QR invoices and daily payment limits",
    ],
  },
  {
    slug: "onemetric-ekyc",
    title: "eKYC OCR tool at OneMetric",
    kicker: "Internship, shipped to production",
    summary:
      "Customer onboarding was slowed by manual document checks. I scoped, built and validated an OCR and image-recognition tool that automates them, and it went to production.",
    meta: [
      { label: "Role", value: "Product Management Intern" },
      { label: "Timeline", value: "May – July 2026" },
      { label: "Methods", value: "Stakeholder interviews, user flows, value vs effort, proof of concept" },
    ],
    links: [],
    stats: [
      { value: "-70%", label: "onboarding delays" },
      { value: "2", label: "internship solutions that reached production, including this one" },
      { value: "PoC", label: "validated with users before rollout" },
    ],
    confidentiality: "Details are generalised to respect OneMetric's confidentiality. Numbers are the ones shared on my CV.",
    problem: {
      // CONFIRM: framing inferred from "automating document checks, cutting onboarding delays by 70%"
      statement:
        "New customers could not start until someone had checked their identity documents by hand. Every check took reviewer time, and the queue delayed onboarding.",
      questions: [
        "Which parts of a document check are repetitive enough for a machine?",
        "Where must a person still decide?",
        "How do we prove the tool works before it touches real onboarding?",
      ],
    },
    users: {
      people: [
        { name: "Operations reviewers", need: "Spend time only on documents that genuinely need a person." },
        { name: "New customers", need: "Get verified and start using the product without waiting." },
        { name: "Leadership", need: "Understand what the model decides and why, before trusting it." },
      ],
      constraints: [
        "Identity documents are sensitive personal data",
        // CONFIRM: inferred constraint
        "Had to fit the existing onboarding process, not replace it",
        "Model output had to be explainable to non-technical stakeholders",
      ],
    },
    flow: {
      // CONFIRM: flow inferred from the CV bullets
      intro: "Automation handles the clear cases; anything uncertain goes to a person.",
      steps: [
        { label: "Upload ID document", actor: "Customer" },
        { label: "OCR reads the fields", actor: "System", detail: "Name, ID number and other key fields" },
        { label: "Image checks", actor: "System", detail: "Image recognition on the document" },
        { label: "Match against the form", actor: "System", detail: "Extracted fields compared with what the customer entered", branch: "Mismatch or low confidence: sent to a reviewer" },
        { label: "Verified", actor: "System", detail: "Customer continues onboarding" },
      ],
    },
    wireframes: {
      // CONFIRM: illustrative screens, not the production UI
      intro: "Illustrative low-fidelity screens, not the production interface.",
      frames: [
        {
          title: "Reviewer queue",
          note: "Only documents the system was unsure about reach this list, with the reason shown.",
          blocks: [
            { kind: "title", label: "Needs review (12)" },
            { kind: "rows", rows: [["Doc 1042", "Name mismatch"], ["Doc 1043", "Blurry image"], ["Doc 1047", "Field missing"]] },
            { kind: "button", label: "Open next", tone: "primary" },
          ],
        },
        {
          title: "Review a document",
          note: "Extracted fields sit next to the form values, so the reviewer decides in seconds.",
          blocks: [
            { kind: "image", label: "Document image" },
            { kind: "rows", rows: [["Name (OCR)", "Matches form"], ["ID number", "******4821"], ["Confidence", "Low"]] },
            { kind: "buttons", labels: ["Approve", "Reject"] },
          ],
        },
      ],
    },
    sketches: [],
    architecture: {
      intro: "A generalised view of the pipeline.",
      layers: [
        { name: "Input", nodes: [{ label: "Document upload", detail: "From the onboarding flow" }] },
        {
          name: "Processing",
          nodes: [
            { label: "Image preprocessing" },
            { label: "OCR", detail: "Field extraction" },
            { label: "Image recognition", detail: "Document checks" },
          ],
        },
        { name: "Decision", nodes: [{ label: "Validation rules", detail: "Compare with form data" }, { label: "Confidence threshold" }] },
        { name: "Output", nodes: [{ label: "Auto-verified" }, { label: "Reviewer queue" }] },
      ],
    },
    decisions: [
      {
        problem: "Unclear whether automation would hold up on real documents",
        choice: "Validate a proof of concept with users first",
        alternative: "Build the full tool straight away",
        why: "A small test showed what worked before committing engineering time.",
      },
      {
        problem: "More feature ideas than time",
        choice: "Rank features by value against effort",
        alternative: "Build in the order requests arrived",
        why: "Kept the first release focused on what removed the most delay.",
      },
      {
        problem: "Leadership needed to trust the model's output",
        choice: "Explain model output in plain language with analytics",
        alternative: "Share accuracy numbers only",
        why: "People adopt a tool they understand; explanations made the rollout decision easier.",
      },
      {
        // CONFIRM: inferred decision
        problem: "A wrong automatic decision on an ID is costly",
        choice: "Send uncertain documents to a person",
        alternative: "Auto-decide every document",
        why: "Automating the clear cases captures most of the time saved without risking bad approvals.",
      },
    ],
    outcome: {
      points: [
        "Onboarding delays cut by 70%",
        "Shipped to production, one of two solutions from the internship that did",
        "Analytics insights and model explanations delivered to leadership",
      ],
      shots: [],
    },
    next: [
      // CONFIRM: inferred next steps
      "Track reviewer overrides to find where the model needs improving",
      "Extend support to more document types",
    ],
  },
];

export const findCaseStudy = (slug: string | undefined) => caseStudies.find((c) => c.slug === slug);
