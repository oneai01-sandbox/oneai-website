import type { Metadata } from "next";

import { PlaceholderPage } from "@/components/common/PlaceholderPage";
import { createPageMetadata } from "@/config/site";

export const metadata: Metadata = createPageMetadata(
  "Support",
  "Find contact and technical support information for ONE AI.",
);

export default function SupportPage() {
  return (
    <PlaceholderPage
      eyebrow="Support"
      title="We are here to help."
      description="Contact and technical support resources will be organized here as they become available."
    />
  );
}
