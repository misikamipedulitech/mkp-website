import Image from "next/image";
import { SiteContainer } from "@/components/layout/site-container";
import { Polaroid } from "@/components/ui/polaroid";
import { SectionTag } from "@/components/ui/section-tag";

export function VisionSection() {
  return (
    <section className="py-16 sm:py-24">
      <SiteContainer>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="lg:order-2">
            <SectionTag>Vision</SectionTag>
            <h2 className="mt-5 text-3xl leading-snug italic sm:text-5xl sm:leading-tight">
              Building <span className="text-primary">Bonds</span>,
              <br />
              Empowering
              <br />
              <span className="underline decoration-2 underline-offset-4">
                Communities
              </span>
              ,
              <br />
              Improving <span className="text-primary">Lives</span>.
            </h2>
          </div>

          <div className="relative mx-auto w-full max-w-md pr-6 pb-6 lg:order-1">
            <div
              aria-hidden
              className="absolute right-0 bottom-0 h-3/4 w-3/5 bg-accent"
            />
            <Polaroid className="relative -rotate-3">
              <div className="relative aspect-4/3 bg-muted">
                <Image
                  src="/images/about/vision-2x.jpg"
                  alt="An education session run by MKP"
                  fill
                  sizes="(min-width: 768px) 448px, 90vw"
                  className="object-cover"
                />
              </div>
            </Polaroid>
          </div>
        </div>
      </SiteContainer>
    </section>
  );
}
