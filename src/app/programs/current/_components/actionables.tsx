"use client";

import { ArrowLeft, ArrowRight, Pause, Play } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useCarousel } from "@/components/ui/use-carousel";
import { Polaroid } from "@/components/ui/polaroid";

const actionables = [
  {
    title: "Education",
    tagline: "Inspiring young generations",
    description:
      "Business, marketing, and financial basics for local enterprises, alongside nature walks and guided reflections that build conservation awareness around Way Kambas.",
    image: "/images/landing/way-kambas-classroom.jpg",
    alt: "Residents and volunteers discussing plans during the Way Kambas community visit",
  },
  {
    title: "Technology",
    tagline: "Modernising local farming",
    description:
      "A greenhouse built with the community to modernise local agricultural practices, and this website, so future sponsors and partners can discover MKP and get involved.",
    image: "/images/landing/way-kambas-garden.jpg",
    alt: "Vegetable beds visited while exploring agricultural initiatives in Way Kambas",
  },
  {
    title: "Media",
    tagline: "Documenting the journey",
    description:
      "Photos, video, and stories from Way Kambas, shared so supporters can follow MKP 2027 from preparation through to the week on site.",
    image: "/images/landing/way-kambas-elephant.jpg",
    alt: "An elephant and visitors during the Way Kambas visit",
  },
];

function pad(value: number) {
  return String(value).padStart(2, "0");
}

export function Actionables() {
  const {
    activeIndex,
    setActiveIndex,
    step,
    paused,
    togglePaused,
    rotationProps,
    liveMode,
  } = useCarousel(actionables.length);
  const active = actionables[activeIndex];

  return (
    <section
      aria-labelledby="actionables-heading"
      className="py-16 sm:py-24"
      {...rotationProps}
    >
      <div className="flex flex-wrap items-end justify-between gap-6">
        <div>
          <h2
            id="actionables-heading"
            className="text-3xl font-bold sm:text-4xl"
          >
            Our <span className="italic text-primary">actionables</span>
          </h2>
          <p className="mt-3 text-sm text-foreground/75 sm:text-base">
            Three programmes running in Way Kambas this year.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2 sm:gap-3">
          <div
            role="group"
            aria-label="Choose a programme"
            className="flex gap-2"
          >
            {actionables.map((item, index) => (
              <Button
                key={item.title}
                size="sm"
                onClick={() => setActiveIndex(index)}
                aria-pressed={index === activeIndex}
                aria-controls="actionable-details"
                className={`border text-xs font-semibold sm:text-sm ${
                  index === activeIndex
                    ? "border-secondary bg-secondary text-secondary-foreground hover:bg-secondary"
                    : "border-secondary-text bg-transparent text-secondary-text hover:bg-muted"
                }`}
              >
                {item.title}
              </Button>
            ))}
          </div>
          <div className="ml-1 flex gap-2 sm:ml-3">
            <Button
              size="icon"
              variant="ghost"
              aria-label="Previous programme"
              aria-controls="actionable-details"
              onClick={() => step(-1)}
              className="border border-border"
            >
              <ArrowLeft />
            </Button>
            <Button
              size="icon"
              variant="ghost"
              aria-label="Next programme"
              aria-controls="actionable-details"
              onClick={() => step(1)}
              className="border border-border"
            >
              <ArrowRight />
            </Button>
            <Button
              size="icon"
              variant="ghost"
              aria-label={paused ? "Play slideshow" : "Pause slideshow"}
              aria-controls="actionable-details"
              onClick={togglePaused}
              className="border border-border"
            >
              {paused ? <Play /> : <Pause />}
            </Button>
          </div>
        </div>
      </div>

      <div className="mt-10 md:mt-14 md:grid md:grid-cols-12 md:items-center">
        <Polaroid className="relative -rotate-2 md:col-[1/8] md:row-1">
          <div className="relative aspect-4/3 bg-muted">
            <Image
              key={active.image}
              src={active.image}
              alt={active.alt}
              fill
              sizes="(min-width: 1152px) 640px, (min-width: 768px) 58vw, 100vw"
              className="object-cover"
            />
          </div>
        </Polaroid>

        <div
          id="actionable-details"
          aria-live={liveMode}
          aria-atomic="true"
          className="relative z-10 mx-4 -mt-6 bg-primary p-6 text-primary-foreground shadow-xl sm:mx-8 sm:p-8 md:col-[7/13] md:row-1 md:mx-0 md:mt-0"
        >
          {/* A darker shade of the brand red keeps the white body copy readable. */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-black/20"
          />
          <div className="relative">
            <div className="flex items-center justify-between">
              <p className="text-xs font-bold tabular-nums">
                {pad(activeIndex + 1)} / {pad(actionables.length)}
              </p>
              <span aria-hidden className="h-0.5 w-8 bg-primary-foreground" />
            </div>
            <h3 className="mt-4 text-3xl font-bold sm:text-4xl">
              {active.title}
            </h3>
            <p className="mt-2 text-[11px] font-bold uppercase tracking-[0.2em]">
              {active.tagline}
            </p>
            <p className="mt-4 text-sm leading-relaxed sm:text-base">
              {active.description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
