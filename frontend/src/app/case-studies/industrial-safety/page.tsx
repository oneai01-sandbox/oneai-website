import type { Metadata } from "next";

import { IndustrialSafetyPage } from "@/components/case-studies/IndustrialSafetyPage/IndustrialSafetyPage";
import { createPageMetadata } from "@/config/site";

export const metadata: Metadata = createPageMetadata(
  "Industrial Safety",
  "ONE AI applies edge-based vision intelligence to industrial safety, helping teams detect risks, monitor workers, and protect operations in real time.",
);

export default function IndustrialSafetyRoute() {
  return <IndustrialSafetyPage />;
}
