// Common types used across the application
export type Personality = {
  name: string
  slug: string
  category: string
  birth: string
  death: string
  image: string
  excerpt: string
  era?: string
}

export type SoormaType = Personality & {
  quote: string
  quoteTranslation: string
  significance: string
}

export type Category = {
  name: string
  slug: string
  count: number
  icon: string
  description: string
}

export type QuoteType = {
  quote: string
  author: string
  translation?: string
}

export type RecentAddition = {
  name: string
  category: string
  addedDays: number
}
