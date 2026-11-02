import { footer, site } from "@/data/content";
import styles from "./Footer.module.css";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.brand}>
          <p className={styles.name}>{site.name}</p>
          <p className={styles.note}>{footer.note}</p>
        </div>

        {footer.columns.map((column) => (
          <nav key={column.title} aria-label={column.title}>
            <h2 className={styles.columnTitle}>{column.title}</h2>
            <ul className={styles.links}>
              {column.links.map((link) => (
                <li key={link.label}>
                  <a href={link.href} {...(link.href.startsWith("http") && { target: "_blank", rel: "noreferrer" })}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </div>

      <p className={styles.copyright}>
        © {year} {site.name}
      </p>
    </footer>
  );
}
