import { Button, buttonVariants } from '@/components/shared/button'
import Image from 'next/image'
import React from 'react'
import logo from '@/public/1_illustration.gif'

export default function Main() {
    return (
        <div className=''>
            {/* 
            <div className='w-[98%] h-full mx-auto perspective-1000 transform-style-preserve-3d bg-red-500  rounded-md shadow-md relative trns'>


                <div className='w-[49%] h-[10em] bg-black pt-[3em] rounded-r-full'>


                </div>

            </div> */}

            {/* <div className='bg-[#3C06CA] relative  rounded-r-3xl  items-center px-4'>

                <h1 className='text-white font-bold text-2xl'>Make every interaction <br /> an experience that <br /> matters</h1>
                <p className='text-white font-normal text-xs'>Lorem ipsum dolor sit amet consectetur. Urna eget quam leo pellentesque quis leo. Scelerisque molestie gravida netus turpis. Nunc vel risus viverra ipsum donec scelerisque.</p>

                <Button className={buttonVariants({ size: 'sm', className: 'text-sm', variant: 'destructive' })}>
                    REQUEST DEMO
                </Button>
            </div>
            <div>

                <Image className='rounded-l-[-100px]' src={logo} width={1100} height={300} alt='' />
            </div> */}
        </div>
    )
}
