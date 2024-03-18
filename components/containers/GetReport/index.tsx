import React from 'react'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

export default function GetReport() {
    return (
        <div>
            <Carousel>
                <CarouselContent>
                    <CarouselItem className="basis-1/3">...</CarouselItem>
                    <CarouselItem className="basis-1/3">...</CarouselItem>
                    <CarouselItem className="basis-1/3">...</CarouselItem>
                </CarouselContent>
            </Carousel>
        </div>
    )
}
