import { Footer } from '@/components/footer';
import React, { ReactNode } from 'react'
import { Toaster } from 'react-hot-toast';

export default function Layout({children}:{children:ReactNode}){
  return (
    <div>
      <Toaster
          position="top-right"
          reverseOrder={false}
        />
      {children}
      <Footer/>
    </div>
  )
}
