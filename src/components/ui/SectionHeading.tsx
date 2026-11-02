import styles from "./SectionHeading.module.css";

type SectionHeadingProps = {
  label?: string;
  title: string;
  intro?: string;
  align?: "left" | "center";
  tone?: "dark" | "light";
};

export default function SectionHeading({ label, title, intro, align = "center", tone = "dark" }: SectionHeadingProps) {
  return (
    <header className={`${styles.heading} ${styles[align]} ${styles[tone]}`}>
      {label && <p className={styles.label}>{label}</p>}
      <h2 className={styles.title}>{title}</h2>
      {intro && <p className={styles.intro}>{intro}</p>}
    </header>
  );
}
