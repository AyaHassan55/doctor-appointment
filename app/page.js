"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Hero from "./_component/Hero";
import CategorySearch from "./_component/Category_Search";
import DoctorList from "./_component/DoctorList";
import { useEffect, useState } from "react";
import Api from "./_utils/Api";
import FeaturesSection from "./_component/FeatureSection";
import { useTranslation } from "react-i18next";

import '../app/_utils/i18n'
export default function Home() {
  const [doctors, setDoctors] =useState([]);

   const { i18n } = useTranslation();
  useEffect(()=>{
     getDoctorsList(i18n.language);
     
  },[i18n.language])
  const getDoctorsList=(locale)=>{
    Api.getDoctors(locale).then(res=>{
      console.log('doctors',res.data.data);
      setDoctors(res.data.data);
    })
  }
  return (
    <div>
      <Hero />
      <CategorySearch />
      <DoctorList doctors={doctors} />
      <FeaturesSection />
    </div>
  );
}
