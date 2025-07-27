require("dotenv").config();
const fs = require("fs");
const path = require("path");
const { createClient } = require("@supabase/supabase-js");

// Create Supabase client
const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY);

// Load all personalities
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
    .upsert(metadata, { onConflict: ["slug"] });

  if (error) {
    console.error("Error pushing to Supabase:", error);
  } else {
    console.log(`✅ Successfully pushed ${metadata.length} entries to Supabase.`);
  }
}

pushToSupabase();
