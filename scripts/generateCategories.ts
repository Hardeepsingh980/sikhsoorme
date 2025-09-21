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
    // Existing categories (completed)
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
            { name: "Guru Nanak Dev Ji", slug: "guru-nanak-dev-ji", image: "/placeholder.svg?height=80&width=80", years: "1469-1539", achievement: "Founder of Sikhism" },
            { name: "Guru Gobind Singh Ji", slug: "guru-gobind-singh-ji", image: "/placeholder.svg?height=80&width=80", years: "1666-1708", achievement: "Founded the Khalsa" },
            { name: "Guru Tegh Bahadur Ji", slug: "guru-tegh-bahadur-ji", image: "/placeholder.svg?height=80&width=80", years: "1621-1675", achievement: "Martyred for religious freedom" },
        ],
        stats: { averageLifespan: 69, martyrs: 2, warriors: 3, poets: 10 },
        keyContributions: [
            "Established Sikh philosophy and theology",
            "Created the Guru Granth Sahib",
            "Founded the Khalsa Panth",
            "Developed Sikh institutions and practices",
        ],
        historicalContext: "The Gurus lived during the Mughal period in India, facing religious persecution and social upheaval. They provided spiritual guidance while also establishing temporal authority to protect their followers.",
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
            { name: "Maharaja Ranjit Singh", slug: "maharaja-ranjit-singh", image: "/placeholder.svg?height=80&width=80", years: "1780-1839", achievement: "Lion of Punjab, Sikh Empire" },
            { name: "Banda Singh Bahadur", slug: "banda-singh-bahadur", image: "/placeholder.svg?height=80&width=80", years: "1670-1716", achievement: "First Sikh ruler" },
            { name: "Sardar Jassa Singh Ahluwalia", slug: "sardar-jassa-singh-ahluwalia", image: "/placeholder.svg?height=80&width=80", years: "1718-1783", achievement: "Supreme Commander of Dal Khalsa" },
        ],
        stats: { averageLifespan: 58, empireBuilders: 3, mislLeaders: 12, modernRulers: 4 },
        keyContributions: [
            "Established the Sikh Empire spanning from Tibet to Afghanistan",
            "Created efficient administrative systems",
            "Built strong military organizations",
            "Promoted trade and economic development",
        ],
        historicalContext: "These leaders emerged during the decline of Mughal power, successfully establishing Sikh political dominance in Punjab and surrounding regions through military prowess and strategic alliances.",
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
            { name: "Mata Bhag Kaur (Mai Bhago)", slug: "mata-bhag-kaur", image: "/placeholder.svg?height=80&width=80", years: "1666-1708", achievement: "First recorded woman warrior" },
            { name: "Sardar Hari Singh Nalwa", slug: "sardar-hari-singh-nalwa", image: "/placeholder.svg?height=80&width=80", years: "1791-1837", achievement: "Greatest general of Sikh Empire" },
            { name: "Baba Deep Singh Ji", slug: "baba-deep-singh-ji", image: "/placeholder.svg?height=80&width=80", years: "1682-1757", achievement: "Fought with severed head" },
        ],
        stats: { averageLifespan: 52, majorBattles: 47, womenWarriors: 3, martyredInBattle: 18 },
        keyContributions: [
            "Established the warrior-saint tradition",
            "Defended religious freedom and human rights",
            "Expanded Sikh territories through righteous warfare",
            "Created military tactics and strategies",
        ],
        historicalContext: "Sikh warriors emerged in response to religious persecution and social injustice, developing a unique military culture that balanced spiritual values with martial effectiveness.",
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
            { name: "Guru Arjan Dev Ji", slug: "guru-arjan-dev-ji", image: "/placeholder.svg?height=80&width=80", years: "1563-1606", achievement: "First Sikh martyr" },
            { name: "Bhai Taru Singh", slug: "bhai-taru-singh", image: "/placeholder.svg?height=80&width=80", years: "1720-1745", achievement: "Scalp martyrdom" },
            { name: "Sahibzada Ajit Singh", slug: "sahibzada-ajit-singh", image: "/placeholder.svg?height=80&width=80", years: "1687-1705", achievement: "Died at Battle of Chamkaur" },
        ],
        stats: { averageLifespan: 41, guruMartyrs: 2, childMartyrs: 4, executedByMughals: 15 },
        keyContributions: [
            "Established the tradition of sacrifice for principles",
            "Inspired future generations to resist oppression",
            "Demonstrated the strength of Sikh faith",
            "Protected religious freedom for all communities",
        ],
        historicalContext: "Most Sikh martyrdoms occurred during periods of intense religious persecution, particularly under Mughal rulers who sought to force conversions and suppress non-Islamic practices.",
    },
    // New categories
    {
        id: "panj-pyare",
        name: "Panj Pyare",
        slug: "panj-pyare",
        icon: "Sword",
        emoji: "✋",
        count: 5,
        description: "The first five Sikhs initiated into the Khalsa by Guru Gobind Singh Ji",
        longDescription:
            "The Panj Pyare, or 'Five Beloved Ones', were initiated by Guru Gobind Singh Ji on Vaisakhi 1699. They represent the ideals of devotion, courage, equality, and selfless service. Their commitment formed the foundation of the Khalsa Panth, inspiring generations of Sikhs.",
        timeSpan: "1661-1720",
        keyPeriod: "Formation of the Khalsa",
        primaryRegion: "Anandpur Sahib, Punjab",
        significance: "Symbolized ultimate devotion and courage in Sikhism",
        color: "bg-indigo-500",
        lightColor: "bg-indigo-50",
        borderColor: "border-indigo-200",
        textColor: "text-indigo-900",
        featured: [
            { name: "Bhai Daya Singh Ji", slug: "bhai-daya-singh-ji", image: "/placeholder.svg?height=80&width=80", years: "1661-1708", achievement: "First of the Panj Pyare" },
            { name: "Bhai Dharam Singh Ji", slug: "bhai-dharam-singh-ji", image: "/placeholder.svg?height=80&width=80", years: "1666-1708", achievement: "Second of the Panj Pyare" },
            { name: "Bhai Himmat Singh Ji", slug: "bhai-himmat-singh-ji", image: "/placeholder.svg?height=80&width=80", years: "1661-1705", achievement: "Third of the Panj Pyare" },
            { name: "Bhai Mohkam Singh Ji", slug: "bhai-mohkam-singh-ji", image: "/placeholder.svg?height=80&width=80", years: "1663-1705", achievement: "Fourth of the Panj Pyare" },
            { name: "Bhai Sahib Singh Ji", slug: "bhai-sahib-singh-ji", image: "/placeholder.svg?height=80&width=80", years: "1663-1705", achievement: "Fifth of the Panj Pyare" },
        ],
        stats: { averageLifespan: 46, totalMembers: 5, yearOfInitiation: 1699 },
        keyContributions: [
            "First to be initiated into the Khalsa",
            "Embodied Sikh principles of courage, devotion, and equality",
            "Accompanied Guru Gobind Singh Ji in spiritual and martial activities",
        ],
        historicalContext: "The Panj Pyare were called to offer their heads by Guru Gobind Singh Ji and were baptized with Amrit, forming the core of the Khalsa Panth.",
    },
    {
        id: "sahibzade",
        name: "Sahibzade",
        slug: "sahibzade",
        icon: "Heart",
        emoji: "❤️",
        count: 4,
        description: "The four sons of Guru Gobind Singh Ji who were martyred for Sikh principles",
        longDescription:
            "The Sahibzade, Ajit Singh, Jujhar Singh, Zorawar Singh, and Fateh Singh, were the sons of Guru Gobind Singh Ji. They exemplified supreme courage, steadfast faith, and selfless sacrifice, laying down their lives at young ages to uphold Sikhism and its values.",
        timeSpan: "1687-1705",
        keyPeriod: "Martyrdom of the Guru's Sons",
        primaryRegion: "Punjab",
        significance: "Youngest martyrs of Sikh history, symbols of bravery and faith",
        color: "bg-pink-500",
        lightColor: "bg-pink-50",
        borderColor: "border-pink-200",
        textColor: "text-pink-900",
        featured: [
            { name: "Sahibzada Ajit Singh Ji", slug: "sahibzada-ajit-singh", image: "/placeholder.svg?height=80&width=80", years: "1687-1705", achievement: "Eldest son of Guru Gobind Singh Ji" },
            { name: "Sahibzada Jujhar Singh Ji", slug: "sahibzada-jujhar-singh", image: "/placeholder.svg?height=80&width=80", years: "1691-1705", achievement: "Second son, died in Chamkaur battle" },
            { name: "Sahibzada Zorawar Singh Ji", slug: "sahibzada-zorawar-singh", image: "/placeholder.svg?height=80&width=80", years: "1696-1705", achievement: "Youngest son, martyred in Sirhind" },
            { name: "Sahibzada Fateh Singh Ji", slug: "sahibzada-fateh-singh", image: "/placeholder.svg?height=80&width=80", years: "1699-1705", achievement: "Youngest son, martyred in Sirhind" },
        ],
        stats: { averageLifespan: 11, totalMembers: 4 },
        keyContributions: ["Exemplified supreme courage and faith", "Sacrificed lives for Sikh principles at young ages"],
        historicalContext: "The Sahibzade were captured and executed by the Mughal authorities in Sirhind, becoming iconic symbols of martyrdom in Sikh history.",
    },
    {
        id: "activists",
        name: "Activists",
        slug: "activists",
        icon: "BookOpen",
        emoji: "✊",
        count: 10,
        description: "Individuals who fought for Sikh rights and social justice in modern times",
        longDescription:
            "Sikh activists include freedom fighters, human rights advocates, and social reformers who contributed to the community and nation. They have worked to defend Sikh identity, promote education, and ensure equality and justice for all.",
        timeSpan: "1850-2024",
        keyPeriod: "Modern Sikh Activism",
        primaryRegion: "Punjab & Global",
        significance: "Championed Sikh rights and social reforms",
        color: "bg-teal-500",
        lightColor: "bg-teal-50",
        borderColor: "border-teal-200",
        textColor: "text-teal-900",
        featured: [
            { name: "Bhai Parmanand Ji", slug: "bhai-parmanand-ji", image: "/placeholder.svg?height=80&width=80", years: "1900-1947", achievement: "Freedom fighter and social reformer" },
            { name: "Baba Kharak Singh", slug: "baba-kharak-singh", image: "/placeholder.svg?height=80&width=80", years: "1867-1963", achievement: "Political leader and activist" },
            { name: "Giani Zail Singh", slug: "giani-zail-singh", image: "/placeholder.svg?height=80&width=80", years: "1916-1994", achievement: "First Sikh President of India" },
        ],
        stats: { averageLifespan: 72, freedomFighters: 5, reformers: 3, politicians: 2 },
        keyContributions: [
            "Fought for Indian independence",
            "Advocated for Sikh rights and equality",
            "Promoted social reforms and education",
            "Strengthened Sikh identity in modern contexts",
        ],
        historicalContext: "Modern Sikh activists emerged during colonial rule, partition, and global diaspora movements, addressing political, social, and religious challenges.",
    },
    {
        id: "guru-family",
        name: "Guru Family",
        slug: "guru-family",
        icon: "Heart",
        emoji: "❤️",
        count: 0,
        description: "Family members of Sikh Gurus",
        longDescription: "Family members of Sikh Gurus",
        timeSpan: "1469-2024",
        keyPeriod: "Foundation Era",
        primaryRegion: "Punjab",
        significance: "Family members of Sikh Gurus",
        color: "bg-gray-500",
        lightColor: "bg-gray-50",
        borderColor: "border-gray-200",
        textColor: "text-gray-900",
        featured: [],
        stats: { averageLifespan: 0 },
        keyContributions: [],
        historicalContext: "Family members of Sikh Gurus"
    },
    {
      id: "modern-era",
      name: "Modern Era Personalities",
      slug: "modern-era",
      icon: "Globe",
      emoji: "🌍",
      count: 15,
      description: "Influential Sikh figures of the 20th and 21st centuries",
      longDescription:
          "Modern Sikh figures include thinkers, leaders, reformers, and global influencers who shaped Sikh identity in contemporary times. From post-independence India to the global diaspora, they advanced education, politics, arts, and social reform while keeping Sikh traditions alive.",
      timeSpan: "1900–Present",
      keyPeriod: "Contemporary Sikhism",
      primaryRegion: "Punjab & Global",
      significance: "Bridged Sikh tradition with modern challenges and opportunities",
      color: "bg-green-500",
      lightColor: "bg-green-50",
      borderColor: "border-green-200",
      textColor: "text-green-900",
      featured: [
          { name: "Sant Jarnail Singh Bhindranwale", slug: "sant-jarnail-singh-bhindranwale", image: "/placeholder.svg?height=80&width=80", years: "1947–1984", achievement: "Prominent Sikh leader of the late 20th century" },
          { name: "Khushwant Singh", slug: "khushwant-singh", image: "/placeholder.svg?height=80&width=80", years: "1915–2014", achievement: "Celebrated author and historian" },
          { name: "Jagmeet Singh", slug: "jagmeet-singh", image: "/placeholder.svg?height=80&width=80", years: "1979–Present", achievement: "First Sikh leader of a major Canadian political party" },
      ],
      stats: { averageLifespan: 72, writers: 5, politicians: 4, globalFigures: 6 },
      keyContributions: [
          "Represented Sikh voices in global politics",
          "Produced influential literature and scholarship",
          "Strengthened Sikh identity in the diaspora",
          "Advocated for human rights and equality",
      ],
      historicalContext: "As Sikhs migrated worldwide and India underwent transformation, modern leaders carried Sikh values into politics, arts, and global advocacy."
  },
  {
      id: "sewadars",
      name: "Sewadars",
      slug: "sewadars",
      icon: "Hand",
      emoji: "🤲",
      count: 12,
      description: "Humble servants dedicated to community service and Seva",
      longDescription:
          "Sewadars are individuals known for their selfless service (Seva) in Gurdwaras, during humanitarian crises, and within communities. They represent the Sikh principle of humility and service, uplifting others without seeking recognition.",
      timeSpan: "1500–Present",
      keyPeriod: "Timeless Service",
      primaryRegion: "Punjab & Global",
      significance: "Embodied Sikh values of humility, charity, and equality",
      color: "bg-yellow-500",
      lightColor: "bg-yellow-50",
      borderColor: "border-yellow-200",
      textColor: "text-yellow-900",
      featured: [
          { name: "Bhai Kanaihya Ji", slug: "bhai-kanaihya-ji", image: "/placeholder.svg?height=80&width=80", years: "1648–1718", achievement: "Served water to all, even enemies in battle" },
          { name: "Ravinder Singh Khalsa Aid", slug: "ravinder-singh", image: "/placeholder.svg?height=80&width=80", years: "1970–Present", achievement: "Founded Khalsa Aid, global humanitarian charity" },
          { name: "Langar Sewadars", slug: "langar-sewadars", image: "/placeholder.svg?height=80&width=80", years: "1500–Present", achievement: "Volunteers serving free food in Gurdwaras" },
      ],
      stats: { averageLifespan: 65, humanitarianLeaders: 4, gurdwaraVolunteers: "countless" },
      keyContributions: [
          "Pioneered the Sikh practice of Langar (community kitchen)",
          "Provided humanitarian aid globally",
          "Demonstrated compassion even in wartime",
          "Inspired global volunteerism rooted in Sikh ethics",
      ],
      historicalContext: "From the Guru period to today’s global Sikh charities, Sewadars have exemplified the principle of Seva — selfless service to humanity."
  },
  {
      id: "artists",
      name: "Artists & Poets",
      slug: "artists",
      icon: "Music",
      emoji: "🎨",
      count: 18,
      description: "Poets, musicians, and artists who enriched Sikh culture",
      longDescription:
          "Artists and poets played a vital role in shaping Sikh thought, aesthetics, and culture. From Bhai Gurdas’s writings to contemporary musicians, they have preserved Sikh values through art, kirtan, literature, and painting.",
      timeSpan: "1500–Present",
      keyPeriod: "Cultural Flourishing",
      primaryRegion: "Punjab & Global",
      significance: "Preserved and spread Sikh teachings through art and music",
      color: "bg-orange-500",
      lightColor: "bg-orange-50",
      borderColor: "border-orange-200",
      textColor: "text-orange-900",
      featured: [
          { name: "Bhai Gurdas Ji", slug: "bhai-gurdas-ji", image: "/placeholder.svg?height=80&width=80", years: "1551–1636", achievement: "First scribe of Guru Granth Sahib and poet" },
          { name: "Bhai Nand Lal Ji", slug: "bhai-nand-lal-ji", image: "/placeholder.svg?height=80&width=80", years: "1633–1713", achievement: "Poet laureate at Guru Gobind Singh’s court" },
          { name: "Surinder Kaur", slug: "surinder-kaur", image: "/placeholder.svg?height=80&width=80", years: "1929–2006", achievement: "Renowned Punjabi singer" },
      ],
      stats: { averageLifespan: 68, poets: 10, musicians: 6, painters: 2 },
      keyContributions: [
          "Preserved Sikh scripture through poetry",
          "Created devotional music traditions",
          "Popularized Punjabi culture worldwide",
          "Inspired spiritual reflection through art",
      ],
      historicalContext: "Artists have always been close to the Sikh tradition — from scripture preservation to modern Punjabi music, they carry forward the Sikh message in creative ways."
  },
  {
      id: "scholars",
      name: "Scholars & Educators",
      slug: "scholars",
      icon: "Book",
      emoji: "📚",
      count: 14,
      description: "Thinkers, writers, and educators who advanced Sikh philosophy",
      longDescription:
          "Sikh scholars have interpreted, preserved, and spread Sikh teachings across generations. They worked as theologians, teachers, and modern academics to keep Sikhism intellectually vibrant and accessible.",
      timeSpan: "1600–Present",
      keyPeriod: "Philosophical Development",
      primaryRegion: "Punjab & Diaspora",
      significance: "Advanced Sikh philosophy and preserved teachings",
      color: "bg-cyan-500",
      lightColor: "bg-cyan-50",
      borderColor: "border-cyan-200",
      textColor: "text-cyan-900",
      featured: [
          { name: "Bhai Mani Singh", slug: "bhai-mani-singh", image: "/placeholder.svg?height=80&width=80", years: "1662–1737", achievement: "Scholar and martyr, compiled Sikh scriptures" },
          { name: "Prof. Sahib Singh", slug: "prof-sahib-singh", image: "/placeholder.svg?height=80&width=80", years: "1892–1977", achievement: "Author of Gurbani grammar and Sikh exegesis" },
          { name: "Puran Singh", slug: "puran-singh", image: "/placeholder.svg?height=80&width=80", years: "1881–1931", achievement: "Philosopher and poet of Sikh spirituality" },
      ],
      stats: { averageLifespan: 63, theologians: 6, teachers: 5, modernAcademics: 3 },
      keyContributions: [
          "Compiled and preserved Sikh scripture",
          "Developed Gurbani grammar and exegesis",
          "Promoted Sikh education worldwide",
          "Engaged in interfaith and philosophical dialogue",
      ],
      historicalContext: "Scholars have played an essential role in safeguarding Sikh philosophy and ensuring its transmission across changing times and societies."
  }  
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
    const meta = CATEGORY_META.find((c) => c.id === categoryId.toLowerCase().replace(" ", "-")) || {
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
      id: categoryId.toLowerCase().replace(" ", "-"),
      slug: categoryId.toLowerCase().replace(" ", "-"),
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
