"use client";

import Image from "next/image";
import { useEffect, useId, useState } from "react";
import { createPortal } from "react-dom";

import { BrandName } from "@/components/common/BrandName";

import styles from "./Details.module.css";

const fieldDevices = [
  {
    id: "fd1",
    src: "/assets/02_product/details/fd1.png",
    alt: "Industrial robot arm",
  },
  {
    id: "fd2",
    src: "/assets/02_product/details/fd2.png",
    alt: "Vision camera system",
  },
  {
    id: "fd3",
    src: "/assets/02_product/details/fd3.png",
    alt: "Safety sensing device",
  },
  {
    id: "fd4",
    src: "/assets/02_product/details/fd4.png",
    alt: "Operator assistance device",
  },
] as const;

const coreOverview = {
  id: "core",
  label: "Axis.CORE",
  description:
    "On-premises server that provides core services for operating and managing the Axis.ONE platform.",
  icon: CoreLayerIcon,
} as const;

const coreModules = [
  {
    id: "storage",
    label: "DB / Data Storage",
    description:
      "Stores manufacturing data generated during operation, including production statistics and AI inference results.",
    icon: StorageIcon,
  },
  {
    id: "aiops",
    label: "AIOps",
    description:
      "Trains and retrains AI models using data collected from field devices, then deploys the optimized models back to the devices.",
    icon: AiOpsIcon,
  },
  {
    id: "orchestration",
    label: "Orchestration",
    description:
      "Allocates hardware resources according to workload requirements, optimizing utilization across the system.",
    icon: OrchestrationIcon,
  },
  {
    id: "ota",
    label: "OTA Updates",
    description:
      "Remotely distributes improved AI models, bug fixes, and software updates from the central system to field devices.",
    icon: OtaIcon,
  },
] as const;

const edgeOverview = {
  id: "edge",
  label: "Axis.EDGE",
  description:
    "Edge-side application that deploys and operates specialized AI services close to field devices.",
  icon: EdgeLayerIcon,
} as const;

const edgeApps = [
  {
    id: "robo",
    name: "Robo",
    label: "Robo.ONE",
    description:
      "Enables AI-powered perception and intelligent control for robotic systems and automation.",
    icon: RoboIcon,
  },
  {
    id: "vision",
    name: "Vision",
    label: "Vision.ONE",
    description:
      "Provides vision AI for inspection, monitoring, and intelligent operations in manufacturing environments.",
    icon: VisionAppIcon,
  },
  {
    id: "safe",
    name: "Safe",
    label: "Safe.ONE",
    description:
      "Combines multimodal data channels to detect, analyze, and respond to safety-related events in real time.",
    icon: SafeIcon,
  },
  {
    id: "assist",
    name: "Assist",
    label: "Assist.ONE",
    description:
      "Provides LLM-powered intelligent assistance using voice, language, and contextual information.",
    icon: AssistIcon,
  },
] as const;

function CoreLayerIcon() {
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

function EdgeLayerIcon() {
  return (
    <svg viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <rect x="6" y="9" width="20" height="14" rx="3" stroke="currentColor" strokeWidth="1.5" />
      <path d="M11 16h10" stroke="var(--color-accent)" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="16" cy="16" r="2.2" stroke="var(--color-accent)" strokeWidth="1.5" />
    </svg>
  );
}

function RoboIcon() {
  return (
    <svg viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <rect x="8" y="10" width="16" height="13" rx="3" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="12.5" cy="16" r="1.6" fill="var(--color-accent)" />
      <circle cx="19.5" cy="16" r="1.6" fill="var(--color-accent)" />
      <path d="M16 7.5V10M12 7.5h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function VisionAppIcon() {
  return (
    <svg viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <rect x="6" y="10" width="16" height="12" rx="2.2" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="14" cy="16" r="3.2" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="14" cy="16" r="1.2" fill="var(--color-accent)" />
      <path d="M22 14h4l2-2v10l-2-2h-4" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    </svg>
  );
}

function SafeIcon() {
  return (
    <svg viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <path
        d="M16 6.5 8 9.5v7.2c0 5 3.4 8.3 8 9.8 4.6-1.5 8-4.8 8-9.8V9.5Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path d="M12.8 16.2 15.2 18.6l4.4-5.2" stroke="var(--color-accent)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function AssistIcon() {
  return (
    <svg viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <circle cx="16" cy="11" r="4" stroke="currentColor" strokeWidth="1.5" />
      <path d="M8.5 24.2c1.2-4 4.1-6 7.5-6s6.3 2 7.5 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M23.5 9.2c2.2 1.1 3.6 3.2 3.6 5.6" stroke="var(--color-accent)" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function StorageIcon() {
  return (
    <svg viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <ellipse cx="16" cy="8.5" rx="9" ry="3.4" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M7 8.5v15c0 1.9 4 3.4 9 3.4s9-1.5 9-3.4v-15"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path d="M7 16c0 1.9 4 3.4 9 3.4s9-1.5 9-3.4" stroke="var(--color-accent)" strokeWidth="1.5" />
    </svg>
  );
}

function AiOpsIcon() {
  return (
    <svg viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <rect x="5" y="8" width="22" height="16" rx="2.2" stroke="currentColor" strokeWidth="1.5" />
      <path d="M5 12.2h22" stroke="currentColor" strokeWidth="1.4" />
      <circle cx="8.2" cy="10.1" r="0.85" fill="currentColor" />
      <circle cx="10.7" cy="10.1" r="0.85" fill="currentColor" />
      <path
        d="M8.5 20.2h4.2l1.4-3.2 2.1 5.2 1.8-3.8H23.5"
        stroke="var(--color-accent)"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M22.2 6.2 23.3 8l2 .4-1.4 1.5.3 2-1.8-.9-1.8.9.3-2-1.4-1.5 2-.4Z"
        fill="var(--color-accent)"
      />
    </svg>
  );
}

function OrchestrationIcon() {
  return (
    <svg viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <circle cx="16" cy="8.5" r="3" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="8.5" cy="23" r="3" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="23.5" cy="23" r="3" stroke="currentColor" strokeWidth="1.5" />
      <path d="M16 11.5v4.2M14.4 15.7 10.4 20.4M17.6 15.7l4 4.7" stroke="var(--color-accent)" strokeWidth="1.5" />
    </svg>
  );
}

function OtaIcon() {
  return (
    <svg viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <rect x="8" y="14" width="16" height="12" rx="2" stroke="currentColor" strokeWidth="1.5" />
      <path d="M12 14V12.2c0-2.2 1.8-4 4-4s4 1.8 4 4V14" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M16 17.2v5.2M16 22.4l-1.8-1.8M16 22.4l1.8-1.8"
        stroke="var(--color-accent)"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M24.4 7.8a4.6 4.6 0 0 1 2 3.6M24.4 7.8l2 .2M24.4 7.8l.4 2"
        stroke="var(--color-accent)"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function TechnicalDetails() {
  const [openModuleId, setOpenModuleId] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);
  const titleId = useId();
  const openItem =
    openModuleId === coreOverview.id
      ? coreOverview
      : openModuleId === edgeOverview.id
        ? edgeOverview
        : coreModules.find((module) => module.id === openModuleId) ??
          edgeApps.find((app) => app.id === openModuleId);
  const OpenIcon = openItem?.icon;

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!openModuleId) {
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpenModuleId(null);
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [openModuleId]);

  return (
    <div className={styles.layersPanel}>
      <div className={styles.layersIntro}>
        <h3>
          Explore the technical architecture of <BrandName />.
        </h3>
        <p>
          See how each component works within the platform.{" "}
          <br className={styles.desktopBreak} />
          Click a component to explore its role and capabilities.
        </p>
      </div>

      <div className={styles.layers}>
      <p className={styles.layersBrand}>
        <BrandName />
      </p>

      <div className={styles.layersStage}>
        <Image
          className={styles.layersImage}
          src="/assets/02_product/details/axisone-details-3-bg.png"
          alt=""
          fill
          sizes="(max-width: 52rem) 92vw, 58vw"
        />

        <ul className={styles.layersLabels}>
          <li className={`${styles.layersLabel} ${styles.layersField}`}>
            <span className={styles.layersCoreName}>Field Devices</span>
            <ul className={styles.layersFieldDevices}>
              {fieldDevices.map((device) => (
                <li data-device={device.id} key={device.id}>
                  <span className={styles.layersFieldGlow} aria-hidden="true" />
                  <Image
                    className={styles.layersFieldImage}
                    src={device.src}
                    alt={device.alt}
                    fill
                    sizes="(max-width: 52rem) 22vw, 12vw"
                  />
                </li>
              ))}
            </ul>
          </li>
          <li className={`${styles.layersLabel} ${styles.layersEdge}`}>
            <button
              className={styles.layersCoreName}
              type="button"
              aria-haspopup="dialog"
              aria-label="Axis.EDGE"
              onClick={() => setOpenModuleId(edgeOverview.id)}
            >
              <BrandName product="EDGE" />
            </button>
            <ul className={styles.layersEdgeApps}>
              {edgeApps.map((app) => (
                <li key={app.id}>
                  <button
                    className={styles.layersEdgeApp}
                    type="button"
                    aria-haspopup="dialog"
                    aria-label={app.label}
                    data-app={app.id}
                    onClick={() => setOpenModuleId(app.id)}
                  >
                    <BrandName name={app.name} />
                  </button>
                </li>
              ))}
            </ul>
          </li>
          <li className={`${styles.layersLabel} ${styles.layersBus}`}>
            Data Bus
          </li>
          <li className={`${styles.layersLabel} ${styles.layersCore}`}>
            <button
              className={styles.layersCoreName}
              type="button"
              aria-haspopup="dialog"
              aria-label="Axis.CORE"
              onClick={() => setOpenModuleId(coreOverview.id)}
            >
              <BrandName product="CORE" />
            </button>
            <ul className={styles.layersCoreModules}>
              {coreModules.map((module) => {
                const Icon = module.icon;

                return (
                  <li key={module.id}>
                    <button
                      className={styles.layersCoreModule}
                      type="button"
                      aria-haspopup="dialog"
                      aria-label={module.label}
                      onClick={() => setOpenModuleId(module.id)}
                    >
                      <span className={styles.layersCoreIcon}>
                        <Icon />
                      </span>
                      <span className={styles.layersCoreCaption}>
                        {module.label}
                      </span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </li>
        </ul>
      </div>
      </div>

      {mounted && openItem
        ? createPortal(
            <div
              className={styles.coreModalBackdrop}
              onClick={() => setOpenModuleId(null)}
            >
              <div
                className={styles.coreModal}
                role="dialog"
                aria-modal="true"
                aria-labelledby={titleId}
                onClick={(event) => event.stopPropagation()}
              >
                <p className={styles.coreModalEyebrow}>
                  {openItem.id === coreOverview.id ||
                  openItem.id === edgeOverview.id ? (
                    <BrandName />
                  ) : "name" in openItem ? (
                    <BrandName product="EDGE" />
                  ) : (
                    <BrandName product="CORE" />
                  )}
                </p>
                <div className={styles.coreModalHeading}>
                  {OpenIcon ? (
                    <span className={styles.coreModalIcon}>
                      <OpenIcon />
                    </span>
                  ) : null}
                  <h3 id={titleId}>
                    {openItem.id === coreOverview.id ? (
                      <BrandName product="CORE" />
                    ) : openItem.id === edgeOverview.id ? (
                      <BrandName product="EDGE" />
                    ) : "name" in openItem ? (
                      <BrandName name={openItem.name} />
                    ) : (
                      openItem.label
                    )}
                  </h3>
                </div>
                <p className={styles.coreModalCopy}>{openItem.description}</p>
                <button
                  className={styles.coreModalClose}
                  type="button"
                  onClick={() => setOpenModuleId(null)}
                >
                  Close
                </button>
              </div>
            </div>,
            document.body,
          )
        : null}
    </div>
  );
}
