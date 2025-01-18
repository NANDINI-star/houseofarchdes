"use client";

import Link from "next/link";
import { cn } from "../../libs/utils";

interface FooterNavItemProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export function FooterNavItem({ href, children, className }: FooterNavItemProps) {
  return (
    <Link
      href={href}
      className={cn(
        "text-sm text-muted-foreground transition-colors hover:text-primary",
        className
      )}
    >
      {children}
    </Link>
  );
}