import { useFormContext, Controller } from "react-hook-form"
import { Checkbox } from "@/components/ui/checkbox"

const offers = [
  { id: "wifi", label: "WiFi" },
  { id: "breakfast", label: "Breakfast" },
  { id: "lunch", label: "Lunch" },
  { id: "parking", label: "Parking" },
  { id: "airConditioning", label: "Air Conditioning" },
  { id: "pool", label: "Swimming Pool" },
  { id: "gym", label: "Gym" },
  { id: "roomService", label: "Room Service" },
]

export function OfferCheckboxes() {
  const { control } = useFormContext()

  return (
    <div>
      <h3 className="text-lg font-medium mb-4">Offers</h3>
      <div className="grid grid-cols-2 gap-4">
        {offers.map((offer) => (
          <div key={offer.id} className="flex items-center space-x-2">
            <Controller
              name="offers"
              control={control}
              render={({ field }) => (
                <Checkbox
                  id={offer.id}
                  checked={field.value?.includes(offer.id)}
                  onCheckedChange={(checked) => {
                    const updatedOffers = checked
                      ? [...(field.value || []), offer.id]
                      : (field.value || []).filter((value: string) => value !== offer.id)
                    field.onChange(updatedOffers)
                  }}
                />
              )}
            />
            <label
              htmlFor={offer.id}
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              {offer.label}
            </label>
          </div>
        ))}
      </div>
    </div>
  )
}

