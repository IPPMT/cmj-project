"use client";

import { LogOut } from "lucide-react";
import { signOut } from "next-auth/react";
import { useFormStatus } from "react-dom";

function SignOutButton({ className, children }) {
  const { pending } = useFormStatus();
  return (
    <button type="submit" disabled={pending} className={className}>
      {pending ? "Signing Out..." : children}
    </button>
  );
}

export function SignOut() {
  return (
    <form
      className=""
      action={async () => {
        await signOut();
      }}
    >
      <SignOutButton className="w-fit flex items-center gap-2 px-5 py-2 text-sm font-medium rounded-md text-white border mt-3">
        <LogOut size={15} /> Sign Out
      </SignOutButton>
    </form>
  );
}
