import { fetchSingleProduct } from '@/actions/action'
import PropertyDetail from '@/components/property-detail'
import React from 'react'

export default async function page({params}:{params:Promise<{id:string}>}) {
  const {id} = await params
  const detailedProduct = await fetchSingleProduct(id)
  const property = await fetchSingleProduct(id) || 
  console.log(detailedProduct)
  return (
    <div>
      <PropertyDetail property={property}/>
    </div>
  )
}
