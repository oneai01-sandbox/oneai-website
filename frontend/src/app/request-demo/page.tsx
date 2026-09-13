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
      description="We deliver site-specific demonstrations tailored to your industrial requirements. 
                    Please get in touch with our team via the Contact Us below."
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
