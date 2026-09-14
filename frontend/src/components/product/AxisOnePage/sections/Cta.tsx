import Link from "next/link";

import { BrandName } from "@/components/common/BrandName";
import { Container } from "@/components/common/Container";
import { siteRoutes } from "@/config/site";

import styles from "./Cta.module.css";

export function Cta() {
  return (
    <section className={styles.section} aria-labelledby="axis-one-cta-title">
      <Container className={styles.inner}>
        <div className={styles.heading}>
          <h2 id="axis-one-cta-title">
            Build your edge AI operation with <BrandName />.
          </h2>
        </div>

        <div className={styles.actionGroup}>
          <p>
            Connect intelligence, devices, and industrial workflows in one
            architecture.
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
