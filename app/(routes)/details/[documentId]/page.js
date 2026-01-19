'use client';
import Api from '@/app/_utils/Api';
import React, { useEffect, useState } from 'react'
import DoctorDetails from '../_components/DoctorDetails';
import DoctorSuggition from '../_components/DoctorSuggition';
import DoctorDetailsSkeleton from '../_components/_doctorDetailsSkelton';

export default function Details({params}) {
    // to display doctor details based on documentId  'params'
    const resolvedParams = React.use(params);
    const {documentId} = resolvedParams;

    const [doctorDetails, setDoctorDetails] = useState(null);
    const [loading, setLoading] =useState(true);
    useEffect(() => {
        
        if(!documentId) return;
        console.log('Document ID:', documentId);
        getDoctorDetailsById(documentId);
    }, [documentId]);

    const getDoctorDetailsById = (documentId) => {
       setLoading(true);
        Api.getDoctorByID(documentId)
        .then((res) => {
            console.log('Doctor Details:', res.data.data);
            setDoctorDetails(res.data.data);
        })
        .catch((err) => {
            console.log(err);
        }).finally(()=>setLoading(false));
    }
  return (
    <div className='p-5 md:px-20 pt-30'>
        <h2 className='font-bold text-[22px]'>Doctor Details</h2>
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
           {/* doctor details */}
            <div className=' col-span-2 mt-5'>
                {loading || !doctorDetails ?(<DoctorDetailsSkeleton />) : ( <DoctorDetails doctorDetails={doctorDetails}  />)}
               
            </div>
           {/* doctor suggition */}
           <div className="lg:col-span-1 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <DoctorSuggition />
           </div>
        </div>
    </div>
  )
}

