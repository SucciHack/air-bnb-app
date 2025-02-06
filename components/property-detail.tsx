"use client"

import Image from "next/image"
import { useState } from "react"
import { Share, Heart, Flag } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const images = [
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-06%20210406-0lJUASQwiTa8vz8Bwo5S0MD9VPPbht.png",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-06%20210406-0lJUASQwiTa8vz8Bwo5S0MD9VPPbht.png",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-06%20210406-0lJUASQwiTa8vz8Bwo5S0MD9VPPbht.png",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-06%20210406-0lJUASQwiTa8vz8Bwo5S0MD9VPPbht.png",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-06%20210406-0lJUASQwiTa8vz8Bwo5S0MD9VPPbht.png",
]

export default function PropertyDetail() {
  const [date, setDate] = useState<Date | undefined>(new Date())

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex justify-between items-start mb-6">
        <h1 className="text-2xl font-semibold">Lake View Suites SMDC Tagaytay</h1>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" className="flex gap-2">
            <Share className="h-4 w-4" />
            Share
          </Button>
          <Button variant="outline" size="sm" className="flex gap-2">
            <Heart className="h-4 w-4" />
            Save
          </Button>
        </div>
      </div>

      {/* Image Gallery */}
      <div className="grid grid-cols-4 gap-2 mb-8">
        <div className="col-span-2 row-span-2 relative rounded-l-xl overflow-hidden">
          <Image
            src={images[0] || "/placeholder.svg"}
            alt="Property main view"
            width={800}
            height={600}
            className="object-cover w-full h-full"
          />
        </div>
        <div className="grid grid-cols-2 col-span-2 gap-2">
          {images.slice(1, 5).map((src, i) => (
            <div key={i} className="relative aspect-square">
              <Image src={src || "/placeholder.svg"} alt={`Property view ${i + 2}`} fill className="object-cover" />
            </div>
          ))}
        </div>
        <Button variant="secondary" className="absolute bottom-4 right-4">
          Show all photos
        </Button>
      </div>

      <div className="grid md:grid-cols-3 gap-12">
        <div className="md:col-span-2">
          <div className="flex justify-between items-start pb-6 border-b">
            <div>
              <h2 className="text-xl font-semibold mb-1">Room in Tagaytay, Philippines</h2>
              <p className="text-gray-600">2 beds · Private attached bathroom</p>
              <span className="inline-block px-2 py-1 bg-gray-100 rounded text-sm mt-2">New</span>
            </div>
            <div className="flex items-center gap-3">
              <Image src="/placeholder.svg" alt="Host Daniel" width={56} height={56} className="rounded-full" />
              <div>
                <p className="font-medium">Stay with Daniel</p>
                <p className="text-sm text-gray-600">New Host</p>
              </div>
            </div>
          </div>

          <div className="py-6 space-y-6 border-b">
            <div className="flex gap-4">
              <div className="p-3 rounded-xl border">
                <h3 className="font-medium">Room in a rental unit</h3>
                <p className="text-sm text-gray-600">Your own room in a home plus access to shared spaces.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="p-3 rounded-xl border">
                <h3 className="font-medium">Outdoor entertainment</h3>
                <p className="text-sm text-gray-600">The patio and resto dining are great for summer trips.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="p-3 rounded-xl border">
                <h3 className="font-medium">Beautiful area</h3>
                <p className="text-sm text-gray-600">This home is in a scenic location.</p>
              </div>
            </div>
          </div>

          <div className="py-6">
            <h2 className="text-xl font-semibold mb-4">About this place</h2>
            <p className="text-gray-600">
              Escape to our modern country-inspired suites in Tagaytay! 🌿 Tucked away for peace and zen vibes, yet
              perfectly located for adventures and hot spots. With views of Taal Lake and Volcano! ⛰️
            </p>
          </div>
        </div>

        <div className="md:col-span-1">
          <div className="sticky top-8 border rounded-xl p-6 shadow-sm">
            <div className="flex justify-between items-center mb-6">
              <div>
                <span className="text-2xl font-semibold">₱2,800</span>
                <span className="text-gray-600">/night</span>
              </div>
            </div>

            <div className="grid gap-4">
              <div className="grid grid-cols-2 gap-2">
                <Popover>
                  <PopoverTrigger asChild>
                    <Button variant="outline" className="justify-start text-left font-normal">
                      <div>
                        <div className="font-semibold">CHECK-IN</div>
                        <div className="text-sm text-gray-600">2/6/2025</div>
                      </div>
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar mode="single" selected={date} onSelect={setDate} initialFocus />
                  </PopoverContent>
                </Popover>

                <Popover>
                  <PopoverTrigger asChild>
                    <Button variant="outline" className="justify-start text-left font-normal">
                      <div>
                        <div className="font-semibold">CHECKOUT</div>
                        <div className="text-sm text-gray-600">2/11/2025</div>
                      </div>
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar mode="single" selected={date} onSelect={setDate} initialFocus />
                  </PopoverContent>
                </Popover>
              </div>

              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="1 guest" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">1 guest</SelectItem>
                  <SelectItem value="2">2 guests</SelectItem>
                  <SelectItem value="3">3 guests</SelectItem>
                  <SelectItem value="4">4 guests</SelectItem>
                </SelectContent>
              </Select>

              <Button className="w-full bg-[#FF385C] hover:bg-[#FF385C]/90">Change dates</Button>

              <Button variant="outline" className="w-full flex items-center gap-2">
                <Flag className="h-4 w-4" />
                Report this listing
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

