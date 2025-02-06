import Image from "next/image"
import { Search, Globe, Menu, User } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Navbar() {
  return (
    <nav className="fixed top-0 w-full border-b bg-white z-50">
      <div className="flex items-center justify-between px-6 h-20">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-06%20115557-hvO0tDUveyWQ0DLbM4gidfIxU0MFTl.png"
            alt="Airbnb"
            width={102}
            height={32}
            className="w-[102px] h-8"
          />
        </div>

        {/* Search Bar */}
        <div className="hidden lg:flex items-center gap-2 rounded-full border shadow-sm hover:shadow-md transition px-4 py-2">
          <button className="font-medium px-4 py-1 rounded-full hover:bg-gray-100">Anywhere</button>
          <div className="h-6 w-px bg-gray-200" />
          <button className="font-medium px-4 py-1 rounded-full hover:bg-gray-100">Any week</button>
          <div className="h-6 w-px bg-gray-200" />
          <button className="text-gray-600 px-4 py-1 rounded-full hover:bg-gray-100">Add guests</button>
          <Button size="icon" variant="destructive" className="rounded-full">
            <Search className="h-4 w-4" />
          </Button>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-4">
          <Button variant="ghost" className="hidden lg:flex rounded-full">
            Airbnb your home
          </Button>
          <Button variant="ghost" size="icon" className="rounded-full">
            <Globe className="h-4 w-4" />
          </Button>
          <Button variant="outline" className="rounded-full flex items-center gap-2 border-gray-300">
            <Menu className="h-4 w-4" />
            <User className="h-6 w-6 text-gray-600" />
          </Button>
        </div>
      </div>
    </nav>
  )
}

