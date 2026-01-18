"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Hero from "./_component/Hero";
import CategorySearch from "./_component/Category_Search";
import DoctorList from "./_component/DoctorList";
import { useEffect, useState } from "react";
import Api from "./_utils/Api";
export default function Home() {
  const [doctors, setDoctors] =useState([]);

  useEffect(()=>{
     getDoctorsList();
     
  },[])
  const getDoctorsList=()=>{
    Api.getDoctors().then(res=>{
      console.log('doctors',res.data.data);
      setDoctors(res.data.data);
    })
  }
  return (
    <div>
      <Hero />
      <CategorySearch />
      <DoctorList doctors={doctors} />
    </div>
  );
}
