import type { Metadata } from "next";

import { PlaceholderPage } from "@/components/common/PlaceholderPage";
import { createPageMetadata } from "@/config/site";

export const metadata: Metadata = createPageMetadata("Healthcare");

export default function HealthcarePage() {
  return (
    <PlaceholderPage
      eyebrow="Case studies / Healthcare"
      title="Healthcare"
      description="Verified healthcare applications and examples will be added here."
    />
  );
}
