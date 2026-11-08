"use client";

import Image from "next/image";
import { useState } from "react";
import { SiteContainer } from "@/components/layout/site-container";
import { pastPrograms } from "@/lib/programs";
import type { SponsorYear } from "@/lib/sponsors";

// Higher tiers get larger, heavier type so the hierarchy reads at a glance.
const tierStyles: Record<string, { marker: string; names: string }> = {
  Diamond: {
    marker: "rotate-45 rounded-[1px] bg-sky-400",
    names: "font-heading text-xl leading-snug text-secondary-text sm:text-2xl",
  },
  Platinum: {
    marker: "rounded-full bg-slate-400",
    names: "font-heading text-lg leading-snug text-secondary-text sm:text-xl",
  },
  Gold: {
    marker: "rounded-full bg-amber-400",
    names: "text-base font-semibold text-secondary-text sm:text-lg",
  },
  Silver: {
    marker: "rounded-full bg-zinc-400",
    names: "text-base font-medium text-secondary-text",
  },
  Bronze: {
    marker: "rounded-full bg-orange-600",
    names: "text-sm text-foreground/80",
  },
  "Sub-Bronze": {
    marker: "rounded-full bg-orange-800",
    names: "text-sm text-muted-foreground",
  },
};

const eyebrow =
  "text-[11px] font-semibold uppercase tracking-[0.15em] text-muted-foreground";

// "Nias, North Sumatra" -> "Nias", matched by programme year.
function placeFor(year: number) {
  return pastPrograms
    .find((program) => program.year === year)
    ?.location.name.split(",")[0];
}

export function SponsorArchive({ years }: { years: SponsorYear[] }) {
  const [index, setIndex] = useState(0);
  const active = years[index];
  const place = placeFor(active.year);

  return (
    <section
      id="sponsor-archive"
      aria-labelledby="sponsor-year-heading"
      className="relative isolate overflow-hidden border-y border-border bg-muted"
    >
      <Image
        src="/images/sponsors/slides-bg.jpg"
        alt=""
        fill
        sizes="100vw"
        className="-z-20 object-cover"
      />
      <div aria-hidden className="absolute inset-0 -z-10 bg-background/90" />

      <SiteContainer>
        <div className="mx-auto max-w-4xl py-12 sm:py-16">
          <div className="flex flex-wrap items-end justify-between gap-x-8 gap-y-5 border-b-2 border-secondary pb-6">
            <div aria-live="polite">
              <p className={eyebrow}>Thank you to our supporters</p>
              <h2
                id="sponsor-year-heading"
                className="mt-2 text-3xl font-bold text-secondary-text sm:text-4xl"
              >
                {active.year}
                {place && (
                  <>
                    {" "}
                    <span aria-hidden>·</span>{" "}
                    <span className="font-normal italic">{place}</span>
                  </>
                )}
              </h2>
            </div>

            <div role="group" aria-label="Choose a year" className="flex flex-wrap gap-2">
              {years.map((year, i) => (
                <button
                  key={year.year}
                  type="button"
                  onClick={() => setIndex(i)}
                  aria-pressed={i === index}
                  aria-controls="sponsor-year-details"
                  className={`min-h-9 cursor-pointer rounded-full border px-4 text-xs font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring ${
                    i === index
                      ? "border-secondary bg-secondary text-secondary-foreground"
                      : "border-border bg-background text-secondary-text hover:border-secondary"
                  }`}
                >
                  {year.year}
                </button>
              ))}
            </div>
          </div>

          <div id="sponsor-year-details" key={active.year} className="slide-fade">
            <dl className="divide-y divide-border border-b border-border">
              {active.tiers.map((tier) => {
                const style = tierStyles[tier.name];
                return (
                  <div
                    key={tier.name}
                    className="grid gap-3 py-5 sm:grid-cols-[9rem_1fr] sm:items-baseline sm:gap-6"
                  >
                    <dt className={`flex items-center gap-2.5 ${eyebrow}`}>
                      <span aria-hidden className={`size-2 shrink-0 ${style?.marker ?? "rounded-full bg-border"}`} />
                      {tier.name}
                    </dt>
                    <dd>
                      <ul className={`flex flex-wrap gap-x-6 gap-y-1.5 ${style?.names ?? "text-sm"}`}>
                        {tier.sponsors.map((sponsor) => (
                          <li key={sponsor}>{sponsor}</li>
                        ))}
                      </ul>
                    </dd>
                  </div>
                );
              })}
            </dl>

            <div className="mt-6 grid gap-6 rounded-lg bg-muted p-6 sm:grid-cols-2 sm:gap-10">
              <div>
                <h3 className={`font-sans ${eyebrow}`}>
                  {active.partners.length > 1 ? "Partner NGOs" : "Partner NGO"} on the ground
                </h3>
                <ul className="mt-3 space-y-1 text-sm text-foreground/85">
                  {active.partners.map((partner) => (
                    <li key={partner}>{partner}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className={`font-sans ${eyebrow}`}>Endorsed by</h3>
                <ul className="mt-3 space-y-1 text-sm text-foreground/85">
                  {active.endorsements.map((endorsement) => (
                    <li key={endorsement}>{endorsement}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </SiteContainer>
    </section>
  );
}
