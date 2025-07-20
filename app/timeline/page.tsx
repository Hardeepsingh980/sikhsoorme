import {
    ArrowLeft,
    Calendar,
    Crown,
    Sword,
    Shield,
    BookOpen,
    Heart,
    Star,
    MapPin,
    Users,
    Filter,
    Search,
    ChevronDown,
    ExternalLink,
  } from "lucide-react"
  import { Button } from "@/components/ui/button"
  import { Input } from "@/components/ui/input"
  import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
  import { Badge } from "@/components/ui/badge"
  import { Separator } from "@/components/ui/separator"
  import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
  import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
  import Image from "next/image"
  import Link from "next/link"
  
  // Timeline data structure - easily maintainable for static sites
  const timelineData = {
    periods: [
      {
        id: "guru-period",
        name: "Guru Period",
        years: "1469-1708",
        description: "The foundation era of Sikhism under the ten Gurus",
        color: "bg-purple-500",
        lightColor: "bg-purple-100",
        textColor: "text-purple-900",
        events: [
          {
            year: 1469,
            month: "April",
            day: 15,
            title: "Birth of Guru Nanak Dev Ji",
            type: "birth",
            importance: "high",
            location: "Talwandi (now Nankana Sahib), Pakistan",
            description:
              "Birth of the founder of Sikhism, who would establish the fundamental principles of the faith and begin the tradition of the ten Gurus.",
            personalities: ["guru-nanak-dev-ji"],
            image: "/placeholder.svg?height=300&width=400",
            details: [
              "Born to Mehta Kalu and Mata Tripta",
              "Showed spiritual inclinations from early childhood",
              "Would later establish the three pillars of Sikhism",
            ],
            significance:
              "Marks the beginning of Sikh history and the birth of a religion that would emphasize equality, service, and devotion to one God.",
          },
          {
            year: 1499,
            month: "Unknown",
            title: "Guru Nanak's Divine Calling",
            type: "spiritual",
            importance: "high",
            location: "Sultanpur, Punjab",
            description:
              "Guru Nanak receives divine revelation at the river Bein, marking the beginning of his mission to spread the message of one God.",
            personalities: ["guru-nanak-dev-ji"],
            image: "/placeholder.svg?height=300&width=400",
            details: [
              "Disappeared for three days at the river",
              "Received the divine message 'There is no Hindu, no Muslim'",
              "Began his missionary journeys (Udasis)",
            ],
            significance: "The foundational moment that launched Sikhism as a distinct religious path.",
          },
          {
            year: 1539,
            month: "September",
            day: 22,
            title: "Guru Nanak's Passing",
            type: "death",
            importance: "high",
            location: "Kartarpur, Punjab",
            description:
              "Guru Nanak Dev Ji passes away, having established Sikhism and appointed Guru Angad Dev Ji as his successor.",
            personalities: ["guru-nanak-dev-ji", "guru-angad-dev-ji"],
            image: "/placeholder.svg?height=300&width=400",
            details: [
              "Established the succession system",
              "Left behind a community of followers",
              "His teachings compiled in hymns",
            ],
            significance: "End of the founder's era and beginning of the Guru succession tradition.",
          },
          {
            year: 1606,
            month: "June",
            day: 15,
            title: "Martyrdom of Guru Arjan Dev Ji",
            type: "martyrdom",
            importance: "high",
            location: "Lahore, Pakistan",
            description:
              "The fifth Sikh Guru becomes the first martyr, tortured and killed by Mughal Emperor Jahangir for refusing to convert to Islam.",
            personalities: ["guru-arjan-dev-ji"],
            image: "/placeholder.svg?height=300&width=400",
            details: [
              "Tortured for five days in extreme heat",
              "Refused to convert to Islam or pay fine",
              "His martyrdom changed Sikh approach to resistance",
            ],
            significance:
              "Marked the beginning of Sikh resistance against religious persecution and the transformation toward a warrior tradition.",
          },
          {
            year: 1606,
            month: "June",
            day: 25,
            title: "Guru Hargobind Ji Becomes Sixth Guru",
            type: "succession",
            importance: "high",
            location: "Amritsar, Punjab",
            description:
              "Guru Hargobind Ji becomes the sixth Guru and establishes the concept of Miri-Piri (temporal and spiritual authority).",
            personalities: ["guru-hargobind-ji"],
            image: "/placeholder.svg?height=300&width=400",
            details: [
              "Wore two swords representing Miri and Piri",
              "Built Akal Takht opposite Harmandir Sahib",
              "Established Sikh military tradition",
            ],
            significance: "Introduction of the warrior-saint concept that would define Sikh identity.",
          },
          {
            year: 1699,
            month: "April",
            day: 13,
            title: "Formation of the Khalsa",
            type: "milestone",
            importance: "high",
            location: "Anandpur Sahib, Punjab",
            description:
              "Guru Gobind Singh Ji creates the Khalsa Panth, transforming Sikhs into a community of saint-soldiers with distinct identity.",
            personalities: ["guru-gobind-singh-ji"],
            image: "/placeholder.svg?height=300&width=400",
            details: [
              "Five volunteers became the first Khalsa (Panj Piare)",
              "Introduced the five Ks (Panj Kakar)",
              "Abolished caste distinctions within Sikhism",
            ],
            significance:
              "The most transformative event in Sikh history, creating the modern Sikh identity and community structure.",
          },
          {
            year: 1708,
            month: "October",
            day: 7,
            title: "Guru Gobind Singh Ji's Passing",
            type: "death",
            importance: "high",
            location: "Nanded, Maharashtra",
            description:
              "The tenth and final human Guru passes away, declaring the Guru Granth Sahib as the eternal Guru of the Sikhs.",
            personalities: ["guru-gobind-singh-ji"],
            image: "/placeholder.svg?height=300&width=400",
            details: [
              "Declared Guru Granth Sahib as eternal Guru",
              "Ended the line of human Gurus",
              "Left the Khalsa as his spiritual successor",
            ],
            significance: "End of the Guru period and beginning of the Guru Granth Sahib era.",
          },
        ],
      },
      {
        id: "banda-singh-period",
        name: "Banda Singh Era",
        years: "1708-1716",
        description: "The first Sikh state under Banda Singh Bahadur's leadership",
        color: "bg-red-500",
        lightColor: "bg-red-100",
        textColor: "text-red-900",
        events: [
          {
            year: 1710,
            month: "May",
            title: "Conquest of Sirhind",
            type: "battle",
            importance: "high",
            location: "Sirhind, Punjab",
            description:
              "Banda Singh Bahadur captures Sirhind, avenging the martyrdom of the younger Sahibzadas and establishing Sikh rule.",
            personalities: ["banda-singh-bahadur"],
            image: "/placeholder.svg?height=300&width=400",
            details: [
              "Defeated Wazir Khan who killed the Sahibzadas",
              "Established first Sikh administrative system",
              "Issued coins in Guru Nanak and Guru Gobind Singh's names",
            ],
            significance: "Establishment of the first Sikh state and administrative system.",
          },
          {
            year: 1716,
            month: "June",
            day: 9,
            title: "Martyrdom of Banda Singh Bahadur",
            type: "martyrdom",
            importance: "high",
            location: "Delhi",
            description:
              "Banda Singh Bahadur is tortured and executed by the Mughals after refusing to convert to Islam.",
            personalities: ["banda-singh-bahadur"],
            image: "/placeholder.svg?height=300&width=400",
            details: [
              "Captured after siege of Gurdas Nangal",
              "Tortured for months in Delhi",
              "Refused to convert despite extreme torture",
            ],
            significance: "End of the first Sikh state but inspiration for future Sikh resistance.",
          },
        ],
      },
      {
        id: "misl-period",
        name: "Misl Period",
        years: "1716-1799",
        description: "Era of Sikh confederacies and the rise of Sikh power in Punjab",
        color: "bg-blue-500",
        lightColor: "bg-blue-100",
        textColor: "text-blue-900",
        events: [
          {
            year: 1748,
            month: "March",
            title: "Formation of Dal Khalsa",
            type: "political",
            importance: "high",
            location: "Amritsar, Punjab",
            description:
              "Sikh forces unite under Dal Khalsa, creating a confederacy of Sikh misls to fight against common enemies.",
            personalities: ["sardar-jassa-singh-ahluwalia"],
            image: "/placeholder.svg?height=300&width=400",
            details: [
              "United various Sikh groups under one banner",
              "Established collective decision-making system",
              "Coordinated resistance against Afghan invasions",
            ],
            significance: "Unity of Sikh forces leading to eventual control of Punjab.",
          },
          {
            year: 1761,
            month: "February",
            title: "Sikh Capture of Delhi",
            type: "victory",
            importance: "high",
            location: "Delhi",
            description:
              "Sikh forces under various misl leaders capture Delhi, demonstrating their growing power and reach.",
            personalities: ["sardar-jassa-singh-ahluwalia", "sardar-baghel-singh"],
            image: "/placeholder.svg?height=300&width=400",
            details: [
              "First time Sikhs controlled the Mughal capital",
              "Built several gurdwaras in Delhi",
              "Demonstrated Sikh military capabilities",
            ],
            significance: "Peak of Sikh military success and territorial expansion.",
          },
        ],
      },
      {
        id: "sikh-empire",
        name: "Sikh Empire",
        years: "1799-1849",
        description: "The golden age of Sikh political power under Maharaja Ranjit Singh",
        color: "bg-yellow-500",
        lightColor: "bg-yellow-100",
        textColor: "text-yellow-900",
        events: [
          {
            year: 1799,
            month: "July",
            day: 7,
            title: "Ranjit Singh Captures Lahore",
            type: "conquest",
            importance: "high",
            location: "Lahore, Pakistan",
            description: "19-year-old Ranjit Singh captures Lahore, beginning the consolidation of the Sikh Empire.",
            personalities: ["maharaja-ranjit-singh"],
            image: "/placeholder.svg?height=300&width=400",
            details: [
              "Unified various Sikh misls under his rule",
              "Established Lahore as his capital",
              "Began modernization of Sikh military",
            ],
            significance: "Beginning of the unified Sikh Empire and end of the misl period.",
          },
          {
            year: 1839,
            month: "June",
            day: 27,
            title: "Death of Maharaja Ranjit Singh",
            type: "death",
            importance: "high",
            location: "Lahore, Pakistan",
            description:
              "The Lion of Punjab passes away, leading to instability and eventual decline of the Sikh Empire.",
            personalities: ["maharaja-ranjit-singh"],
            image: "/placeholder.svg?height=300&width=400",
            details: [
              "Empire at its peak at time of death",
              "Succession disputes followed",
              "Beginning of empire's decline",
            ],
            significance: "End of the golden age of Sikh political power.",
          },
          {
            year: 1849,
            month: "March",
            day: 29,
            title: "Annexation of Punjab",
            type: "defeat",
            importance: "high",
            location: "Punjab",
            description:
              "The British East India Company annexes Punjab after the Second Anglo-Sikh War, ending Sikh rule.",
            personalities: [],
            image: "/placeholder.svg?height=300&width=400",
            details: [
              "End of Sikh political independence",
              "Beginning of British colonial rule",
              "Sikh military dissolved",
            ],
            significance: "End of Sikh political sovereignty and beginning of colonial period.",
          },
        ],
      },
      {
        id: "colonial-period",
        name: "Colonial Period",
        years: "1849-1947",
        description: "Sikh community under British rule and the independence struggle",
        color: "bg-gray-500",
        lightColor: "bg-gray-100",
        textColor: "text-gray-900",
        events: [
          {
            year: 1919,
            month: "April",
            day: 13,
            title: "Jallianwala Bagh Massacre",
            type: "tragedy",
            importance: "high",
            location: "Amritsar, Punjab",
            description:
              "British forces fire on unarmed civilians gathered at Jallianwala Bagh, killing hundreds including many Sikhs.",
            personalities: [],
            image: "/placeholder.svg?height=300&width=400",
            details: [
              "Over 400 killed, 1200 wounded",
              "Sparked nationwide protests",
              "Turned many Sikhs against British rule",
            ],
            significance: "Turning point in Indian independence movement and Sikh political consciousness.",
          },
          {
            year: 1947,
            month: "August",
            day: 15,
            title: "Partition of India",
            type: "political",
            importance: "high",
            location: "Punjab",
            description:
              "India gains independence but Punjab is partitioned, leading to massive displacement of Sikh population.",
            personalities: [],
            image: "/placeholder.svg?height=300&width=400",
            details: [
              "Punjab divided between India and Pakistan",
              "Massive population exchange",
              "Many historical gurdwaras left in Pakistan",
            ],
            significance: "End of colonial rule but beginning of new challenges for Sikh community.",
          },
        ],
      },
      {
        id: "modern-era",
        name: "Modern Era",
        years: "1947-Present",
        description: "Sikhs in independent India and the global diaspora",
        color: "bg-green-500",
        lightColor: "bg-green-100",
        textColor: "text-green-900",
        events: [
          {
            year: 1966,
            month: "November",
            day: 1,
            title: "Formation of Punjab State",
            type: "political",
            importance: "medium",
            location: "Punjab, India",
            description: "Punjab is reorganized as a Punjabi-speaking state, fulfilling a long-standing Sikh demand.",
            personalities: [],
            image: "/placeholder.svg?height=300&width=400",
            details: [
              "Punjabi became official language",
              "Sikh-majority state created",
              "Chandigarh became shared capital",
            ],
            significance: "Political recognition of Punjabi language and Sikh cultural identity.",
          },
          {
            year: 1999,
            month: "April",
            day: 13,
            title: "300th Anniversary of Khalsa",
            type: "celebration",
            importance: "medium",
            location: "Anandpur Sahib, Punjab",
            description:
              "Sikhs worldwide celebrate the tercentenary of the Khalsa with grand celebrations at Anandpur Sahib.",
            personalities: [],
            image: "/placeholder.svg?height=300&width=400",
            details: [
              "Millions of Sikhs gathered",
              "Global Sikh community participation",
              "Renewed focus on Khalsa values",
            ],
            significance: "Celebration of Sikh identity and unity in the modern era.",
          },
        ],
      },
    ],
  }
  
  const eventTypeIcons = {
    birth: Crown,
    death: Heart,
    spiritual: Star,
    martyrdom: Heart,
    succession: Crown,
    milestone: Star,
    battle: Sword,
    victory: Shield,
    conquest: Sword,
    defeat: Shield,
    political: Users,
    tragedy: Heart,
    celebration: Star,
  }
  
  const eventTypeColors = {
    birth: "bg-green-500",
    death: "bg-gray-500",
    spiritual: "bg-purple-500",
    martyrdom: "bg-red-500",
    succession: "bg-blue-500",
    milestone: "bg-yellow-500",
    battle: "bg-red-600",
    victory: "bg-green-600",
    conquest: "bg-orange-500",
    defeat: "bg-gray-600",
    political: "bg-blue-600",
    tragedy: "bg-red-700",
    celebration: "bg-green-400",
  }
  
  function TimelineEvent({ event, isLast = false }: { event: any; isLast?: boolean }) {
    const IconComponent = eventTypeIcons[event.type as keyof typeof eventTypeIcons] || Calendar
    const eventColor = eventTypeColors[event.type as keyof typeof eventTypeColors] || "bg-gray-500"
  
    return (
      <div className="relative">
        <div className="flex items-start gap-6">
          {/* Timeline Line & Icon */}
          <div className="flex flex-col items-center">
            <div className={`w-12 h-12 ${eventColor} rounded-full flex items-center justify-center shadow-lg`}>
              <IconComponent className="w-6 h-6 text-white" />
            </div>
            {!isLast && <div className="w-0.5 h-16 bg-amber-300 mt-4"></div>}
          </div>
  
          {/* Event Content */}
          <div className="flex-1 pb-12">
            <Collapsible>
              <CollapsibleTrigger asChild>
                <Card className="cursor-pointer hover:shadow-lg transition-all bg-gradient-to-r from-amber-50 to-orange-50 border-2 border-amber-200 hover:border-orange-300">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <Badge className={`${eventColor} text-white`}>{event.year}</Badge>
                          {event.month && (
                            <Badge variant="outline" className="border-amber-300 text-amber-700">
                              {event.month} {event.day && event.day}
                            </Badge>
                          )}
                          <Badge
                            variant="secondary"
                            className={`capitalize ${
                              event.importance === "high"
                                ? "bg-orange-200 text-orange-800"
                                : "bg-amber-200 text-amber-800"
                            }`}
                          >
                            {event.type}
                          </Badge>
                        </div>
                        <CardTitle className="text-xl text-amber-900 mb-2">{event.title}</CardTitle>
                        <CardDescription className="text-amber-800 leading-relaxed">{event.description}</CardDescription>
                        <div className="flex items-center gap-2 mt-3 text-sm text-amber-700">
                          <MapPin className="w-4 h-4" />
                          <span>{event.location}</span>
                        </div>
                      </div>
                      <ChevronDown className="w-5 h-5 text-amber-600 ml-4" />
                    </div>
                  </CardHeader>
                </Card>
              </CollapsibleTrigger>
  
              <CollapsibleContent>
                <Card className="mt-4 bg-gradient-to-br from-white to-amber-50 border-2 border-amber-200">
                  <CardContent className="p-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-amber-900 mb-3">Historical Significance</h4>
                        <p className="text-amber-800 leading-relaxed mb-4">{event.significance}</p>
  
                        {event.details && event.details.length > 0 && (
                          <>
                            <h4 className="font-semibold text-amber-900 mb-3">Key Details</h4>
                            <ul className="space-y-2">
                              {event.details.map((detail: string, index: number) => (
                                <li key={index} className="text-amber-800 text-sm flex items-start gap-2">
                                  <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 flex-shrink-0"></span>
                                  {detail}
                                </li>
                              ))}
                            </ul>
                          </>
                        )}
  
                        {event.personalities && event.personalities.length > 0 && (
                          <div className="mt-4">
                            <h4 className="font-semibold text-amber-900 mb-3">Related Personalities</h4>
                            <div className="flex flex-wrap gap-2">
                              {event.personalities.map((slug: string, index: number) => (
                                <Link key={index} href={`/gurus/${slug}`}>
                                  <Badge
                                    variant="outline"
                                    className="border-orange-300 text-orange-700 hover:bg-orange-100 cursor-pointer"
                                  >
                                    {slug.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase())}
                                    <ExternalLink className="w-3 h-3 ml-1" />
                                  </Badge>
                                </Link>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
  
                      {event.image && (
                        <div>
                          <Image
                            src={event.image || "/placeholder.svg"}
                            alt={event.title}
                            width={400}
                            height={300}
                            className="rounded-lg object-cover w-full border-2 border-amber-200"
                          />
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </CollapsibleContent>
            </Collapsible>
          </div>
        </div>
      </div>
    )
  }
  
  export default function TimelinePage() {
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
                <Button size="sm" className="bg-orange-500 hover:bg-orange-600 text-white" asChild>
                  <Link href="/contribute">
                    <BookOpen className="w-4 h-4 mr-2" />
                    Add Event
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
              <Calendar className="w-5 h-5 text-white" />
              <span className="text-white font-bold">HISTORICAL TIMELINE</span>
            </div>
  
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              550 Years of <span className="text-amber-200">Sikh History</span>
            </h1>
  
            <p className="text-xl text-orange-100 mb-8 max-w-4xl mx-auto leading-relaxed">
              Journey through the chronological story of Sikhism, from Guru Nanak's birth in 1469 to the present day.
              Explore major events, personalities, and milestones that shaped Sikh heritage.
            </p>
  
            {/* Timeline Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-1">6</div>
                <div className="text-sm text-orange-200">Historical Periods</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-1">47</div>
                <div className="text-sm text-orange-200">Major Events</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-1">239</div>
                <div className="text-sm text-orange-200">Years of Guru Period</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-1">50</div>
                <div className="text-sm text-orange-200">Years of Empire</div>
              </div>
            </div>
          </div>
        </section>
  
        {/* Period Overview */}
        <section className="py-12 bg-gradient-to-r from-amber-200 to-orange-200">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-amber-900 mb-4">Historical Periods</h2>
              <p className="text-amber-700 text-lg">Overview of major eras in Sikh history</p>
            </div>
  
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {timelineData.periods.map((period, index) => (
                <Card
                  key={period.id}
                  className="bg-white/90 backdrop-blur-sm border-2 border-amber-200 hover:shadow-lg transition-all"
                >
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <div className={`w-4 h-4 rounded-full ${period.color}`}></div>
                      <CardTitle className="text-lg text-amber-900">{period.name}</CardTitle>
                    </div>
                    <Badge variant="outline" className="border-amber-300 text-amber-700 w-fit">
                      {period.years}
                    </Badge>
                  </CardHeader>
                  <CardContent>
                    <p className="text-amber-800 text-sm leading-relaxed mb-4">{period.description}</p>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-amber-700">{period.events.length} major events</span>
                      <Link href={`#${period.id}`} className="text-orange-600 hover:text-orange-800 font-medium">
                        View Events →
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
  
        {/* Controls */}
        <div className="max-w-6xl mx-auto px-4 py-8">
          <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between">
            <div className="flex flex-wrap gap-4 items-center">
              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-amber-600 w-4 h-4" />
                <Input
                  placeholder="Search events..."
                  className="pl-10 w-64 border-amber-300 focus:border-orange-500 bg-white"
                />
              </div>
  
              {/* Period Filter */}
              <Select defaultValue="all-periods">
                <SelectTrigger className="w-48 border-amber-300 bg-white">
                  <Filter className="w-4 h-4 mr-2" />
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all-periods">All Periods</SelectItem>
                  {timelineData.periods.map((period) => (
                    <SelectItem key={period.id} value={period.id}>
                      {period.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
  
              {/* Event Type Filter */}
              <Select defaultValue="all-types">
                <SelectTrigger className="w-40 border-amber-300 bg-white">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all-types">All Types</SelectItem>
                  <SelectItem value="birth">Births</SelectItem>
                  <SelectItem value="death">Deaths</SelectItem>
                  <SelectItem value="battle">Battles</SelectItem>
                  <SelectItem value="milestone">Milestones</SelectItem>
                  <SelectItem value="martyrdom">Martyrdoms</SelectItem>
                </SelectContent>
              </Select>
            </div>
  
            <div className="text-sm text-amber-700">Showing all events • Click events to expand details</div>
          </div>
        </div>
  
        {/* Timeline */}
        <div className="max-w-6xl mx-auto px-4 pb-16">
          {timelineData.periods.map((period, periodIndex) => (
            <div key={period.id} id={period.id} className="mb-16">
              {/* Period Header */}
              <Card className={`${period.lightColor} border-2 border-amber-200 mb-8`}>
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`w-6 h-6 rounded-full ${period.color}`}></div>
                    <h2 className={`text-3xl font-bold ${period.textColor}`}>{period.name}</h2>
                    <Badge className={`${period.color} text-white`}>{period.years}</Badge>
                  </div>
                  <p className={`${period.textColor} text-lg leading-relaxed`}>{period.description}</p>
                </CardContent>
              </Card>
  
              {/* Period Events */}
              <div className="space-y-6">
                {period.events.map((event, eventIndex) => (
                  <TimelineEvent
                    key={`${period.id}-${eventIndex}`}
                    event={event}
                    isLast={eventIndex === period.events.length - 1 && periodIndex === timelineData.periods.length - 1}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
  
        {/* Call to Action */}
        <section className="py-16 bg-gradient-to-r from-orange-600 to-amber-600">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <Calendar className="w-16 h-16 text-white mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-white mb-4">Help Complete Our Timeline</h2>
            <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
              Know of important events or dates that should be included? Help us build the most comprehensive timeline of
              Sikh history.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-orange-600 hover:bg-amber-50" asChild>
                <Link href="/contribute">
                  <BookOpen className="w-5 h-5 mr-2" />
                  Add Historical Event
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-orange-600"
                asChild
              >
                <Link href="/guide">
                  <Star className="w-5 h-5 mr-2" />
                  Contribution Guide
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    )
  }
  