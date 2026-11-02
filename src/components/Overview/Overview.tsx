import Image from "next/image";
import Button from "@/components/ui/Button";
import SectionHeading from "@/components/ui/SectionHeading";
import { overview } from "@/data/content";
import { slides } from "@/data/slides";
import styles from "./Overview.module.css";

export default function Overview() {
  const { closing } = overview;

  return (
    <section id="overview" className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.intro}>
          <SectionHeading label={overview.label} title={overview.heading} align="left" tone="light" />
          <p className={styles.body}>{overview.body}</p>
        </div>

        <ul className={styles.thumbs} aria-label="The four scenes">
          {slides.map((slide) => (
            <li key={slide.id}>
              <Image src={slide.image} alt="" fill sizes="(max-width: 860px) 50vw, 280px" className={styles.thumbImage} />
              <span>{slide.title}</span>
            </li>
          ))}
        </ul>

        <ul className={styles.benefits}>
          {overview.benefits.map((benefit) => (
            <li key={benefit.title}>
              <h3>{benefit.title}</h3>
              <p>{benefit.body}</p>
            </li>
          ))}
        </ul>

        <div className={styles.closing}>
          <h3>{closing.heading}</h3>
          <p>{closing.body}</p>
          <Button href={closing.cta.href} variant="light">
            {closing.cta.label}
          </Button>
        </div>
      </div>
    </section>
  );
}
