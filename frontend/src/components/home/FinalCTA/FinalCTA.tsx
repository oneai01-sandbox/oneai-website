import Link from "next/link";

import { BrandName } from "@/components/common/BrandName";
import { Container } from "@/components/common/Container";
import { siteRoutes } from "@/config/site";

import styles from "./FinalCTA.module.css";

export function FinalCTA() {
  return (
    <section className={styles.section} aria-labelledby="final-cta-title">
      <Container className={styles.inner}>
        <div className={styles.heading}>
          <p className={styles.eyebrow}>Start a Conversation</p>
          <h2 id="final-cta-title">Bring intelligence closer to your operation.</h2>
        </div>

        <div className={styles.actionGroup}>
          <p>
            See how <BrandName /> brings secure, real-time AI to your existing
            operation—without cloud or GPU infrastructure.
          </p>
          <Link className={styles.action} href={siteRoutes.requestDemo}>
            <span>Request a Demo</span>
            <span className={styles.actionLine} aria-hidden="true" />
            <span className={styles.arrow} aria-hidden="true">
              →
            </span>
          </Link>
        </div>
      </Container>
    </section>
  );
}
