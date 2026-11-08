import type { Metadata } from "next";
import { PageHero } from "@/components/layout/page-hero";
import { pastSponsors } from "@/lib/sponsors";
import { SponsorArchive } from "./_components/sponsor-archive";

export const metadata: Metadata = {
  title: "Past Sponsors",
  description: "Meet the partners and sponsors who supported MKP’s past programmes. Browse the 2024, 2019, 2017, 2016, 2015, and 2014 archives.",
};

export default function PastSponsorsPage() {
  return (
    <>
      <PageHero
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "About Us", href: "/about" }, { label: "Past Sponsors", href: "/about/past-sponsors" }]}
        title={<>Past <span className="italic text-accent">Sponsors</span></>}
        description="With thanks to the partners and sponsors who supported our programmes."
        imageSrc="/images/sponsors/hero.jpg"
      />

      <SponsorArchive years={pastSponsors} />
    </>
  );
}
