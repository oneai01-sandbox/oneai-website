import type { Metadata } from "next";

import { SmartFactoryPage } from "@/components/case-studies/SmartFactoryPage/SmartFactoryPage";
import { createPageMetadata } from "@/config/site";

export const metadata: Metadata = createPageMetadata(
  "Smart Factory Intelligence",
  "ONE AI brings vision intelligence to production lines, helping factories inspect products, monitor processes, and turn visual data into operational insight at the edge.",
);

export default function SmartFactoryRoute() {
  return <SmartFactoryPage />;
}
