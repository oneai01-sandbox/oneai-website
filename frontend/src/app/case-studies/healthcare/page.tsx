import type { Metadata } from "next";

import { HealthcarePage } from "@/components/case-studies/HealthcarePage/HealthcarePage";
import { createPageMetadata } from "@/config/site";

export const metadata: Metadata = createPageMetadata(
  "Healthcare Intelligence",
  "ONE AI Healthcare supports medical teams by connecting patient records, voice-based inputs, and AI-assisted documentation into a more efficient clinical workflow.",
);

export default function HealthcareRoute() {
  return <HealthcarePage />;
}
