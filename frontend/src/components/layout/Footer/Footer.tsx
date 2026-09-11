import Link from "next/link";
import Image from "next/image";

import { Container } from "@/components/common/Container";
import { siteContact, siteRoutes } from "@/config/site";

import styles from "./Footer.module.css";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <Container className={styles.container}>
        <div className={styles.main}>
          <div className={styles.brand}>
            <Link className={styles.logo} href="/" aria-label="ONE AI home">
              <Image
                className={styles.logoImage}
                src="/one-ai-logo.png"
                alt="ONE AI"
                width={160}
                height={61}
              />
            </Link>
            <p className={styles.tagline}>ONE AI, ALL IN ONE.</p>
            <p className={styles.description}>CPU-Powered Industrial Edge AI</p>
            <address className={styles.contact}>
              <span>{siteContact.address}</span>
              <a href={`mailto:${siteContact.email}`}>{siteContact.email}</a>
            </address>
          </div>

          <nav className={styles.links} aria-label="Footer navigation">
            <ul>
              <li>
                <Link className={styles.button} href={siteRoutes.contact}>
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  className={`${styles.button} ${styles.demoButton}`}
                  href={siteRoutes.requestDemo}
                >
                  <span>Request a Demo</span>
                  <span className={styles.arrow} aria-hidden="true">
                    →
                  </span>
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        <div className={styles.bottom}>
          <p>© 2026 ONE AI Inc. All rights reserved.</p>
          <Link className={styles.privacy} href={siteRoutes.privacy}>
            Privacy Policy
          </Link>
        </div>
      </Container>
    </footer>
  );
}
