import React from "react";
import { motion } from "framer-motion";

import { studyTimeLine } from "@/config/data";
import { cn } from "@/lib/utils";

export default function Timeline() {
  return (
    <div className="relative flex flex-1 flex-col items-end justify-between px-10 grayscale-[50%] md:mt-5 md:flex-1 md:flex-row md:items-center">
      <div className="absolute right-12 h-[calc(100%)] w-px bg-gradient-to-b from-background to-primary md:left-12 md:h-px md:w-[calc(100%-6rem)] md:bg-gradient-to-r" />
      {studyTimeLine.map((item, index) => (
        <motion.div
          key={index}
          animate="animate"
          className="z-10 size-4 cursor-pointer"
          initial="initial"
          whileHover="hover"
        >
          <motion.div
            className={cn(
              "size-4 rounded-full bg-gradient-to-br from-accent to-primary",
              index === 0 && "from-accent to-accent",
              index === 1 && "from-accent via-accent to-primary",
              index === studyTimeLine.length - 1 &&
                "from-primary to-primary before:absolute before:rounded-full before:opacity-50 before:animate-ping before:size-4 before:bg-primary before:top-0 before:right-0 relative",
            )}
            variants={{
              hover: {
                rotateX: 45,
              },
            }}
          />
          <motion.div
            className="absolute left-0 top-0 rounded-lg border bg-accent/50 px-3 py-2 backdrop-blur md:bottom-0 md:left-auto md:right-0 md:top-auto"
            variants={{
              initial: { display: "none" },
              hover: { transitionEnd: { display: "block" } },
            }}
          >
            <p className="text-sm">{item.date}</p>
            <p>{item.title}</p>
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
}
