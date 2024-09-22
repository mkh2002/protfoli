"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

import { cn } from "@/lib/utils";

export interface MessageCardProps {
  inital?: any;
  animate?: any;
  title: string;
  className?: string;
  href?: string;
  description: string;
  state?: "Compeleted" | "Developing" | "Planned";
  icon?: React.ReactElement;
}

export default function MessageCard({
  title,
  description,
  state,
  className,
  icon,
  inital,
  animate,
  href,
}: MessageCardProps) {
  return (
    <motion.div
      className={className}
      variants={{
        inital: inital,
        hover: animate,
      }}
    >
      <Link href={href ? href : "/"}>
        <div className="flex aspect-square w-full flex-col items-center justify-center space-y-2 rounded-xl border bg-background p-4">
          <div className="rounded-full border bg-background p-2">{icon}</div>
          <div className="flex flex-col items-center gap-4">
            <div className="space-y-2 text-center">
              <h3 className="text-sm">{title}</h3>
              <p className="text-xs">{description}</p>
            </div>
            <span
              className={cn(
                "rounded-full text-foreground px-2 py-1 text-[0.625rem] border",
                state === "Planned" && "bg-blue-500/30 border-blue-500",
                state === "Developing" && "bg-orange-500/30 border-orange-400",
                state === "Compeleted" && "bg-lime-500/30 border-lime-500",
              )}
            >
              {state}
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
