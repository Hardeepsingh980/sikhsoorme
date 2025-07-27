import {
    ArrowLeft,
    Crown,
    Shield,
    Sword,
    Heart,
    BookOpen,
    Globe,
    Users,
    MapPin,
    Star,
    Eye,
    BarChart3,
    Search,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Image from "next/image"
import Link from "next/link"
import fs from "fs/promises"
import path from "path"
import { MAP_ICON } from "../consts"

const categoriesFilePath = path.join(process.cwd(), "public/generated/categories.json");

type CategoryStats = {
    [key: string]: string | number; // or whatever types your stats values can be
};

async function loadCategories() {
    try {
        const fileContent = await fs.readFile(categoriesFilePath, 'utf-8');
        return JSON.parse(fileContent);
    } catch (err) {
        console.error('Error reading categories file:', err);
        return [];
    }
}

const categoriesData = await loadCategories();

function CategoryCard({ category }: { category: any }) {
    const IconComponent = MAP_ICON[category.icon]

    return (
        <Card
            className={`h-full hover:shadow-xl transition-all duration-300 ${category.lightColor} border-2 ${category.borderColor} hover:scale-105`}
        >
            <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-4">
                    <div className={`w-16 h-16 ${category.color} rounded-full flex items-center justify-center shadow-lg`}>
                        <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-right">
                        <div className="text-3xl font-bold text-amber-900">{category.count}</div>
                        <div className="text-sm text-amber-700">personalities</div>
                    </div>
                </div>

                <div className="flex items-center gap-3 mb-2">
                    <span className="text-3xl">{category.emoji}</span>
                    <CardTitle className={`text-2xl ${category.textColor}`}>{category.name}</CardTitle>
                </div>

                <CardDescription className="text-amber-800 leading-relaxed">{category.description}</CardDescription>
            </CardHeader>

            <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                        <div className="font-medium text-amber-700">Time Span</div>
                        <div className="text-amber-900">{category.timeSpan}</div>
                    </div>
                    <div>
                        <div className="font-medium text-amber-700">Key Period</div>
                        <div className="text-amber-900">{category.keyPeriod}</div>
                    </div>
                </div>

                <Separator className="bg-amber-200" />

                <div>
                    <div className="font-medium text-amber-700 mb-2">Primary Region</div>
                    <Badge variant="outline" className={`${category.borderColor} ${category.textColor}`}>
                        <MapPin className="w-3 h-3 mr-1" />
                        {category.primaryRegion}
                    </Badge>
                </div>

                <div>
                    <div className="font-medium text-amber-700 mb-2">Historical Significance</div>
                    <p className="text-amber-800 text-sm leading-relaxed">{category.significance}</p>
                </div>

                <Link href={`/soorme/${category.slug}`}>
                    <Button className={`w-full ${category.color} hover:opacity-90 text-white`}>
                        <Users className="w-4 h-4 mr-2" />
                        Explore {category.name}
                    </Button>
                </Link>
            </CardContent>
        </Card>
    )
}

function CategoryDetailCard({ category }: { category: any }) {
    const IconComponent = MAP_ICON[category.icon]
    return (
        <Card className={`${category.lightColor} border-2 ${category.borderColor}`}>
            <CardHeader>
                <div className="flex items-center gap-4 mb-4">
                    <div className={`w-12 h-12 ${category.color} rounded-full flex items-center justify-center`}>
                        <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <div>
                        <CardTitle className={`text-xl ${category.textColor}`}>{category.name}</CardTitle>
                        <Badge variant="outline" className={`${category.borderColor} ${category.textColor} mt-1`}>
                            {category.count} personalities
                        </Badge>
                    </div>
                </div>
            </CardHeader>

            <CardContent className="space-y-6">
                <p className="text-amber-800 leading-relaxed">{category.longDescription}</p>

                <div>
                    <h4 className="font-semibold text-amber-900 mb-3">Featured Personalities</h4>
                    <div className="space-y-3">
                        {category.featured.map((person: any, index: number) => (
                            <div key={index} className="flex items-center gap-3 p-2 bg-white/50 rounded-lg">
                                <Image
                                    src={person.image || "/placeholder.svg"}
                                    alt={person.name}
                                    width={40}
                                    height={40}
                                    className="rounded-full border border-amber-300"
                                />
                                <div className="flex-1 min-w-0">
                                    <div className="font-medium text-amber-900 text-sm">{person.name}</div>
                                    <div className="text-xs text-amber-700">{person.years}</div>
                                    <div className="text-xs text-amber-600">{person.achievement}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div>
                    <h4 className="font-semibold text-amber-900 mb-3">Key Contributions</h4>
                    <ul className="space-y-1">
                        {category.keyContributions.map((contribution: string, index: number) => (
                            <li key={index} className="text-amber-800 text-sm flex items-start gap-2">
                                <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 flex-shrink-0"></span>
                                {contribution}
                            </li>
                        ))}
                    </ul>
                </div>

                <div>
                    <h4 className="font-semibold text-amber-900 mb-3">Statistics</h4>
                    <div className="grid grid-cols-2 gap-3 text-sm">
                        {Object.entries(category.stats as CategoryStats).map(([key, value]) => (
                            <div key={key} className="flex justify-between">
                                <span className="text-amber-700 capitalize">{key.replace(/([A-Z])/g, " $1")}</span>
                                <span className="font-medium text-amber-900">{value}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="bg-amber-100 p-4 rounded-lg">
                    <h4 className="font-semibold text-amber-900 mb-2">Historical Context</h4>
                    <p className="text-amber-800 text-sm leading-relaxed">{category.historicalContext}</p>
                </div>
            </CardContent>
        </Card>
    )
}

export default function CategoriesPage() {
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
                                <span>1,847 views this week</span>
                            </div>
                            <Button size="sm" className="bg-orange-500 hover:bg-orange-600 text-white" asChild>
                                <Link href="/contribute">
                                    <BookOpen className="w-4 h-4 mr-2" />
                                    Add Category
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
                        <BarChart3 className="w-5 h-5 text-white" />
                        <span className="text-white font-bold">EXPLORE BY CATEGORY</span>
                    </div>

                    <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                        Six Categories of <span className="text-amber-200">Sikh Heritage</span>
                    </h1>

                    <p className="text-xl text-orange-100 mb-8 max-w-4xl mx-auto leading-relaxed">
                        Discover Sikh personalities organized by their unique contributions to history. From the divine Gurus to
                        modern leaders, explore the diverse roles that shaped Sikh identity and heritage.
                    </p>

                    {/* Overview Stats */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                        <div className="text-center">
                            <div className="text-3xl font-bold text-white mb-1">{categoriesData.overview.totalPersonalities}</div>
                            <div className="text-sm text-orange-200">Total Personalities</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl font-bold text-white mb-1">{categoriesData.overview.totalCategories}</div>
                            <div className="text-sm text-orange-200">Categories</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl font-bold text-white mb-1">{categoriesData.overview.featuredPersonalities}</div>
                            <div className="text-sm text-orange-200">Featured</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl font-bold text-white mb-1">{categoriesData.overview.regions}</div>
                            <div className="text-sm text-orange-200">Regions</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Category Distribution */}
            <section className="py-12 bg-gradient-to-r from-amber-200 to-orange-200">
                <div className="max-w-6xl mx-auto px-4">
                    <Card className="bg-white/90 backdrop-blur-sm border-2 border-amber-200">
                        <CardHeader>
                            <CardTitle className="text-center text-amber-900 text-2xl mb-4">Category Distribution</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-4">
                                {categoriesData.categories.map((category: any, index: number) => {
                                    const percentage = (category.count / categoriesData.overview.totalPersonalities) * 100
                                    return (
                                        <div key={category.id} className="space-y-2">
                                            <div className="flex items-center justify-between">
                                                <div className="flex items-center gap-3">
                                                    <div className={`w-4 h-4 rounded-full ${category.color}`}></div>
                                                    <span className="font-medium text-amber-900">{category.name}</span>
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <span className="text-amber-700 font-bold">{category.count}</span>
                                                    <span className="text-amber-600 text-sm">({percentage.toFixed(1)}%)</span>
                                                </div>
                                            </div>
                                            <Progress value={percentage} className="h-2" />
                                        </div>
                                    )
                                })}
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </section>

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-4 py-12">
                <Tabs defaultValue="overview" className="space-y-8">
                    {/* Navigation */}
                    <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between">
                        <TabsList className="bg-amber-200 border border-amber-300 flex-wrap h-auto">
                            <TabsTrigger
                                value="overview"
                                className="data-[state=active]:bg-orange-500 data-[state=active]:text-white"
                            >
                                Category Overview
                            </TabsTrigger>
                            <TabsTrigger
                                value="detailed"
                                className="data-[state=active]:bg-orange-500 data-[state=active]:text-white"
                            >
                                Detailed View
                            </TabsTrigger>
                            <TabsTrigger
                                value="timeline"
                                className="data-[state=active]:bg-orange-500 data-[state=active]:text-white"
                            >
                                Historical Timeline
                            </TabsTrigger>
                            <TabsTrigger
                                value="statistics"
                                className="data-[state=active]:bg-orange-500 data-[state=active]:text-white"
                            >
                                Statistics
                            </TabsTrigger>
                        </TabsList>

                        <div className="flex gap-4 items-center">
                            <div className="relative">
                                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-amber-600 w-4 h-4" />
                                <Input
                                    placeholder="Search categories..."
                                    className="pl-10 w-64 border-amber-300 focus:border-orange-500 bg-white"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Category Overview */}
                    <TabsContent value="overview" className="space-y-8">
                        <div className="text-center mb-8">
                            <h2 className="text-3xl font-bold text-amber-900 mb-4">Explore All Categories</h2>
                            <p className="text-amber-700 text-lg max-w-3xl mx-auto">
                                Each category represents a unique aspect of Sikh heritage and contribution to history
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {categoriesData.categories.map((category: any) => (
                                <CategoryCard key={category.id} category={category} />
                            ))}
                        </div>
                    </TabsContent>

                    {/* Detailed View */}
                    <TabsContent value="detailed" className="space-y-8">
                        <div className="text-center mb-8">
                            <h2 className="text-3xl font-bold text-amber-900 mb-4">Detailed Category Information</h2>
                            <p className="text-amber-700 text-lg">
                                In-depth exploration of each category with featured personalities
                            </p>
                        </div>

                        <div className="space-y-8">
                            {categoriesData.categories.map((category: any) => (
                                <CategoryDetailCard key={category.id} category={category} />
                            ))}
                        </div>
                    </TabsContent>

                    {/* Timeline View */}
                    <TabsContent value="timeline" className="space-y-8">
                        <div className="text-center mb-8">
                            <h2 className="text-3xl font-bold text-amber-900 mb-4">Historical Timeline by Category</h2>
                            <p className="text-amber-700 text-lg">See how different categories emerged and evolved over time</p>
                        </div>

                        <Card className="bg-gradient-to-r from-amber-100 to-orange-100 border-2 border-amber-200">
                            <CardContent className="p-8">
                                <div className="space-y-8">
                                    {categoriesData.categories.map((category: any, index: number) => {
                                        const IconComponent = MAP_ICON[category.icon]
                                        return (
                                        <div key={category.id} className="relative">
                                            <div className="flex items-center gap-6">
                                                <div className="flex flex-col items-center">
                                                    <div
                                                        className={`w-12 h-12 ${category.color} rounded-full flex items-center justify-center shadow-lg`}
                                                    >
                                                        <IconComponent className="w-6 h-6 text-white" />
                                                    </div>
                                                    {index < categoriesData.categories.length - 1 && (
                                                        <div className="w-0.5 h-16 bg-amber-300 mt-4"></div>
                                                    )}
                                                </div>
                                                <div className="flex-1">
                                                    <div className="flex items-center gap-4 mb-2">
                                                        <h3 className={`text-xl font-bold ${category.textColor}`}>{category.name}</h3>
                                                        <Badge className={`${category.color} text-white`}>{category.timeSpan}</Badge>
                                                    </div>
                                                    <p className="text-amber-800 leading-relaxed mb-3">{category.description}</p>
                                                    <div className="flex items-center gap-4 text-sm text-amber-700">
                                                        <span>Key Period: {category.keyPeriod}</span>
                                                        <span>•</span>
                                                        <span>{category.count} personalities</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )})}
                                </div>
                            </CardContent>
                        </Card>
                    </TabsContent>

                    {/* Statistics */}
                    <TabsContent value="statistics" className="space-y-8">
                        <div className="text-center mb-8">
                            <h2 className="text-3xl font-bold text-amber-900 mb-4">Category Statistics</h2>
                            <p className="text-amber-700 text-lg">Comprehensive analysis of personality distribution and trends</p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {categoriesData.categories.map((category: any) => {
                                const IconComponent = MAP_ICON[category.icon]
                                return (
                                <Card key={category.id} className={`${category.lightColor} border-2 ${category.borderColor}`}>
                                    <CardHeader>
                                        <div className="flex items-center gap-3">
                                            <div className={`w-10 h-10 ${category.color} rounded-full flex items-center justify-center`}>
                                                <IconComponent className="w-5 h-5 text-white" />
                                            </div>
                                            <CardTitle className={`${category.textColor}`}>{category.name}</CardTitle>
                                        </div>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="space-y-4">
                                            <div className="text-center">
                                                <div className="text-3xl font-bold text-amber-900 mb-1">{category.count}</div>
                                                <div className="text-sm text-amber-700">Total Personalities</div>
                                            </div>
                                            <Separator className="bg-amber-200" />
                                            <div className="space-y-2">
                                                {Object.entries(category.stats).map(([key, value]) => (
                                                    <div key={key} className="flex justify-between text-sm">
                                                        <span className="text-amber-700 capitalize">{key.replace(/([A-Z])/g, " $1")}</span>
                                                        <span className="font-medium text-amber-900">{value!.toString()}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            )})}
                        </div>
                    </TabsContent>
                </Tabs>
            </div>

            {/* Call to Action */}
            <section className="py-16 bg-gradient-to-r from-orange-600 to-amber-600">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <Users className="w-16 h-16 text-white mx-auto mb-6" />
                    <h2 className="text-3xl font-bold text-white mb-4">Contribute to Our Categories</h2>
                    <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
                        Help us expand our collection by adding personalities to existing categories or suggesting new categories
                        that represent Sikh heritage.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button size="lg" className="bg-white text-orange-600 hover:bg-amber-50" asChild>
                            <Link href="/contribute">
                                <BookOpen className="w-5 h-5 mr-2" />
                                Add Personality
                            </Link>
                        </Button>
                        <Button
                            size="lg"
                            variant="outline"
                            className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-orange-600"
                            asChild
                        >
                            <Link href="/all">
                                <Star className="w-5 h-5 mr-2" />
                                View All 128 Personalities
                            </Link>
                        </Button>
                    </div>
                </div>
            </section>

        </div>
    )
}
