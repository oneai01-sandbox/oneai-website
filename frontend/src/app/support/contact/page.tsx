import type { Metadata } from "next";
import Link from "next/link";

import { PlaceholderPage } from "@/components/common/PlaceholderPage";
import { LocationSection } from "@/components/support/LocationSection";
import { createPageMetadata, siteRoutes } from "@/config/site";

import styles from "./page.module.css";

export const metadata: Metadata = createPageMetadata("Contact Us");

export default function ContactPage() {
  const isExternal = siteRoutes.contactForm.startsWith("http");

  return (
    <PlaceholderPage
      eyebrow="Support / Contact Us"
      title="Build the future with ONE AI"
      description="Connect with our edge intelligence experts to explore how ONE AI can transform your operations."
    >
      <div className={styles.actionArea}>
        <Link
          className={styles.button}
          href={siteRoutes.contactForm}
          target={isExternal ? "_blank" : undefined}
          rel={isExternal ? "noopener noreferrer" : undefined}
        >
          <span>Contact Us</span>
          <span className={styles.arrow} aria-hidden="true">
            →
          </span>
        </Link>
      </div>

      <LocationSection />
    </PlaceholderPage>
  );
}
