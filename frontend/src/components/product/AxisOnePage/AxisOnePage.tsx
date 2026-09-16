import { BrandName } from "@/components/common/BrandName";
import { ProductOverview } from "@/components/home/ProductOverview/ProductOverview";

import { CaseStudies } from "./sections/CaseStudies";
import { Cta } from "./sections/Cta";
import { Details } from "./sections/Details";
import { Hero } from "./sections/Hero";

import styles from "./AxisOnePage.module.css";

export function AxisOnePage() {
  return (
    <div className={styles.page}>
      <Hero />
      <ProductOverview
        headingId="axis-one-overview-title"
        sectionId="overview"
        showLink={false}
        stackedTitle
        tagline={
          <>
            <span>Industrial intelligence,</span>
            <span>built at the edge.</span>
          </>
        }
        description={null}
        title={
          <>
            <span>The core of</span>
            <span>
              <BrandName />
            </span>
          </>
        }
      />
      <Details />
      <CaseStudies />
      <Cta />
    </div>
  );
}
