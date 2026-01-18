"use client";

import React, { useEffect, useState } from "react";
import Api from "@/app/_utils/Api";
import Image from "next/image";
import DoctorList from "@/app/_component/DoctorList";
export default function Search({ params }) {
  const [doctors, setDoctors] = useState([]);
  const resolvedParams = React.use(params);
  const { cname } = resolvedParams;

  useEffect(() => {
    if (!cname) return;

    console.log("Category name:", cname);
    getDoctors(cname);
  }, [cname]);

  const getDoctors = (categoryName) => {
    Api.getDoctorsByCategory(categoryName)
      .then((res) => {
        console.log("docs by categories", res.data.data);
        setDoctors(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    
    <DoctorList doctors={doctors} heading={cname} />
  );
}
