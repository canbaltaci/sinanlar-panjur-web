import { cn } from "@/lib/cn";

export function SectionHeading({
  eyebrow,
  title,
  description,
  className,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
}) {
  return (
    <div className={cn("max-w-2xl", className)}>
      {eyebrow ? (
        <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1 text-xs font-semibold tracking-wide text-zinc-200 ring-1 ring-white/10">
          <span className="h-1.5 w-1.5 rounded-full bg-orange-500/90" />
          {eyebrow}
        </div>
      ) : null}
      <h2 className="text-balance text-2xl font-semibold tracking-tight text-zinc-50 sm:text-3xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-3 text-pretty text-sm leading-7 text-zinc-300">
          {description}
        </p>
      ) : null}
    </div>
  );
}

