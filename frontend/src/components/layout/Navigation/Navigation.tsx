"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import {
  demoCta,
  isNavigationItemActive,
  navigationItems,
  syncSamePageHash,
} from "@/config/navigation";

import styles from "./Navigation.module.css";

export function Navigation() {
  const pathname = usePathname();
  const [hash, setHash] = useState("");
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [clearedMenus, setClearedMenus] = useState<string[]>([]);

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

  return (
    <nav className={styles.navigation} aria-label="Main navigation">
      <ul className={styles.menu}>
        {navigationItems.map((item) => {
          const menuId = `desktop-menu-${item.label.toLowerCase().replaceAll(" ", "-")}`;
          const active =
            isNavigationItemActive(item.href, pathname, hash) ||
            Boolean(
              item.children?.some((child) =>
                isNavigationItemActive(child.href, pathname, hash),
              ),
            );

          return (
            <li
              className={styles.menuItem}
              data-open={openMenu === item.label}
              key={item.label}
              onMouseLeave={(event) => {
                setClearedMenus((current) =>
                  current.includes(item.label)
                    ? current
                    : [...current, item.label],
                );

                const focused = document.activeElement;
                if (
                  focused instanceof HTMLElement &&
                  event.currentTarget.contains(focused)
                ) {
                  focused.blur();
                }
              }}
            >
              <div className={styles.menuHeading}>
                <Link
                  className={active ? styles.active : undefined}
                  href={item.href}
                  onClick={() => {
                    syncSamePageHash(item.href);
                    setOpenMenu(null);
                  }}
                >
                  {item.label}
                </Link>
                {item.children && (
                  <button
                    className={styles.menuToggle}
                    type="button"
                    aria-controls={menuId}
                    aria-expanded={openMenu === item.label}
                    aria-label={`Toggle ${item.label} submenu`}
                    onClick={() =>
                      setOpenMenu((current) =>
                        current === item.label ? null : item.label,
                      )
                    }
                  >
                    <span aria-hidden="true">⌄</span>
                  </button>
                )}
              </div>
              {item.children && (
                <ul className={styles.submenu} id={menuId}>
                  {item.children.map((child) => (
                    <li key={child.href}>
                      <Link
                        className={
                          !clearedMenus.includes(item.label) &&
                          isNavigationItemActive(child.href, pathname, hash)
                            ? styles.submenuActive
                            : undefined
                        }
                        href={child.href}
                        onClick={(event) => {
                          syncSamePageHash(child.href);
                          setOpenMenu(null);
                          event.currentTarget.blur();
                        }}
                      >
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
      <Link className={styles.cta} href={demoCta.href}>
        {demoCta.label}
      </Link>
    </nav>
  );
}
