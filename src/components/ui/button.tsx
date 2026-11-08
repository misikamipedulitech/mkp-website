import Link from "next/link";
import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

type ButtonVariant = "primary" | "secondary" | "ghost" | "link";
type ButtonSize = "sm" | "md" | "lg" | "icon";

const base =
  "inline-flex cursor-pointer items-center justify-center gap-2 rounded-full font-medium whitespace-nowrap transition-colors " +
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background " +
  "disabled:pointer-events-none disabled:opacity-50 [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4";

const variants: Record<ButtonVariant, string> = {
  primary: "bg-primary text-primary-foreground hover:bg-primary/90",
  secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/90",
  ghost: "text-foreground hover:bg-muted",
  // Plain text trigger, e.g. nav dropdowns and accordion headings.
  link: "h-auto rounded-sm px-0 text-foreground",
};

const sizes: Record<ButtonSize, string> = {
  sm: "h-8 px-3 text-sm",
  md: "h-10 px-4 text-sm",
  lg: "h-12 px-6 text-base",
  icon: "size-10",
};

type ButtonStyleProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
};

export function buttonClasses({
  variant = "primary",
  size = "md",
  className = "",
}: ButtonStyleProps & { className?: string } = {}) {
  return twMerge(base, sizes[size], variants[variant], className);
}

type ButtonProps = ComponentProps<"button"> & ButtonStyleProps;

export function Button({
  variant,
  size,
  type = "button",
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={buttonClasses({ variant, size, className })}
      {...props}
    />
  );
}

type ButtonLinkProps = ComponentProps<typeof Link> & ButtonStyleProps;

// External links open in a new tab; internal ones stay in the same tab.
function isExternal(href: ButtonLinkProps["href"]) {
  return typeof href === "string" && /^https?:\/\//.test(href);
}

export function ButtonLink({
  variant,
  size,
  className,
  ...props
}: ButtonLinkProps) {
  const externalProps = isExternal(props.href)
    ? { target: "_blank", rel: "noopener noreferrer" }
    : {};

  return (
    <Link
      className={buttonClasses({ variant, size, className })}
      {...externalProps}
      {...props}
    />
  );
}
