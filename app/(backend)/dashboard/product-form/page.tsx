import { fetchedCategories } from '@/actions/action'
import ProductForm from '@/components/product-form'
import React from 'react'

export default async function page() {
  const categories = await fetchedCategories() || []
  return (
    <div>
      <ProductForm categories = {categories}/>
    </div>
  )
}
