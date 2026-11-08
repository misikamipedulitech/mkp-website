"use client";

import { FocusEvent, useEffect, useState, useSyncExternalStore } from "react";

const reducedMotionQuery = "(prefers-reduced-motion: reduce)";

function subscribeReducedMotion(onChange: () => void) {
  const media = window.matchMedia(reducedMotionQuery);
  media.addEventListener("change", onChange);
  return () => media.removeEventListener("change", onChange);
}

function usePrefersReducedMotion() {
  return useSyncExternalStore(
    subscribeReducedMotion,
    () => window.matchMedia(reducedMotionQuery).matches,
    () => false,
  );
}

// Slide index state that advances on its own every `interval` ms. Rotation
// pauses while a keyboard user is inside the carousel, starts paused for users
// who prefer reduced motion, and can be toggled with `togglePaused`. Any slide
// change (manual or automatic) restarts the countdown. No hover pause: the
// homepage hero is large enough that a resting cursor would stop it for good.
export function useCarousel(count: number, interval = 5000) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [keyboardFocused, setKeyboardFocused] = useState(false);
  const [userPaused, setUserPaused] = useState<boolean | null>(null);
  const reducedMotion = usePrefersReducedMotion();

  const paused = userPaused ?? reducedMotion;
  const rotating = !paused && !keyboardFocused;

  useEffect(() => {
    if (!rotating) return;
    const id = window.setTimeout(
      () => setActiveIndex((index) => (index + 1) % count),
      interval,
    );
    return () => window.clearTimeout(id);
  }, [rotating, activeIndex, count, interval]);

  function step(delta: number) {
    setActiveIndex((index) => (index + delta + count) % count);
  }

  const rotationProps = {
    onFocus: (event: FocusEvent<HTMLElement>) => {
      if (event.target.matches(":focus-visible")) setKeyboardFocused(true);
    },
    onBlur: (event: FocusEvent<HTMLElement>) => {
      if (!event.currentTarget.contains(event.relatedTarget)) {
        setKeyboardFocused(false);
      }
    },
  };

  return {
    activeIndex,
    setActiveIndex,
    step,
    paused,
    togglePaused: () => setUserPaused(!paused),
    rotationProps,
    // Announce slide changes only when the user is driving them.
    liveMode: rotating ? ("off" as const) : ("polite" as const),
  };
}
