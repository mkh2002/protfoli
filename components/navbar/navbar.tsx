"use client";
import React from "react";
import { motion } from "framer-motion";

import { site } from "@/config/data";

import NavbarLink from "./navbar-link";

export default function Navbar() {
  return (
    <motion.div
      animate={{ opacity: 1, y: 0 }}
      className="fixed left-1/2 top-0 z-[100] flex w-full items-center justify-center space-x-12 border-b bg-background/70 px-6 py-3 shadow backdrop-blur md:top-10 md:w-auto md:rounded-full md:border md:py-2"
      initial={{ opacity: 0, translateX: "-50%", y: -100 }}
    >
      <ul className="flex w-full flex-nowrap justify-between md:w-[32rem]">
        {site.map((item) => (
          <NavbarLink key={item.name} href={item.href} name={item.name} />
        ))}
      </ul>
    </motion.div>
  );
}
