"use client";

import { useCallback, useEffect, useId, useState } from "react";

import { BrandName } from "@/components/common/BrandName";
import { Container } from "@/components/common/Container";

import { AboutAxisOne } from "./AboutAxisOne";
import { AbstractArchitecture } from "./AbstractArchitecture";
import { CoreCapabilities } from "./CoreCapabilities";
import { TechnicalDetails } from "./TechnicalDetails";

import styles from "./Details.module.css";

const SECTION_ID = "product-details";
const BROCHURE_HREF = "/assets/02_product/axisone-brochure.pdf";
const BROCHURE_FILENAME = "Axis.ONE-Brochure.pdf";

const tabs = [
  { id: "about-axis-one", label: "About Axis.ONE" },
  { id: "platform-structure", label: "Platform Structure" },
  { id: "technical-architecture", label: "Technical Architecture" },
  { id: "core-capabilities", label: "Core Capabilities" },
] as const;

type TabId = (typeof tabs)[number]["id"];

function tabHash(id: TabId) {
  return `#${SECTION_ID}/${id}`;
}

function tabFromHash(hash: string): TabId {
  if (hash.startsWith(`#${SECTION_ID}/`)) {
    const id = hash.slice(`#${SECTION_ID}/`.length);
    if (tabs.some((tab) => tab.id === id)) {
      return id as TabId;
    }
  }

  return tabs[0].id;
}

export function Details() {
  const [activeTab, setActiveTab] = useState<TabId>(tabs[0].id);
  const tablistId = useId();

  const selectTab = useCallback((id: TabId) => {
    setActiveTab(id);

    if (typeof window === "undefined") {
      return;
    }

    const nextHash = tabHash(id);

    if (window.location.hash !== nextHash) {
      window.history.replaceState(null, "", nextHash);
      window.dispatchEvent(new HashChangeEvent("hashchange"));
    }
  }, []);

  useEffect(() => {
    const syncFromHash = () => setActiveTab(tabFromHash(window.location.hash));

    syncFromHash();
    window.addEventListener("hashchange", syncFromHash);

    return () => window.removeEventListener("hashchange", syncFromHash);
  }, []);

  return (
    <section
      className={styles.section}
      id={SECTION_ID}
      aria-labelledby="axis-one-details-title"
    >
      <Container className={styles.inner}>
        <div className={styles.intro}>
          <p className={styles.eyebrow}>Product details</p>
          <h2 id="axis-one-details-title">
            Inside <BrandName />
          </h2>
          <p className={styles.description}>
            Explore how <BrandName /> connects industrial data, edge AI inference,{" "}
            <br />
            and field operations through one unified system.
          </p>
          <a
            className={styles.brochure}
            href={BROCHURE_HREF}
            download={BROCHURE_FILENAME}
          >
            <span>Download Brochure</span>
            <span aria-hidden="true">↓</span>
          </a>
        </div>

        <div className={styles.workspace}>
          <div
            className={styles.tablist}
            role="tablist"
            aria-labelledby="axis-one-details-title"
            aria-orientation="vertical"
            id={tablistId}
            onKeyDown={(event) => {
              const current = tabs.findIndex((tab) => tab.id === activeTab);
              const offset =
                event.key === "ArrowDown" || event.key === "ArrowRight"
                  ? 1
                  : event.key === "ArrowUp" || event.key === "ArrowLeft"
                    ? -1
                    : 0;

              if (!offset) {
                return;
              }

              event.preventDefault();
              const next = tabs[(current + offset + tabs.length) % tabs.length];
              selectTab(next.id);
              document.getElementById(`${SECTION_ID}/${next.id}`)?.focus();
            }}
          >
            {tabs.map((tab, index) => {
              const selected = tab.id === activeTab;
              const tabDomId = `${SECTION_ID}/${tab.id}`;

              return (
                <button
                  className={styles.tab}
                  id={tabDomId}
                  key={tab.id}
                  type="button"
                  role="tab"
                  aria-label={tab.label}
                  aria-controls={`${tabDomId}-panel`}
                  aria-selected={selected}
                  tabIndex={0}
                  onPointerDown={(event) => {
                    if (event.button !== 0) {
                      return;
                    }

                    selectTab(tab.id);
                  }}
                  onClick={(event) => {
                    event.preventDefault();
                    selectTab(tab.id);
                  }}
                >
                  <span className={styles.tabIndex}>
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className={styles.tabLabel}>
                    {tab.id === "about-axis-one" ? (
                      <>
                        About <BrandName />
                      </>
                    ) : (
                      tab.label
                    )}
                  </span>
                </button>
              );
            })}
          </div>

          {tabs.map((tab) => {
            const selected = tab.id === activeTab;
            const tabDomId = `${SECTION_ID}/${tab.id}`;

            return (
              <div
                className={styles.panel}
                id={`${tabDomId}-panel`}
                key={`${tab.id}-panel`}
                role="tabpanel"
                aria-labelledby={tabDomId}
                hidden={!selected}
              >
                {tab.id === "about-axis-one" ? (
                  <AboutAxisOne />
                ) : tab.id === "platform-structure" ? (
                  <AbstractArchitecture />
                ) : tab.id === "technical-architecture" ? (
                  <TechnicalDetails />
                ) : tab.id === "core-capabilities" ? (
                  <CoreCapabilities />
                ) : null}
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
