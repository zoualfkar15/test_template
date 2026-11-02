import type { Ref } from "react";
import styles from "./HeroSlider.module.css";

type AboutDialogProps = {
  ref: Ref<HTMLDialogElement>;
  onClose: () => void;
};

export default function AboutDialog({ ref, onClose }: AboutDialogProps) {
  return (
    <dialog ref={ref} className={styles.dialog} aria-labelledby="about-title" onClose={onClose}>
      <h2 id="about-title">Into the Weather</h2>
      <p>
        A full-screen parallax slider with four scenes. It moves on by itself, or you can scroll, swipe or use the
        arrows. Move the pointer and the artwork drifts against the photograph.
      </p>
      <p className={styles.dialogNote}>
        Background photos come from Unsplash. The drawings, layout and motion are original.
      </p>
      <form method="dialog">
        <button type="submit">Close</button>
      </form>
    </dialog>
  );
}
