import Image from "next/image";
import { SiteContainer } from "@/components/layout/site-container";
import { Polaroid } from "@/components/ui/polaroid";
import { SectionTag } from "@/components/ui/section-tag";

const missionItems = [
  "To engage collaboration between Indonesian students, local NGOs and partner organizations in a joint community service project.",
  "To identify socio-economic problems through a sharing of experience and ideate measures to mitigate these problems.",
  "To take active roles in promoting sustainable support to increase the standards of living.",
];

export function MissionSection() {
  return (
    <section className="py-16 sm:py-24">
      <SiteContainer>
        {/* Mobile puts the photo between heading and list; desktop keeps it in the right column. */}
        <div className="grid items-center gap-x-16 gap-y-10 lg:grid-cols-2">
          <div className="lg:self-end">
            <SectionTag>Mission</SectionTag>
            <h2 className="mt-5 text-3xl italic sm:text-4xl">
              How we get there
            </h2>
          </div>

          <div className="mx-auto w-full max-w-md lg:row-span-2 lg:max-w-lg">
            <Polaroid className="rotate-3">
              <div className="relative aspect-4/3 bg-muted lg:aspect-5/4">
                <Image
                  src="/images/documentation/nias-2024-control-box.jpg"
                  alt="A solar control box being installed as village children and residents look on"
                  fill
                  sizes="(min-width: 1024px) 512px, 90vw"
                  className="object-cover"
                />
              </div>
            </Polaroid>
          </div>

          <ol className="space-y-6 lg:self-start">
            {missionItems.map((item, index) => (
              <li key={item} className="flex gap-4 text-sm leading-relaxed">
                <span
                  aria-hidden
                  className="flex size-7 shrink-0 items-center justify-center rounded-full bg-secondary text-xs font-semibold text-secondary-foreground"
                >
                  {index + 1}
                </span>
                {item}
              </li>
            ))}
          </ol>
        </div>
      </SiteContainer>
    </section>
  );
}
