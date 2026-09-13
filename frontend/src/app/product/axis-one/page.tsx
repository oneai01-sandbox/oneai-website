import type { Metadata } from "next";

import { AxisOnePage } from "@/components/product/AxisOnePage/AxisOnePage";
import { createPageMetadata } from "@/config/site";

export const metadata: Metadata = createPageMetadata(
  "AXIS ONE",
  "Industrial intelligence, built at the edge.",
);

export default function AxisOneRoute() {
  return <AxisOnePage />;
}
