import { ArrowRight, HandHeart } from "lucide-react";
import Image from "next/image";
import { InstagramIcon } from "@/components/icons/social-icons";
import { SiteContainer } from "@/components/layout/site-container";
import { SupportUsButton } from "@/components/contact/contact-dialog-provider";
import { ButtonLink } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-config";

function Snapshot({ src, alt, className }: { src: string; alt: string; className: string }) {
  return (
    <div className={`border-2 border-white bg-white p-0.5 shadow-md ${className}`}>
      <div className="relative aspect-square">
        <Image src={src} alt={alt} fill sizes="(min-width: 1024px) 145px, (min-width: 640px) 14vw, 96px" className="object-cover" />
      </div>
    </div>
  );
}

export function HomeCurrentProgram() {
  return (
    <section id="current-program" aria-labelledby="program-heading" className="scroll-mt-24 pb-8 pt-8 sm:pb-10 sm:pt-12">
      <SiteContainer>
        <div className="relative mx-auto max-w-5xl">
          <div className="relative mx-4 sm:mx-8">
            <div className="overflow-hidden rounded-xl bg-[#e5e5e5] sm:rounded-2xl">
              <Image
                src="/images/landing/way-kambas-map.svg"
                alt="Indonesia, with a red pin marking Way Kambas in Lampung, southern Sumatra"
                width={1000}
                height={383}
                unoptimized
                className="h-auto w-full"
              />
            </div>
            {/* MKP 2027 photos supplied by the project team. */}
            <Snapshot src="/images/landing/way-kambas-garden.jpg" alt="Rows of leafy vegetables at the MKP 2027 community visit" className="absolute -right-3 -top-6 w-20 rotate-3 sm:-right-8 sm:-top-12 sm:w-[14%]" />
            <Snapshot src="/images/landing/way-kambas-elephant.jpg" alt="An elephant and visitors during the Way Kambas visit" className="absolute -bottom-6 -left-4 w-20 -rotate-8 sm:-bottom-8 sm:-left-8 sm:w-[14%]" />
          </div>

          <div className="mx-auto mt-12 max-w-3xl text-center sm:mt-14 sm:px-14">
            <h2 id="program-heading" className="text-2xl font-bold leading-snug sm:text-3xl">MKP 2027: <em>Way Kambas, Lampung</em></h2>
            <p className="mx-auto mt-4 max-w-2xl text-xs leading-relaxed sm:text-sm">In May 2027, MKP heads to Way Kambas, Lampung. Together with Sekolah Alam Indonesia, ALeRT, and Desa Taman Fajar, we’re preparing programs in technology, education, and community empowerment.</p>
            <p className="mt-5 flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-xs">
              <span>Discover our journey on:</span>
              <a href={siteConfig.instagramUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 font-semibold text-primary hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"><InstagramIcon className="size-3.5" /> misikamipeduli</a>
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-2">
              <SupportUsButton variant="secondary" size="sm" className="gap-2 px-4 text-[11px] font-semibold uppercase"><HandHeart aria-hidden className="size-3.5" /> Support us</SupportUsButton>
              <ButtonLink href="/programs/current" size="sm" className="gap-2 px-4 text-[11px] font-semibold uppercase">Learn more <ArrowRight aria-hidden className="size-3.5" /></ButtonLink>
            </div>
          </div>
          <Snapshot src="/images/landing/way-kambas-classroom.jpg" alt="A classroom discussion during the MKP 2027 community visit" className="relative mx-auto mt-8 w-24 rotate-8 sm:absolute sm:bottom-3 sm:right-0 sm:mt-0 sm:w-[14%]" />
        </div>
      </SiteContainer>
    </section>
  );
}
