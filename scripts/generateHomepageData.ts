import fs from "fs/promises";
import path from "path";

function shuffleArray(arr: any[]) {
  return [...arr].sort(() => 0.5 - Math.random());
}

function formatSoorma(personality: any) {
    const quote = personality.quotes[0]
    

  return {
    name: personality.name,
    slug: personality.slug,
    category: personality.category,
    birth: personality.birth,
    death: personality.death,
    image: personality.image || "/placeholder.svg?height=300&width=300",
    excerpt: personality.excerpt,
    quote: quote.original,
    quoteTranslation: quote.translation,
    significance: personality.historicalContext.significance || "",
  };
}

function formatFeatured(p: any) {
  return {
    name: p.name,
    slug: p.slug,
    category: p.category,
    birth: p.birth,
    death: p.death,
    image: p.image || "/placeholder.svg?height=200&width=200",
    excerpt: p.excerpt,
    era: p.era || "",
  };
}

function computeCategoryStats(personalities: any[], categories: any) {
  const map: Record<string, number> = {};
  for (const p of personalities) {
    const cat = p.category;
    map[cat] = (map[cat] || 0) + 1;
  }
  return Object.entries(map).map(([slug, count]) => ({
    name: slug.charAt(0).toUpperCase() + slug.slice(1),
    slug,
    count,
    icon: categories.categories.find((c: any) => c.slug === slug)?.emoji || "📜",
    description: categories.categories.find((c: any) => c.slug === slug)?.description || "",
  }));
}

async function generateHomepageData() {
  const dataPath = path.join(process.cwd(), "data/personalities");
  const categoriesPath = path.join(process.cwd(), "public/generated/categories.json");
  const files = await fs.readdir(dataPath);

  const rawCategories = await fs.readFile(categoriesPath, "utf-8");
  const categoriesdata = JSON.parse(rawCategories);

  const personalities = await Promise.all(
    files.map(async (file) => {
      const content = await fs.readFile(path.join(dataPath, file), "utf-8");
      return JSON.parse(content);
    })
  );

  const sortedByRecent = personalities
    .filter((p) => p.version && p.version.lastUpdated)
    .sort((a, b) => new Date(b.version.lastUpdated).getTime() - new Date(a.version.lastUpdated).getTime());

  const featured = personalities
    .sort((a, b) => new Date(b.version?.lastUpdated || 0).getTime() - new Date(a.version?.lastUpdated || 0).getTime())
    .slice(0, 9);

  const soormaOfTheDay = formatSoorma(shuffleArray(personalities)[0]);

  const featuredPersonalities = featured.map(formatFeatured);

  const recentAdditions = sortedByRecent.slice(0, 10).map((p) => ({
    name: p.name,
    category: p.category,
    added: p.version.lastUpdated,
  }));

  const categories = computeCategoryStats(personalities, categoriesdata);

  const historicalQuotes = personalities
    .filter((p) => p.quote)
    .slice(0, 5)
    .map((p) => ({
      quote: p.quote,
      author: p.name,
      translation: p.quoteTranslation || "",
    }));

  const homepageData = {
    soormaOfTheDay,
    featuredPersonalities,
    recentAdditions,
    categories,
    historicalQuotes,
    quickStats: {
        totalPersonalities: personalities.length,
        totalCategories: categories.length,
        yearsOfHistory: '550+'
    }
  };

  await fs.writeFile(
    path.join(process.cwd(), "public/generated/homepageData.json"),
    JSON.stringify(homepageData, null, 2)
  );

  console.log("✅ homepageData.json generated successfully.");
}

generateHomepageData().catch((err) => {
  console.error("❌ Failed to generate homepage data:", err);
});
