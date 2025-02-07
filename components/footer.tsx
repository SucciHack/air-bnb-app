"use client"

import Link from "next/link"
import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"

const categories = [
  "Popular",
  "Arts & culture",
  "Outdoors",
  "Mountains",
  "Beach",
  "Unique stays",
  "Categories",
  "Things to do",
  "Travel tips & inspiration",
  "Airbnb-friendly apartments",
]

const footerLinks = {
  Support: [
    "Help Center",
    "AirCover",
    "Anti-discrimination",
    "Disability support",
    "Cancellation options",
    "Report neighborhood concern",
  ],
  Hosting: [
    "Airbnb your home",
    "AirCover for Hosts",
    "Hosting resources",
    "Community forum",
    "Hosting responsibly",
    "Airbnb-friendly apartments",
    "Join a free Hosting class",
    "Find a co-host",
  ],
  Airbnb: ["Newsroom", "New features", "Careers", "Investors", "Gift cards", "Airbnb.org emergency stays"],
}

const destinations = [
  [
    { name: "Canmore", type: "Apartment rentals" },
    { name: "Tucson", type: "Apartment rentals" },
    { name: "Anaheim", type: "House rentals" },
  ],
  [
    { name: "Benalmádena", type: "House rentals" },
    { name: "Jasper", type: "Cabin rentals" },
    { name: "Monterey", type: "Cabin rentals" },
  ],
  [
    { name: "Marbella", type: "Apartment rentals" },
    { name: "Mountain View", type: "Family-friendly rentals" },
    { name: "Paso Robles", type: "Cottage rentals" },
  ],
  [
    { name: "Mijas", type: "House rentals" },
    { name: "Devonport", type: "Cottage rentals" },
    { name: "Santa Barbara", type: "Beach house rentals" },
  ],
  [
    { name: "Prescott", type: "Pet-friendly rentals" },
    { name: "Mallacota", type: "Pet-friendly rentals" },
    { name: "Sonoma", type: "House rentals" },
  ],
  [
    { name: "Scottsdale", type: "Condo rentals" },
    { name: "Ibiza", type: "Vacation rentals" },
    { name: "Show more", type: "" },
  ],
]

export function Footer() {
  const [expandedSections, setExpandedSections] = useState<string[]>([])
  const [showAllCategories, setShowAllCategories] = useState(false)

  const toggleSection = (section: string) => {
    setExpandedSections((prev) => (prev.includes(section) ? prev.filter((s) => s !== section) : [...prev, section]))
  }

  const isSectionExpanded = (section: string) => expandedSections.includes(section)

  return (
    <footer className="border-t pt-8 md:pt-20 bg-[#F6F7F6]">
      <div className="max-w-[1760px] mx-auto px-4 md:px-20">
        <div className="pb-8">
          <h2 className="text-xl md:text-[22px] font-semibold mb-6">Inspiration for future getaways</h2>
          <div className="border-b overflow-x-auto">
            <div className="flex gap-6 pb-3 min-w-max">
              {categories.map((category, index) => (
                <button
                  key={category}
                  className={`pb-3 -mb-[1px] text-sm ${
                    index === 0 ? "border-b border-black font-semibold" : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 pt-6">
            {destinations
              .flat()
              .slice(0, showAllCategories ? undefined : 12)
              .map((item) => (
                <div key={item.name} className="space-y-1">
                  {item.name === "Show more" ? (
                    <button
                      className="text-sm font-medium hover:underline"
                      onClick={() => setShowAllCategories(!showAllCategories)}
                    >
                      {showAllCategories ? "Show less" : "Show more"} {showAllCategories ? "<" : ">"}
                    </button>
                  ) : (
                    <>
                      <Link href="#" className="text-sm font-medium hover:underline">
                        {item.name}
                      </Link>
                      <p className="text-sm text-gray-500">{item.type}</p>
                    </>
                  )}
                </div>
              ))}
          </div>
        </div>
        <div className="py-12 border-t">
          <div className="hidden md:grid md:grid-cols-3 gap-8">
            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title}>
                <h3 className="font-semibold mb-4">{title}</h3>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link}>
                      <Link href="#" className="text-sm text-gray-600 hover:underline">
                        {link}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="md:hidden">
            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title} className="border-b">
                <button className="flex justify-between items-center w-full py-4" onClick={() => toggleSection(title)}>
                  <h3 className="font-semibold">{title}</h3>
                  {isSectionExpanded(title) ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
                </button>
                {isSectionExpanded(title) && (
                  <ul className="space-y-3 pb-4">
                    {links.map((link) => (
                      <li key={link}>
                        <Link href="#" className="text-sm text-gray-600 hover:underline">
                          {link}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

