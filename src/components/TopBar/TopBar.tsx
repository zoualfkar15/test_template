import Button from "@/components/ui/Button";
import { site } from "@/data/content";
import styles from "./TopBar.module.css";

export default function TopBar() {
  return (
    <header id="top" className={styles.bar}>
      <a href="#top" className={styles.brand}>
        <span className={styles.logo} aria-hidden="true" />
        {site.name}
      </a>

      <ul className={styles.tags} aria-label="Categories">
        {site.tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>

      <Button href={site.cta.href} size="small">
        {site.cta.label}
      </Button>
    </header>
  );
}
