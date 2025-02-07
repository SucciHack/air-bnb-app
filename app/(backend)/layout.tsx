import Navbar from '@/components/dashboard/Navbar'
import Sidebar from '@/components/dashboard/Sidebar'
import React, { ReactNode } from 'react'
import { Toaster } from 'react-hot-toast'

export default function DashLayout({children}:{children:ReactNode}) {
  return (
    <div>
      <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <Toaster
          position="top-right"
          reverseOrder={false}
        />
      <Sidebar/>
      <div className="flex flex-col">
        <Navbar/>
        {children}
      </div>
    </div>
    </div>
  )
}
