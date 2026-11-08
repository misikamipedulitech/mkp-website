import { siteConfig } from "@/lib/site-config";

type ContactMessage = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

// Builds a mailto: link to the MKP inbox with the form content prefilled.
export function buildContactMailto({
  name,
  email,
  subject,
  message,
}: ContactMessage) {
  const body = `Name: ${name.trim()}\nEmail: ${email.trim()}\n\n${message.trim()}`;

  return `mailto:${siteConfig.contactEmail}?subject=${encodeURIComponent(subject.trim())}&body=${encodeURIComponent(body)}`;
}
