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
    logo: null,
    maxWidth: "7rem",
    maxHeight: "3rem",
  },
  {
    name: "OPEN Group",
    logo: null,
    maxWidth: "9rem",
    maxHeight: "3.25rem",
  },
  {
    name: "Hansol",
    logo: null,
    maxWidth: "7.5rem",
    maxHeight: "3.25rem",
  },
  {
    name: "IGIS Asset Management",
    logo: null,
    maxWidth: "10.5rem",
    maxHeight: "3.5rem",
  },
  {
    name: "Jahyang Hospital",
    logo: null,
    maxWidth: "9rem",
    maxHeight: "4rem",
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
    <Image
      className={styles.logo}
      src={partner.logo}
      alt={partner.name}
      width={240}
      height={100}
      sizes="(max-width: 40rem) 35vw, (max-width: 52rem) 24vw, 16vw"
    />
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
        </ul>
      </Container>
    </section>
  );
}
