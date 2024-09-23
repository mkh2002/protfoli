"use client";
import React from "react";
import Image from "next/image";
import { LuMapPin } from "react-icons/lu";
import { TbBrandWechat } from "react-icons/tb";
import { RiQqLine } from "react-icons/ri";
import { RxGithubLogo } from "react-icons/rx";
import { motion } from "framer-motion";

import { useSectionInView } from "@/lib/hooks/useSectionInView";

import Social from "./social";

const socials = [
  {
    href: "https://u.wechat.com/MNotSo9CT12W7F700hZ-inY",
    icon: <TbBrandWechat className="size-5" />,
  },
  {
    href: "https://qm.qq.com/q/3dwNjpvzqw",
    icon: <RiQqLine className="size-5" />,
  },
  {
    href: "https://github.com/mkh2002",
    icon: <RxGithubLogo className="size-5" />,
  },
];

const facts = [
  {
    content:
      "🎓 Current student at Sichuan University of Science and Chemical Technology",
  },
  { content: "💻 I am currently awaiting employment opportunities" },
  { content: "🌱 Learn software development and data analysis" },
  { content: "🚄 Love traveling" },
];

export default function About() {
  const { ref } = useSectionInView("About", 0.5);

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

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <section ref={ref} className="mt-10 w-full pb-40" id="about">
      <div className="mx-auto max-w-[89vw] rounded-md bg-background p-8 md:max-w-2xl lg:max-w-[60vw]">
        <div className="flex w-full flex-col">
          <div className="flex flex-col gap-4 md:flex-row md:gap-0">
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              transition={{
                duration: 0.5,
                type: "spring",
                stiffness: 200,
                damping: 20,
              }}
              viewport={{ once: true, amount: 0.8 }}
              whileInView={{ scale: 1, opacity: 1 }}
            >
              <Image
                alt="about"
                className="rounded-full"
                height={200}
                sizes="auto"
                src="/profile.jpeg"
                width={200}
              />
            </motion.div>
            <motion.div
              className="md:w-2/3 md:pl-8"
              initial={{ opacity: 0, scale: 0 }}
              viewport={{ once: true, amount: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
            >
              <h3 className="mb-2 text-3xl font-bold">Keyby</h3>
              <h5 className="mb-4 text-xl text-muted-foreground">
                Web developer
              </h5>
              <p className="mb-4">
                I am a web developer who loves to create websites and web
                applications. I am passionate about learning new technologies
                and building new projects. I am also a student who is studying
                computer science.
              </p>

              <div className="mb-4 flex items-center">
                <LuMapPin className="mr-2 size-5 text-muted-foreground" />
                <p className="text-muted-foreground">Chengdu, Sichuan</p>
              </div>
              <div className="flex gap-4">
                {socials.map((social, index) => (
                  <Social key={index} {...social} />
                ))}
              </div>
            </motion.div>
          </div>
          <motion.div
            className="mt-8 flex flex-col space-y-2"
            initial="hidden"
            variants={container}
            viewport={{ once: true, amount: 0.8 }}
            whileInView={"visible"}
          >
            <motion.h3 className="mb-4  text-2xl font-semibold" variants={item}>
              Quick Facts
            </motion.h3>
            {facts.map((fact, index) => (
              <motion.span key={index} variants={item}>
                {fact.content}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
