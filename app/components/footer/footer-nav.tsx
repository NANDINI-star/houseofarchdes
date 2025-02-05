import { FooterNavItem } from "./footer-nav-item";

interface FooterNavProps {
  title: string;
  items: Array<{
    href: string;
    label: string;
  }>
}

export function FooterNav({ title, items }: FooterNavProps) {
  return (
    <div className="space-y-3">
      <h3 className="text-sm font-medium">{title}</h3>
      <ul className="space-y-2">
        {items.map((item) => (
          <li key={item.href}>
            <FooterNavItem href={item.href}>{item.label}</FooterNavItem>
          </li>
        ))}
      </ul>
    </div>
  );
}