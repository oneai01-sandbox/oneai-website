import Link from "next/link";

import { siteRoutes } from "@/config/site";

import styles from "./Details.module.css";

const cards = [
  {
    title: "Edge-Based Processing",
    icon: "edge",
  },
  {
    title: "Local Data Control",
    icon: "data",
  },
  {
    title: "Field System Integration",
    icon: "field",
  },
] as const;

function EdgeIcon() {
  return (
    <svg viewBox="0 0 72 72" fill="none" aria-hidden="true">
      <rect x="18" y="16" width="36" height="28" rx="4" stroke="currentColor" strokeWidth="1.8" />
      <path d="M24 22h10M24 28h16M24 34h8" stroke="var(--color-accent)" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M28 44v6h16v-6" stroke="currentColor" strokeWidth="1.8" />
      <path d="M22 56h28" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <circle cx="50" cy="24" r="3" fill="var(--color-accent)" />
    </svg>
  );
}

function DataIcon() {
  return (
    <svg viewBox="0 0 72 72" fill="none" aria-hidden="true">
      <path
        d="M36 14 18 22v16c0 12 8.4 18.8 18 22 9.6-3.2 18-10 18-22V22Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <rect x="28" y="28" width="16" height="18" rx="2" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="36" cy="36" r="2.2" fill="var(--color-accent)" />
      <path d="M36 38.2V42" stroke="var(--color-accent)" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

function FieldIcon() {
  return (
    <svg viewBox="0 0 72 72" fill="none" aria-hidden="true">
      <circle cx="20" cy="24" r="6" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="52" cy="24" r="6" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="36" cy="50" r="6" stroke="currentColor" strokeWidth="1.8" />
      <path d="M25 28l8 16M47 28l-8 16M26 24h20" stroke="var(--color-accent)" strokeWidth="1.7" />
    </svg>
  );
}

const icons = {
  edge: EdgeIcon,
  data: DataIcon,
  field: FieldIcon,
};

export function TechnicalDetails() {
  return (
    <div className={styles.technical}>
      <div className={styles.technicalCopy}>
        <h3 className={styles.technicalTitle}>Supported Onsite Deployment</h3>
        <p>
          AxisONE supports onsite deployment for industrial environments where
          speed, reliability, and data control matter. By running AI inference
          near cameras, sensors, robots, and production equipment, the system
          helps teams respond faster while keeping critical operations closer to
          the field.
        </p>
      </div>

      <ul className={styles.technicalCards}>
        {cards.map((card) => {
          const Icon = icons[card.icon];

          return (
            <li className={styles.technicalCard} key={card.title}>
              <span className={styles.technicalCardIcon}>
                <Icon />
              </span>
              <p>{card.title}</p>
            </li>
          );
        })}
      </ul>

      <Link className={styles.technicalAction} href={siteRoutes.requestDemo}>
        <span>Request a Demo</span>
        <span className={styles.technicalArrow} aria-hidden="true">
          →
        </span>
      </Link>
    </div>
  );
}
