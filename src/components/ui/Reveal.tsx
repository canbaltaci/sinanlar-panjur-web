/* eslint-disable @next/next/no-img-element */
"use client";

import type { ElementType } from "react";
import { cn } from "@/lib/cn";
import { useInView } from "@/lib/useInView";

type RevealProps<TAs extends ElementType> = {
  as?: TAs;
  delayMs?: number;
  className?: string;
} & Omit<React.ComponentPropsWithoutRef<TAs>, "as" | "className">;

export function Reveal<TAs extends ElementType = "div">({
  as,
  className,
  delayMs = 0,
  ...props
}: RevealProps<TAs>) {
  const { ref, inView } = useInView<HTMLElement>({
    rootMargin: "0px 0px -10% 0px",
  });

  const Comp = (as ?? "div") as ElementType;

  return (
    <Comp
      ref={ref as any}
      style={{
        ...(props as any).style,
        ["--sp-delay" as any]: `${delayMs}ms`,
      }}
      className={cn("sp-reveal", inView && "is-inview", className)}
      {...(props as any)}
    />
  );
}

