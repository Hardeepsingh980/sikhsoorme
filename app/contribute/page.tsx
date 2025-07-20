import {
    ArrowLeft,
    GitBranch,
    BookOpen,
    Users,
    Heart,
    Star,
    CheckCircle,
    AlertCircle,
    FileText,
    ImageIcon,
    Award,
    Lightbulb,
    MessageSquare,
    Github,
    Mail,
    ExternalLink,
    Upload,
    Edit,
    Search,
    Shield,
    Clock,
    Target,
    Globe,
  } from "lucide-react"
  import { Button } from "@/components/ui/button"
  import { Input } from "@/components/ui/input"
  import { Textarea } from "@/components/ui/textarea"
  import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
  import { Badge } from "@/components/ui/badge"
  import { Separator } from "@/components/ui/separator"
  import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
  import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
  import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
  import { Checkbox } from "@/components/ui/checkbox"
  import { Label } from "@/components/ui/label"
  import Link from "next/link"
  
  // Contribution data structure
  const contributionData = {
    stats: {
      totalContributors: 47,
      totalEdits: 1247,
      personalitiesAdded: 23,
      languagesSupported: 23,
      pendingReviews: 8,
      averageReviewTime: "3 days",
    },
    contributionTypes: [
      {
        id: "add-personality",
        title: "Add New Personality",
        description: "Research and contribute a complete biography of a Sikh personality",
        icon: Users,
        difficulty: "Medium",
        timeEstimate: "2-4 hours",
        requirements: ["Historical research", "Source verification", "Biography writing"],
        reward: "Featured contributor status",
        color: "bg-blue-500",
      },
      {
        id: "improve-content",
        title: "Improve Existing Content",
        description: "Enhance articles with additional information, sources, or corrections",
        icon: Edit,
        difficulty: "Easy",
        timeEstimate: "30-60 minutes",
        requirements: ["Fact checking", "Source citation", "Content editing"],
        reward: "Contributor recognition",
        color: "bg-green-500",
      },
      {
        id: "add-images",
        title: "Add Images & Media",
        description: "Contribute historical images, artwork, or multimedia content",
        icon: ImageIcon,
        difficulty: "Easy",
        timeEstimate: "15-30 minutes",
        requirements: ["Image sourcing", "Copyright verification", "Quality standards"],
        reward: "Media contributor badge",
        color: "bg-purple-500",
      },
      {
        id: "translate-content",
        title: "Translate Content",
        description: "Help make content accessible in multiple languages",
        icon: Globe,
        difficulty: "Medium",
        timeEstimate: "1-2 hours",
        requirements: ["Language fluency", "Cultural knowledge", "Translation accuracy"],
        reward: "Language ambassador status",
        color: "bg-orange-500",
      },
      {
        id: "verify-sources",
        title: "Verify Sources",
        description: "Review and validate historical sources and references",
        icon: Shield,
        difficulty: "Hard",
        timeEstimate: "1-3 hours",
        requirements: ["Historical expertise", "Source analysis", "Academic standards"],
        reward: "Expert reviewer badge",
        color: "bg-red-500",
      },
      {
        id: "community-support",
        title: "Community Support",
        description: "Help other contributors and answer questions",
        icon: MessageSquare,
        difficulty: "Easy",
        timeEstimate: "Ongoing",
        requirements: ["Community engagement", "Helpful attitude", "Knowledge sharing"],
        reward: "Community champion status",
        color: "bg-indigo-500",
      },
    ],
    guidelines: {
      quality: [
        "All information must be historically accurate and verifiable",
        "Sources must be cited using proper academic standards",
        "Content should be written in clear, accessible language",
        "Maintain neutral point of view and avoid bias",
        "Respect cultural sensitivity and religious significance",
      ],
      sources: [
        "Primary historical documents and records",
        "Peer-reviewed academic publications",
        "Established historical texts and biographies",
        "Verified oral histories and testimonies",
        "Reputable museums and cultural institutions",
      ],
      formatting: [
        "Use consistent formatting and structure",
        "Include proper headings and sections",
        "Add relevant categories and tags",
        "Provide image captions and attributions",
        "Follow the established template format",
      ],
    },
    workflow: [
      {
        step: 1,
        title: "Choose Contribution Type",
        description: "Select what type of contribution you'd like to make",
        icon: Target,
      },
      {
        step: 2,
        title: "Research & Prepare",
        description: "Gather information, sources, and materials needed",
        icon: Search,
      },
      {
        step: 3,
        title: "Create Content",
        description: "Write, edit, or prepare your contribution",
        icon: Edit,
      },
      {
        step: 4,
        title: "Submit for Review",
        description: "Submit your contribution through GitHub or email",
        icon: Upload,
      },
      {
        step: 5,
        title: "Community Review",
        description: "Community members and experts review your submission",
        icon: Users,
      },
      {
        step: 6,
        title: "Publication",
        description: "Approved content is published and you get recognition",
        icon: CheckCircle,
      },
    ],
    recentContributions: [
      {
        contributor: "Simran Kaur",
        type: "Added Personality",
        title: "Bhai Kanhaiya Ji",
        date: "2 days ago",
        status: "Published",
      },
      {
        contributor: "Jasbir Singh",
        type: "Improved Content",
        title: "Guru Nanak Dev Ji - Early Life",
        date: "5 days ago",
        status: "Under Review",
      },
      {
        contributor: "Preet Kaur",
        type: "Added Images",
        title: "Historical Gurdwara Photos",
        date: "1 week ago",
        status: "Published",
      },
      {
        contributor: "Harpreet Singh",
        type: "Translation",
        title: "Guru Gobind Singh Ji - Punjabi",
        date: "1 week ago",
        status: "Published",
      },
    ],
    topContributors: [
      {
        name: "Dr. Amarjit Singh",
        contributions: 23,
        speciality: "Historical Research",
        badge: "Expert Historian",
      },
      {
        name: "Simran Kaur",
        contributions: 18,
        speciality: "Content Writing",
        badge: "Master Writer",
      },
      {
        name: "Jasbir Singh Khalsa",
        contributions: 15,
        speciality: "Source Verification",
        badge: "Source Expert",
      },
      {
        name: "Preet Kaur",
        contributions: 12,
        speciality: "Media & Images",
        badge: "Media Specialist",
      },
    ],
  }
  
  function ContributionTypeCard({ type }: { type: any }) {
    const IconComponent = type.icon
  
    return (
      <Card className="h-full hover:shadow-lg transition-all duration-300 bg-gradient-to-b from-amber-50 to-orange-50 border-2 border-amber-200 hover:border-orange-300">
        <CardHeader>
          <div className="flex items-start justify-between mb-4">
            <div className={`w-12 h-12 ${type.color} rounded-full flex items-center justify-center shadow-lg`}>
              <IconComponent className="w-6 h-6 text-white" />
            </div>
            <div className="text-right">
              <Badge
                variant="outline"
                className={`border-amber-300 text-amber-700 ${
                  type.difficulty === "Easy"
                    ? "bg-green-100"
                    : type.difficulty === "Medium"
                      ? "bg-yellow-100"
                      : "bg-red-100"
                }`}
              >
                {type.difficulty}
              </Badge>
            </div>
          </div>
  
          <CardTitle className="text-xl text-amber-900 mb-2">{type.title}</CardTitle>
          <CardDescription className="text-amber-800 leading-relaxed">{type.description}</CardDescription>
        </CardHeader>
  
        <CardContent className="space-y-4">
          <div className="flex items-center gap-2 text-sm text-amber-700">
            <Clock className="w-4 h-4" />
            <span>Estimated time: {type.timeEstimate}</span>
          </div>
  
          <div>
            <div className="font-medium text-amber-700 mb-2">Requirements:</div>
            <ul className="space-y-1">
              {type.requirements.map((req: string, index: number) => (
                <li key={index} className="text-amber-800 text-sm flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 flex-shrink-0"></span>
                  {req}
                </li>
              ))}
            </ul>
          </div>
  
          <div className="bg-amber-100 p-3 rounded-lg">
            <div className="flex items-center gap-2 text-sm">
              <Award className="w-4 h-4 text-orange-600" />
              <span className="font-medium text-amber-900">Reward: {type.reward}</span>
            </div>
          </div>
  
          <Button className={`w-full ${type.color} hover:opacity-90 text-white`}>
            <GitBranch className="w-4 h-4 mr-2" />
            Start Contributing
          </Button>
        </CardContent>
      </Card>
    )
  }
  
  function WorkflowStep({ step, isLast = false }: { step: any; isLast?: boolean }) {
    const IconComponent = step.icon
  
    return (
      <div className="relative">
        <div className="flex items-start gap-6">
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center shadow-lg">
              <IconComponent className="w-6 h-6 text-white" />
            </div>
            {!isLast && <div className="w-0.5 h-16 bg-amber-300 mt-4"></div>}
          </div>
          <div className="flex-1 pb-12">
            <div className="flex items-center gap-3 mb-2">
              <Badge className="bg-amber-200 text-amber-800">Step {step.step}</Badge>
            </div>
            <h3 className="text-xl font-bold text-amber-900 mb-2">{step.title}</h3>
            <p className="text-amber-800 leading-relaxed">{step.description}</p>
          </div>
        </div>
      </div>
    )
  }
  
  export default function ContributePage() {
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
                  size="sm"
                  variant="outline"
                  className="border-amber-300 text-amber-800 hover:bg-amber-100 bg-transparent"
                  asChild
                >
                  <Link href="https://github.com/Hardeepsingh980/sikhsoorme" target="_blank">
                    <Github className="w-4 h-4 mr-2" />
                    GitHub
                  </Link>
                </Button>
                <Button size="sm" className="bg-orange-500 hover:bg-orange-600 text-white" asChild>
                  <Link href="#quick-start">
                    <GitBranch className="w-4 h-4 mr-2" />
                    Quick Start
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </header>
  
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-orange-600 to-amber-700 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-10 w-32 h-32 border-2 border-white rounded-full flex items-center justify-center"></div>
            <div className="absolute top-20 right-20 w-24 h-24 border-2 border-white rounded-full flex items-center justify-center"></div>
            <div className="absolute bottom-10 left-1/4 w-16 h-16 border-2 border-white rounded-full flex items-center justify-center"></div>
          </div>
  
          <div className="max-w-6xl mx-auto px-4 relative z-10 text-center">
            <div className="inline-flex items-center gap-3 bg-white/20 px-6 py-3 rounded-full border border-white/30 mb-6">
              <Heart className="w-5 h-5 text-white" />
              <span className="text-white font-bold">JOIN OUR COMMUNITY</span>
            </div>
  
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Help Preserve <span className="text-amber-200">Sikh Heritage</span>
            </h1>
  
            <p className="text-xl text-orange-100 mb-8 max-w-4xl mx-auto leading-relaxed">
              SikhSoorme thrives because of passionate community members like you. Every contribution helps preserve and
              share the inspiring stories of Sikh heroes with future generations worldwide.
            </p>
  
            {/* Community Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-1">{contributionData.stats.totalContributors}</div>
                <div className="text-sm text-orange-200">Active Contributors</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-1">{contributionData.stats.totalEdits}</div>
                <div className="text-sm text-orange-200">Total Edits</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-1">{contributionData.stats.personalitiesAdded}</div>
                <div className="text-sm text-orange-200">Personalities Added</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-1">{contributionData.stats.languagesSupported}</div>
                <div className="text-sm text-orange-200">Languages</div>
              </div>
            </div>
          </div>
        </section>
  
        {/* Quick Start Alert */}
        <section id="quick-start" className="py-8 bg-gradient-to-r from-amber-200 to-orange-200">
          <div className="max-w-6xl mx-auto px-4">
            <Alert className="bg-white/90 backdrop-blur-sm border-2 border-amber-300">
              <Lightbulb className="h-4 w-4" />
              <AlertTitle className="text-amber-900">Ready to Start Contributing?</AlertTitle>
              <AlertDescription className="text-amber-800">
                New contributors can begin with simple tasks like improving existing content or adding images. For major
                contributions like new personalities, please review our guidelines first.
              </AlertDescription>
            </Alert>
          </div>
        </section>
  
        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 py-12">
          <Tabs defaultValue="types" className="space-y-8">
            {/* Navigation */}
            <TabsList className="bg-amber-200 border border-amber-300 flex-wrap h-auto">
              <TabsTrigger value="types" className="data-[state=active]:bg-orange-500 data-[state=active]:text-white">
                Contribution Types
              </TabsTrigger>
              <TabsTrigger value="workflow" className="data-[state=active]:bg-orange-500 data-[state=active]:text-white">
                How It Works
              </TabsTrigger>
              <TabsTrigger
                value="guidelines"
                className="data-[state=active]:bg-orange-500 data-[state=active]:text-white"
              >
                Guidelines
              </TabsTrigger>
              <TabsTrigger value="form" className="data-[state=active]:bg-orange-500 data-[state=active]:text-white">
                Submit Content
              </TabsTrigger>
              <TabsTrigger value="community" className="data-[state=active]:bg-orange-500 data-[state=active]:text-white">
                Community
              </TabsTrigger>
            </TabsList>
  
            {/* Contribution Types */}
            <TabsContent value="types" className="space-y-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-amber-900 mb-4">Ways to Contribute</h2>
                <p className="text-amber-700 text-lg max-w-3xl mx-auto">
                  Choose the type of contribution that matches your skills and interests
                </p>
              </div>
  
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {contributionData.contributionTypes.map((type) => (
                  <ContributionTypeCard key={type.id} type={type} />
                ))}
              </div>
            </TabsContent>
  
            {/* Workflow */}
            <TabsContent value="workflow" className="space-y-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-amber-900 mb-4">Contribution Workflow</h2>
                <p className="text-amber-700 text-lg">Follow these steps to make your contribution</p>
              </div>
  
              <Card className="bg-gradient-to-r from-amber-100 to-orange-100 border-2 border-amber-200">
                <CardContent className="p-8">
                  <div className="space-y-6">
                    {contributionData.workflow.map((step, index) => (
                      <WorkflowStep key={step.step} step={step} isLast={index === contributionData.workflow.length - 1} />
                    ))}
                  </div>
                </CardContent>
              </Card>
  
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-200">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-green-900">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      Review Process
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3 text-sm">
                      <p className="text-green-800">
                        <strong>Average Review Time:</strong> {contributionData.stats.averageReviewTime}
                      </p>
                      <p className="text-green-800">
                        <strong>Current Queue:</strong> {contributionData.stats.pendingReviews} submissions pending
                      </p>
                      <p className="text-green-800">
                        All submissions are reviewed by community experts and historians to ensure accuracy and quality.
                      </p>
                    </div>
                  </CardContent>
                </Card>
  
                <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-blue-200">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-blue-900">
                      <Github className="w-5 h-5 text-blue-600" />
                      Technical Setup
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3 text-sm">
                      <p className="text-blue-800">
                        <strong>GitHub Account:</strong> Required for major contributions
                      </p>
                      <p className="text-blue-800">
                        <strong>Markdown Knowledge:</strong> Helpful but not required
                      </p>
                      <p className="text-blue-800">
                        Don't have technical skills? No problem! You can submit content via email and we'll help format
                        it.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
  
            {/* Guidelines */}
            <TabsContent value="guidelines" className="space-y-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-amber-900 mb-4">Contribution Guidelines</h2>
                <p className="text-amber-700 text-lg">Standards and best practices for quality contributions</p>
              </div>
  
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="bg-gradient-to-br from-amber-50 to-orange-50 border-2 border-amber-200">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-amber-900">
                      <Star className="w-5 h-5 text-orange-600" />
                      Quality Standards
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {contributionData.guidelines.quality.map((guideline, index) => (
                        <li key={index} className="text-amber-800 text-sm flex items-start gap-2">
                          <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 flex-shrink-0"></span>
                          {guideline}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
  
                <Card className="bg-gradient-to-br from-amber-50 to-orange-50 border-2 border-amber-200">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-amber-900">
                      <BookOpen className="w-5 h-5 text-orange-600" />
                      Source Requirements
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {contributionData.guidelines.sources.map((source, index) => (
                        <li key={index} className="text-amber-800 text-sm flex items-start gap-2">
                          <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 flex-shrink-0"></span>
                          {source}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
  
                <Card className="bg-gradient-to-br from-amber-50 to-orange-50 border-2 border-amber-200">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-amber-900">
                      <FileText className="w-5 h-5 text-orange-600" />
                      Formatting Guidelines
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {contributionData.guidelines.formatting.map((format, index) => (
                        <li key={index} className="text-amber-800 text-sm flex items-start gap-2">
                          <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 flex-shrink-0"></span>
                          {format}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
  
              <Alert className="bg-gradient-to-r from-blue-50 to-indigo-50 border-2 border-blue-200">
                <AlertCircle className="h-4 w-4" />
                <AlertTitle className="text-blue-900">Important Note</AlertTitle>
                <AlertDescription className="text-blue-800">
                  All contributions must respect the cultural and religious significance of Sikh heritage. We maintain
                  strict standards for accuracy and cultural sensitivity. When in doubt, consult with community elders or
                  historians.
                </AlertDescription>
              </Alert>
            </TabsContent>
  
            {/* Submission Form */}
            <TabsContent value="form" className="space-y-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-amber-900 mb-4">Submit Your Contribution</h2>
                <p className="text-amber-700 text-lg">Use this form to submit content or get started with GitHub</p>
              </div>
  
              <div className="grid lg:grid-cols-2 gap-8">
                {/* Quick Submission Form */}
                <Card className="bg-gradient-to-br from-amber-50 to-orange-50 border-2 border-amber-200">
                  <CardHeader>
                    <CardTitle className="text-amber-900">Quick Submission Form</CardTitle>
                    <CardDescription className="text-amber-700">For simple contributions and suggestions</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="contribution-type">Contribution Type</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select contribution type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="new-personality">Add New Personality</SelectItem>
                          <SelectItem value="improve-content">Improve Existing Content</SelectItem>
                          <SelectItem value="add-images">Add Images/Media</SelectItem>
                          <SelectItem value="translation">Translation</SelectItem>
                          <SelectItem value="correction">Correction/Fix</SelectItem>
                          <SelectItem value="suggestion">General Suggestion</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
  
                    <div className="space-y-2">
                      <Label htmlFor="title">Title/Subject</Label>
                      <Input id="title" placeholder="Brief title of your contribution" />
                    </div>
  
                    <div className="space-y-2">
                      <Label htmlFor="description">Description</Label>
                      <Textarea
                        id="description"
                        placeholder="Describe your contribution, include sources if applicable"
                        rows={4}
                      />
                    </div>
  
                    <div className="space-y-2">
                      <Label htmlFor="sources">Sources (Optional)</Label>
                      <Textarea id="sources" placeholder="List your sources and references" rows={3} />
                    </div>
  
                    <div className="space-y-2">
                      <Label htmlFor="contact">Contact Information</Label>
                      <Input id="contact" placeholder="Email or preferred contact method" />
                    </div>
  
                    <div className="flex items-center space-x-2">
                      <Checkbox id="guidelines" />
                      <Label htmlFor="guidelines" className="text-sm">
                        I have read and agree to follow the contribution guidelines
                      </Label>
                    </div>
  
                    <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white">
                      <Mail className="w-4 h-4 mr-2" />
                      Submit Contribution
                    </Button>
                  </CardContent>
                </Card>
  
                {/* GitHub Workflow */}
                <Card className="bg-gradient-to-br from-gray-50 to-slate-50 border-2 border-gray-200">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-gray-900">
                      <Github className="w-5 h-5" />
                      GitHub Workflow
                    </CardTitle>
                    <CardDescription className="text-gray-700">
                      For technical contributors and major additions
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-gray-600 rounded-full flex items-center justify-center text-white text-sm font-bold">
                          1
                        </div>
                        <div>
                          <div className="font-medium text-gray-900">Fork the Repository</div>
                          <div className="text-sm text-gray-700">Create your own copy of the SikhSoorme repository</div>
                        </div>
                      </div>
  
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-gray-600 rounded-full flex items-center justify-center text-white text-sm font-bold">
                          2
                        </div>
                        <div>
                          <div className="font-medium text-gray-900">Create Content</div>
                          <div className="text-sm text-gray-700">Add your personality file using our template</div>
                        </div>
                      </div>
  
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-gray-600 rounded-full flex items-center justify-center text-white text-sm font-bold">
                          3
                        </div>
                        <div>
                          <div className="font-medium text-gray-900">Submit Pull Request</div>
                          <div className="text-sm text-gray-700">Submit your changes for community review</div>
                        </div>
                      </div>
                    </div>
  
                    <Separator className="bg-gray-200" />
  
                    <div className="space-y-3">
                      <Button className="w-full bg-gray-800 hover:bg-gray-900 text-white" asChild>
                        <Link href="https://github.com/Hardeepsingh980/sikhsoorme/content" target="_blank">
                          <Github className="w-4 h-4 mr-2" />
                          View Repository
                          <ExternalLink className="w-4 h-4 ml-2" />
                        </Link>
                      </Button>
  
                      <Button
                        variant="outline"
                        className="w-full border-gray-300 text-gray-700 hover:bg-gray-100 bg-transparent"
                        asChild
                      >
                        <Link href="https://github.com/Hardeepsingh980/sikhsoorme/content/blob/main/TEMPLATE.md" target="_blank">
                          <FileText className="w-4 h-4 mr-2" />
                          Download Template
                          <ExternalLink className="w-4 h-4 ml-2" />
                        </Link>
                      </Button>
                    </div>
  
                    <Alert className="bg-blue-50 border-blue-200">
                      <Lightbulb className="h-4 w-4" />
                      <AlertDescription className="text-blue-800 text-sm">
                        New to GitHub? Check out our{" "}
                        <Link href="/github-guide" className="underline">
                          step-by-step guide
                        </Link>{" "}
                        for beginners.
                      </AlertDescription>
                    </Alert>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
  
            {/* Community */}
            <TabsContent value="community" className="space-y-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-amber-900 mb-4">Our Community</h2>
                <p className="text-amber-700 text-lg">Meet the contributors who make SikhSoorme possible</p>
              </div>
  
              <div className="grid lg:grid-cols-2 gap-8">
                {/* Recent Contributions */}
                <Card className="bg-gradient-to-br from-amber-50 to-orange-50 border-2 border-amber-200">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-amber-900">
                      <Clock className="w-5 h-5 text-orange-600" />
                      Recent Contributions
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {contributionData.recentContributions.map((contribution, index) => (
                        <div key={index} className="flex items-center justify-between p-3 bg-white/50 rounded-lg">
                          <div>
                            <div className="font-medium text-amber-900">{contribution.title}</div>
                            <div className="text-sm text-amber-700">
                              by {contribution.contributor} • {contribution.type}
                            </div>
                            <div className="text-xs text-amber-600">{contribution.date}</div>
                          </div>
                          <Badge
                            variant={contribution.status === "Published" ? "default" : "secondary"}
                            className={
                              contribution.status === "Published"
                                ? "bg-green-500 text-white"
                                : "bg-yellow-200 text-yellow-800"
                            }
                          >
                            {contribution.status}
                          </Badge>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
  
                {/* Top Contributors */}
                <Card className="bg-gradient-to-br from-amber-50 to-orange-50 border-2 border-amber-200">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-amber-900">
                      <Star className="w-5 h-5 text-orange-600" />
                      Top Contributors
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {contributionData.topContributors.map((contributor, index) => (
                        <div key={index} className="flex items-center gap-4 p-3 bg-white/50 rounded-lg">
                          <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold">
                            {index + 1}
                          </div>
                          <div className="flex-1">
                            <div className="font-medium text-amber-900">{contributor.name}</div>
                            <div className="text-sm text-amber-700">{contributor.speciality}</div>
                            <Badge variant="outline" className="border-orange-300 text-orange-700 text-xs mt-1">
                              {contributor.badge}
                            </Badge>
                          </div>
                          <div className="text-right">
                            <div className="text-lg font-bold text-orange-600">{contributor.contributions}</div>
                            <div className="text-xs text-amber-600">contributions</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
  
              {/* Community Guidelines */}
              <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 border-2 border-blue-200">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-blue-900">
                    <Users className="w-5 h-5 text-blue-600" />
                    Community Guidelines
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-blue-900 mb-3">Our Values</h4>
                      <ul className="space-y-2 text-sm">
                        <li className="text-blue-800 flex items-start gap-2">
                          <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                          Respect for Sikh heritage and traditions
                        </li>
                        <li className="text-blue-800 flex items-start gap-2">
                          <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                          Commitment to historical accuracy
                        </li>
                        <li className="text-blue-800 flex items-start gap-2">
                          <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                          Collaborative and inclusive approach
                        </li>
                        <li className="text-blue-800 flex items-start gap-2">
                          <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                          Constructive feedback and support
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-blue-900 mb-3">Get Support</h4>
                      <div className="space-y-3">
                        <Button
                          variant="outline"
                          className="w-full border-blue-300 text-blue-700 hover:bg-blue-100 bg-transparent"
                          asChild
                        >
                          <Link href="mailto:contribute@sikhsoorme.org">
                            <Mail className="w-4 h-4 mr-2" />
                            Email Support
                          </Link>
                        </Button>
                        <Button
                          variant="outline"
                          className="w-full border-blue-300 text-blue-700 hover:bg-blue-100 bg-transparent"
                          asChild
                        >
                          <Link href="https://discord.gg/sikhsoorme" target="_blank">
                            <MessageSquare className="w-4 h-4 mr-2" />
                            Join Discord
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
  
        {/* Call to Action */}
        <section className="py-16 bg-gradient-to-r from-orange-600 to-amber-600">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <Heart className="w-16 h-16 text-white mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Make a Difference?</h2>
            <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
              Every contribution, no matter how small, helps preserve our rich heritage for future generations. Join our
              community of passionate contributors today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-orange-600 hover:bg-amber-50" asChild>
                <Link href="#form">
                  <GitBranch className="w-5 h-5 mr-2" />
                  Start Contributing Now
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-orange-600"
                asChild
              >
                <Link href="https://github.com/Hardeepsingh980/sikhsoorme" target="_blank">
                  <Github className="w-5 h-5 mr-2" />
                  View on GitHub
                </Link>
              </Button>
            </div>
          </div>
        </section>
  
      </div>
    )
  }
  