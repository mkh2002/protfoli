import React from "react";

import { cn } from "@/lib/utils";

interface ShimmerButtonProps {
  word: string;
  className?: string;
  icon?: React.ReactElement;
  onClick?: () => void;
}

export default function ShimmerButton({
  word,
  icon,
  className,
  onClick,
}: ShimmerButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex h-12 items-center justify-center animate-shimmer rounded-md border-primary/30 border bg-[linear-gradient(110deg,hsl(var(--background)),45%,hsl(var(--primary)),55%,hsl(var(--background)))] bg-[length:200%_100%] px-6 font-medium text-foreground/70 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50",
        className,
      )}
      onClick={onClick}
    >
      <span>{word}</span>
      {icon}
    </button>
  );
}
