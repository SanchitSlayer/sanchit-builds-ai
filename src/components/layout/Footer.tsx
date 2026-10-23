import { Github, Linkedin, Mail } from "lucide-react";
import { site } from "@/content/site";
import Container from "@/components/ui/Container";

const socials = [
  { label: "GitHub", href: site.links.github, Icon: Github },
  { label: "LinkedIn", href: site.links.linkedin, Icon: Linkedin },
  { label: "Email", href: `mailto:${site.email}`, Icon: Mail },
];

export default function Footer() {
  return (
    <footer className="border-t border-line py-10">
      <Container className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-subtle">
          {site.name}. Designed and built by hand.
        </p>
        <ul className="flex gap-2">
          {socials.map(({ label, href, Icon }) => (
            <li key={label}>
              <a
                href={href}
                target={href.startsWith("mailto:") ? undefined : "_blank"}
                rel="noreferrer"
                aria-label={label}
                className="inline-flex size-11 items-center justify-center rounded-full border border-line text-muted transition-colors hover:border-accent hover:text-accent-strong"
              >
                <Icon size={18} />
              </a>
            </li>
          ))}
        </ul>
      </Container>
    </footer>
  );
}
