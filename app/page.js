import GridPattern from "@/components/magicui/grid-pattern";
import { cn } from "@/lib/utils";
import TypingAnimation from "@/components/magicui/typing-animation";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-black overflow-hidden relative">
      <div className="absolute top-0 left-0 w-80 h-80 rotate-45 bg-gradient-to-br from-blue-500 to-indigo-800 blur-2xl rounded-full opacity-50"></div>
      <div className="absolute -bottom-32 -right-32 lg:-bottom-10 lg:-right-10 w-80 h-80 rotate-45 bg-gradient-to-br from-blue-500 to-indigo-800 blur-2xl rounded-full opacity-50"></div>
      <TypingAnimation
        className="lg:text-6xl font-normal text-white"
        text="App Template"
        duration={300}
      />
      <GridPattern
        width={40}
        height={40}
        x={-1}
        y={-1}
        className={cn(
          "[mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)] "
        )}
      />
    </main>
  );
}
