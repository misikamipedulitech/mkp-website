import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

// White instant-photo frame; tilt it with a rotate-* class.
export function Polaroid({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={twMerge(
        "bg-white p-2.5 pb-8 shadow-[0_12px_30px_-8px_rgb(0_0_0/0.35)] sm:p-3 sm:pb-10",
        className,
      )}
    >
      {children}
    </div>
  );
}
