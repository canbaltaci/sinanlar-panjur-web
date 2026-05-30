import { cn } from "@/lib/cn";

type Variant = "primary" | "secondary" | "ghost";

export function Button({
  variant = "primary",
  className,
  ...props
}: React.ComponentPropsWithoutRef<"a"> & { variant?: Variant }) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold tracking-tight transition will-change-transform focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-400/60 focus-visible:ring-offset-0 active:translate-y-[1px]";

  const variants: Record<Variant, string> = {
    primary:
      "bg-orange-500 text-black shadow-[0_10px_30px_-14px_rgba(249,115,22,0.65)] hover:bg-orange-400",
    secondary:
      "bg-zinc-900/60 text-zinc-50 ring-1 ring-white/10 hover:bg-zinc-900/80",
    ghost:
      "bg-transparent text-zinc-50 ring-1 ring-white/10 hover:bg-white/5",
  };

  return <a className={cn(base, variants[variant], className)} {...props} />;
}

