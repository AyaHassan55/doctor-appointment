'use client'
import Api from '@/app/_utils/Api';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'

export default function DoctorSuggition() {
    const [doctors, setDoctors] = useState([]);
    useEffect(()=>{
        getDocotorsSuggition();
    },[])
    const getDocotorsSuggition =()=>{
       Api.getDoctors().then((res)=>{
        setDoctors(res.data.data);
       }).catch((err)=>{
        console.log(err);
       });
    }
  return (
    <div className='flex flex-col gap-3'>
         <h1 className='mt-5'>Suggesstions</h1>
                {
                    doctors?.slice(0,5).map((doctor, index) => (

                            <Link href={`/details/${doctor?.documentId}`} key={index}>
                                <div  className='border rounded-lg p-3 m-3'>

                                   
                                        <Image src={`http://localhost:1337${doctor?.image?.[0]?.url}`}
                                            width={20} height={20}
                                            className='h-60 w-full object-cover'
                                            unoptimized
                                            alt={doctor?.name}
                                        />
                                        <div className='items-baseline flex flex-col'>
                            <span className='text-lime-600 mt-3 bg-lime-200 rounded-full p-1 text-[12px] text-bold'>{doctor?.Category?.name}</span>
    
                            <span className='mt-2'>  {doctor?.name}</span>
                            <span className='mt-2'>  {doctor?.year_of_experience} years Experience</span>
    
    
                                    

                                  
                                   
                                </div>
                                </div>
                            </Link>

                       

                    ))
                }
            </div>
  )
}

