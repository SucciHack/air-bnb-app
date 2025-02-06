"use client"
import Link from "next/link"
import { useForm, FormProvider } from "react-hook-form"
import { useState } from "react"
import CustomCarousel from "@/components/custom-corousel"
import TextInput from "@/components/text-input"
import SubmitButton from "@/components/submit-button"
import MultipleImageInput from "@/components/multiple-image-input"
import { OfferCheckboxes } from "@/components/offer-checkbox"

export type ProductInputProps = {
  productName: string
  location: string
  price: string
  description: string
  categoryImage: string
  productImages: string[]
  offers: string[]
}


export default function ProductForm() {
  const [isLoading, setIsLoading] = useState(false)
  const initialImages = ["/imgPlaceholder.jpg", "/imgPlaceholder.jpg", 
    "/imgPlaceholder.jpg"]
  const [productImages, setProductImages] = useState(initialImages)

  const methods = useForm<ProductInputProps>({
    defaultValues: {
      offers: [],
    },
  })

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = methods

  async function onSubmit(data: ProductInputProps) {
    console.log(data)
  }

  return (
    <div>
      <div className="w-full lg:grid h-screen lg:min-h-[600px] lg:grid-cols-2 relative  overflow-y-scroll">
        <div className="flex items-center justify-center py-12 overflow-y-scroll">
          <div className="mx-auto grid w-[80%] gap-6 lg:mt-[90%]">
            <div className="grid gap-2 text-center">
              <h1 className="text-3xl font-bold">Create a New Product</h1>
            </div>
            <FormProvider {...methods}>
              <form className="grid gap-4 w-full" onSubmit={handleSubmit(onSubmit)}>
                <TextInput
                  label="Product Name"
                  register={register}
                  name="productName"
                  errors={errors}
                  placeholder="Enter a product name"
                />
                <TextInput
                  label="Location"
                  register={register}
                  name="location"
                  errors={errors}
                  placeholder="Enter a location"
                />
                <TextInput label="Price" register={register} name="price" errors={errors} placeholder="Eg. 200" />
                <TextInput
                  label="Place Description"
                  register={register}
                  name="description"
                  errors={errors}
                  placeholder=""
                />
                <MultipleImageInput
                  title="Product Images"
                  imageUrls={productImages}
                  setImageUrls={setProductImages}
                  endpoint="imageUploader"
                />
                <OfferCheckboxes />
                <SubmitButton title="Submit" loading={isLoading} loadingTitle="Creating Product please wait..." />
              </form>
            </FormProvider>
            <div className="mt-4 text-center text-sm">
              Already have a product?{" "}
              <Link href="/products" className="underline">
                View Products
              </Link>
            </div>
          </div>
        </div>
        <div className="hidden bg-muted lg:block relative">
          <CustomCarousel />
        </div>
      </div>
    </div>
  )
}

