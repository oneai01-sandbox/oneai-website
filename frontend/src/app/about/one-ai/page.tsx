import type { Metadata } from "next";

import { OneAiPage } from "@/components/about/OneAiPage/OneAiPage";
import { createPageMetadata } from "@/config/site";

export const metadata: Metadata = createPageMetadata(
  "ONE AI",
  "Introducing ONE AI, the only domestic company with full-stack On-Device Physical AI, and one of Asia’s fastest-growing industrial edge AI companies.",
);

export default function AboutOneAiRoute() {
  return <OneAiPage />;
}
