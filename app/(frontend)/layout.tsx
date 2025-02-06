import { Footer } from '@/components/footer';
import React, { ReactNode } from 'react'

export default function Layout({children}:{children:ReactNode}){
  return (
    <div>
      {children}
      <Footer/>
    </div>
  )
}
