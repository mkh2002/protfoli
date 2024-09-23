import React from "react";

export default function Nextjs() {
  return (
    <div className="group flex size-full translate-x-1/4 skew-x-12 flex-col gap-4 rounded-t-lg border px-2 pt-4 transition-all *:transition-all hover:skew-x-0 md:translate-x-0 md:rounded-lg md:p-2">
      <div className="relative flex h-20 items-center gap-2 group-hover:translate-y-0 md:h-full md:-translate-y-1/2">
        <div className="aspect-square h-3/4 rounded-full bg-muted/45 group-hover:bg-muted/75" />
        <div className="flex h-full flex-1 flex-col gap-2">
          <div className="h-full rounded-lg bg-muted/45 group-hover:bg-muted/75" />
          <div className="h-2/3 rounded-lg bg-muted/45 group-hover:bg-muted/75" />
        </div>
      </div>
      <div className="min-h-32 rounded-t-xl bg-muted/45 group-hover:bg-muted/75 md:hidden" />
    </div>
  );
}
