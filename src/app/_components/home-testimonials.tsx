import Image from "next/image";

// Quotes transcribed from the supplied homepage reference.
// Replace the surrounding photos with the original design assets when available.
const testimonials = [
  {
    quote: "MKP is a really good initiative for students in NUS. Not only these students study and excel academically but through MKP they also learn to care about each other and the environment around them as well as how they can contribute and be a blessing wherever they are.",
    attribution: "Anton Wardaya, CEO of Wardaya College",
    image: "/images/about/nias-2024-banner.jpg",
    alt: "MKP volunteers together with their community-service banner",
    figureClass: "lg:left-0 lg:w-[31%]",
    photoClass: "-rotate-6 lg:-rotate-8 lg:w-[61%]",
    quoteClass: "lg:top-[3%] lg:w-[54%]",
  },
  {
    quote: "MKP has allowed us to not only channel our knowledge and expertise in energy and technology to help the less privileged communities, but also to meet others who are eager to do the same.",
    attribution: "Oktovianus Gandhi, CEO of Alva Energi",
    image: "/images/documentation/nias-2024-wiring.jpg",
    alt: "The control box of a solar installation being wired up",
    figureClass: "lg:left-[26%] lg:w-[34%]",
    photoClass: "rotate-6 lg:rotate-8 lg:w-[61%]",
    quoteClass: "lg:-bottom-[5%] lg:w-[59%]",
  },
  {
    quote: "Until today, the people of Tana Kandumuka continues to feel the positive impact of MKP’s work. Today, children can study and women can weave even at night; we learn to practice healthy lifestyle and to save. We also still use the community hall for dialogue and healthcare meetings. Thank you MKP, you are truly a light for Indonesia.",
    attribution: "Romo Kristoforus Ngasi, Beneficiary of MKP 2017",
    image: "/images/about/vision-2x.jpg",
    alt: "Community participants gathered for an MKP education session",
    figureClass: "lg:left-[54%] lg:w-[34%]",
    photoClass: "-rotate-6 lg:-rotate-8 lg:w-[59%]",
    quoteClass: "lg:top-[3%] lg:w-[53%]",
  },
];

// The slots are portrait, so object-cover scales these landscape photos by height:
// they render about 1.5x as wide as their slot is tall.
const photoSizes = "(min-width: 1440px) 520px, (min-width: 1024px) 36vw, 480px";

export function HomeTestimonials() {
  return (
    <div role="group" aria-label="Stories from MKP partners and communities" className="relative mx-auto mt-12 max-w-[1440px] px-6 sm:px-10 lg:px-0">
      {/* Desktop coordinates follow the 1165 × 430 reference canvas. */}
      <div className="relative isolate grid gap-12 pb-4 lg:block lg:aspect-[1165/430] lg:pb-0">
        <div aria-hidden="true" className="absolute left-[83%] top-[16%] hidden h-[65%] w-[18%] rotate-8 lg:block">
          <Image src="/images/about/team-banner-group.jpg" alt="" fill sizes={photoSizes} quality={90} className="object-cover" />
        </div>
        {/* Keep figures at z-auto so every quote can sit above every photo. */}
        {testimonials.map((testimonial) => (
          <figure key={testimonial.attribution} className={`relative mx-auto w-full max-w-md lg:absolute lg:top-[16%] lg:mx-0 lg:h-[65%] lg:max-w-none ${testimonial.figureClass}`}>
            <div className={`relative h-72 w-[80%] bg-muted sm:h-80 lg:h-full ${testimonial.photoClass}`}>
              <Image
                src={testimonial.image}
                alt={testimonial.alt}
                fill
                sizes={photoSizes}
                quality={90}
                className="object-cover"
              />
            </div>
            <figcaption className={`relative z-20 -mt-16 ml-auto w-[85%] bg-accent px-5 pb-6 pt-5 text-accent-foreground sm:w-[75%] lg:absolute lg:right-0 lg:mt-0 lg:p-[clamp(14px,1.25vw,18px)] ${testimonial.quoteClass}`}>
              <span aria-hidden="true" className="block h-6 font-heading text-4xl leading-none lg:h-5 lg:text-3xl">“</span>
              <blockquote className="mt-2 text-sm italic leading-relaxed lg:text-[clamp(10px,0.833vw,12px)] lg:leading-[1.45]">
                <p>{testimonial.quote}</p>
              </blockquote>
              <p className="mt-4 text-[11px] italic leading-relaxed lg:mt-3 lg:text-[clamp(9px,0.7vw,10px)]">— {testimonial.attribution}</p>
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}
