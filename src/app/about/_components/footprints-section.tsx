import { SiteContainer } from "@/components/layout/site-container";
import { pastPrograms } from "@/lib/programs";
import { FootprintsMap } from "./footprints-map";

export function FootprintsSection() {
  return (
    <section className="py-16 sm:py-24">
      <SiteContainer>
        <div className="text-center">
          <h2 className="text-3xl italic sm:text-4xl">Our Footprints</h2>
          <p className="mx-auto mt-4 max-w-md text-sm text-muted-foreground">
            Since 2009, MKP has run {pastPrograms.length} programs with
            communities across Indonesia and Singapore.
          </p>
        </div>
        <FootprintsMap />
      </SiteContainer>
    </section>
  );
}
