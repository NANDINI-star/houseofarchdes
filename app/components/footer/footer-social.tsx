import { Github, Twitter, Linkedin, Facebook } from "lucide-react";

const socialLinks = [
  { href: "https://twitter.com", icon: Twitter, label: "Twitter" },
  { href: "https://github.com", icon: Github, label: "GitHub" },
  { href: "https://linkedin.com", icon: Linkedin, label: "LinkedIn" },
  { href: "https://facebook.com", icon: Facebook, label: "Facebook" },
];

export function FooterSocial() {
  return (
    <div className="flex space-x-6">
      {socialLinks.map(({ href, icon: Icon, label }) => (
        <a
          key={href}
          href={href}
          className="text-muted-foreground hover:text-primary transition-colors"
          target="_blank"
          rel="noreferrer"
        >
          <span className="sr-only">{label}</span>
          <Icon className="h-5 w-5" />
        </a>
      ))}
    </div>
  );
}