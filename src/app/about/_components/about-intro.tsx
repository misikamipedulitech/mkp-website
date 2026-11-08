import { ArrowRight, Plus } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { socialLinks } from "@/components/icons/social-icons";
import { SiteContainer } from "@/components/layout/site-container";
import { ButtonLink, buttonClasses } from "@/components/ui/button";
import { Polaroid } from "@/components/ui/polaroid";
import { pastTeams } from "@/lib/team";
import { MemberPhoto } from "./member-photo";

// One face from each past team, so the preview spans MKP's years.
const previewMembers = pastTeams
  .map((team) => team.members.find((member) => member.image))
  .filter((member): member is NonNullable<typeof member> & { image: string } =>
    Boolean(member?.image),
  )
  .slice(0, 4);

export function AboutIntro() {
  return (
    <section className="py-16 sm:py-24">
      <SiteContainer>
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="text-3xl font-bold sm:text-4xl">
              About{" "}
              <span className="font-script text-3xl font-semibold sm:text-4xl">
                MKP
              </span>
            </h2>

            <div className="mt-6 space-y-4 text-sm leading-relaxed sm:text-base">
              <p>
                <strong>Misi Kami Peduli (MKP)</strong>, or{" "}
                <strong>Mission: We Care</strong>, is a social initiative by
                Indonesian students at the National University of Singapore. We
                are motivated by an awareness of the socio-economic challenges
                in Indonesia and a desire to give back to our home country.
              </p>
              <p>
                <span>Today,</span> MKP is a{" "}
                <strong>
                  platform for Indonesian students in NUS to reach out to less
                  privileged communities
                </strong>
                . Every year, our team visits one village in Indonesia and works
                with local partners on programs that help{" "}
                <strong>improve residents&apos; standard of living</strong>.
              </p>
            </div>

            <Link
              href="/about/our-team"
              className="group mt-8 flex flex-col gap-5 rounded-xl bg-muted p-5 transition-colors hover:bg-muted/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 sm:flex-row sm:items-center sm:justify-between"
            >
              <div className="flex items-center gap-3">
                <div aria-hidden className="flex shrink-0 -space-x-3">
                  {previewMembers.map((member) => (
                    <span
                      key={member.name}
                      className="relative size-9 shrink-0 overflow-hidden rounded-full bg-background ring-2 ring-muted"
                    >
                      <MemberPhoto member={member} alt="" size={36} />
                    </span>
                  ))}
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-secondary text-secondary-foreground ring-2 ring-muted">
                    <Plus className="size-4" />
                  </span>
                </div>
                <p className="text-sm leading-snug">
                  <strong className="text-secondary-text">
                    Hundreds of NUS students
                  </strong>
                  <br />
                  have been part of MKP
                </p>
              </div>
              {/* Styled as a button, but the whole card is the link. */}
              <span
                className={buttonClasses({
                  className:
                    "font-semibold uppercase tracking-wide group-hover:bg-primary/90",
                })}
              >
                Meet our team
                <ArrowRight className="transition-transform group-hover:translate-x-0.5" />
              </span>
            </Link>

            <div className="mt-8 flex items-center gap-4">
              <p className="text-sm font-medium">Follow our journey:</p>
              <ul className="flex gap-3">
                {socialLinks.map(({ label, href, Icon }) => (
                  <li key={label}>
                    <ButtonLink
                      href={href}
                      aria-label={label}
                      variant="ghost"
                      size="icon"
                      className="size-9 border border-border text-secondary-text"
                    >
                      <Icon className="size-4" />
                    </ButtonLink>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="relative mx-auto h-72 w-full max-w-md sm:h-96">
            <Polaroid className="absolute top-6 left-0 w-[58%] -rotate-6">
              <div className="relative aspect-4/3 bg-muted">
                <Image
                  src="/images/about/team-banner-group.jpg"
                  alt="MKP volunteers with local residents"
                  fill
                  sizes="(min-width: 1024px) 260px, 60vw"
                  className="object-cover"
                />
              </div>
            </Polaroid>
            <Polaroid className="absolute right-0 bottom-0 w-[62%] rotate-3">
              <div className="relative aspect-4/3 bg-muted">
                <Image
                  src="/images/about/about-us-2.jpg"
                  alt="An MKP volunteer leading an activity"
                  fill
                  sizes="(min-width: 1024px) 280px, 62vw"
                  className="object-cover"
                />
              </div>
            </Polaroid>
            <div className="absolute top-16 right-12 rotate-3 bg-secondary px-4 py-2 text-center text-secondary-foreground shadow-lg">
              <p className="text-[10px] font-semibold text-accent">
                Founded at NUS
              </p>
              <p className="font-heading text-2xl font-bold leading-none sm:text-3xl">
                2009
              </p>
            </div>
          </div>
        </div>
      </SiteContainer>
    </section>
  );
}
