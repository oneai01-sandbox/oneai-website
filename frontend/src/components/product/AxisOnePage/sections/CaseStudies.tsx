import Image from "next/image";
import Link from "next/link";

import { BrandName } from "@/components/common/BrandName";
import { Container } from "@/components/common/Container";

import styles from "./CaseStudies.module.css";

export function CaseStudies() {
  return (
    <section
      className={styles.section}
      aria-labelledby="axis-one-case-studies-title"
    >
      <div className={styles.visual} aria-hidden="true">
        <Image
          className={styles.image}
          src="/axisone-casestudies-bg.png"
          alt=""
          fill
          sizes="100vw"
        />
      </div>

      <Container className={styles.inner}>
        <div className={styles.copy}>
          <p className={styles.eyebrow}>Related Case Studies</p>
          <h2 id="axis-one-case-studies-title">
            <BrandName /> <br></br>in the field.
          </h2>
          <p className={styles.description}>
            Explore practical applications of <BrandName /> across key industries.
          </p>
          <Link className={styles.action} href="/case-studies">
            <span>Explore Case Studies</span>
            <span className={styles.arrow} aria-hidden="true">
              →
            </span>
          </Link>
        </div>
      </Container>
    </section>
  );
}
