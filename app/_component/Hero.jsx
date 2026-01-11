import { Button } from '@/components/ui/button'
import React from 'react'

export default function Hero() {
    return (
        <div>
            <section>
                <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:items-center md:gap-8">
                        <div>
                            <div className="max-w-prose md:max-w-none">
                                <h2 className="text-2xl font-semibold text-lime-600 sm:text-3xl">
                                    Your Health, Just Click a Way.
                                </h2>

                                <p className="mt-4 text-pretty text-gray-700">
                                    search, compare, and book appointments with top-rated doctors in your area.
                                     Experience hassle-free healthcare at your fingertips.
                                </p>
                                <Button className="mt-5">Explore Now</Button>
                            </div>
                        </div>

                        <div>
                            <img
                                src="/assets/images/hero.png"
                                
                                className="rounded"
                                alt="section image"
                            />
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

