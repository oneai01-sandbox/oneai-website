import { siteContact } from "@/config/site";
import styles from "./LocationSection.module.css";

export function LocationSection() {
  const mapAddress = "서울특별시 금천구 가산디지털2로 143";
  const mapUrl = `https://maps.google.com/maps?q=${encodeURIComponent(
    mapAddress,
  )}&t=&z=15&ie=UTF8&iwloc=&output=embed`;

  return (
    <section className={styles.locationSection}>
      <div className={styles.mapContainer}>
        <iframe
          title="ONE AI Seoul Lab Map"
          src={mapUrl}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen={false}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
      <div className={styles.infoContainer}>
        <h2 className={styles.locationTitle}>ONE AI Seoul Lab</h2>
        <dl className={styles.infoList}>
          <div className={styles.infoItem}>
            <dt>Address</dt>
            <dd>{siteContact.address}</dd>
          </div>
          <div className={styles.infoItem}>
            <dt>Email</dt>
            <dd>
              <a href={`mailto:${siteContact.email}`}>{siteContact.email}</a>
            </dd>
          </div>
          <div className={styles.infoItem}>
            <dt>Business Hours</dt>
            <dd>{siteContact.businessHours}</dd>
          </div>
        </dl>
      </div>
    </section>
  );
}

