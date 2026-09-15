import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

import { Container } from "@/components/common/Container";
import { siteRoutes } from "@/config/site";

import { RoboticsChrome } from "../RoboticsPage/RoboticsChrome";
import styles from "../RoboticsPage/RoboticsPage.module.css";
import localStyles from "./IndustrialSafetyPage.module.css";

const pageSections = [
  { id: "overview", label: "Overview" },
  { id: "demo", label: "Demo" },
  { id: "capabilities", label: "Capabilities" },
] as const;

const demoVideoId = "uvd8hXVjM1o";
const demoVideoTitle = "AI Safety Monitoring Demo";

const capabilities = [
  {
    index: "01",
    title: "Worksite Visual Awareness",
    description:
      "Understand worksite activity through camera-based visual data.",
    icon: "eye",
  },
  {
    index: "02",
    title: "Safety Condition Monitoring",
    description:
      "Support awareness of safety-related conditions across workers, equipment, and work zones.",
    icon: "activity",
  },
  {
    index: "03",
    title: "On-Site Alert Support",
    description:
      "Help connect detected situations with monitoring dashboards or visual alert systems.",
    icon: "dashboard",
  },
  {
    index: "04",
    title: "Edge-Based Operation",
    description:
      "Run AI analysis close to the field using local systems and existing infrastructure.",
    icon: "cpu",
  },
] as const;

type IconName = (typeof capabilities)[number]["icon"];

const iconPaths: Record<IconName, ReactNode> = {
  eye: (
    <>
      <path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0" />
      <circle cx="12" cy="12" r="3" />
    </>
  ),
  activity: (
    <path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2" />
  ),
  dashboard: (
    <>
      <rect width="7" height="9" x="3" y="3" rx="1" />
      <rect width="7" height="5" x="14" y="3" rx="1" />
      <rect width="7" height="9" x="14" y="12" rx="1" />
      <rect width="7" height="5" x="3" y="16" rx="1" />
    </>
  ),
  cpu: (
    <>
      <rect width="16" height="16" x="4" y="4" rx="2" />
      <rect width="6" height="6" x="9" y="9" rx="1" />
      <path d="M15 2v2" />
      <path d="M15 20v2" />
      <path d="M9 2v2" />
      <path d="M9 20v2" />
      <path d="M2 15h2" />
      <path d="M2 9h2" />
      <path d="M20 15h2" />
      <path d="M20 9h2" />
    </>
  ),
};

function StrokeIcon({ name }: { name: IconName }) {
  return (
    <span className={styles.icon} aria-hidden="true">
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {iconPaths[name]}
      </svg>
    </span>
  );
}

export function IndustrialSafetyPage() {
  return (
    <div className={styles.page}>
      <RoboticsChrome sections={pageSections} />
      <section
        className={styles.hero}
        aria-labelledby="industrial-safety-title"
        data-robotics-hero
        data-robotics-dark
      >
        <div className={styles.heroVisual}>
          <Image
            className={`${styles.heroImage} ${localStyles.heroImage}`}
            src="/assets/03_case-studies/case-study-03.png"
            alt="Industrial safety monitoring with edge vision on factory piping and valves"
            fill
            priority
            sizes="100vw"
          />
        </div>
        <Container className={styles.heroInner}>
          <div className={`${styles.heroCopy} ${localStyles.heroCopy}`}>
            <p className={styles.heroEyebrow}>CASE STUDY 03</p>
            <h1 id="industrial-safety-title">Industrial Safety</h1>
            <p className={styles.heroHeadline}>
              See risks earlier.
              <br />
              Respond faster.
            </p>
            <p className={`${styles.heroDescription} ${localStyles.heroDescription}`}>
              ONE AI applies edge-based vision intelligence to industrial
              safety,
              <br />
              helping teams detect risks, monitor workers, and protect
              operations in real time.
            </p>
          </div>
        </Container>
      </section>

      <section
        className={styles.overview}
        id="overview"
        aria-labelledby="overview-title"
      >
        <Container className={styles.overviewInner}>
          <div className={styles.overviewCopy}>
            <p className={styles.eyebrow}>Overview</p>
            <h2 id="overview-title">Industrial Safety Intelligence</h2>
            <p
              className={`${styles.sectionHeadline} ${localStyles.overviewLead}`}
            >
              AI-powered safety monitoring for real industrial worksites.
            </p>
            <p className={styles.overviewBody}>
              ONE AI connects camera-based worksite data with edge AI analysis
              to detect unsafe conditions, identify risk areas, and support
              faster on-site response.
            </p>
            <p className={styles.overviewBody}>
              By processing visual data close to the field, teams can gain
              real-time awareness of equipment, work zones, and safety-critical
              situations without relying on cloud-based operation.
            </p>
          </div>

          <figure className={styles.overviewFigure}>
            <div className={styles.overviewVisual}>
              <Image
                className={styles.overviewImage}
                src="/assets/03_case-studies/case-study-03-overview.png"
                alt="Factory floor with vision overlays highlighting workers, vehicles, restricted zones, and robotic work cells"
                width={1672}
                height={941}
                sizes="(max-width: 52rem) 100vw, 58vw"
              />
            </div>
          </figure>
        </Container>
      </section>

      <section className={styles.demo} id="demo" aria-labelledby="demo-title">
        <Container>
          <div className={styles.demoIntro}>
            <div className={styles.demoHeading}>
              <p className={styles.eyebrow}>Demo</p>
              <h2 id="demo-title">AI Safety Monitoring Demo</h2>
            </div>
            <div className={styles.demoLead}>
              <p className={styles.sectionHeadline}>
                Detect unsafe conditions in real time.
              </p>
              <p className={styles.sectionBody}>
                This demo shows how ONE AI analyzes worksite camera data to
                identify safety-critical situations and support faster on-site
                response.
              </p>
            </div>
          </div>

          <figure className={styles.demoFigure}>
            <div className={styles.videoFrame}>
              <iframe
                className={styles.videoEmbed}
                src={`https://www.youtube.com/embed/${demoVideoId}`}
                title={demoVideoTitle}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
            <figcaption>{demoVideoTitle}</figcaption>
          </figure>
        </Container>
      </section>

      <section
        className={styles.capabilities}
        id="capabilities"
        aria-labelledby="capabilities-title"
      >
        <Container>
          <div className={styles.sectionIntro}>
            <p className={styles.eyebrow}>Capabilities</p>
            <h2 id="capabilities-title">Key Capabilities</h2>
          </div>
          <ul className={styles.capabilityList}>
            {capabilities.map((capability) => (
              <li className={styles.capability} key={capability.title}>
                <div className={styles.capabilityHead}>
                  <span className={styles.capabilityIndex}>
                    {capability.index}
                  </span>
                  <StrokeIcon name={capability.icon} />
                </div>
                <h3>{capability.title}</h3>
                <p>{capability.description}</p>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section
        className={styles.cta}
        aria-labelledby="industrial-safety-cta-title"
        data-robotics-dark
      >
        <Container className={`${styles.ctaInner} ${localStyles.ctaInner}`}>
          <div className={`${styles.ctaCopy} ${localStyles.ctaCopy}`}>
            <p className={styles.eyebrow}>Start a conversation</p>
            <h2
              className={localStyles.ctaTitle}
              id="industrial-safety-cta-title"
            >
              Bring real-time awareness to industrial safety.
            </h2>
          </div>
          <div className={styles.ctaAction}>
            <p>
              Explore how edge AI can help teams understand worksites, identify
              safety-related situations, and respond faster in real industrial
              environments.
            </p>
            <Link className={styles.ctaButton} href={siteRoutes.contact}>
              <span>Contact Us</span>
              <span className={styles.ctaLine} aria-hidden="true" />
              <span className={styles.ctaArrow} aria-hidden="true">
                →
              </span>
            </Link>
          </div>
        </Container>
      </section>
    </div>
  );
}
