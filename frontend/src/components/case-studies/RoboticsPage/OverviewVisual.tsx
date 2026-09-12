"use client";

import Image from "next/image";
import { useEffect, useRef, useState, type CSSProperties } from "react";

import styles from "./RoboticsPage.module.css";

export type OverviewAnnotation = {
  id: string;
  marker: string;
  title: string;
  description: string;
  className: string;
};

export function OverviewVisual({
  annotations,
}: {
  annotations: readonly OverviewAnnotation[];
}) {
  const visualRef = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const visual = visualRef.current;

    if (!visual) {
      return;
    }

    if (typeof IntersectionObserver === "undefined") {
      const frame = window.requestAnimationFrame(() => setIsVisible(true));
      return () => window.cancelAnimationFrame(frame);
    }

    const target = visual.closest("section") ?? visual;
    const rootStyle = getComputedStyle(document.documentElement);
    const fontSize = Number.parseFloat(rootStyle.fontSize) || 16;
    const toPixels = (value: string, fallbackRem: number) => {
      const length = value.trim();

      if (length.endsWith("rem")) {
        return Number.parseFloat(length) * fontSize;
      }

      if (length.endsWith("px")) {
        return Number.parseFloat(length);
      }

      return fallbackRem * fontSize;
    };
    const headerOffset =
      toPixels(rootStyle.getPropertyValue("--header-height"), 5) +
      toPixels(rootStyle.getPropertyValue("--crumb-height"), 2.75);

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(Boolean(entry?.isIntersecting));
      },
      {
        threshold: 0.12,
        rootMargin: `-${Math.round(headerOffset)}px 0px -28% 0px`,
      },
    );

    observer.observe(target);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={visualRef}
      className={styles.overviewVisual}
      data-visible={isVisible ? "true" : undefined}
    >
      <Image
        className={styles.overviewImage}
        src="/case-study-01-overview.png"
        alt="Annotated robotics workflow showing vision input, edge AI inference, object recognition, and robot control"
        width={1672}
        height={941}
        sizes="(max-width: 52rem) 100vw, 58vw"
      />
      <ul className={styles.annotations} aria-hidden="true">
        {annotations.map((annotation, index) => (
          <li
            className={`${styles.annotation} ${annotation.className}`}
            key={annotation.id}
            style={
              {
                "--annotation-delay": `${index * 120}ms`,
              } as CSSProperties
            }
          >
            <span className={styles.annotationMarker}>{annotation.marker}</span>
            <span className={styles.annotationTitle}>{annotation.title}</span>
            <span className={styles.annotationBody}>
              {annotation.description}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
