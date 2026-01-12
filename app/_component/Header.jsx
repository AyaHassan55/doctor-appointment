"use client";
import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import  { useState, useEffect } from "react";

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
    const Menu = [
        {
            id: 1,
            name: "Home",
            path: "/"
        },
        {
            id: 2,
            name: "Explore",
            path: "/explore"
        },
        {
            id: 3,
            name: "Contact US",
            path: "/contact"
        }
    ]
    return (
        <div className={`fixed top-0 left-0 w-full z-50 transition-all duration-300  ${
        isScrolled
          ? "bg-white backdrop-blur-md shadow-md h-26"
          : "bg-transparent"
      }`}> 
        <div className='flex items-center justify-between p-3 h-26 mb-6 md:px-10'>
            <div className='flex items-center gap-10'>
                <Image src={"/assets/images/logo.png"} alt="logo" width={100} height={100} />
                <ul className='md:flex items-center gap-8 hidden'>
                    {Menu.map((item, index) => (
                        <Link  key={index} href={item.path}>
                        <li className='hover:text-lime-600 cursor-pointer hover:scale-105 transition-all'>{item.name}</li>
                        </Link>
                    ))}
                </ul>
            </div>
            <Button>Get Started</Button>
        </div>
        </div>
    )
}

