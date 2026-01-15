import Image from 'next/image'
import React from 'react'

export default function DoctorDetails({doctor}) {
    

    return (
        <div className='grid grid-cols-1 md:grid-cols-3 '>
            {/* doc img */}
            <div>
                <Image src={`http://localhost:1337/doctor?.image?.[0].url`}
                    width={600}
                    height={600}
                    alt='image'
                    className='rounded-lg  '
                    unoptimized
                />
            </div>
            {/* doc info */}
            <div className='col-span-2'></div>
        </div>
    )
}
