import Image from "next/image";
import Link from "next/link";

import { Container } from "@/components/common/Container";

import styles from "./CaseStudiesOverview.module.css";

const caseStudies = [
  {
    number: "01",
    label: "Robotics",
    description:
      "Enable robots to perceive, decide, and respond to changing environments in real time.",
    image: "/assets/03_case-studies/case-study-01.png",
    href: "/case-studies/robotics",
  },
  {
    number: "02",
    label: "Smart Factory",
    description:
      "Connect machines, vision, and automation to keep production precise, adaptive, and moving.",
    image: "/assets/03_case-studies/case-study-02.png",
    href: "/case-studies/smart-factory",
  },
  {
    number: "03",
    label: "Industrial Safety",
    description:
      "Detect emerging risks earlier and enable faster action before incidents disrupt operations.",
    image: "/assets/03_case-studies/case-study-03.png",
    href: "/case-studies/industrial-safety",
  },
  {
    number: "04",
    label: "Healthcare",
    description:
      "Streamline complex healthcare workflows with fast, reliable intelligence at the edge.",
    image: "/assets/03_case-studies/case-study-04.png",
    href: "/case-studies/healthcare",
  },
];

interface CaseStudiesOverviewProps {
  headingLevel?: "h1" | "h2";
}

export function CaseStudiesOverview({
  headingLevel = "h2",
}: CaseStudiesOverviewProps) {
  const Title = headingLevel;

  return (
    <section
      className={`${styles.section} ${headingLevel === "h1" ? styles.page : ""}`}
      aria-labelledby="case-studies-title"
    >
      <Container>
        <div className={styles.heading}>
          <p className={styles.eyebrow}>Case studies</p>
          <div>
            <Title className={styles.title} id="case-studies-title">
              <span>Built for</span>
              <span>real-world impact.</span>
            </Title>
            <p>
              Explore how ONE AI brings real-time intelligence to machines,
              operations, and critical workflows.
            </p>
          </div>
        </div>
        <ul className={styles.list}>
          {caseStudies.map((study) => (
            <li key={study.href}>
              <Link className={styles.card} href={study.href}>
                <div className={styles.imageFrame}>
                  <Image
                    className={styles.image}
                    src={study.image}
                    alt={`${study.label} case study`}
                    fill
                    sizes="(max-width: 34rem) 100vw, (max-width: 52rem) 50vw, 25vw"
                  />
                </div>
                <div className={styles.cardContent}>
                  <div className={styles.cardMeta}>
                    <span className={styles.index}>{study.number}</span>
                    <span className={styles.arrow} aria-hidden="true">
                      ↗
                    </span>
                  </div>
                  <h3>{study.label}</h3>
                  <p>{study.description}</p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
