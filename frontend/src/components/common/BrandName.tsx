import styles from "./BrandName.module.css";

type BrandNameProps = {
  className?: string;
};

export function brandLabel(label: string) {
  return label === "Axis.ONE" ? <BrandName /> : label;
}

export function BrandName({ className }: BrandNameProps) {
  return (
    <span className={`${styles.brand} ${className ?? ""}`.trim()}>
      Axis<span className={styles.dot}>.</span>ONE
    </span>
  );
}
