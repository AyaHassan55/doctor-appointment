import React from 'react'
import CategoryList from './_components/CategoryList'
import { Toaster } from "@/components/ui/sonner"
export default function layout({children}) {
  return (
    <div className='grid grid-cols-4'>
        
        {/* categories */}
        <div className='hidden md:block'>
            <CategoryList />
        </div>


        {/* children */}
        <div className='col-span-3'>
            {children}
            <Toaster />
        </div>
    </div>
  )
}

