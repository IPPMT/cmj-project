"use client";
import { useFormStatus } from "react-dom";
import { Button } from "../ui/button";
import { LoaderCircle } from "lucide-react";

export default function SubmitButton({ children, className }) {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className={className}>
      {pending ? (
        <p className="flex items-center gap-2">
          {" "}
          <LoaderCircle size={16} className="animate-spin" />
          Loading...{" "}
        </p>
      ) : (
        children
      )}
    </Button>
  );
}
