import { Button } from '@/components/ui/button'
import React from 'react'

export default function Hero() {
    return (
        <div>
            <section
                className="relative min-h-screen w-full flex items-center justify-center overflow-hidden"
                aria-label="Hero section"
            >
                {/* Background Image */}
                <div className="absolute inset-0 w-full h-full">
                    <img
                        src='/assets/images/heroo.png'
                        alt="Team of professional medical doctors and healthcare specialists in a modern hospital setting"
                        className="w-full h-full object-cover object-center"
                        loading="eager"
                    />
                </div>

                {/* Dark Overlay - positioned separately for stronger effect */}
                <div
                    className="absolute inset-0 z-[1]"
                    style={{ backgroundColor: 'rgba(0, 0, 0, 0.65)' }}
                    aria-hidden="true"
                />

                {/* Content */}
                <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl py-20">
                    {/* Badge */}
                    <div className="animate-fade-in-up mb-6 mt-7">
                        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-lime/20 border border-lime/40 text-white text-sm font-medium backdrop-blur-sm">
                            <span className="w-2 h-2 rounded-full bg-lime animate-pulse" />
                            Trusted by 50,000+ Patients
                        </span>
                    </div>

                    {/* Headline */}
                    <h1 className="animate-fade-in-up-delay-1 text-2xl sm:text-3xl md:text-6xl lg:text-5xl font-bold text-[#b2ebb2] leading-tight tracking-tight mb-6 drop-shadow-lg">
                        Your Health,{" "}
                        <span className="text-[#94c794]">Our Priority</span>
                    </h1>

                    {/* Subheadline */}
                    <p className="animate-fade-in-up-delay-2 text-lg sm:text-xl md:text-1xl text-gray-200 max-w-1xl mx-auto mb-10 leading-relaxed drop-shadow-md">
                        Experience compassionate, world-class medical care from our team of
                        board-certified physicians. Available 24/7 for your peace of mind.
                    </p>

                    {/* CTA Buttons */}
                    <div className="animate-fade-in-up-delay-3 flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <a
                            href="#book"
                            className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-lime text-primary-foreground font-semibold text-lg rounded-lg shadow-lg shadow-lime/25 hover:bg-lime-light hover:shadow-xl hover:shadow-lime/30 transition-all duration-300 hover:-translate-y-0.5"
                        >
                            Book an Appointment
                            <svg
                                className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                aria-hidden="true"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </a>
                        <a
                            href="#services"
                            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 text-white font-semibold text-lg rounded-lg border border-white/30 backdrop-blur-sm hover:bg-white/20 transition-all duration-300"
                        >
                            <svg
                                className="w-5 h-5"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                aria-hidden="true"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            Watch Our Story
                        </a>
                    </div>

                    {/* Trust Indicators */}
                    <div className="animate-fade-in-up-delay-3 mt-16 pt-8 border-t border-white/10">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
                            <div className="text-center">
                                <div className="text-3xl md:text-4xl font-bold text-[#94c794] mb-1">25+</div>
                                <div className="text-sm text-gray-300">Years of Excellence</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl md:text-4xl font-bold text-[#94c794] mb-1">150+</div>
                                <div className="text-sm text-gray-300">Expert Physicians</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl md:text-4xl font-bold text-[#94c794] mb-1">98%</div>
                                <div className="text-sm text-gray-300">Patient Satisfaction</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl md:text-4xl font-bold text-[#94c794] mb-1">24/7</div>
                                <div className="text-sm text-gray-300">Emergency Care</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Scroll Indicator */}
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
                    <a
                        href="#about"
                        className="flex flex-col items-center gap-2 text-[#141814] hover:text-white transition-colors"
                        aria-label="Scroll to learn more"
                    >
                        <span className="text-sm font-medium">Learn More</span>
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                        </svg>
                    </a>
                </div>
            </section>

        </div>
    )
}

