import {
  ArrowLeft, Star, Users, BookOpen,
  SortAsc, Eye
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import Link from "next/link";
import fs from "fs/promises";
import path from "path";
import { notFound } from "next/navigation";
import { MAP_ICON } from "@/app/consts";
import { formatDate } from "@/lib/utils";
import Searchbar from "@/components/Searchbar";

// UTILITY FUNCTIONS
function getEraFromYear(year: number): "early" | "middle" | "late" {
  if (year < 1716) return "early";
  if (year < 1800) return "middle";
  return "late";
}

function inferPeriod(birthDate: string): string {
  const year = new Date(birthDate).getFullYear();
  if (year < 1708) return "Guru Period";
  if (year <= 1716) return "Banda Singh Era";
  if (year <= 1799) return "Misl Period";
  if (year <= 1849) return "Sikh Empire";
  return "Modern";
}

// DATA LOADERS
async function getCategoryData(slug: string) {
  const raw = await fs.readFile(path.join(process.cwd(), "public/generated/categories.json"), "utf-8");
  const all = JSON.parse(raw);
  const category = all.categories.find((c: any) => c.slug === slug);
  if (!category) notFound();
  return category;
}

async function getCategoryPersonalities(slug: string) {
  const files = await fs.readdir(path.join(process.cwd(), "data/personalities"));
  const personalities = await Promise.all(
    files.map(async (file) => {
      const content = await fs.readFile(path.join(process.cwd(), "data/personalities", file), "utf-8");
      return JSON.parse(content);
    })
  );

  return personalities
    .filter((p) => p.category === slug)
    .map((p) => ({
      ...p,
      birth: new Date(p.birth).getFullYear(),
      death: p.death ? new Date(p.death).getFullYear() : "Present",
      excerpt: p.excerpt || "",
      period: inferPeriod(p.birth),
      era: getEraFromYear(new Date(p.birth).getFullYear()),
    }));
}


function PersonalityCard({ personality, viewMode = "grid" }: { personality: any; viewMode?: "grid" | "list" }) {
  if (viewMode === "list") {
    return (
      <Card className="bg-gradient-to-r from-amber-50 to-orange-50 border-amber-200 hover:shadow-lg transition-all">
        <CardContent className="p-6">
          <div className="flex items-center gap-6">
            <Image
              src={personality.image || "/placeholder.svg"}
              alt={personality.name}
              width={80}
              height={80}
              className="rounded-full object-cover border-2 border-amber-300"
            />
            <div className="flex-1">
              <div className="flex items-start justify-between mb-2">
                <div>
                  <h3 className="text-xl font-bold text-amber-900 mb-1">{personality.name}</h3>
                  <div className="flex items-center gap-3 text-sm text-amber-700 mb-2">
                    <span className="font-medium">
                      {formatDate(personality.birth)} - {formatDate(personality.death)}
                    </span>
                    <Badge variant="secondary" className="bg-amber-200 text-amber-800">
                      {personality.period}
                    </Badge>
                  </div>
                </div>
                {personality.featured && (
                  <Badge className="bg-orange-500 text-white">
                    <Star className="w-3 h-3 mr-1" />
                    Featured
                  </Badge>
                )}
              </div>
              <p className="text-amber-800 mb-3 leading-relaxed">{personality.excerpt}</p>
              <div className="flex items-center justify-between">
                <div className="text-sm text-amber-700">
                  <span className="font-medium">Key Achievement:</span> {personality.significance}
                </div>
                <Link href={`/soorme/${personality.category}/${personality.slug}`} className="text-orange-600 hover:text-orange-800 font-medium">
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
              width={60}
              height={60}
              className="rounded-full object-cover flex-shrink-0 border-2 border-amber-200"
            />
            {personality.featured && (
              <div className="absolute -top-1 -right-1 w-5 h-5 bg-orange-500 rounded-full flex items-center justify-center">
                <Star className="w-3 h-3 text-white" />
              </div>
            )}
          </div>
          <div className="min-w-0 flex-1">
            <CardTitle className="text-lg leading-tight mb-1 text-amber-900">{personality.name}</CardTitle>
            <div className="flex items-center gap-2 text-sm text-amber-700 mb-2">
              <span className="font-medium">
                {formatDate(personality.birth)} - {formatDate(personality.death)}
              </span>
            </div>
            <Badge variant="secondary" className="text-xs bg-amber-200 text-amber-800 border-amber-300">
              {personality.period}
            </Badge>
          </div>
        </div>
      </CardHeader>
      <CardContent className="pt-0">
        <CardDescription className="text-sm leading-relaxed text-amber-800 mb-3">{personality.excerpt}</CardDescription>
        <div className="text-xs text-amber-700 mb-3">
          <span className="font-medium">Significance:</span> {personality.significance}
        </div>
        <Link
          href={`/soorme/${personality.category}/${personality.slug}`}
          className="inline-flex items-center text-sm font-medium text-orange-600 hover:text-orange-800 transition-colors"
        >
          Read full story →
        </Link>
      </CardContent>
    </Card>
  )
}

export async function generateStaticParams() {
  const raw = await fs.readFile(path.join(process.cwd(), "public/generated/categories.json"), "utf-8");
  const all = JSON.parse(raw);
  return all.categories.map((c: any) => ({ category: c.slug }));
}


// ✅ MAIN PAGE COMPONENT
export default async function CategoryPage({ params }: any) {
  const categoryData = await getCategoryData(params.category);
  const personalities = await getCategoryPersonalities(params.category);

  // Mock battleStats and timelinePeriods if not available:
  const battleStats = categoryData.battleStats || [];

  const IconComponent = MAP_ICON[categoryData.icon]

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
                  Add {categoryData.name}
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
              <span className="text-4xl">
                <IconComponent className="w-8 h-8 text-white" />
              </span>
              <span className="text-white font-bold text-lg">SIKH {categoryData.name.toUpperCase()}</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Legendary <span className="text-amber-200">{categoryData.name}</span>
            </h1>

            <p className="text-xl text-orange-100 mb-8 max-w-4xl mx-auto leading-relaxed">{categoryData.description}</p>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {battleStats.map((stat: any, index: any) => {
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


      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <Tabs defaultValue="all" className="space-y-8">
          {/* Controls */}
          <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between">
            <TabsList className="bg-amber-200 border border-amber-300">
              <TabsTrigger value="all" className="data-[state=active]:bg-orange-500 data-[state=active]:text-white">
                All {categoryData.name} ({personalities.length})
              </TabsTrigger>
              <TabsTrigger
                value="featured"
                className="data-[state=active]:bg-orange-500 data-[state=active]:text-white"
              >
                Featured ({personalities.filter((p) => p.featured).length})
              </TabsTrigger>
            </TabsList>

            <div className="flex flex-wrap gap-4 items-center">
              {/* Search */}
              <div className="relative" style={{
                marginTop: "1.5rem",
                
              }}>
                <Searchbar />
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
            </div>
          </div>

          <TabsContent value="all" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {personalities.map((personality) => (
                <PersonalityCard key={personality.slug} personality={personality} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="featured" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {personalities
                .filter((personality) => personality.featured)
                .map((personality) => (
                  <PersonalityCard key={personality.slug} personality={personality} viewMode="list" />
                ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-orange-600 to-amber-600">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <IconComponent className="w-16 h-16 text-white mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-white mb-4">Know More About {categoryData.name}?</h2>
          <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
            Help us preserve the legacy of {categoryData.name} by contributing information about brave souls who fought for
            righteousness and justice.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-orange-600 hover:bg-amber-50" asChild>
              <Link href="/contribute">
                <BookOpen className="w-5 h-5 mr-2" />
                Add more about {categoryData.name}
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
