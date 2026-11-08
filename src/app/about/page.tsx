import type { Metadata } from "next";
import { PageHero } from "@/components/layout/page-hero";
import { AboutIntro } from "./_components/about-intro";
import { ExploreProgramsCta } from "./_components/explore-programs-cta";
import { FootprintsSection } from "./_components/footprints-section";
import { MissionSection } from "./_components/mission-section";
import { PillarsSection } from "./_components/pillars-section";
import { VisionSection } from "./_components/vision-section";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Misi Kami Peduli (MKP) is a social initiative by Indonesian students at the National University of Singapore, reaching out to alleviate socio-economic challenges in Indonesia.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "About Us", href: "/about" },
        ]}
        title={
          <>
            About <span className="text-accent italic">Us</span>
          </>
        }
        description="Indonesian students at the National University of Singapore, reaching out to alleviate socio-economic challenges in Indonesia"
        imageSrc="/images/documentation/nias-2024-team-panels.jpg"
        imagePosition="center 55%"
      />
      <AboutIntro />
      <VisionSection />
      <MissionSection />
      <PillarsSection />
      <FootprintsSection />
      <ExploreProgramsCta />
    </>
  );
}
