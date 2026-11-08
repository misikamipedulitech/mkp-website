"use client";

import { ChevronDown, Menu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import { navItems } from "@/lib/site-config";
import { useContactDialog } from "@/components/contact/contact-dialog-provider";
import { Button } from "@/components/ui/button";
import { Logo } from "./logo";
import { MobileMenu } from "./mobile-menu";
import { SiteContainer } from "./site-container";

export function Navbar() {
  const pathname = usePathname();
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { openContact } = useContactDialog();
  const navRef = useRef<HTMLElement>(null);

  const [lastPathname, setLastPathname] = useState(pathname);
  if (pathname !== lastPathname) {
    setLastPathname(pathname);
    setOpenDropdown(null);
    setMobileOpen(false);
  }

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setOpenDropdown(null);
      }
    }
    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        navRef.current
          ?.querySelector<HTMLButtonElement>('button[aria-expanded="true"]')
          ?.focus();
        setOpenDropdown(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  const closeMobileMenu = useCallback(() => setMobileOpen(false), []);

  function isCurrentSection(href: string) {
    return href === "/"
      ? pathname === "/"
      : pathname === href || pathname.startsWith(`${href}/`);
  }

  // The hidden bold copy (::after) reserves the bold width so the nav doesn't shift.
  function labelClasses(href: string) {
    const reserveBoldWidth =
      "inline-flex flex-col after:invisible after:h-0 after:overflow-hidden after:font-bold after:content-[attr(data-label)]";
    return `${reserveBoldWidth} ${isCurrentSection(href) ? "font-bold" : ""}`;
  }

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background">
      <SiteContainer>
        <div className="flex h-16 items-center justify-between lg:grid lg:h-20 lg:grid-cols-[1fr_auto_1fr]">
          <Logo />

          <nav ref={navRef} aria-label="Main" className="hidden lg:block">
            <ul className="flex items-center gap-10">
              {navItems.map((item) => (
                <li key={item.label} className="relative">
                  {item.children ? (
                    <>
                      <Button
                        variant="link"
                        aria-haspopup="true"
                        aria-expanded={openDropdown === item.label}
                        onClick={() =>
                          setOpenDropdown((current) =>
                            current === item.label ? null : item.label,
                          )
                        }
                        className="gap-1.5 py-2 text-[15px]"
                      >
                        <span data-label={item.label} className={labelClasses(item.href)}>
                          {item.label}
                        </span>
                        <ChevronDown
                          className={`size-4 transition-transform ${
                            openDropdown === item.label ? "rotate-180" : ""
                          }`}
                        />
                      </Button>
                      {openDropdown === item.label && (
                        <ul className="absolute left-1/2 top-full mt-2 min-w-52 -translate-x-1/2 rounded-lg border border-border bg-popover py-2 text-popover-foreground shadow-lg">
                          {item.children.map((child) => {
                            const active = pathname === child.href;
                            return (
                              <li key={child.href}>
                                <Link
                                  href={child.href}
                                  onClick={() => {
                                    navRef.current
                                      ?.querySelector<HTMLButtonElement>('button[aria-expanded="true"]')
                                      ?.focus();
                                    setOpenDropdown(null);
                                  }}
                                  aria-current={active ? "page" : undefined}
                                  className={`relative block py-2 pl-6 pr-4 text-sm transition-colors hover:bg-muted ${
                                    active ? "font-medium" : ""
                                  }`}
                                >
                                  {active && (
                                    <span
                                      aria-hidden
                                      className="absolute left-2.5 top-1/2 size-1.5 -translate-y-1/2 rounded-full bg-primary"
                                    />
                                  )}
                                  {child.label}
                                </Link>
                              </li>
                            );
                          })}
                        </ul>
                      )}
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      onClick={() => setOpenDropdown(null)}
                      aria-current={pathname === item.href ? "page" : undefined}
                      className="block py-2 text-[15px] font-medium"
                    >
                      <span data-label={item.label} className={labelClasses(item.href)}>
                        {item.label}
                      </span>
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          <div className="hidden items-center gap-4 justify-self-end lg:flex">
            <Button
              onClick={openContact}
              className="font-semibold uppercase tracking-wide"
            >
              Support us
            </Button>
          </div>

          <Button
            variant="ghost"
            size="icon"
            aria-label="Open menu"
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            onClick={() => setMobileOpen(true)}
            className="-mr-2 lg:hidden"
          >
            <Menu className="size-6" />
          </Button>
        </div>
      </SiteContainer>

      {mobileOpen && (
        <MobileMenu
          id="mobile-menu"
          pathname={pathname}
          onClose={closeMobileMenu}
          onContact={() => {
            setMobileOpen(false);
            openContact();
          }}
        />
      )}

    </header>
  );
}
