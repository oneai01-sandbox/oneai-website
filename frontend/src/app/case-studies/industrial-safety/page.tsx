import type { Metadata } from "next";

import { PlaceholderPage } from "@/components/common/PlaceholderPage";
import { createPageMetadata } from "@/config/site";

export const metadata: Metadata = createPageMetadata("Industrial Safety");

export default function IndustrialSafetyPage() {
  return (
    <PlaceholderPage
      eyebrow="Case studies / Industrial Safety"
      title="Industrial Safety"
      description="Verified industrial safety applications and examples will be added here."
    />
  );
}
