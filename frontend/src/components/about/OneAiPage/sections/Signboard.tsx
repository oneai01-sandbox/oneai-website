import React from 'react';
import Image from 'next/image';
import styles from './Signboard.module.css';

interface SignboardProps {
  className?: string;
  platformTitle?: string;
  tagline?: string;
}

export const Signboard: React.FC<SignboardProps> = ({
  className = '',
  platformTitle = 'Industrial Edge Intelligence Platform',
  tagline = 'AI Technology for a Safer, Smarter, Healthier World',
}) => {
  return (
    <section className={`${styles.section} ${className}`.trim()} aria-label="ONE AI Signboard">
      <div className={styles.boardWrapper}>
        {/* 1. 벽면에 퍼지는 네온 블루 백라이트 글로우 */}
        <div className={styles.neonBacklight} />

      {/* 2. 메인 현판 플레이트 */}
      <div className={styles.plaque}>
        {/* 현판 표면 스포트라이트/브러시드 메탈 광택 효과 */}
        <div className={styles.metalSheen} />

        {/* 4개의 모서리 메탈 볼트 (Standoffs) */}
        <div className={`${styles.bolt} ${styles.boltTopLeft}`} />
        <div className={`${styles.bolt} ${styles.boltTopRight}`} />
        <div className={`${styles.bolt} ${styles.boltBottomLeft}`} />
        <div className={`${styles.bolt} ${styles.boltBottomRight}`} />

        {/* 내부 콘텐츠 영역 */}
        <div className={styles.content}>
          {/* 중앙 양각 로고 및 메인 브랜드 */}
          <div className={styles.brandGroup}>
            <div className={styles.symbolWrapper}>
              {/* 로고 뒷배경 분리용 밝은 톤의 백라이트 조명 슬롯 */}
              <div className={styles.logoBackdropGlow} />

              <Image
                src="/one-ai-logo-ver1.png"
                alt="ONE AI - Intelligence Unified"
                width={480}
                height={160}
                className={styles.brandLogoImage}
                priority
              />
            </div>
          </div>

          {/* 하단 플랫폼 설명 문구 */}
          <div className={styles.descriptionGroup}>
            <p className={styles.platformText}>{platformTitle}</p>
            <p className={styles.taglineText}>{tagline}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);
};

export default Signboard;