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
      <div className="bg-muted/30 rounded-2xl p-6 h-fit sticky top-8">
          <h2 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
              <span className="w-1 h-6 bg-primary rounded-full"></span>
              Suggestions
          </h2>
          <div className="space-y-3">
              {doctors?.map((doctor,index) => (
                <Link href={`/details/${doctor?.documentId}`} key={index}>
                  <div
                      
                      className="flex items-center gap-4 p-4 bg-card rounded-xl cursor-pointer transition-all duration-200 hover:bg-accent hover:shadow-md group border border-transparent hover:border-primary/20"
                  >
                      <Image src={`http://localhost:1337${doctor?.image?.[0]?.url}`}
                          width={20} height={20}

                          unoptimized
                          alt={doctor?.name}
                          className="w-14 h-14 rounded-full object-cover ring-2 ring-primary/20 group-hover:ring-primary/40 transition-all"
                      />

                      <div className="flex-1 min-w-0">
                          <h3 className="font-semibold text-foreground truncate group-hover:text-primary transition-colors">
                              {doctor?.name}
                          </h3>
                          <p className="text-sm text-muted-foreground truncate">{doctor?.Category?.name}</p>
                      </div>
                      <div className="text-muted-foreground group-hover:text-primary transition-colors">
                          <svg
                              className="w-5 h-5"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                          >
                              <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M9 5l7 7-7 7"
                              />
                          </svg>
                      </div>
                  </div>
                  </Link>
              ))}
          </div>
      </div>
  
  )
}

