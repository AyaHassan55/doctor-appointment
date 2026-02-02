"use client";
import React, { useState, useEffect } from 'react';
import { LogoutLink, LoginLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import { Stethoscope, User, Calendar, LogOut, Globe } from 'lucide-react';
import { usePathname, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button"
import Link from "next/link";

import {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";

import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar";

import { useTranslation } from 'react-i18next';

export default function Header() {

    // --------- Router & Translation ---------
    const pathnameFromRouter = usePathname();
    const router = useRouter();
    const { locale } = router; // اللغة الحالية
    const { t, i18n } = useTranslation();

    // --------- User ---------
    const { user } = useKindeBrowserClient();

    const getInitials = (user) => {
        return (
            (user?.given_name?.[0] ?? '')?.toUpperCase() +
            (user?.family_name?.[0] ?? '')?.toUpperCase()
        )
    }

    // --------- Scroll & Mounted ---------
    const [isScrolled, setIsScrolled] = useState(false);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        const handleScroll = () => setIsScrolled(window.scrollY > 0);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    if (!mounted) return null;

    // --------- Menu ---------
    const Menu = [
        { id: 1, name: t("home"), path: "/" },
        { id: 2, name: t("explore"), path: "/explore" },
        { id: 3, name: t("contactUS"), path: "/contact" }
    ];

    // --------- Language Switcher ---------
    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
        router.push(pathnameFromRouter, pathnameFromRouter, { locale: lng });
        document.dir = lng === 'ar' ? 'rtl' : 'ltr';
    };

    return (
        <div className={`fixed left-0 top-0 w-full z-50 transition-all duration-300 
            ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-md' : 'bg-transparent'}`}>
            <div className='relative flex items-center justify-between p-3 h-26 mb-6 md:px-10'>

                {/* Logo */}
                <Link href="/" className="flex items-center gap-2 group">
                    <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center transition-transform group-hover:scale-105">
                        <Stethoscope className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <span className="text-xl font-bold text-foreground">
                        Medi<span className="text-primary">Care</span>
                    </span>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-8">
                    {Menu.map((link, index) => (
                        <Link
                            key={index}
                            href={link.path}
                            className={`text-sm font-medium transition-colors hover:text-primary ${pathnameFromRouter === link.path ? 'text-primary' : 'text-muted-foreground'}`}
                        >
                            {link.name}
                        </Link>
                    ))}
                </nav>

                <div className="md:flex items-center gap-4">

                    {/* Language Switcher */}
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button className="flex items-center gap-1 px-3 py-1 rounded hover:bg-gray-100 transition hover:cursor-pointer">
                                <Globe className="w-4 h-4 hover:bg-primary" />
                                {locale?.toUpperCase()}
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end" className="w-32">
                            <DropdownMenuItem onClick={() => changeLanguage('en')}>English</DropdownMenuItem>
                            <DropdownMenuItem onClick={() => changeLanguage('ar')}>العربية</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>

                    {/* User Dropdown */}
                    {user ? (
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button className="flex w-10 h-10 items-center gap-2 p-1 rounded-full hover:bg-grey-200 hover:cursor-pointer transition-colors">
                                    <Avatar className="w-10 h-10 border-2 border-primary/20">
                                        {user.profile_picture ? (
                                            <AvatarImage src={user.profile_picture} alt="User Profile" />
                                        ) : (
                                            <AvatarFallback className="bg-primary text-primary-foreground font-semibold">
                                                {getInitials(user)}
                                            </AvatarFallback>
                                        )}
                                    </Avatar>
                                </Button>
                            </DropdownMenuTrigger>

                            <DropdownMenuContent align="end" className="w-56">
                                {/* User Info */}
                                <div className="px-3 py-2">
                                    <p className="font-medium">{user.given_name} {user.family_name}</p>
                                    <p className="text-sm text-muted-foreground">{user.email}</p>
                                </div>

                                <DropdownMenuSeparator />

                                <DropdownMenuItem asChild>
                                    <Link href="/my-profile" className="cursor-pointer">
                                        <User className="w-4 h-4 text-gray-600" /> {t('myProfile')}
                                    </Link>
                                </DropdownMenuItem>

                                <DropdownMenuItem asChild>
                                    <Link href="/my-booking" className="cursor-pointer">
                                        <Calendar className="w-4 h-4 text-gray-600" /> {t('myBooking')}
                                    </Link>
                                </DropdownMenuItem>

                                <DropdownMenuSeparator />

                                <DropdownMenuItem className="text-destructive cursor-pointer">
                                    <LogOut className="w-4 h-4 text-destructive" />
                                    <LogoutLink>{t('logOut')}</LogoutLink>
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    ) : (
                        <LoginLink>
                            <Button>{t('getStarted')}</Button>
                        </LoginLink>
                    )}
                </div>
            </div>
        </div>
    );
}
