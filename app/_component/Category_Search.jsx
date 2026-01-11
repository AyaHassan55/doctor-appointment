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

            {categoriesList.map((cat,index)=>(
                <div>
                    <Image key={index} src={`http://localhost:1337${cat?.icon[0]?.url}`}   width={70} height={70} alt={cat.name}/>
                </div>
            ))}
        </div>
    )
}

