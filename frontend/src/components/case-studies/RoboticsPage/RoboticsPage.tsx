import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

import { Container } from "@/components/common/Container";
import { siteRoutes } from "@/config/site";

import { OverviewVisual } from "./OverviewVisual";
import { RoboticsChrome } from "./RoboticsChrome";
import styles from "./RoboticsPage.module.css";

const annotations = [
  {
    id: "robot-control",
    marker: "A",
    title: "Robot Control",
    description: "Guide precise robotic movement.",
    className: styles.robotControl,
  },
  {
    id: "edge-ai",
    marker: "B",
    title: "Edge AI Inference",
    description: "Analyze visual data in real time.",
    className: styles.edgeAi,
  },
  {
    id: "vision-input",
    marker: "C",
    title: "Vision Input",
    description: "Capture visual data from the workspace.",
    className: styles.visionInput,
  },
  {
    id: "object-recognition",
    marker: "D",
    title: "Object Recognition",
    description: "Identify and locate target parts.",
    className: styles.objectRecognition,
  },
] as const;

const capabilities = [
  {
    index: "01",
    title: "Vision-Based Recognition",
    description:
      "Detect objects, parts, and workspace conditions through camera input.",
    icon: "eye",
  },
  {
    index: "02",
    title: "Real-Time Robot Control",
    description:
      "Turn visual understanding into precise robotic movement.",
    icon: "bot",
  },
  {
    index: "03",
    title: "Edge AI Processing",
    description:
      "Run inference close to the machine, reducing cloud dependency.",
    icon: "cpu",
  },
  {
    index: "04",
    title: "Industrial Task Automation",
    description:
      "Automate repetitive and precision-driven tasks in industrial environments.",
    icon: "factory",
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
  bot: (
    <>
      <path d="M12 8V4H8" />
      <rect width="16" height="12" x="4" y="8" rx="2" />
      <path d="M2 14h2" />
      <path d="M20 14h2" />
      <path d="M15 13v2" />
      <path d="M9 13v2" />
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
  factory: (
    <>
      <path d="M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z" />
      <path d="M17 18h1" />
      <path d="M12 18h1" />
      <path d="M7 18h1" />
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

export function RoboticsPage({
  demoVideoId,
  demoVideoTitle,
}: {
  demoVideoId: string;
  demoVideoTitle: string;
}) {
  return (
    <div className={styles.page}>
      <RoboticsChrome />
      <section
        className={styles.hero}
        aria-labelledby="robotics-title"
        data-robotics-hero
        data-robotics-dark
      >
        <div className={styles.heroVisual}>
          <Image
            className={styles.heroImage}
            src="/case-study-01.png"
            alt="Robotic arm demonstration for vision-guided automation"
            fill
            priority
            sizes="100vw"
          />
        </div>
        <Container className={styles.heroInner}>
          <div className={styles.heroCopy}>
            <p className={styles.heroEyebrow}>CASE STUDY 01</p>
            <h1 id="robotics-title">Robotics</h1>
            <p className={styles.heroHeadline}>
              Enable robots to see, understand, and act in real time.
            </p>
            <p className={styles.heroDescription}>
              ONE AI brings vision intelligence to robotic systems,
              <br />
              helping machines recognize, decide, and act directly at the edge.
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
            <h2 id="overview-title">
              Vision-guided robotics for industrial automation
            </h2>
            <p className={styles.overviewBody}>
              ONE AI brings vision, inference, and robotic control together in a
              connected edge workflow.
            </p>
            <p className={styles.overviewBody}>
              Robots can recognize target objects, understand workspace
              conditions, and perform automated tasks closer to where operations
              happen.
            </p>
          </div>

          <figure className={styles.overviewFigure}>
            <OverviewVisual annotations={annotations} />
            <figcaption className={styles.annotationList}>
              <ul>
                {annotations.map((annotation) => (
                  <li
                    aria-label={`${annotation.marker}. ${annotation.title}. ${annotation.description}`}
                    key={annotation.id}
                  >
                    <span className={styles.listMarker} aria-hidden="true">
                      {annotation.marker}
                    </span>
                    <div className={styles.listCopy}>
                      <span>{annotation.title}</span>
                      <p>{annotation.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </figcaption>
          </figure>
        </Container>
      </section>

      <section className={styles.demo} id="demo" aria-labelledby="demo-title">
        <Container>
          <div className={styles.demoIntro}>
            <div className={styles.demoHeading}>
              <p className={styles.eyebrow}>Demo</p>
              <h2 id="demo-title">Robotics Demo</h2>
            </div>
            <div className={styles.demoLead}>
              <p className={styles.sectionHeadline}>
                From visual recognition to precise robotic action.
              </p>
              <p className={styles.sectionBody}>
                This demo connects camera input, object recognition, and xArm
                motion control into a real-time robotics workflow.
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
        aria-labelledby="robotics-cta-title"
        data-robotics-dark
      >
        <Container className={styles.ctaInner}>
          <div className={styles.ctaCopy}>
            <p className={styles.eyebrow}>Start a conversation</p>
            <h2 id="robotics-cta-title">
              Bring real-time intelligence to robotic automation.
            </h2>
          </div>
          <div className={styles.ctaAction}>
            <p>
              Explore how ONE AI can connect vision, edge inference, and robotic
              control for your industrial workspace.
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
