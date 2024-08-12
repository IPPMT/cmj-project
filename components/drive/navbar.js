"use client";
import { HardDrive, Package, Trash, Upload, Waypoints } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Separator } from "../ui/separator";
import { uploadFiles } from "@/lib/uploads/uploads";
import { useState } from "react";

export default function DriveSidebar({ session }) {
  const pathname = usePathname();
  const user_name = session?.user?.name;

  return (
    <div className="py-5 px-3 h-full flex flex-col justify-between border-r">
      <div className="flex flex-col gap-1 text-sm">
        <Link
          href={"/drive"}
          className={`flex items-center gap-2 w-full hover:bg-zinc-200 py-1 px-4 rounded-md transition-all duration-200 ${
            pathname === "/drive" ? "bg-zinc-200" : ""
          }`}
        >
          <HardDrive />
          <p>My Drive</p>
        </Link>
        <Link
          href={"/drive/shared"}
          className={`flex items-center gap-2 w-full hover:bg-zinc-200 py-1 px-4 rounded-md transition-all duration-200 ${
            pathname === "/shared" ? "bg-zinc-200" : ""
          }`}
        >
          <Waypoints />
          <p>Shared</p>
        </Link>
        <Link
          href={"/drive/trash"}
          className={`flex items-center gap-2 w-full hover:bg-zinc-200 py-1 px-4 rounded-md transition-all duration-200 ${
            pathname === "/trash" ? "bg-zinc-200" : ""
          }`}
        >
          <Trash />
          <p>Trash</p>
        </Link>
        <Separator />
        <form>
          <label
            htmlFor="file"
            onChange={async (e) => {
              const files = e.target.files[0];
            }}
            className="mt-3 flex items-center gap-2 w-full hover:bg-zinc-200 py-1 px-4 hover:cursor-pointer rounded-md transition-all duration-200"
          >
            <input type="file" hidden name="file" id="file" /> <Upload />
            Upload Files
          </label>
        </form>
      </div>
      <p className="text-xs px-4 text-zinc-400">Drive</p>
    </div>
  );
}
