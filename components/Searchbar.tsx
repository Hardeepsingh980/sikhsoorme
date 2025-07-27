"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Search } from "lucide-react"
import { Input } from "./ui/input"
import { Button } from "./ui/button"

export default function Searchbar() {
    const [searchQuery, setSearchQuery] = useState("")
    const router = useRouter()

    const handleSearch = () => {
        if (searchQuery.trim()) {
            router.push(`/search?q=${encodeURIComponent(searchQuery)}`)
        }
    }

    return (
        <div className="w-full max-w-xl mx-auto mt-4 px-4 mb-10">
            <div className="relative shadow-lg rounded-full border-2 border-amber-300 bg-white/80 backdrop-blur-md">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-amber-600 w-5 h-5" />

                <Input
                    type="text"
                    placeholder="Search for Sikh personalities..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                    className="pl-12 pr-32 py-4 text-lg border-none bg-transparent focus:ring-0 focus:outline-none rounded-full"
                />

                <Button
                    onClick={handleSearch}
                    className="absolute right-0 top-1/2 -translate-y-1/2 px-5 py-2 rounded-full bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold"
                >
                    Search
                </Button>
            </div>
        </div>

    )
}
