"use client"

import { useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { ArrowRight, Filter, Search } from "lucide-react"
import search from "./actions"
import { Input } from "@/components/ui/input"

const categories = [
    { value: "all", label: "All" },
    { value: "gurus", label: "Gurus" },
    { value: "leaders", label: "Leaders" },
    { value: "warriors", label: "Warriors" },
    { value: "martyrs", label: "Martyrs" },
    { value: "scholars", label: "Scholars" },
    { value: "family", label: "Family" },
    { value: "modern", label: "Modern Era" },
]

export default function SearchPage() {
    const searchParams = useSearchParams()
    const [searchQuery, setSearchQuery] = useState(searchParams.get("q") || "")
    const [selectedCategory, setSelectedCategory] = useState("all")
    const [filteredPersonalities, setFilteredPersonalities] = useState([])
    const [sortBy, setSortBy] = useState("relevance")
    const [selectedTimePeriod, setSelectedTimePeriod] = useState("all")
    const [selectedTags, setSelectedTags] = useState<string[]>([])
    const [showFilters, setShowFilters] = useState(false)

    const hasActiveFilters = selectedCategory !== "all"

    const clearFilters = () => {
        setSelectedCategory("all")
        setSelectedTimePeriod("all")
        setSelectedTags([])
        setSortBy("relevance")
    }

    useEffect(() => {
        const fetchData = async () => {
            const params = new URLSearchParams()
            if (searchQuery.trim()) params.append("q", searchQuery.trim())
            if (selectedCategory !== "all") params.append("category", selectedCategory)
            const res = await search(searchQuery);
            setFilteredPersonalities(res as any || [])
        }
        fetchData()
    }, [searchQuery, selectedCategory])

    return (
        <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50">
            {/* Header */}
            <header className="bg-gradient-to-r from-amber-100 to-orange-100 border-b-2 border-amber-200 shadow-sm">
                <div className="max-w-7xl mx-auto px-4 py-6">
                    <div className="text-center mb-6">
                        <h1 className="text-4xl font-bold text-amber-900 mb-2">Search SikhSoorme</h1>
                        <p className="text-amber-700 text-lg">Discover the heroes and personalities of Sikh heritage</p>
                    </div>

                    {/* Search Bar */}
                    <div className="max-w-2xl mx-auto">
                        <div className="relative">
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-amber-600 w-5 h-5" />
                            <Input
                                type="text"
                                placeholder="Search personalities, places, achievements, or keywords..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="pl-10 pr-4 py-3 text-lg border-2 border-amber-300 focus:border-orange-500 bg-white"
                            />
                        </div>
                    </div>
                </div>
            </header>
            <div className="max-w-7xl mx-auto px-4 py-8">
                <div className="grid lg:grid-cols-4 gap-8">
                    <div className="lg:col-span-1">
                        <div className="sticky top-8">
                            <Card className="bg-white border-2 border-amber-200">
                                <CardHeader>
                                    <div className="flex items-center justify-between">
                                        <CardTitle className="text-amber-900 flex items-center gap-2">
                                            <Filter className="w-5 h-5" /> Filters
                                        </CardTitle>
                                        {hasActiveFilters && (
                                            <Button
                                                variant="ghost"
                                                size="sm"
                                                onClick={clearFilters}
                                                className="text-orange-600 hover:text-orange-700"
                                            >
                                                Clear All
                                            </Button>
                                        )}
                                    </div>
                                </CardHeader>
                                <CardContent className="space-y-6">
                                    <div>
                                        <label className="text-sm font-medium text-amber-800 mb-2 block">
                                            Category
                                        </label>
                                        <Select
                                            value={selectedCategory}
                                            onValueChange={setSelectedCategory}
                                        >
                                            <SelectTrigger className="border-amber-300">
                                                <SelectValue />
                                            </SelectTrigger>
                                            <SelectContent>
                                                {categories.map((category) => (
                                                    <SelectItem
                                                        key={category.value}
                                                        value={category.value}
                                                    >
                                                        {category.label}
                                                    </SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </div>

                    <div className="lg:col-span-3">
                        <div className="flex items-center justify-between mb-6">
                            <div>
                                <h2 className="text-2xl font-bold text-amber-900">
                                    {filteredPersonalities.length} Results
                                    {searchQuery && (
                                        <span className="text-amber-700 font-normal">
                                            {" "}
                                            for &quot;{searchQuery}&quot;
                                        </span>
                                    )}
                                </h2>
                            </div>
                        </div>

                        {filteredPersonalities.length > 0 ? (
                            <div className="grid md:grid-cols-2 gap-6">
                                {filteredPersonalities.map((personality: any) => (
                                    <Card
                                        key={personality.slug}
                                        className="bg-white border-2 border-amber-200 hover:shadow-lg transition-all hover:border-orange-300 group"
                                    >
                                        <CardContent className="p-6">
                                            <div className="flex gap-4">
                                                <div className="flex-shrink-0">
                                                    <Image
                                                        src={personality.image || "/placeholder.svg"}
                                                        alt={personality.name}
                                                        width={80}
                                                        height={80}
                                                        className="rounded-full object-cover border-2 border-amber-300"
                                                    />
                                                </div>
                                                <div className="flex-1 min-w-0">
                                                    <div className="flex items-start justify-between mb-2">
                                                        <h3 className="text-xl font-bold text-amber-900 group-hover:text-orange-600 transition-colors">
                                                            {personality.name}
                                                        </h3>
                                                        <Badge className="bg-amber-100 text-amber-800 border-amber-300">
                                                            {personality.category}
                                                        </Badge>
                                                    </div>
                                                    <div className="text-sm text-amber-700 mb-3">
                                                        <span>{personality.birth} - {personality.death}</span> |{" "}
                                                        <span>{personality.birthPlace}</span>
                                                    </div>
                                                    <p className="text-amber-800 text-sm leading-relaxed mb-4 line-clamp-3">
                                                        {personality.excerpt}
                                                    </p>
                                                    <Button
                                                        variant="ghost"
                                                        size="sm"
                                                        className="text-orange-600 hover:text-orange-700 hover:bg-orange-50"
                                                        asChild
                                                    >
                                                        <Link href={`/soorme/${personality.category}/${personality.slug}`}>
                                                            Read More <ArrowRight className="w-4 h-4 ml-1" />
                                                        </Link>
                                                    </Button>
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>
                        ) : (
                            <Card className="bg-white border-2 border-amber-200">
                                <CardContent className="p-12 text-center">
                                    <Search className="w-16 h-16 text-amber-400 mx-auto mb-4" />
                                    <h3 className="text-xl font-semibold text-amber-900 mb-2">
                                        No Results Found
                                    </h3>
                                    <p className="text-amber-700 mb-6">
                                        We couldn't find any personalities matching your search criteria.
                                    </p>
                                    {hasActiveFilters && (
                                        <Button
                                            onClick={clearFilters}
                                            className="mt-6 bg-orange-500 hover:bg-orange-600 text-white"
                                        >
                                            Clear All Filters
                                        </Button>
                                    )}
                                </CardContent>
                            </Card>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}
