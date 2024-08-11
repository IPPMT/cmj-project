import SignUpForm from "@/components/form/auth/sign-up";
import GridPattern from "@/components/magicui/grid-pattern";
import { cn } from "@/lib/utils";
import { Toaster } from "sonner";

export default function Page() {
  return (
    <main className="flex w-full min-h-screen items-center justify-center">
      <Toaster richColors closeButton position="top-center" />
      <GridPattern
        width={40}
        height={40}
        x={-1}
        y={-1}
        className={cn(
          "[mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)] "
        )}
      />
      <section className="lg:w-1/2 flex flex-col hidden lg:block">
        <div className="flex flex-col items-center justify-center">
          <p className="text-5xl font-semibold">Welcome</p>
          <p className="text-zinc-400 text-sm">
            PT Citra Mekar Jaya Developer Console
          </p>
        </div>
      </section>

      <section className="border-l w-full lg:w-1/2 flex flex-col h-screen items-center justify-center lg:bg-gradient-to-b lg:from-white lg:to-zinc-50 lg:z-10">
        <p className="text-2xl font-semibold text-left w-full px-10 block lg:hidden">
          Welcome
        </p>
        <div className="p-10 rounded-md w-full lg:w-4/5 xl:w-2/3 2xl:w-1/2 flex flex-col justify-center">
          <p className="text-xl font-semibold">Sign Up</p>
          <p className="text-zinc-400 text-sm">Register new account</p>
          <SignUpForm />
        </div>
      </section>
    </main>
  );
}
