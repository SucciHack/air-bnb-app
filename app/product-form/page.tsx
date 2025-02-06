"use client";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { useState } from "react";
import CustomCarousel from "@/components/custom-corousel";
import TextInput from "@/components/text-input";
import SubmitButton from "@/components/submit-button";
import MultipleImageInput from "@/components/multiple-image-input";
import ImageInput from "@/components/image-input";
import RadioInput from "@/components/radio-input";
export type categoryInputProps = {
  categoryName: string;
  image: string
};
export default function ProductForm() {
  const radioOptions = [
    {
      label: "Full",
      id: "FULL",
    },
    {
      label: "Half",
      id: "HALF",
    },
    {
      label: "Quarter",
      id: "QUARTER",
    },
  ];
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isLoading, setIsLoading] = useState(false);
  const initialImages = [
    "/imgPlaceholder.jpg",
    "/imgPlaceholder.jpg",
    "/imgPlaceholder.jpg",
    ];
    const [productImages, setProductImages] = useState(initialImages);
    const initialImage ="/imgPlaceholder.jpg";
    const [imageUrl, setImageUrl] = useState(initialImage);
  const {
    register,
    handleSubmit,
    // reset,
    formState: { errors },
  } = useForm<categoryInputProps>();


  async function onSubmit(data: categoryInputProps) {
    console.log(data)
  }


  return (
    <div>
      <div className="w-full lg:grid h-screen lg:min-h-[600px] lg:grid-cols-2 relative  overflow-hidden">
      <div className="flex items-center justify-center py-12 overflow-y-scroll">
        <div className="mx-auto grid w-[50%] gap-6 mt-96">
          <div className="grid gap-2 text-center">
            <h1 className="text-3xl font-bold">Create an Account</h1>
          </div>
          <form className="grid gap-4 w-full" onSubmit={handleSubmit(onSubmit)}>
            <div className="flex gap-2">
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
            </div>
            <div className="flex gap-3">
            <TextInput
              label="Price"
              register={register}
              name="price"
              errors={errors}
              placeholder="Eg. 200"
            />
            <TextInput
              label="Place Description"
              register={register}
              name="description"
              errors={errors}
              placeholder=""
            />
            </div>
            <ImageInput
                title="Category Image"
                imageUrl={imageUrl}
                setImageUrl={setImageUrl}
                endpoint="imageUploader"
            />

            <MultipleImageInput
              title="Product Images"
              imageUrls={productImages}
              setImageUrls={setProductImages}
              endpoint="productImages"
            />
            <div className="grid gap-6">
          <RadioInput
            radioOptions={radioOptions}
            label="Advert Size"
            register={register}
            name="size"
            errors={errors}
          />
      </div>

            <SubmitButton
              title="Submit"
              loading={isLoading}
              loadingTitle="Creating Category please wait..."
            />
          </form>
          <div className="mt-4 text-center text-sm">
            Already have an account?{" "}
            <Link href="/login" className="underline">
              Submit
            </Link>
          </div>
        </div>
      </div>
      <div className="hidden bg-muted lg:block relative">
        <CustomCarousel />
      </div>
    </div>
    </div>
  );
}

