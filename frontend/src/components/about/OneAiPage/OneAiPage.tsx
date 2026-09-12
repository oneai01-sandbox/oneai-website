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

      <div style={{
      width: '100%',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      /* 타일 벽면 느낌의 다크 슬레이트 배경과 상단 스포트라이트 조명 */
      background: 'radial-gradient(circle at 35% 20%, #2b3543 0%, #11161d 60%, #090c10 100%)',
      padding: '30px'
    }}>
      <Signboard />
    </div>

      {/* Glass Card 쇼케이스 */}
      <GlassCard />

      {/* 2. Mission & Vision */}
      <MissionVision />

      {/* 3. Our Journey */}
      <OurJourney />
    </div>
  );
}
