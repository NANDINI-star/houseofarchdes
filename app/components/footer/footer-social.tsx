import { Instagram, Linkedin, Pin } from "lucide-react";

const socialLinks = [
  { href: "https://pin.it/4jAIiy0QX", icon: Pin, label: "Pinterest" },
  { href: "https://www.instagram.com/houseofarchdes/?igsh=bXpydW92OTh6a2g3&utm_source=qr", icon: Instagram, label: "Instagram" },
  { href: "https://www.linkedin.com/in/aastha-choudhary-70518220b", icon: Linkedin, label: "LinkedIn" },
  // { href: "https://facebook.com", icon: Facebook, label: "Facebook" },
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