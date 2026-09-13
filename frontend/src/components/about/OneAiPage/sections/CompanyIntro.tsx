import Image from "next/image";

import { Container } from "@/components/common/Container";

import styles from "./CompanyIntro.module.css";

export function CompanyIntro() {
  return (
    <section className={styles.section} aria-labelledby="company-intro-title">
      <Container>
        <div className={styles.content}>
          <p className={styles.eyebrow}>About / ONE AI</p>
          <h1 className={styles.title} id="company-intro-title">
            <Image
              className={styles.logo}
              src="/one-ai-logo-ver1.png"
              alt="ONE AI"
              width={480}
              height={160}
              priority
              style={{ width: "auto", height: "auto" }}
            />
          </h1>
          <p className={styles.description}>
            Introducing ONE AI, the only domestic company with full-stack On-Device Physical AI, and one of Asia’s fastest-growing industrial edge AI companies.
          </p>
        </div>
      </Container>
    </section>
  );
}
