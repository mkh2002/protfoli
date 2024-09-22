import React from "react";
import { LuFrame, LuMusic, LuTv } from "react-icons/lu";
import { motion } from "framer-motion";

import MessageCard, { MessageCardProps } from "../ui/message-card";

const items: MessageCardProps[] = [
  {
    title: "Shop",
    href: "http://localhost:3001/dashboard",
    description: "Built with Next.js and Shadcn/ui",
    state: "Developing",
    icon: <LuFrame />,
    inital: { x: 40, rotate: -5 },
    animate: { x: 0, rotate: 0 },
  },
  {
    title: "Bilibili Variant",
    description: "Built with Next.js and Python",
    state: "Compeleted",
    className: "z-10",
    icon: <LuTv />,
  },
  {
    title: "Music",
    description: "Built with Next.js and Aceternity UI",
    state: "Planned",
    icon: <LuMusic />,
    inital: { x: -40, rotate: 5 },
    animate: { x: 0, rotate: 0 },
  },
];

export default function Projects() {
  return (
    <div className="relative flex size-full items-center justify-center bg-dot-black/[0.2] dark:bg-dot-white/[0.1]">
      <motion.div
        animate="animate"
        className="grid grid-cols-3 gap-4 px-4"
        initial="inital"
        whileHover="hover"
      >
        {items.map((item) => (
          <MessageCard key={item.title} {...item} />
        ))}
      </motion.div>
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-background [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] " />
    </div>
  );
}
