"use client";

import React from "react";
import { useTheme } from "next-themes";
import { LuMoon, LuSun } from "react-icons/lu";

import { Button } from "./ui/button";

export default function ToggleThemeIcon() {
  const { theme, setTheme } = useTheme();
  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <Button
      className="fixed bottom-10 right-10"
      size="icon"
      variant={"outline"}
      onClick={toggleTheme}
    >
      {theme === "dark" ? (
        <LuMoon className="size-4" />
      ) : (
        <LuSun className="size-4" />
      )}
    </Button>
  );
}
