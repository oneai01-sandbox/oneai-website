"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import { siteRoutes } from "@/config/site";

import styles from "./RoboticsChrome.module.css";

const sections = [
  { id: "overview", label: "Overview" },
  { id: "demo", label: "Demo" },
  { id: "capabilities", label: "Capabilities" },
] as const;

export function RoboticsChrome() {
  const [activeId, setActiveId] = useState<(typeof sections)[number]["id"]>(
    "overview",
  );
  const [open, setOpen] = useState(true);
  const [onDark, setOnDark] = useState(true);

  useEffect(() => {
    const nodes = sections
      .map((section) => document.getElementById(section.id))
      .filter((node): node is HTMLElement => Boolean(node));

    const sectionObserver = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible?.target.id) {
          setActiveId(visible.target.id as (typeof sections)[number]["id"]);
        }
      },
      { rootMargin: "-35% 0px -50% 0px", threshold: [0, 0.2, 0.45, 0.7] },
    );

    nodes.forEach((node) => sectionObserver.observe(node));

    const darkSections = document.querySelectorAll("[data-robotics-dark]");
    const visibleDark = new Set<Element>();
    const darkObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            visibleDark.add(entry.target);
          } else {
            visibleDark.delete(entry.target);
          }
        });
        setOnDark(visibleDark.size > 0);
      },
      { rootMargin: "-38% 0px -38% 0px", threshold: 0 },
    );
    darkSections.forEach((node) => darkObserver.observe(node));

    return () => {
      sectionObserver.disconnect();
      darkObserver.disconnect();
    };
  }, []);

  const goToSection = (id: (typeof sections)[number]["id"]) => {
    document
      .getElementById(id)
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
    window.history.replaceState(null, "", `#${id}`);
    setActiveId(id);
  };

  return (
    <aside
      className={`${styles.floatNav} ${open ? styles.floatNavOpen : ""} ${onDark ? styles.floatNavOnDark : ""}`}
      aria-label="On this page"
    >
        <button
          type="button"
          className={styles.toggle}
          aria-expanded={open}
          aria-controls="robotics-page-nav"
          aria-label={open ? "Collapse page menu" : "Expand page menu"}
          onClick={() => setOpen((current) => !current)}
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            {open ? (
              <path d="m9 6 6 6-6 6" />
            ) : (
              <path d="m15 6-6 6 6 6" />
            )}
          </svg>
        </button>
        <ul id="robotics-page-nav">
          {sections.map((section) => (
            <li key={section.id}>
              <a
                href={`#${section.id}`}
                title={section.label}
                aria-label={section.label}
                aria-current={activeId === section.id ? "location" : undefined}
                onClick={(event) => {
                  event.preventDefault();
                  goToSection(section.id);
                }}
              >
                <span className={styles.dot} aria-hidden="true" />
                <span className={styles.label}>{section.label}</span>
              </a>
            </li>
          ))}
        </ul>
        <Link
          className={styles.floatCta}
          href={siteRoutes.contact}
          title="Contact Us"
          aria-label="Contact Us"
        >
          <span className={styles.dot} aria-hidden="true" />
          <span className={styles.label}>
            Contact Us
            <span aria-hidden="true"> →</span>
          </span>
        </Link>
    </aside>
  );
}
