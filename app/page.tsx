import dynamic from "next/dynamic";

import About from "@/components/about/about";
import Education from "@/components/education/education";
import Hero from "@/components/hero/hero";
import Works from "@/components/work/work";

const ToggleThemeIcon = dynamic(
  () => import("@/components/toggle-theme-button"),
  { ssr: false },
);

export default function Home() {
  return (
    <main className="relative mx-auto flex flex-col items-center justify-center overflow-hidden sm:px-10">
      <Hero />
      <Works />
      <Education />
      <About />
      <ToggleThemeIcon />
    </main>
  );
}
