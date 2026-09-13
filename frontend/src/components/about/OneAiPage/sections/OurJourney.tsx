import { Container } from "@/components/common/Container";
import type { TimelineEvent } from "../types";

import styles from "./OurJourney.module.css";

const journeyEvents: TimelineEvent[] = [
  {
    year: "2026",
    period: "July",
    title: "Selected for the 6th NEXT Challenge",
    description:
      "Program by Ministry of Land, Infrastructure and Transport",
    tag: "Funding",
  },
  {
    year: "2026",
    period: "July",
    title: "In Progress for TIPS (Tech Incubator Program for Startup)",
    description:
      "Ministry of SMEs and Startups",
    tag: "Funding",
  },
  {
    year: "2026",
    period: "July",
    title: "Participated in the Monozukuri World Exhibition in Japan",
    description:
      "Collaboration with OPEN group",
    tag: "Exhibition",
  },
  {
    year: "2026",
    period: "June",
    title: "MOU with Kyungshin Integrated Logistics Co.",
    description:
      "Development of a container loading robot",
    tag: "Partnership",
  },
  {
    year: "2026",
    period: "May",
    title: "Selected for the Promising Tech Industry Support Project for Middle East Expansion",
    description:
      "Korea SMEs and Startups Agency (KOSME)",
    tag: "Funding",
  },
  {
    year: "2026",
    period: "May",
    title: "Selected for the Intel (Intellectuals) program among the Global Corporate Collaboration Program",
    description:
      "Ministry of SMEs and Startups",
    tag: "Funding",
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

