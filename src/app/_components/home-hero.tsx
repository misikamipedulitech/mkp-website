"use client";

import { ArrowRight, ChevronLeft, ChevronRight, HandHeart, Pause, Play } from "lucide-react";
import Image from "next/image";
import { SiteContainer } from "@/components/layout/site-container";
import { useContactDialog } from "@/components/contact/contact-dialog-provider";
import { Button, ButtonLink } from "@/components/ui/button";
import { useCarousel } from "@/components/ui/use-carousel";

// Reuse existing MKP photos until the original homepage assets are supplied.
const slides = [
  {
    eyebrow: "Misi Kami Peduli",
    title: <>Building bonds.<br /> Improving lives.</>,
    description: "Meet the people behind our mission and discover how we turn a shared purpose into meaningful action.",
    image: "/images/about/team-banner-group.jpg",
    alt: "The MKP team gathered outdoors with a Misi Kami Peduli banner",
    position: "center 55%",
    href: "/about/our-team",
    label: "The people behind MKP",
  },
  {
    eyebrow: "Sustainable Development",
    title: <>Help bring sustainable<br className="hidden sm:block" /> development to Desa Afia.</>,
    description: "We work alongside Indonesian communities to create long-term solutions for a brighter, more resilient future.",
    image: "/images/documentation/nias-2024-solar-frame.jpg",
    alt: "MKP volunteers assembling a solar panel frame beside a rice field",
    position: "center 12%",
    href: "/programs/past",
    label: "Sustainable development in Desa Afia",
  },
  {
    eyebrow: "Education & Community",
    title: <>Small actions.<br /> Lasting possibilities.</>,
    description: "Connecting students and communities through education, shared knowledge, and a spirit of care.",
    image: "/images/about/classroom-visit.jpg",
    alt: "MKP volunteers with schoolchildren in a classroom, holding up a drawing",
    position: "center 18%",
    href: "/about",
    label: "Education and community",
  },
];
const stats = [
  { value: "12", label: "Villages Transformed" },
  { value: "150+", label: "Student Volunteers" },
  { value: "2009", label: "Founded since" },
];

export function HomeHero() {
  const { openContact } = useContactDialog();
  const { activeIndex, setActiveIndex, step, paused, togglePaused, rotationProps, liveMode } = useCarousel(slides.length);
  const active = slides[activeIndex];

  return (
    <>
      <section
        aria-label="MKP highlights"
        aria-roledescription="carousel"
        className="relative isolate bg-secondary text-secondary-foreground"
        {...rotationProps}
      >
        <div aria-hidden="true" className="absolute inset-0 -z-10 overflow-hidden">
          {slides.map((slide, index) => (
            <Image
              key={slide.image}
              src={slide.image}
              alt=""
              fill
              sizes="100vw"
              loading={index === 0 ? "eager" : "lazy"}
              fetchPriority={index === 0 ? "high" : "auto"}
              className={`object-cover transition-opacity duration-500 motion-reduce:transition-none ${index === activeIndex ? "opacity-100" : "opacity-0"}`}
              style={{ objectPosition: slide.position }}
            />
          ))}
          <div className="absolute inset-0 bg-black/45" />
        </div>

        <SiteContainer>
          <div className="relative flex min-h-[440px] items-center justify-center px-6 pb-20 pt-14 sm:min-h-[420px] sm:px-12 lg:min-h-[440px]">
            <div
              id="home-hero-slide"
              aria-live={liveMode}
              aria-atomic="true"
              aria-roledescription="slide"
              aria-label={`${activeIndex + 1} of ${slides.length}`}
              className="w-full max-w-4xl text-center"
            >
              <span className="sr-only">{active.alt}. </span>
              <p className="text-[10px] font-semibold uppercase tracking-[0.3em] sm:text-[11px] sm:tracking-[0.45em]">{active.eyebrow}</p>
              <h1 className="mt-5 text-3xl leading-[1.2] sm:text-4xl lg:text-[46px]">{active.title}</h1>
              <p className="mx-auto mt-5 max-w-2xl text-xs leading-relaxed text-white/90 sm:text-sm">{active.description}</p>
              <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
                <Button
                  onClick={openContact}
                  variant="secondary"
                  size="sm"
                  className="gap-2 px-5 text-[11px] font-semibold uppercase"
                ><HandHeart aria-hidden className="size-4" /> Support us</Button>
                <ButtonLink href={active.href} size="sm" className="gap-2 px-5 text-[11px] font-semibold uppercase">Learn more <ArrowRight aria-hidden className="size-4" /></ButtonLink>
              </div>
            </div>
          </div>
        </SiteContainer>

        <button type="button" aria-label="Previous highlight" aria-controls="home-hero-slide" onClick={() => step(-1)} className="absolute left-1 top-1/2 flex size-11 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:left-6"><span className="flex size-7 items-center justify-center rounded-full bg-accent text-accent-foreground transition-colors hover:bg-accent/80"><ChevronLeft aria-hidden className="size-4" /></span></button>
        <button type="button" aria-label="Next highlight" aria-controls="home-hero-slide" onClick={() => step(1)} className="absolute right-1 top-1/2 flex size-11 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:right-6"><span className="flex size-7 items-center justify-center rounded-full bg-accent text-accent-foreground transition-colors hover:bg-accent/80"><ChevronRight aria-hidden className="size-4" /></span></button>

        <div role="group" aria-label="Choose a highlight" className="absolute bottom-4 left-1/2 flex -translate-x-1/2">
          {slides.map((slide, index) => (
            <button key={slide.label} type="button" aria-label={`Show highlight ${index + 1}: ${slide.label}`} aria-pressed={activeIndex === index} aria-controls="home-hero-slide" onClick={() => setActiveIndex(index)} className="flex size-10 cursor-pointer items-center justify-center rounded-full focus-visible:outline-2 focus-visible:outline-white"><span className={`size-3 rounded-full transition-colors ${activeIndex === index ? "bg-accent" : "bg-white/50 hover:bg-white/80"}`} /></button>
          ))}
          <button type="button" aria-label={paused ? "Play slideshow" : "Pause slideshow"} aria-controls="home-hero-slide" onClick={togglePaused} className="flex size-10 cursor-pointer items-center justify-center rounded-full text-white/70 transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-white">{paused ? <Play aria-hidden className="size-3.5 fill-current" /> : <Pause aria-hidden className="size-3.5 fill-current" />}</button>
        </div>
      </section>

      <section aria-label="MKP at a glance" className="relative isolate overflow-hidden bg-secondary text-secondary-foreground">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 bg-[url('/images/landing/impact-map.svg')] bg-[length:100%_auto] bg-center bg-no-repeat opacity-60" />
        <SiteContainer>
          <dl className="mx-auto grid max-w-3xl grid-cols-3 gap-3 py-7 text-center sm:py-8">
            {stats.map((stat) => <div key={stat.label} className="flex flex-col"><dt className="order-2 mt-2 text-[10px] font-medium sm:text-xs">{stat.label}</dt><dd className="font-heading text-3xl font-bold sm:text-[42px] sm:leading-none">{stat.value}</dd></div>)}
          </dl>
        </SiteContainer>
      </section>
    </>
  );
}
