// Site-wide facts. Edit text here, not inside components.

export const site = {
  name: "Sanchit Garg",
  initials: "SG",
  role: "Product builder who ships AI tools to production",
  // Default page title and description (also in index.html for the first load)
  title: "Sanchit Garg | Product builder, AI tools in production | IIT Jodhpur",
  description:
    "Sanchit Garg, IIT Jodhpur '27. Product builder who ships AI tools: an OCR eKYC tool that cut onboarding delays by 70% and a B2B intent analyzer that cut lead qualification time by 60%.",
  email: "sanchitgarg343@gmail.com",
  resumeUrl:
    "https://drive.google.com/file/d/1Wc-xHjlxF1nEV2uWUdRdWO43pPnzav5u/view?usp=sharing",
  links: {
    github: "https://github.com/SanchitSlayer",
    linkedin: "https://www.linkedin.com/in/sanchit-garg-791921286/",
  },
};

export type NavItem = { id: string; label: string };

// Order here is the order of sections on the page.
export const sections: NavItem[] = [
  { id: "about", label: "About" },
  { id: "agents", label: "AI & Automation" },
  { id: "work", label: "Work" },
  { id: "experience", label: "Experience" },
  { id: "achievements", label: "Achievements" },
  { id: "contact", label: "Contact" },
];
