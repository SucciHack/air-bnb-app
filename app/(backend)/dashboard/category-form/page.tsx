"use client";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { useState } from "react";
import CustomCarousel from "@/components/custom-corousel";
import TextInput from "@/components/text-input";
import SubmitButton from "@/components/submit-button";
import ImageInput from "@/components/image-input";
import { toast } from "react-hot-toast"
export type categoryInputProps = {
  categoryName: string;
  image: string
};
export default function ProductForm() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isLoading, setIsLoading] = useState(false);
  const initialImage ="/imgPlaceholder.jpg";
  const [imageUrl, setImageUrl] = useState(initialImage);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<categoryInputProps>();


  async function onSubmit(data: categoryInputProps) {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL
    data.image = imageUrl
    try {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const response = await fetch(`${baseUrl}/api/v1/categories`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      });
      reset()
      toast.success("category created successfully")
    } catch (error) {
      console.log(error)
      toast.success("failed to create category")
    }
  }


  return (
    <div>
      <div className="w-full lg:grid h-screen lg:min-h-[600px] lg:grid-cols-2 relative ">
      <div className="flex items-center justify-center py-12">
        <div className="mx-auto grid w-[350px] gap-6">
          <div className="grid gap-2 text-center">
            <h1 className="text-3xl font-bold">Create an Account</h1>
          </div>
          <form className="grid gap-4" onSubmit={handleSubmit(onSubmit)}>
            <TextInput
              label="Category Name"
              register={register}
              name="categoryName"
              errors={errors}
              placeholder="eg Electronics"
            />
            <ImageInput
                title="Category Image"
                imageUrl={imageUrl}
                setImageUrl={setImageUrl}
                endpoint="categoryImage"
            />

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
