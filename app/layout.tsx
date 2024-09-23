import type { Metadata } from "next";

import localFont from "next/font/local";

import "@/styles/globals.css";
import { cn } from "@/lib/utils";
import Provider from "@/components/provider/provider";
import Navbar from "@/components/navbar/navbar";

const geistSans = localFont({
  src: "../styles/fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "../styles/fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Keyb's Protfolio",
  description: "Welcome to my Protfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning lang="en">
      <body
        className={cn(
          `${geistSans.variable} ${geistMono.variable} antialiased`,
          "min-h-screen bg-background relative",
        )}
      >
        <Provider>
          <nav>
            <Navbar />
          </nav>
          {children}
        </Provider>
      </body>
    </html>
  );
}
