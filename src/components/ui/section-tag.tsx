export function SectionTag({ children }: { children: string }) {
  return (
    <p className="inline-block -rotate-2 bg-primary px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-primary-foreground">
      {children}
    </p>
  );
}
