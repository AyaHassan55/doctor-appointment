"use client";
import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { useState, useEffect } from "react";
import { LogoutLink, LoginLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const { user } = useKindeBrowserClient();
    useEffect(() => {
        console.log('user', user);
    }, [user]);

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
        <div className={`fixed top-0 left-0 w-full z-50 transition-all duration-300  ${isScrolled
            ? "bg-white backdrop-blur-md shadow-md h-26"
            : "bg-transparent"
            }`}>
            <div className='flex items-center justify-between p-3 h-26 mb-6 md:px-10'>
                <div className='flex items-center gap-10'>
                    <Image src={"/assets/images/logo.png"} alt="logo" width={100} height={100} />
                    <ul className='md:flex items-center gap-8 hidden'>
                        {Menu.map((item, index) => (
                            <Link key={index} href={item.path}>
                                <li className='hover:text-lime-600 cursor-pointer hover:scale-105 transition-all'>{item.name}</li>
                            </Link>
                        ))}
                    </ul>
                </div>
                {user ?
                    user.profile_picture ? (
                        <Popover>
                            <PopoverTrigger><Image src={user.profile_picture} alt="User Profile" width={40} height={40} className="rounded-full" /></PopoverTrigger>
                            <PopoverContent>
                                <ul>
                                    <li>
                                        <LogoutLink>Log out</LogoutLink>
                                    </li>
                                </ul>
                            </PopoverContent>
                        </Popover>


                    ) : (
                        <Popover>
                            <PopoverTrigger><div className='w-10 h-10 rounded-full bg-lime-500 text-white  flex items-center justify-center font-semibold uppercase cursor-pointer'

                                title={user.given_name + " " + user.family_name}
                            >
                                {user.given_name[0].toUpperCase() + user.family_name[0].toUpperCase()}

                            </div></PopoverTrigger>
                            <PopoverContent className='w-48 flex flex-col bg-[#bff3bf75] border-none'> 
                                <ul>
                                    <li className='mt-2 text-white p-2 hover:translate-x-2 transition-transform duration-300 ease-in-out cursor-pointer'>My Profile</li>
                                    <li className='mt-2 text-white p-2 hover:translate-x-2 transition-transform duration-300 ease-in-out cursor-pointer'>My Booking</li>
                                    <li className='mt-2 text-white p-2 hover:translate-x-2 transition-transform duration-300 ease-in-out cursor-pointer'>
                                        
                                        <LogoutLink>Log out</LogoutLink>
                                    </li>
                                </ul>
                            </PopoverContent>
                        </Popover>


                    )
                    // 
                    : <LoginLink>
                        <Button>Get Started</Button>
                    </LoginLink>}





            </div>
        </div>
    )
}

