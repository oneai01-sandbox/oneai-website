import Link from "next/link";

import { Container } from "@/components/common/Container";

import styles from "./HeroSection.module.css";

export function HeroSection() {
  return (
    <section className={styles.hero} aria-labelledby="hero-title">
      <video
        className={styles.video}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-hidden="true"
      >
        <source src="/hero-movie.mp4" type="video/mp4" />
      </video>
      <Container className={styles.inner}>
        <div className={styles.content}>
          <p className={styles.eyebrow}>CPU-Powered Industrial Edge AI</p>
          <h1 id="hero-title">
            ONE AI.
            <br />
            ALL IN ONE.
          </h1>
          <p className={styles.description}>
            One architecture
            <br />
            for real-time AI at the edge
            <br />
            —without cloud or GPU dependency.
          </p>
          <div className={styles.actions}>
            <Link className={styles.primaryAction} href="/product/axis-one">
              Explore Axis ONE
            </Link>
            <Link className={styles.secondaryAction} href="/request-demo">
              Request a Demo
            </Link>
          </div>
        </div>
      </Container>
      <div className={styles.scrollCue} aria-hidden="true">
        <span>Scroll to begin the story</span>
        <span className={styles.scrollLine} />
      </div>
    </section>
  );
}
