import Ripple from "@/registry/components/magicui/ripple";

export default function RippleDemo() {
  return (
    (<div
      className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border border-zinc-200 bg-white md:shadow-xl dark:border-zinc-800 dark:bg-zinc-950">
      <p
        className="z-10 whitespace-pre-wrap text-center text-5xl font-medium tracking-tighter text-white">
        Ripple
      </p>
      <Ripple />
    </div>)
  );
}
