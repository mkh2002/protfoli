import Hero from "@/components/hero/hero";
import Works from "@/components/work/work";

export default function Home() {
  return (
    <main className="relative mx-auto flex flex-col items-center justify-center overflow-hidden sm:px-10">
      <Hero />
      <Works />
    </main>
  );
}
