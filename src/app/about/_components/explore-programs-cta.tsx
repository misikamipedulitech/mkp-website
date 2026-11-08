import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { SiteContainer } from "@/components/layout/site-container";
import { ButtonLink } from "@/components/ui/button";
import { Polaroid } from "@/components/ui/polaroid";

export function ExploreProgramsCta() {
  return (
    <section className="pb-16 sm:pb-24">
      <SiteContainer>
        <div className="relative isolate grid items-center gap-10 overflow-hidden rounded-3xl bg-secondary px-6 py-10 text-secondary-foreground sm:px-12 sm:py-14 lg:grid-cols-2">
          <div
            aria-hidden
            className="pointer-events-none absolute -top-24 -right-24 -z-10 size-96 rounded-full border-40 border-primary/25"
          />

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent">
              What we do
            </p>
            <h2 className="mt-4 text-4xl font-bold sm:text-5xl">
              Explore our
              <br />
              <span className="text-accent italic">Programs</span>
            </h2>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-secondary-foreground/85 sm:text-base">
              See the education and technology programs we&apos;ve run alongside
              past villages and what&apos;s planned for MKP 2027 in Way Kambas.
            </p>
            <ButtonLink
              href="/programs/current"
              className="mt-8 rounded-md font-semibold uppercase tracking-wide"
            >
              View programs
              <ArrowRight />
            </ButtonLink>
          </div>

          <div className="relative mx-auto w-full max-w-sm pb-6">
            <Polaroid className="rotate-3">
              <div className="relative aspect-4/3 bg-muted">
                <Image
                  src="/images/documentation/nias-2024-water-tank.jpg"
                  alt="The MKP team beside a tank filling with pumped water"
                  fill
                  sizes="(min-width: 640px) 384px, 90vw"
                  className="object-cover"
                />
              </div>
            </Polaroid>
            <p className="absolute bottom-2 left-0 -rotate-6 bg-accent px-4 py-1.5 text-[11px] font-bold uppercase tracking-widest text-accent-foreground shadow-md sm:-left-6">
              Education · Technology
            </p>
          </div>
        </div>
      </SiteContainer>
    </section>
  );
}
