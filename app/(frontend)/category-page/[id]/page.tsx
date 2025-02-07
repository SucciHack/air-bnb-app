import { fetchedCategories, fetchSingle } from '@/actions/action'
import CategoryComp from '@/components/category-comp'
import CardCarousel from '@/components/product-card'
import React from 'react'

export default async function page({params}:{params:Promise<{id:string}>}) {
    const categories = await fetchedCategories() || []
    const {id} = await params
    const fetchedCategory = await fetchSingle(id)
    console.log(fetchedCategory)
  return (
    <>
    <CategoryComp categories={categories}/>
    <div className='p-3 w-screen mt-44 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-2 mx-auto overflow-x-hidden'>
      {
        fetchedCategory?.property.map((property)=>{
            return <CardCarousel key={property.id} property={property}/>
        })
      }
    </div>
    </>
  )
}
