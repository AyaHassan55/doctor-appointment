import React from 'react'
import Image from 'next/image';
export default function DoctorList({ doctors }) {
    return (
        <div>
            <h2 className='font-bold text-xl text-lime-600'>
                Popular Doctors
            </h2>
            <div className='grid grid-cols-1 md:grid-cols-3'>
                {
                    doctors.map((doctor, index) => {
                        const imgURL = doctor?.image?.[0].url;
                        return (
                            <div key={index} className='border-1px rounded-lg p-3 m-3'>

                                {imgURL && (
                                    <Image src={`http://localhost:1337${imgURL}`}
                                        width={150} height={50}
                                        className='h-60 w-full object-cover'
                                        unoptimized
                                        alt={doctor?.name}
                                    />
                                )

                                }
                                <div className='items-baseline flex flex-col mt-3'>
                                    <h2 className='text-lime-600 mt-3 bg-lime-200 rounded-full p-2'>{doctor?.Category?.name}</h2>
                                    <h2 className='mt-2'><span className='text-lime-600'>Name: </span>
                                        {doctor?.name}</h2>
                                    <h2 className='mt-2'><span className='text-lime-600'>Years Of Experience: </span>
                                        {doctor?.year_of_experience} Years</h2>
                                        
                                    <h2 className='mt-2'><span className='text-lime-600'>Phone: </span>
                                        {doctor?.phone}</h2>
                                    <h2 className='mt-2'><span className='text-lime-600'>Address: </span>
                                        {doctor?.address} Years</h2>
                                        <h2 className='border-2 border-lime-600 p-1 rounded mt-2
                                          text-lime-600 hover:bg-lime-600 hover:text-white hover:scale-110 transition-all ease-in-out cursor-pointer'>Book Now</h2>
                                </div>
                            </div>
                        );

                    })
                }
            </div>
        </div>
    )
}

