"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState, type ReactNode } from "react";

import { BrandName } from "@/components/common/BrandName";
import { Container } from "@/components/common/Container";

import styles from "./ProductOverview.module.css";

const objects = [
  {
    name: "One Architecture",
    label: ["ONE", "ARCHITECTURE"],
    explanation:
      "One platform. Every edge.\nConnect and scale AI across\ndevices, systems, and industries.",
    className: styles.architecture,
  },
  {
    name: "No Cloud",
    label: ["NO", "CLOUD"],
    explanation:
      "Bring AI into secure,\nclosed-network environments—\nwhile keeping critical data on site.",
    className: styles.cloud,
  },
  {
    name: "No GPU",
    label: ["NO", "GPU"],
    explanation:
      "Run AI on the CPUs and PCs\nalready on site—and reduce\ninfrastructure costs from day one.",
    className: styles.gpu,
  },
];

type ProductOverviewProps = {
  title?: ReactNode;
  headingId?: string;
  sectionId?: string;
  showLink?: boolean;
  stackedTitle?: boolean;
};

export function ProductOverview({
  title = <BrandName />,
  headingId = "product-overview-title",
  sectionId,
  showLink = true,
  stackedTitle = false,
}: ProductOverviewProps) {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) {
      return;
    }

    if (typeof IntersectionObserver === "undefined") {
      const frame = window.requestAnimationFrame(() => setIsVisible(true));

      return () => window.cancelAnimationFrame(frame);
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];

        setIsVisible(Boolean(entry?.isIntersecting));
      },
      { threshold: 0.3 },
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`${styles.section} ${isVisible ? styles.isVisible : ""}`}
      id={sectionId}
      aria-labelledby={headingId}
    >
      <Container
        className={`${styles.container} ${stackedTitle ? styles.containerStacked : ""}`.trim()}
      >
        <div className={`${styles.copy} ${stackedTitle ? styles.copyStacked : ""}`.trim()}>
          <p className={styles.eyebrow}>PRODUCT</p>
          <h2
            className={stackedTitle ? styles.stackedTitle : undefined}
            id={headingId}
          >
            {title}
          </h2>
          <p className={styles.tagline}>
            <span>Industrial intelligence,</span>
            <span>built at the edge.</span>
          </p>
          {showLink ? (
            <Link className={styles.link} href="/product/axis-one">
              <span>
                Discover <BrandName />
              </span>
              <span className={styles.arrow} aria-hidden="true">
                →
              </span>
            </Link>
          ) : null}
        </div>

        <div
          className={styles.visual}
          role="group"
          aria-label="Axis.ONE platform principles"
        >
          {objects.map((object) => (
            <div
              className={`${styles.object} ${object.className}`}
              key={object.name}
              role="img"
              aria-label={`${object.name}: ${object.explanation}`}
            >
              <div className={styles.objectFloat}>
                <div
                  className={styles.assetFrame}
                  data-asset-slot={object.name}
                >
                  <Image
                    className={styles.objectImage}
                    src="/axisone-each.png"
                    alt=""
                    fill
                    sizes="(max-width: 52rem) 50vw, 34vw"
                    aria-hidden="true"
                  />
                </div>
                <span className={styles.objectLabel}>
                  {object.label.map((line) => (
                    <span key={line}>{line}</span>
                  ))}
                </span>
                <span className={styles.objectExplanation}>
                  {object.explanation}
                </span>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
