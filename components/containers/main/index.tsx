import { Button } from '@/components/shared/button'
import Image from 'next/image'
import React from 'react'


export default function Main() {
    return (
        <div className='overflow-hidden container  rounded-lg z-0'>
            <div className='flex items-center w-full '>
                <div className='relative after:w-[1200px] after:h-[1200px] after:absolute after:top-[50%] after:left-[20%] after:translate-x-[-50%] after:translate-y-[-50%]  after:bg-[#3C06CA] after:rounded-full after:-z-10 z-20 text-white px-[20px]'>
                    <h2 className='text-[32px] font-bold mb-6'>Make every interaction <br /> an experience that <br /> matters</h2>
                    <p className='text-[14px] font-light mb-6'>Lorem ipsum dolor sit amet consectetur. Urna eget quam leo pellentesque quis leo. Scelerisque molestie gravida netus turpis. Nunc vel risus viverra ipsum donec scelerisque.</p>
                    <Button href='#demo' className='bg-white textt-black'>REQUEST DEMO</Button>
                </div>
                <div className=''>
                    <Image src="/1_illustration.gif" style={{ width: "100%", height: "100%" }} width={0} height={0} alt="Ranch Investor" className='' />
                </div>
            </div>
        </div>
    )
}
