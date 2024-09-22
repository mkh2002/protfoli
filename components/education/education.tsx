"use client";
import React from "react";
import Image from "next/image";

import { useSectionInView } from "@/lib/hooks/useSectionInView";

import { Timeline } from "../ui/timeline";

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
          <div className="relative aspect-[16/10] w-full rounded-lg">
            <Image
              fill
              priority
              alt="education"
              className="object-cover"
              sizes="auto"
              src="/shop.png"
            />
          </div>
          <div className="relative aspect-[16/10] w-full">
            <Image
              fill
              priority
              alt="education"
              className="h-full w-auto rounded-lg object-cover"
              sizes="auto"
              src="/chart.png"
            />
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
