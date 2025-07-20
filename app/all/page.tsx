import {
    ArrowLeft,
    Search,
    Filter,
    Grid3X3,
    List,
    Calendar,
    MapPin,
    Users,
    BookOpen,
    Star,
    TrendingUp,
    Clock,
    Eye,
    Heart,
    Crown,
    Sword,
    Shield,
    Lightbulb,
    Globe,
    SortAsc,
    BarChart3,
  } from "lucide-react"
  import { Button } from "@/components/ui/button"
  import { Input } from "@/components/ui/input"
  import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
  import { Badge } from "@/components/ui/badge"
  import { Separator } from "@/components/ui/separator"
  import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
  import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
  import { Checkbox } from "@/components/ui/checkbox"
  import { Slider } from "@/components/ui/slider"
  import Image from "next/image"
  import Link from "next/link"
  
  // Sample comprehensive data for all 128 personalities
  const allPersonalities = [
    // Gurus (10)
    {
      name: "Guru Nanak Dev Ji",
      slug: "guru-nanak-dev-ji",
      category: "gurus",
      birth: 1469,
      death: 1539,
      image: "/placeholder.svg?height=200&width=200",
      excerpt: "Founder of Sikhism and the first of the ten Sikh Gurus.",
      region: "Punjab",
      era: "medieval",
      achievements: ["Founded Sikhism", "Established three pillars"],
      popularity: 98,
      featured: true,
      recentlyAdded: false,
    },
    {
      name: "Guru Gobind Singh Ji",
      slug: "guru-gobind-singh-ji",
      category: "gurus",
      birth: 1666,
      death: 1708,
      image: "/placeholder.svg?height=200&width=200",
      excerpt: "The tenth Sikh Guru who founded the Khalsa.",
      region: "Punjab",
      era: "medieval",
      achievements: ["Founded Khalsa", "Warrior-saint tradition"],
      popularity: 97,
      featured: true,
      recentlyAdded: false,
    },
    {
      name: "Guru Tegh Bahadur Ji",
      slug: "guru-tegh-bahadur-ji",
      category: "gurus",
      birth: 1621,
      death: 1675,
      image: "/placeholder.svg?height=200&width=200",
      excerpt: "The ninth Sikh Guru who sacrificed his life for religious freedom.",
      region: "Punjab",
      era: "medieval",
      achievements: ["Martyrdom for religious freedom", "Established Anandpur Sahib"],
      popularity: 89,
      featured: true,
      recentlyAdded: false,
    },
  
    // Leaders (25)
    {
      name: "Maharaja Ranjit Singh",
      slug: "maharaja-ranjit-singh",
      category: "leaders",
      birth: 1780,
      death: 1839,
      image: "/placeholder.svg?height=200&width=200",
      excerpt: "The Lion of Punjab who established the Sikh Empire.",
      region: "Punjab",
      era: "modern",
      achievements: ["Established Sikh Empire", "United Punjab"],
      popularity: 95,
      featured: true,
      recentlyAdded: false,
    },
    {
      name: "Banda Singh Bahadur",
      slug: "banda-singh-bahadur",
      category: "leaders",
      birth: 1670,
      death: 1716,
      image: "/placeholder.svg?height=200&width=200",
      excerpt: "Revolutionary warrior who established the first Sikh state.",
      region: "Punjab",
      era: "medieval",
      achievements: ["First Sikh state", "Defeated Mughals"],
      popularity: 91,
      featured: true,
      recentlyAdded: false,
    },
  
    // Warriors (32)
    {
      name: "Mata Bhag Kaur (Mai Bhago)",
      slug: "mata-bhag-kaur",
      category: "warriors",
      birth: 1666,
      death: 1708,
      image: "/placeholder.svg?height=200&width=200",
      excerpt: "Legendary woman warrior who led 40 Sikhs in battle.",
      region: "Punjab",
      era: "medieval",
      achievements: ["Battle of Khidrana", "First woman warrior"],
      popularity: 88,
      featured: true,
      recentlyAdded: false,
    },
    {
      name: "Sardar Hari Singh Nalwa",
      slug: "sardar-hari-singh-nalwa",
      category: "warriors",
      birth: 1791,
      death: 1837,
      image: "/placeholder.svg?height=200&width=200",
      excerpt: "Greatest general of Maharaja Ranjit Singh's army.",
      region: "Punjab",
      era: "modern",
      achievements: ["Expanded empire to Afghanistan", "Never lost a battle"],
      popularity: 87,
      featured: true,
      recentlyAdded: false,
    },
    {
      name: "Baba Deep Singh Ji",
      slug: "baba-deep-singh-ji",
      category: "warriors",
      birth: 1682,
      death: 1757,
      image: "/placeholder.svg?height=200&width=200",
      excerpt: "Legendary warrior who fought with his severed head.",
      region: "Punjab",
      era: "medieval",
      achievements: ["Liberated Harmandir Sahib", "Ultimate sacrifice"],
      popularity: 92,
      featured: true,
      recentlyAdded: false,
    },
  
    // Martyrs (28)
    {
      name: "Bhai Taru Singh",
      slug: "bhai-taru-singh",
      category: "martyrs",
      birth: 1720,
      death: 1745,
      image: "/placeholder.svg?height=200&width=200",
      excerpt: "Sikh martyr who chose death over conversion.",
      region: "Punjab",
      era: "medieval",
      achievements: ["Refused conversion", "Scalp martyrdom"],
      popularity: 79,
      featured: true,
      recentlyAdded: false,
    },
    {
      name: "Sahibzada Ajit Singh",
      slug: "sahibzada-ajit-singh",
      category: "martyrs",
      birth: 1687,
      death: 1705,
      image: "/placeholder.svg?height=200&width=200",
      excerpt: "Elder son of Guru Gobind Singh Ji who died at Chamkaur.",
      region: "Punjab",
      era: "medieval",
      achievements: ["Battle of Chamkaur", "Ultimate sacrifice"],
      popularity: 85,
      featured: true,
      recentlyAdded: false,
    },
  
    // Scholars (18)
    {
      name: "Bhai Gurdas Ji",
      slug: "bhai-gurdas-ji",
      category: "scholars",
      birth: 1551,
      death: 1636,
      image: "/placeholder.svg?height=200&width=200",
      excerpt: "First interpreter of Gurbani and scribe of Adi Granth.",
      region: "Punjab",
      era: "medieval",
      achievements: ["Scribed Adi Granth", "Interpreted Gurbani"],
      popularity: 76,
      featured: true,
      recentlyAdded: false,
    },
    {
      name: "Bhai Nand Lal Ji",
      slug: "bhai-nand-lal-ji",
      category: "scholars",
      birth: 1633,
      death: 1713,
      image: "/placeholder.svg?height=200&width=200",
      excerpt: "Persian poet and scholar in Guru Gobind Singh's court.",
      region: "Punjab",
      era: "medieval",
      achievements: ["Persian poetry", "Court scholar"],
      popularity: 71,
      featured: false,
      recentlyAdded: true,
    },
  
    // Modern Era (15)
    {
      name: "Dr. A.P.J. Abdul Kalam",
      slug: "dr-apj-abdul-kalam",
      category: "modern",
      birth: 1931,
      death: 2015,
      image: "/placeholder.svg?height=200&width=200",
      excerpt: "People's President of India and renowned scientist.",
      region: "India",
      era: "contemporary",
      achievements: ["Missile development", "People's President"],
      popularity: 94,
      featured: true,
      recentlyAdded: false,
    },
    {
      name: "Bhagat Singh",
      slug: "bhagat-singh",
      category: "modern",
      birth: 1907,
      death: 1931,
      image: "/placeholder.svg?height=200&width=200",
      excerpt: "Revolutionary freedom fighter who inspired a nation.",
      region: "Punjab",
      era: "modern",
      achievements: ["Freedom struggle", "Revolutionary ideals"],
      popularity: 96,
      featured: true,
      recentlyAdded: false,
    },
  
    // Additional personalities to reach 128 (abbreviated for brevity)
    ...Array.from({ length: 118 }, (_, i) => ({
      name: `Historical Figure ${i + 13}`,
      slug: `historical-figure-${i + 13}`,
      category: ["gurus", "leaders", "warriors", "martyrs", "scholars", "modern"][i % 6],
      birth: 1400 + Math.floor(Math.random() * 600),
      death: 1500 + Math.floor(Math.random() * 500),
      image: "/placeholder.svg?height=200&width=200",
      excerpt: `Significant Sikh personality who contributed to the community's growth and heritage.`,
      region: ["Punjab", "India", "Kashmir", "Rajasthan", "Afghanistan"][i % 5],
      era: ["medieval", "modern", "contemporary"][i % 3],
      achievements: ["Community service", "Religious contribution"],
      popularity: 40 + Math.floor(Math.random() * 40),
      featured: i < 20,
      recentlyAdded: i < 10,
    })),
  ]
  
  const categoryStats = [
    { name: "Gurus", count: 10, icon: Crown, color: "bg-purple-500" },
    { name: "Leaders", count: 25, icon: Shield, color: "bg-blue-500" },
    { name: "Warriors", count: 32, icon: Sword, color: "bg-red-500" },
    { name: "Martyrs", count: 28, icon: Heart, color: "bg-gray-500" },
    { name: "Scholars", count: 18, icon: BookOpen, color: "bg-green-500" },
    { name: "Modern Era", count: 15, icon: Globe, color: "bg-orange-500" },
  ]
  
  const timelineStats = [
    { period: "Medieval (1400-1700)", count: 68, percentage: 53 },
    { period: "Modern (1700-1900)", count: 45, percentage: 35 },
    { period: "Contemporary (1900+)", count: 15, percentage: 12 },
  ]
  
  const regionStats = [
    { region: "Punjab", count: 89, percentage: 70 },
    { region: "India (Other)", count: 25, percentage: 19 },
    { region: "Kashmir", count: 8, percentage: 6 },
    { region: "Afghanistan", count: 4, percentage: 3 },
    { region: "Rajasthan", count: 2, percentage: 2 },
  ]
  
  function PersonalityCard({ personality, viewMode = "grid" }: { personality: any; viewMode?: "grid" | "list" }) {
    if (viewMode === "list") {
      return (
        <Card className="bg-gradient-to-r from-amber-50 to-orange-50 border-amber-200 hover:shadow-lg transition-all">
          <CardContent className="p-4">
            <div className="flex items-center gap-4">
              <Image
                src={personality.image || "/placeholder.svg"}
                alt={personality.name}
                width={60}
                height={60}
                className="rounded-full object-cover border-2 border-amber-300"
              />
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between mb-2">
                  <div className="min-w-0 flex-1">
                    <h3 className="text-lg font-bold text-amber-900 truncate">{personality.name}</h3>
                    <div className="flex items-center gap-3 text-sm text-amber-700 mb-1">
                      <span>
                        {personality.birth} - {personality.death}
                      </span>
                      <Badge variant="secondary" className="bg-amber-200 text-amber-800 text-xs">
                        {personality.category}
                      </Badge>
                      <span className="text-xs text-amber-600">{personality.region}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 ml-4">
                    {personality.featured && (
                      <Badge className="bg-orange-500 text-white text-xs">
                        <Star className="w-3 h-3 mr-1" />
                        Featured
                      </Badge>
                    )}
                    {personality.recentlyAdded && (
                      <Badge className="bg-green-500 text-white text-xs">
                        <Clock className="w-3 h-3 mr-1" />
                        New
                      </Badge>
                    )}
                  </div>
                </div>
                <p className="text-amber-800 text-sm mb-2 line-clamp-2">{personality.excerpt}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs text-amber-600">
                    <TrendingUp className="w-3 h-3" />
                    <span>{personality.popularity}% popularity</span>
                  </div>
                  <Link
                    href={`/${personality.category}/${personality.slug}`}
                    className="text-orange-600 hover:text-orange-800 font-medium text-sm"
                  >
                    Read More →
                  </Link>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      )
    }
  
    return (
      <Card className="h-full hover:shadow-lg transition-all duration-300 bg-gradient-to-b from-amber-50 to-orange-50 border-amber-200 hover:border-amber-300">
        <CardHeader className="pb-3">
          <div className="flex items-start gap-3">
            <div className="relative">
              <Image
                src={personality.image || "/placeholder.svg"}
                alt={personality.name}
                width={50}
                height={50}
                className="rounded-full object-cover border-2 border-amber-200"
              />
              {personality.featured && (
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-orange-500 rounded-full flex items-center justify-center">
                  <Star className="w-2.5 h-2.5 text-white" />
                </div>
              )}
            </div>
            <div className="min-w-0 flex-1">
              <CardTitle className="text-base leading-tight mb-1 text-amber-900 line-clamp-2">
                {personality.name}
              </CardTitle>
              <div className="flex items-center gap-1 text-xs text-amber-700 mb-2">
                <span>
                  {personality.birth} - {personality.death}
                </span>
              </div>
              <div className="flex items-center gap-1 mb-2">
                <Badge variant="secondary" className="text-xs bg-amber-200 text-amber-800 border-amber-300">
                  {personality.category}
                </Badge>
                {personality.recentlyAdded && <Badge className="bg-green-500 text-white text-xs">New</Badge>}
              </div>
            </div>
          </div>
        </CardHeader>
        <CardContent className="pt-0">
          <CardDescription className="text-xs leading-relaxed text-amber-800 mb-3 line-clamp-3">
            {personality.excerpt}
          </CardDescription>
          <div className="flex items-center justify-between text-xs">
            <span className="text-amber-600">{personality.region}</span>
            <Link
              href={`/${personality.category}/${personality.slug}`}
              className="text-orange-600 hover:text-orange-800 font-medium"
            >
              Read →
            </Link>
          </div>
        </CardContent>
      </Card>
    )
  }
  
  export default function ExploreAllPage() {
    return (
      <div>
  
        {/* Header */}
        <header className="bg-gradient-to-r from-amber-100 to-orange-100 border-b-2 border-amber-200 shadow-sm">
          <div className="max-w-7xl mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <Button variant="ghost" size="sm" className="text-amber-800 hover:bg-amber-200" asChild>
                  <Link href="/">
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back to Home
                  </Link>
                </Button>
                <Separator orientation="vertical" className="h-6 bg-amber-300" />
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-amber-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">ਸ</span>
                  </div>
                  <Link href="/" className="text-xl font-bold text-amber-900 hover:text-orange-600 transition-colors">
                    SikhSoorme
                  </Link>
                </div>
              </div>
  
              <div className="flex items-center gap-4">
                <div className="hidden md:flex items-center gap-2 text-sm text-amber-700">
                  <Eye className="w-4 h-4" />
                  <span>2,847 total views today</span>
                </div>
                <Button size="sm" className="bg-orange-500 hover:bg-orange-600 text-white" asChild>
                  <Link href="/contribute">
                    <BookOpen className="w-4 h-4 mr-2" />
                    Add Personality
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </header>
  
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-orange-600 to-amber-700 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-10 w-32 h-32 border-2 border-white rounded-full"></div>
            <div className="absolute top-20 right-20 w-24 h-24 border-2 border-white rounded-full"></div>
            <div className="absolute bottom-10 left-1/4 w-16 h-16 border-2 border-white rounded-full"></div>
          </div>
  
          <div className="max-w-6xl mx-auto px-4 relative z-10 text-center">
            <div className="inline-flex items-center gap-3 bg-white/20 px-6 py-3 rounded-full border border-white/30 mb-6">
              <Users className="w-5 h-5 text-white" />
              <span className="text-white font-bold">COMPLETE DIRECTORY</span>
            </div>
  
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              All <span className="text-amber-200">128</span> Personalities
            </h1>
  
            <p className="text-xl text-orange-100 mb-8 max-w-4xl mx-auto leading-relaxed">
              Explore the complete collection of Sikh personalities who shaped history through their courage, wisdom, and
              devotion. From the founding Gurus to modern-day heroes, discover their inspiring stories.
            </p>
  
            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-1">550+</div>
                <div className="text-sm text-orange-200">Years of History</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-1">6</div>
                <div className="text-sm text-orange-200">Categories</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-1">47</div>
                <div className="text-sm text-orange-200">Contributors</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-1">23</div>
                <div className="text-sm text-orange-200">Languages</div>
              </div>
            </div>
          </div>
        </section>
  
        {/* Statistics Dashboard */}
        <section className="py-12 bg-gradient-to-r from-amber-200 to-orange-200">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8">
              {/* Category Breakdown */}
              <Card className="bg-white/90 backdrop-blur-sm border-2 border-amber-200">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-amber-900">
                    <BarChart3 className="w-5 h-5 text-orange-600" />
                    By Category
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {categoryStats.map((category, index) => {
                      const IconComponent = category.icon
                      return (
                        <div key={index} className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className={`w-4 h-4 rounded-full ${category.color}`}></div>
                            <span className="text-amber-900 text-sm font-medium">{category.name}</span>
                          </div>
                          <span className="text-amber-700 font-bold">{category.count}</span>
                        </div>
                      )
                    })}
                  </div>
                </CardContent>
              </Card>
  
              {/* Timeline Distribution */}
              <Card className="bg-white/90 backdrop-blur-sm border-2 border-amber-200">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-amber-900">
                    <Calendar className="w-5 h-5 text-orange-600" />
                    By Time Period
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {timelineStats.map((period, index) => (
                      <div key={index}>
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-amber-900 text-sm font-medium">{period.period}</span>
                          <span className="text-amber-700 font-bold">{period.count}</span>
                        </div>
                        <div className="w-full bg-amber-200 rounded-full h-2">
                          <div
                            className="bg-orange-500 h-2 rounded-full transition-all"
                            style={{ width: `${period.percentage}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
  
              {/* Regional Distribution */}
              <Card className="bg-white/90 backdrop-blur-sm border-2 border-amber-200">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-amber-900">
                    <MapPin className="w-5 h-5 text-orange-600" />
                    By Region
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {regionStats.map((region, index) => (
                      <div key={index} className="flex items-center justify-between">
                        <span className="text-amber-900 text-sm font-medium">{region.region}</span>
                        <div className="flex items-center gap-2">
                          <span className="text-amber-700 font-bold">{region.count}</span>
                          <span className="text-amber-600 text-xs">({region.percentage}%)</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
  
        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 py-12">
          <Tabs defaultValue="all" className="space-y-8">
            {/* Navigation & Controls */}
            <div className="flex flex-col lg:flex-row gap-6">
              {/* Tabs */}
              <TabsList className="bg-amber-200 border border-amber-300 flex-wrap h-auto">
                <TabsTrigger value="all" className="data-[state=active]:bg-orange-500 data-[state=active]:text-white">
                  All (128)
                </TabsTrigger>
                <TabsTrigger
                  value="featured"
                  className="data-[state=active]:bg-orange-500 data-[state=active]:text-white"
                >
                  Featured (32)
                </TabsTrigger>
                <TabsTrigger value="recent" className="data-[state=active]:bg-orange-500 data-[state=active]:text-white">
                  Recently Added (12)
                </TabsTrigger>
                <TabsTrigger value="popular" className="data-[state=active]:bg-orange-500 data-[state=active]:text-white">
                  Most Popular
                </TabsTrigger>
                <TabsTrigger
                  value="timeline"
                  className="data-[state=active]:bg-orange-500 data-[state=active]:text-white"
                >
                  Timeline View
                </TabsTrigger>
              </TabsList>
  
              {/* Controls */}
              <div className="flex flex-wrap gap-4 items-center">
                {/* Search */}
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-amber-600 w-4 h-4" />
                  <Input
                    placeholder="Search all personalities..."
                    className="pl-10 w-64 border-amber-300 focus:border-orange-500 bg-white"
                  />
                </div>
  
                {/* Category Filter */}
                <Select defaultValue="all-categories">
                  <SelectTrigger className="w-40 border-amber-300 bg-white">
                    <Filter className="w-4 h-4 mr-2" />
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all-categories">All Categories</SelectItem>
                    <SelectItem value="gurus">Gurus</SelectItem>
                    <SelectItem value="leaders">Leaders</SelectItem>
                    <SelectItem value="warriors">Warriors</SelectItem>
                    <SelectItem value="martyrs">Martyrs</SelectItem>
                    <SelectItem value="scholars">Scholars</SelectItem>
                    <SelectItem value="modern">Modern Era</SelectItem>
                  </SelectContent>
                </Select>
  
                {/* Sort */}
                <Select defaultValue="name">
                  <SelectTrigger className="w-40 border-amber-300 bg-white">
                    <SortAsc className="w-4 h-4 mr-2" />
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="name">Name A-Z</SelectItem>
                    <SelectItem value="birth">Birth Year</SelectItem>
                    <SelectItem value="death">Death Year</SelectItem>
                    <SelectItem value="popularity">Popularity</SelectItem>
                    <SelectItem value="category">Category</SelectItem>
                  </SelectContent>
                </Select>
  
                {/* View Mode */}
                <div className="flex border border-amber-300 rounded-md bg-white">
                  <Button variant="ghost" size="sm" className="rounded-r-none border-r border-amber-300">
                    <Grid3X3 className="w-4 h-4" />
                  </Button>
                  <Button variant="ghost" size="sm" className="rounded-l-none">
                    <List className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
  
            {/* Advanced Filters Panel */}
            <Card className="bg-gradient-to-r from-amber-100 to-orange-100 border-2 border-amber-200">
              <CardHeader>
                <CardTitle className="text-amber-900 text-lg">Advanced Filters</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-4 gap-6">
                  {/* Time Period */}
                  <div>
                    <label className="text-sm font-medium text-amber-900 mb-3 block">Time Period</label>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <Checkbox id="medieval" />
                        <label htmlFor="medieval" className="text-sm text-amber-800">
                          Medieval (1400-1700)
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="modern" />
                        <label htmlFor="modern" className="text-sm text-amber-800">
                          Modern (1700-1900)
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="contemporary" />
                        <label htmlFor="contemporary" className="text-sm text-amber-800">
                          Contemporary (1900+)
                        </label>
                      </div>
                    </div>
                  </div>
  
                  {/* Region */}
                  <div>
                    <label className="text-sm font-medium text-amber-900 mb-3 block">Region</label>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <Checkbox id="punjab" />
                        <label htmlFor="punjab" className="text-sm text-amber-800">
                          Punjab
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="kashmir" />
                        <label htmlFor="kashmir" className="text-sm text-amber-800">
                          Kashmir
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="afghanistan" />
                        <label htmlFor="afghanistan" className="text-sm text-amber-800">
                          Afghanistan
                        </label>
                      </div>
                    </div>
                  </div>
  
                  {/* Birth Year Range */}
                  <div>
                    <label className="text-sm font-medium text-amber-900 mb-3 block">Birth Year Range</label>
                    <div className="space-y-3">
                      <Slider defaultValue={[1400]} max={2000} min={1400} step={50} className="w-full" />
                      <div className="flex justify-between text-xs text-amber-700">
                        <span>1400</span>
                        <span>2000</span>
                      </div>
                    </div>
                  </div>
  
                  {/* Special Attributes */}
                  <div>
                    <label className="text-sm font-medium text-amber-900 mb-3 block">Special Attributes</label>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <Checkbox id="featured-only" />
                        <label htmlFor="featured-only" className="text-sm text-amber-800">
                          Featured Only
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="recent-only" />
                        <label htmlFor="recent-only" className="text-sm text-amber-800">
                          Recently Added
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="high-popularity" />
                        <label htmlFor="high-popularity" className="text-sm text-amber-800">
                          High Popularity (80%+)
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
  
            {/* All Personalities */}
            <TabsContent value="all" className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-amber-900">All 128 Personalities</h2>
                <div className="text-sm text-amber-700">Showing all results</div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4">
                {allPersonalities.slice(0, 20).map((personality) => (
                  <PersonalityCard key={personality.slug} personality={personality} />
                ))}
              </div>
              <div className="text-center">
                <Button variant="outline" className="border-orange-300 text-orange-600 hover:bg-orange-50 bg-transparent">
                  Load More (108 remaining)
                </Button>
              </div>
            </TabsContent>
  
            {/* Featured Personalities */}
            <TabsContent value="featured" className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-amber-900">Featured Personalities</h2>
                <div className="text-sm text-amber-700">32 featured personalities</div>
              </div>
              <div className="space-y-4">
                {allPersonalities
                  .filter((p) => p.featured)
                  .slice(0, 10)
                  .map((personality) => (
                    <PersonalityCard key={personality.slug} personality={personality} viewMode="list" />
                  ))}
              </div>
            </TabsContent>
  
            {/* Recently Added */}
            <TabsContent value="recent" className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-amber-900">Recently Added</h2>
                <div className="text-sm text-amber-700">12 new additions this month</div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {allPersonalities
                  .filter((p) => p.recentlyAdded)
                  .map((personality) => (
                    <PersonalityCard key={personality.slug} personality={personality} />
                  ))}
              </div>
            </TabsContent>
  
            {/* Most Popular */}
            <TabsContent value="popular" className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-amber-900">Most Popular</h2>
                <div className="text-sm text-amber-700">Ranked by community engagement</div>
              </div>
              <div className="space-y-4">
                {allPersonalities
                  .sort((a, b) => b.popularity - a.popularity)
                  .slice(0, 15)
                  .map((personality, index) => (
                    <Card key={personality.slug} className="bg-gradient-to-r from-amber-50 to-orange-50 border-amber-200">
                      <CardContent className="p-4">
                        <div className="flex items-center gap-4">
                          <div className="flex items-center justify-center w-8 h-8 bg-orange-500 text-white rounded-full font-bold text-sm">
                            {index + 1}
                          </div>
                          <Image
                            src={personality.image || "/placeholder.svg"}
                            alt={personality.name}
                            width={50}
                            height={50}
                            className="rounded-full object-cover border-2 border-amber-300"
                          />
                          <div className="flex-1">
                            <h3 className="text-lg font-bold text-amber-900">{personality.name}</h3>
                            <div className="flex items-center gap-3 text-sm text-amber-700">
                              <span>
                                {personality.birth} - {personality.death}
                              </span>
                              <Badge variant="secondary" className="bg-amber-200 text-amber-800 text-xs">
                                {personality.category}
                              </Badge>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="text-lg font-bold text-orange-600">{personality.popularity}%</div>
                            <div className="text-xs text-amber-600">popularity</div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
              </div>
            </TabsContent>
  
            {/* Timeline View */}
            <TabsContent value="timeline" className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-amber-900">Timeline View</h2>
                <div className="text-sm text-amber-700">Chronological order by birth year</div>
              </div>
              <div className="space-y-8">
                {["Medieval Period (1400-1700)", "Modern Period (1700-1900)", "Contemporary Period (1900+)"].map(
                  (period, periodIndex) => (
                    <Card
                      key={periodIndex}
                      className="bg-gradient-to-r from-amber-100 to-orange-100 border-2 border-amber-200"
                    >
                      <CardHeader>
                        <CardTitle className="text-amber-900">{period}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                          {allPersonalities
                            .filter((p) => {
                              if (periodIndex === 0) return p.birth >= 1400 && p.birth < 1700
                              if (periodIndex === 1) return p.birth >= 1700 && p.birth < 1900
                              return p.birth >= 1900
                            })
                            .slice(0, 8)
                            .map((personality) => (
                              <PersonalityCard key={personality.slug} personality={personality} />
                            ))}
                        </div>
                      </CardContent>
                    </Card>
                  ),
                )}
              </div>
            </TabsContent>
          </Tabs>
        </div>
  
        {/* Call to Action */}
        <section className="py-16 bg-gradient-to-r from-orange-600 to-amber-600">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <Users className="w-16 h-16 text-white mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-white mb-4">Help Us Grow This Collection</h2>
            <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
              Know of a Sikh personality who should be featured? Contribute their story and help preserve our rich
              heritage for future generations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-orange-600 hover:bg-amber-50" asChild>
                <Link href="/contribute">
                  <BookOpen className="w-5 h-5 mr-2" />
                  Add New Personality
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-orange-600"
                asChild
              >
                <Link href="/guide">
                  <Lightbulb className="w-5 h-5 mr-2" />
                  Contribution Guide
                </Link>
              </Button>
            </div>
          </div>
        </section>
  
      </div>
    )
  }
  