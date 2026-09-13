import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/common/Container";
import { siteRoutes } from "@/config/site";

import styles from "./PartnerCards.module.css";

const partners = [
  { name: "Intel", description: "Selected for Intel Ingenius program as global innovation partner", image: "/intel-header-logo.svg" },
  { name: "OPEN Group", description: "Collaborate and Technical support for the Japanese market", image: "/open-group-logo.png" },
  { name: "Hansol", description: "MOU Signed on the Development of a Pre-Safety Detection System", image: "/hansol-logo.png" },
  { name: "IGIS Asset Management", description: "", image: "/igis-logo.jpg" },
  { name: "Jayang Hospital", description: "Proposal for AI Solution to Achieve Operational Efficiency", image: "/jayang-logo.jpg" },
  { name: "Together with us", description: "Contact us to collaborate", href: siteRoutes.contact, isCta: true },
];

export function PartnerCards() {
  return (
    <section className={styles.section} aria-label="Our Partners">
      <Container>
        <ul className={styles.list}>
          {partners.map((partner) => {
            const cardClasses = `${styles.card} ${partner.isCta ? styles.ctaCard : ""}`.trim();
            const cardInner = (
              <>
                  {partner.image && (
                    <div className={styles.imageFrame}>
                      <Image
                        className={styles.image}
                        src={partner.image}
                        alt={`${partner.name} logo`}
                        fill
                        sizes="(max-width: 34rem) 100vw, (max-width: 52rem) 50vw, 33vw"
                      />
                    </div>
                  )}
                  <div className={styles.cardContent}>
                    <h3>{partner.name}</h3>
                    <p>{partner.description}</p>
                  </div>
                  <span className={styles.icon} aria-hidden="true">
                    {partner.href ? "→" : "+"}
                  </span>
              </>
            );

            return (
              <li key={partner.name}>
                {partner.href ? (
                  <Link href={partner.href} className={cardClasses} aria-label={`Visit ${partner.name}`}>
                    {cardInner}
                  </Link>
                ) : (
                  <div className={cardClasses}>{cardInner}</div>
                )}
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
