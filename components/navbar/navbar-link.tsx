import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

import { cn } from "@/lib/utils";
import { useActiveSectionContext } from "@/context/active-section-context";

interface NavbarLinkProps {
  name: string;
  href: string;
}

export default function NavbarLink({ href, name }: NavbarLinkProps) {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();

  return (
    <motion.li
      animate={{ opacity: 1, y: 0 }}
      className="flex items-center justify-center"
      initial={{ opacity: 0, y: -100 }}
    >
      <Link
        className={cn(
          "px-5 py-2 rounded-lg md:rounded-full relative text-sm transition",
          activeSection === name || "text-muted-foreground",
        )}
        href={href}
        onClick={() => {
          setActiveSection(name);
          setTimeOfLastClick(Date.now());
        }}
      >
        {name}

        {name === activeSection && (
          <motion.span
            className="absolute inset-0 -z-10 rounded-full bg-muted"
            layoutId="activeSection"
            transition={{
              type: "spring",
              stiffness: 380,
              damping: 30,
            }}
          />
        )}
      </Link>
    </motion.li>
  );
}
