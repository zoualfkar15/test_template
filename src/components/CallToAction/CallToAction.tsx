import Button from "@/components/ui/Button";
import { callToAction } from "@/data/content";
import styles from "./CallToAction.module.css";

export default function CallToAction() {
  return (
    <section id={callToAction.id} className={styles.section}>
      <div className={styles.panel}>
        <h2>{callToAction.heading}</h2>
        <p>{callToAction.body}</p>
        <div className={styles.actions}>
          <Button href={callToAction.primary.href} variant="light">
            {callToAction.primary.label}
          </Button>
          <Button href={callToAction.secondary.href} variant="outline">
            {callToAction.secondary.label}
          </Button>
        </div>
      </div>
    </section>
  );
}
