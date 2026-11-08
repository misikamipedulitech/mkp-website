import type { Metadata } from "next";
import { PageHero } from "@/components/layout/page-hero";
import { pastPrograms } from "@/lib/programs";
import { NextChapterCta } from "./_components/next-chapter-cta";
import { ProgrammeArchive } from "./_components/programme-archive";

export const metadata: Metadata = {
  title: "Past Programs",
  description:
    "Explore MKP’s programme archive, from education and digital literacy to solar power and clean water, across communities since 2009.",
};

export default function PastProgramsPage() {
  return (
    <>
      <PageHero
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Past Programs", href: "/programs/past" },
        ]}
        title={
          <>
            Past <span className="italic text-accent">Programs</span>
          </>
        }
        description="Education, clean energy, and clean water programmes, built alongside local communities since 2009"
        imageSrc="/images/about/team-banner-group.jpg"
      />

      <ProgrammeArchive programs={pastPrograms} />

      <NextChapterCta />
    </>
  );
}
