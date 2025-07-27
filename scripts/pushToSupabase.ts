import fs from "fs";
import path from "path";
import { createClient } from "@supabase/supabase-js";
import { fileURLToPath } from "url";

import dotenv from "dotenv";
dotenv.config();

// Create Supabase client
const supabase = createClient(process.env.SUPABASE_URL!, process.env.SUPABASE_KEY!);

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const dataDir = path.join(__dirname, "../data/personalities");


async function loadAllPersonalities() {
  const files = fs.readdirSync(dataDir);
  return files.map((file: string) => {
    const fullPath = path.join(dataDir, file);
    const json = JSON.parse(fs.readFileSync(fullPath, "utf-8"));
    return {
      name: json.name,
      slug: json.slug,
      image: json.image,
      excerpt: json.excerpt || "",
      category: json.category || "",
      birth: json.birth || "",
      death: json.death || "",
      birthPlace: json.birthPlace || "",
      era: json.era || "",
    };
  });
}

async function pushToSupabase() {
  const metadata = await loadAllPersonalities();

  const { data, error } = await supabase
    .from("soorme_index")
    .upsert(metadata, { onConflict: "slug" });

  if (error) {
    console.error("Error pushing to Supabase:", error);
  } else {
    console.log(`✅ Successfully pushed ${metadata.length} entries to Supabase.`);
  }
}

pushToSupabase();
