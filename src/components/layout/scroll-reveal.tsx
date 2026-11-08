"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { usePathname } from "next/navigation";

gsap.registerPlugin(ScrollTrigger, useGSAP);

// Outermost sections of each page; nested sections ride along with their parent.
const TARGETS = "main section:not(section section)";

// Fades page sections up as they scroll into view, on every route. Sections
// already on screen when the page loads are left alone so nothing flashes, and
// without JS or with reduced motion everything simply stays visible.
export function ScrollReveal() {
  const pathname = usePathname();

  useGSAP(
    () => {
      const media = gsap.matchMedia();

      media.add("(prefers-reduced-motion: no-preference)", () => {
        const targets = gsap.utils
          .toArray<HTMLElement>(TARGETS)
          .filter((el) => el.getBoundingClientRect().top >= window.innerHeight);
        if (targets.length === 0) return;

        // Opacity rather than autoAlpha, so hidden sections stay keyboard reachable.
        gsap.set(targets, { opacity: 0, y: 32 });

        ScrollTrigger.batch(targets, {
          start: "top 90%",
          once: true,
          onEnter: (batch) =>
            gsap.to(batch, {
              opacity: 1,
              y: 0,
              duration: 0.8,
              ease: "power3.out",
              stagger: 0.12,
              // Drop the inline transform afterwards so sticky/fixed children behave.
              clearProps: "opacity,transform",
            }),
        });
      });
    },
    { dependencies: [pathname], revertOnUpdate: true },
  );

  return null;
}
