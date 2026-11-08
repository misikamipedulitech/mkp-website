import { BookOpen, Cpu, type LucideIcon } from "lucide-react";
import { SiteContainer } from "@/components/layout/site-container";

type Pillar = {
  title: string;
  tagline: string;
  description: string;
  Icon: LucideIcon;
};

const pillars: Pillar[] = [
  {
    title: "Education",
    tagline: "Inspiring young generations",
    description:
      "Misi Kami Peduli hopes to inspire young generations through inculcating life values and knowledge for local communities.",
    Icon: BookOpen,
  },
  {
    title: "Technology",
    tagline: "Powering rural development",
    description:
      "Misi Kami Peduli harnesses the power of technology for rural development.",
    Icon: Cpu,
  },
];

// Fluted column texture for the pillar cards.
const flutes =
  "repeating-linear-gradient(90deg, transparent 0 14px, rgb(30 48 112 / 0.06) 14px 15px)";

export function PillarsSection() {
  return (
    <section className="bg-secondary py-16 text-secondary-foreground sm:py-24">
      <SiteContainer>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl italic sm:text-4xl">
            What holds our work <span className="text-accent">up</span>
          </h2>
          <p className="mt-5 text-sm leading-relaxed text-secondary-foreground/85">
            Misi Kami Peduli (Mission: We Care) projects focus on two key
            pillars: Education and Technology to alleviate the socio-economic
            challenges in the local communities. These two pillars are enclosed
            by the spirit of sustainability and local community engagement to
            ensure an inclusive and beneficial development in the long run. We
            hope to realize our Vision and Mission by aligning our projects with
            these core values.
          </p>
        </div>

        <div className="mx-auto mt-14 max-w-2xl">
          <div className="flex h-16 items-end justify-center bg-primary pb-2 [clip-path:polygon(50%_0,100%_100%,0_100%)] sm:h-24 sm:pb-3" />
          <div aria-hidden className="h-2 bg-primary/80" />

          <ul className="grid gap-4 px-4 sm:grid-cols-2 sm:gap-6 sm:px-8">
            {pillars.map(({ title, tagline, description, Icon }, index) => (
              <li
                key={title}
                className="border-x-4 border-[#dfe3ee] bg-white p-5 sm:pb-10"
                style={{ backgroundImage: flutes }}
              >
                <div className="flex items-start justify-between">
                  <span className="flex size-9 items-center justify-center rounded-full bg-secondary text-secondary-foreground">
                    <Icon aria-hidden className="size-4" />
                  </span>
                  <span
                    aria-hidden
                    className="font-heading text-2xl text-secondary/40 italic"
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="mt-4 text-xl font-bold text-secondary">
                  {title}
                </h3>
                <p className="mt-1 text-[10px] font-bold uppercase tracking-widest text-primary">
                  {tagline}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-neutral-600">
                  {description}
                </p>
              </li>
            ))}
          </ul>

          <div className="flex items-center justify-center gap-2 bg-accent px-4 py-3 text-accent-foreground shadow-[0_6px_0_0_rgb(0_0_0/0.15)]" />
        </div>
      </SiteContainer>
    </section>
  );
}
