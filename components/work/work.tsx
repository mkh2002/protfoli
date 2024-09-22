"use client";
import React from "react";
import { LuBookCopy, LuClock, LuFolderGit, LuFramer } from "react-icons/lu";
import { motion } from "framer-motion";
import { RxVercelLogo } from "react-icons/rx";

import { useSectionInView } from "@/lib/hooks/useSectionInView";

import { BentoGrid, BentoGridItem } from "../ui/bento-grid";

import Projects from "./project";
import Skills from "./skills";
import Timeline from "./timeline";
import Framer from "./framer";
import Nextjs from "./next-js";
import VistCode from "./vist-code";

const items = [
  {
    header: <Projects />,
    title: "My Projects",
    description: "A collection of my projects",
    className:
      "relative md:row-span-4 lg:min-h-[40vh] md:col-span-6 lg:col-span-3 md:flex-row",
    otherClass: "md:absolute md:bottom-6",
    icon: <LuFolderGit className="mt-1 size-4" />,
  },
  {
    header: <Skills />,
    description: "A list of my skills",
    title: "Skills I Learned",
    className:
      "relative md:col-span-3 min-h-48 md:row-span-2 lg:col-span-2 md:col-span-3 py-0",
    otherClass: "absolute bottom-4 md:bottom-0 md:top-1/2 md:-translate-y-1/4",
    icon: <LuBookCopy className="size-4" />,
  },
  {
    header: <Timeline />,
    description: "A timeline of my study",
    title: "Study Timeline",
    className:
      "md:col-span-3 min-h-48 md:row-span-2 relative lg:col-span-2 md:col-span-3 flex-col-reverse",
    otherClass: "absolute top-1/3 md:top-0 md:flex md:flex-col",
    icon: <LuClock className="size-4" />,
  },
  {
    title: "Next.js",
    header: <Nextjs />,
    icon: <RxVercelLogo className="size-4" />,
    className:
      "relative overflow-hidden md:flex-row gap-4 justify-center min-h-40 md:min-h-max md:col-span-3 md:row-span-1 lg:col-span-2 md:col-span-3",
    otherClass: "",
  },
  {
    header: <Framer />,
    description: "Dyanmic and interactive with Framer Motion",
    title: "Framer Motion",
    className:
      "flex-col md:flex-row gap-4 md:col-span-6 md:row-span-2 lg:col-span-3",
    otherClass: "flex-1 order-1 justify-center flex flex-col",
    icon: <LuFramer className="size-4" />,
  },
  {
    header: <VistCode />,
    className: "flex md:col-span-3 md:row-span-1 lg:col-span-2 md:col-span-3",
  },
];

export default function Works() {
  const { ref } = useSectionInView("Works", 1);

  return (
    <motion.section
      ref={ref}
      animate={{ opacity: 1 }}
      className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw]"
      exit={{ opacity: 0 }}
      id="works"
      initial={{ opacity: 0 }}
      transition={{ duration: 0.5, delay: 0.5 }}
    >
      <BentoGrid>
        {items.map((item, index) => (
          <BentoGridItem key={index} {...item} />
        ))}
      </BentoGrid>
    </motion.section>
  );
}
