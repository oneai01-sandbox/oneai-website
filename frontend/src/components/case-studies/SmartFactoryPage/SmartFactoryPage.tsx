import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

import { Container } from "@/components/common/Container";
import { siteRoutes } from "@/config/site";

import { RoboticsChrome } from "../RoboticsPage/RoboticsChrome";
import styles from "../RoboticsPage/RoboticsPage.module.css";
import localStyles from "./SmartFactoryPage.module.css";
import { WorkflowMedia } from "./WorkflowMedia";

const pageSections = [
  { id: "overview", label: "Overview" },
  { id: "capabilities", label: "Capabilities" },
  { id: "workflow", label: "Workflow" },
  { id: "demo", label: "Demo" },
] as const;

const demoVideoId = "fXnvlIJL7ik";
const demoVideoTitle = "Smart Factory Vision Demo";

const capabilities = [
  {
    index: "01",
    title: "Vision-Based Inspection",
    description:
      "Detect product conditions and visual patterns using camera-based AI.",
    icon: "eye",
  },
  {
    index: "02",
    title: "Edge AI Inferencing",
    description:
      "Analyze production-line image data close to the machine for faster response.",
    icon: "cpu",
  },
  {
    index: "03",
    title: "Process Monitoring",
    description:
      "Track inspection results and production status across the line.",
    icon: "activity",
  },
  {
    index: "04",
    title: "Dashboard Analytics",
    description:
      "Turn inspection results into charts, metrics, and operational insights.",
    icon: "dashboard",
  },
] as const;

const workflowSteps = [
  {
    index: "01",
    title: "Collect",
    description: "Capture image data from the production line.",
    media: "/02-1.mov",
    alt: "Production-line image data being captured",
  },
  {
    index: "02",
    title: "Annotate & Train",
    description: "Label product images and train inspection models.",
    media: "/case-study-02-annotate-train.png",
    alt: "Product images being labeled to train inspection models",
  },
  {
    index: "03",
    title: "Infer",
    description: "Run edge AI models on production-line images.",
    media: "/02-2.mov",
    alt: "Edge AI inspection running on production-line images",
  },
  {
    index: "04",
    title: "Monitor",
    description:
      "Review inspection results and production trends through the dashboard.",
    media: "/case-study-02-monitor.png",
    alt: "Inspection results shown on a monitoring dashboard",
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

export function SmartFactoryPage() {
  return (
    <div className={styles.page}>
      <RoboticsChrome sections={pageSections} />
      <section
        className={styles.hero}
        aria-labelledby="smart-factory-title"
        data-robotics-hero
        data-robotics-dark
      >
        <div className={styles.heroVisual}>
          <Image
            className={styles.heroImage}
            src="/case-study-02.png"
            alt="Smart factory production line with vision intelligence at the edge"
            fill
            priority
            sizes="100vw"
          />
        </div>
        <Container className={styles.heroInner}>
          <div className={styles.heroCopy}>
            <p className={styles.heroEyebrow}>CASE STUDY 02</p>
            <h1 id="smart-factory-title">Smart Factory Intelligence</h1>
            <p className={styles.heroDescription}>
              ONE AI brings vision intelligence to production lines,
              <br />
              helping factories inspect products, monitor processes, and turn
              visual data into operational insight at the edge.
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
              From Production Line Data to AI-Driven Insight
            </h2>
            <p className={styles.overviewBody}>
              ONE AI connects visual data collection, preprocessing, edge AI inferencing, 
              and dashboard monitoring into a complete smart factory inspection workflow.
            </p>
            <p className={styles.overviewBody}>
              Production-line images are captured, refined, and analyzed at the
              edge, then translated into inspection results and operational
              insights that teams can review through a dashboard.
            </p>
          </div>

          <figure className={styles.overviewFigure}>
            <div
              className={`${styles.overviewVisual} ${localStyles.overviewVideoFrame}`}
            >
              <video
                className={localStyles.overviewVideo}
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                aria-label="Smart Factory overview of production-line inspection and operational insight"
              >
                <source src="/case-study-02-overview.mp4" type="video/mp4" />
                Your browser does not support this video. Please try a different
                browser to view the Smart Factory overview.
              </video>
            </div>
          </figure>
        </Container>
      </section>

      <section
        className={`${styles.capabilities} ${localStyles.capabilities}`}
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
              <li
                className={`${styles.capability} ${localStyles.capability}`}
                key={capability.title}
              >
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
        className={localStyles.workflow}
        id="workflow"
        aria-labelledby="workflow-title"
      >
        <Container>
          <div className={`${styles.sectionIntro} ${localStyles.workflowIntro}`}>
            <p className={styles.eyebrow}>Workflow</p>
            <h2 id="workflow-title">
              From{" "}
              <span className={localStyles.workflowTitlePhrase}>
                Factory Data
              </span>
              <br />
              To{" "}
              <span className={localStyles.workflowTitlePhrase}>
                AI Operation
              </span>
            </h2>
          </div>
          <ol className={localStyles.workflowTrack}>
            {workflowSteps.map((step) => (
              <li className={localStyles.workflowStep} key={step.index}>
                <span className={localStyles.workflowChevron}>
                  <span className={localStyles.workflowIndex}>{step.index}</span>
                </span>
                <span className={localStyles.workflowStem} aria-hidden="true" />
                <div className={localStyles.workflowMedia}>
                  <WorkflowMedia
                    className={localStyles.workflowAsset}
                    src={step.media}
                    alt={step.alt}
                  />
                </div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section className={styles.demo} id="demo" aria-labelledby="demo-title">
        <Container>
          <div className={styles.demoIntro}>
            <div className={styles.demoHeading}>
              <p className={styles.eyebrow}>Demo</p>
              <h2 id="demo-title">Smart Factory Dashboard Demo</h2>
            </div>
            <div className={styles.demoLead}>
              <p className={styles.sectionHeadline}>
                From production-line data to real-time monitoring.
              </p>
              <p className={styles.sectionBody}>
                This demo shows how factory image data moves from inspection to
                dashboard-based monitoring, helping teams review production
                status and inspection results more clearly.
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
        className={styles.cta}
        aria-labelledby="smart-factory-cta-title"
        data-robotics-dark
      >
        <Container className={styles.ctaInner}>
          <div className={styles.ctaCopy}>
            <p className={styles.eyebrow}>Start a conversation</p>
            <h2 id="smart-factory-cta-title">
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
