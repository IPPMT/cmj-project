import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export default function Page() {
  const session = getServerSession(authOptions);
  if (!session) {
    redirect("/sign-in");
  } else {
    redirect("/drive");
  }
}
