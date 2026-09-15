import Image from "next/image";

import { BrandName } from "@/components/common/BrandName";
import { Container } from "@/components/common/Container";

import styles from "./Hero.module.css";

export function Hero() {
  return (
    <section className={styles.section} aria-labelledby="axis-one-title">
      <div className={styles.visual} aria-hidden="true">
        <Image
          className={styles.image}
          src="/assets/02_product/axisone-abstract.png"
          alt=""
          fill
          priority
          sizes="100vw"
        />
      </div>

      <Container className={styles.inner}>
        <div className={styles.copy}>
          <h1 className={styles.title} id="axis-one-title">
            <BrandName />
          </h1>
          <p className={styles.tagline}>
            <span>Industrial intelligence,</span>
            <span>built at the edge.</span>
          </p>
        </div>
      </Container>
    </section>
  );
}
