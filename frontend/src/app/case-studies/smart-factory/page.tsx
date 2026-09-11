import type { Metadata } from "next";

import { PlaceholderPage } from "@/components/common/PlaceholderPage";
import { createPageMetadata } from "@/config/site";

export const metadata: Metadata = createPageMetadata("Smart Factory");

export default function SmartFactoryPage() {
  return (
    <PlaceholderPage
      eyebrow="Case studies / Smart Factory"
      title="Smart Factory"
      description="Verified smart factory applications and examples will be added here."
    />
  );
}
