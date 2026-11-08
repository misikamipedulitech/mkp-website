"use client";

import { ChevronDown, X } from "lucide-react";
import Link from "next/link";
import { useLayoutEffect, useRef, useState } from "react";
import { navItems } from "@/lib/site-config";
import { Button } from "@/components/ui/button";
import { Logo } from "./logo";
import { SiteContainer } from "./site-container";

type MobileMenuProps = {
  id: string;
  pathname: string;
  onClose: () => void;
  onContact: () => void;
};

export function MobileMenu({
  id,
  pathname,
  onClose,
  onContact,
}: MobileMenuProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const [openSection, setOpenSection] = useState<string | null>(
    () =>
      navItems.find(
        (item) => item.children?.some((child) => child.href === pathname),
      )?.label ?? null,
  );

  useLayoutEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    // Native modal behavior keeps keyboard focus inside and makes the page inert.
    // Closing the dialog restores focus to the element that opened it.
    dialog.showModal();
    closeButtonRef.current?.focus();
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const desktop = window.matchMedia("(min-width: 1024px)");
    function handleBreakpoint(event: MediaQueryListEvent) {
      if (event.matches) onClose();
    }

    desktop.addEventListener("change", handleBreakpoint);
    return () => {
      dialog.close();
      document.body.style.overflow = previousOverflow;
      desktop.removeEventListener("change", handleBreakpoint);
    };
  }, [onClose]);

  return (
    <dialog
      ref={dialogRef}
      id={id}
      aria-label="Main navigation menu"
      onCancel={(event) => {
        event.preventDefault();
        onClose();
      }}
      className="fixed inset-x-0 top-0 bottom-auto m-0 flex max-h-dvh w-full max-w-none flex-col overflow-hidden rounded-b-2xl border-0 bg-background p-0 text-foreground shadow-xl backdrop:bg-black/40 lg:hidden"
    >
      <div className="shrink-0 border-b border-border">
        <SiteContainer>
          <div className="flex h-16 items-center justify-between">
            <Logo onClick={onClose} />
            <Button
              ref={closeButtonRef}
              variant="ghost"
              size="icon"
              aria-label="Close menu"
              onClick={onClose}
              className="-mr-2"
            >
              <X className="size-6" />
            </Button>
          </div>
        </SiteContainer>
      </div>

      <nav aria-label="Main" className="min-h-0 overflow-y-auto overscroll-contain">
        <SiteContainer>
          <ul>
            {navItems.map((item) => {
              const expanded = openSection === item.label;
              return (
                <li key={item.label} className="border-b border-border">
                  {item.children ? (
                    <>
                      <Button
                        variant="link"
                        aria-expanded={expanded}
                        onClick={() =>
                          setOpenSection(expanded ? null : item.label)
                        }
                        className={`min-h-14 w-full justify-between py-4 text-left font-heading text-xl font-normal leading-6 whitespace-normal ${
                          expanded ? "text-secondary-text" : ""
                        }`}
                      >
                        {item.label}
                        <ChevronDown
                          className={`size-4 transition-transform ${
                            expanded ? "rotate-180" : ""
                          }`}
                        />
                      </Button>
                      {expanded && (
                        <ul className="flex flex-col pb-3">
                          {item.children.map((child) => {
                            const active = pathname === child.href;
                            return (
                              <li key={child.href}>
                                <Link
                                  href={child.href}
                                  onClick={onClose}
                                  aria-current={active ? "page" : undefined}
                                  className={`relative flex min-h-11 items-center rounded-md py-2.5 pr-3 pl-6 text-sm leading-5 transition-colors hover:bg-muted ${
                                    active
                                      ? "font-semibold text-foreground"
                                      : "text-muted-foreground hover:text-foreground"
                                  }`}
                                >
                                  {active && (
                                    <span
                                      aria-hidden
                                      className="absolute left-1 top-1/2 size-1.5 -translate-y-1/2 rounded-full bg-primary"
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
                      onClick={onClose}
                      aria-current={pathname === item.href ? "page" : undefined}
                      className="flex min-h-14 items-center py-4 font-heading text-xl leading-6"
                    >
                      {item.label}
                    </Link>
                  )}
                </li>
              );
            })}
          </ul>
        </SiteContainer>
      </nav>

      <div className="shrink-0 border-t border-border bg-background pb-[env(safe-area-inset-bottom)]">
        <SiteContainer>
          <div className="py-4">
            <Button
              onClick={onContact}
              className="h-11 w-full text-sm font-semibold uppercase tracking-wide"
            >
              Support us
            </Button>
          </div>
        </SiteContainer>
      </div>
    </dialog>
  );
}
