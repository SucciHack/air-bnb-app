import React from 'react'
import CardCarousel from './product-card'

export default function ProductContainer() {
  return (
    <div className='p-3 mt-44 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 mx-auto'>
      <CardCarousel/>
      <CardCarousel/>
      <CardCarousel/>
      <CardCarousel/>
    </div>
  )
}
