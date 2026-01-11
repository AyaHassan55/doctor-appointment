import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import React from 'react'

export default function CategorySearch() {
    return (
        <div className='flex flex-col mb-10 items-center'> 
            <h2 className='font-bold text-4xl'><span className='text-lime-600'>Search</span> Categories</h2>
            <div className='flex w-full max-w-sm items-center justify-center'>
                <Input placeholder="Search for catgory" className='w-full mt-4 mb-8 mx-3' />
                <Button type='submit' className="mb-4">Submit</Button>
            </div>
        </div>
    )
}

