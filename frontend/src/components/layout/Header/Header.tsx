import Link from "next/link";
import Image from "next/image";

import { MobileNavigation } from "../MobileNavigation/MobileNavigation";
import { Navigation } from "../Navigation/Navigation";
import styles from "./Header.module.css";

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Link className={styles.logo} href="/" aria-label="ONE AI home">
          <Image
            className={styles.logoImage}
            src="/one-ai-logo.png"
            alt="ONE AI"
            width={128}
            height={49}
            priority
          />
        </Link>
        <Navigation />
        <MobileNavigation />
      </div>
    </header>
  );
}
