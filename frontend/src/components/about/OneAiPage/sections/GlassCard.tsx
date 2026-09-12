import React from 'react';
import Image from 'next/image';
import styles from './GlassCard.module.css';

interface GlassCardProps {
  className?: string;
  platformTitle?: string;
  tagline?: string;
}

export const GlassCard: React.FC<GlassCardProps> = ({ 
    className = '', 
    platformTitle = 'Industrial Edge Intelligence Platform', 
    tagline = 'AI Technology for a Safer, Smarter, Healthier World'    
}) => {
  return (
    <section
      className={`${styles.section} ${className}`.trim()}
      aria-label="ONE AI Platform Showcase"
    >
      <div className={styles.cardContainer}>
        {/* 1. 유리 카드 표면 사선 반사광 레이어 */}
        <div className={styles.specularReflection} />

        {/* 4개의 모서리 메탈 볼트 (Standoffs) */}
        <div className={`${styles.bolt} ${styles.boltTopLeft}`} />
        <div className={`${styles.bolt} ${styles.boltTopRight}`} />
        <div className={`${styles.bolt} ${styles.boltBottomLeft}`} />
        <div className={`${styles.bolt} ${styles.boltBottomRight}`} />

        {/* 2. 카드 내부 안쪽 테두리 라인 프레임 */}
        
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
                />
              </div>
            </div>

            {/* 하단 플랫폼 설명 문구 */}
          {/* <div className={styles.descriptionGroup}>
            <p className={styles.platformText}>{platformTitle}</p>
            <p className={styles.taglineText}>{tagline}</p>
          </div> */}

          </div>
        
      </div>
    </section>
  );
};

export default GlassCard;