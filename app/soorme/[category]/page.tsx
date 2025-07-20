import {
    ArrowLeft,
    Search,
    Calendar,
    Sword,
    Shield,
    Crown,
    Star,
    Users,
    BookOpen,
    SortAsc,
    Grid3X3,
    List,
    Eye,
  } from "lucide-react"
  import { Button } from "@/components/ui/button"
  import { Input } from "@/components/ui/input"
  import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
  import { Badge } from "@/components/ui/badge"
  import { Separator } from "@/components/ui/separator"
  import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
  import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
  import Image from "next/image"
  import Link from "next/link"
  
  // Sample data for Warriors category
  const categoryData = {
    name: "Warriors",
    slug: "warriors",
    icon: "⚔️",
    description:
      "Brave Sikh warriors who fought valiantly to protect righteousness, defend the innocent, and establish justice. These fearless souls embodied the warrior-saint ideal, combining martial prowess with spiritual devotion.",
    longDescription:
      "The tradition of Sikh warriors began with Guru Hargobind Ji, who established the concept of Miri-Piri (temporal and spiritual authority). These warriors were not mere soldiers but saint-soldiers who fought only when all peaceful means were exhausted, always adhering to the highest moral and ethical standards even in battle.",
    totalCount: 32,
    featuredCount: 8,
    timeSpan: "1606 - 1849",
    keyPeriods: [
      "Guru Period (1606-1708)",
      "Banda Singh Era (1708-1716)",
      "Misl Period (1716-1799)",
      "Sikh Empire (1799-1849)",
    ],
    heroImage: "/placeholder.svg?height=400&width=800",
  }
  
  const warriors = [
    {
      name: "Guru Hargobind Ji",
      slug: "guru-hargobind-ji",
      birth: "1595",
      death: "1644",
      image: "/placeholder.svg?height=200&width=200",
      excerpt: "The sixth Sikh Guru who established the warrior tradition and fought four battles against Mughal forces.",
      period: "Guru Period",
      battles: ["Battle of Rohilla", "Battle of Amritsar", "Battle of Kartarpur", "Battle of Kiratpur"],
      significance: "Established Miri-Piri concept",
      featured: true,
      era: "early",
    },
    {
      name: "Mata Bhag Kaur (Mai Bhago)",
      slug: "mata-bhag-kaur",
      birth: "1666",
      death: "1708",
      image: "/placeholder.svg?height=200&width=200",
      excerpt: "Legendary woman warrior who led 40 Sikhs in the Battle of Khidrana and inspired Guru Gobind Singh Ji.",
      period: "Guru Period",
      battles: ["Battle of Khidrana"],
      significance: "First recorded Sikh woman warrior",
      featured: true,
      era: "early",
    },
    {
      name: "Banda Singh Bahadur",
      slug: "banda-singh-bahadur",
      birth: "1670",
      death: "1716",
      image: "/placeholder.svg?height=200&width=200",
      excerpt: "Revolutionary warrior who established the first Sikh state and fought against Mughal oppression.",
      period: "Banda Singh Era",
      battles: ["Battle of Samana", "Battle of Sadhaura", "Battle of Sirhind"],
      significance: "First Sikh ruler",
      featured: true,
      era: "early",
    },
    {
      name: "Sardar Hari Singh Nalwa",
      slug: "sardar-hari-singh-nalwa",
      birth: "1791",
      death: "1837",
      image: "/placeholder.svg?height=200&width=200",
      excerpt: "Greatest general of Maharaja Ranjit Singh's army who expanded the Sikh Empire to Afghanistan.",
      period: "Sikh Empire",
      battles: ["Battle of Attock", "Battle of Multan", "Battle of Kashmir"],
      significance: "Expanded empire to Khyber Pass",
      featured: true,
      era: "late",
    },
    {
      name: "Baba Deep Singh Ji",
      slug: "baba-deep-singh-ji",
      birth: "1682",
      death: "1757",
      image: "/placeholder.svg?height=200&width=200",
      excerpt: "Legendary warrior-scholar who fought with his severed head to liberate Harmandir Sahib.",
      period: "Misl Period",
      battles: ["Battle of Amritsar"],
      significance: "Ultimate sacrifice for Harmandir Sahib",
      featured: true,
      era: "middle",
    },
    {
      name: "Sardar Jassa Singh Ahluwalia",
      slug: "sardar-jassa-singh-ahluwalia",
      birth: "1718",
      death: "1783",
      image: "/placeholder.svg?height=200&width=200",
      excerpt: "Supreme commander of Dal Khalsa who united Sikh misls and captured Delhi twice.",
      period: "Misl Period",
      battles: ["Capture of Delhi", "Battle of Panipat"],
      significance: "United the Sikh Confederacy",
      featured: true,
      era: "middle",
    },
    {
      name: "Akali Phula Singh",
      slug: "akali-phula-singh",
      birth: "1761",
      death: "1823",
      image: "/placeholder.svg?height=200&width=200",
      excerpt: "Fearless Akali warrior known for his blue robes and unwavering courage in countless battles.",
      period: "Sikh Empire",
      battles: ["Battle of Attock", "Battle of Multan"],
      significance: "Leader of Akali Dal",
      featured: true,
      era: "late",
    },
    {
      name: "Sardar Sham Singh Attariwala",
      slug: "sardar-sham-singh-attariwala",
      birth: "1790",
      death: "1846",
      image: "/placeholder.svg?height=200&width=200",
      excerpt: "Brave general who led Sikh forces in the Anglo-Sikh Wars with exceptional valor.",
      period: "Anglo-Sikh Wars",
      battles: ["Battle of Sobraon", "Battle of Ferozeshah"],
      significance: "Hero of Anglo-Sikh Wars",
      featured: true,
      era: "late",
    },
    {
      name: "Bhai Bachittar Singh",
      slug: "bhai-bachittar-singh",
      birth: "1664",
      death: "1704",
      image: "/placeholder.svg?height=200&width=200",
      excerpt: "Young warrior who charged an elephant in the Battle of Chamkaur Sahib at age 40.",
      period: "Guru Period",
      battles: ["Battle of Chamkaur Sahib"],
      significance: "Elephant charge at Chamkaur",
      featured: false,
      era: "early",
    },
    {
      name: "Sardar Baghel Singh",
      slug: "sardar-baghel-singh",
      birth: "1730",
      death: "1802",
      image: "/placeholder.svg?height=200&width=200",
      excerpt: "Misl leader who captured Delhi and built several gurdwaras in the Mughal capital.",
      period: "Misl Period",
      battles: ["Capture of Delhi"],
      significance: "Built gurdwaras in Delhi",
      featured: false,
      era: "middle",
    },
    {
      name: "Sardar Charat Singh",
      slug: "sardar-charat-singh",
      birth: "1729",
      death: "1774",
      image: "/placeholder.svg?height=200&width=200",
      excerpt: "Founder of Sukerchakia Misl and grandfather of Maharaja Ranjit Singh.",
      period: "Misl Period",
      battles: ["Various Misl battles"],
      significance: "Founded Sukerchakia Misl",
      featured: false,
      era: "middle",
    },
    {
      name: "Bhai Himmat Singh",
      slug: "bhai-himmat-singh",
      birth: "1661",
      death: "1705",
      image: "/placeholder.svg?height=200&width=200",
      excerpt: "One of the Panj Piare who became a fearless warrior and military commander.",
      period: "Guru Period",
      battles: ["Battle of Anandpur Sahib"],
      significance: "One of the first five Khalsa",
      featured: false,
      era: "early",
    },
  ]
  
  const battleStats = [
    { name: "Major Battles", count: 47, icon: Sword },
    { name: "Victories", count: 38, icon: Crown },
    { name: "Years of Warfare", count: 243, icon: Calendar },
    { name: "Territories Liberated", count: 15, icon: Shield },
  ]
  
  const timelinePeriods = [
    {
      period: "Guru Period",
      years: "1606-1708",
      description: "Foundation of warrior tradition under Guru Hargobind Ji and culmination under Guru Gobind Singh Ji",
      keyFigures: 4,
      majorEvents: ["First battles against Mughals", "Formation of Khalsa", "Battle of Chamkaur Sahib"],
    },
    {
      period: "Banda Singh Era",
      years: "1708-1716",
      description: "Establishment of first Sikh state under Banda Singh Bahadur's military leadership",
      keyFigures: 3,
      majorEvents: ["Conquest of Sirhind", "First Sikh coinage", "Martyrdom of Banda Singh"],
    },
    {
      period: "Misl Period",
      years: "1716-1799",
      description: "Era of Sikh confederacy with various misls controlling different territories",
      keyFigures: 12,
      majorEvents: ["Formation of Dal Khalsa", "Capture of Delhi", "Consolidation of Punjab"],
    },
    {
      period: "Sikh Empire",
      years: "1799-1849",
      description: "Unified Sikh Empire under Maharaja Ranjit Singh and subsequent Anglo-Sikh Wars",
      keyFigures: 8,
      majorEvents: ["Empire expansion", "Modernization of army", "Anglo-Sikh Wars"],
    },
  ]

  
  
  function WarriorCard({ warrior, viewMode = "grid" }: { warrior: (typeof warriors)[0]; viewMode?: "grid" | "list" }) {
    if (viewMode === "list") {
      return (
        <Card className="bg-gradient-to-r from-amber-50 to-orange-50 border-amber-200 hover:shadow-lg transition-all">
          <CardContent className="p-6">
            <div className="flex items-center gap-6">
              <Image
                src={warrior.image || "/placeholder.svg"}
                alt={warrior.name}
                width={80}
                height={80}
                className="rounded-full object-cover border-2 border-amber-300"
              />
              <div className="flex-1">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="text-xl font-bold text-amber-900 mb-1">{warrior.name}</h3>
                    <div className="flex items-center gap-3 text-sm text-amber-700 mb-2">
                      <span className="font-medium">
                        {warrior.birth} - {warrior.death}
                      </span>
                      <Badge variant="secondary" className="bg-amber-200 text-amber-800">
                        {warrior.period}
                      </Badge>
                    </div>
                  </div>
                  {warrior.featured && (
                    <Badge className="bg-orange-500 text-white">
                      <Star className="w-3 h-3 mr-1" />
                      Featured
                    </Badge>
                  )}
                </div>
                <p className="text-amber-800 mb-3 leading-relaxed">{warrior.excerpt}</p>
                <div className="flex items-center justify-between">
                  <div className="text-sm text-amber-700">
                    <span className="font-medium">Key Achievement:</span> {warrior.significance}
                  </div>
                  <Link href={`/warriors/${warrior.slug}`} className="text-orange-600 hover:text-orange-800 font-medium">
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
                src={warrior.image || "/placeholder.svg"}
                alt={warrior.name}
                width={60}
                height={60}
                className="rounded-full object-cover flex-shrink-0 border-2 border-amber-200"
              />
              {warrior.featured && (
                <div className="absolute -top-1 -right-1 w-5 h-5 bg-orange-500 rounded-full flex items-center justify-center">
                  <Star className="w-3 h-3 text-white" />
                </div>
              )}
            </div>
            <div className="min-w-0 flex-1">
              <CardTitle className="text-lg leading-tight mb-1 text-amber-900">{warrior.name}</CardTitle>
              <div className="flex items-center gap-2 text-sm text-amber-700 mb-2">
                <span className="font-medium">
                  {warrior.birth} - {warrior.death}
                </span>
              </div>
              <Badge variant="secondary" className="text-xs bg-amber-200 text-amber-800 border-amber-300">
                {warrior.period}
              </Badge>
            </div>
          </div>
        </CardHeader>
        <CardContent className="pt-0">
          <CardDescription className="text-sm leading-relaxed text-amber-800 mb-3">{warrior.excerpt}</CardDescription>
          <div className="text-xs text-amber-700 mb-3">
            <span className="font-medium">Significance:</span> {warrior.significance}
          </div>
          <Link
            href={`/warriors/${warrior.slug}`}
            className="inline-flex items-center text-sm font-medium text-orange-600 hover:text-orange-800 transition-colors"
          >
            Read full story →
          </Link>
        </CardContent>
      </Card>
    )
  }

  export async function generateStaticParams() {
    return warriors.map((warrior) => ({
      category: "gurus",
      slug: warrior.slug,
    }))
  }
  
  export default function CategoryDetailPage() {
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
              </div>
  
              <div className="flex items-center gap-4">
                <div className="hidden md:flex items-center gap-2 text-sm text-amber-700">
                  <Eye className="w-4 h-4" />
                  <span>1,247 views this month</span>
                </div>
                <Button size="sm" className="bg-orange-500 hover:bg-orange-600 text-white" asChild>
                  <Link href="/contribute">
                    <BookOpen className="w-4 h-4 mr-2" />
                    Add Warrior
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </header>
  
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-orange-600 to-amber-700 relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-10 w-32 h-32 border-2 border-white rounded-full"></div>
            <div className="absolute top-20 right-20 w-24 h-24 border-2 border-white rounded-full"></div>
            <div className="absolute bottom-10 left-1/4 w-16 h-16 border-2 border-white rounded-full"></div>
          </div>
  
          <div className="max-w-6xl mx-auto px-4 relative z-10">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-3 bg-white/20 px-6 py-3 rounded-full border border-white/30 mb-6">
                <span className="text-4xl">{categoryData.icon}</span>
                <span className="text-white font-bold text-lg">SIKH {categoryData.name.toUpperCase()}</span>
              </div>
  
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                Legendary <span className="text-amber-200">Warriors</span>
              </h1>
  
              <p className="text-xl text-orange-100 mb-8 max-w-4xl mx-auto leading-relaxed">{categoryData.description}</p>
  
              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                {battleStats.map((stat, index) => {
                  const IconComponent = stat.icon
                  return (
                    <div key={index} className="text-center">
                      <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                      <div className="text-3xl font-bold text-white mb-1">{stat.count}</div>
                      <div className="text-sm text-orange-200">{stat.name}</div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </section>
  
        {/* Historical Context */}
        <section className="py-12 bg-gradient-to-r from-amber-200 to-orange-200">
          <div className="max-w-6xl mx-auto px-4">
            <Card className="bg-white/90 backdrop-blur-sm border-2 border-amber-200">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <h2 className="text-2xl font-bold text-amber-900 mb-2">The Warrior Tradition</h2>
                  <p className="text-amber-700">Understanding the historical context of Sikh warriors</p>
                </div>
                <p className="text-amber-800 leading-relaxed text-center max-w-4xl mx-auto">
                  {categoryData.longDescription}
                </p>
              </CardContent>
            </Card>
          </div>
        </section>
  
        {/* Timeline Periods */}
        <section className="py-16 bg-gradient-to-b from-amber-50 to-orange-50">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-amber-900 mb-4">Historical Periods</h2>
              <p className="text-amber-700 text-lg">Evolution of Sikh warrior tradition across centuries</p>
            </div>
  
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {timelinePeriods.map((period, index) => (
                <Card
                  key={index}
                  className="bg-gradient-to-b from-white to-amber-50 border-2 border-amber-200 hover:shadow-lg transition-all"
                >
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <CardTitle className="text-lg text-amber-900">{period.period}</CardTitle>
                      <Badge variant="outline" className="border-orange-300 text-orange-700 text-xs">
                        {period.keyFigures} warriors
                      </Badge>
                    </div>
                    <CardDescription className="text-amber-700 font-medium">{period.years}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-amber-800 text-sm leading-relaxed mb-4">{period.description}</p>
                    <div>
                      <h4 className="font-semibold text-amber-900 text-sm mb-2">Key Events:</h4>
                      <ul className="text-xs text-amber-700 space-y-1">
                        {period.majorEvents.map((event, eventIndex) => (
                          <li key={eventIndex}>• {event}</li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
  
        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 py-12">
          <Tabs defaultValue="all" className="space-y-8">
            {/* Controls */}
            <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between">
              <TabsList className="bg-amber-200 border border-amber-300">
                <TabsTrigger value="all" className="data-[state=active]:bg-orange-500 data-[state=active]:text-white">
                  All Warriors ({warriors.length})
                </TabsTrigger>
                <TabsTrigger
                  value="featured"
                  className="data-[state=active]:bg-orange-500 data-[state=active]:text-white"
                >
                  Featured ({warriors.filter((w) => w.featured).length})
                </TabsTrigger>
                <TabsTrigger value="early" className="data-[state=active]:bg-orange-500 data-[state=active]:text-white">
                  Early Period
                </TabsTrigger>
                <TabsTrigger value="middle" className="data-[state=active]:bg-orange-500 data-[state=active]:text-white">
                  Middle Period
                </TabsTrigger>
                <TabsTrigger value="late" className="data-[state=active]:bg-orange-500 data-[state=active]:text-white">
                  Late Period
                </TabsTrigger>
              </TabsList>
  
              <div className="flex flex-wrap gap-4 items-center">
                {/* Search */}
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-amber-600 w-4 h-4" />
                  <Input
                    placeholder="Search warriors..."
                    className="pl-10 w-64 border-amber-300 focus:border-orange-500 bg-white"
                  />
                </div>
  
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
                    <SelectItem value="period">Historical Period</SelectItem>
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
  
            {/* All Warriors */}
            <TabsContent value="all" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {warriors.map((warrior) => (
                  <WarriorCard key={warrior.slug} warrior={warrior} />
                ))}
              </div>
            </TabsContent>
  
            {/* Featured Warriors */}
            <TabsContent value="featured" className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {warriors
                  .filter((warrior) => warrior.featured)
                  .map((warrior) => (
                    <WarriorCard key={warrior.slug} warrior={warrior} viewMode="list" />
                  ))}
              </div>
            </TabsContent>
  
            {/* Early Period */}
            <TabsContent value="early" className="space-y-6">
              <div className="mb-6">
                <Card className="bg-gradient-to-r from-amber-100 to-orange-100 border-2 border-amber-200">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-amber-900 mb-2">Early Period Warriors (1606-1716)</h3>
                    <p className="text-amber-800 leading-relaxed">
                      The foundation era of Sikh warrior tradition, beginning with Guru Hargobind Ji's establishment of
                      Miri-Piri and culminating with Guru Gobind Singh Ji's creation of the Khalsa and Banda Singh
                      Bahadur's military campaigns.
                    </p>
                  </CardContent>
                </Card>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {warriors
                  .filter((warrior) => warrior.era === "early")
                  .map((warrior) => (
                    <WarriorCard key={warrior.slug} warrior={warrior} />
                  ))}
              </div>
            </TabsContent>
  
            {/* Middle Period */}
            <TabsContent value="middle" className="space-y-6">
              <div className="mb-6">
                <Card className="bg-gradient-to-r from-amber-100 to-orange-100 border-2 border-amber-200">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-amber-900 mb-2">Middle Period Warriors (1716-1799)</h3>
                    <p className="text-amber-800 leading-relaxed">
                      The Misl period when Sikh warriors organized into confederacies, fought against Afghan invasions,
                      and gradually consolidated control over Punjab through strategic alliances and military prowess.
                    </p>
                  </CardContent>
                </Card>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {warriors
                  .filter((warrior) => warrior.era === "middle")
                  .map((warrior) => (
                    <WarriorCard key={warrior.slug} warrior={warrior} />
                  ))}
              </div>
            </TabsContent>
  
            {/* Late Period */}
            <TabsContent value="late" className="space-y-6">
              <div className="mb-6">
                <Card className="bg-gradient-to-r from-amber-100 to-orange-100 border-2 border-amber-200">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-amber-900 mb-2">Late Period Warriors (1799-1849)</h3>
                    <p className="text-amber-800 leading-relaxed">
                      The Sikh Empire era under Maharaja Ranjit Singh and the subsequent Anglo-Sikh Wars, featuring
                      modernized armies, territorial expansion, and the final battles for Sikh sovereignty.
                    </p>
                  </CardContent>
                </Card>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {warriors
                  .filter((warrior) => warrior.era === "late")
                  .map((warrior) => (
                    <WarriorCard key={warrior.slug} warrior={warrior} />
                  ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
  
        {/* Call to Action */}
        <section className="py-16 bg-gradient-to-r from-orange-600 to-amber-600">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <Sword className="w-16 h-16 text-white mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-white mb-4">Know More Warriors?</h2>
            <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
              Help us preserve the legacy of Sikh warriors by contributing information about brave souls who fought for
              righteousness and justice.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-orange-600 hover:bg-amber-50" asChild>
                <Link href="/contribute">
                  <BookOpen className="w-5 h-5 mr-2" />
                  Add a Warrior
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-orange-600"
                asChild
              >
                <Link href="/categories">
                  <Users className="w-5 h-5 mr-2" />
                  Explore Other Categories
                </Link>
              </Button>
            </div>
          </div>
        </section>
  

      </div>
    )
  }
  