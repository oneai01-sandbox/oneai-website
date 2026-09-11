import Link from "next/link";

import { Container } from "@/components/common/Container";

import styles from "./HomeCta.module.css";

export function HomeCta() {
  return (
    <section className={styles.section} aria-labelledby="home-cta-title">
      <Container className={styles.inner}>
        <div>
          <p className={styles.eyebrow}>Start a conversation</p>
          <h2 id="home-cta-title">Bring intelligence closer to the work.</h2>
        </div>
        <Link className={styles.action} href="/request-demo">
          Request a Demo <span aria-hidden="true">→</span>
        </Link>
      </Container>
    </section>
  );
}
