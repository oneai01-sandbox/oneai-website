import type { NavigationItem } from "@/types/navigation";

export const navigationItems: NavigationItem[] = [
  {
    label: "About",
    href: "/about/one-ai",
    children: [
      { label: "ONE AI", href: "/about/one-ai" },
      { label: "Leadership", href: "/about/leadership" },
      { label: "Partners & Alliances", href: "/about/partners" },
      { label: "Newsroom", href: "/about/newsroom" },
    ],
  },
  {
    label: "Product",
    href: "/product/axis-one",
    children: [
      { label: "Axis ONE", href: "/product/axis-one" },
      { label: "Architecture", href: "/product/axis-one#architecture" },
      { label: "Core Capabilities", href: "/product/axis-one#capabilities" },
      { label: "Deployment", href: "/product/axis-one#deployment" },
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
