import type { Metadata } from "next";

import { PlaceholderPage } from "@/components/common/PlaceholderPage";
import { createPageMetadata } from "@/config/site";

export const metadata: Metadata = createPageMetadata("Robotics");

export default function RoboticsPage() {
  return (
    <PlaceholderPage
      eyebrow="Case studies / Robotics"
      title="Robotics"
      description="Verified robotics applications and examples will be added here."
    />
  );
}
