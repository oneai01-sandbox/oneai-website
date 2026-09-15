"use client";

import Image from "next/image";
import { useState } from "react";

import { BrandName } from "@/components/common/BrandName";

import styles from "./Details.module.css";

function LoopIcon() {
  return (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <path
        d="M14 18.5c2.4-4.2 7-7 12.2-7 7.7 0 14 6.3 14 14"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <path
        d="M34 29.5c-2.4 4.2-7 7-12.2 7-7.7 0-14-6.3-14-14"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <path
        d="M38.2 18.2 40.2 25.5 33 23.4"
        stroke="var(--color-accent)"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.8 29.8 7.8 22.5 15 24.6"
        stroke="var(--color-accent)"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function EdgeIcon() {
  return (
    <svg viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <rect x="6" y="9" width="20" height="14" rx="3" stroke="currentColor" strokeWidth="1.5" />
      <path d="M11 16h10" stroke="var(--color-accent)" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="16" cy="16" r="2.2" stroke="var(--color-accent)" strokeWidth="1.5" />
    </svg>
  );
}

function CoreIcon() {
  return (
    <svg viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <rect x="7" y="6" width="18" height="6" rx="1.4" stroke="currentColor" strokeWidth="1.5" />
      <rect x="7" y="13" width="18" height="6" rx="1.4" stroke="currentColor" strokeWidth="1.5" />
      <rect x="7" y="20" width="18" height="6" rx="1.4" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="11" cy="9" r="1" fill="var(--color-accent)" />
      <circle cx="11" cy="16" r="1" fill="var(--color-accent)" />
      <circle cx="11" cy="23" r="1" fill="var(--color-accent)" />
    </svg>
  );
}

const structureNodes = [
  {
    id: "edge",
    product: "EDGE",
    headline: "AI at the Field",
    description:
      "Brings specialized AI services closer to field devices for real-time industrial operations.",
    icon: EdgeIcon,
  },
  {
    id: "loop",
    product: "LOOP",
    headline: "Continuous AI Learning",
    description:
      "Connects field operations and core intelligence through a continuous cycle of learning and improvement.",
    icon: LoopIcon,
  },
  {
    id: "core",
    product: "CORE",
    headline: "Intelligence at the Core",
    description:
      "Provides centralized AI operations, management, and control within the on-premises environment.",
    icon: CoreIcon,
  },
] as const;

type StructureNodeId = (typeof structureNodes)[number]["id"];

export function AbstractArchitecture() {
  const [activeId, setActiveId] = useState<StructureNodeId>("edge");
  const activeNode =
    structureNodes.find((node) => node.id === activeId) ?? structureNodes[0];
  const ActiveIcon = activeNode.icon;

  return (
    <div className={styles.structurePanel}>
      <div className={styles.layersIntro}>
        <h3>
          Discover the structure behind <BrandName />.
        </h3>
        <p>
          See how <BrandName product="EDGE" />, <BrandName product="LOOP" />, and{" "}
          <BrandName product="CORE" /> work together to connect field
          intelligence, continuous AI learning, and centralized control.
        </p>
      </div>

      <div className={styles.structure}>
        <p className={styles.structureWrap}>
          <BrandName />
        </p>

        <div className={styles.structureStage}>
          <Image
            className={styles.structureImage}
            src="/assets/02_product/details/02.png"
            alt=""
            fill
            sizes="(max-width: 52rem) 92vw, 58vw"
          />

          {structureNodes.map((node) => (
            <button
              className={`${styles.structureLabel} ${
                node.id === "edge"
                  ? styles.structureEdge
                  : node.id === "core"
                    ? styles.structureCore
                    : styles.structureLoop
              }`}
              type="button"
              key={node.id}
              aria-pressed={activeId === node.id}
              onClick={() => setActiveId(node.id)}
            >
              {node.id === "loop" ? (
                <span className={styles.structureLoopIcon}>
                  <LoopIcon />
                </span>
              ) : null}
              <BrandName product={node.product} />
            </button>
          ))}
        </div>
      </div>

      <div className={styles.structureExplainer}>
        <div className={styles.structurePicks} role="tablist" aria-label="Platform components">
          {structureNodes.map((node) => (
            <button
              className={styles.structurePick}
              type="button"
              key={`${node.id}-pick`}
              role="tab"
              aria-selected={activeId === node.id}
              onClick={() => setActiveId(node.id)}
            >
              <BrandName product={node.product} />
            </button>
          ))}
        </div>

        <div
          className={styles.structureDetail}
          data-node={activeNode.id}
          key={activeNode.id}
        >
          <p className={styles.structureDetailEyebrow}>
            <BrandName product={activeNode.product} />
          </p>
          <div className={styles.structureDetailHeading}>
            <span className={styles.structureDetailIcon}>
              <ActiveIcon />
            </span>
            <h3>{activeNode.headline}</h3>
          </div>
          <p className={styles.structureDetailCopy}>{activeNode.description}</p>
        </div>
      </div>
    </div>
  );
}
