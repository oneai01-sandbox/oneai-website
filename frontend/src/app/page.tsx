import { CaseStudiesOverview } from "@/components/home/CaseStudiesOverview/CaseStudiesOverview";
import { FinalCTA } from "@/components/home/FinalCTA/FinalCTA";
import { HeroSection } from "@/components/home/HeroSection/HeroSection";
import { PartnersSection } from "@/components/home/PartnersSection/PartnersSection";
import { ProductOverview } from "@/components/home/ProductOverview/ProductOverview";
import { PoweringShowcase } from "@/components/home/PoweringShowcase/PoweringShowcase";

import styles from "./page.module.css";

export default function HomePage() {
  return (
    <div className={styles.homePage}>
      <HeroSection />
      <PoweringShowcase />
      <ProductOverview />
      <CaseStudiesOverview />
      <PartnersSection />
      <FinalCTA />
    </div>
  );
}
