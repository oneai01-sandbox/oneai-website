import type { Metadata } from "next";

import { PlaceholderPage } from "@/components/common/PlaceholderPage";
import { createPageMetadata } from "@/config/site";

export const metadata: Metadata = createPageMetadata(
  "Case Studies",
  "Explore the industrial environments where ONE AI edge intelligence can be applied.",
);

export default function CaseStudiesPage() {
  return (
    <PlaceholderPage
      eyebrow="Case studies"
      title="Applications in the real world"
      description="Industry-specific case study content will be added here as verified examples become available."
    />
  );
}
