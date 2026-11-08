import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import { NavLink } from "@/lib/site-config";
import { SiteContainer } from "./site-container";

export function PageHero({
  breadcrumbs,
  title,
  description,
  imageSrc,
  imagePosition,
}: {
  breadcrumbs: NavLink[];
  title: ReactNode;
  description?: string;
  imageSrc: string;
  // CSS object-position, for keeping faces in frame in the short, wide crop.
  imagePosition?: string;
}) {
  return (
    <section className="relative isolate overflow-hidden bg-secondary text-white">
      <Image
        src={imageSrc}
        alt=""
        fill
        loading="eager"
        fetchPriority="high"
        sizes="100vw"
        className="-z-10 object-cover"
        style={imagePosition ? { objectPosition: imagePosition } : undefined}
      />
      <div aria-hidden className="absolute inset-0 -z-10 bg-black/40" />

      <SiteContainer>
        <div className="py-14 sm:py-20">
          <nav aria-label="Breadcrumb">
            <ol className="flex flex-wrap items-center gap-1.5 text-xs text-white/80">
              {breadcrumbs.map((crumb, index) => {
                const isLast = index === breadcrumbs.length - 1;
                return (
                  <li key={crumb.href} className="flex items-center gap-1.5">
                    {isLast ? (
                      <span aria-current="page" className="text-white">
                        {crumb.label}
                      </span>
                    ) : (
                      <>
                        <Link href={crumb.href} className="hover:text-white">
                          {crumb.label}
                        </Link>
                        <span aria-hidden>/</span>
                      </>
                    )}
                  </li>
                );
              })}
            </ol>
          </nav>

          <h1 className="mt-3 text-4xl tracking-tight sm:text-6xl">{title}</h1>
          {description && (
            <p className="mt-4 max-w-xl text-sm leading-relaxed sm:text-base">
              {description}
            </p>
          )}
        </div>
      </SiteContainer>
    </section>
  );
}
