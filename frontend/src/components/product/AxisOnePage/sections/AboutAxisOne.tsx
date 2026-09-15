import Image from "next/image";

import { BrandName } from "@/components/common/BrandName";

import styles from "./Details.module.css";

export function AboutAxisOne() {
  return (
    <div className={styles.architecture}>
      <div className={styles.architectureCopy}>
        <h3 className={styles.architectureTitle}>
          <BrandName /> is{" "}
          <br className={styles.desktopBreak} />
          a unified platform{" "}
          <br className={styles.mobileBreak} />
          for industrial AI.
        </h3>
        <p>
          It connects field devices, edge computing, data, and AI capabilities
          within a single environment, enabling seamless deployment and operation
          across industrial sites.
        </p>
      </div>

      <div className={styles.aboutVisual}>
        <Image
          className={styles.architectureImage}
          src="/assets/02_product/details/axisone.png"
          alt="Axis.ONE industrial AI platform"
          fill
          sizes="(max-width: 52rem) 90vw, 42vw"
        />
      </div>
    </div>
  );
}
