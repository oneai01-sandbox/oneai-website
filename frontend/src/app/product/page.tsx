import type { Metadata } from "next";

import { PlaceholderPage } from "@/components/common/PlaceholderPage";
import { createPageMetadata } from "@/config/site";

export const metadata: Metadata = createPageMetadata(
  "Product",
  "Explore ONE AI product architecture and industrial edge AI capabilities.",
);

export default function ProductPage() {
  return (
    <PlaceholderPage
      eyebrow="Product"
      title="Industrial intelligence, at the edge."
      description="Explore Axis.ONE for an overview of the product architecture, capabilities, and deployment considerations."
    />
  );
}
