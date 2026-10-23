import { useState, type FormEvent } from "react";
import { ArrowUpRight, Check, Copy, FileText, Github, Linkedin, Send } from "lucide-react";
import { site } from "@/content/site";
import { emailjsConfig } from "./contactConfig";

type Status = "idle" | "sending" | "sent" | "error";

const field =
  "w-full rounded-xl border border-line-strong bg-bg px-4 py-3 text-[15px] text-text placeholder:text-subtle transition-colors focus:border-accent focus:outline-none";

const links = [
  { label: "LinkedIn", href: site.links.linkedin, Icon: Linkedin },
  { label: "GitHub", href: site.links.github, Icon: Github },
  { label: "Resume", href: site.resumeUrl, Icon: FileText },
];

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [copied, setCopied] = useState(false);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    // Hidden field that only bots fill in. Pretend it worked and send nothing.
    if (data.get("company")) {
      setStatus("sent");
      return;
    }

    const name = String(data.get("name")).trim();
    const email = String(data.get("email")).trim();
    const message = String(data.get("message")).trim();

    setStatus("sending");
    try {
      // Loaded only when someone actually sends a message, to keep the page light.
      const { default: emailjs } = await import("@emailjs/browser");
      await emailjs.send(
        emailjsConfig.serviceId,
        emailjsConfig.templateId,
        { user_name: name, user_email: email, message, from_name: name, from_email: email, reply_to: email },
        { publicKey: emailjsConfig.publicKey },
      );
      form.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(site.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${site.email}`;
    }
  }

  return (
    <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
      <div>
        <p className="font-mono text-xs tracking-widest text-subtle uppercase">Email</p>
        <div className="mt-2 flex flex-wrap items-center gap-3">
          <a href={`mailto:${site.email}`} className="inline-flex min-h-11 items-center text-lg font-medium break-all text-text hover:text-accent-strong sm:text-xl">
            {site.email}
          </a>
          <button
            type="button"
            onClick={copyEmail}
            className="inline-flex min-h-9 items-center gap-1.5 rounded-full border border-line px-3 text-xs text-muted transition-colors hover:border-accent hover:text-accent-strong"
          >
            {copied ? <Check size={14} aria-hidden /> : <Copy size={14} aria-hidden />}
            {copied ? "Copied" : "Copy"}
          </button>
        </div>
        <p className="mt-6 max-w-sm text-sm leading-relaxed text-muted">
          Based in India. Write about full-time roles, internships or a project you want a second pair of hands on.
        </p>
        <ul className="mt-8 divide-y divide-line border-y border-line">
          {links.map(({ label, href, Icon }) => (
            <li key={label}>
              <a
                href={href}
                target="_blank"
                rel="noreferrer"
                className="group flex min-h-14 items-center justify-between text-muted transition-colors hover:text-text"
              >
                <span className="flex items-center gap-3">
                  <Icon size={18} aria-hidden /> {label}
                </span>
                <ArrowUpRight size={16} aria-hidden className="text-subtle group-hover:text-accent-strong" />
              </a>
            </li>
          ))}
        </ul>
      </div>

      <form onSubmit={onSubmit} className="relative rounded-(--radius-card) border border-line bg-surface p-6 sm:p-8">
        <div className="grid gap-5 sm:grid-cols-2">
          <label className="block">
            <span className="mb-2 block text-sm text-muted">Name</span>
            <input name="name" required autoComplete="name" maxLength={100} className={field} placeholder="Your name" />
          </label>
          <label className="block">
            <span className="mb-2 block text-sm text-muted">Email</span>
            <input name="email" type="email" required autoComplete="email" maxLength={200} className={field} placeholder="you@company.com" />
          </label>
        </div>
        <label className="mt-5 block">
          <span className="mb-2 block text-sm text-muted">Message</span>
          <textarea
            name="message"
            required
            minLength={10}
            maxLength={4000}
            rows={5}
            className={`${field} resize-y`}
            placeholder="The role, the team, or what you would like to talk about"
          />
        </label>
        {/* Honeypot: hidden from people and screen readers, visible to simple bots */}
        <div aria-hidden className="absolute -left-[9999px] h-px w-px overflow-hidden">
          <label>
            Company <input name="company" tabIndex={-1} autoComplete="off" />
          </label>
        </div>

        <div className="mt-6 flex flex-wrap items-center gap-4">
          <button
            type="submit"
            disabled={status === "sending"}
            className="inline-flex min-h-11 items-center gap-2 rounded-full bg-accent px-6 text-sm font-medium text-accent-ink transition-colors hover:bg-accent-strong disabled:opacity-60"
          >
            <Send size={16} aria-hidden /> {status === "sending" ? "Sending..." : "Send message"}
          </button>
          <p role="status" aria-live="polite" className="text-sm">
            {status === "sent" && <span className="text-accent-strong">Thanks, your message is on its way. I will reply soon.</span>}
            {status === "error" && (
              <span className="text-leadership">
                Could not send right now. Please email me at{" "}
                <a className="underline" href={`mailto:${site.email}`}>
                  {site.email}
                </a>
                .
              </span>
            )}
          </p>
        </div>
      </form>
    </div>
  );
}
