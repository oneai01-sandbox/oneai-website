import type { ReactNode } from "react";

import { Container } from "./Container";
import styles from "./PlaceholderPage.module.css";

interface PlaceholderPageProps {
  eyebrow: string;
  title: string;
  description: string;
  children?: ReactNode;
}

export function PlaceholderPage({
  eyebrow,
  title,
  description,
  children,
}: PlaceholderPageProps) {
  return (
    <section className={styles.page}>
      <Container>
        <div className={styles.intro}>
          <p className={styles.eyebrow}>{eyebrow}</p>
          <h1>{title}</h1>
          <p className={styles.description}>{description}</p>
        </div>
        {children}
      </Container>
    </section>
  );
}
