import type { Metadata } from "next";

import { PlaceholderPage } from "@/components/common/PlaceholderPage";
import { createPageMetadata } from "@/config/site";

export const metadata: Metadata = createPageMetadata("Contact Us");

export default function ContactPage() {
  return (
    <PlaceholderPage
      eyebrow="Support / Contact Us"
      title="Contact Us"
      description="Contact details and an inquiry path will be added here."
    />
  );
}
