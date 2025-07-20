import {
    ArrowLeft,
    Heart,
    Users,
    Globe,
    BookOpen,
    Star,
    Target,
    Shield,
    Clock,
    Eye,
    TrendingUp,
    CheckCircle,
  } from "lucide-react"
  import { Button } from "@/components/ui/button"
  import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
  import { Badge } from "@/components/ui/badge"
  import { Separator } from "@/components/ui/separator"
  import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
  import { Progress } from "@/components/ui/progress"
  import Link from "next/link"
  
  // Simplified about data structure
  const aboutData = {
    mission: {
      vision:
        "To create the world's most comprehensive and accessible digital archive of Sikh personalities, preserving their stories for future generations while celebrating the rich heritage of Sikhism.",
      mission:
        "SikhSoorme serves as a bridge between past and present, making the inspiring stories of Sikh heroes accessible to people worldwide through community-driven content and modern technology.",
      values: [
        {
          title: "Historical Accuracy",
          description: "Every story is meticulously researched and verified by community experts and historians",
          icon: Shield,
        },
        {
          title: "Community Driven",
          description: "Built by passionate volunteers who believe in preserving and sharing Sikh heritage",
          icon: Users,
        },
        {
          title: "Cultural Respect",
          description: "Deep reverence for Sikh traditions, values, and the sacred nature of these stories",
          icon: Heart,
        },
        {
          title: "Global Accessibility",
          description: "Making Sikh heritage accessible to people worldwide in multiple languages",
          icon: Globe,
        },
      ],
    },
    story: {
      founding: {
        year: 2023,
        inspiration:
          "The idea for SikhSoorme was born from a simple observation: while Sikh history is rich with inspiring personalities, their stories were scattered across different sources, languages, and formats. Many people, especially younger generations and those in the diaspora, struggled to connect with their heritage.",
      },
      milestones: [
        {
          year: 2023,
          month: "March",
          title: "Project Launch",
          description: "SikhSoorme officially launched with the first collection of personality profiles",
          impact: "Created the foundation for a comprehensive digital archive",
        },
        {
          year: 2023,
          month: "June",
          title: "Community Growth",
          description: "Established a thriving community of contributors and researchers",
          impact: "Built a sustainable model for community-driven content creation",
        },
        {
          year: 2023,
          month: "September",
          title: "Global Recognition",
          description: "Gained recognition from Sikh organizations and educational institutions worldwide",
          impact: "Achieved international awareness and credibility",
        },
        {
          year: 2024,
          month: "January",
          title: "Major Milestone",
          description: "Reached significant scale with comprehensive personality coverage",
          impact: "Became a primary resource for Sikh heritage research and education",
        },
      ],
    },
    impact: {
      statistics: {
        personalities: 128,
        contributors: 47,
        countries: 15,
        languages: 23,
        monthlyVisitors: 25000,
        totalEdits: 1247,
        communitySize: 2500,
      },
      usage: [
        {
          category: "Educational Institutions",
          percentage: 35,
          description: "Schools and universities using SikhSoorme for curriculum and research",
        },
        {
          category: "Individual Learners",
          percentage: 40,
          description: "People exploring their heritage and learning about Sikh history",
        },
        {
          category: "Researchers & Scholars",
          percentage: 15,
          description: "Academic researchers and historians using the platform for studies",
        },
        {
          category: "Community Organizations",
          percentage: 10,
          description: "Gurdwaras and Sikh organizations for community education programs",
        },
      ],
      benefits: [
        "Preserves Sikh heritage for future generations",
        "Makes historical knowledge accessible globally",
        "Connects diaspora communities with their roots",
        "Supports educational institutions and researchers",
        "Promotes understanding of Sikh contributions to history",
        "Builds bridges between different cultures and communities",
      ],
    },
    technology: {
      approach:
        "SikhSoorme is built using modern web technologies with a focus on accessibility, performance, and community collaboration. Our open-source approach ensures transparency and allows the global community to contribute to both content and technical development.",
      stack: [
        {
          category: "Frontend",
          technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
          description: "Modern, responsive user interface with excellent performance and accessibility",
        },
        {
          category: "Content Management",
          technologies: ["Contentlayer", "MDX", "Git-based workflow"],
          description: "Version-controlled content system enabling community contributions and collaboration",
        },
        {
          category: "Hosting & Deployment",
          technologies: ["Vercel", "GitHub", "Global CDN"],
          description: "Fast, reliable hosting with worldwide content delivery and automatic scaling",
        },
        {
          category: "Community Tools",
          technologies: ["GitHub Issues", "Discord", "Email Integration"],
          description: "Comprehensive tools for community collaboration, support, and communication",
        },
      ],
      principles: [
        "Open Source: All code and content are publicly available and transparent",
        "Performance: Fast loading times and excellent user experience across all devices",
        "Accessibility: Designed for users with diverse abilities and technological access",
        "Mobile-First: Optimized for smartphones and tablets used globally",
        "SEO Optimized: Easy to discover through search engines worldwide",
        "Multilingual: Support for multiple languages and writing systems",
        "Community-Centric: Tools and workflows designed for collaborative contribution",
        "Sustainable: Built to last and grow with minimal maintenance overhead",
      ],
    },
    future: {
      roadmap: [
        {
          phase: "Foundation Phase",
          timeline: "2023 - Completed",
          goals: ["Launch platform", "Build core community", "Establish content standards", "Reach 100+ personalities"],
          status: "completed",
        },
        {
          phase: "Growth Phase",
          timeline: "2024 - In Progress",
          goals: ["Expand to 200+ personalities", "Add multimedia content", "Launch mobile app", "Improve accessibility"],
          status: "in-progress",
        },
        {
          phase: "Expansion Phase",
          timeline: "2025 - Planned",
          goals: ["Multi-language support", "Educational partnerships", "Interactive features", "API development"],
          status: "planned",
        },
        {
          phase: "Innovation Phase",
          timeline: "2026+ - Future",
          goals: ["AI-powered research tools", "Immersive experiences", "Global heritage network", "Advanced analytics"],
          status: "future",
        },
      ],
      goals: [
        "Become the definitive digital archive of Sikh personalities worldwide",
        "Support 50+ languages for truly global accessibility",
        "Partner with educational institutions and cultural organizations",
        "Develop innovative technologies for heritage preservation",
        "Build a sustainable model for community-driven cultural preservation",
        "Inspire similar projects for other cultural and religious communities",
      ],
    },
  }
  
  export default function AboutPage() {
    return (
      <div className="min-h-screen bg-gradient-to-b from-amber-50 via-orange-50 to-amber-100">
        {/* Decorative Header Border */}
        <div className="h-2 bg-gradient-to-r from-orange-400 via-amber-500 to-orange-600"></div>
  
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
                  <span>25,000 monthly visitors</span>
                </div>
                <Button size="sm" className="bg-orange-500 hover:bg-orange-600 text-white" asChild>
                  <Link href="/contribute">
                    <Heart className="w-4 h-4 mr-2" />
                    Join Us
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </header>
  
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-orange-600 to-amber-700 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-10 w-32 h-32 border-2 border-white rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-2xl">ਸ</span>
            </div>
            <div className="absolute top-20 right-20 w-24 h-24 border-2 border-white rounded-full"></div>
            <div className="absolute bottom-10 left-1/4 w-16 h-16 border-2 border-white rounded-full"></div>
          </div>
  
          <div className="max-w-6xl mx-auto px-4 relative z-10 text-center">
            <div className="inline-flex items-center gap-3 bg-white/20 px-6 py-3 rounded-full border border-white/30 mb-6">
              <BookOpen className="w-5 h-5 text-white" />
              <span className="text-white font-bold">ABOUT SIKHSOORME</span>
            </div>
  
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Preserving <span className="text-amber-200">Sikh Heritage</span>
              <br />
              for Future Generations
            </h1>
  
            <p className="text-xl text-orange-100 mb-8 max-w-4xl mx-auto leading-relaxed">
              A community-driven digital archive dedicated to preserving and sharing the inspiring stories of Sikh
              personalities who shaped history through their courage, wisdom, and devotion.
            </p>
  
            {/* Key Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-1">{aboutData.impact.statistics.personalities}</div>
                <div className="text-sm text-orange-200">Personalities</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-1">{aboutData.impact.statistics.contributors}</div>
                <div className="text-sm text-orange-200">Contributors</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-1">{aboutData.impact.statistics.countries}</div>
                <div className="text-sm text-orange-200">Countries</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-1">{aboutData.impact.statistics.languages}</div>
                <div className="text-sm text-orange-200">Languages</div>
              </div>
            </div>
          </div>
        </section>
  
        {/* Mission & Vision */}
        <section className="py-16 bg-gradient-to-r from-amber-200 to-orange-200">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-amber-900 mb-4">Our Mission & Vision</h2>
              <p className="text-amber-700 text-lg">What drives us and where we're heading</p>
            </div>
  
            <div className="grid lg:grid-cols-2 gap-8 mb-12">
              <Card className="bg-white/90 backdrop-blur-sm border-2 border-amber-200">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-amber-900">
                    <Target className="w-5 h-5 text-orange-600" />
                    Our Mission
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-amber-800 leading-relaxed">{aboutData.mission.mission}</p>
                </CardContent>
              </Card>
  
              <Card className="bg-white/90 backdrop-blur-sm border-2 border-amber-200">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-amber-900">
                    <Eye className="w-5 h-5 text-orange-600" />
                    Our Vision
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-amber-800 leading-relaxed">{aboutData.mission.vision}</p>
                </CardContent>
              </Card>
            </div>
  
            {/* Core Values */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {aboutData.mission.values.map((value, index) => {
                const IconComponent = value.icon
                return (
                  <Card key={index} className="text-center bg-white/90 backdrop-blur-sm border-2 border-amber-200">
                    <CardHeader>
                      <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                      <CardTitle className="text-lg text-amber-900">{value.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-amber-800 text-sm leading-relaxed">{value.description}</p>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>
  
        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 py-12">
          <Tabs defaultValue="story" className="space-y-8">
            {/* Navigation */}
            <TabsList className="bg-amber-200 border border-amber-300 flex-wrap h-auto">
              <TabsTrigger value="story" className="data-[state=active]:bg-orange-500 data-[state=active]:text-white">
                Our Story
              </TabsTrigger>
              <TabsTrigger value="impact" className="data-[state=active]:bg-orange-500 data-[state=active]:text-white">
                Impact & Reach
              </TabsTrigger>
              <TabsTrigger
                value="technology"
                className="data-[state=active]:bg-orange-500 data-[state=active]:text-white"
              >
                Technology
              </TabsTrigger>
              <TabsTrigger value="future" className="data-[state=active]:bg-orange-500 data-[state=active]:text-white">
                Future Plans
              </TabsTrigger>
            </TabsList>
  
            {/* Our Story */}
            <TabsContent value="story" className="space-y-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-amber-900 mb-4">How SikhSoorme Began</h2>
                <p className="text-amber-700 text-lg">The journey from idea to global community</p>
              </div>
  
              {/* Founding Story */}
              <Card className="bg-gradient-to-r from-amber-100 to-orange-100 border-2 border-amber-200">
                <CardContent className="p-8">
                  <div className="text-center mb-8">
                    <Badge className="bg-orange-500 text-white text-lg px-4 py-2 mb-4">
                      Founded in {aboutData.story.founding.year}
                    </Badge>
                    <p className="text-amber-800 text-lg leading-relaxed max-w-4xl mx-auto">
                      {aboutData.story.founding.inspiration}
                    </p>
                  </div>
                </CardContent>
              </Card>
  
              {/* Timeline */}
              <Card className="bg-gradient-to-br from-white to-amber-50 border-2 border-amber-200">
                <CardHeader>
                  <CardTitle className="text-center text-amber-900 text-2xl">Our Journey</CardTitle>
                  <CardDescription className="text-center text-amber-700">
                    Key milestones in SikhSoorme's development
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-8">
                    {aboutData.story.milestones.map((milestone, index) => (
                      <div key={index} className="relative">
                        <div className="flex items-start gap-6">
                          <div className="flex flex-col items-center">
                            <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center shadow-lg">
                              <Clock className="w-6 h-6 text-white" />
                            </div>
                            {index < aboutData.story.milestones.length - 1 && (
                              <div className="w-0.5 h-16 bg-amber-300 mt-4"></div>
                            )}
                          </div>
                          <div className="flex-1 pb-8">
                            <div className="flex items-center gap-3 mb-2">
                              <Badge className="bg-amber-200 text-amber-800">
                                {milestone.month} {milestone.year}
                              </Badge>
                            </div>
                            <h3 className="text-xl font-bold text-amber-900 mb-2">{milestone.title}</h3>
                            <p className="text-amber-800 leading-relaxed mb-3">{milestone.description}</p>
                            <div className="bg-orange-50 p-3 rounded-lg">
                              <p className="text-orange-800 text-sm">
                                <strong>Impact:</strong> {milestone.impact}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
  
            {/* Impact & Reach */}
            <TabsContent value="impact" className="space-y-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-amber-900 mb-4">Our Impact & Reach</h2>
                <p className="text-amber-700 text-lg">How SikhSoorme is making a difference worldwide</p>
              </div>
  
              {/* Statistics Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                {Object.entries(aboutData.impact.statistics).map(([key, value]) => (
                  <Card
                    key={key}
                    className="text-center bg-gradient-to-b from-amber-50 to-orange-50 border-2 border-amber-200"
                  >
                    <CardContent className="p-6">
                      <div className="text-3xl font-bold text-orange-600 mb-2">{value.toLocaleString()}</div>
                      <div className="text-amber-700 text-sm font-medium capitalize">
                        {key.replace(/([A-Z])/g, " $1").trim()}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
  
              {/* Usage Breakdown */}
              <Card className="bg-gradient-to-r from-amber-100 to-orange-100 border-2 border-amber-200 mb-8">
                <CardHeader>
                  <CardTitle className="text-center text-amber-900">How People Use SikhSoorme</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {aboutData.impact.usage.map((usage, index) => (
                      <div key={index} className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="font-medium text-amber-900">{usage.category}</span>
                          <span className="text-amber-700 font-bold">{usage.percentage}%</span>
                        </div>
                        <Progress value={usage.percentage} className="h-3" />
                        <p className="text-amber-800 text-sm">{usage.description}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
  
              {/* Benefits */}
              <Card className="bg-gradient-to-br from-white to-amber-50 border-2 border-amber-200">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-amber-900">
                    <Star className="w-5 h-5 text-orange-600" />
                    Community Benefits
                  </CardTitle>
                  <CardDescription className="text-amber-700">How SikhSoorme serves the global community</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-4">
                    {aboutData.impact.benefits.map((benefit, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-amber-800 text-sm">{benefit}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
  
            {/* Technology */}
            <TabsContent value="technology" className="space-y-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-amber-900 mb-4">Technology & Approach</h2>
                <p className="text-amber-700 text-lg">How we build and maintain SikhSoorme</p>
              </div>
  
              <Card className="bg-gradient-to-r from-amber-100 to-orange-100 border-2 border-amber-200 mb-8">
                <CardContent className="p-8 text-center">
                  <p className="text-amber-800 text-lg leading-relaxed max-w-4xl mx-auto">
                    {aboutData.technology.approach}
                  </p>
                </CardContent>
              </Card>
  
              {/* Tech Stack */}
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                {aboutData.technology.stack.map((category, index) => (
                  <Card key={index} className="bg-gradient-to-br from-white to-amber-50 border-2 border-amber-200">
                    <CardHeader>
                      <CardTitle className="text-amber-900">{category.category}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {category.technologies.map((tech, techIndex) => (
                          <Badge key={techIndex} variant="outline" className="border-orange-300 text-orange-700">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                      <p className="text-amber-800 text-sm">{category.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
  
              {/* Principles */}
              <Card className="bg-gradient-to-br from-white to-amber-50 border-2 border-amber-200">
                <CardHeader>
                  <CardTitle className="text-amber-900">Our Technical Principles</CardTitle>
                  <CardDescription className="text-amber-700">
                    The values that guide our technical decisions
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-4">
                    {aboutData.technology.principles.map((principle, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-amber-800 text-sm">{principle}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
  
            {/* Future Plans */}
            <TabsContent value="future" className="space-y-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-amber-900 mb-4">Future Plans & Roadmap</h2>
                <p className="text-amber-700 text-lg">Where we're heading and how we'll get there</p>
              </div>
  
              {/* Roadmap */}
              <Card className="bg-gradient-to-r from-amber-100 to-orange-100 border-2 border-amber-200">
                <CardHeader>
                  <CardTitle className="text-amber-900">Development Roadmap</CardTitle>
                  <CardDescription className="text-amber-700">
                    Our planned phases of growth and development
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {aboutData.future.roadmap.map((phase, index) => (
                      <div key={index} className="relative">
                        <div className="flex items-start gap-6">
                          <div className="flex flex-col items-center">
                            <div
                              className={`w-12 h-12 rounded-full flex items-center justify-center shadow-lg ${
                                phase.status === "completed"
                                  ? "bg-green-500"
                                  : phase.status === "in-progress"
                                    ? "bg-orange-500"
                                    : phase.status === "planned"
                                      ? "bg-blue-500"
                                      : "bg-gray-400"
                              }`}
                            >
                              {phase.status === "completed" ? (
                                <CheckCircle className="w-6 h-6 text-white" />
                              ) : phase.status === "in-progress" ? (
                                <Clock className="w-6 h-6 text-white" />
                              ) : phase.status === "planned" ? (
                                <Target className="w-6 h-6 text-white" />
                              ) : (
                                <Star className="w-6 h-6 text-white" />
                              )}
                            </div>
                            {index < aboutData.future.roadmap.length - 1 && (
                              <div className="w-0.5 h-16 bg-amber-300 mt-4"></div>
                            )}
                          </div>
                          <div className="flex-1 pb-8">
                            <div className="flex items-center gap-3 mb-2">
                              <Badge
                                className={
                                  phase.status === "completed"
                                    ? "bg-green-200 text-green-800"
                                    : phase.status === "in-progress"
                                      ? "bg-orange-200 text-orange-800"
                                      : phase.status === "planned"
                                        ? "bg-blue-200 text-blue-800"
                                        : "bg-gray-200 text-gray-800"
                                }
                              >
                                {phase.timeline}
                              </Badge>
                              <Badge variant="outline" className="border-amber-300 text-amber-700 capitalize">
                                {phase.status.replace("-", " ")}
                              </Badge>
                            </div>
                            <h3 className="text-xl font-bold text-amber-900 mb-3">{phase.phase}</h3>
                            <ul className="space-y-1">
                              {phase.goals.map((goal, goalIndex) => (
                                <li key={goalIndex} className="text-amber-800 text-sm flex items-start gap-2">
                                  <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 flex-shrink-0"></span>
                                  {goal}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
  
              {/* Long-term Goals */}
              <Card className="bg-gradient-to-br from-white to-amber-50 border-2 border-amber-200">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-amber-900">
                    <TrendingUp className="w-5 h-5 text-orange-600" />
                    Long-term Goals
                  </CardTitle>
                  <CardDescription className="text-amber-700">
                    Our vision for the future of Sikh heritage preservation
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {aboutData.future.goals.map((goal, index) => (
                      <li key={index} className="text-amber-800 flex items-start gap-3">
                        <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center text-white text-sm font-bold mt-0.5">
                          {index + 1}
                        </div>
                        {goal}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
  
        {/* Call to Action */}
        <section className="py-16 bg-gradient-to-r from-orange-600 to-amber-600">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <Heart className="w-16 h-16 text-white mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-white mb-4">Join Our Mission</h2>
            <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
              Help us preserve Sikh heritage for future generations. Whether you're a researcher, developer, or simply
              passionate about Sikh culture, there's a place for you in our community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-orange-600 hover:bg-amber-50" asChild>
                <Link href="/contribute">
                  <Users className="w-5 h-5 mr-2" />
                  Become a Contributor
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-orange-600"
                asChild
              >
                <Link href="/categories">
                  <BookOpen className="w-5 h-5 mr-2" />
                  Explore Heritage
                </Link>
              </Button>
            </div>
          </div>
        </section>
  
        {/* Footer */}
        <footer className="bg-gradient-to-b from-amber-900 to-orange-900 text-white py-12">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-amber-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">ਸ</span>
                </div>
                <h3 className="text-xl font-bold">SikhSoorme</h3>
              </div>
              <p className="text-orange-200 mb-6">Preserving Sikh Heritage • Built by Community • Inspired by History</p>
              <div className="flex justify-center gap-6 text-orange-200 text-sm">
                <Link href="/privacy" className="hover:text-white transition-colors">
                  Privacy
                </Link>
                <Link href="/license" className="hover:text-white transition-colors">
                  License
                </Link>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </footer>
      </div>
    )
  }
  