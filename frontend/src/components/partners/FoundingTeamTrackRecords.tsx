"use client";

import Image from "next/image";
import { useId, useState, type CSSProperties } from "react";

import { foundingTeamTrackRecords } from "./foundingTeamTrackRecordsData";

import styles from "./FoundingTeamTrackRecords.module.css";

const heading = "Founding Team Track Records";

export function FoundingTeamTrackRecords() {
  const [open, setOpen] = useState(false);
  const panelId = useId();

  return (
    <div className={styles.records} data-open={open}>
      <div className={styles.header}>
        <div className={styles.summaryCopy}>
          <p className={styles.heading}>{heading}</p>
          <p className={styles.lede}>
            Prior work across industrial AI, edge inference, robotics, and
            vision systems.
          </p>
        </div>
        <button
          type="button"
          className={styles.toggle}
          aria-expanded={open}
          aria-controls={panelId}
          onClick={() => setOpen((current) => !current)}
        >
          <span className={styles.labelStack}>
            <span className={styles.showMore}>Show more</span>
            <span className={styles.showLess}>Show less</span>
          </span>
          <span className={styles.chevron} aria-hidden="true">
            <svg viewBox="0 0 16 16" fill="none">
              <path
                d="M3.2 5.8 8 10.4l4.8-4.6"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </button>
      </div>

      <div
        className={styles.collapse}
        id={panelId}
        role="region"
        aria-label={heading}
        aria-hidden={!open}
      >
        <div className={styles.collapseInner}>
          <div className={styles.panel}>
            <p className={styles.intro}>
              ONE AI’s founding team brings prior project experience with
              leading companies across industrial AI, edge inference, robotics,
              and vision systems.
            </p>
            <ol className={styles.list}>
              {foundingTeamTrackRecords.map((record, index) => (
                <li
                  className={styles.item}
                  key={record.company}
                  style={
                    {
                      "--item-index": index,
                      "--logo-scale": record.logoScale,
                    } as CSSProperties
                  }
                >
                  <div className={styles.logoFrame}>
                    <Image
                      className={
                        record.logoFit === "cover"
                          ? `${styles.logo} ${styles.logoCover}`
                          : styles.logo
                      }
                      src={encodeURI(record.logo)}
                      alt={record.company}
                      width={240}
                      height={80}
                    />
                  </div>
                  <p className={styles.title}>{record.project}</p>
                  <p className={styles.domain}>{record.domain}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}
