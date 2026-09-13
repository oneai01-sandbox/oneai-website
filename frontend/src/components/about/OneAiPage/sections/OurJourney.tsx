import { Container } from "@/components/common/Container";
import type { TimelineEvent } from "../types";

import styles from "./OurJourney.module.css";

const journeyEvents: TimelineEvent[] = [
  {
    year: "2026",
    period: "07",
    title:
      "Selected for the 6th NEXT Challenge",
    description:
      "Startup-planning program, Ministry of Land, Infrastructure and Transport",
    tag: "Funding",
  },
  {
    year: "2026",
    period: "07",
    title:
      "TIPS in progress",
    description:
      "Tech Incubator Program for Startup by the Ministry of SMEs and Startups",
    tag: "Funding",
  },
  {
    year: "2026",
    period: "07",
    title:
      "Exhibited at Monozukuri World in Japan",
    description:
      "Together with OPEN Group",
    tag: "Exhibition",
  },
  {
    year: "2026",
    period: "06",
    title:
      "MOU signed with Kyungshin Total Logistics",
    description:
      "Container-loading robot development",
    tag: "Partnership",
  },
  {
    year: "2026",
    period: "05",
    title:
      "Selected for the SME support program for promising tech industries expanding into the Middle East",
    description:
      "By the Korea SMEs and Startups Agency",
    tag: "Funding",
  },
  {
    year: "2026",
    period: "05",
    title:
      "Selected for the Intel (Ingenius) program within the Global Corporate Collaboration Program",
    description:
      "By the Ministry of SMEs and Startups",
    tag: "Funding",
  },
  {
    year: "2026",
    period: "04",
    title:
      "Venture-company registration completed",
    description: "",
    tag: "Company",
  },
  {
    year: "2026",
    period: "02",
    title:
      "Collaboration talks with OPEN Group in Japan",
    description:
      "Technical support for the Japanese market",
    tag: "Partnership",
  },
  {
    year: "2026",
    period: "02",
    title:
      "MOU signed with Hansol Logistics",
    description:
      "NCM battery early-safety-detection system development",
    tag: "Partnership",
  },
  {
    year: "2026",
    period: "01.14",
    title:
      "ONE AI founded",
    description: "",
    tag: "Company",
  },
];

export function OurJourney() {
  return (
    <section className={styles.section} aria-labelledby="our-journey-title">
      <Container>
        <div className={styles.heading}>
          <span className={styles.eyebrow}>Our Journey</span>
          <h2 id="our-journey-title">
            The Footprints of ONE AI 
          </h2>
          <p>
            Since its founding, through relentless technological innovation,
            <br />
            it has set a new standard of intelligence in Asia’s industrial field.
          </p>
        </div>

        <div className={styles.timelineWrapper}>
          <ol className={styles.timelineList}>
            {journeyEvents.map((event, index) => {
              const isFirst = index === 0;

              return (
                <li
                  className={`${styles.timelineItem} ${
                    isFirst ? styles.active : ""
                  }`}
                  key={`${event.year}-${event.title}`}
                >
                  <div className={styles.timelineNode} aria-hidden="true">
                    <span className={styles.nodeDot} />
                  </div>
                  <article className={styles.timelineCard}>
                    <div className={styles.timelineMeta}>
                      <span className={styles.yearBadge}>{event.year}</span>
                      {event.period && (
                        <span className={styles.periodBadge}>
                          {event.period}
                        </span>
                      )}
                      {event.tag && (
                        <span className={styles.tagBadge}>{event.tag}</span>
                      )}
                    </div>
                    <h3 className={styles.itemTitle}>{event.title}</h3>
                    <p className={styles.itemDescription}>
                      {event.description}
                    </p>
                  </article>
                </li>
              );
            })}
          </ol>
        </div>
      </Container>
    </section>
  );
}

