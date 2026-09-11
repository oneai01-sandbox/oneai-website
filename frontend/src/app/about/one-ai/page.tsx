import type { Metadata } from "next";

import { PlaceholderPage } from "@/components/common/PlaceholderPage";
import { createPageMetadata } from "@/config/site";

export const metadata: Metadata = createPageMetadata("ONE AI");

export default function OneAiPage() {
  return (
    <PlaceholderPage
      eyebrow="About / ONE AI"
      title="ONE AI"
      description="Company information and a clear introduction to ONE AI will be added here."
    />
  );
}
