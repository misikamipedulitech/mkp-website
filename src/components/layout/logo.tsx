import Image from "next/image";
import Link from "next/link";
import type { MouseEventHandler } from "react";
import { twMerge } from "tailwind-merge";
import { siteConfig } from "@/lib/site-config";

type LogoVariant = "auto" | "black" | "white";

function LogoImage({
  variant,
  className,
}: {
  variant: Exclude<LogoVariant, "auto">;
  className?: string;
}) {
  return (
    <Image
      src={`/images/brand/logo-${variant}.svg`}
      alt=""
      width={178}
      height={64}
      className={twMerge("h-auto w-28 sm:w-32", className)}
      loading="eager"
      unoptimized
    />
  );
}

export function Logo({
  variant = "auto",
  className,
  onClick,
}: {
  // "auto" is the black logo while the site is light-only; force "white" on dark surfaces like the footer.
  variant?: LogoVariant;
  className?: string;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
}) {
  return (
    <Link
      href="/"
      aria-label={siteConfig.name}
      onClick={onClick}
      className={twMerge(
        "inline-flex shrink-0 items-center justify-self-start rounded-sm p-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
        className,
      )}
    >
      {/* Light mode only for now, so "auto" always uses the black logo. */}
      <LogoImage variant={variant === "auto" ? "black" : variant} />
    </Link>
  );
}
