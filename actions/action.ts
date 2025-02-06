import { Category } from "@prisma/client"

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL
const API = `${baseUrl}/api/v1/categories`
export async function fetchedCategories() {
    try {
        const res = await fetch(API)
    const categories = await res.json()
    console.log(categories)
    return categories.data as Category[]
    } catch (error) {
        console.log(error)
    }
}