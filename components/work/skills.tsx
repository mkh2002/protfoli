import React from "react";

import { skills } from "@/config/data";

export default function Skills() {
  return (
    <div className="ml-auto grid h-full grid-cols-2 gap-2 overflow-auto md:w-4/5 lg:w-3/5">
      <div className="flex flex-col gap-2">
        {skills.slice(0, 3).map((skill) => (
          <p
            key={skill.id}
            className="flex w-full flex-1 select-none items-center justify-center rounded-md bg-accent/30 p-2 text-center capitalize text-muted-foreground"
          >
            {skill.name}
          </p>
        ))}
        <div className="flex-1 rounded-md bg-accent/50" />
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex-1 rounded-md bg-accent/50" />
        {skills.slice(3, skills.length).map((skill) => (
          <p
            key={skill.id}
            className="flex w-full flex-1 select-none items-center justify-center rounded-md bg-accent/55 p-2 text-center capitalize text-muted-foreground"
          >
            {skill.name}
          </p>
        ))}
      </div>
    </div>
  );
}
