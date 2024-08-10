"use client";

import { cn } from "@/lib/utils";
import DotPattern from "@/components/magicui/dot-pattern";

export default function DotPatternDemo() {
  return (
    (<div
      className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border border-zinc-200 bg-white md:shadow-xl dark:border-zinc-800 dark:bg-zinc-950">
      <p
        className="z-10 whitespace-pre-wrap text-center text-5xl font-medium tracking-tighter text-black dark:text-white">
        Dot Pattern
      </p>
      <DotPattern
        className={cn("[mask-image:radial-gradient(300px_circle_at_center,white,transparent)]")} />
    </div>)
  );
}
