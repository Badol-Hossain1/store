import { data } from '@/components/data/data'
import { Button } from '@/components/shared/button'

import Image from 'next/image'
import React from 'react'

export default function Research() {
    return (
        <div className='md:w-[92%] mx-auto'>

            <h1 className='text-[#131314] pt-10 mb-4 md:text-start text-center text-2xl'>Research & Case Studies</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 '>

                <div className=''>
                    <p className='text-center md:text-start'>Lorem ipsum dolor sit amet consectetur. Proin tristique sem venenatis nulla maecenas mauris. Est in pellentesque nulla ligula dignissim consectetur volutpat tortor gravida. Adipiscing in eros libero molestie pellentesque mi.</p>
                    <div className='flex md:block justify-center'>
                        <Button href='/product' className="mt-6 md:mb-0 mb-2">VIEW ALL</Button>
                    </div>
                </div>
                <div>





                    <ul className='underline '>
                        {data.map((item, index) => (
                            <li key={index} className='flex px-4 md:px-0 md:gap-10 md:flex-row flex-col items-center text-center md:text-start py-2 md:justify-between'>
                                {item}
                                <button className='flex mt-4 md:mt-0 items-center '>
                                    View More
                                    <Image alt='' width={10} height={10} src='/arrow_outward.svg' />
                                </button>
                            </li>
                        ))}
                    </ul>





                </div>
            </div>
            <div className='h-[100px]'></div>
        </div>
    )
}
