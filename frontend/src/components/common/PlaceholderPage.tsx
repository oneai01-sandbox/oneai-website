import type { ReactNode } from "react";

import { Container } from "./Container";
import styles from "./PlaceholderPage.module.css";

interface PlaceholderPageProps {
  eyebrow: string;
  title: string;
  description: string;
  children?: ReactNode;
  className?: string;
}

export function PlaceholderPage({
  eyebrow,
  title,
  description,
  children,
  className,
}: PlaceholderPageProps) {
  return (
    <section className={`${styles.page} ${className || ""}`.trim()}>
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
