// import {
//     Home,
//     BedDouble,
//     PocketIcon as Pool,
//     TreePalmIcon as PalmTree,
//     Building2,
//     Trees,
//     Mountain,
//     Paintbrush,
//     Castle,
//     Crown,
//     SlidersHorizontal,
//   } from "lucide-react"
  import { fetchedCategories } from "@/actions/action"
import { Button } from "@/components/ui/button"
  import { Switch } from "@/components/ui/switch"
import { SlidersHorizontal } from "lucide-react"
import Image from "next/image"
  
  // const categories = [
  //   { icon: Home, label: "Rooms" },
  //   { icon: BedDouble, label: "Bed & breakfasts" },
  //   { icon: Pool, label: "Amazing pools" },
  //   { icon: PalmTree, label: "Islands" },
  //   { icon: Building2, label: "Mansions" },
  //   { icon: Trees, label: "Farms" },
  //   { icon: Mountain, label: "Countryside" },
  //   { icon: Paintbrush, label: "Design" },
  //   { icon: Castle, label: "Castles" },
  //   { icon: Crown, label: "OMG!" },
  // ]
  
  export async function CategoryBar() {
    const categories = await fetchedCategories()
    return (
      <div className="fixed top-20 w-full bg-white border-b z-40 pt-3">
        <div className="flex items-center justify-between px-6 h-20">
          {/* Categories */}
          <div className="flex-1 flex items-center gap-8 overflow-x-auto no-scrollbar">
            {categories.map((category) => (
              <button
                key={category.id}
                className="flex flex-col items-center gap-2 text-gray-600 hover:text-gray-950 hover:border-b-2 border-gray-950 pb-2 transition min-w-fit"
              >
                <Image src={category.image} alt="" width={80} height={80}/>
                <span className="text-xs whitespace-nowrap">{category.categoryName}</span>
              </button>
            ))}
          </div>
  
          {/* Filters */}
          <div className="flex items-center gap-6 pl-6 border-l min-w-fit">
            <Button variant="outline" className="rounded-xl flex items-center gap-2">
              <SlidersHorizontal className="h-4 w-4" />
              Filters
            </Button>
            <div className="flex items-center gap-3">
              <span className="text-sm">Display total before taxes</span>
              <Switch />
            </div>
          </div>
        </div>
      </div>
    )
  }
  
  