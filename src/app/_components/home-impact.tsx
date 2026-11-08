import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { SiteContainer } from "@/components/layout/site-container";
import { ButtonLink } from "@/components/ui/button";

// Outcomes and corresponding project photos from MKP's original archive:
// https://directorsmkp.wixsite.com/misikamipeduli/our-footprints
const impactStories = [
  {
    value: "300+",
    unit: "books donated",
    title: "Books and digital learning in Nias",
    year: "2024",
    place: "Nias",
    image: "/images/about/nias-2024-banner.jpg",
    alt: "MKP 2024 project activities in Nias",
    tileClassName: "aspect-4/3 sm:col-span-2 sm:aspect-16/9 lg:col-span-1 lg:row-span-2 lg:aspect-auto",
    sizes: "(min-width: 1024px) 506px, 100vw",
  },
  {
    value: "24",
    unit: "houses connected to solar power",
    title: "Solar power in Desa Waitaru",
    year: "2019",
    place: "Sumba",
    image: "/images/landing/impact-sumba-2019-full.jpg",
    alt: "MKP 2019 project activities in Sumba",
    tileClassName: "aspect-4/3 lg:aspect-auto",
    sizes: "(min-width: 1024px) 506px, (min-width: 640px) 50vw, 100vw",
  },
  {
    value: "5 km",
    unit: "of water pipeline built",
    title: "Clean water access in Lombok",
    year: "2012",
    place: "Lombok",
    image: "/images/landing/impact-lombok-2012.jpg",
    alt: "MKP 2012 project activities in Lombok",
    tileClassName: "aspect-4/3 lg:aspect-auto",
    sizes: "(min-width: 1024px) 506px, (min-width: 640px) 50vw, 100vw",
  },
];

export function HomeImpact() {
  return (
    <section
      aria-labelledby="impact-heading"
      className="bg-background pt-8 text-foreground sm:pt-10"
    >
      <SiteContainer>
        <div className="mx-auto max-w-2xl lg:max-w-5xl">
          <div className="flex flex-wrap items-center justify-between gap-x-8 gap-y-5">
            <header className="max-w-2xl">
              <p className="text-[11px] font-semibold uppercase tracking-wide text-primary">
                Past programmes
              </p>
              <h2
                id="impact-heading"
                className="mt-3 text-2xl font-bold leading-snug sm:text-3xl"
              >
                Our impact, <span className="italic">across Indonesia.</span>
              </h2>
              <p className="mt-3 max-w-xl text-sm leading-relaxed text-foreground/75">
                A look back at the programmes we&apos;ve carried out and the
                communities we&apos;ve worked alongside.
              </p>
            </header>
            <ButtonLink
              href="/programs/past"
              className="shrink-0 gap-2 px-4 font-semibold uppercase"
            >
              Explore Past Programs{" "}
              <ArrowRight aria-hidden className="size-3.5" />
            </ButtonLink>
          </div>

          <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:h-[520px] lg:grid-rows-2">
            {impactStories.map((story) => (
              <li
                key={story.year}
                className={`relative overflow-hidden rounded-xl bg-muted ${story.tileClassName}`}
              >
                <Image
                  src={story.image}
                  alt={story.alt}
                  fill
                  sizes={story.sizes}
                  className="object-cover"
                />
                <div className="absolute bottom-3 left-3 max-w-[calc(100%-1.5rem)] rounded-lg bg-background/95 px-4 py-3 text-foreground shadow-md sm:bottom-4 sm:left-4">
                  <p className="text-[11px] font-semibold uppercase tracking-wide text-primary">
                    <time dateTime={story.year}>{story.year}</time> · {story.place}
                  </p>
                  <h3 className="mt-1 text-sm leading-snug">{story.title}</h3>
                  <p className="mt-2 flex items-baseline gap-2">
                    <span className="font-heading text-2xl leading-none text-secondary">
                      {story.value}
                    </span>
                    <span className="text-xs text-muted-foreground">{story.unit}</span>
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </SiteContainer>
    </section>
  );
}
