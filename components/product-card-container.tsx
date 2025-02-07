import React from 'react'
import CardCarousel from './product-card'
import { Property } from '@prisma/client'

export default function ProductContainer({properties}:{properties:Property[]}) {

  if(properties.length===0){
    return(
      <p className='text-5xl mt-[10rem] h-[10rem] flex justify-center items-center'>No Property</p>
    )
  }
  return (
    <div className='p-3 w-screen mt-44 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-2 mx-auto overflow-x-hidden'>
      {
        properties.map((property,i)=>{
          return <CardCarousel key={i} property={property}/>
        })
      }
    </div>
  )
}
