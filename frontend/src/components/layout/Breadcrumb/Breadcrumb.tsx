"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { getBreadcrumbItems } from "@/config/breadcrumbs";

import styles from "./Breadcrumb.module.css";

function HomeIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M3 10.5 12 3l9 7.5" />
      <path d="M5.5 9.5V21h13V9.5" />
    </svg>
  );
}

export function Breadcrumb() {
  const pathname = usePathname();
  const items = getBreadcrumbItems(pathname);

  if (items.length === 0) {
    return null;
  }

  return (
    <nav
      className={styles.breadcrumb}
      aria-label="Breadcrumb"
      data-site-breadcrumb
    >
      <ol className={styles.list}>
        <li>
          <Link className={styles.homeLink} href="/" aria-label="Home">
            <HomeIcon />
          </Link>
        </li>
        {items.map((item) => (
          <li
            key={`${item.label}-${item.href ?? "current"}`}
            aria-current={item.href ? undefined : "page"}
          >
            {item.href ? <Link href={item.href}>{item.label}</Link> : item.label}
          </li>
        ))}
      </ol>
    </nav>
  );
}
