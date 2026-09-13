import type { Metadata } from "next";

import { CaseStudiesOverview } from "@/components/home/CaseStudiesOverview/CaseStudiesOverview";
import { createPageMetadata } from "@/config/site";

export const metadata: Metadata = createPageMetadata(
  "Case Studies",
  "Explore the industrial environments where ONE AI edge intelligence can be applied.",
);

export default function CaseStudiesPage() {
  return <CaseStudiesOverview headingLevel="h1" />;
}
