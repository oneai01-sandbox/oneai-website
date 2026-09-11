import type { Metadata } from "next";

import { PlaceholderPage } from "@/components/common/PlaceholderPage";
import { createPageMetadata } from "@/config/site";

export const metadata: Metadata = createPageMetadata("Newsroom");

export default function NewsroomPage() {
  return (
    <PlaceholderPage
      eyebrow="About / Newsroom"
      title="Newsroom"
      description="News, announcements, and company updates will be published here."
    />
  );
}
