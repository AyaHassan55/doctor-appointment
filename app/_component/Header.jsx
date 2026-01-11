import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
export default function Header() {
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
        <div className='flex items-center justify-between p-3 shadow-sm'>
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
    )
}

