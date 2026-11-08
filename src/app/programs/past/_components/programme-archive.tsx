"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import {
  type CSSProperties,
  type MouseEvent,
  useEffect,
  useRef,
  useState,
} from "react";
import { SiteContainer } from "@/components/layout/site-container";
import { Polaroid } from "@/components/ui/polaroid";
import type { Program } from "@/lib/programs";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, useGSAP);

function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

// Tween length in seconds, or instant for reduced motion.
function duration(seconds: number) {
  return prefersReducedMotion() ? 0 : seconds;
}

function pad(value: number) {
  return String(value).padStart(2, "0");
}

export function ProgrammeArchive({ programs }: { programs: Program[] }) {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const yearsRef = useRef<HTMLUListElement>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const polaroidRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLSpanElement>(null);
  const photosRef = useRef<HTMLDivElement>(null);
  const animatedRef = useRef(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [headerHeight, setHeaderHeight] = useState<number>();
  const active = programs[activeIndex];

  // Programmes without a photo hide the polaroid; it keeps the last photo while fading out.
  const [shownIndex, setShownIndex] = useState(0);
  if (active.image && shownIndex !== activeIndex) setShownIndex(activeIndex);
  const shown = programs[shownIndex];

  // The programmes and photo sit below the sticky header, so track its height.
  useEffect(() => {
    const header = headerRef.current;
    if (!header) return;
    const observer = new ResizeObserver(() =>
      setHeaderHeight(header.offsetHeight),
    );
    observer.observe(header);
    return () => observer.disconnect();
  }, []);

  // Header height shifts every programme's position, so re-measure the triggers.
  useEffect(() => {
    if (headerHeight) ScrollTrigger.refresh();
  }, [headerHeight]);

  useGSAP(
    () => {
      const section = sectionRef.current;
      const items = gsap.utils.toArray<HTMLElement>("article", listRef.current);
      if (!section) return;

      // The programme in view is the last one whose top has scrolled past 45% of the viewport.
      items.forEach((item, index) => {
        ScrollTrigger.create({
          trigger: item,
          start: "top 45%",
          onEnter: () => setActiveIndex(index),
          onLeaveBack: () => setActiveIndex(Math.max(index - 1, 0)),
        });
      });

      // When scrolling stops inside the hero, finish the move: down to the archive, or back to the top.
      ScrollTrigger.create({
        start: 0,
        end: () =>
          section.getBoundingClientRect().top +
          window.scrollY -
          parseFloat(getComputedStyle(section).scrollMarginTop),
        snap: prefersReducedMotion()
          ? undefined
          : {
              snapTo: [0, 1],
              directional: true,
              delay: 0.1,
              duration: { min: 0.3, max: 0.7 },
              ease: "power2.inOut",
            },
      });
    },
    { scope: sectionRef },
  );

  // Dim every programme except the active one.
  useGSAP(
    () => {
      const items = gsap.utils.toArray<HTMLElement>("article", listRef.current);
      items.forEach((item, index) =>
        gsap.to(item, {
          opacity: index === activeIndex ? 1 : 0.35,
          duration: animatedRef.current ? duration(0.3) : 0,
          overwrite: "auto",
        }),
      );
    },
    { dependencies: [activeIndex], scope: sectionRef },
  );

  // Programmes without a photo fade the whole polaroid out.
  useGSAP(
    () => {
      gsap.to(polaroidRef.current, {
        autoAlpha: active.image ? 1 : 0,
        duration: animatedRef.current ? duration(0.5) : 0,
        overwrite: "auto",
      });
    },
    { dependencies: [Boolean(active.image)], scope: sectionRef },
  );

  // Swap the polaroid photo with a crossfade and a badge pop.
  useGSAP(
    () => {
      const photos = gsap.utils.toArray<HTMLElement>("[data-photo]", photosRef.current);
      const incoming = photos.find((photo) => photo.dataset.photo === String(shownIndex));
      const outgoing = photos.filter((photo) => photo !== incoming);

      if (!animatedRef.current) {
        gsap.set(outgoing, { opacity: 0 });
        gsap.set(incoming ?? [], { opacity: 1 });
        animatedRef.current = true;
        return;
      }

      gsap.to(outgoing, { opacity: 0, duration: duration(0.5), overwrite: "auto" });
      if (incoming) {
        gsap.fromTo(
          incoming,
          { opacity: 0, scale: 1.06 },
          { opacity: 1, scale: 1, duration: duration(0.7), ease: "power2.out", overwrite: "auto" },
        );
      }
      // Tailwind's rotate classes use the separate CSS `rotate` property, so
      // this rotation is an offset on top of the badge's tilt in the markup.
      gsap.fromTo(
        badgeRef.current,
        { scale: 0.7, rotate: 7 },
        { scale: 1, rotate: 0, duration: duration(0.5), ease: "back.out(2)", overwrite: "auto" },
      );
    },
    { dependencies: [shownIndex], scope: sectionRef },
  );

  // On narrow screens the years scroll sideways; keep the active one in view.
  useEffect(() => {
    const years = yearsRef.current;
    const pill = years?.children[activeIndex] as HTMLElement | undefined;
    if (!years || !pill) return;
    gsap.to(years, {
      scrollTo: {
        x: pill.offsetLeft - (years.clientWidth - pill.offsetWidth) / 2,
      },
      duration: duration(0.4),
      ease: "power2.out",
      overwrite: "auto",
    });
  }, [activeIndex]);

  function jumpTo(event: MouseEvent<HTMLAnchorElement>, id: string) {
    event.preventDefault();
    const target = document.getElementById(id);
    if (!target) return;
    gsap.to(window, {
      scrollTo: {
        y: target,
        // Articles carry a scroll margin that clears the navbar and sticky header.
        offsetY: parseFloat(getComputedStyle(target).scrollMarginTop) || 0,
      },
      duration: duration(0.9),
      ease: "power2.inOut",
      overwrite: "auto",
    });
    history.replaceState(null, "", `#${id}`);
  }

  return (
    <section
      ref={sectionRef}
      id="archive"
      aria-labelledby="archive-heading"
      className="scroll-mt-16 [--archive-header:10rem] lg:scroll-mt-20"
      style={
        headerHeight
          ? ({ "--archive-header": `${headerHeight}px` } as CSSProperties)
          : undefined
      }
    >
      <div
        ref={headerRef}
        className="sticky top-16 z-10 border-b border-border bg-background lg:top-20"
      >
        <SiteContainer>
          <div className="flex flex-wrap items-end justify-between gap-x-6 gap-y-1 pt-6 pb-2 sm:pt-10">
            <h2
              id="archive-heading"
              className="text-3xl font-semibold sm:text-5xl"
            >
              Explore the <span className="italic text-primary">archive</span>
            </h2>
            <p className="text-xs text-muted-foreground sm:pb-1.5 sm:text-sm">
              {programs.length} programmes · {programs.at(-1)?.year}–
              {programs[0]?.year}
            </p>
          </div>

          <nav
            aria-label="Jump to a programme year"
            className="pb-2 -mx-4 sm:-mx-6 lg:-mx-4"
          >
            <ul
              ref={yearsRef}
              className="relative flex gap-1 overflow-x-auto px-4 py-4 [scrollbar-width:none] sm:px-6 lg:px-4"
            >
              {programs.map((program, index) => (
                <li key={program.year}>
                  <a
                    href={`#programme-${program.year}`}
                    onClick={(event) =>
                      jumpTo(event, `programme-${program.year}`)
                    }
                    aria-current={index === activeIndex ? "true" : undefined}
                    className={`block rounded-full px-4 py-2 text-sm font-semibold transition-colors focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-ring motion-reduce:transition-none ${
                      index === activeIndex
                        ? "bg-secondary text-secondary-foreground"
                        : "text-secondary-text hover:bg-muted"
                    }`}
                  >
                    {program.year}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </SiteContainer>
      </div>

      <SiteContainer>
        <div className="lg:grid lg:grid-cols-2 lg:gap-16">
          <div ref={listRef}>
            {programs.map((program) => (
              <article
                key={program.year}
                id={`programme-${program.year}`}
                aria-labelledby={`programme-${program.year}-title`}
                className="scroll-mt-[calc(4rem+var(--archive-header))] border-b border-border py-10 last:border-b-0 lg:min-h-[26rem] lg:scroll-mt-[calc(5rem+var(--archive-header))] lg:py-12"
              >
                {program.image && (
                  <div className="relative mb-6 aspect-3/2 overflow-hidden bg-muted lg:hidden">
                    <Image
                      src={program.image.src}
                      alt={program.image.alt}
                      fill
                      sizes="(min-width: 640px) 608px, 100vw"
                      className="object-cover"
                    />
                  </div>
                )}
                <div className="flex items-start gap-5 sm:gap-8">
                  <p className="font-heading text-5xl leading-none text-primary sm:text-6xl">
                    <time dateTime={String(program.year)}>{program.year}</time>
                  </p>
                  <div className="min-w-0 pt-1">
                    <h3
                      id={`programme-${program.year}-title`}
                      className="text-xl leading-snug sm:text-2xl"
                    >
                      {program.title}
                    </h3>
                    <p className="mt-1 text-xs leading-5 text-muted-foreground sm:text-sm">
                      {program.location.name}
                    </p>
                  </div>
                </div>
                <p className="mt-6 text-sm leading-7 text-foreground/75 sm:text-[15px]">
                  {program.description}
                </p>
              </article>
            ))}
          </div>

          <div className="hidden lg:sticky lg:top-[calc(5rem+var(--archive-header))] lg:flex lg:h-[calc(100svh-5rem-var(--archive-header))] lg:items-center lg:justify-center lg:self-start">
            <div
              ref={polaroidRef}
              aria-hidden={!active.image}
              className="relative w-full max-w-lg -rotate-2"
            >
              <Polaroid className="pb-4 sm:pb-5">
                <div
                  ref={photosRef}
                  className="relative aspect-4/3 overflow-hidden bg-neutral-100"
                >
                  {programs.map((program, index) =>
                    program.image ? (
                      // Opacity is driven by GSAP; the class only covers first paint.
                      <div
                        key={program.year}
                        data-photo={index}
                        className={`absolute inset-0 ${index === 0 ? "" : "opacity-0"}`}
                      >
                        <Image
                          src={program.image.src}
                          alt={index === shownIndex ? program.image.alt : ""}
                          fill
                          sizes="(min-width: 1152px) 512px, 45vw"
                          className="object-cover"
                        />
                      </div>
                    ) : null,
                  )}
                </div>
                <div
                  aria-hidden
                  className="mt-4 flex items-baseline justify-between gap-4 px-1"
                >
                  <p className="font-heading text-lg leading-snug text-neutral-900">
                    {shown.title}
                  </p>
                  <p className="shrink-0 text-xs font-semibold tabular-nums text-neutral-600">
                    {pad(shownIndex + 1)} / {pad(programs.length)}
                  </p>
                </div>
              </Polaroid>
              <span
                ref={badgeRef}
                aria-hidden
                className="absolute -right-4 -top-3 rotate-3 bg-accent px-3 py-1 text-xs font-bold tracking-wider text-accent-foreground shadow-sm"
              >
                {shown.year}
              </span>
            </div>
          </div>
        </div>
      </SiteContainer>
    </section>
  );
}
