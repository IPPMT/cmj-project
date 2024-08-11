"use client";
import { Input } from "@/components/ui/input";
import SubmitButton from "../submit-button";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { SignUp } from "@/lib/auth/auth-actions";
import { useRef, useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { toast } from "sonner";

export default function SignUpForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [check, setCheck] = useState(false);
  const ref = useRef();
  return (
    <form
      ref={ref}
      action={async (formData) => {
        const res = await SignUp(formData);
        if (res) {
          ref.current.reset();
          toast.success("Sign Up Success");
        } else {
          toast.error("Sign Up Failed");
        }
      }}
      className="flex flex-col mt-5"
    >
      <label htmlFor="name" className="text-sm font-medium">
        Name
      </label>
      <Input
        className="mt-1 focus-visible:ring-1 focus-visible:ring-offset-0 transition-all bg-white z-10"
        type="name"
        name="name"
        id="name"
      />
      <label htmlFor="email" className="text-sm font-medium mt-3">
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
      <label htmlFor="confirm_password" className="text-sm font-medium mt-3">
        Re-type Password
      </label>
      <Input
        className="mt-1 focus-visible:ring-1 focus-visible:ring-offset-0 transition-all bg-white z-10"
        type={showPassword ? "text" : "password"}
        name="confirm_password"
        id="confirm_password"
        onChange={(e) => {
          if (e.target.value !== document.getElementById("password").value) {
            setCheck(true);
          } else {
            setCheck(false);
          }
        }}
      />

      {check && (
        <p className="text-xs mt-3 text-red-500">Password didn&apos;t match</p>
      )}

      <SubmitButton className={"mt-10"}>Sign Up</SubmitButton>
      <div className="mt-5 grid grid-cols-3 items-center">
        <Separator className=" col-span-1" />
        <p className="text-sm text-zinc-500 text-center col-span-1">or</p>
        <Separator className="col-span-1" />
      </div>
      <div className="flex flex-col lg:flex-row gap-5 mt-5 w-full">
        <Button variant="secondary" className="w-full">
          Sign up with Google
        </Button>
        <Button variant="secondary" className="w-full">
          Sign up with GitHub
        </Button>
      </div>
    </form>
  );
}
