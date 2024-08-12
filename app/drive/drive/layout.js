import DriveSidebar from "@/components/drive/navbar";
import { SignOut } from "@/components/sign-out";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Package, UserRound } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { SignOutDrive } from "@/components/drive/sign-out";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
export default async function Layout({ children }) {
  const session = await getServerSession(authOptions);
  return (
    <main className="flex w-full min-h-screen bg-zinc-50">
      <section className="w-64 sticky top-0 h-screen flex flex-col bg-white">
        <div className="flex items-center gap-2 h-16 border-b px-7 py-5">
          <Package />
          <p className="text-xl font-semibold">Drive</p>
        </div>
        <DriveSidebar session={session} />
      </section>
      <section className="flex flex-col w-full">
        <div className="h-16 z-10 sticky top-0 border-b bg-white/80 backdrop-blur-md flex items-center justify-end px-7">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button type="button">
                <Avatar className="hover:outline hover:outline-2 transition-all duration-200 hover:outline-zinc-200">
                  <AvatarImage src="" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <div className="flex items-center gap-2">
                  <UserRound size={15} />
                  Profile
                </div>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <SignOutDrive />
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* <SignOut /> */}
        </div>
        <div className="">{children}</div>
      </section>
    </main>
  );
}
