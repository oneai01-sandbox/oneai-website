import Image from "next/image";

import { Container } from "@/components/common/Container";

import styles from "./CompanyIntro.module.css";

export function CompanyIntro() {
  return (
    <section className={styles.section} aria-labelledby="company-intro-title">
      <div className={styles.background} aria-hidden="true">
        <Image
          className={styles.backgroundImage}
          src="/assets/01_about/about-oneai-brand-bg.png"
          alt=""
          fill
          priority
          sizes="100vw"
        />
      </div>

      <Container className={styles.inner}>
        <div className={styles.plaqueStage}>
          <div className={styles.plaque}>
            <Image
              className={styles.plaqueImage}
              src="/assets/01_about/about-oneai-brand.png"
              alt=""
              width={1254}
              height={1254}
              priority
            />

            <div className={styles.logoLayer}>
              <span className={styles.logoGlow} />
              <Image
                className={styles.logo}
                src="/one-ai-logo-ver1.png"
                alt=""
                width={1280}
                height={669}
                priority
              />
              <span className={styles.logoSheen} aria-hidden="true" />
            </div>
          </div>
        </div>

        <div className={styles.copy}>
          <h1 className={styles.title} id="company-intro-title">
            ONE AI
          </h1>
          <p className={styles.description}>
            Introducing ONE AI, <br></br>
            the only domestic company with full-stack <br></br>
            On-Device Physical AI, <br></br> and one of Asia’s fastest-growing industrial
            edge AI companies.
          </p>
        </div>
      </Container>
    </section>
  );
}
