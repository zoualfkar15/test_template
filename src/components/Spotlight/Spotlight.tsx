import SectionHeading from "@/components/ui/SectionHeading";
import { spotlight } from "@/data/content";
import styles from "./Spotlight.module.css";

export default function Spotlight() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.copy}>
          <SectionHeading label={spotlight.label} title={spotlight.heading} align="left" />
          {spotlight.body.map((paragraph) => (
            <p key={paragraph} className={styles.paragraph}>
              {paragraph}
            </p>
          ))}
          <p className={styles.tip}>
            <strong>Tip:</strong> {spotlight.tip}
          </p>
        </div>

        <figure className={styles.code}>
          <figcaption>src/data/slides.ts</figcaption>
          <pre>
            <code>{spotlight.code}</code>
          </pre>
        </figure>
      </div>
    </section>
  );
}
