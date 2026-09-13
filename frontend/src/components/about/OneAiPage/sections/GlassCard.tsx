import React from 'react';
import Image from 'next/image';
import { Container } from '@/components/common/Container';
import styles from './GlassCard.module.css';

interface GlassCardProps {
  className?: string;
  platformTitle?: string;
  tagline?: string;
}

export const GlassCard: React.FC<GlassCardProps> = ({ 
  className = '', 
  platformTitle = 'Industrial Edge Intelligence Platform', 
  tagline = 'Introducing ONE AI, the only domestic company with full-stack On-Device Physical AI, and one of Asia’s fastest-growing industrial edge AI companies.'    
}) => {
  return (
    <section
      className={`${styles.section} ${className}`.trim()}
      aria-labelledby="platform-showcase-title"
    >
      <Container className={styles.container}>
        {/* 좌측: 글래스 카드 (4:3 비율) */}
        <div className={styles.cardContainer}>
          {/* 4개의 모서리 메탈 볼트 (Standoffs) */}
          <div className={`${styles.bolt} ${styles.boltTopLeft}`} />
          <div className={`${styles.bolt} ${styles.boltTopRight}`} />
          <div className={`${styles.bolt} ${styles.boltBottomLeft}`} />
          <div className={`${styles.bolt} ${styles.boltBottomRight}`} />

          <div className={styles.centerContent}>
            <div className={styles.logoWrapper}>
              {/* 로고 뒤 네온 블루 글로우 효과 */}
              <div className={styles.logoGlow} />

              {/* 로고 이미지 (one-ai-logo-ver1.png) */}
              <div className={styles.brandTitle}>
                <Image
                  src="/one-ai-logo-ver1.png"
                  alt="ONE AI"
                  width={480}
                  height={160}
                  className={styles.brandLogoImage}
                  priority
                  style={{ width: "auto", height: "auto" }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* 우측: platformTitle 및 tagline 영역 */}
        <div className={styles.infoArea}>
          <h2 className={styles.platformTitle} id="platform-showcase-title">
            {platformTitle}
          </h2>
          <p className={styles.taglineText}>
            {tagline}
          </p>
        </div>
      </Container>
    </section>
  );
};

export default GlassCard;