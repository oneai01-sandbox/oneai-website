import type { Metadata } from "next";

import { PlaceholderPage } from "@/components/common/PlaceholderPage";
import { createPageMetadata } from "@/config/site";

export const metadata: Metadata = createPageMetadata("Partners & Alliances");

export default function PartnersPage() {
  return (
    <PlaceholderPage
      eyebrow="About / Partners & Alliances"
      title="Partners & Alliances"
      description="Information about ONE AI partnerships and alliances will be added here."
    />
  );
}
