import { ArrowRight } from "lucide-react";
import { HomeHero } from "./_components/home-hero";
import { HomeTestimonials } from "./_components/home-testimonials";
import { HomeCurrentProgram } from "./_components/home-current-program";
import { HomeImpact } from "./_components/home-impact";
import { HomeSupport } from "./_components/home-support";
import { HomeContact } from "./_components/home-contact";
import { ButtonLink } from "@/components/ui/button";
import { SectionTag } from "@/components/ui/section-tag";
import { SiteContainer } from "@/components/layout/site-container";

const ribbonTag = "w-fit -rotate-2 [clip-path:polygon(0_8%,17%_10%,31%_2%,50%_8%,72%_5%,88%_0,100%_6%,96%_45%,100%_60%,95%_75%,95%_92%,78%_100%,55%_94%,33%_100%,12%_93%,0_100%,2%_65%,0_40%)] [&>p]:rotate-0 [&>p]:px-5";

// Figures and copy follow the supplied design. Photo/map/logo slots await original assets.
const missions = [
  "To engage collaboration between Indonesian students, local NGOs and partner organizations in a joint community service project.",
  "To identify socio-economic problems through a sharing of experience and ideate measures to mitigate these problems.",
  "To take active roles in promoting sustainable support to increase the standards of living.",
];

export default function HomePage() {
  return (
    <div className="overflow-hidden bg-background text-foreground">
      <HomeHero />

      <section aria-labelledby="about-heading" className="pb-14 pt-14 sm:pb-20 sm:pt-20">
        <SiteContainer>
          <div className="mx-auto grid max-w-5xl items-start gap-10 md:grid-cols-2 md:gap-12 md:px-6 lg:gap-16 lg:px-0">
            <div>
              <h2 id="about-heading" className="text-3xl leading-tight">About <span className="font-script font-normal">MKP</span></h2>
              <div className="mt-6 space-y-4 text-sm leading-relaxed">
                <p><strong>Misi Kami Peduli (MKP)</strong>, or <strong>Mission: We Care</strong>, is a social initiative by Indonesian students at the National University of Singapore. We are motivated by an awareness of the socio-economic challenges in Indonesia and a desire to give back to our home country.</p>
                <p>Today, MKP is a <strong>platform for Indonesian students in NUS to reach out to less privileged communities.</strong> Every year, our team visits one village in Indonesia and works with local partners on programs that help <strong>improve residents’ standard of living.</strong></p>
              </div>
              <ButtonLink href="/about" size="sm" className="mt-6 gap-3 rounded-lg px-5 text-[11px] font-semibold uppercase tracking-wide">Learn more <ArrowRight aria-hidden className="size-3.5" /></ButtonLink>
            </div>
            <div className="md:pt-1">
              <div className={ribbonTag}><SectionTag>Vision</SectionTag></div>
              <h3 className="mt-3 text-xl font-bold italic leading-snug lg:text-2xl">Building Bonds, Empowering Communities, Improving Lives.</h3>
              <div className="mt-7"><div className={ribbonTag}><SectionTag>Mission</SectionTag></div></div>
              <ol className="mt-4 space-y-3.5">
                {missions.map((mission, index) => (
                  <li key={mission} className="flex items-start gap-3 text-sm leading-relaxed">
                    <span aria-hidden="true" className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-secondary text-xs font-semibold text-secondary-foreground">{index + 1}</span>
                    <span>{mission}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </SiteContainer>
        <HomeTestimonials />
      </section>

      <HomeCurrentProgram />

      <HomeImpact />

      <HomeSupport />

      <HomeContact />
    </div>
  );
}
