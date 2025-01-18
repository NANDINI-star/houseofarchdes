import { Mail, MapPin, Phone } from "lucide-react";

export function FooterContact() {
  return (
    <div className="space-y-3">
      <h3 className="text-sm font-medium">Contact Us</h3>
      <ul className="space-y-3">
        <li className="flex items-center space-x-3 text-sm text-muted-foreground">
          <Mail className="h-4 w-4" />
          <span>contact@example.com</span>
        </li>
        <li className="flex items-center space-x-3 text-sm text-muted-foreground">
          <Phone className="h-4 w-4" />
          <span>+1 (555) 123-4567</span>
        </li>
        <li className="flex items-center space-x-3 text-sm text-muted-foreground">
          <MapPin className="h-4 w-4" />
          <span>123 Business Street<br />New York, NY 10001</span>
        </li>
      </ul>
    </div>
  );
}