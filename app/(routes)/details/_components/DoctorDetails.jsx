

import React from 'react'
import Image from 'next/image'
import { GraduationCap, MapPin, Clock, Star  } from 'lucide-react'
import { Button } from '@/components/ui/button'
import BookAppointment from '../BookAppointment'

export default function doctorDetailsDetails({ doctorDetails }) {

    return (
        <>
            <div className='lg:col-span-2 animate-fade-in'>
                <div className='bg-card rounded-2xl shadow-card p-8 transition-all duration-300 hover:shadow-card-hover'>
                    <div className="flex flex-col lg:flex-row gap-8">
                        {/* Doctor Image */}
                        <div className="shrink-0">
                            {doctorDetails?.image?.[0]?.url && (
                                <div className="relative">
                                    <Image
                                        src={`http://localhost:1337${doctorDetails.image[0].url}`}
                                        width={600}
                                        height={600}
                                        alt={doctorDetails.name}
                                        unoptimized
                                        className="w-48 h-48 lg:w-56 lg:h-56 rounded-2xl object-cover shadow-lg"
                                    />
                                    <div className="absolute -bottom-3 -right-3 bg-primary text-primary-foreground px-3 py-1 rounded-full flex items-center gap-1 text-sm font-medium shadow-md">
                                        <Star className="w-4 h-4 fill-current" />
                                        {doctorDetails.rating}
                                    </div>
                                </div>
                            )}

                        </div>

                        {/* Doctor Info */}
                        <div className="flex-1 flex flex-col justify-between">
                            <div>
                                <div className="mb-4">
                                    <h1 className="text-3xl font-bold text-foreground mb-2">{doctorDetails?.name}</h1>
                                    <p className="text-lg text-primary font-medium">{doctorDetails?.Category?.name}</p>
                                </div>

                                <div className="flex flex-wrap gap-4 mb-6">
                                    <div className="flex items-center gap-2 text-muted-foreground">
                                        <div className="p-2 bg-primary/10 rounded-lg">
                                            <MapPin className="w-5 h-5 text-primary" />
                                        </div>
                                        <span className="text-sm">{doctorDetails?.address}</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-muted-foreground">
                                        <div className="p-2 bg-secondary rounded-lg">
                                            <Clock className="w-5 h-5 text-primary" />
                                        </div>
                                        <span className="text-sm font-semibold text-foreground">{doctorDetails?.year_of_experience}+ Years</span>
                                        <span className="text-sm">Experience</span>
                                    </div>
                                </div>

                                <p className="text-muted-foreground leading-relaxed mb-8">{doctorDetails?.about}</p>
                            </div>

                            {/* <Button size="lg" className="w-full sm:w-auto">
                                Book Appointment
                            </Button> */}
                            <BookAppointment  doctorDetails={doctorDetails}/>

                        </div>
                    </div>
                </div>

            </div>

          


        </>
    )
}

