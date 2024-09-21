import Link from "next/link";
import { useParams } from "next/navigation";
import React from "react";
import { motion } from "framer-motion";

import { cn } from "@/lib/utils";

interface NavbarLinkProps {
  name: string;
  href: string;
}

export default function NavbarLink({ href, name }: NavbarLinkProps) {
  const pathname = useParams().pathname;

  return (
    <motion.li
      animate={{ opacity: 1, y: 0 }}
      className="flex items-center justify-center"
      initial={{ opacity: 0, y: -100 }}
    >
      <Link
        className={cn(
          "px-5 py-2 rounded-lg md:rounded-full text-sm",
          pathname === href ? "bg-muted" : "",
        )}
        href={href}
      >
        {name}
      </Link>
    </motion.li>
  );
}
