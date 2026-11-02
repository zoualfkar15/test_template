import Image from "next/image";
import type { CSSProperties } from "react";
import type { Slide as SlideData } from "@/data/slides";
import { artworks } from "./art";
import styles from "./HeroSlider.module.css";

type SlideProps = {
  slide: SlideData;
  position: number;
  total: number;
  active: boolean;
  /** The slide being covered by the incoming one. */
  leaving: boolean;
  onMore: () => void;
};

export default function Slide({ slide, position, total, active, leaving, onMore }: SlideProps) {
  const Art = artworks[slide.art];
  const Heading = position === 1 ? "h1" : "h2";
  const stateClass = active ? styles.active : leaving ? styles.leaving : "";

  return (
    <section
      className={`${styles.slide} ${stateClass}`}
      aria-roledescription="slide"
      aria-label={`${position} of ${total}`}
      aria-hidden={!active}
      inert={!active}
    >
      {/* Three layers, each with one job:
          background = pointer parallax, reveal = skew/blur entrance, zoom = slow Ken Burns zoom. */}
      <div className={styles.background}>
        <div className={styles.reveal} style={{ backgroundColor: slide.fallbackColor }}>
          <div className={styles.zoom} style={{ "--tint": slide.tint } as CSSProperties}>
            <Image src={slide.image} alt="" fill sizes="100vw" priority={position === 1} className={styles.photo} />
          </div>
        </div>
      </div>
      <div className={styles.veil} />

      <div className={styles.stack}>
        <p className={styles.kicker}>{slide.kicker}</p>
        <Heading className={styles.title}>{slide.title}</Heading>
        <div className={styles.art} style={{ "--depth": slide.depth } as CSSProperties} aria-hidden="true">
          <Art />
        </div>
        <p className={styles.lede}>{slide.lede}</p>
        <button type="button" className={styles.more} onClick={onMore}>
          More
        </button>
      </div>
    </section>
  );
}
