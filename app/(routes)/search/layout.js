import React from 'react'

export default function layout({children}) {
  return (
    <div className='grid grid-cols-4'>
        
        {/* categories */}
        <div></div>


        {/* children */}
        <div className='col-span-3'>
            {children}
        </div>
    </div>
  )
}

