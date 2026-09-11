import type { MetadataRoute } from "next";

import { siteConfig } from "@/config/site";

export const dynamic = "force-static";

const routes = [
  "/",
  "/about",
  "/about/one-ai",
  "/about/leadership",
  "/about/partners",
  "/about/newsroom",
  "/product",
  "/product/axis-one",
  "/case-studies",
  "/case-studies/robotics",
  "/case-studies/smart-factory",
  "/case-studies/industrial-safety",
  "/case-studies/healthcare",
  "/support",
  "/support/contact",
  "/support/technical-support",
  "/request-demo",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${siteConfig.url}${route === "/" ? "" : route}`,
  }));
}
