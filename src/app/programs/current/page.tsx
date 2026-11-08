import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { PageHero } from "@/components/layout/page-hero";
import { SiteContainer } from "@/components/layout/site-container";
import { SupportUsButton } from "@/components/contact/contact-dialog-provider";
import { ButtonLink } from "@/components/ui/button";
import { Polaroid } from "@/components/ui/polaroid";
import { pastPrograms } from "@/lib/programs";
import { Actionables } from "./_components/actionables";

export const metadata: Metadata = {
  title: "Current Programs",
  description:
    "Discover MKP 2027 in Way Kambas, Lampung: our education, technology, and media programmes, where we are in the timeline, and ways to get involved.",
};

const partners = ["Sekolah Alam Indonesia", "ALeRT", "Desa Taman Fajar"];

const milestones = [
  {
    period: "Apr–May 2026",
    title: "Team formation",
    description: "Recruiting and training this year's volunteers.",
  },
  {
    period: "May–Aug 2026",
    title: "Community visits & partnerships",
    description: "Meeting residents and partners in Way Kambas.",
  },
  {
    period: "Aug 2026–Apr 2027",
    title: "Planning & fundraising",
    description: "Shaping the programmes and raising the funds.",
    current: true,
  },
  {
    period: "May 2027",
    title: "On-site programme",
    description: "A week of programmes in Way Kambas.",
  },
];

const currentMilestone = milestones.findIndex((milestone) => milestone.current);

// Shown as a small stack of photos linking to the archive.
const pastHighlights = pastPrograms.flatMap(({ year, title, image }) =>
  [2024, 2019, 2016].includes(year) && image ? [{ year, title, image }] : [],
);

export default function CurrentProgramsPage() {
  return (
    <>
      <PageHero
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "What We Do", href: "/programs" },
          { label: "Current Programs", href: "/programs/current" },
        ]}
        title={
          <>
            Current <span className="italic text-accent">Programs</span>
          </>
        }
        description="MKP 2027 · Way Kambas, Lampung"
        imageSrc="/images/documentation/nias-2024-site.jpg"
      />

      <SiteContainer>
        <section aria-labelledby="programme-heading" className="pt-20 sm:pt-28">
          <div className="relative grid gap-8 rounded-3xl bg-muted px-6 py-10 sm:px-12 sm:py-14 lg:grid-cols-2 lg:py-16">
            <div>
              <p className="w-fit bg-primary px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider text-primary-foreground">
                MKP 2027
              </p>
              <h2
                id="programme-heading"
                className="mt-5 text-4xl font-bold leading-tight sm:text-5xl"
              >
                Way Kambas,
                <br />
                <span className="italic text-primary">Lampung</span>
              </h2>
              <p className="mt-6 max-w-lg text-sm leading-relaxed text-foreground/80 sm:text-base">
                This year, MKP is heading to Way Kambas, Lampung. Together with
                Sekolah Alam Indonesia, ALeRT, and Desa Taman Fajar, we&apos;re
                running programmes in <strong>education</strong> and{" "}
                <strong>technology</strong>, and documenting the journey through{" "}
                <strong>media</strong>.
              </p>
              <p className="mt-8 text-[11px] font-bold uppercase tracking-[0.2em] text-muted-foreground">
                In partnership with
              </p>
              <ul className="mt-3 flex flex-wrap gap-2">
                {partners.map((partner) => (
                  <li
                    key={partner}
                    className="rounded-full border border-border bg-background px-3 py-1.5 text-xs font-medium"
                  >
                    {partner}
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative mx-auto w-full max-w-sm lg:absolute lg:-top-20 lg:-right-8 lg:w-[52%] lg:max-w-none">
              <Image
                src="/images/programs/way-kambas-sumatra.svg"
                alt="Way Kambas in Lampung, near the southern end of Sumatra"
                width={310}
                height={300}
                unoptimized
                className="h-auto w-full"
              />
              <p
                aria-hidden
                className="absolute top-[70%] right-[25%] rounded-md bg-background px-3 py-1.5 text-xs leading-tight shadow-md"
              >
                <span className="block font-semibold">Way Kambas</span>
                <span className="text-muted-foreground">Lampung, Sumatra</span>
              </p>
            </div>
          </div>
        </section>

        <Actionables />
      </SiteContainer>

      <section
        aria-labelledby="timeline-heading"
        className="bg-secondary py-20 text-secondary-foreground sm:py-28"
      >
        <SiteContainer>
          <div className="text-center">
            <h2
              id="timeline-heading"
              className="text-3xl font-bold italic sm:text-4xl"
            >
              Our <span className="text-accent">timeline</span>
            </h2>
            <p className="mt-3 text-sm text-secondary-foreground/85 sm:text-base">
              From team formation to the week on site: where MKP 2027 is right
              now.
            </p>
          </div>

          <div className="relative mt-16">
            {/* Track between the first and last dots, filled up to the current phase. */}
            <span
              aria-hidden
              className="absolute top-2 bottom-2 left-2 w-0.5 bg-secondary-foreground/30 md:hidden"
            />
            <span
              aria-hidden
              className="absolute top-2 left-[12.5%] hidden h-0.5 w-3/4 bg-secondary-foreground/30 md:block"
            />
            <span
              aria-hidden
              className="absolute top-2 left-[12.5%] hidden h-0.5 bg-accent md:block"
              style={{
                width: `${(currentMilestone / (milestones.length - 1)) * 75}%`,
              }}
            />
            <ol className="relative grid gap-10 md:grid-cols-4 md:gap-0">
              {milestones.map((milestone, index) => {
                const done = index < currentMilestone;
                const current = index === currentMilestone;
                return (
                  <li
                    key={milestone.period}
                    aria-current={current ? "step" : undefined}
                    className="relative flex gap-4 md:block md:px-4 md:text-center"
                  >
                    {current && (
                      <span className="absolute -top-9 left-1/2 hidden -translate-x-1/2 -rotate-3 bg-accent px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider whitespace-nowrap text-accent-foreground md:block">
                        We are here
                      </span>
                    )}
                    <span
                      aria-hidden
                      className={`relative mt-1.5 block size-4.5 shrink-0 rounded-full md:mx-auto md:mt-0 ${
                        done
                          ? "bg-accent"
                          : current
                            ? "border-[3px] border-white bg-primary ring-2 ring-primary"
                            : "border-2 border-secondary-foreground/60 bg-secondary"
                      }`}
                    />
                    <div className="md:mt-6">
                      <p className="font-heading text-xl font-bold">
                        {milestone.period}
                      </p>
                      <h3 className="mt-2 font-sans text-sm font-bold">
                        {milestone.title}
                        {current && (
                          <span className="ml-2 inline-block -rotate-3 bg-accent px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-accent-foreground md:hidden">
                            We are here
                          </span>
                        )}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-secondary-foreground/80">
                        {milestone.description}
                      </p>
                    </div>
                  </li>
                );
              })}
            </ol>
          </div>
        </SiteContainer>
      </section>

      <SiteContainer>
        <section aria-labelledby="support-heading" className="pt-20 sm:pt-28">
          <div className="relative isolate grid items-center gap-10 overflow-hidden rounded-3xl bg-accent/15 px-6 py-12 sm:px-12 sm:py-16 lg:grid-cols-2">
            <div
              aria-hidden
              className="pointer-events-none absolute -right-24 -bottom-40 -z-10 size-96 rounded-full border-40 border-accent/30"
            />
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">
                Support MKP 2027
              </p>
              <h2
                id="support-heading"
                className="mt-4 text-4xl font-bold sm:text-5xl"
              >
                Want to <span className="italic text-primary">support</span> us?
              </h2>
              <p className="mt-5 max-w-md text-sm leading-relaxed text-foreground/80 sm:text-base">
                Funding, resources, or media: every bit of help goes straight
                into the programmes we&apos;re running with the community in
                Way Kambas this year. Get in touch and we&apos;ll find a way to
                work together.
              </p>
              <SupportUsButton className="mt-8 font-semibold uppercase tracking-wide">
                Support us
                <ArrowRight />
              </SupportUsButton>
            </div>

            <div className="relative mx-auto w-full max-w-sm pb-6">
              <Polaroid className="rotate-3">
                <div className="relative aspect-4/3 bg-muted">
                  <Image
                    src="/images/about/about-us-2.jpg"
                    alt="An MKP volunteer leading an activity"
                    fill
                    sizes="(min-width: 640px) 384px, 90vw"
                    className="object-cover"
                  />
                </div>
              </Polaroid>
              <p className="absolute bottom-2 left-0 -rotate-6 bg-accent px-4 py-1.5 text-[11px] font-bold uppercase tracking-widest text-accent-foreground shadow-md sm:-left-6">
                Way Kambas · 2027
              </p>
            </div>
          </div>
        </section>

        <section
          aria-labelledby="past-programs-heading"
          className="py-16 sm:py-24"
        >
          <div className="grid items-center gap-12 rounded-3xl bg-muted px-6 py-12 sm:px-12 sm:py-16 lg:grid-cols-2">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-secondary-text">
                Since 2009
              </p>
              <h2
                id="past-programs-heading"
                className="mt-4 text-3xl font-bold sm:text-4xl"
              >
                See our <span className="italic text-primary">past programs</span>
              </h2>
              <p className="mt-5 max-w-md text-sm leading-relaxed text-foreground/80 sm:text-base">
                MKP has run {pastPrograms.length} programmes with communities
                across the archipelago, one community at a time.
              </p>
              <ButtonLink
                href="/programs/past"
                variant="secondary"
                className="mt-8 font-semibold uppercase tracking-wide"
              >
                View past programs
                <ArrowRight />
              </ButtonLink>
            </div>

            <div
              aria-hidden
              className="relative mx-auto h-56 w-full max-w-md sm:h-64"
            >
              {pastHighlights.map((program, index) => (
                <Polaroid
                  key={program.year}
                  className={`absolute w-[46%] p-2 pb-2 sm:p-2 sm:pb-2 ${
                    [
                      "top-6 left-0 -rotate-3",
                      "top-0 left-[27%] z-10 rotate-2",
                      "top-12 right-0 z-20 -rotate-4",
                    ][index]
                  }`}
                >
                  <div className="relative aspect-4/3 bg-muted">
                    <Image
                      src={program.image.src}
                      alt=""
                      fill
                      sizes="200px"
                      className="object-cover"
                    />
                  </div>
                  <p className="mt-2 truncate px-0.5 text-[10px] text-neutral-600">
                    {program.year} · {program.title}
                  </p>
                </Polaroid>
              ))}
            </div>
          </div>
        </section>
      </SiteContainer>
    </>
  );
}
