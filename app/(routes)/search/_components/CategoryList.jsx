"use client"
import React, { useEffect, useState } from 'react'
import Api from '@/app/_utils/Api';
import Image from 'next/image';
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command"
import Link from 'next/link';
export default function CategoryList() {
    const [categoriesList, setCategoriesList] = useState([]);
    useEffect(() => {
        getCategoryList();
    }, [])
    const getCategoryList = () => {
        Api.getCategory().then((res) => {
            setCategoriesList(res.data.data);
            // console.log('ayaaaaaa')
            console.log(res.data.data);
        }).catch((err) => {
            console.log(err);
        })
    }
    return (
        <div className='h-screen  flex flex-col mt-30'>
            <Command>
                <CommandInput placeholder="Type a command or search..." />
                <CommandList>
                    <CommandEmpty>No results found.</CommandEmpty>
                    <CommandGroup heading="Suggestions">
                        {categoriesList.map((cat) => (
                            <CommandItem key={cat.id}>
                                <Link href={`/search/${cat?.name}`} className='p- flex gap-2 hover:bg-lime-300 w-full cursor-pointer'>
                                     <Image src={`http://localhost:1337${cat?.icon[0]?.url}`}
                                        width={20} height={20} alt={cat?.name}
                                        unoptimized
                                    />
                                    <label className="ml-2">{cat?.name}</label>
                                    
                                </Link>
                            </CommandItem>
                        ))}

                    </CommandGroup>

                </CommandList>
            </Command>
        </div>
    )
}

