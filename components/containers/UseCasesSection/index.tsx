'use client'

import React, { useRef } from 'react'
import { NewCarousel } from '../../shared/carousel';
import { CustomCarousel } from '../../shared/customCarousel';


import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { type CarouselApi } from "@/components/ui/carousel"
import Image from 'next/image'
import { UseCasesData } from '@/components/data/data';

interface HeroSectionProps {
    isSelected: any;
    setIsSelected: any;
}

const UseCasesSection: React.FC<HeroSectionProps> = ({ isSelected, setIsSelected }) => {
    const [count, setCount] = React.useState(0)
    const [api, setApi] = React.useState<CarouselApi>()
    // const [current, setCurrent] = React.useState(0)
    function handleSlideChange() {
        setIsSelected(2)
    }

    const carouselRef = useRef<any>()
    React.useEffect(() => {
        if (carouselRef.current) {
            // carouselRef.current.on("select", handleSlideChange);
        }
        return () => {
            if (carouselRef.current) {
                // carouselRef.current.destroy();
            }
        };
    }, [isSelected]);



    React.useEffect(() => {
        if (!api) {
            return
        }

        setCount(api.scrollSnapList().length)
        setIsSelected(api.selectedScrollSnap() + 1)

        api.on("select", () => {
            setIsSelected(api.selectedScrollSnap() + 1)
            console.log('api', api.selectedScrollSnap())
        })
    }, [api])
    return (
        <div className='text-white  h-full bg-gradient-to-r from-indigo-600 to-purple-700 p-8'>
            <div>

                <h1 className='font-semibold text-white text-xl'>Behaviour & Personality</h1>
                <p className='text-justify font-light w-[80%] text-xs'>Commodo libero enim cursus varius ultrices feugiat. Risus pellentesque aliquam tortor adipiscing lorem. Ipsum dui eget nullam at. Lorem ipsum dolor sit amet consectetur. Viverra dictum ultricies aliquam amet. Eget imperdiet nisi nulla viverra lectus.  Commodo libero enim cursus varius ultrices feugiat. Risus pellentesque aliquam tortor adipiscing lorem. Ipsum dui eget nullam at. Lo</p>
            </div>



            <div className='flex justify-center'>

                <div className=' h-full mx-auto'>
                    <Carousel
                        ref={carouselRef}



                        setApi={setApi} className="w-full h-full relative max-w-xs">
                        <CarouselContent >


                            {UseCasesData.map((item, index) => (
                                <CarouselItem key={index}>
                                    <div className="p-1">
                                        <Card>
                                            <CardContent className="flex aspect-square items-center justify-center p-6">
                                                {item.name}
                                                {
                                                    <Image src={item.logo} height={100} width={100} alt='' />
                                                }

                                            </CardContent>
                                        </Card>
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious className='text-black top-full ' />
                        <CarouselNext className='top-full' />

                    </Carousel>
                    <div className="py-2 text-center text-sm text-white text-muted-foreground">
                        Slide {isSelected} of {count}
                    </div>
                </div>
            </div>





        </div>
    )
}
export default UseCasesSection;
