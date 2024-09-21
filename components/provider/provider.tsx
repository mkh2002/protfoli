import React from "react";
import { ThemeProvider } from "next-themes";
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
      {children}
    </ThemeProvider>
  );
}
