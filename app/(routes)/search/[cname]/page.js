"use client"
import Api from '@/app/_utils/Api';
import  { useEffect } from 'react'

export default function search({params}) {
    useEffect(() => {
        console.log(params.cname);
        getDoctors();
    });
    const getDoctors=()=>{
        Api.getDoctorsByCategory(params.cname).then((res)=>{
            console.log('docs by categories',res.data.data);
        }).catch((err)=>{
            console.log(err)
        });
    }
  return (
    <div>search</div>
  )
}

