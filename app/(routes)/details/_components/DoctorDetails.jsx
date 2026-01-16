import React from 'react'
import Image from 'next/image'
export default function doctorDetailsDetails({ doctorDetails }) {

    return (
        <>
            <div className=' border p-5 rounded-lg  grid grid-cols-1 md:grid-cols-3'>
                {/* doctorDetails image*/}
                <div>

                    {doctorDetails?.image?.[0]?.url && (
                        <Image
                            src={`http://localhost:1337${doctorDetails.image[0].url}`}
                            width={600}
                            height={600}
                            alt={doctorDetails.name}
                            unoptimized
                            className="rounded-lg object-cover"
                        />
                    )}

                </div>

                {/* doctorDetails info*/}
                <div className=' md:px-10 col-span-2 flex flex-col gap-4 items-baseline'>
                    <h2 className='font-bold text-2xl mt-7'>{doctorDetails?.name}

                    </h2>

                    <h2 className='flex gap-2 text-gray-500'>

                        <span>{doctorDetails?.year_of_experience} Years Of Experience</span>
                    </h2>

                    <h2 className='flex gap-2 text-gray-500'>

                        <span>{doctorDetails?.address} </span>

                    </h2>

                    <h2 className='bg-lime-200 text-lime-800 rounded-full text-[10px] p-2'>{doctorDetails?.category?.name}</h2>



                    <div>

                        <h1 className='text-[25px] font-bold'>About</h1>
                        <p className='text-gray-500'> {doctorDetails?.about}</p>
                    </div>

                </div>

            </div>



        </>
    )
}

