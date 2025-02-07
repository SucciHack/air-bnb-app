/* eslint-disable @typescript-eslint/no-unused-vars */
"use client"
import Link from "next/link"
import { useForm, FormProvider } from "react-hook-form"
import { useState } from "react"
import CustomCarousel from "@/components/custom-corousel"
import TextInput from "@/components/text-input"
import SubmitButton from "@/components/submit-button"
import MultipleImageInput from "@/components/multiple-image-input"
import { OfferCheckboxes } from "@/components/offer-checkbox"
import TextArea from "@/components/text-area"
import FormSelectInput from "@/components/form-select"
import { fetchedCategories } from "@/actions/action"
import { Category } from "@prisma/client"
import toast from "react-hot-toast"

export type ProductInputProps = {
  productName: string
  location: string
  price: number
  description: string
  numOfBedrooms:number
  productImages: string[]
  offers: string[]
  categoryId:string
}


export default  function ProductForm({categories,}:{categories:Category[]}) {
  const [isLoading, setIsLoading] = useState(false)
  const initialImages = ["/imgPlaceholder.jpg",
    "/imgPlaceholder.jpg", 
    "/imgPlaceholder.jpg"]
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [selectedCategory, setSelectedCategory] = useState<any>("")
    const [productImages, setProductImages] = useState(initialImages)
  const methods = useForm<ProductInputProps>({
    defaultValues: {
      offers: [],
    },
  })

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = methods

  const selectCategory = categories.map((category)=>({
    value:category.id,
    label:category.categoryName
  }))
  async function onSubmit(data: ProductInputProps) {
    data.productImages = productImages
    data.categoryId = selectedCategory.value
    data.price = Number(data.price)
    data.numOfBedrooms = Number(data.numOfBedrooms)
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL
    try {
        setIsLoading(true)
        const response = await fetch(`${baseUrl}/api/v1/properties`,{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body: JSON.stringify(data)
        })
        setIsLoading(false)
        reset()
        toast.success("created successfully")
    } catch (error) {
        console.log(error)
        toast.error("failed to create product")
    }
  }

  return (
    <div className="h-[95%] overflow-hidden">
      <div className="w-full lg:grid h-screen lg:min-h-[600px] lg:grid-cols-2 relative  ">
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
                <TextArea
                  register={register}
                  errors={errors}
                  label="Product Description"
                  name="description"
                />
                <TextInput
                  register={register}
                  errors={errors}
                  label="Bed Rooms"
                  name="numOfBedrooms"
                  type = "number"
                />
                <FormSelectInput
                    label="Main Categories"
                    options={selectCategory}
                    option={selectedCategory}
                    setOption={setSelectedCategory}
                    toolTipText="Add New Main Category"
                    href="/dashboard/inventory/main-categories/new"
                />
                <MultipleImageInput
                  title="Product Images"
                  imageUrls={productImages}
                  setImageUrls={setProductImages}
                  endpoint="productImages"
                />
                
                <OfferCheckboxes />
                <SubmitButton 
                    title={isLoading ? "Create" : "CREATE"} 
                    loading={isLoading} 
                    loadingTitle={isLoading ? "Creating Property..." : "Creating Product please wait..."} 
            />
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
        <div className="hidden bg-muted lg:block overflow-y-hidden relative max-h-screen">
            <CustomCarousel />
        </div>
      </div>
    </div>
  )
}

