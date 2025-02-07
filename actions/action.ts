import { Category, Property } from "@prisma/client"

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL
export async function fetchedCategories() {
    const API = `${baseUrl}/api/v1/categories`
    try {
        const res = await fetch(API,{ cache: "no-store" })
    const categories = await res.json()
    // console.log(categories)
    
    return categories.data as Category[] & {property:Property[]}
    } catch (error) {
        console.log(error)
    }
}

export async function fetchedProperties() {
    const API = `${baseUrl}/api/v1/properties`
    try {
        const res = await fetch(API,{ cache: "no-store" })
        const properties = await res.json()
        return properties.data as Property[]
    } catch (error) {
        console.log(error)
    }
}

export async function fetchSingle(id:string) {
    try {
        const API = `${baseUrl}/api/v1/categories/${id}`
        const res = await fetch(API,{cache:"no-store"})
        const fetchedCategory = await res.json()
        return fetchedCategory.data as Category & {property:Property[]}
    } catch (error) {
        console.log(error)
    }

}
export async function fetchSingleProduct(id:string) {
    try {
        const API = `${baseUrl}/api/v1/properties/${id}`
        const res = await fetch(API,{cache:"no-store"})
        const fetchedProduct = await res.json()
        console.log(fetchedProduct)
        return fetchedProduct.data as Property
    } catch (error) {
        console.log(error)
    }

}