import React from "react";
import { LuFrame, LuMusic, LuTv } from "react-icons/lu";

import MessageCard, { MessageCardProps } from "../ui/bacgournd-overlay-card";

const items: MessageCardProps[] = [
  {
    title: "Shop",
    href: "http://localhost:3001/dashboard",
    description: "Built with Next.js and Shadcn/ui",
    state: "Developing",
    icon: <LuFrame />,
  },
  {
    title: "Bilibili Variant",
    description: "Built with Next.js and Python",
    state: "Compeleted",
    icon: <LuTv />,
  },
  {
    title: "Music",
    description: "Built with Next.js and Aceternity UI",
    state: "Planned",
    icon: <LuMusic />,
  },
];

export default function Projects() {
  return (
    <div className="relative flex size-full items-center justify-center bg-background bg-dot-black/[0.2] dark:bg-dot-white/[0.2]">
      <div className="grid grid-cols-3 gap-4 px-4">
        {items.map((item) => (
          <MessageCard
            key={item.title}
            description={item.description}
            href={item.href}
            icon={item.icon}
            state={item.state}
            title={item.title}
          />
        ))}
      </div>
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-background [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] " />
    </div>
  );
}
