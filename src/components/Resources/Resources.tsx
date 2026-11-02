import SectionHeading from "@/components/ui/SectionHeading";
import { resources } from "@/data/content";
import styles from "./Resources.module.css";

export default function Resources() {
  return (
    <section id="resources" className={styles.section}>
      <SectionHeading title={resources.heading} intro={resources.intro} />

      <ol className={styles.grid}>
        {resources.items.map((item, itemIndex) => (
          <li key={item.title} className={styles.card}>
            <span className={styles.step}>{String(itemIndex + 1).padStart(2, "0")}</span>
            <h3>{item.title}</h3>
            <p>{item.body}</p>
            {item.link && (
              <a href={item.link.href} target="_blank" rel="noreferrer" className={styles.link}>
                {item.link.label} →
              </a>
            )}
          </li>
        ))}
      </ol>
    </section>
  );
}
