import {
  ArrowLeft,
  Calendar,
  MapPin,
  Crown,
  Sword,
  BookOpen,
  Book,
  Heart,
  GitBranch,
  Clock,
  Quote,
  Star,
  Shield,
  Eye,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Image from "next/image"
import Link from "next/link"
import fs from "fs/promises"
import path from "path"
import { notFound } from "next/navigation"
import { QuickStats } from "@/components/QuickStats"
import { formatDate } from "@/lib/utils"
import { GITHUB_EDIT_URL, GITHUB_HISTORY_URL } from "@/app/consts"

// Map string icon names to Lucide React components for dynamic icon rendering
const lucideIcons: Record<string, React.FC<any>> = {
  ArrowLeft,
  Calendar,
  MapPin,
  Crown,
  Sword,
  BookOpen,
  Book,
  Heart,
  GitBranch,
  Clock,
  Quote,
  Star,
  Shield,
  Eye,
};

export async function generateStaticParams() {
  const dirPath = path.join(process.cwd(), "data/personalities")
  const entries = await fs.readdir(dirPath, { withFileTypes: true })

  const params = []

  for (const entry of entries) {
    if (!entry.isFile() || !entry.name.endsWith(".json")) continue

    const filePath = path.join(dirPath, entry.name)
    const content = await fs.readFile(filePath, "utf-8")
    const json = JSON.parse(content)

    // Validate expected fields exist
    if (!json.slug || !json.category) {
      console.warn(`Skipping ${entry.name}: Missing slug or category`)
      continue
    }

    params.push({
      slug: json.slug,
      category: json.category,
    })
  }

  return params
}


const timelineColors: Record<string, string> = {
  birth: "bg-green-500",
  milestone: "bg-blue-500",
  personal: "bg-purple-500",
  family: "bg-pink-500",
  battle: "bg-red-500",
  tragedy: "bg-gray-500",
  death: "bg-orange-500",
}

export default async function PersonalityDetailPage({ params }: any) {
  const filePath = path.join(process.cwd(), `data/personalities/${params.slug}.json`)
  let fileContent: string

  try {
    fileContent = await fs.readFile(filePath, 'utf-8')
  } catch (err: any) {
    console.error(err)
    return notFound()
  }

  const personality = JSON.parse(fileContent)
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
              <Button
                variant="outline"
                size="sm"
                className="border-amber-300 text-amber-800 hover:bg-amber-100 bg-transparent"
              >
                <Eye className="w-4 h-4 mr-2" />
                {personality.version.edits} views today
              </Button>
              <Button size="sm" className="bg-orange-500 hover:bg-orange-600 text-white" asChild>
                <Link href={GITHUB_EDIT_URL + params.slug + ".json"} target="_blank">
                  <GitBranch className="w-4 h-4 mr-2" />
                  Edit Page
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-12 bg-gradient-to-br from-orange-600 to-amber-700 relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 border-2 border-white rounded-full"></div>
          <div className="absolute top-20 right-20 w-24 h-24 border-2 border-white rounded-full"></div>
          <div className="absolute bottom-10 left-1/4 w-16 h-16 border-2 border-white rounded-full"></div>
        </div>

        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-3 gap-8 items-center">
            {/* Portrait */}
            <div className="text-center">
              <div className="relative inline-block">
                <Image
                  src={personality.image || "/placeholder.svg"}
                  alt={personality.name}
                  width={300}
                  height={300}
                  className="rounded-full object-cover border-4 border-white shadow-2xl"
                />
                <div className="absolute -top-3 -right-3 w-16 h-16 bg-amber-400 rounded-full flex items-center justify-center border-4 border-white shadow-lg">
                  <Crown className="w-8 h-8 text-amber-800" />
                </div>
              </div>
            </div>

            {/* Main Info */}
            <div className="md:col-span-2 text-white">
              <div className="mb-4">
                {personality.designation && (
                  <Badge className="bg-white/20 text-white border-white/30 mb-4">
                    {personality.designation}
                  </Badge>
                )}
              </div>

              <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">{personality.name}</h1>

              <div className="flex flex-wrap items-center gap-6 text-orange-100 mb-6">
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  <span className="font-medium">
                    {formatDate(personality.birth)}
                    {personality.death && ` – ${formatDate(personality.death)}`}

                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5" />
                  <span>{personality.birthPlace}</span>
                </div>

                <p className="text-xl leading-relaxed text-orange-100 mb-8 max-w-3xl">{personality.excerpt}</p>

                <QuickStats personality={personality} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Version Info Bar */}
      <div className="bg-amber-200 border-b border-amber-300">
        <div className="max-w-6xl mx-auto px-4 py-3">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-4 text-amber-800">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>Last updated: {new Date(personality.version.lastUpdated).toLocaleDateString()}</span>
              </div>
              <div className="flex items-center gap-2">
                <GitBranch className="w-4 h-4" />
                <span>Version {personality.version.version}</span>
              </div>
            </div>
            <Button variant="ghost" size="sm" className="text-amber-800 hover:bg-amber-300" asChild>
              <Link href={GITHUB_HISTORY_URL + personality.slug + ".json"} target="_blank">
                View Edit History →
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <Tabs defaultValue="biography" className="space-y-8">
          <TabsList className="grid w-full grid-cols-5 bg-amber-200 border border-amber-300">
            <TabsTrigger value="biography" className="data-[state=active]:bg-orange-500 data-[state=active]:text-white">
              Biography
            </TabsTrigger>
            <TabsTrigger
              value="achievements"
              className="data-[state=active]:bg-orange-500 data-[state=active]:text-white"
            >
              Achievements
            </TabsTrigger>
            <TabsTrigger value="timeline" className="data-[state=active]:bg-orange-500 data-[state=active]:text-white">
              Timeline
            </TabsTrigger>
            <TabsTrigger value="teachings" className="data-[state=active]:bg-orange-500 data-[state=active]:text-white">
              Teachings
            </TabsTrigger>
            <TabsTrigger value="legacy" className="data-[state=active]:bg-orange-500 data-[state=active]:text-white">
              Legacy
            </TabsTrigger>
          </TabsList>

          {/* Biography Tab */}
          <TabsContent value="biography" className="space-y-8">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="md:col-span-2 space-y-8">
                {Array.isArray(personality.biographySections) && personality.biographySections.length > 0 &&
                  personality.biographySections.map((section: any, idx: number) => {
                    const IconComponent = section.icon && lucideIcons[section.icon] ? lucideIcons[section.icon] : undefined;
                    return (
                      <Card
                        className={`bg-gradient-to-br from-white to-amber-50 border-2 border-amber-200${section.icon === 'Shield' ? ' from-orange-100 to-amber-100 border-orange-300' : ''}${section.icon === 'Heart' ? ' from-red-50 to-orange-50 border-red-200' : ''}`}
                        key={idx}
                      >
                        <CardHeader>
                          <CardTitle className={`flex items-center gap-2 ${section.icon === 'Heart' ? 'text-red-900' : 'text-amber-900'}`}>
                            {IconComponent && <IconComponent className={`w-5 h-5 ${section.icon === 'Heart' ? 'text-red-600' : 'text-orange-600'}`} />}
                            {section.label}
                          </CardTitle>
                          {section.description && (
                            <CardDescription className="text-amber-700">{section.description}</CardDescription>
                          )}
                        </CardHeader>
                        <CardContent>
                          <p className={`${section.icon === 'Heart' ? 'text-red-800' : 'text-amber-800'} leading-relaxed mb-4`}>{section.value}</p>
                          {section.quote && (
                            <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-500">
                              <p className="text-amber-900 font-medium italic">{`"${section.quote}"`}</p>
                            </div>
                          )}
                        </CardContent>
                      </Card>
                    );
                  })}
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                {/* Quick Facts */}
                {Array.isArray(personality.quickFacts) && personality.quickFacts.length > 0 && (
                  <Card className="bg-gradient-to-br from-amber-100 to-orange-100 border-2 border-amber-300">
                    <CardHeader>
                      <CardTitle className="text-amber-900">Quick Facts</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {personality.quickFacts.map((fact: any, idx: number) => (
                        <div key={idx}>
                          <div className="text-sm font-medium text-amber-700">{fact.label}</div>
                          <div className="text-amber-900">{fact.value}</div>
                          {idx < personality.quickFacts.length - 1 && <Separator className="bg-amber-300" />}
                        </div>
                      ))}
                    </CardContent>
                  </Card>
                )}

                {/* Historical Context */}
                <Card className="bg-gradient-to-br from-white to-amber-50 border-2 border-amber-200">
                  <CardHeader>
                    <CardTitle className="text-amber-900">Historical Context</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <div className="text-sm font-medium text-amber-700">Period</div>
                      <div className="text-amber-900 text-sm">{personality.historicalContext.period}</div>
                    </div>
                    <Separator className="bg-amber-200" />
                    <div>
                      <div className="text-sm font-medium text-amber-700">Political Situation</div>
                      <div className="text-amber-900 text-sm leading-relaxed">
                        {personality.historicalContext.politicalSituation}
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Related Personalities */}
                <Card className="bg-gradient-to-br from-white to-amber-50 border-2 border-amber-200">
                  <CardHeader>
                    <CardTitle className="text-amber-900">Related Personalities</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {personality.relatedPersonalities.map((person: any, index: number) => (
                        person.exists ? (
                          <Link
                            key={index}
                            href={`/soorme/${person.category}/${person.slug}`}
                            className="flex items-center gap-3 p-2 rounded-lg hover:bg-amber-100 transition-colors"
                          >
                            <Image
                              src={person.image || "/placeholder.svg"}
                              alt={person.name}
                              width={40}
                              height={40}
                              className="rounded-full border border-amber-300"
                            />
                            <div className="flex-1 min-w-0">
                              <div className="font-medium text-amber-900 text-sm">{person.name}</div>
                              <div className="text-xs text-amber-700">{person.relation}</div>
                              <Link href={`/soorme/${person.category}/${person.slug}`} className="text-xs text-amber-700">Read More</Link>
                            </div>
                          </Link>
                        ) : (
                          <div
                            key={index}
                            className="flex items-center gap-3 p-2 rounded-lg bg-amber-50 border border-amber-200"
                          >
                            <Image
                              src={person.image || "/placeholder.png"}
                              alt={person.name}
                              width={40}
                              height={40}
                              className="rounded-full border border-amber-300 grayscale"
                            />
                            <div className="flex-1 min-w-0">
                              <div className="font-medium text-amber-900 text-sm">{person.name}</div>
                              <div className="text-xs text-amber-700">{person.relation}</div>
                              <Link href={GITHUB_EDIT_URL} target="_blank">
                                <div className="text-[10px] mt-1 text-amber-500 bg-amber-100 inline-block px-2 py-0.5 rounded-full font-medium">
                                  Contribute this profile →
                                </div>
                              </Link>
                            </div>
                          </div>
                        )
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          {/* Achievements Tab */}
          <TabsContent value="achievements" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              {Array.isArray(personality.achievements) && personality.achievements.length > 0 ? (
                personality.achievements.map((achievement: any, index: any) => {
                  const IconComponent = typeof achievement.icon === "string" && lucideIcons[achievement.icon] ? lucideIcons[achievement.icon] : Star;
                  return (
                    <Card
                      key={index}
                      className="bg-gradient-to-br from-white to-amber-50 border-2 border-amber-200 hover:shadow-lg transition-all"
                    >
                      <CardHeader>
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center">
                            <IconComponent className="w-6 h-6 text-white" />
                          </div>
                          <div>
                            <CardTitle className="text-amber-900">{achievement.title}</CardTitle>
                            <Badge variant="outline" className="border-orange-300 text-orange-700 mt-1">
                              {achievement.year}
                            </Badge>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-amber-800 leading-relaxed">{achievement.description}</p>
                      </CardContent>
                    </Card>
                  )
                })
              ) : (
                <div className="text-amber-700">No achievements listed.</div>
              )}
            </div>
          </TabsContent>

          {/* Timeline Tab */}
          <TabsContent value="timeline" className="space-y-6">
            <Card className="bg-gradient-to-br from-white to-amber-50 border-2 border-amber-200">
              <CardHeader>
                <CardTitle className="text-amber-900">Life Timeline</CardTitle>
                <CardDescription className="text-amber-700">
                  Major events in the life of Guru Gobind Singh Ji
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {personality.timeline.map((event: any, index: any) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="flex flex-col items-center">
                        <div
                          className={`w-4 h-4 rounded-full ${timelineColors[event.type]} border-2 border-white shadow-sm`}
                        ></div>
                        {index < personality.timeline.length - 1 && (
                          <div className="w-0.5 h-12 bg-amber-300 mt-2"></div>
                        )}
                      </div>
                      <div className="flex-1 pb-6">
                        <div className="flex items-center gap-3 mb-2">
                          <Badge variant="outline" className="border-amber-300 text-amber-700 text-xs">
                            {event.year}
                          </Badge>
                          <Badge
                            variant="secondary"
                            className={`text-xs capitalize ${event.type === "milestone"
                              ? "bg-blue-100 text-blue-800"
                              : event.type === "battle"
                                ? "bg-red-100 text-red-800"
                                : event.type === "tragedy"
                                  ? "bg-gray-100 text-gray-800"
                                  : "bg-amber-100 text-amber-800"
                              }`}
                          >
                            {event.type}
                          </Badge>
                        </div>
                        <p className="text-amber-900 font-medium">{event.event}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Teachings Tab */}
          <TabsContent value="teachings" className="space-y-6">
            <div className="space-y-6">
              {personality.quotes.map((quote: any, index: any) => (
                <Card key={index} className="bg-gradient-to-br from-orange-50 to-amber-50 border-2 border-orange-200">
                  <CardContent className="p-8">
                    <div className="flex items-start gap-4">
                      <Quote className="w-8 h-8 text-orange-500 flex-shrink-0 mt-2" />
                      <div className="space-y-4">
                        <div className="text-2xl font-bold text-amber-900 font-mono leading-relaxed">
                          {quote.original}
                        </div>
                        <div className="text-lg text-amber-800 italic">{`"${quote.translation}"`}</div>
                        <div className="bg-amber-100 p-4 rounded-lg border-l-4 border-orange-500">
                          <p className="text-amber-800 text-sm leading-relaxed">
                            <span className="font-medium">Context:</span> {quote.context}
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Legacy Tab */}
          <TabsContent value="legacy" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="bg-gradient-to-br from-white to-amber-50 border-2 border-amber-200">
                <CardHeader>
                  <CardTitle className="text-amber-900">Spiritual Legacy</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {personality.spiritualLegacy && (
                    <>
                      <p className="text-amber-800 leading-relaxed">
                        {personality.spiritualLegacy.description}
                      </p>
                      {Array.isArray(personality.spiritualLegacy.keyContributions) && personality.spiritualLegacy.keyContributions.length > 0 && (
                        <div className="bg-amber-100 p-4 rounded-lg">
                          <h4 className="font-semibold text-amber-900 mb-2">Key Spiritual Contributions:</h4>
                          <ul className="text-amber-800 text-sm space-y-1">
                            {personality.spiritualLegacy.keyContributions.map((item: string, idx: number) => (
                              <li key={idx}>• {item}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </>
                  )}
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-white to-amber-50 border-2 border-amber-200">
                <CardHeader>
                  <CardTitle className="text-amber-900">Modern Relevance</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {personality.modernRelevance && (
                    <>
                      <p className="text-amber-800 leading-relaxed">
                        {personality.modernRelevance.description}
                      </p>
                      {Array.isArray(personality.modernRelevance.contemporaryImpact) && personality.modernRelevance.contemporaryImpact.length > 0 && (
                        <div className="bg-orange-100 p-4 rounded-lg">
                          <h4 className="font-semibold text-amber-900 mb-2">Contemporary Impact:</h4>
                          <ul className="text-amber-800 text-sm space-y-1">
                            {personality.modernRelevance.contemporaryImpact.map((item: string, idx: number) => (
                              <li key={idx}>• {item}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </>
                  )}
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-orange-600 to-amber-600">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Help Preserve This Legacy</h2>
          <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
            This article is maintained by our community. Help us improve it by contributing additional information,
            sources, or corrections.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-orange-600 hover:bg-amber-50" asChild>
              <Link href={personality.version.historyUrl} target="_blank">
                <GitBranch className="w-5 h-5 mr-2" />
                Edit This Page
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-orange-600"
              asChild
            >
              <Link href="/contribute">
                <BookOpen className="w-5 h-5 mr-2" />
                Contribution Guide
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
