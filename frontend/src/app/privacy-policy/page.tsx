import type { Metadata } from "next";

import { PlaceholderPage } from "@/components/common/PlaceholderPage";
import { createPageMetadata } from "@/config/site";

export const metadata: Metadata = createPageMetadata("Privacy Policy");

export default function PrivacyPolicyPage() {
  return (
    <PlaceholderPage
      eyebrow="Privacy Policy"
      title="Privacy Policy"
      description="ONE AI’s privacy policy will be published here."
    />
  );
}
