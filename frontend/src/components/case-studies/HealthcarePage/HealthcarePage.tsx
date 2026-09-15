import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

import { Container } from "@/components/common/Container";
import { siteRoutes } from "@/config/site";

import { RoboticsChrome } from "../RoboticsPage/RoboticsChrome";
import styles from "../RoboticsPage/RoboticsPage.module.css";
import localStyles from "./HealthcarePage.module.css";

const pageSections = [
  { id: "overview", label: "Overview" },
  { id: "demo", label: "Demo" },
  { id: "capabilities", label: "Capabilities" },
] as const;

const demoVideoId = "zGNgtZA4gk0";
const demoVideoTitle = "Medical Assistant Demo";

const capabilities = [
  {
    index: "01",
    title: "EMR-Based Review",
    description:
      "Review patient information and clinical context within an EMR-connected workflow.",
    icon: "fileText",
  },
  {
    index: "02",
    title: "Voice Input Support",
    description:
      "Capture consultation-related voice input and prepare it for AI-assisted processing.",
    icon: "mic",
  },
  {
    index: "03",
    title: "AI Documentation Assistance",
    description:
      "Generate structured draft notes to support faster and more consistent clinical documentation.",
    icon: "filePen",
  },
  {
    index: "04",
    title: "Clinical Workflow Support",
    description:
      "Support more efficient healthcare workflows by connecting records, inputs, and documentation into one AI-assisted process.",
    icon: "workflow",
  },
] as const;

type IconName = (typeof capabilities)[number]["icon"];

const iconPaths: Record<IconName, ReactNode> = {
  fileText: (
    <>
      <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
      <path d="M14 2v4a2 2 0 0 0 2 2h4" />
      <path d="M10 9H8" />
      <path d="M16 13H8" />
      <path d="M16 17H8" />
    </>
  ),
  mic: (
    <>
      <path d="M12 19v3" />
      <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
      <rect width="6" height="11" x="9" y="2" rx="3" />
    </>
  ),
  filePen: (
    <>
      <path d="M12.5 22H18a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v9.5" />
      <path d="M14 2v4a2 2 0 0 0 2 2h4" />
      <path d="M13.378 15.626a1 1 0 1 0-3.004-3.004l-5.01 5.012a2 2 0 0 0-.568.921l-.454 2.269 2.269-.454a2 2 0 0 0 .921-.568z" />
    </>
  ),
  workflow: (
    <>
      <rect width="8" height="8" x="3" y="3" rx="2" />
      <path d="M7 11v4a2 2 0 0 0 2 2h4" />
      <rect width="8" height="8" x="13" y="13" rx="2" />
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

export function HealthcarePage() {
  return (
    <div className={styles.page}>
      <RoboticsChrome sections={pageSections} />
      <section
        className={styles.hero}
        aria-labelledby="healthcare-title"
        data-robotics-hero
        data-robotics-dark
      >
        <div className={styles.heroVisual}>
          <Image
            className={`${styles.heroImage} ${localStyles.heroImage}`}
            src="/assets/03_case-studies/case-study-04.png"
            alt="Automated clinical lab handling specimen vials with edge vision"
            fill
            priority
            sizes="100vw"
          />
        </div>
        <Container className={styles.heroInner}>
          <div className={`${styles.heroCopy} ${localStyles.heroCopy}`}>
            <p className={styles.heroEyebrow}>CASE STUDY 04</p>
            <h1 className={localStyles.heroTitle} id="healthcare-title">
              Healthcare Intelligence
            </h1>
            <p className={`${styles.heroHeadline} ${localStyles.heroHeadline}`}>
              AI-powered clinical assistance{" "}
              <br className={localStyles.heroHeadlineBreak} />
              for smarter medical workflows.
            </p>
            <p
              className={`${styles.heroDescription} ${localStyles.heroDescription}`}
            >
              ONE AI Healthcare supports medical teams by connecting patient
              records, voice-based inputs, and AI-assisted documentation into a
              more efficient clinical workflow.
            </p>
          </div>
        </Container>
      </section>

      <section
        className={styles.overview}
        id="overview"
        aria-labelledby="overview-title"
      >
        <Container className={`${styles.overviewInner} ${localStyles.overviewInner}`}>
          <div className={`${styles.overviewCopy} ${localStyles.overviewCopy}`}>
            <p className={styles.eyebrow}>Overview</p>
            <h2 className={localStyles.overviewTitle} id="overview-title">
              From Clinical Data to{" "}
              <br className={localStyles.overviewTitleBreak} />
              Smarter Documentation
            </h2>
            <p className={styles.overviewBody}>
              ONE AI Healthcare connects patient records, voice-based inputs,
              and AI-assisted documentation into a streamlined clinical
              workflow.
            </p>
            <p className={styles.overviewBody}>
              By supporting information review and structured note generation,
              it helps medical teams reduce repetitive documentation work and
              focus more on patient care.
            </p>
          </div>

          <figure className={styles.overviewFigure}>
            <div className={styles.overviewVisual}>
              <Image
                className={styles.overviewImage}
                src="/assets/03_case-studies/case-study-04-overview.png"
                alt="Clinical workflow from patient records and voice input through AI analysis to structured medical documentation"
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
              <h2 id="demo-title">Medical Assistant Demo</h2>
            </div>
            <div className={`${styles.demoLead} ${localStyles.demoLead}`}>
              <p className={`${styles.sectionHeadline} ${localStyles.demoHeadline}`}>
                From EMR records to structured clinical notes.
              </p>
              <p className={styles.sectionBody}>
                This demo connects patient information, voice input, and
                AI-assisted documentation to support more efficient medical
                workflows.
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
        aria-labelledby="healthcare-cta-title"
        data-robotics-dark
      >
        <Container className={`${styles.ctaInner} ${localStyles.ctaInner}`}>
          <div className={`${styles.ctaCopy} ${localStyles.ctaCopy}`}>
            <p className={styles.eyebrow}>Start a conversation</p>
            <h2 className={localStyles.ctaTitle} id="healthcare-cta-title">
              Bring AI assistance closer to clinical workflows.
            </h2>
          </div>
          <div className={styles.ctaAction}>
            <p>
              Connect patient information, voice input, 
              and documentation support into a smarter healthcare workflow with ONE AI.
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
