"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { brandLabel } from "@/components/common/BrandName";
import {
  demoCta,
  isNavigationItemActive,
  navigationItems,
  syncSamePageHash,
} from "@/config/navigation";

import styles from "./MobileNavigation.module.css";

export function MobileNavigation() {
  const pathname = usePathname();
  const [hash, setHash] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [expandedItem, setExpandedItem] = useState<string | null>(null);

  useEffect(() => {
    const updateHash = () => setHash(window.location.hash);
    updateHash();
    window.addEventListener("hashchange", updateHash);
    window.addEventListener("popstate", updateHash);

    return () => {
      window.removeEventListener("hashchange", updateHash);
      window.removeEventListener("popstate", updateHash);
    };
  }, [pathname]);

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
                      isNavigationItemActive(item.href, pathname, hash) ||
                      Boolean(
                        item.children?.some((child) =>
                          isNavigationItemActive(child.href, pathname, hash),
                        ),
                      )
                        ? styles.active
                        : undefined
                    }
                    href={item.href}
                    onClick={() => {
                      syncSamePageHash(item.href);
                      closeMenu();
                    }}
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
                        <Link
                          href={child.href}
                          onClick={() => {
                            syncSamePageHash(child.href);
                            closeMenu();
                          }}
                        >
                          {brandLabel(child.label)}
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
