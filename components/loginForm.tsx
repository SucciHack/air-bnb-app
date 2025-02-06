"use client"

import { X } from "lucide-react"
import { useForm } from "react-hook-form"
import Link from "next/link"
import Image from "next/image"

import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"

interface FormValues {
  countryCode: string
  phoneNumber: string
}

export function AuthModal() {
  const { register, handleSubmit, setValue, watch } = useForm<FormValues>({
    defaultValues: {
      countryCode: "256",
      phoneNumber: "",
    },
  })

  const onSubmit = (data: FormValues) => {
    const phone = Number(data.phoneNumber)
    const User = {
        countryCode: data.countryCode,
        phone:phone
    }
    console.log(User)
  }

  return (
    <Dialog open>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader className="border-b pb-4">
          <Button variant="ghost" size="icon" className="absolute left-4 top-4" onClick={() => {}}>
            <X className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </Button>
          <DialogTitle className="text-center text-base font-medium">Log in or sign up</DialogTitle>
        </DialogHeader>
        <div className="px-4 pb-4 pt-6">
          <h1 className="text-2xl font-semibold tracking-tight">Welcome to Airbnb</h1>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 pt-8">
            <div>
              <Select onValueChange={(value: string) => setValue("countryCode", value)} defaultValue={watch("countryCode")}>
                <SelectTrigger>
                  <SelectValue placeholder="Select country" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="256">Uganda (+256)</SelectItem>
                  <SelectItem value="254">Kenya (+254)</SelectItem>
                  <SelectItem value="255">Tanzania (+255)</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Input placeholder="Phone number" {...register("phoneNumber", { required: true })} />
            </div>
            <p className="text-xs text-gray-500">
              We&apos;ll call or text you to confirm your number. Standard message and data rates apply.{" "}
              <Link href="#" className="underline font-medium">
                Privacy Policy
              </Link>
            </p>
            <Button type="submit" className="w-full bg-[#FF385C] hover:bg-[#FF385C]/90">
              Continue
            </Button>
          </form>
          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="bg-white px-2 text-gray-500">or</span>
            </div>
          </div>
          <div className="space-y-3">
            <Button variant="outline" className="w-full justify-start gap-3 font-normal">
              <Image src="https://authjs.dev/img/providers/google.svg" alt="Google" width={20} height={20} />
              Continue with Google
            </Button>
            <Button variant="outline" className="w-full justify-start gap-3 font-normal">
              <Image src="https://authjs.dev/img/providers/apple.svg" alt="Apple" width={20} height={20} />
              Continue with Apple
            </Button>
            <Button variant="outline" className="w-full justify-start gap-3 font-normal">
              <svg className="h-5 w-5" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"
                />
              </svg>
              Continue with email
            </Button>
            <Button variant="outline" className="w-full justify-start gap-3 font-normal">
              <Image src="https://authjs.dev/img/providers/facebook.svg" alt="Facebook" width={20} height={20} />
              Continue with Facebook
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

