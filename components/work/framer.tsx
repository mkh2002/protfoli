import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";

export default function Framer() {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [0.2, 2]);
  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };
  const constraintsRef = useRef(null);

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  const icon = {
    hidden: {
      pathLength: 0,
      fill: "rgba(255, 255, 255, 0)",
    },
    visible: {
      pathLength: 1,
      fill: "rgba(255, 255, 255, 1)",
    },
  };

  return (
    <div className="relative order-2">
      <div className="grid h-full grid-cols-3 grid-rows-2 gap-4 *:rounded-xl *:md:rounded-lg">
        <div className="flex aspect-square h-full items-center justify-center bg-gradient-to-br from-red-500 to-purple-500">
          <motion.div
            className="size-3/5 rounded-lg bg-foreground"
            initial={{ scale: 0, rotate: 0 }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 20,
            }}
            whileInView={{ scale: 1, rotate: 180 }}
          />
        </div>
        <div className="flex aspect-square h-full items-center justify-center rounded-lg bg-gradient-to-br from-pink-500 to-purple-500">
          <motion.div
            className="grid size-3/5 grid-cols-2 grid-rows-2 items-center justify-items-center rounded-xl bg-white/30 md:rounded-lg"
            initial="hidden"
            variants={container}
            whileInView="visible"
          >
            {Array.from({ length: 4 }).map((_, index) => (
              <motion.div
                key={index}
                className="size-6 rounded-full bg-white md:size-4"
                variants={item}
              />
            ))}
          </motion.div>
        </div>

        <div className="flex aspect-square h-full items-center justify-center bg-gradient-to-br from-purple-400 to-purple-700">
          <motion.div
            className="size-3/5 rounded-lg bg-foreground"
            whileHover={{ rotate: 180, scale: 1.2 }}
          />
        </div>

        <div className="flex aspect-square h-full items-center justify-center bg-gradient-to-br from-purple-600 to-blue-500">
          <motion.div
            ref={constraintsRef}
            className="flex size-3/5 items-center justify-center overflow-hidden rounded-lg bg-white/30"
          >
            <motion.div
              drag
              className="size-3/5 rounded-lg bg-white"
              dragConstraints={constraintsRef}
            />
          </motion.div>
        </div>

        <motion.div className="flex aspect-square h-full items-center justify-center bg-gradient-to-br from-blue-500 to-blue-600">
          <motion.div
            className="relative size-[28%] overflow-hidden rounded-sm bg-white/30"
            style={{ scale }}
          >
            <motion.div
              className="size-full origin-[50%_100%] bg-white"
              style={{
                scaleY: scrollYProgress,
              }}
            />
          </motion.div>
        </motion.div>
        <motion.div className="flex aspect-square h-full items-center justify-center bg-gradient-to-br from-blue-600 to-sky-500">
          <div className="size-2/5">
            <motion.svg
              className="overflow-visible stroke-white stroke-2"
              viewBox="0 0 100 100"
              xmlns="http://www.w3.org/2000/svg"
            >
              <motion.path
                d="M0 100V0l50 50 50-50v100L75 75l-25 25-25-25z"
                initial="hidden"
                transition={{
                  default: { duration: 2, ease: "easeInOut" },
                  fill: { duration: 2, ease: [1, 0, 0.8, 1] },
                }}
                variants={icon}
                whileInView="visible"
              />
            </motion.svg>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
