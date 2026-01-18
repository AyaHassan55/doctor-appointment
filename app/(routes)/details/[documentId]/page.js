'use client';
import Api from '@/app/_utils/Api';
import React, { useEffect, useState } from 'react'
import DoctorDetails from '../_components/DoctorDetails';
import DoctorSuggition from '../_components/DoctorSuggition';

export default function Details({params}) {
    // to display doctor details based on documentId  'params'
    const resolvedParams = React.use(params);
    const {documentId} = resolvedParams;

    const [doctorDetails, setDoctorDetails] = useState();
    useEffect(() => {
        
        if(!documentId) return;
        console.log('Document ID:', documentId);
        getDoctorDetailsById(documentId);
    }, [documentId]);

    const getDoctorDetailsById = (documentId) => {
       
        Api.getDoctorByID(documentId)
        .then((res) => {
            console.log('Doctor Details:', res.data.data);
            setDoctorDetails(res.data.data);
        })
        .catch((err) => {
            console.log(err);
        });
    }
  return (
    <div className='p-5 md:px-20 pt-30'>
        <h2 className='font-bold text-[22px]'>Doctor Details</h2>
        <div className='grid md:grid-cols-4 grid-cols-1 gap-5 mt-5'>
           {/* doctor details */}
            <div className=' col-span-3 mt-5'>
                <DoctorDetails doctorDetails={doctorDetails} />
            </div>
           {/* doctor suggition */}
           <div>
            <DoctorSuggition />
           </div>
        </div>
    </div>
  )
}

