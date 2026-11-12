"use client";

import { useEffect, useRef } from "react";

export default function ScrollProgressBar() {
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Feature detection as required by Modern Web Guidance for scroll-progress-indicator
    if (!CSS.supports("animation-timeline", "scroll()")) {
      const handleScroll = () => {
        if (!barRef.current) return;
        const scrollable = document.documentElement.scrollHeight - window.innerHeight;
        if (scrollable <= 0) return;
        const scrolled = window.scrollY;
        const progressPercentage = Math.min(1, Math.max(0, scrolled / scrollable));
        barRef.current.style.transform = `scaleX(${progressPercentage})`;
      };

      window.addEventListener("scroll", handleScroll, { passive: true });
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, []);

  return (
    <div
      id="scroll-progress-bar"
      ref={barRef}
      aria-hidden="true"
      className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-cyan-400 via-emerald-400 to-indigo-500 z-50 origin-left"
    />
  );
}
