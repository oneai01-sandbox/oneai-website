import type { Metadata } from "next";

import { PlaceholderPage } from "@/components/common/PlaceholderPage";
import { createPageMetadata } from "@/config/site";

export const metadata: Metadata = createPageMetadata("Technical Support");

export default function TechnicalSupportPage() {
  return (
    <PlaceholderPage
      eyebrow="Support / Technical Support"
      title="Technical Support"
      description="Technical support guidance and resources will be published here."
    />
  );
}
