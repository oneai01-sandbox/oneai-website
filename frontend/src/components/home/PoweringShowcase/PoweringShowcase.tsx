"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

import { Container } from "@/components/common/Container";

import styles from "./PoweringShowcase.module.css";

const stories = [
  {
    number: "01",
    lead: "Built for",
    rest: "Business",
    description: (
      <>
        Your business has eyes and hands.
        <br />
        Now it needs a brain.
      </>
    ),
    image: "/assets/00_home/built-for-your-business.png",
  },
  {
    number: "02",
    lead: "On",
    rest: "Infrastructure",
    description: (
      <>
        Start without costly GPU infrastructure.
        <br />
        Scale as your business grows.
      </>
    ),
    image: "/assets/00_home/on-your-infrastructure.png",
  },
  {
    number: "03",
    lead: "Under",
    rest: "Control",
    description:
      "Keep your data, models, and intelligence secure within your environment.",
    image: "/assets/00_home/under-your-control.png",
  },
];

export function PoweringShowcase() {
  const [storyProgress, setStoryProgress] = useState(0);
  const sectionRef = useRef<HTMLElement | null>(null);
  const stageRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let frame = 0;

    const updateProgress = () => {
      if (!sectionRef.current || !stageRef.current) {
        return;
      }

      const section = sectionRef.current;
      const stage = stageRef.current;
      const stickyOffset = parseFloat(
        getComputedStyle(stage).top.replace("px", ""),
      );
      const travelDistance = section.offsetHeight - stage.offsetHeight;
      const distanceScrolled = stickyOffset - section.getBoundingClientRect().top;

      setStoryProgress(
        travelDistance > 0
          ? Math.min(1, Math.max(0, distanceScrolled / travelDistance))
          : 0,
      );
    };

    const handleScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(updateProgress);
    };

    updateProgress();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  const storyPosition = storyProgress * (stories.length - 1);
  const activeIndex = Math.min(stories.length - 1, Math.round(storyPosition));
  const activeStory = stories[activeIndex];

  return (
    <section
      className={styles.section}
      aria-label="Your stories"
      ref={sectionRef}
    >
      <div className={styles.stage} ref={stageRef}>
        <div className={styles.frame} aria-hidden="true">
          {stories.map((story, index) => {
            const slideOffset = (index - storyPosition) * 100;

            return (
              <div
                className={`${styles.slide} ${
                  activeIndex === index ? styles.active : ""
                }`}
                key={story.image}
                style={{
                  opacity: Math.max(0, 1 - Math.abs(slideOffset) / 100),
                  transform: `translateY(${slideOffset}%)`,
                }}
              >
                <Image
                  className={styles.image}
                  src={story.image}
                  alt=""
                  fill
                  sizes="100vw"
                  priority={index === 0}
                />
              </div>
            );
          })}
        </div>
        <Container className={styles.inner}>
          <div className={styles.copy}>
            <span className={styles.storyNumber}>{activeStory.number}</span>
            <h2>
              <span className={styles.prefix} key={activeStory.lead}>
                {activeStory.lead}
              </span>
              <span className={styles.connector}>Your</span>
              <span className={styles.storyTitle} key={activeStory.rest}>
                {activeStory.rest}
              </span>
            </h2>
            <p className={styles.description} key={activeStory.number}>
              {activeStory.description}
            </p>
          </div>
        </Container>

        <div className={styles.progress} aria-hidden="true">
          {stories.map((story, index) => (
            <span
              className={activeIndex === index ? styles.current : ""}
              key={story.number}
            >
              {story.number}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
