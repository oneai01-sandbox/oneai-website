export type TrackRecord = {
  company: string;
  logo: string;
  project: string;
  domain: string;
  logoFit: "contain" | "cover";
  logoScale: number;
};

export const foundingTeamTrackRecords: TrackRecord[] = [
  {
    company: "LG Energy Solution",
    logo: "/assets/01_about/partners-logos/lg-energy-solutions.png",
    project: "Battery defect detection AI",
    domain: "Manufacturing Vision AI",
    logoFit: "cover",
    logoScale: 1.12,
  },
  {
    company: "Hyundai Heavy Industries",
    logo: "/assets/01_about/partners-logos/hyundai-heavy-industries.png",
    project: "Autonomous navigation / NAVISS",
    domain: "Autonomous Mobility",
    logoFit: "cover",
    logoScale: 1,
  },
  {
    company: "Hanwha Vision",
    logo: "/assets/01_about/partners-logos/hanhwa vision.png",
    project: "AI Box / security cameras",
    domain: "Embedded Vision AI",
    logoFit: "contain",
    logoScale: 1,
  },
  {
    company: "Samsung",
    logo: "/assets/01_about/partners-logos/samsung.svg",
    project: "Kiosk Edge AI",
    domain: "Offline Vision Processing",
    logoFit: "contain",
    logoScale: 1,
  },
  {
    company: "Samsung Medison",
    logo: "/assets/01_about/partners-logos/samsung-medison.png",
    project: "Medical-device AI",
    domain: "Healthcare AI",
    logoFit: "contain",
    logoScale: 0.96,
  },
  {
    company: "S-1 Corporation",
    logo: "/assets/01_about/partners-logos/s-1 corp.png",
    project: "Security Edge AI",
    domain: "Real-time Threat Detection",
    logoFit: "contain",
    logoScale: 0.62,
  },
  {
    company: "CES 2025",
    logo: "/assets/01_about/partners-logos/CES.png",
    project: "Autonomous driving modules with Intel",
    domain: "Exhibition Record",
    logoFit: "cover",
    logoScale: 1,
  },
];
