"use client";
import { Input } from "@/components/ui/input";
import SubmitButton from "../submit-button";
import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { redirect, useRouter } from "next/navigation";
import { toast } from "sonner";
import { signIn } from "next-auth/react";

export default function SignInForm() {
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();
  return (
    <form
      action={async (formData) => {
        const res = await signIn("credentials", {
          email: formData.get("email"),
          password: formData.get("password"),
          redirect: false,
        });

        if (res.ok) {
          toast.success("Sign in successful");
          router.push("/");
        } else {
          toast.error("Invalid email or password");
        }
      }}
      className="flex flex-col mt-5"
    >
      <label htmlFor="email" className="text-sm font-medium">
        Email
      </label>
      <Input
        className="mt-1 focus-visible:ring-1 focus-visible:ring-offset-0 transition-all bg-white z-10"
        type="email"
        name="email"
        id="email"
      />
      <label htmlFor="password" className="text-sm font-medium mt-3">
        Password
      </label>
      <div className="relative w-full">
        <Input
          className="mt-1 focus-visible:ring-1 focus-visible:ring-offset-0 transition-all bg-white z-10"
          type={showPassword ? "text" : "password"}
          name="password"
          id="password"
        />
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-500 p-1 rounded-md hover:bg-zinc-100"
        >
          {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
        </button>
      </div>
      <div className="flex justify-between w-full  mt-5">
        <div className="flex items-center gap-2">
          <Checkbox id="remember" />
          <label htmlFor="remember" className="text-sm text-zinc-500">
            Remember me
          </label>
        </div>
        <a className="text-sm text-zinc-500 hover:underline">
          Forgot password?
        </a>
      </div>
      <SubmitButton className={"mt-10"}>Sign In</SubmitButton>
      <div className="mt-5 grid grid-cols-3 items-center">
        <Separator className=" col-span-1" />
        <p className="text-sm text-zinc-500 text-center col-span-1">or</p>
        <Separator className="col-span-1" />
      </div>
      <div className="flex flex-col lg:flex-row gap-5 mt-5 w-full">
        <Button variant="secondary" className="w-full">
          Sign in with Google
        </Button>
        <Button variant="secondary" className="w-full">
          Sign in with GitHub
        </Button>
      </div>
    </form>
  );
}
