import fs from "fs";
import path from "path";

const PERSONAS_DIR = "./data/personalities";
const OUTPUT_PATH = "./public/generated/categories.json";

interface Personality {
  name: string;
  slug: string;
  category: string;
  birth: string;
  death?: string;
  birthPlace?: string;
  image: string;
  designation?: string;
  version?: {
    edits?: number;
  };
}

interface CategoryEntry {
  [key: string]: Personality[];
}

// Utility to get lifespan in years
const getLifespan = (birth: string, death?: string) => {
  try {
    const b = new Date(birth);
    const d = death ? new Date(death) : new Date();
    return d.getFullYear() - b.getFullYear();
  } catch {
    return null;
  }
};

// Placeholder mappings per category (can be moved to config or generated dynamically)
const CATEGORY_META = [
    {
        id: "gurus",
        name: "Gurus",
        slug: "gurus",
        icon: "Crown",
        emoji: "🙏",
        count: 10,
        description: "The ten divine teachers who founded and shaped Sikhism",
        longDescription:
            "The ten Sikh Gurus were spiritual leaders who established and developed Sikhism over a period of 239 years. Each Guru contributed unique teachings and practices, from Guru Nanak's foundational principles to Guru Gobind Singh's creation of the Khalsa. They represent the divine light passed from one teacher to the next, culminating in the eternal Guru Granth Sahib.",
        timeSpan: "1469-1708",
        keyPeriod: "Foundation Era",
        primaryRegion: "Punjab",
        significance: "Established the fundamental principles and practices of Sikhism",
        color: "bg-purple-500",
        lightColor: "bg-purple-50",
        borderColor: "border-purple-200",
        textColor: "text-purple-900",
        featured: [
            {
                name: "Guru Nanak Dev Ji",
                slug: "guru-nanak-dev-ji",
                image: "/placeholder.svg?height=80&width=80",
                years: "1469-1539",
                achievement: "Founder of Sikhism",
            },
            {
                name: "Guru Gobind Singh Ji",
                slug: "guru-gobind-singh-ji",
                image: "/placeholder.svg?height=80&width=80",
                years: "1666-1708",
                achievement: "Founded the Khalsa",
            },
            {
                name: "Guru Tegh Bahadur Ji",
                slug: "guru-tegh-bahadur-ji",
                image: "/placeholder.svg?height=80&width=80",
                years: "1621-1675",
                achievement: "Martyred for religious freedom",
            },
        ],
        stats: {
            averageLifespan: 69,
            martyrs: 2,
            warriors: 3,
            poets: 10,
        },
        keyContributions: [
            "Established Sikh philosophy and theology",
            "Created the Guru Granth Sahib",
            "Founded the Khalsa Panth",
            "Developed Sikh institutions and practices",
        ],
        historicalContext:
            "The Gurus lived during the Mughal period in India, facing religious persecution and social upheaval. They provided spiritual guidance while also establishing temporal authority to protect their followers.",
    },
    {
        id: "leaders",
        name: "Leaders",
        slug: "leaders",
        icon: "Shield",
        emoji: "👑",
        count: 25,
        description: "Kings, rulers, and political leaders who shaped Sikh history",
        longDescription:
            "Sikh leaders include kings, maharajas, and political figures who established and maintained Sikh political power. From Banda Singh Bahadur's first Sikh state to Maharaja Ranjit Singh's mighty empire, these leaders demonstrated exceptional governance, military strategy, and diplomatic skills while upholding Sikh values and protecting their people.",
        timeSpan: "1708-1849",
        keyPeriod: "Political Ascendancy",
        primaryRegion: "Punjab & Kashmir",
        significance: "Established Sikh political sovereignty and territorial control",
        color: "bg-blue-500",
        lightColor: "bg-blue-50",
        borderColor: "border-blue-200",
        textColor: "text-blue-900",
        featured: [
            {
                name: "Maharaja Ranjit Singh",
                slug: "maharaja-ranjit-singh",
                image: "/placeholder.svg?height=80&width=80",
                years: "1780-1839",
                achievement: "Lion of Punjab, Sikh Empire",
            },
            {
                name: "Banda Singh Bahadur",
                slug: "banda-singh-bahadur",
                image: "/placeholder.svg?height=80&width=80",
                years: "1670-1716",
                achievement: "First Sikh ruler",
            },
            {
                name: "Sardar Jassa Singh Ahluwalia",
                slug: "sardar-jassa-singh-ahluwalia",
                image: "/placeholder.svg?height=80&width=80",
                years: "1718-1783",
                achievement: "Supreme Commander of Dal Khalsa",
            },
        ],
        stats: {
            averageLifespan: 58,
            empireBuilders: 3,
            mislLeaders: 12,
            modernRulers: 4,
        },
        keyContributions: [
            "Established the Sikh Empire spanning from Tibet to Afghanistan",
            "Created efficient administrative systems",
            "Built strong military organizations",
            "Promoted trade and economic development",
        ],
        historicalContext:
            "These leaders emerged during the decline of Mughal power, successfully establishing Sikh political dominance in Punjab and surrounding regions through military prowess and strategic alliances.",
    },
    {
        id: "warriors",
        name: "Warriors",
        slug: "warriors",
        icon: "Sword",
        emoji: "⚔️",
        count: 32,
        description: "Brave fighters who defended righteousness and Sikh values",
        longDescription:
            "Sikh warriors embodied the saint-soldier ideal, combining spiritual devotion with martial prowess. They fought not for conquest but for justice, protecting the innocent and defending religious freedom. From the battlefield heroes of the Guru period to the generals of the Sikh Empire, these warriors demonstrated exceptional courage and unwavering commitment to Sikh principles.",
        timeSpan: "1606-1849",
        keyPeriod: "Warrior Tradition",
        primaryRegion: "Punjab & Frontier",
        significance: "Defended Sikh community and established military traditions",
        color: "bg-red-500",
        lightColor: "bg-red-50",
        borderColor: "border-red-200",
        textColor: "text-red-900",
        featured: [
            {
                name: "Mata Bhag Kaur (Mai Bhago)",
                slug: "mata-bhag-kaur",
                image: "/placeholder.svg?height=80&width=80",
                years: "1666-1708",
                achievement: "First recorded woman warrior",
            },
            {
                name: "Sardar Hari Singh Nalwa",
                slug: "sardar-hari-singh-nalwa",
                image: "/placeholder.svg?height=80&width=80",
                years: "1791-1837",
                achievement: "Greatest general of Sikh Empire",
            },
            {
                name: "Baba Deep Singh Ji",
                slug: "baba-deep-singh-ji",
                image: "/placeholder.svg?height=80&width=80",
                years: "1682-1757",
                achievement: "Fought with severed head",
            },
        ],
        stats: {
            averageLifespan: 52,
            majorBattles: 47,
            womenWarriors: 3,
            martyredInBattle: 18,
        },
        keyContributions: [
            "Established the warrior-saint tradition",
            "Defended religious freedom and human rights",
            "Expanded Sikh territories through righteous warfare",
            "Created military tactics and strategies",
        ],
        historicalContext:
            "Sikh warriors emerged in response to religious persecution and social injustice, developing a unique military culture that balanced spiritual values with martial effectiveness.",
    },
    {
        id: "martyrs",
        name: "Martyrs",
        slug: "martyrs",
        icon: "Heart",
        emoji: "🕊️",
        count: 28,
        description: "Those who made the ultimate sacrifice for faith and justice",
        longDescription:
            "Sikh martyrs represent the highest ideals of sacrifice and devotion. They chose death over compromise, torture over conversion, and principle over personal safety. Their sacrifices, from the Guru's martyrdoms to the countless unnamed heroes, demonstrate the Sikh commitment to standing against oppression and maintaining religious freedom at any cost.",
        timeSpan: "1606-1947",
        keyPeriod: "Persecution & Resistance",
        primaryRegion: "Punjab & Delhi",
        significance: "Demonstrated ultimate commitment to Sikh principles and values",
        color: "bg-gray-600",
        lightColor: "bg-gray-50",
        borderColor: "border-gray-200",
        textColor: "text-gray-900",
        featured: [
            {
                name: "Guru Arjan Dev Ji",
                slug: "guru-arjan-dev-ji",
                image: "/placeholder.svg?height=80&width=80",
                years: "1563-1606",
                achievement: "First Sikh martyr",
            },
            {
                name: "Bhai Taru Singh",
                slug: "bhai-taru-singh",
                image: "/placeholder.svg?height=80&width=80",
                years: "1720-1745",
                achievement: "Scalp martyrdom",
            },
            {
                name: "Sahibzada Ajit Singh",
                slug: "sahibzada-ajit-singh",
                image: "/placeholder.svg?height=80&width=80",
                years: "1687-1705",
                achievement: "Died at Battle of Chamkaur",
            },
        ],
        stats: {
            averageLifespan: 41,
            guruMartyrs: 2,
            childMartyrs: 4,
            executedByMughals: 15,
        },
        keyContributions: [
            "Established the tradition of sacrifice for principles",
            "Inspired future generations to resist oppression",
            "Demonstrated the strength of Sikh faith",
            "Protected religious freedom for all communities",
        ],
        historicalContext:
            "Most Sikh martyrdoms occurred during periods of intense religious persecution, particularly under Mughal rulers who sought to force conversions and suppress non-Islamic practices.",
    },
    {
        id: "scholars",
        name: "Scholars",
        slug: "scholars",
        icon: "BookOpen",
        emoji: "📚",
        count: 18,
        description: "Intellectuals, poets, and keepers of Sikh knowledge",
        longDescription:
            "Sikh scholars preserved, interpreted, and expanded Sikh knowledge through their writings, teachings, and intellectual contributions. They included poets, theologians, historians, and philosophers who helped codify Sikh doctrine, interpret Gurbani, and maintain the intellectual tradition of Sikhism across generations.",
        timeSpan: "1551-1947",
        keyPeriod: "Intellectual Development",
        primaryRegion: "Punjab & Kashmir",
        significance: "Preserved and developed Sikh intellectual and literary traditions",
        color: "bg-green-500",
        lightColor: "bg-green-50",
        borderColor: "border-green-200",
        textColor: "text-green-900",
        featured: [
            {
                name: "Bhai Gurdas Ji",
                slug: "bhai-gurdas-ji",
                image: "/placeholder.svg?height=80&width=80",
                years: "1551-1636",
                achievement: "First interpreter of Gurbani",
            },
            {
                name: "Bhai Nand Lal Ji",
                slug: "bhai-nand-lal-ji",
                image: "/placeholder.svg?height=80&width=80",
                years: "1633-1713",
                achievement: "Persian poet and scholar",
            },
            {
                name: "Bhai Mani Singh Ji",
                slug: "bhai-mani-singh-ji",
                image: "/placeholder.svg?height=80&width=80",
                years: "1673-1738",
                achievement: "Compiled Guru Granth Sahib",
            },
        ],
        stats: {
            averageLifespan: 71,
            poets: 8,
            historians: 4,
            theologians: 12,
        },
        keyContributions: [
            "Interpreted and explained Sikh scriptures",
            "Preserved historical records and traditions",
            "Developed Sikh literary and poetic traditions",
            "Educated future generations of Sikhs",
        ],
        historicalContext:
            "Sikh scholars worked to preserve and transmit Sikh knowledge during periods of political upheaval and persecution, ensuring the continuity of Sikh intellectual traditions.",
    },
    {
        id: "modern",
        name: "Modern Era",
        slug: "modern",
        icon: "Globe",
        emoji: "🌟",
        count: 15,
        description: "Contemporary figures who shaped modern Sikh identity",
        longDescription:
            "Modern Sikh personalities include freedom fighters, politicians, artists, scientists, and community leaders who have contributed to Sikh identity in the contemporary world. They have worked to preserve Sikh heritage while adapting to modern challenges and opportunities in the global diaspora.",
        timeSpan: "1857-2024",
        keyPeriod: "Global Diaspora",
        primaryRegion: "Global",
        significance: "Adapted Sikh values to modern contexts and global challenges",
        color: "bg-orange-500",
        lightColor: "bg-orange-50",
        borderColor: "border-orange-200",
        textColor: "text-orange-900",
        featured: [
            {
                name: "Bhagat Singh",
                slug: "bhagat-singh",
                image: "/placeholder.svg?height=80&width=80",
                years: "1907-1931",
                achievement: "Revolutionary freedom fighter",
            },
            {
                name: "Dr. Manmohan Singh",
                slug: "dr-manmohan-singh",
                image: "/placeholder.svg?height=80&width=80",
                years: "1932-Present",
                achievement: "Former Prime Minister of India",
            },
            {
                name: "Fauja Singh",
                slug: "fauja-singh",
                image: "/placeholder.svg?height=80&width=80",
                years: "1911-Present",
                achievement: "World's oldest marathon runner",
            },
        ],
        stats: {
            averageLifespan: 78,
            freedomFighters: 5,
            politicians: 4,
            globalLeaders: 8,
        },
        keyContributions: [
            "Fought for Indian independence",
            "Established Sikh communities worldwide",
            "Contributed to science, politics, and arts",
            "Preserved Sikh identity in modern contexts",
        ],
        historicalContext:
            "Modern Sikh personalities have navigated the challenges of colonialism, partition, and globalization while maintaining their distinct identity and contributing to their adopted countries.",
    },
];

// Start main logic
async function generateCategories() {
  const files = fs.readdirSync(PERSONAS_DIR);
  const categories: CategoryEntry = {};

  for (const file of files) {
    const json = JSON.parse(fs.readFileSync(path.join(PERSONAS_DIR, file), "utf-8")) as Personality;
    if (!json.category) continue;

    if (!categories[json.category]) {
      categories[json.category] = [];
    }
    categories[json.category].push(json);
  }

  const finalCategories = [];

  for (const [categoryId, people] of Object.entries(categories)) {
    const meta = CATEGORY_META.find((c) => c.id === categoryId) || {
        id: categoryId,
        name: "Unknown",
        slug: "unknown",
        icon: "",
        emoji: "",
        description: "Unknown category",
        keyPeriod: "Unknown",
        primaryRegion: "Unknown",
        significance: "Unknown",
        color: "bg-gray-500",
        lightColor: "bg-gray-50",
        borderColor: "border-gray-200",
        textColor: "text-gray-900",
    };
    const sortedByEdits = people
      .filter(p => p.version?.edits !== undefined)
      .sort((a, b) => (b.version?.edits ?? 0) - (a.version?.edits ?? 0));

    const featured = sortedByEdits.slice(0, 3).map(p => ({
      name: p.name,
      slug: p.slug,
      image: p.image,
      years: `${new Date(p.birth).getFullYear()}${p.death ? `-${new Date(p.death).getFullYear()}` : ""}`,
      achievement: p.designation || "Influential figure"
    }));

    const lifespans = people.map(p => getLifespan(p.birth, p.death)).filter(n => n !== null);
    const avgLifespan = Math.round(lifespans.reduce((a, b) => a + b, 0) / lifespans.length);

    const timeSpan = `${Math.min(...people.map(p => new Date(p.birth).getFullYear()))}-${Math.max(...people.map(p => new Date(p.death ?? new Date()).getFullYear()))}`;

    // TODO: Optional LLM-based enrichment can be plugged in here for:
    // longDescription, significance, historicalContext, keyContributions, stats

    finalCategories.push({
      id: categoryId,
      slug: categoryId,
      name: meta.name,
      icon: meta.icon,
      emoji: meta.emoji,
      count: people.length,
      description: meta.description,
      longDescription: "To be generated or enriched...",
      timeSpan,
      keyPeriod: meta.keyPeriod,
      primaryRegion: meta.primaryRegion,
      significance: meta.significance,
      color: meta.color,
      lightColor: meta.lightColor,
      borderColor: meta.borderColor,
      textColor: meta.textColor,
      featured,
      stats: {
        averageLifespan: avgLifespan
      },
      keyContributions: [],
      historicalContext: "To be generated..."
    });
  }

  const categoriesData = {
    overview: {
      totalPersonalities: files.length,
      totalCategories: Object.keys(categories).length,
      featuredPersonalities: finalCategories.reduce((acc, c) => acc + c.featured.length, 0),
      recentAdditions: 0, // optional: track via Git or lastUpdated
      timeSpan: "1469-2024",
      regions: 8
    },
    categories: finalCategories
  };

  fs.writeFileSync(OUTPUT_PATH, JSON.stringify(categoriesData, null, 2));
  console.log("✅ categories.json generated");
}

generateCategories().catch(console.error);
