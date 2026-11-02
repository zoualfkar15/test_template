import { ChevronIcon, FacebookIcon, InstagramIcon, YouTubeIcon } from "@/components/ui/Icons";
import styles from "./HeroSlider.module.css";

const SOCIAL_LINKS = [
  { label: "Facebook", href: "https://facebook.com", Icon: FacebookIcon },
  { label: "Instagram", href: "https://instagram.com", Icon: InstagramIcon },
  { label: "YouTube", href: "https://youtube.com", Icon: YouTubeIcon },
];

type SliderControlsProps = {
  index: number;
  total: number;
  onSelect: (index: number) => void;
  onPrev: () => void;
  onNext: () => void;
  onAbout: () => void;
};

const pad = (value: number) => String(value).padStart(2, "0");

/** Everything drawn on top of the slides: about buttons, dot rail, social links and arrows. */
export default function SliderControls({ index, total, onSelect, onPrev, onNext, onAbout }: SliderControlsProps) {
  return (
    <div className={styles.chrome}>
      <button type="button" className={styles.mark} onClick={onAbout} aria-label="About this slider">
        i
      </button>
      <button type="button" className={styles.aboutLink} onClick={onAbout}>
        About
      </button>

      <div className={styles.rail} role="group" aria-label="Scenes">
        {Array.from({ length: total }, (_, dotIndex) => (
          <button
            key={dotIndex}
            type="button"
            className={dotIndex === index ? styles.dotActive : styles.dot}
            aria-label={`Go to scene ${dotIndex + 1}`}
            aria-current={dotIndex === index}
            onClick={() => onSelect(dotIndex)}
          />
        ))}
      </div>

      <div className={styles.dock}>
        <nav className={styles.social} aria-label="Social">
          {SOCIAL_LINKS.map(({ label, href, Icon }) => (
            <a key={label} href={href} aria-label={label} target="_blank" rel="noreferrer">
              <Icon className={styles.icon} />
            </a>
          ))}
        </nav>

        <div className={styles.arrows}>
          <span className={styles.count} aria-live="polite">
            {pad(index + 1)}
          </span>
          <button type="button" onClick={onPrev} aria-label="Previous scene">
            <ChevronIcon direction="up" className={styles.icon} />
          </button>
          <button type="button" onClick={onNext} aria-label="Next scene">
            <ChevronIcon direction="down" className={styles.icon} />
          </button>
        </div>
      </div>
    </div>
  );
}
