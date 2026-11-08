import Link from "next/link";
import { navItems, siteConfig } from "@/lib/site-config";
import { socialLinks } from "@/components/icons/social-icons";
import { ButtonLink } from "@/components/ui/button";
import { Logo } from "./logo";
import { SiteContainer } from "./site-container";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-secondary-foreground">
      <SiteContainer>
        <div className="flex flex-col gap-10 py-12 md:flex-row md:justify-between">
          <div className="max-w-sm">
            <Logo variant="white" />
            <p className="mt-6 text-sm leading-relaxed text-secondary-foreground/80">
              <strong className="font-semibold text-secondary-foreground">
                {siteConfig.name} ({siteConfig.shortName}) or Mission: We Care
              </strong>{" "}
              is a community service project which aims to empower
              underprivileged Indonesian communities.
            </p>
          </div>

          <nav aria-label="Footer" className="flex gap-16 sm:gap-20">
            {navItems
              .filter((item) => item.children)
              .map((item) => (
                <div key={item.label}>
                  <h2 className="font-sans font-bold">{item.label}</h2>
                  <ul className="mt-5 flex flex-col gap-4">
                    {item.children?.map((child) => (
                      <li key={child.href}>
                        <Link
                          href={child.href}
                          className="text-secondary-foreground/80 transition-colors hover:text-secondary-foreground"
                        >
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
          </nav>
        </div>
      </SiteContainer>

      <div className="border-t border-secondary-foreground/15">
        <SiteContainer>
          <div className="flex flex-col-reverse gap-6 py-6 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm sm:text-base">
              © {year} {siteConfig.name}. All rights reserved.
            </p>

            <ul className="flex gap-4">
              {socialLinks.map(({ label, href, Icon }) => (
                <li key={label}>
                  <ButtonLink
                    href={href}
                    aria-label={label}
                    size="icon"
                    className="size-12 rounded-lg bg-secondary-foreground/10 text-secondary-foreground hover:bg-secondary-foreground/20"
                  >
                    <Icon className="size-6" />
                  </ButtonLink>
                </li>
              ))}
            </ul>
          </div>
        </SiteContainer>
      </div>
    </footer>
  );
}
