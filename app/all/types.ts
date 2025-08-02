export type QuickStat = {
    label: string;
    value: string | number;
};

export type BiographySection = {
    label: string;
    icon: string; // e.g., "Star", "BookOpen"
    value: string;
};

export type Achievement = {
    title: string;
    year: string;
    description: string;
    icon: string;
};

export type Quote = {
    original: string;
    transliteration?: string;
    translation?: string;
    context?: string;
    source?: string;
};

export type TimelineEvent = {
    year: string | number;
    date?: string; // e.g., "5 May 1479"
    event: string;
    type: string; // e.g., "birth", "battle", "literary"
};

export type RelatedPersonality = {
    name: string;
    relation: string;
    slug: string;
};

export type VersionInfo = {
    lastUpdated: string; // ISO 8601
    version: string; // semantic version (e.g., "1.0.0")
    contributors: number;
    edits: number;
    historyUrl?: string;
};

export type SpiritualLegacy = {
    description: string;
    keyContributions: string[];
};

export type ModernRelevance = {
    description: string;
    contemporaryImpact: string[];
};

export type HistoricalContext = {
    period: string;
    politicalSituation: string;
    socialConditions: string;
    significance: string;
};

export type Personality = {
    // Section 1: Basic Info
    name: string;
    slug: string;
    category: string; // e.g., "gurus", "warriors", "scholars"
    birth: string; // "YYYY-MM-DD"
    death?: string; // "YYYY-MM-DD"
    birthPlace?: string;
    image: string; // URL
    excerpt: string;
    designation?: string;

    // Section 2: Quick Reference
    quickStats?: QuickStat[];
    quickFacts?: QuickStat[];

    // Section 3: Versioning
    version?: VersionInfo;

    // Section 4: Biography
    biographySections?: BiographySection[];

    // Section 5: Legacy
    spiritualLegacy?: SpiritualLegacy;
    modernRelevance?: ModernRelevance;

    // Section 6: Achievements
    achievements?: Achievement[];

    // Section 7: Quotes
    quotes?: Quote[];

    // Section 8: Timeline
    timeline?: TimelineEvent[];

    // Section 9: Related People
    relatedPersonalities?: RelatedPersonality[];

    // Section 10: Historical Context
    historicalContext?: HistoricalContext;

    // Section 11: References
    references?: string[];

    // Optional flags
    featured?: boolean;
    recentlyAdded?: boolean;
    popularity?: number;
};


export type CategoryStat = {
    name: string;
    count: number;
    icon: string;
    color: string;
};

export type TimelineStat = {
    period: string;
    count: number;
    percentage: number;
};

export type RegionStat = {
    region: string;
    count: number;
    percentage: number;
};