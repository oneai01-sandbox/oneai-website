import Link from "next/link";

import { Container } from "@/components/common/Container";

import styles from "./AxisOnePage.module.css";

const sections = [
  {
    id: "overview",
    eyebrow: "01 / Overview",
    title: "Axis ONE",
    description:
      "A placeholder product overview for CPU-powered industrial edge AI. Confirmed product information will be added here in a future release.",
  },
  {
    id: "architecture",
    eyebrow: "02 / Architecture",
    title: "One Architecture",
    description:
      "This section will describe the Axis ONE architecture and how intelligence is organized at the edge.",
  },
  {
    id: "capabilities",
    eyebrow: "03 / Core Capabilities",
    title: "Core Capabilities",
    description:
      "Placeholder themes include no cloud, no GPU, cost efficiency, fast on-site processing, and data security. No performance claims are made at this stage.",
  },
  {
    id: "deployment",
    eyebrow: "04 / Deployment",
    title: "Deployment",
    description:
      "This section will outline deployment considerations for industrial environments once the implementation details are confirmed.",
  },
] as const;

export function AxisOnePage() {
  return (
    <div className={styles.page}>
      <div className={styles.progress} aria-hidden="true" />
      {sections.map((section, index) => {
        const Heading = index === 0 ? "h1" : "h2";

        return (
          <section className={styles.section} id={section.id} key={section.id}>
            <Container className={styles.sectionInner}>
              <p className={styles.eyebrow}>{section.eyebrow}</p>
              <div className={styles.copy}>
                <Heading>{section.title}</Heading>
                <p>{section.description}</p>
                {index === 0 && (
                  <Link className={styles.link} href="#architecture">
                    View architecture <span aria-hidden="true">↓</span>
                  </Link>
                )}
              </div>
            </Container>
          </section>
        );
      })}
    </div>
  );
}
