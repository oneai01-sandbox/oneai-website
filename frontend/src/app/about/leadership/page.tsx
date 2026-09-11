import type { Metadata } from "next";

import { PlaceholderPage } from "@/components/common/PlaceholderPage";
import { createPageMetadata } from "@/config/site";

export const metadata: Metadata = createPageMetadata("Leadership");

export default function LeadershipPage() {
  return (
    <PlaceholderPage
      eyebrow="About / Leadership"
      title="Leadership"
      description="Leadership information will be published here when the content is ready."
    />
  );
}
