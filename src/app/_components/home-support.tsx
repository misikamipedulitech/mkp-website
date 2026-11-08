import { ArrowRight, HandCoins, Megaphone, Package } from "lucide-react";
import { SupportUsButton } from "@/components/contact/contact-dialog-provider";
import { SiteContainer } from "@/components/layout/site-container";
import { ButtonLink } from "@/components/ui/button";

const waysToHelp = [
  {
    title: "Funding",
    description:
      "Sponsor MKP 2027 and help cover programme materials, logistics, and on-site costs in our current program.",
    icon: HandCoins,
  },
  {
    title: "Resources",
    description:
      "Contribute goods or expertise, like books, equipment, or skills our teams can put to work on the ground.",
    icon: Package,
  },
  {
    title: "Media",
    description:
      "Help tell the story through coverage, features, or by sharing our journey with your audience.",
    icon: Megaphone,
  },
];

export function HomeSupport() {
  return (
    <section aria-labelledby="support-heading" className="py-14 sm:py-20">
      <SiteContainer>
        <div className="relative isolate mx-auto grid max-w-2xl items-center gap-10 overflow-hidden rounded-3xl bg-secondary px-6 py-10 text-secondary-foreground sm:px-12 sm:py-14 lg:max-w-5xl lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
          <div
            aria-hidden
            className="pointer-events-none absolute -top-24 -right-24 -z-10 size-96 rounded-full border-40 border-primary/25"
          />

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent">
              Get involved
            </p>
            <h2
              id="support-heading"
              className="mt-4 text-3xl font-bold leading-snug sm:text-4xl"
            >
              Be part of
              <span className="block italic text-accent">MKP 2027.</span>
            </h2>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-secondary-foreground/85 sm:text-base">
              Interested in helping out? Here are some ways you can support our
              work.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4">
              <SupportUsButton className="font-semibold uppercase tracking-wide">
                Support us
                <ArrowRight />
              </SupportUsButton>
              <ButtonLink
                href="/programs/current"
                variant="link"
                className="gap-2 text-sm font-semibold uppercase tracking-wide text-secondary-foreground hover:underline underline-offset-4"
              >
                Explore MKP 2027 <ArrowRight aria-hidden />
              </ButtonLink>
            </div>
          </div>

          <ul className="grid gap-3">
            {waysToHelp.map(({ title, description, icon: Icon }) => (
              <li
                key={title}
                className="flex items-start gap-4 rounded-2xl bg-white/10 p-4 ring-1 ring-white/10 backdrop-blur-sm sm:p-5"
              >
                <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-accent text-accent-foreground">
                  <Icon aria-hidden className="size-5" />
                </span>
                <div>
                  <h3 className="font-bold">{title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-secondary-foreground/80">
                    {description}
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
