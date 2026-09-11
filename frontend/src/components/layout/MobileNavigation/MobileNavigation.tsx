"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { demoCta, navigationItems } from "@/config/navigation";

import styles from "./MobileNavigation.module.css";

function itemIsActive(href: string, pathname: string, hash: string) {
  const [path, anchor] = href.split("#");
  if (anchor) {
    return pathname === path && hash === `#${anchor}`;
  }

  return pathname === path || pathname.startsWith(`${path}/`);
}

export function MobileNavigation() {
  const pathname = usePathname();
  const [hash, setHash] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [expandedItem, setExpandedItem] = useState<string | null>(null);

  useEffect(() => {
    const updateHash = () => setHash(window.location.hash);
    window.addEventListener("hashchange", updateHash);

    return () => window.removeEventListener("hashchange", updateHash);
  }, []);

  useEffect(() => {
    if (!isOpen) {
      document.body.style.overflow = "";
      return;
    }

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", closeOnEscape);

    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, [isOpen]);

  const closeMenu = () => {
    setIsOpen(false);
    setExpandedItem(null);
  };

  return (
    <div className={styles.mobileNavigation}>
      <button
        className={styles.menuButton}
        type="button"
        aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
        aria-controls="mobile-navigation-panel"
        aria-expanded={isOpen}
        onClick={() => setIsOpen((current) => !current)}
      >
        <span aria-hidden="true" />
        <span aria-hidden="true" />
        <span aria-hidden="true" />
      </button>

      <div
        className={styles.backdrop}
        data-visible={isOpen}
        aria-hidden="true"
        onClick={closeMenu}
      />
      <nav
        className={styles.panel}
        id="mobile-navigation-panel"
        aria-label="Mobile navigation"
        data-open={isOpen}
        inert={!isOpen}
      >
        <ul className={styles.menu}>
          {navigationItems.map((item) => {
            const submenuId = `mobile-menu-${item.label
              .toLowerCase()
              .replaceAll(" ", "-")}`;

            return (
              <li className={styles.menuItem} key={item.label}>
                <div className={styles.menuHeading}>
                  <Link
                    className={
                      itemIsActive(item.href, pathname, hash) ? styles.active : undefined
                    }
                    href={item.href}
                    onClick={closeMenu}
                  >
                    {item.label}
                  </Link>
                  {item.children && (
                    <button
                      className={styles.submenuToggle}
                      type="button"
                      aria-controls={submenuId}
                      aria-expanded={expandedItem === item.label}
                      aria-label={`Toggle ${item.label} submenu`}
                      onClick={() =>
                        setExpandedItem((current) =>
                          current === item.label ? null : item.label,
                        )
                      }
                    >
                      <span aria-hidden="true">+</span>
                    </button>
                  )}
                </div>
                {item.children && (
                  <ul
                    className={styles.submenu}
                    id={submenuId}
                    data-expanded={expandedItem === item.label}
                  >
                    {item.children.map((child) => (
                      <li key={child.href}>
                        <Link href={child.href} onClick={closeMenu}>
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            );
          })}
        </ul>
        <Link className={styles.cta} href={demoCta.href} onClick={closeMenu}>
          {demoCta.label}
        </Link>
      </nav>
    </div>
  );
}
