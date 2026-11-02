import SectionHeading from "@/components/ui/SectionHeading";
import { DevicesIcon, EditIcon, EyeIcon } from "@/components/ui/Icons";
import { features, type Feature } from "@/data/content";
import styles from "./Features.module.css";

const ICONS: Record<Feature["icon"], typeof EyeIcon> = {
  eye: EyeIcon,
  edit: EditIcon,
  devices: DevicesIcon,
};

export default function Features() {
  return (
    <section id="features" className={styles.section}>
      <SectionHeading title={features.heading} intro={features.intro} />

      <ul className={styles.grid}>
        {features.items.map((item) => {
          const Icon = ICONS[item.icon];
          return (
            <li key={item.title} className={styles.card}>
              <span className={styles.iconWrap}>
                <Icon className={styles.icon} />
              </span>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
