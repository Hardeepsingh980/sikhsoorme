import fs from "fs/promises";
import path from "path";

const DATA_DIR = path.join(process.cwd(), "data/personalities");
const PLACEHOLDER_IMAGE = "/placeholder.png";

// Load all personalities into a map by slug
async function loadPersonalities() {
  const files = await fs.readdir(DATA_DIR);
  const map: Record<string, any> = {};

  for (const file of files) {
    const content = await fs.readFile(path.join(DATA_DIR, file), "utf-8");
    const data = JSON.parse(content);
    map[data.slug] = data;
  }

  return map;
}

async function enrichRelatedPersonalities() {
  const slugMap = await loadPersonalities();
  const files = await fs.readdir(DATA_DIR);

  for (const file of files) {
    const filePath = path.join(DATA_DIR, file);
    const content = await fs.readFile(filePath, "utf-8");
    const personality = JSON.parse(content);

    if (!Array.isArray(personality.relatedPersonalities)) continue;

    let updated = false;

    const enrichedRelated = personality.relatedPersonalities.map((rel: any) => {
      const target = slugMap[rel.slug];

      // Skip if no data found for related personality
      if (!target) {
        updated = true;
        return {
          ...rel,
          category: "unknown",
          image: PLACEHOLDER_IMAGE,
          exists: false,
        };
      }

      updated = true;
      return {
        ...rel,
        category: target.category || "unknown",
        image: target.image || PLACEHOLDER_IMAGE,
        exists: true,
      };
    });

    // Only write back if we changed anything
    if (updated) {
      personality.relatedPersonalities = enrichedRelated;
      await fs.writeFile(filePath, JSON.stringify(personality, null, 2));
      console.log(`✅ Updated: ${file}`);
    }
  }

  console.log("🎉 All personalities processed.");
}

enrichRelatedPersonalities().catch((err) => {
  console.error("❌ Error enriching related personalities:", err);
});
