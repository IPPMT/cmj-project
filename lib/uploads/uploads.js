"use server";

import { supabase } from "../supabase/supabase-client";

export async function uploadFiles(files, user_name) {
  console.log(files, user_name);
  //   const { data, error } = await supabase.storage
  //     .from("files")
  //     .upload(files.name, files, {});
}
