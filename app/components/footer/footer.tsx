import { FooterNav } from "./footer-nav";
import { FooterSocial } from "./footer-social";
import { FooterContact } from "./footer-contact";
import { FooterCopyright } from "./footer-copyright";
import { Laptop } from "lucide-react";

const company = [
  { href: "/home", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  // { href: "/careers", label: "Careers" },
];

const resources = [
  { href: "/projects", label: "Projects" },
  // { href: "/pinterest", label: "Pinterest" },
  // { href: "/guides", label: "Guides" },
];

const legal = [
  { href: "/privacy", label: "Privacy" },
  { href: "/terms", label: "Terms" },
  { href: "/cookies", label: "Cookies" },
];

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2">
              <Laptop className="h-6 w-6" />
              <h2 className="text-2xl font-bold">House Of ArchDes</h2>
            </div>
            <p className="mt-2 max-w-xs text-sm text-muted-foreground">
              Making the world a better place through personalized solutions.
            </p>
            <div className="mt-6">
              <FooterSocial />
            </div>
          </div>
          <FooterNav title="Company" items={company} />
          <FooterNav title="Resources" items={resources} />
          <FooterContact />
        </div>
      </div>
      <div className="border-t">
        {/* <div className="mx-auto max-w-7xl px-6 py-6 flex flex-col md:flex-row md:items-center md:justify-between lg:px-8">
          {/* <FooterCopyright /> */}
          {/* <div className="mt-4 flex space-x-6 md:mt-0">
            {legal.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div> */} 
      </div>
    </footer>
  );
}