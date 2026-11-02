import type { CSSProperties } from "react";
import styles from "./HeroSlider.module.css";

type ProgressBarProps = {
  /** Restarts the bar whenever the slide changes. */
  index: number;
  duration: number;
  paused: boolean;
  onComplete: () => void;
};

/**
 * Thin bar on the right edge that fills while a slide is shown.
 * It is also the autoplay timer: when its fill animation ends, the slider
 * moves on, so the bar and the slide change can never drift apart.
 */
export default function ProgressBar({ index, duration, paused, onComplete }: ProgressBarProps) {
  return (
    <div className={styles.progress} aria-hidden="true">
      <div
        key={index}
        className={styles.progressFill}
        style={{ "--duration": `${duration}ms`, animationPlayState: paused ? "paused" : "running" } as CSSProperties}
        onAnimationEnd={onComplete}
      />
    </div>
  );
}
