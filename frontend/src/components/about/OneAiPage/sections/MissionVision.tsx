import { Container } from "@/components/common/Container";

import styles from "./MissionVision.module.css";

const values = [
  {
    tag: "Our Mission",
    title: "Bring Physical AI to Every Machine & Every Operation",
    description:
      "모든 산업 설비와 디바이스에 독립적인 엣지 지능을 부여하여, 현장 작업자의 안전을 지키고 생산 효율을 극대화합니다.",
    points: [
      "현장 저사양 CPU 기반의 실시간 물리 제어 지능 구현",
      "클라우드 지연 없는 완벽한 폐쇄망 온디바이스 운영",
      "복잡한 산업 환경에 최적화된 올인원 풀스택 아키텍처",
    ],
  },
  {
    tag: "Our Vision",
    title: "The Standard for On-Device Physical AI in Asia",
    description:
      "아시아를 넘어 글로벌 제조·로보틱스·스마트 인프라 생태계에서 가장 신뢰받는 온디바이스 피지컬 AI 플랫폼 표준으로 도약합니다.",
    points: [
      "아시아에서 가장 빠른 온디바이스 AI 성장 지표 달성",
      "파트너사와 함께 확장하는 산업용 엣지 AI 에코시스템",
      "지속 가능한 비용 효율과 안전한 산업 환경의 새로운 기준",
    ],
  },
] as const;

export function MissionVision() {
  return (
    <section className={styles.section} aria-labelledby="mission-vision-title">
      <Container>
        <div className={styles.heading}>
          <p className={styles.eyebrow}>Mission &amp; Vision</p>
          <h2 id="mission-vision-title">
            인텔리전스를 물리적 현장으로,
            <br />더 안전하고 스마트한 세상
          </h2>
          <p>
            ONE AI는 기술적 한계를 뛰어넘어 현실의 물리적 공간에서 직접 작동하는
            진정한 On-Device Physical AI를 만들어갑니다.
          </p>
        </div>

        <div className={styles.cardsGrid}>
          {values.map((item) => (
            <article className={styles.card} key={item.tag}>
              <span className={styles.cardTag}>{item.tag}</span>
              <h3 className={styles.cardTitle}>{item.title}</h3>
              <p className={styles.cardDescription}>{item.description}</p>
              <ul className={styles.cardList}>
                {item.points.map((point) => (
                  <li className={styles.cardListItem} key={point}>
                    <span className={styles.bullet} aria-hidden="true">
                      •
                    </span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        {/* Part 2: 시각화 이미지 추가 예정 영역 */}
        <div
          className={styles.visualSlot}
          role="region"
          aria-label="Mission & Vision Visualization Area"
        >
          <span className={styles.visualBadge}>Image Asset Slot</span>
          <p className={styles.visualTitle}>
            Mission &amp; Vision Architecture Visualization
          </p>
          <p className={styles.visualDesc}>
            물리적 현장(Edge)과 지능형 제어(Physical AI)가 연결되는 ONE AI의 핵심
            아키텍처 시각화 그래픽이 이곳에 추가될 예정입니다.
          </p>
        </div>
      </Container>
    </section>
  );
}
