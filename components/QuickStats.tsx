"use client"

import { Calendar, Users, BookOpen, Crown, Sword, Heart, MapPin, Clock, Star, Trophy } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

interface QuickStat {
  value: string | number
  label: string
  icon?: string
  description?: string
  category?: "time" | "achievement" | "relationship" | "location" | "spiritual" | "military"
  type?: "numeric" | "text" | "list"
}

interface QuickStatsProps {
  personality: {
    name: string
    birth?: string
    death?: string
    category: string
    birthPlace?: string
    deathPlace?: string
    achievements?: any[]
    timeline?: any[]
    quotes?: any[]
    relatedPersonalities?: any[]
    children?: string[]
    spouse?: string[]
    quickStats?: QuickStat[]
  }
}

const iconMap = {
  Calendar,
  Users,
  BookOpen,
  Crown,
  Sword,
  Heart,
  MapPin,
  Clock,
  Star,
  Trophy,
}

export function QuickStats({ personality }: QuickStatsProps) {
  // Generate intelligent stats based on available data
  const generateStats = (): QuickStat[] => {
    const stats: QuickStat[] = []

    // Age calculation
    if (personality.birth && personality.death) {
      const age = Number.parseInt(personality.death) - Number.parseInt(personality.birth)
      stats.push({
        value: age,
        label: "Years Lived",
        icon: "Calendar",
        category: "time",
        type: "numeric",
        description: `Lived from ${personality.birth} to ${personality.death}`,
      })
    }

    // Guruship duration for Gurus
    if (personality.category === "gurus" && personality.birth && personality.death) {
      const gurushipYears = Number.parseInt(personality.death) - Number.parseInt(personality.birth)
      stats.push({
        value: gurushipYears,
        label: "Years as Guru",
        icon: "Crown",
        category: "spiritual",
        type: "numeric",
        description: "Duration of spiritual leadership",
      })
    }

    // Children count
    if (personality.children && personality.children.length > 0) {
      stats.push({
        value: personality.children.length,
        label: personality.children.length === 1 ? "Child" : "Children",
        icon: "Heart",
        category: "relationship",
        type: "numeric",
        description: "Family legacy",
      })
    }

    // Major achievements (limit to top 3 and format as text)
    if (personality.achievements && personality.achievements.length > 0) {
      const topAchievements = personality.achievements.slice(0, 3)
      const achievementText = topAchievements.map((a) => a.title).join(", ")

      stats.push({
        value: achievementText,
        label: "Major Contributions",
        icon: "Trophy",
        category: "achievement",
        type: "text",
        description: `${personality.achievements.length} total achievements documented`,
      })
    }

    // Battles count for Warriors/Military leaders
    if (personality.timeline) {
      const battles = personality.timeline.filter((event: any) => event.type === "battle")
      if (battles.length > 0) {
        stats.push({
          value: battles.length,
          label: battles.length === 1 ? "Major Battle" : "Major Battles",
          icon: "Sword",
          category: "military",
          type: "numeric",
          description: "Military engagements",
        })
      }
    }

    // Literary works count
    if (personality.quotes && personality.quotes.length > 0) {
      stats.push({
        value: personality.quotes.length,
        label: "Recorded Teachings",
        icon: "BookOpen",
        category: "spiritual",
        type: "numeric",
        description: "Preserved wisdom and quotes",
      })
    }

    // Use custom quickStats if provided, otherwise use generated stats
    return personality.quickStats || stats.slice(0, 4) // Limit to 4 most relevant stats
  }

  const stats = generateStats()

  if (stats.length === 0) {
    return null
  }

  const getCategoryColor = (category?: string) => {
    switch (category) {
      case "time":
        return "text-blue-100"
      case "achievement":
        return "text-yellow-100"
      case "relationship":
        return "text-pink-100"
      case "location":
        return "text-green-100"
      case "spiritual":
        return "text-purple-100"
      case "military":
        return "text-red-100"
      default:
        return "text-orange-200"
    }
  }

  const truncateText = (text: string, maxLength = 50) => {
    if (text.length <= maxLength) return text
    return text.substring(0, maxLength).trim() + "..."
  }

  const isNumeric = (value: string | number) => {
    return typeof value === "number" || !isNaN(Number(value))
  }

  return (
    <TooltipProvider>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4">
        {stats.map((stat, index) => {
          const IconComponent = stat.icon ? iconMap[stat.icon as keyof typeof iconMap] : Star
          const isNumericValue = isNumeric(stat.value)
          const displayValue = isNumericValue ? stat.value : truncateText(String(stat.value), 40)

          return (
            <Tooltip key={index}>
              <TooltipTrigger asChild>
                <Card className="bg-white/10 border-white/20 backdrop-blur-sm hover:bg-white/15 transition-all duration-200 cursor-help">
                  <CardContent className="p-3 lg:p-4 text-center">
                    <div className="flex items-center justify-center mb-2">
                      {IconComponent && <IconComponent className="w-4 h-4 lg:w-5 lg:h-5 text-white/80" />}
                    </div>

                    {isNumericValue ? (
                      <div className="text-xl lg:text-2xl font-bold text-white mb-1">{stat.value}</div>
                    ) : (
                      <div className="text-sm lg:text-base font-semibold text-white mb-1 leading-tight min-h-[2.5rem] flex items-center justify-center">
                        {displayValue}
                      </div>
                    )}

                    <div className={`text-xs lg:text-sm font-medium ${getCategoryColor(stat.category)} leading-tight`}>
                      {stat.label}
                    </div>

                    {stat.category && (
                      <Badge
                        variant="outline"
                        className="mt-2 border-white/30 text-white/70 bg-white/5 text-xs hidden lg:inline-flex"
                      >
                        {stat.category}
                      </Badge>
                    )}
                  </CardContent>
                </Card>
              </TooltipTrigger>
              <TooltipContent side="bottom" className="max-w-xs">
                <div className="space-y-1">
                  <p className="font-medium">{stat.label}</p>
                  {stat.description && <p className="text-sm text-muted-foreground">{stat.description}</p>}
                  {!isNumericValue && String(stat.value).length > 40 && (
                    <p className="text-sm text-muted-foreground">Full text: {stat.value}</p>
                  )}
                </div>
              </TooltipContent>
            </Tooltip>
          )
        })}
      </div>
    </TooltipProvider>
  )
}
