import type { CSSProperties } from "react";
import Image from "next/image";
import Link from "next/link";

import { Container } from "@/components/common/Container";

import styles from "./PartnersSection.module.css";

type Partner = {
  name: string;
  logo: string | null;
  href?: string;
  maxWidth: string;
  maxHeight: string;
};

// Logo assets and official partner URLs can be added here when they are provided.
export const partners: Partner[] = [
  {
    name: "Intel",
    logo: "/assets/01_about/partners-logos/intel-header-logo.svg",
    maxWidth: "7rem",
    maxHeight: "3rem",
  },
  {
    name: "OPEN Group",
    logo: "/assets/01_about/partners-logos/open-group-logo.png",
    maxWidth: "12rem",
    maxHeight: "4.5rem",
  },
  {
    name: "Hansol",
    logo: "/assets/01_about/partners-logos/hansol-logo.png",
    maxWidth: "11rem",
    maxHeight: "2.6rem",
  },
];

function PartnerMark({ partner }: { partner: Partner }) {
  if (!partner.logo) {
    return (
      <span className={styles.logoFallback} aria-label={partner.name}>
        {partner.name}
      </span>
    );
  }

  return (
    <>
      <Image
        className={styles.logo}
        src={partner.logo}
        alt={partner.name}
        width={480}
        height={200}
        sizes="(max-width: 40rem) 50vw, (max-width: 52rem) 36vw, 22vw"
      />
      <span className={styles.hoverName} aria-hidden="true">
        {partner.name}
      </span>
    </>
  );
}

export function PartnersSection() {
  return (
    <section className={styles.section} aria-labelledby="partners-title">
      <Container>
        <div className={styles.heading}>
          <p className={styles.eyebrow}>Partners &amp; Alliances</p>
          <div className={styles.headingContent}>
            <h2 id="partners-title">
              <span>Building what&apos;s next,</span>
              <span>together.</span>
            </h2>
            <p>
              Working with technology and industry partners to bring practical
              AI into real-world operations.
            </p>
          </div>
        </div>

        <ul className={styles.list} aria-label="Technology and industry partners">
          {partners.map((partner) => {
            const mark = <PartnerMark partner={partner} />;
            const itemStyle = {
              "--logo-max-width": partner.maxWidth,
              "--logo-max-height": partner.maxHeight,
            } as CSSProperties;

            return (
              <li className={styles.partner} key={partner.name} style={itemStyle}>
                {partner.href ? (
                  <Link
                    className={styles.partnerLink}
                    href={partner.href}
                    aria-label={`Visit ${partner.name}`}
                  >
                    {mark}
                  </Link>
                ) : (
                  <div className={styles.partnerMark}>{mark}</div>
                )}
              </li>
            );
          })}
          <li className={styles.partner}>
            <Link
              className={styles.seeMoreLink}
              href="/about/partners"
              aria-label="See more partners and alliances"
            >
              <span>See more</span>
              <span aria-hidden="true">→</span>
            </Link>
          </li>
        </ul>
      </Container>
    </section>
  );
}
