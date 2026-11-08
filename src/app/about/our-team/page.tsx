import type { Metadata } from "next";
import { PageHero } from "@/components/layout/page-hero";
import { pastTeams } from "@/lib/team";
import { TeamArchive } from "./_components/team-archive";

export const metadata: Metadata = {
  title: "Our Team",
  description: "Meet the students leading MKP’s 2027 programme and the teams behind past programmes. Browse the 2027, 2024, 2021, 2020, and 2019 teams.",
};

export default function OurTeamPage() {
  return (
    <>
      <PageHero
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "About Us", href: "/about" }, { label: "Our Team", href: "/about/our-team" }]}
        title={<>Our <span className="italic text-accent">Team</span></>}
        description="The students who gave their time and effort to every MKP programme."
        imageSrc="/images/team/hero.jpg"
        imagePosition="center 25%"
      />

      <TeamArchive teams={[...pastTeams].sort((a, b) => b.year - a.year)} />
    </>
  );
}
