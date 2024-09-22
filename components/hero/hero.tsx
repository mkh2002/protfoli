"use client";
import { motion } from "framer-motion";
import { LuNavigation } from "react-icons/lu";
import { useRouter } from "next/navigation";

import { Spotlight } from "../ui/spotlight";
import ShimmerButton from "../ui/shimmer-button";
import { TextGenerateEffect } from "../ui/text-generate-effect";

export default function Hero() {
  const router = useRouter();
  const ani = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { delay: 0.5, duration: 0.8 },
  };

  return (
    <section id="home">
      <div className="pb-20 pt-36">
        <Spotlight
          className="-left-10 -top-40 h-screen md:-left-32 md:-top-20"
          fill="white"
        />
        <Spotlight
          className="left-full top-10 h-[80vh] w-[50vw]"
          fill="purple"
        />
        <Spotlight className="left-80 top-28 h-[80dvh] w-[50vw]" fill="blue" />
      </div>
      <div className="absolute right-0 top-0 flex h-screen w-full items-center justify-center  bg-background bg-grid-black/[0.03] dark:bg-grid-white/[0.03]">
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-background [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>

      <div className="relative z-10 my-20 flex items-center justify-center">
        <div className="flex max-w-[89vw] flex-col items-center justify-center md:max-w-2xl lg:max-w-[60vw]">
          <motion.h2
            animate={ani.animate}
            className="text-xs uppercase"
            initial={ani.initial}
            transition={ani.transition}
          >
            Dynamic portfolio crafted with Next.js
          </motion.h2>
          <TextGenerateEffect
            className="text-center capitalize"
            words="Dynamic portfolio crafted with modern desgin powered by Next.js"
          />
          <motion.p
            animate={ani.animate}
            className="text-center text-sm md:text-lg md:tracking-wider lg:text-2xl"
            initial={ani.initial}
            transition={ani.transition}
          >
            I am Keyb, a college student with 3 years of web development
            experience.
          </motion.p>
          <motion.div
            animate={ani.animate}
            className="mt-5 flex w-full flex-col items-center justify-center space-y-5 md:flex-row md:space-x-6 md:space-y-0"
            initial={ani.initial}
            transition={ani.transition}
          >
            <ShimmerButton
              className="w-full space-x-2 rounded-xl px-6 py-3 text-sm md:w-auto"
              icon={<LuNavigation />}
              word="Show My Works"
              onClick={() => router.push("#projects")}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
