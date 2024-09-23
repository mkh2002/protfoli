"use client";
import React from "react";
import Image from "next/image";
import { RiNextjsLine, RiReactjsFill, RiTailwindCssFill } from "react-icons/ri";
import { SiShadcnui } from "react-icons/si";

import { useSectionInView } from "@/lib/hooks/useSectionInView";

import { Timeline } from "../ui/timeline";
import { ApexChartsIcon } from "../icon/apex-charts";
import { NextuiIcon } from "../icon/nextui";
import { ReacthookformIcon } from "../icon/react-hooks-form";

const studyList = [
  {
    id: 1,
    content: "✅ Html && Css && Js",
  },
  {
    id: 2,
    content: "✅ Java",
  },
  {
    id: 3,
    content: "✅ Mysql",
  },
  {
    id: 4,
    content: "✅ Php",
  },
  {
    id: 5,
    content: "✅ Python",
  },
];

const otherList = [
  {
    id: 1,
    content: "✅ C && C++",
  },
  {
    id: 2,
    content: "✅ Linux",
  },
  {
    id: 3,
    content: "✅ Git && Docker && NodeJs",
  },
  {
    id: 4,
    content: "✅ React && Nextjs",
  },
  {
    id: 5,
    content: "✅ Chartjs && BigData",
  },
  {
    id: 6,
    content: "✅ Data Structure && Algorithm",
  },
];

const content = [
  {
    title: "2020-2023",
    content: (
      <div className="space-y-4">
        <h3 className="text-2xl font-semibold">
          SiChuan Aerospace Vocational College
        </h3>
        <div className="space-y-2">
          {studyList.map((item) => (
            <p key={item.id}>{item.content}</p>
          ))}
        </div>
      </div>
    ),
  },
  {
    title: "2023-NOW",
    content: (
      <div className="space-y-4">
        <h3 className="text-2xl font-semibold">
          Sichuan University of Science and Chemical Technology
        </h3>
        <div className="space-y-2">
          {otherList.map((item) => (
            <p key={item.id}>{item.content}</p>
          ))}
        </div>

        <div className="mt-8 grid gap-2">
          <div className="relative aspect-[16/10] w-full rounded-lg shadow shadow-muted/50">
            <Image
              fill
              priority
              alt="education"
              className="h-full w-auto rounded-lg "
              sizes="auto"
              src="/shop.png"
            />
            <div className="absolute bottom-0 right-0 z-10 flex w-full items-center justify-end space-x-2 bg-gradient-to-l from-black/75 to-transparent p-2 ">
              <RiReactjsFill className="text-sky-500" />
              <RiTailwindCssFill className="text-sky-500" />
              <RiNextjsLine className="text-gray-500" />
              <SiShadcnui className="size-2.5 text-white" />
              <ReacthookformIcon className="size-4 rounded-sm bg-pink-500 p-0.5" />
            </div>
          </div>
          <div className="relative aspect-[16/10] w-full rounded-lg shadow shadow-muted/50">
            <Image
              fill
              priority
              alt="education"
              className="h-full w-auto rounded-lg shadow-xl"
              sizes="auto"
              src="/chart.png"
            />
            <div className="absolute bottom-0 right-0 z-10 flex w-full justify-end space-x-2 bg-gradient-to-l from-black/70 to-transparent p-2 ">
              <RiReactjsFill className="text-sky-500" />
              <RiTailwindCssFill className="text-sky-500" />
              <RiNextjsLine className="text-gray-500" />
              <NextuiIcon className="mt-0.5 size-3 text-muted-foreground" />
              <ApexChartsIcon className="mt-0.5 size-3 text-gray-500" />
            </div>
          </div>
        </div>
      </div>
    ),
  },
];

export default function Education() {
  const { ref } = useSectionInView("Education", 0.5);

  return (
    <section
      ref={ref}
      className="w-full max-w-[89vw] overflow-hidden  md:max-w-2xl lg:max-w-[60vw]"
      id="education"
    >
      <Timeline data={content} />
    </section>
  );
}
