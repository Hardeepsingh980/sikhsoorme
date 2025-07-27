import { supabase } from "@/lib/supabase";

export default async function search(query: string) {

  if (!query || query.trim().length < 2) {
    return { error: "Query must be at least 2 characters." };
  }

  const { data, error } = await supabase
    .from("soorme_index")
    .select("name, slug, category, excerpt, image, birth, death, birthPlace, era")
    .ilike("name", `%${query}%`)
    .limit(10);

  if (error) {
    return { error: error.message };
  }

  return data;
}
