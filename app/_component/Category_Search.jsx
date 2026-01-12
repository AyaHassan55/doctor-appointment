"use client"
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import React, { useEffect, useState } from 'react'
import Api from '../_utils/Api';
import Image from 'next/image';

export default function CategorySearch() {
    const [categoriesList, setCategoriesList] =useState([]);
    useEffect(()=>{
        getCategoryList();
    },[])
    const getCategoryList = ()=>{
        Api.getCategory().then((res)=>{
            setCategoriesList(res.data.data);
            // console.log('ayaaaaaa')
            console.log(res.data.data);
        }).catch((err)=>{
            console.log(err);
        })
    }
    return (
        <div className='flex flex-col mb-10 items-center'> 
            <h2 className='font-bold text-4xl'><span className='text-lime-600'>Search</span> Categories</h2>
            <div className='flex w-full max-w-sm items-center justify-center'>
                <Input placeholder="Search for catgory" className='w-full mt-4 mb-8 mx-3' />
                <Button type='submit' className="mb-4">Submit</Button>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 mt-8'>
                {categoriesList.map((cat, index) => (
                    <div key={cat.id} className='flex flex-col items-center text-center m-2 bg-lime-200 rounded-lg p-5 hover:scale-110 transition-all duration-300 cursor-pointer'>
                        <Image src={`http://localhost:1337${cat?.icon[0]?.url}`}
                            width={50} height={50} alt={cat.name}
                            unoptimized
                        />
                        <p className="mt-2 font-medium">{cat?.name}</p>

                    </div>

                ))}
            </div>
        </div>
    )
}

