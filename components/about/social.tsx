import Link from "next/link";
import React from "react";

import { cn } from "@/lib/utils";

import { buttonVariants } from "../ui/button";

interface SocialProps {
  href: string;
  icon: React.ReactElement<SVGAElement>;
}

export default function Social({ href, icon }: SocialProps) {
  return (
    <Link
      className={cn(buttonVariants({ size: "icon", variant: "outline" }))}
      href={href}
    >
      {icon}
    </Link>
  );
}
