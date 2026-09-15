import styles from "./BrandName.module.css";

type BrandNameProps = {
  className?: string;
  name?: string;
  product?: "ONE" | "EDGE" | "CORE" | "LOOP";
};

export function brandLabel(label: string) {
  return label === "Axis.ONE" ? <BrandName /> : label;
}

export function BrandName({
  className,
  name = "Axis",
  product = "ONE",
}: BrandNameProps) {
  return (
    <span className={`${styles.brand} ${className ?? ""}`.trim()}>
      {name}
      <span className={styles.dot}>.</span>
      {product}
    </span>
  );
}
