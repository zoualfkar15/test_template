"use client";

import { useRef, useState, type MouseEvent } from "react";
import { slideDuration, slides } from "@/data/slides";
import Slide from "./Slide";
import SliderControls from "./SliderControls";
import ProgressBar from "./ProgressBar";
import AboutDialog from "./AboutDialog";
import { useSlider } from "./useSlider";
import { useSliderGestures } from "./useSliderGestures";
import { useAutoplayPaused } from "./useAutoplayPaused";
import styles from "./HeroSlider.module.css";

export default function HeroSlider() {
  const stageRef = useRef<HTMLElement>(null);
  const aboutRef = useRef<HTMLDialogElement>(null);
  const [aboutOpen, setAboutOpen] = useState(false);
  const slider = useSlider(slides.length);
  const outOfSight = useAutoplayPaused(stageRef);

  useSliderGestures(stageRef, slider);

  const openAbout = () => {
    aboutRef.current?.showModal();
    setAboutOpen(true);
  };

  // Pointer position (-0.5 to 0.5) drives the parallax through CSS variables,
  // so moving the mouse never re-renders React.
  const handleMouseMove = (event: MouseEvent<HTMLElement>) => {
    const stage = event.currentTarget;
    const bounds = stage.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width - 0.5;
    const y = (event.clientY - bounds.top) / bounds.height - 0.5;
    stage.style.setProperty("--px", x.toFixed(3));
    stage.style.setProperty("--py", y.toFixed(3));
  };

  const handleMouseLeave = (event: MouseEvent<HTMLElement>) => {
    event.currentTarget.style.setProperty("--px", "0");
    event.currentTarget.style.setProperty("--py", "0");
  };

  return (
    <section
      id="scenes"
      ref={stageRef}
      className={styles.stage}
      aria-roledescription="carousel"
      aria-label="Scenes"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {slides.map((slide, slideIndex) => (
        <Slide
          key={slide.id}
          slide={slide}
          position={slideIndex + 1}
          total={slides.length}
          active={slideIndex === slider.index}
          leaving={slideIndex === slider.leavingIndex}
          onMore={slider.next}
        />
      ))}

      <SliderControls
        index={slider.index}
        total={slides.length}
        onSelect={slider.goTo}
        onPrev={slider.prev}
        onNext={slider.next}
        onAbout={openAbout}
      />

      <ProgressBar
        index={slider.index}
        duration={slideDuration}
        paused={outOfSight || aboutOpen}
        onComplete={slider.next}
      />

      <AboutDialog ref={aboutRef} onClose={() => setAboutOpen(false)} />
    </section>
  );
}
