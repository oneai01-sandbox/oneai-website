import type { Metadata } from "next";

import { AxisOnePage } from "@/components/product/AxisOnePage/AxisOnePage";
import { createPageMetadata } from "@/config/site";

export const metadata: Metadata = createPageMetadata(
  "Axis ONE",
  "An overview of Axis ONE, a placeholder for ONE AI industrial edge AI capabilities and deployment.",
);

export default function AxisOneRoute() {
  return <AxisOnePage />;
}
