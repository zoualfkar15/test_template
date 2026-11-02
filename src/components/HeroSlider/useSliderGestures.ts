"use client";

import { useEffect, type RefObject } from "react";

/** Wheel or swipe distance (px) needed to change slides. */
const THRESHOLD = 48;

const KEY_DIRECTIONS: Record<string, 1 | -1> = {
  ArrowDown: 1,
  PageDown: 1,
  ArrowUp: -1,
  PageUp: -1,
};

type Controls = {
  next: () => void;
  prev: () => void;
  isAtEdge: (direction: 1 | -1) => boolean;
  isBusy: () => boolean;
};

/**
 * Wheel, keyboard and touch navigation for the slider.
 *
 * The wheel and arrow keys move between slides while the slider fills the
 * screen. Past the last slide (or before the first) they fall through to
 * normal page scrolling, so the content below stays reachable.
 * On touch screens a horizontal swipe changes slides and a vertical swipe
 * scrolls the page.
 */
export function useSliderGestures(stageRef: RefObject<HTMLElement | null>, controls: Controls) {
  const { next, prev, isAtEdge, isBusy } = controls;

  useEffect(() => {
    const stage = stageRef.current;
    if (!stage) return;

    const step = (direction: 1 | -1) => (direction === 1 ? next() : prev());

    const isFullyInView = () => {
      const top = stage.getBoundingClientRect().top;
      return top >= 0 && top < window.innerHeight / 2;
    };

    let wheelTotal = 0;
    const onWheel = (event: WheelEvent) => {
      const direction = Math.sign(event.deltaY) as 1 | -1 | 0;
      if (direction === 0) return;

      // Swallow trackpad momentum while a transition is running.
      if (isBusy()) {
        event.preventDefault();
        return;
      }
      if (!isFullyInView() || isAtEdge(direction)) {
        wheelTotal = 0;
        return;
      }

      event.preventDefault();
      wheelTotal += event.deltaY;
      if (Math.abs(wheelTotal) < THRESHOLD) return;
      step(direction);
      wheelTotal = 0;
    };

    const onKeyDown = (event: KeyboardEvent) => {
      const direction = KEY_DIRECTIONS[event.key];
      if (!direction || event.altKey || event.ctrlKey || event.metaKey) return;

      const target = event.target as HTMLElement | null;
      if (target?.closest("input, textarea, select, dialog, [contenteditable]")) return;
      if (!isFullyInView() || isAtEdge(direction)) return;

      event.preventDefault();
      step(direction);
    };

    let touchStart: { x: number; y: number } | null = null;
    const onTouchStart = (event: TouchEvent) => {
      const touch = event.touches[0];
      touchStart = { x: touch.clientX, y: touch.clientY };
    };
    const onTouchEnd = (event: TouchEvent) => {
      if (!touchStart) return;
      const touch = event.changedTouches[0];
      const dx = touchStart.x - touch.clientX;
      const dy = touchStart.y - touch.clientY;
      touchStart = null;
      if (Math.abs(dx) > THRESHOLD && Math.abs(dx) > Math.abs(dy)) {
        step(dx > 0 ? 1 : -1);
      }
    };

    stage.addEventListener("wheel", onWheel, { passive: false });
    stage.addEventListener("touchstart", onTouchStart, { passive: true });
    stage.addEventListener("touchend", onTouchEnd);
    window.addEventListener("keydown", onKeyDown);

    return () => {
      stage.removeEventListener("wheel", onWheel);
      stage.removeEventListener("touchstart", onTouchStart);
      stage.removeEventListener("touchend", onTouchEnd);
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [stageRef, next, prev, isAtEdge, isBusy]);
}
