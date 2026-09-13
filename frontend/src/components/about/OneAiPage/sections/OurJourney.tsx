import { Container } from "@/components/common/Container";
import type { TimelineEvent } from "../types";

import styles from "./OurJourney.module.css";

const journeyEvents: TimelineEvent[] = [
  {
    year: "2026",
    period: "07",
    title: "Selected for the 6th NEXT Challenge",
    description:
      "Startup-planning program, Ministry of Land, Infrastructure and Transport",
    tag: "Funding",
  },
  {
    year: "2026",
    period: "07",
    title: "TIPS in progress",
    description:
      "Tech Incubator Program for Startup by the Ministry of SMEs and Startups",
    tag: "Funding",
  },
  {
    year: "2026",
    period: "07",
    title: "Exhibited at Monozukuri World in Japan",
    description: "Together with OPEN Group",
    tag: "Exhibition",
  },
  {
    year: "2026",
    period: "06",
    title: "MOU signed with Kyungshin Total Logistics",
    description: "Container-loading robot development",
    tag: "Partnership",
  },
  {
    year: "2026",
    period: "05",
    title:
      "Selected for the SME support program for promising tech industries expanding into the Middle East",
    description: "By the Korea SMEs and Startups Agency",
    tag: "Funding",
  },
  {
    year: "2026",
    period: "05",
    title:
      "Selected for the Intel (Ingenius) program within the Global Corporate Collaboration Program",
    description: "By the Ministry of SMEs and Startups",
    tag: "Funding",
  },
  {
    year: "2026",
    period: "04",
    title: "Venture-company registration completed",
    description: "",
    tag: "Company",
  },
  {
    year: "2026",
    period: "02",
    title: "Collaboration talks with OPEN Group in Japan",
    description: "Technical support for the Japanese market",
    tag: "Partnership",
  },
  {
    year: "2026",
    period: "02",
    title: "MOU signed with Hansol Logistics",
    description: "NCM battery early-safety-detection system development",
    tag: "Partnership",
  },
  {
    year: "2026",
    period: "01.14",
    title: "ONE AI founded",
    description: "",
    tag: "Company",
  },
];

const journeyByYear = journeyEvents.reduce<Record<string, TimelineEvent[]>>(
  (groups, event) => {
    (groups[event.year] ??= []).push(event);
    return groups;
  },
  {},
);

export function OurJourney() {
  return (
    <section className={styles.section} aria-labelledby="our-journey-title">
      <Container className={styles.inner}>
        <div className={styles.heading}>
          <p className={styles.eyebrow}>Our Journey</p>
          <h2 id="our-journey-title">
            The Footprints
            <span>of ONE AI</span>
          </h2>
          <p>
            Since its founding, through relentless technological innovation, it
            has set a new standard of intelligence in Asia’s industrial field.
          </p>
        </div>

        <div className={styles.timeline}>
          {Object.entries(journeyByYear).map(([year, events]) => (
            <div className={styles.yearGroup} key={year}>
              <p className={styles.yearMark} aria-hidden="true">
                {year}
              </p>
              <ol className={styles.list}>
                {events.map((event) => (
                  <li
                    className={styles.item}
                    key={`${event.year}-${event.period}-${event.title}`}
                  >
                    <div className={styles.when}>
                      <span className={styles.node} aria-hidden="true" />
                      <time className={styles.period} dateTime={event.year}>
                        {event.period}
                      </time>
                    </div>
                    <article className={styles.entry}>
                      <div className={styles.entryHead}>
                        {event.tag && (
                          <span className={styles.tag}>{event.tag}</span>
                        )}
                        <h3 className={styles.itemTitle}>{event.title}</h3>
                      </div>
                      {event.description ? (
                        <p className={styles.itemDescription}>
                          {event.description}
                        </p>
                      ) : null}
                    </article>
                  </li>
                ))}
              </ol>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
