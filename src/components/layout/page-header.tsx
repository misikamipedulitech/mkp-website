export function PageHeader({
  title,
  description,
}: {
  title: string;
  description?: string;
}) {
  return (
    <div className="py-12 sm:py-16">
      <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
        {title}
      </h1>
      {description && (
        <p className="mt-4 max-w-2xl text-black/70">
          {description}
        </p>
      )}
    </div>
  );
}
