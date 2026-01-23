"use client"
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import React, { useEffect, useState } from 'react'
import Api from '../_utils/Api';
import Image from 'next/image';
import Link from 'next/link';

export default function CategorySearch() {
    const [categoriesList, setCategoriesList] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        getCategoryList();
    }, [])
    const getCategoryList = () => {
        setLoading(true)
        Api.getCategory().then((res) => {
            setCategoriesList(res.data.data);

            // console.log('ayaaaaaa')
            console.log(res.data.data);
        }).catch((err) => {
            console.log(err);
        }).finally(() => {
            setLoading(false);
        });
    }
    return (
        <div className='flex flex-col mb-10 items-center'>
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 mt-8'>
                {loading ?
                    Array.from({ length: 4 }).map((_, i) => (
                        <div
                            key={i}
                            className="h-40 w-full bg-gray-200 rounded-full animate-pulse"
                        />
                    ))


                    :
                    categoriesList.map((cat, index) => (
                        <Link href={`/search/${cat?.name}`} key={index} className='flex flex-col items-center text-center m-2  rounded-lg p-5 hover:scale-110 transition-all duration-300 cursor-pointer'>
                            
                            
                            <div className="bg-white rounded-full p-6 flex flex-col items-center text-center shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">

                                {/* Icon */}
                                <div className="w-16 h-16 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary/20 transition">
                                    <Image
                                        src={`http://localhost:1337${cat?.icon[0]?.url}`}
                                        alt={cat.name}
                                        width={100}
                                        height={100}
                                        unoptimized
                                    />
                                </div>

                                {/* Name */}
                                <h3 className="text-sm font-semibold text-gray-800 group-hover:text-primary transition">
                                    {cat?.name}
                                </h3>
                            </div>
                        </Link>

                    ))

                }

            </div>
        </div>
    )
}

