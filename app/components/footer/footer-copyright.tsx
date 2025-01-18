export function FooterCopyright() {
  return (
    <p className="text-sm leading-5 text-muted-foreground">
      &copy; {new Date().getFullYear()} Your Company. All rights reserved.
    </p>
  );
}