import { demoCta, navigationItems } from "@/config/navigation";
import { siteRoutes } from "@/config/site";
import type { NavigationItem } from "@/types/navigation";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

function normalizePath(path: string) {
  const withoutHash = path.split("#")[0] ?? path;

  if (withoutHash.length > 1 && withoutHash.endsWith("/")) {
    return withoutHash.slice(0, -1);
  }

  return withoutHash || "/";
}

function sectionRoot(item: NavigationItem) {
  return item.href;
}

function fallbackLabel(path: string) {
  const segment = path.split("/").filter(Boolean).at(-1) ?? path;

  return segment
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

const extraPages: Record<string, BreadcrumbItem[]> = {
  [demoCta.href]: [{ label: demoCta.label }],
  [siteRoutes.privacy]: [{ label: "Privacy Policy" }],
};

export function getBreadcrumbItems(pathname: string): BreadcrumbItem[] {
  const path = normalizePath(pathname);

  if (path === "/") {
    return [];
  }

  for (const item of navigationItems) {
    const pageChild = item.children?.find(
      (child) =>
        !child.href.includes("#") && normalizePath(child.href) === path,
    );

    if (pageChild) {
      return [
        { label: item.label, href: sectionRoot(item) },
        { label: pageChild.label },
      ];
    }
  }

  for (const item of navigationItems) {
    if (normalizePath(item.href) === path || sectionRoot(item) === path) {
      return [{ label: item.label }];
    }
  }

  return extraPages[path] ?? [{ label: fallbackLabel(path) }];
}
