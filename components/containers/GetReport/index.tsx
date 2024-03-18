
import { Button } from "@/components/shared/button"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import Image from 'next/image'

export default function GetReport() {

    return (
        <div className='bg-gradient-to-r  pt-20 from-blue-900 to-indigo-500 w-full '>
            <div className='text-center text-white font-light text-sm'>
                <p>Stories of how the best brands and businesses win on experience.
                </p>
                <p>Stream original series, documentary films, and more.</p>
                <div className='flex justify-center'>
                    <button className='flex rubik pt-10 text-white md:mt-0 gap-4 items-center '>
                        GET REPORT
                        <Image alt='' width={10} height={10} src='/arrow_white.svg' />
                    </button>
                </div>
            </div>
            <Carousel className='pt-20'>
                <CarouselContent>
                    <CarouselItem className="md:basis-1/3 basis-2/3 relative">
                        <div className="group">
                            <Image src='/carousel1.svg' height={1000} width={1000} alt='' />
                            <Button className="absolute bottom-4 left-[25px] mt-4 bg-white text-black text-xs border-none px-4 py-2 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">WATCH NOW</Button>
                        </div>
                    </CarouselItem>

                    <CarouselItem className="basis-2/3 md:basis-1/3 relative">

                        <div className="group">
                            <Image src='/Group.svg' height={1000} width={1000} alt='' />
                            <Button className="absolute bottom-4 left-[25px] mt-4 bg-white text-black border-none px-4 py-2 rounded opacity-0 group-hover:opacity-100 text-xs transition-opacity duration-300">WATCH NOW</Button>
                        </div>
                    </CarouselItem>
                    <CarouselItem className="md:basis-1/3 basis-2/3 relative">
                        <div className="group">
                            <Image src='/image5.svg' height={1000} width={1000} alt='' />
                            <Button className="absolute bottom-4 left-[25px] mt-4 bg-white text-black text-xs border-none px-4 py-2 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">WATCH NOW</Button>
                        </div>

                    </CarouselItem>
                    <CarouselItem className="md:basis-1/3 basis-2/3 relative">
                        <div className="group">
                            <Image src='/Group.svg' height={1000} width={1000} alt='' />
                            <Button className="absolute bottom-4 left-[25px] mt-4 bg-white text-black text-xs border-none px-4 py-2 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">WATCH NOW</Button>
                        </div>

                    </CarouselItem>
                    <CarouselItem className="md:basis-1/3 basis-2/3 relative">
                        <div className="group">
                            <Image src='/super.svg' height={1000} width={1000} alt='' />
                            <Button className="absolute bottom-4 text-xs left-[25px] mt-4 bg-white text-black border-none px-4 py-2 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">WATCH NOW</Button>
                        </div>


                    </CarouselItem>


                </CarouselContent>
            </Carousel>
            <div className="h-[100px]"></div>
        </div>
    )
}
