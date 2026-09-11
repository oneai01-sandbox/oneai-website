import type { Metadata } from "next";

import { PlaceholderPage } from "@/components/common/PlaceholderPage";
import { createPageMetadata } from "@/config/site";

export const metadata: Metadata = createPageMetadata(
  "About",
  "Learn more about ONE AI and the people and relationships behind our work.",
);

export default function AboutPage() {
  return (
    <PlaceholderPage
      eyebrow="About"
      title="About ONE AI"
      description="This area will introduce ONE AI, its leadership, partners, and newsroom as content becomes available."
    />
  );
}
