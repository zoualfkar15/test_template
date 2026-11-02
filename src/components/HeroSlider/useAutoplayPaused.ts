"use client";

import { useEffect, useState, type RefObject } from "react";

/**
 * Autoplay only runs while the slider is really being looked at: at least
 * 200px of it inside the viewport (like the original's viewport setting)
 * and the browser tab visible.
 */
export function useAutoplayPaused(stageRef: RefObject<HTMLElement | null>) {
  const [inView, setInView] = useState(true);
  const [tabVisible, setTabVisible] = useState(true);

  useEffect(() => {
    const stage = stageRef.current;
    if (!stage) return;

    const observer = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting), {
      rootMargin: "-200px 0px",
    });
    observer.observe(stage);

    const onVisibilityChange = () => setTabVisible(!document.hidden);
    document.addEventListener("visibilitychange", onVisibilityChange);

    return () => {
      observer.disconnect();
      document.removeEventListener("visibilitychange", onVisibilityChange);
    };
  }, [stageRef]);

  return !inView || !tabVisible;
}
