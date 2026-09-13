import type { Metadata } from "next";

import { PlaceholderPage } from "@/components/common/PlaceholderPage";
import { PartnerCards } from "@/components/about/PartnersPage/sections/PartnerCards";
import { createPageMetadata } from "@/config/site";

import styles from "./page.module.css";

export const metadata: Metadata = createPageMetadata("Partners & Alliances");

export default function PartnersPage() {
  return (
    <>
      <PlaceholderPage
        className={styles.page}
        eyebrow="About / Partners & Alliances"
        title="Partners & Alliances"
        description="Collaborating with global technology leaders and industry pioneers to build a unified, high-performance edge AI ecosystem."
      />
      <PartnerCards />
    </>
  );
}