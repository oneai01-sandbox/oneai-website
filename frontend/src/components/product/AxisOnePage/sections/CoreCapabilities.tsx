"use client";

import Link from "next/link";
import { useEffect, useId, useState } from "react";
import { createPortal } from "react-dom";

import { BrandName } from "@/components/common/BrandName";

import styles from "./Details.module.css";

const capabilities = [
  {
    id: "vision",
    title: "Vision Intelligence",
    description:
      "Understand visual data from industrial environments through AI-powered perception and analysis.",
    caseStudyHref: "/case-studies/smart-factory",
    caseStudyLabel: "Smart Factory",
    icon: "vision",
  },
  {
    id: "inference",
    title: "Real-Time Inference",
    description:
      "Run AI inference close to the field for fast, responsive decision-making.",
    caseStudyHref: "/case-studies/robotics",
    caseStudyLabel: "Robotics",
    icon: "inference",
  },
  {
    id: "monitoring",
    title: "Operational Monitoring",
    description:
      "Monitor AI services, system status, and operational data through a unified environment.",
    caseStudyHref: "/case-studies/industrial-safety",
    caseStudyLabel: "Industrial Safety",
    icon: "monitoring",
  },
  {
    id: "automation",
    title: "Industrial Automation",
    description:
      "Connect AI insights with industrial equipment and workflows to enable intelligent automation.",
    caseStudyHref: "/case-studies/robotics",
    caseStudyLabel: "Robotics",
    icon: "automation",
  },
] as const;

function VisionIcon() {
  return (
    <svg viewBox="0 0 72 72" fill="none" aria-hidden="true">
      <rect x="10" y="22" width="34" height="24" rx="4" stroke="currentColor" strokeWidth="1.8" />
      <path d="M44 30h8l8-6v20l-8-6h-8" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      <circle cx="27" cy="34" r="7" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="27" cy="34" r="2.4" fill="currentColor" />
      <rect x="38" y="12" width="24" height="18" stroke="var(--color-accent)" strokeWidth="1.6" />
      <path d="M38 16h4M38 12v4M58 12v4M62 16h-4M38 26h4M38 30v-4M62 26h-4M62 30v-4" stroke="var(--color-accent)" strokeWidth="1.8" />
    </svg>
  );
}

function InferenceIcon() {
  return (
    <svg viewBox="0 0 72 72" fill="none" aria-hidden="true">
      <rect x="20" y="18" width="32" height="32" rx="4" stroke="currentColor" strokeWidth="1.8" />
      <rect x="26" y="24" width="20" height="20" rx="2" stroke="currentColor" strokeWidth="1.5" />
      <path d="M26 14v4M32 14v4M38 14v4M44 14v4M26 50v4M32 50v4M38 50v4M44 50v4M16 26h4M16 32h4M16 38h4M16 44h4M52 26h4M52 32h4M52 38h4M52 44h4" stroke="currentColor" strokeWidth="1.6" />
      <path
        className={styles.pulseLine}
        d="M8 58h16l4-8 6 14 6-12 4 6h20"
        stroke="var(--color-accent)"
        strokeWidth="1.8"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
    </svg>
  );
}

function MonitoringIcon() {
  return (
    <svg viewBox="0 0 72 72" fill="none" aria-hidden="true">
      <rect x="10" y="12" width="52" height="40" rx="4" stroke="currentColor" strokeWidth="1.8" />
      <path d="M10 22h52" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="16" cy="17" r="1.4" fill="currentColor" />
      <circle cx="21" cy="17" r="1.4" fill="currentColor" />
      <circle cx="26" cy="17" r="1.4" fill="currentColor" />
      <path d="M18 46V36M26 46V30M34 46V34M42 46V26M50 46V32" stroke="var(--color-accent)" strokeWidth="2.2" strokeLinecap="round" />
      <path d="M16 60h40M28 52v8M44 52v8" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}

function AutomationIcon() {
  return (
    <svg viewBox="0 0 72 72" fill="none" aria-hidden="true">
      <path d="M16 56h16M24 56V44h10l10-12" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" strokeLinecap="round" />
      <rect x="42" y="22" width="12" height="10" rx="2" stroke="currentColor" strokeWidth="1.8" />
      <path d="M48 22V16M44 16h8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <circle cx="24" cy="44" r="3" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="34" cy="44" r="3" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="44" cy="32" r="3" stroke="currentColor" strokeWidth="1.6" />
      <path
        className={styles.signalWave}
        d="M58 24c4 4 4 12 0 16M62 20c7 7 7 21 0 28"
        stroke="var(--color-accent)"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
    </svg>
  );
}

const icons = {
  vision: VisionIcon,
  inference: InferenceIcon,
  monitoring: MonitoringIcon,
  automation: AutomationIcon,
};

export function CoreCapabilities() {
  const [openId, setOpenId] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);
  const titleId = useId();
  const openItem = capabilities.find((capability) => capability.id === openId);
  const OpenIcon = openItem ? icons[openItem.icon] : null;

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!openId) {
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpenId(null);
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [openId]);

  return (
    <div className={styles.layersPanel}>
      <div className={styles.layersIntro}>
        <h3>
          Explore what <BrandName /> can do.
        </h3>
        <p>
          Discover the core capabilities of <BrandName /> and explore how they
          are applied across real-world use cases.
        </p>
      </div>

      <ul className={styles.capabilityGrid}>
        {capabilities.map((capability) => {
          const Icon = icons[capability.icon];

          return (
            <li key={capability.id}>
              <button
                className={styles.capability}
                type="button"
                aria-haspopup="dialog"
                onClick={() => setOpenId(capability.id)}
              >
                <span className={styles.capabilityIcon}>
                  <Icon />
                </span>
                <h3>{capability.title}</h3>
              </button>
            </li>
          );
        })}
      </ul>

      {mounted && openItem && OpenIcon
        ? createPortal(
            <div
              className={styles.coreModalBackdrop}
              onClick={() => setOpenId(null)}
            >
              <div
                className={styles.coreModal}
                role="dialog"
                aria-modal="true"
                aria-labelledby={titleId}
                onClick={(event) => event.stopPropagation()}
              >
                <p className={styles.coreModalEyebrow}>Core Capabilities</p>
                <div className={styles.coreModalHeading}>
                  <span className={styles.coreModalIcon}>
                    <OpenIcon />
                  </span>
                  <h3 id={titleId}>{openItem.title}</h3>
                </div>
                <p className={styles.coreModalCopy}>{openItem.description}</p>
                <div className={styles.coreModalActions}>
                  <Link
                    className={styles.coreModalLink}
                    href={openItem.caseStudyHref}
                  >
                    <span>Explore Related Case Studies</span>
                    <span aria-hidden="true">→</span>
                  </Link>
                  <button
                    className={styles.coreModalClose}
                    type="button"
                    onClick={() => setOpenId(null)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>,
            document.body,
          )
        : null}
    </div>
  );
}
