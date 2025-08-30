import { Users, BookOpen, GitBranch, Heart, Crown, Sword, Quote, Star, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import Image from "next/image"
import Link from "next/link"
import fs from "fs/promises"
import path from "path"
import Searchbar from "@/components/Searchbar"
import { formatDate } from "@/lib/utils"

const rawHomepageData = await fs.readFile(path.join(process.cwd(), "public/generated/homepageData.json"), "utf-8");
const homepageData = JSON.parse(rawHomepageData);

const { soormaOfTheDay, featuredPersonalities, recentAdditions, categories, historicalQuotes } = homepageData;

function ProfileCard({ personality }: { personality: (typeof featuredPersonalities)[0] }) {
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
            <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-orange-500 rounded-full flex items-center justify-center">
              <span className="text-white text-xs">✦</span>
            </div>
          </div>
          <div className="min-w-0 flex-1">
            <CardTitle className="text-lg leading-tight mb-1 text-amber-900">{personality.name}</CardTitle>
            <div className="flex items-center gap-2 text-sm text-amber-700 mb-2">
              <span className="font-medium">
                {formatDate(personality.birth)} - {formatDate(personality.death)}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Badge variant="secondary" className="text-xs bg-amber-200 text-amber-800 border-amber-300">
                {personality.category}
              </Badge>
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent className="pt-0">
        <CardDescription className="text-sm leading-relaxed text-amber-800 mb-3">{personality.excerpt}</CardDescription>
        <Link
          href={`/soorme/${personality.category}/${personality.slug}`}
          className="inline-flex items-center text-sm font-medium text-orange-600 hover:text-orange-800 transition-colors"
        >
          Read full biography →
        </Link>
      </CardContent>
    </Card>
  )
}

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-amber-100 via-orange-100 to-amber-200 relative overflow-hidden">
        {/* Decorative Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 border-2 border-amber-400 rounded-full"></div>
          <div className="absolute top-20 right-20 w-24 h-24 border-2 border-orange-400 rounded-full"></div>
          <div className="absolute bottom-10 left-1/4 w-16 h-16 border-2 border-amber-500 rounded-full"></div>
        </div>

        <div className="max-w-5xl mx-auto px-4 text-center relative z-10">
          <div className="mb-6">
            <div className="inline-flex items-center gap-2 bg-amber-200 px-4 py-2 rounded-full border border-amber-300 mb-4">
              <Star className="w-4 h-4 text-amber-700" />
              <span className="text-sm font-medium text-amber-800">Preserving Sikh Heritage Since 1469</span>
            </div>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold text-amber-900 mb-6 leading-tight">
            Discover the <span className="text-orange-600">Legendary</span>
            <br />
            <span className="text-orange-700">Sikh Soorme</span>
          </h1>

          <p className="text-xl text-amber-800 mb-8 max-w-4xl mx-auto leading-relaxed font-medium">
            Journey through centuries of valor, wisdom, and sacrifice. Explore the lives of Sikh Gurus, warriors,
            scholars, and martyrs who shaped history with their unwavering faith and extraordinary courage.
          </p>

          <Searchbar />

          {/* Stats */}
          <div className="flex justify-center gap-12 text-amber-800">
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-1">
                <Users className="w-5 h-5 text-orange-600" />
                <span className="text-2xl font-bold"> {homepageData.quickStats.totalPersonalities}</span>
              </div>
              <span className="text-sm font-medium">Personalities</span>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-1">
                <BookOpen className="w-5 h-5 text-orange-600" />
                <span className="text-2xl font-bold"> {homepageData.quickStats.totalCategories}</span>
              </div>
              <span className="text-sm font-medium">Categories</span>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-1">
                <Clock className="w-5 h-5 text-orange-600" />
                <span className="text-2xl font-bold"> {homepageData.quickStats.yearsOfHistory}</span>
              </div>
              <span className="text-sm font-medium">Years of History</span>
            </div>
          </div>
        </div>
      </section>

      {/* Soorma of the Day */}
      <section className="py-16 bg-gradient-to-r from-orange-600 to-amber-600 relative overflow-hidden">
        {/* Decorative Elements */}


        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full border border-white/30 mb-4">
              <Crown className="w-5 h-5 text-white" />
              <span className="text-white font-medium">Featured Today</span>
            </div>
            <h2 className="text-4xl font-bold text-white mb-2">Soorma of the Day</h2>
            <p className="text-orange-100 text-lg">Today we honor a legendary figure from Sikh history</p>
          </div>

          <Card className="max-w-4xl mx-auto bg-gradient-to-br from-white to-amber-50 border-2 border-amber-200 shadow-2xl">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="text-center md:text-left">
                  <div className="flex items-center gap-3 mb-4">
                    <Badge className="bg-orange-500 text-white px-3 py-1">
                      {soormaOfTheDay.category.toUpperCase()}
                    </Badge>
                    <span className="text-amber-700 font-medium">
                      {formatDate(soormaOfTheDay.birth)} - {formatDate(soormaOfTheDay.death)}
                    </span>
                  </div>

                  <h3 className="text-3xl font-bold text-amber-900 mb-4">{soormaOfTheDay.name}</h3>

                  <p className="text-amber-800 text-lg leading-relaxed mb-6">
                    {soormaOfTheDay.excerpt}
                  </p>

                  {
                    soormaOfTheDay.quote && (
                      <div className="bg-amber-100 p-4 rounded-lg border-l-4 border-orange-500 mb-6">
                        <div className="flex items-start gap-3">
                          <Quote className="w-5 h-5 text-orange-600 mt-1 flex-shrink-0" />
                          <div>
                            <p className="text-amber-900 font-medium italic mb-2">{`"${soormaOfTheDay.quote}"`}</p>
                            <p className="text-amber-700 text-sm">{soormaOfTheDay.quoteTranslation}</p>
                          </div>
                        </div>
                      </div>
                    )
                  }

                  <div className="bg-orange-50 p-4 rounded-lg mb-6">
                    <h4 className="font-semibold text-amber-900 mb-2">Historical Significance:</h4>
                    <p className="text-amber-800 text-sm leading-relaxed">{soormaOfTheDay.significance}</p>
                  </div>

                  <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white" asChild>
                    <Link href={`/soorme/${soormaOfTheDay.category}/${soormaOfTheDay.slug}`}>
                      <BookOpen className="w-5 h-5 mr-2" />
                      Read Full Biography
                    </Link>
                  </Button>
                </div>

                <div className="text-center">
                  <div className="relative inline-block">
                    <Image
                      src={soormaOfTheDay.image || "/placeholder.svg"}
                      alt={soormaOfTheDay.name}
                      width={300}
                      height={300}
                      className="rounded-full object-cover border-4 border-amber-300 shadow-xl"
                    />
                    <div className="absolute -top-2 -right-2 w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center border-4 border-white shadow-lg">
                      <Crown className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Historical Quotes */}
      <section className="py-12 bg-gradient-to-r from-amber-200 to-orange-200">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {historicalQuotes.map((quote: any, index: number) => (
              <Card key={index} className="bg-white/80 backdrop-blur-sm border-amber-200 hover:shadow-lg transition-all">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <Quote className="w-8 h-8 text-orange-500 flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-amber-900 font-medium text-lg italic mb-3">{`"${quote.quote}"`}</p>
                      <p className="text-amber-700 text-sm mb-3 font-mono">{quote.translation}</p>
                      <p className="text-orange-600 font-semibold">— {quote.author}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Personalities */}
      <section className="py-20 bg-gradient-to-b from-amber-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-amber-200 px-4 py-2 rounded-full border border-amber-300 mb-6">
              <Sword className="w-5 h-5 text-amber-700 flex-shrink-0" />
              <span className="text-sm font-medium text-amber-800">Hall of Heroes</span>
            </div>
            <h2 className="text-4xl font-bold text-amber-900 mb-4">Featured Personalities</h2>
            <p className="text-amber-700 text-lg max-w-3xl mx-auto leading-relaxed">
              Discover the remarkable lives of those who shaped Sikh history through their valor, wisdom, and unwavering devotion to righteousness
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredPersonalities.map((personality: any) => (
              <ProfileCard key={personality.slug} personality={personality} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" variant="outline" className="border-2 border-orange-500 text-orange-600 hover:bg-orange-500 hover:text-white bg-transparent" asChild>
              <Link href="/all">
                <Users className="w-5 h-5 mr-2" />
                Explore All {homepageData.quickStats.totalPersonalities} Personalities
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20 bg-gradient-to-br from-orange-100 to-amber-100">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-amber-900 mb-4">Explore by Legacy</h2>
            <p className="text-amber-700 text-lg max-w-3xl mx-auto leading-relaxed">
              Browse personalities organized by their unique contributions to Sikh history and society
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category: any) => (
              <Link key={category.slug} href={`/soorme/${category.slug}`} className="group">
                <Card className="text-center hover:shadow-xl transition-all duration-300 group-hover:scale-105 bg-gradient-to-b from-white to-amber-50 border-2 border-amber-200 hover:border-orange-300">
                  <CardContent className="p-8">
                    <div className="text-4xl mb-4">{category.icon}</div>
                    <h3 className="font-bold text-xl text-amber-900 mb-2">{category.name}</h3>
                    <p className="text-amber-700 text-sm mb-3">{category.description}</p>
                    <div className="flex items-center justify-center gap-2 text-orange-600">
                      <span className="font-bold text-lg">{category.count}</span>
                      <span className="text-sm">profiles</span>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Additions & Community Stats */}
      <section className="py-16 bg-gradient-to-r from-amber-200 to-orange-200">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Recent Additions */}
            <Card className="bg-white/90 backdrop-blur-sm border-2 border-amber-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-amber-900">
                  <Clock className="w-5 h-5 text-orange-600" />
                  Recently Added
                </CardTitle>
                <CardDescription className="text-amber-700">
                  New personalities added by our community
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentAdditions.map((addition: any, index: number) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-amber-50 rounded-lg border border-amber-200">
                      <div>
                        <p className="font-medium text-amber-900">{addition.name}</p>
                        <p className="text-sm text-amber-700 capitalize">{addition.category}</p>
                      </div>
                      <Badge variant="outline" className="text-xs border-orange-300 text-orange-700">
                        {addition.addedDays} days ago
                      </Badge>
                    </div>
                  ))}
                </div>
                <Button variant="outline" className="w-full mt-4 border-orange-300 text-orange-600 hover:bg-orange-50 bg-transparent" asChild>
                  <Link href="/recent">View All Recent Additions</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Community Impact */}
            <Card className="bg-white/90 backdrop-blur-sm border-2 border-amber-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-amber-900">
                  <Heart className="w-5 h-5 text-orange-600" />
                  Community Impact
                </CardTitle>
                <CardDescription className="text-amber-700">
                  Built together by Sikh heritage enthusiasts
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-orange-600 mb-1">47</div>
                    <p className="text-sm text-amber-700">Active Contributors</p>
                  </div>
                  <Separator className="bg-amber-200" />
                  <div className="text-center">
                    <div className="text-3xl font-bold text-orange-600 mb-1">1,247</div>
                    <p className="text-sm text-amber-700">Content Edits</p>
                  </div>
                  <Separator className="bg-amber-200" />
                  <div className="text-center">
                    <div className="text-3xl font-bold text-orange-600 mb-1">23</div>
                    <p className="text-sm text-amber-700">Languages Supported</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contribution CTA */}
      <section className="py-20 bg-gradient-to-br from-orange-600 to-amber-700 relative overflow-hidden">


        <div className="max-w-5xl mx-auto px-4 text-center relative z-10">
          <div className="mb-8">
            <Heart className="w-16 h-16 text-white mx-auto mb-6" />
            <h2 className="text-4xl font-bold text-white mb-4">Preserve Our Sacred Heritage</h2>
            <p className="text-xl text-orange-100 mb-8 max-w-3xl mx-auto leading-relaxed">
              SikhSoorme thrives because of passionate community members like you. Every contribution helps preserve
              and share the inspiring stories of Sikh heroes with future generations worldwide.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <GitBranch className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Add New Personalities</h3>
              <p className="text-orange-100 text-sm">Research and contribute biographies of unsung heroes</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Improve Articles</h3>
              <p className="text-orange-100 text-sm">Enhance existing content with more details and sources</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Translate Content</h3>
              <p className="text-orange-100 text-sm">Help make Sikh heritage accessible in multiple languages</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button size="lg" className="bg-white text-orange-600 hover:bg-amber-50 font-semibold px-8 py-4" asChild>
              <Link href="/contribute">
                <GitBranch className="w-5 h-5 mr-2" />
                Start Contributing Today
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-orange-600 font-semibold px-8 py-4"
              asChild
            >
              <Link href="/guide">
                <BookOpen className="w-5 h-5 mr-2" />
                Contribution Guide
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
