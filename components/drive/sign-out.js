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

export function SignOutDrive() {
  return (
    <form
      className=""
      action={async () => {
        await signOut();
      }}
    >
      <SignOutButton className={"flex items-center gap-2"}>
        <LogOut size={15} /> Sign Out
      </SignOutButton>
    </form>
  );
}
