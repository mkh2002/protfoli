import React from "react";
import { ThemeProvider } from "next-themes";

import ActiveSectionContextProvider from "@/context/active-section-context";
export default function Provider({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <ThemeProvider
      disableTransitionOnChange
      enableSystem
      attribute="class"
      defaultTheme="dark"
    >
      <ActiveSectionContextProvider>{children}</ActiveSectionContextProvider>
    </ThemeProvider>
  );
}
