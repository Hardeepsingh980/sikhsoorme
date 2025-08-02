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
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Checkbox } from "@/components/ui/checkbox"
import { Slider } from "@/components/ui/slider"
import Image from "next/image"
import Link from "next/link"
// pages/explore.tsx or similar

import fs from "fs/promises";
import path from "path";
import { CategoryStat, TimelineStat, Personality } from "@/app/all/types"; // adjust path as needed
import Searchbar from "@/components/Searchbar"

const personalitiesDir = path.join(process.cwd(), "data/personalities");

async function loadAllPersonalities(): Promise<Personality[]> {
  const files = await fs.readdir(personalitiesDir);
  const personalities: Personality[] = [];

  for (const file of files) {
    if (file.endsWith(".json")) {
      const content = await fs.readFile(path.join(personalitiesDir, file), "utf-8");
      const json: Personality = JSON.parse(content);
      personalities.push(json);
    }
  }

  return personalities;
}

function computeCategoryStats(personalities: Personality[]): CategoryStat[] {
  const categoryMap = {
    gurus: { icon: "Crown", color: "bg-purple-500" },
    leaders: { icon: "Shield", color: "bg-blue-500" },
    warriors: { icon: "Sword", color: "bg-red-500" },
    martyrs: { icon: "Heart", color: "bg-gray-500" },
    scholars: { icon: "BookOpen", color: "bg-green-500" },
    modern: { icon: "Globe", color: "bg-orange-500" },
  };

  const counts: Record<string, number> = {};

  personalities.forEach((p) => {
    const cat = p.category;
    counts[cat] = (counts[cat] || 0) + 1;
  });

  return Object.entries(counts).map(([name, count]) => ({
    name: name.charAt(0).toUpperCase() + name.slice(1),
    count,
    icon: categoryMap[name as keyof typeof categoryMap]?.icon || "Star",
    color: categoryMap[name as keyof typeof categoryMap]?.color || "bg-gray-300",
  }));
}

function computeTimelineStats(personalities: Personality[]): TimelineStat[] {
  let medieval = 0,
    modern = 0,
    contemporary = 0;

  personalities.forEach((p) => {
    const birthYear = new Date(p.birth).getFullYear();
    if (birthYear < 1700) medieval++;
    else if (birthYear < 1900) modern++;
    else contemporary++;
  });

  const total = personalities.length;

  return [
    { period: "Medieval (1400–1700)", count: medieval, percentage: Math.round((medieval / total) * 100) },
    { period: "Modern (1700–1900)", count: modern, percentage: Math.round((modern / total) * 100) },
    { period: "Contemporary (1900+)", count: contemporary, percentage: Math.round((contemporary / total) * 100) },
  ];
}


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
                  href={`/soorme/${personality.category}/${personality.slug}`}
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
            href={`/soorme/${personality.category}/${personality.slug}`}
            className="text-orange-600 hover:text-orange-800 font-medium"
          >
            Read →
          </Link>
        </div>
      </CardContent>
    </Card>
  )
}

export default async function ExploreAllPage() {
  const allPersonalities = await loadAllPersonalities();
  const categoryStats = computeCategoryStats(allPersonalities);
  const timelineStats = computeTimelineStats(allPersonalities);

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
            All <span className="text-amber-200">{allPersonalities.length}</span> Personalities
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
              <div className="text-3xl font-bold text-white mb-1">{categoryStats.length}</div>
              <div className="text-sm text-orange-200">Categories</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-1">5</div>
              <div className="text-sm text-orange-200">Contributors</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-1">2</div>
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

          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <Tabs defaultValue="all" className="space-y-8">
          {/* Navigation & Controls */}
          <div className="flex flex-col lg:flex-row gap-2">

            {/* Controls */}
            <div className="flex gap-4 items-center">
              {/* Search */}
              <div  style={{
                width: "70%",
                marginTop: "1.5rem",
              }}>
                <Searchbar />
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
                  <SortAsc className="w-5 h-5 mr-2" />
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


          {/* All Personalities */}
          <TabsContent value="all" className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-amber-900">All {allPersonalities.length} Personalities</h2>
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
                            if (periodIndex === 0) return Number(p.birth) >= 1400 && Number(p.birth) < 1700
                            if (periodIndex === 1) return Number(p.birth) >= 1700 && Number(p.birth) < 1900
                            return Number(p.birth) >= 1900
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
