import type { Metadata } from "next";

export const siteConfig = {
  name: "ONE AI",
  url: "https://one-ai.dev",
  description:
    "Industrial edge AI solutions powered directly where intelligence is needed.",
};

// Replace these values when the official company contact details are finalized.
export const siteContact = {
  address: "143, Gasan digital 2-ro, Geumcheon-gu, Seoul, Republic of Korea",
  email: "oneai@one-ai.dev",
  phone: "+82 2-0000-0000",
  businessHours: "Mon - Fri, 09:00 - 18:00 (KST)",
} as const;

export const siteRoutes = {
  contact: "/support/contact",
  contactForm: "https://forms.cloud.microsoft/r/xvZFGvMjn9",
  requestDemo: "/request-demo",
  privacy: "/privacy-policy",
} as const;

export function createPageMetadata(
  title: string,
  description = siteConfig.description,
): Metadata {
  return {
    title,
    description,
    openGraph: {
      title: `${title} | ${siteConfig.name}`,
      description,
      url: siteConfig.url,
      siteName: siteConfig.name,
      type: "website",
    },
  };
}
