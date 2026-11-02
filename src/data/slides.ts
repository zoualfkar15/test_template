import type { ArtName } from "@/components/HeroSlider/art";
import { publicFile } from "@/lib/publicPath";

export type Slide = {
  id: string;
  kicker: string;
  title: string;
  lede: string;
  /** Background photo inside /public. */
  image: string;
  /** Gradient laid over the photo to keep the text readable. */
  tint: string;
  /** Shown while the photo loads. */
  fallbackColor: string;
  /** Illustration drawn on top of the photo. */
  art: ArtName;
  /** How far the illustration drifts with the pointer (1 = same as the photo). */
  depth: number;
};

/** How long each slide stays before the slider moves on by itself (ms). */
export const slideDuration = 9000;

export const slides: Slide[] = [
  {
    id: "clouds",
    kicker: "Drift",
    title: "into the weather",
    lede: "A pale road, a pink sky, and nowhere you need to be before the light changes.",
    image: publicFile("/images/sky-clouds.jpg"),
    tint: "linear-gradient(180deg, rgba(48, 24, 40, 0.18), rgba(28, 18, 36, 0.12))",
    fallbackColor: "#c9a3b4",
    art: "clouds",
    depth: 1.8,
  },
  {
    id: "horizon",
    kicker: "Return",
    title: "past the horizon",
    lede: "The long way back still bends. Stay with the last warm edge of the day.",
    image: publicFile("/images/horizon.jpg"),
    tint: "linear-gradient(180deg, rgba(12, 28, 32, 0.2), rgba(8, 16, 18, 0.28))",
    fallbackColor: "#6d8f62",
    art: "horizon",
    depth: 1.3,
  },
  {
    id: "orbit",
    kicker: "2026",
    title: "a long blue mile",
    lede: "Leave the ground at the edge of the frame and let the horizon stay small.",
    image: publicFile("/images/earth.jpg"),
    tint: "linear-gradient(180deg, rgba(4, 8, 20, 0.15), rgba(4, 8, 20, 0.35))",
    fallbackColor: "#0b1b33",
    art: "orbit",
    depth: 1.5,
  },
  {
    id: "field",
    kicker: "Signal",
    title: "under the beam",
    lede: "Something patient hangs over the field. You can wave, or you can just watch.",
    image: publicFile("/images/night-sky.jpg"),
    tint: "linear-gradient(180deg, rgba(8, 10, 24, 0.2), rgba(8, 10, 20, 0.45))",
    fallbackColor: "#101426",
    art: "field",
    depth: 1.7,
  },
];
