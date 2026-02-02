'use client'
import { Button } from '@/components/ui/button'
import React from 'react'
import { Badge } from '@/components/ui/badge';
import Link from 'next/link'; import { Play, Calendar } from 'lucide-react';
import { useTranslation } from 'react-i18next';
export default function Hero() {
    const { t, i18n } = useTranslation();
    return (
        <div>
            <section
                className="relative min-h-screen flex items-center justify-center overflow-hidden"
                aria-label="Hero section"
            >
                {/* Background Image */}
                <div className="absolute inset-0 bg-cover bg-center bg-no-repeat">
                    <img
                        src='/assets/images/heroo.png'
                        alt="Team of professional medical doctors and healthcare specialists in a modern hospital setting"
                        className="w-full h-full object-cover object-center"
                        loading="eager"
                    />
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-r  from-[#0F2F2A]/30  via-[#0F2F2A]/45  to-[#0F2F2A]/30" />

                </div>
                {/* Bottom White Fade */}
                <div className="absolute bottom-0 left-0 right-0 h-30 bg-gradient-to-t from-white via-white/70 to-transparent z-20" />

                {/* Dark Overlay - positioned separately for stronger effect */}
                <div
                    className="absolute inset-0 z-1"
                    style={{ backgroundColor: 'rgba(0, 0, 0, 0.65)' }}
                    aria-hidden="true"
                />

                {/* Content */}
                <div className="relative z-10 container mx-auto px-4 py-32">
                    <div className="max-w-3xl">
                        {/* Badge */}
                        <Badge
                            className="mb-6 bg-primary/20 text-primary border-primary/30 hover:bg-primary/30 animate-fade-in px-4 py-2 text-sm font-medium"
                        >
                            ✨{t('trustedByPatients')}
                        </Badge>

                        {/* Headline */}
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-background mb-6 leading-tight animate-fade-in-up">
                            {t("uHealth")},{' '}
                            <span className="text-primary">{t('ourPriority')}</span>
                        </h1>

                        {/* Subheadline */}
                        <p className="text-lg md:text-xl text-background/80 mb-10 max-w-2xl leading-relaxed animate-fade-in-delay-1">
                            {t('heroSection')}
                        </p>

                        {/* CTA Buttons */}
                        {/* EF6634 */}
                        <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-delay-2">
                            <Button className="rounded-2xl w-50 h-15 bg-[#EF6634] hover:scale-105 hover:bg-[#EF6634] transform transition-transform duration-300 text-white shadow-lg" size="xl" asChild>
                                <Link href="/search/Hematology">
                                    <Calendar className="w-5 h-5 mr-2" />
                                    {t('bookAppo')}
                                </Link>
                            </Button>
                            <Button className="rounded-2xl w-50 h-15 bg-white/10 text-white border border-white/30  hover:bg-white/20 backdrop-blur-md cursor-pointer" size="xl">
                                <Play className="w-5 h-5 mr-2" />
                                {t('watchStory')}
                            </Button>
                        </div>

                        {/* Stats */}
                        <div className="mt-16 grid grid-cols-3 gap-8 animate-fade-in-delay-3">
                            <div>
                                <p className="text-3xl md:text-4xl font-bold text-primary">500+</p>
                                <p className="text-background/70 text-sm mt-1">{t('expertDoctors')}</p>
                            </div>
                            <div>
                                <p className="text-3xl md:text-4xl font-bold text-primary">50K+</p>
                                <p className="text-background/70 text-sm mt-1">{t('happyPatients')}</p>
                            </div>
                            <div>
                                <p className="text-3xl md:text-4xl font-bold text-primary">24/7</p>
                                <p className="text-background/70 text-sm mt-1">{t('availableCare')}</p>
                            </div>
                        </div>
                    </div>
                </div>




            </section>

        </div>
    )
}

