import type { Metadata } from "next";

import { PlaceholderPage } from "@/components/common/PlaceholderPage";
import { createPageMetadata } from "@/config/site";

export const metadata: Metadata = createPageMetadata(
  "Request a Demo",
  "Contact ONE AI to request an introduction to our industrial edge AI platform.",
);

export default function RequestDemoPage() {
  return (
    <PlaceholderPage
      eyebrow="Request a Demo"
      title="See what edge intelligence can do."
      description="A demo request flow will be connected to the ONE AI backend in a future release. No form submission is active yet."
    />
  );
}
