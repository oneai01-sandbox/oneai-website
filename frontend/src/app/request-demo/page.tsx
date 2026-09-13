import type { Metadata } from "next";
import Link from "next/link";

import { PlaceholderPage } from "@/components/common/PlaceholderPage";
import { createPageMetadata, siteRoutes } from "@/config/site";

import styles from "./page.module.css";

export const metadata: Metadata = createPageMetadata(
  "Request a Demo",
  "Contact ONE AI to request an introduction to our industrial edge AI platform.",
);

export default function RequestDemoPage() {
  return (
    <PlaceholderPage
      className={styles.page}
      eyebrow="Request a Demo"
      title="See what edge intelligence can do."
      description="A demo request flow will be connected to the ONE AI backend in a future release. No form submission is active yet."
    >
      <div className={styles.actionArea}>
        <Link className={styles.button} href={siteRoutes.contact}>
          <span>Contact Us for Demo</span>
          <span className={styles.arrow} aria-hidden="true">
            →
          </span>
        </Link>
      </div>
    </PlaceholderPage>
  );
}
