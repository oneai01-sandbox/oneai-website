import { CompanyIntro } from "./sections/CompanyIntro";
import { GlassCard } from "./sections/GlassCard";
import { MissionVision } from "./sections/MissionVision";
import { OurJourney } from "./sections/OurJourney";
import { Signboard } from "./sections/Signboard";

import styles from "./OneAiPage.module.css";

export function OneAiPage() {
  return (
    <div className={styles.page}>
      
      {/* 1. 회사 소개말 */}
      <CompanyIntro />

      {/* Signboard 쇼케이스 */}
      {/* <Signboard /> */}

      {/* Glass Card 쇼케이스 */}
      {/* <GlassCard /> */}

      {/* 2. Mission & Vision */}
      {/* <MissionVision /> */}

      {/* 3. Our Journey */}
      <OurJourney />
    </div>
  );
}
