import Image from "next/image";

import styles from "./Details.module.css";

export function AbstractArchitecture() {
  return (
    <div className={styles.architecture}>
      <div className={styles.architectureCopy}>
        <p>
          AxisONE connects cameras, sensors, robots, and field devices into a
          unified edge AI workflow.
        </p>
        <p>
          Data collected from the field is processed through optimized AI
          inference, then translated into monitoring, safety, and robot control
          applications.
        </p>
      </div>

      <div className={styles.architectureVisual}>
        <Image
          className={styles.architectureImage}
          src="/abstract-architecture.png"
          alt="AxisONE abstract architecture connecting field devices, data collection, edge AI inference, industrial applications, and MLOps"
          fill
          sizes="(max-width: 52rem) 90vw, 42vw"
        />
      </div>
    </div>
  );
}
