import type { NavigationItem } from "@/types/navigation";

export const navigationItems: NavigationItem[] = [
  {
    label: "About",
    href: "/about/one-ai",
    children: [
      { label: "ONE AI", href: "/about/one-ai" },
      // { label: "Leadership", href: "/about/leadership" },
      { label: "Partners & Alliances", href: "/about/partners" },
      // { label: "Newsroom", href: "/about/newsroom" },
    ],
  },
  {
    label: "Product",
    href: "/product/axis-one",
    children: [
      { label: "Axis.ONE", href: "/product/axis-one" },
      { label: "Overview", href: "/product/axis-one#overview" },
      {
        label: "Product Details",
        href: "/product/axis-one#product-details",
      },
    ],
  },
  {
    label: "Case Studies",
    href: "/case-studies",
    children: [
      { label: "Robotics", href: "/case-studies/robotics" },
      { label: "Smart Factory", href: "/case-studies/smart-factory" },
      {
        label: "Industrial Safety",
        href: "/case-studies/industrial-safety",
      },
      { label: "Healthcare", href: "/case-studies/healthcare" },
    ],
  },
  {
    label: "Support",
    href: "/support/contact",
    children: [
      { label: "Contact Us", href: "/support/contact" },
      /** TODO: Technical Support 숨김 제거 */
      // { label: "Technical Support", href: "/support/technical-support" },
    ],
  },
];

export const demoCta = {
  label: "Request a Demo",
  href: "/request-demo",
} as const;

export function isNavigationItemActive(
  href: string,
  pathname: string,
  hash: string,
) {
  const [path, anchor] = href.split("#");
  const currentHash = hash === "#" ? "" : hash;

  if (anchor) {
    return (
      pathname === path &&
      (currentHash === `#${anchor}` || currentHash.startsWith(`#${anchor}/`))
    );
  }

  if (path === "/") {
    return pathname === "/";
  }

  if (pathname !== path && !pathname.startsWith(`${path}/`)) {
    return false;
  }

  return currentHash === "";
}

export function syncSamePageHash(href: string) {
  if (typeof window === "undefined") {
    return;
  }

  const [path, anchor] = href.split("#");

  if (window.location.pathname !== path) {
    return;
  }

  const nextHash = anchor ? `#${anchor}` : "";

  if (window.location.hash === nextHash) {
    return;
  }

  window.history.replaceState(
    null,
    "",
    `${path}${window.location.search}${nextHash}`,
  );
  window.dispatchEvent(new HashChangeEvent("hashchange"));
}
