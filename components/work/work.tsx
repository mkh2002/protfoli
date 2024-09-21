import React from "react";
import { LuBookCopy, LuFolderGit } from "react-icons/lu";

import { BentoGrid, BentoGridItem } from "../ui/bento-grid";

import Projects from "./project";

const items = [
  {
    header: <Projects />,
    title: "My Projects",
    description: "A collection of my projects",
    className: "col-span-2",
    icon: <LuFolderGit className="size-4" />,
  },
  {
    header: "My Skills",
    description: "A list of my skills",
    className: "",
    icon: <LuBookCopy className="size-4" />,
  },
];

export default function Works() {
  return (
    <section className="relative h-dvh w-full px-5 py-20" id="projects">
      <BentoGrid>
        {items.map((item, index) => (
          <BentoGridItem key={index} {...item} />
        ))}
      </BentoGrid>
    </section>
  );
}
