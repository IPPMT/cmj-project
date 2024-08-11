import { CircleHelp } from "lucide-react";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-black text-white">
      <CircleHelp size={32} />
      <p className="text-5xl mt-5 font-semibold">
        The page your&apos;re looking for is not found
      </p>
    </main>
  );
}
