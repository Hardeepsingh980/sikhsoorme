import {
  ArrowLeft,
  Calendar,
  MapPin,
  Crown,
  Sword,
  BookOpen,
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

// Sample data - in real app this would come from Contentlayer and GitHub API
const personality = {
  name: "Guru Gobind Singh Ji",
  slug: "guru-gobind-singh-ji",
  category: "gurus",
  birth: "1666",
  death: "1708",
  birthPlace: "Patna Sahib, Bihar",
  deathPlace: "Nanded, Maharashtra",
  image: "/placeholder.svg?height=400&width=400",
  excerpt:
    "The tenth Sikh Guru who founded the Khalsa, transformed the Sikh community into a warrior-saint tradition, and gave the ultimate sacrifice for righteousness and freedom.",

  // Version info from GitHub
  version: {
    lastUpdated: "2025-01-15T10:30:00Z",
    version: "v2.4.1",
    contributors: 12,
    edits: 47,
    historyUrl: "https://github.com/sikhsoorme/content/commits/main/gurus/guru-gobind-singh-ji.mdx",
  },

  // Biographical sections
  biography: {
    earlyLife:
      "Born as Gobind Rai to Guru Tegh Bahadur Ji and Mata Gujri Ji in Patna Sahib on December 22, 1666. His early years were marked by spiritual learning and preparation for the monumental challenges that lay ahead. At the tender age of nine, he witnessed his father's supreme sacrifice for religious freedom, an event that would profoundly shape his worldview and mission.",

    guruship:
      "Became the tenth Sikh Guru at age 9 following his father's martyrdom in 1675. Despite his young age, he displayed remarkable wisdom and leadership, continuing his father's mission of protecting religious freedom and fighting against oppression. He spent his early years as Guru in Anandpur Sahib, where he received extensive education in languages, literature, and martial arts.",

    khalsa:
      "On Vaisakhi day, April 13, 1699, Guru Gobind Singh Ji performed one of the most significant acts in Sikh history - the creation of the Khalsa. In a dramatic ceremony at Anandpur Sahib, he called for volunteers willing to sacrifice their lives for their faith. Five brave souls stepped forward, known as the Panj Piare (Five Beloved Ones), and thus the Khalsa Panth was born.",

    battles:
      "Led numerous battles against the Mughal Empire and hill rajas who sought to suppress Sikh independence. Major battles included the Battle of Bhangani (1688), Battle of Nadaun (1691), and the prolonged siege of Anandpur Sahib (1704-1705). His military genius and strategic acumen helped establish Sikh sovereignty in Punjab.",

    sacrifice:
      "Endured immense personal losses including the martyrdom of all four of his sons - the elder two, Sahibzada Ajit Singh and Jujhar Singh, died fighting at Chamkaur Sahib, while the younger two, Zorawar Singh and Fateh Singh, were bricked alive in Sirhind. Despite these heart-wrenching sacrifices, he never wavered from his mission.",

    legacy:
      "Before his passing in 1708, he declared the Guru Granth Sahib as the eternal Guru of the Sikhs, ending the line of human Gurus. His teachings, compiled in the Dasam Granth, continue to inspire millions. He transformed the Sikh community from a peaceful religious group into a warrior-saint tradition capable of defending righteousness.",
  },

  // Key achievements and contributions
  achievements: [
    {
      title: "Founding of the Khalsa",
      year: "1699",
      description:
        "Established the Khalsa Panth, creating a community of saint-soldiers committed to fighting oppression and upholding righteousness.",
      icon: Crown,
    },
    {
      title: "The Five Ks (Panj Kakar)",
      year: "1699",
      description:
        "Instituted the five symbols of Sikh identity: Kesh, Kara, Kanga, Kachera, and Kirpan, creating a distinct Sikh identity.",
      icon: Star,
    },
    {
      title: "Military Leadership",
      year: "1688-1705",
      description:
        "Led numerous successful military campaigns against Mughal forces and established Sikh sovereignty in Punjab.",
      icon: Sword,
    },
    {
      title: "Literary Contributions",
      year: "1685-1708",
      description:
        "Authored numerous works compiled in Dasam Granth, including Jaap Sahib, Tav-Prasad Savaiye, and Chaupai Sahib.",
      icon: BookOpen,
    },
  ],

  // Famous quotes and teachings
  quotes: [
    {
      original: "ਚਿੜੀਆਂ ਨਾਲ ਮੈਂ ਬਾਜ਼ ਲੜਾਵਾਂ, ਤਬੇ ਗੋਬਿੰਦ ਸਿੰਘ ਨਾਮ ਕਹਾਵਾਂ",
      translation: "I will make sparrows fight hawks, only then will I be called Gobind Singh",
      context: "Expressing his determination to empower the oppressed to fight against tyranny",
    },
    {
      original: "ਸਵਾ ਲਾਖ ਸੇ ਏਕ ਲੜਾਊਂ, ਤਬੇ ਗੋਬਿੰਦ ਸਿੰਘ ਨਾਮ ਕਹਾਊਂ",
      translation: "I will make one fight against 125,000, only then will I be called Gobind Singh",
      context: "Demonstrating his confidence in the spiritual and physical strength of the Khalsa",
    },
    {
      original: "ਦੇਹ ਸਿਵਾ ਬਰ ਮੋਹਿ ਇਹੈ ਸੁਭ ਕਰਮਨ ਤੇ ਕਬਹੂੰ ਨ ਟਰੋਂ",
      translation: "Grant me this boon, O God, that I may never hesitate from righteous acts",
      context: "From his famous prayer seeking divine strength to always stand for righteousness",
    },
  ],

  // Timeline of major events
  timeline: [
    { year: "1666", event: "Born in Patna Sahib", type: "birth" },
    { year: "1675", event: "Became 10th Sikh Guru at age 9", type: "milestone" },
    { year: "1684", event: "Married Mata Jito Ji", type: "personal" },
    { year: "1687", event: "Birth of first son, Sahibzada Jujhar Singh", type: "family" },
    { year: "1688", event: "Battle of Bhangani - first major victory", type: "battle" },
    { year: "1691", event: "Battle of Nadaun", type: "battle" },
    { year: "1699", event: "Founded the Khalsa on Vaisakhi", type: "milestone" },
    { year: "1704", event: "Battle of Chamkaur Sahib", type: "battle" },
    { year: "1705", event: "Martyrdom of elder Sahibzadas", type: "tragedy" },
    { year: "1705", event: "Martyrdom of younger Sahibzadas", type: "tragedy" },
    { year: "1708", event: "Passed away in Nanded", type: "death" },
  ],

  // Related personalities
  relatedPersonalities: [
    {
      name: "Guru Tegh Bahadur Ji",
      relation: "Father",
      image: "/placeholder.svg?height=80&width=80",
      slug: "guru-tegh-bahadur-ji",
    },
    {
      name: "Mata Gujri Ji",
      relation: "Mother",
      image: "/placeholder.svg?height=80&width=80",
      slug: "mata-gujri-ji",
    },
    {
      name: "Sahibzada Ajit Singh",
      relation: "Elder Son",
      image: "/placeholder.svg?height=80&width=80",
      slug: "sahibzada-ajit-singh",
    },
    {
      name: "Bhai Daya Singh",
      relation: "Panj Piare",
      image: "/placeholder.svg?height=80&width=80",
      slug: "bhai-daya-singh",
    },
  ],

  // Historical context
  historicalContext: {
    period: "Mughal Era (1526-1857)",
    politicalSituation:
      "The Mughal Empire under Aurangzeb was at its peak but facing internal rebellions. Religious persecution of non-Muslims was widespread, with forced conversions and destruction of temples being common.",
    socialConditions:
      "Society was deeply divided along religious and caste lines. The common people faced heavy taxation, religious oppression, and social injustice.",
    significance:
      "Guru Gobind Singh Ji's leadership came at a crucial time when organized resistance was needed against tyranny and oppression.",
  },
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

export async function generateStaticParams() {
  return [{
    category: "gurus",
    slug: "guru-gobind-singh-ji",
  }];
}

export default function PersonalityDetailPage({ params }: { params: { category: string; slug: string } }) {
  const { category, slug } = params;


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
              <Button
                variant="outline"
                size="sm"
                className="border-amber-300 text-amber-800 hover:bg-amber-100 bg-transparent"
              >
                <Eye className="w-4 h-4 mr-2" />
                {personality.version.edits} views today
              </Button>
              <Button size="sm" className="bg-orange-500 hover:bg-orange-600 text-white" asChild>
                <Link href={personality.version.historyUrl} target="_blank">
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
                <Badge className="bg-white/20 text-white border-white/30 mb-4">
                  {personality.category.toUpperCase()} • 10TH SIKH GURU
                </Badge>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">{personality.name}</h1>

              <div className="flex flex-wrap items-center gap-6 text-orange-100 mb-6">
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  <span className="font-medium">
                    {personality.birth} - {personality.death}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5" />
                  <span>{personality.birthPlace}</span>
                </div>
              </div>

              <p className="text-xl leading-relaxed text-orange-100 mb-8 max-w-3xl">{personality.excerpt}</p>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">{personality.version.contributors}</div>
                  <div className="text-sm text-orange-200">Contributors</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">{personality.version.edits}</div>
                  <div className="text-sm text-orange-200">Total Edits</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">42</div>
                  <div className="text-sm text-orange-200">Years as Guru</div>
                </div>
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
              <Link href={personality.version.historyUrl} target="_blank">
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
                {/* Early Life */}
                <Card className="bg-gradient-to-br from-white to-amber-50 border-2 border-amber-200">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-amber-900">
                      <Star className="w-5 h-5 text-orange-600" />
                      Early Life & Childhood
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-amber-800 leading-relaxed">{personality.biography.earlyLife}</p>
                  </CardContent>
                </Card>

                {/* Guruship */}
                <Card className="bg-gradient-to-br from-white to-amber-50 border-2 border-amber-200">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-amber-900">
                      <Crown className="w-5 h-5 text-orange-600" />
                      Ascension to Guruship
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-amber-800 leading-relaxed">{personality.biography.guruship}</p>
                  </CardContent>
                </Card>

                {/* Khalsa Formation */}
                <Card className="bg-gradient-to-br from-orange-100 to-amber-100 border-2 border-orange-300">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-amber-900">
                      <Shield className="w-5 h-5 text-orange-600" />
                      Formation of the Khalsa
                    </CardTitle>
                    <CardDescription className="text-amber-700">
                      The most significant event in Sikh history - April 13, 1699
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-amber-800 leading-relaxed mb-4">{personality.biography.khalsa}</p>
                    <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-500">
                      <p className="text-amber-900 font-medium italic">
                        "Today, I have created the Khalsa. The Khalsa shall rule. Their enemies will be scattered. Only
                        they that seek refuge will be saved."
                      </p>
                    </div>
                  </CardContent>
                </Card>

                {/* Military Leadership */}
                <Card className="bg-gradient-to-br from-white to-amber-50 border-2 border-amber-200">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-amber-900">
                      <Sword className="w-5 h-5 text-orange-600" />
                      Military Leadership & Battles
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-amber-800 leading-relaxed">{personality.biography.battles}</p>
                  </CardContent>
                </Card>

                {/* Personal Sacrifices */}
                <Card className="bg-gradient-to-br from-red-50 to-orange-50 border-2 border-red-200">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-red-900">
                      <Heart className="w-5 h-5 text-red-600" />
                      Ultimate Sacrifices
                    </CardTitle>
                    <CardDescription className="text-red-700">The supreme price paid for righteousness</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-red-800 leading-relaxed">{personality.biography.sacrifice}</p>
                  </CardContent>
                </Card>

                {/* Legacy */}
                <Card className="bg-gradient-to-br from-white to-amber-50 border-2 border-amber-200">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-amber-900">
                      <BookOpen className="w-5 h-5 text-orange-600" />
                      Eternal Legacy
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-amber-800 leading-relaxed">{personality.biography.legacy}</p>
                  </CardContent>
                </Card>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                {/* Quick Facts */}
                <Card className="bg-gradient-to-br from-amber-100 to-orange-100 border-2 border-amber-300">
                  <CardHeader>
                    <CardTitle className="text-amber-900">Quick Facts</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <div className="text-sm font-medium text-amber-700">Birth Place</div>
                      <div className="text-amber-900">{personality.birthPlace}</div>
                    </div>
                    <Separator className="bg-amber-300" />
                    <div>
                      <div className="text-sm font-medium text-amber-700">Death Place</div>
                      <div className="text-amber-900">{personality.deathPlace}</div>
                    </div>
                    <Separator className="bg-amber-300" />
                    <div>
                      <div className="text-sm font-medium text-amber-700">Age at Guruship</div>
                      <div className="text-amber-900">9 years old</div>
                    </div>
                    <Separator className="bg-amber-300" />
                    <div>
                      <div className="text-sm font-medium text-amber-700">Duration as Guru</div>
                      <div className="text-amber-900">33 years (1675-1708)</div>
                    </div>
                  </CardContent>
                </Card>

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
                      {personality.relatedPersonalities.map((person, index) => (
                        <Link
                          key={index}
                          href={`/gurus/${person.slug}`}
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
                          </div>
                        </Link>
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
              {personality.achievements.map((achievement, index) => {
                const IconComponent = achievement.icon
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
              })}
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
                  {personality.timeline.map((event, index) => (
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
                            className={`text-xs capitalize ${
                              event.type === "milestone"
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
              {personality.quotes.map((quote, index) => (
                <Card key={index} className="bg-gradient-to-br from-orange-50 to-amber-50 border-2 border-orange-200">
                  <CardContent className="p-8">
                    <div className="flex items-start gap-4">
                      <Quote className="w-8 h-8 text-orange-500 flex-shrink-0 mt-2" />
                      <div className="space-y-4">
                        <div className="text-2xl font-bold text-amber-900 font-mono leading-relaxed">
                          {quote.original}
                        </div>
                        <div className="text-lg text-amber-800 italic">"{quote.translation}"</div>
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
                  <p className="text-amber-800 leading-relaxed">
                    Guru Gobind Singh Ji's spiritual teachings continue to guide millions of Sikhs worldwide. His
                    emphasis on the unity of God, equality of all humans, and the importance of standing against
                    injustice remains as relevant today as it was 300 years ago.
                  </p>
                  <div className="bg-amber-100 p-4 rounded-lg">
                    <h4 className="font-semibold text-amber-900 mb-2">Key Spiritual Contributions:</h4>
                    <ul className="text-amber-800 text-sm space-y-1">
                      <li>• Established the concept of Miri-Piri (temporal and spiritual authority)</li>
                      <li>• Created the Khalsa as a community of saint-soldiers</li>
                      <li>• Declared Guru Granth Sahib as the eternal Guru</li>
                      <li>• Emphasized the importance of righteous warfare</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-white to-amber-50 border-2 border-amber-200">
                <CardHeader>
                  <CardTitle className="text-amber-900">Modern Relevance</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-amber-800 leading-relaxed">
                    In today's world, Guru Gobind Singh Ji's teachings about standing up against oppression, protecting
                    the innocent, and maintaining one's principles in the face of adversity continue to inspire people
                    across all faiths and backgrounds.
                  </p>
                  <div className="bg-orange-100 p-4 rounded-lg">
                    <h4 className="font-semibold text-amber-900 mb-2">Contemporary Impact:</h4>
                    <ul className="text-amber-800 text-sm space-y-1">
                      <li>• Human rights advocacy and social justice movements</li>
                      <li>• Military ethics and righteous warfare principles</li>
                      <li>• Leadership in times of crisis and adversity</li>
                      <li>• Interfaith dialogue and religious tolerance</li>
                    </ul>
                  </div>
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
