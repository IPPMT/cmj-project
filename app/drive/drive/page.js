import { supabase } from "@/lib/supabase/supabase-client";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import Image from "next/image";
import { EllipsisVertical, FileText } from "lucide-react";

export default async function Page() {
  const session = await getServerSession(authOptions);
  const { data, error } = await supabase.storage
    .from(session?.user?.name)
    .list();
  return (
    <div className=" p-5">
      <p className="text-xl font-semibold">My Drive</p>
      <div className="grid grid-cols-4 gap-5 mt-5">
        {data?.map(async (file) => {
          const { data: image, error } = await supabase.storage
            .from(session?.user?.name)
            .createSignedUrl(file.name, 60000, {
              transforms: { width: 400, height: 200 },
            });
          return (
            <div
              key={file.id}
              className="h-60 hover:bg-zinc-200 bg-slate-100 p-3 gap-4 rounded-md flex flex-col justify-between"
            >
              <div className="flex items-center justify-between gap-3">
                <p className="text-xs truncate">{file.name}</p>
                <button className="rounded-full p-2 hover:bg-zinc-300 transition-all duration-200">
                  <EllipsisVertical size={12} />
                </button>
              </div>
              <div className="h-full overflow-hidden rounded-md">
                {file.metadata.mimetype.includes("image") ? (
                  <Image
                    src={image.signedUrl}
                    alt={file.name}
                    width={400}
                    height={200}
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center">
                    <FileText />
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
