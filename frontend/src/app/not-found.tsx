import Link from "next/link";

import { Container } from "@/components/common/Container";

import styles from "./not-found.module.css";

export default function NotFound() {
  return (
    <section className={styles.page}>
      <Container>
        <p className={styles.eyebrow}>404 / Page not found</p>
        <h1>We couldn&apos;t find that page.</h1>
        <p>The requested address does not exist in the current website.</p>
        <Link href="/">Return to ONE AI home</Link>
      </Container>
    </section>
  );
}
