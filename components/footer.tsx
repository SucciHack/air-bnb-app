import Link from "next/link"

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
  return (
    <footer className="border-t pt-20 bg-[#F6F7F6]">
      <div className="max-w-[1760px] mx-auto px-20">
        <div className="pb-8">
          <h2 className="text-[22px] font-semibold mb-6">Inspiration for future getaways</h2>
          <div className="border-b">
            <div className="flex gap-6 pb-3">
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
          <div className="grid grid-cols-6 pt-6">
            {destinations.map((column, columnIndex) => (
              <div key={columnIndex} className="space-y-4">
                {column.map((item) => (
                  <div key={item.name}>
                    {item.name === "Show more" ? (
                      <button className="text-sm font-medium hover:underline">
                        {item.name} {">"}
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
            ))}
          </div>
        </div>
        <div className="grid grid-cols-3 py-12 border-t">
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
      </div>
    </footer>
  )
}

