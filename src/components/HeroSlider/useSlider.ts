"use client";

import { useCallback, useEffect, useRef, useState } from "react";

/** Whole slide change: 0.5s delay + 1s background transition (see HeroSlider.module.css). */
const TRANSITION_MS = 1500;

function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

/**
 * Tracks the active slide and the one it is replacing.
 *
 * The outgoing slide stays on screen (`leavingIndex`) until the incoming
 * background has finished sliding in over it. Navigation is ignored while
 * that transition runs, so a fast wheel or swipe can't skip scenes.
 */
export function useSlider(count: number) {
  const [index, setIndex] = useState(0);
  const [leavingIndex, setLeavingIndex] = useState<number | null>(null);
  const indexRef = useRef(0);
  const lockedRef = useRef(false);
  const timerRef = useRef<number | undefined>(undefined);

  const goTo = useCallback(
    (next: number) => {
      const wrapped = (next + count) % count;
      if (wrapped === indexRef.current || lockedRef.current) return;

      const previous = indexRef.current;
      indexRef.current = wrapped;
      setIndex(wrapped);

      if (prefersReducedMotion()) return;

      setLeavingIndex(previous);
      lockedRef.current = true;
      timerRef.current = window.setTimeout(() => {
        lockedRef.current = false;
        setLeavingIndex(null);
      }, TRANSITION_MS);
    },
    [count],
  );

  const next = useCallback(() => goTo(indexRef.current + 1), [goTo]);
  const prev = useCallback(() => goTo(indexRef.current - 1), [goTo]);

  /** True when moving in this direction would wrap past the first or last slide. */
  const isAtEdge = useCallback(
    (direction: 1 | -1) => (direction === 1 ? indexRef.current === count - 1 : indexRef.current === 0),
    [count],
  );

  /** True while a slide transition is still running. */
  const isBusy = useCallback(() => lockedRef.current, []);

  useEffect(() => () => window.clearTimeout(timerRef.current), []);

  return { index, leavingIndex, goTo, next, prev, isAtEdge, isBusy };
}
