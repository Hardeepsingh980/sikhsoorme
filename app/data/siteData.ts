import { Personality, SoormaType, Category, QuoteType, RecentAddition } from "@/app/types"

export const soormaOfTheDay: SoormaType = {
  name: "Guru Gobind Singh Ji",
  slug: "guru-gobind-singh-ji",
  category: "gurus",
  birth: "1666",
  death: "1708",
  image: "/placeholder.svg?height=300&width=300",
  excerpt:
    "The tenth Sikh Guru who founded the Khalsa, transformed the Sikh community into a warrior-saint tradition, and gave the ultimate sacrifice for righteousness and freedom.",
  quote: "Chirion se main baaz ladaun, tabhi Gobind Singh naam kahaun",
  quoteTranslation: "I will make sparrows fight hawks, only then will I be called Gobind Singh",
  significance:
    "Established the Khalsa Panth in 1699, gave the five Ks, and transformed Sikhs into saint-soldiers ready to fight against oppression.",
}

export const featuredPersonalities: Personality[] = [
  {
    name: "Guru Nanak Dev Ji",
    slug: "guru-nanak-dev-ji",
    category: "gurus",
    birth: "1469",
    death: "1539",
    image: "/placeholder.svg?height=200&width=200",
    excerpt:
      "Founder of Sikhism and the first of the ten Sikh Gurus. Established the foundations of Sikh philosophy and spirituality.",
    era: "Medieval Period",
  },
  {
    name: "Banda Singh Bahadur",
    slug: "banda-singh-bahadur",
    category: "leaders",
    birth: "1670",
    death: "1716",
    image: "/placeholder.svg?height=200&width=200",
    excerpt:
      "Revolutionary Sikh warrior who established the first Sikh rule in Punjab and fought against Mughal oppression.",
    era: "Mughal Period",
  },
  {
    name: "Maharaja Ranjit Singh",
    slug: "maharaja-ranjit-singh",
    category: "leaders",
    birth: "1780",
    death: "1839",
    image: "/placeholder.svg?height=200&width=200",
    excerpt: "The Lion of Punjab who established the powerful Sikh Empire and united the Punjab region.",
    era: "Sikh Empire",
  },
  {
    name: "Mata Bhag Kaur (Mai Bhago)",
    slug: "mata-bhag-kaur",
    category: "warriors",
    birth: "1666",
    death: "1708",
    image: "/placeholder.svg?height=200&width=200",
    excerpt: "Brave Sikh woman warrior who led 40 Sikhs in the Battle of Khidrana and inspired Guru Gobind Singh Ji.",
    era: "Guru Period",
  },
  {
    name: "Bhai Taru Singh",
    slug: "bhai-taru-singh",
    category: "martyrs",
    birth: "1720",
    death: "1745",
    image: "/placeholder.svg?height=200&width=200",
    excerpt: "Sikh martyr who chose death over converting to Islam, symbolizing unwavering faith and courage.",
    era: "Mughal Persecution",
  },
  {
    name: "Bhai Gurdas Ji",
    slug: "bhai-gurdas-ji",
    category: "scholars",
    birth: "1551",
    death: "1636",
    image: "/placeholder.svg?height=200&width=200",
    excerpt:
      "First interpreter of Gurbani and scribe of the Adi Granth. His writings are considered the key to understanding Sikh philosophy.",
    era: "Guru Period",
  },
  {
    name: "Sardar Hari Singh Nalwa",
    slug: "sardar-hari-singh-nalwa",
    category: "warriors",
    birth: "1791",
    death: "1837",
    image: "/placeholder.svg?height=200&width=200",
    excerpt:
      "Greatest general of Maharaja Ranjit Singh's army who expanded the Sikh Empire to the borders of Afghanistan.",
    era: "Sikh Empire",
  },
  {
    name: "Mata Gujri Ji",
    slug: "mata-gujri-ji",
    category: "family",
    birth: "1624",
    death: "1705",
    image: "/placeholder.svg?height=200&width=200",
    excerpt:
      "Mother of Guru Gobind Singh Ji and grandmother of the Sahibzadas. Epitome of sacrifice and spiritual strength.",
    era: "Guru Period",
  },
  {
    name: "Baba Deep Singh Ji",
    slug: "baba-deep-singh-ji",
    category: "martyrs",
    birth: "1682",
    death: "1757",
    image: "/placeholder.svg?height=200&width=200",
    excerpt: "Legendary Sikh warrior and scholar who fought with his severed head to liberate Harmandir Sahib.",
    era: "Afghan Invasions",
  },
]

export const categories: Category[] = [
  { name: "Gurus", slug: "gurus", count: 10, icon: "🙏", description: "The ten divine teachers" },
  { name: "Leaders", slug: "leaders", count: 25, icon: "👑", description: "Kings and rulers" },
  { name: "Warriors", slug: "warriors", count: 32, icon: "⚔️", description: "Brave fighters" },
  { name: "Martyrs", slug: "martyrs", count: 28, icon: "🕊️", description: "Ultimate sacrifice" },
  { name: "Scholars", slug: "scholars", count: 18, icon: "📚", description: "Knowledge keepers" },
  { name: "Modern Era", slug: "modern", count: 15, icon: "🌟", description: "Contemporary figures" },
]

export const historicalQuotes: QuoteType[] = [
  {
    quote: "Truth is high, but higher still is truthful living",
    author: "Guru Nanak Dev Ji",
    translation: "ਸਚੁ ਊਚਾ ਅਤਿ ਊਚਾ ਸਚੇ ਕਾ ਵੀਚਾਰੁ",
  },
  {
    quote: "When all other means have failed, it is righteous to draw the sword",
    author: "Guru Gobind Singh Ji",
    translation: "ਚੁਨ ਕਾਰ ਅਜ਼ ਹਮਹ ਹੀਲਤੇ ਦਰ ਗੁਜ਼ਸ਼ਤ ਹਲਾਲ ਅਸਤ ਬੁਰਦਨ ਬ ਸ਼ਮਸ਼ੀਰ ਦਸਤ",
  },
]

export const recentAdditions: RecentAddition[] = [
  { name: "Bhai Kanhaiya Ji", category: "seva", addedDays: 2 },
  { name: "Mata Sahib Kaur", category: "family", addedDays: 5 },
  { name: "Sardar Jassa Singh Ahluwalia", category: "leaders", addedDays: 7 },
]
