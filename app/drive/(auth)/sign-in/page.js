import SignInForm from "@/components/form/auth/sign-in";
import { PackageOpen } from "lucide-react";

import { cn } from "@/lib/utils";
import DotPattern from "@/components/magicui/dot-pattern";

export default function Page() {
  return (
    <main className="flex min-h-screen items-center justify-center ">
      <DotPattern
        width={20}
        height={20}
        cx={1}
        cy={1}
        cr={1}
        className={cn(
          "[mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)] "
        )}
      />
      <section className="lg:w-1/2 flex flex-col hidden lg:block">
        <div className="flex flex-col items-center justify-center">
          <div className="flex gap-5 items-center">
            <PackageOpen size={70} />
            <p className="text-5xl font-semibold">Drive</p>
          </div>
        </div>
      </section>

      <section className="w-full lg:w-1/2 flex flex-col h-screen items-center justify-center lg:z-10 ">
        <p className="text-2xl font-semibold text-left w-full px-10 block lg:hidden">
          Welcome
        </p>
        <div className="p-10 rounded-md w-full lg:w-4/5 xl:w-2/3 2xl:w-1/2 flex flex-col justify-center">
          <p className="text-xl font-semibold">Sign In</p>
          <p className="text-zinc-400 text-sm">
            Sign in to your account to continue
          </p>
          <SignInForm />
        </div>
      </section>
    </main>
  );
}
