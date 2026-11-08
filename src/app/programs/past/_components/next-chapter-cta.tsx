import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { SiteContainer } from "@/components/layout/site-container";
import { ButtonLink } from "@/components/ui/button";
import { Polaroid } from "@/components/ui/polaroid";

export function NextChapterCta() {
  return (
    <section
      aria-labelledby="next-chapter-heading"
      className="pt-6 pb-16 sm:pb-24"
    >
      <SiteContainer>
        <div className="relative isolate grid items-center gap-10 overflow-hidden rounded-3xl bg-secondary px-6 py-10 text-secondary-foreground sm:px-12 sm:py-14 lg:grid-cols-2">
          <div
            aria-hidden
            className="pointer-events-none absolute -top-24 -right-24 -z-10 size-96 rounded-full border-40 border-primary/25"
          />

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent">
              Our next chapter
            </p>
            <h2
              id="next-chapter-heading"
              className="mt-4 text-4xl font-bold sm:text-5xl"
            >
              Up next:
              <br />
              <span className="text-accent italic">MKP 2027</span>
            </h2>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-secondary-foreground/85 sm:text-base">
              See what we&apos;re preparing with the community in Way Kambas,
              Lampung, and how you can be part of it.
            </p>
            <ButtonLink
              href="/programs/current"
              className="mt-8 rounded-md font-semibold uppercase tracking-wide"
            >
              Current programs
              <ArrowRight />
            </ButtonLink>
          </div>

          <div className="relative mx-auto w-full max-w-sm pb-6">
            <Polaroid className="rotate-3">
              <div className="relative aspect-4/3 bg-muted">
                <Image
                  src="/images/landing/way-kambas-elephant.jpg"
                  alt="An elephant and visitors during the Way Kambas visit"
                  fill
                  sizes="(min-width: 640px) 384px, 90vw"
                  className="object-cover"
                />
              </div>
            </Polaroid>
            <p className="absolute bottom-2 left-0 -rotate-6 bg-accent px-4 py-1.5 text-[11px] font-bold uppercase tracking-widest text-accent-foreground shadow-md sm:-left-6">
              Way Kambas · Lampung
            </p>
          </div>
        </div>
      </SiteContainer>
    </section>
  );
}
