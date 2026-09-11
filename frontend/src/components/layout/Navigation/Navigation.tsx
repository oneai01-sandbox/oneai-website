"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { demoCta, navigationItems } from "@/config/navigation";

import styles from "./Navigation.module.css";

function itemIsActive(href: string, pathname: string, hash: string) {
  const [path, anchor] = href.split("#");
  if (anchor) {
    return pathname === path && hash === `#${anchor}`;
  }

  return path === "/" ? pathname === "/" : pathname === path || pathname.startsWith(`${path}/`);
}

export function Navigation() {
  const pathname = usePathname();
  const [hash, setHash] = useState("");
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  useEffect(() => {
    const updateHash = () => setHash(window.location.hash);
    window.addEventListener("hashchange", updateHash);

    return () => window.removeEventListener("hashchange", updateHash);
  }, []);

  return (
    <nav className={styles.navigation} aria-label="Main navigation">
      <ul className={styles.menu}>
        {navigationItems.map((item) => {
          const menuId = `desktop-menu-${item.label.toLowerCase().replaceAll(" ", "-")}`;
          const active = itemIsActive(item.href, pathname, hash);

          return (
            <li
              className={styles.menuItem}
              data-open={openMenu === item.label}
              key={item.label}
            >
              <div className={styles.menuHeading}>
                <Link
                  className={active ? styles.active : undefined}
                  href={item.href}
                  onClick={() => setOpenMenu(null)}
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
                          itemIsActive(child.href, pathname, hash)
                            ? styles.submenuActive
                            : undefined
                        }
                        href={child.href}
                        onClick={() => setOpenMenu(null)}
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
