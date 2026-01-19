"use client"
import React, { useState } from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Star, MapPin, Clock, ArrowDown } from 'lucide-react';
import DoctorSkeleton from './_doctorSkelton';
export default function DoctorList({ doctors, heading = "Popular Doctors" }) {
    const [showAll, setShowAll] = useState(false);
    const visibleDoctors = showAll ? doctors : doctors.slice(0, 4);
    return (
        <section className='py-20 bg-muted '>
            <div className=' mx-auto px-4'>
                {/* Section Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 m-4">
                    <div>
                        <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                            Expert Care
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
                            Meet Our Doctors
                        </h2>
                        <p className="text-muted-foreground max-w-xl">
                            Highly qualified and experienced medical professionals dedicated to providing
                            exceptional patient care.
                        </p>
                    </div>
                    {/* Arrow */}
                    {doctors.length > 4 &&
                        <div>
                            <Button variant="outline" onClick={() => setShowAll(!showAll)}
                                className=" flex items-center gap-2 border-primary bg-transparent 
                                text-primary hover:text-white hover:bg-primary font-semibold transition-all ">
                                {showAll ? "Show Less" : "Show More"}
                                <ArrowDown
                                    className={`w-5 h-5 transition-transform duration-300 hover:translate-x-1 
                                        hover:cursor-pointer ${showAll ? "rotate-90" : ""
                                        }`}
                                />
                            </Button>
                        </div>}

                </div>
                {/* grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {!doctors || doctors.length === 0
                        ? Array.from({ length: 4 }).map((_, i) => (
                            <DoctorSkeleton key={i} />
                        ))
                        : visibleDoctors.map((doctor, index) => (
                            <Link href={`/details/${doctor?.documentId}`} key={index}>
                                <div className="bg-white rounded-2xl p-5 hover:scale-104 transition-transform duration-500">
                                    {
                                        // visibleDoctors?.map((doctor, index) => (

                                            <Link href={`/details/${doctor?.documentId}`} key={index}>
                                                <div className='bg-white rounded-2xl p-5  hover:scale-104 transition-transform duration-500'
                                                    style={{ transitionDelay: `${index * 0.1}s` }}>
                                                    <div className='relative mb-4 overflow-hidden rounded-2xl ' >

                                                        <Image src={`http://localhost:1337${doctor?.image?.[0]?.url}`}
                                                            width={100} height={50}
                                                            className='h-56 w-full object-cover '
                                                            unoptimized
                                                            alt={doctor?.name}
                                                        />


                                                    </div>

                                                    <div>
                                                        <div className="flex items-center gap-1 mb-2">
                                                            <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                                                            <span className="text-sm font-medium text-foreground">{doctor.rating}</span>
                                                            <span className="text-sm text-muted-foreground">({doctor?.reviews} reviews)</span>
                                                        </div>

                                                        <h3 className="font-semibold text-lg text-foreground mb-1 group-hover:text-primary transition-colors">
                                                            {doctor?.name}
                                                        </h3>
                                                        <p className="text-primary font-medium text-sm mb-3">{doctor?.Category?.name}</p>

                                                        <div className="space-y-2 mb-4">
                                                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                                                <Clock className="w-4 h-4" />
                                                                <span>{doctor?.year_of_experience} years experience</span>
                                                            </div>
                                                            <div className="flex items-start gap-2 text-sm text-muted-foreground">
                                                                <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                                                                <span className="line-clamp-1">{doctor?.address}</span>
                                                            </div>
                                                        </div>

                                                        <div className="w-full text-center bg-primary text-white py-2 rounded-md font-medium mt-3 hover:bg-primary/90 transition">
                                                            Book Now
                                                        </div>

                                                    </div>

                                                </div>

                                            </Link>



                                        // ))
                                    }
                                </div>
                            </Link>
                        ))}
                </div>


            </div>
        </section>

    )
}

