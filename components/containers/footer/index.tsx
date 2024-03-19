import { Button } from '@/components/shared/button'
import Image from 'next/image'
import React from 'react'

export default function Footer() {
    return (
        <div>
            <div className='bg-[#0B0C10] items-center flex flex-col xl:flex-row justify-between px-20'>
                <ul className='flex  items-center flex-col md:flex-row gap-8 cursor-pointer py-10 text-white'>
                    <li>
                        <Image src='/Vector20.svg' width={30} height={30} alt='' />
                    </li>
                    <li>Facebook</li>
                    <li>Instagram</li>
                    <li>LinkedIn</li>
                    <li>YouTube</li>
                </ul>
                <ul className=' xl:py-10   text-white'>
                    <div className='flex md:flex-row items-center md:items-baseline flex-col cursor-pointer gap-4  text-sm lg:gap-8'>
                        <li>
                            Term of Service
                        </li>
                        <li>Privacy Statement</li>
                        <li>Security  Statement</li>
                        <li>Site Map </li>
                        <li>Your Privacy Choice</li>
                    </div>
                    <li className='lg:text-end text-center font-light pt-10 md:pt-2 pb-8 xl:pb-0'>Apple Inc.2024 ©All rights reserved</li>
                </ul>
            </div>
            {/* 
            <div className='bg-white p-6 items-center md:items-baseline flex-col md:flex-row justify-center w-full flex gap-6'>
                <p>Some cookies are essential to how our website works, so
                    they're always saved. Other cookies help personalise your
                    experience and remember your preferences. You can choose
                    which cookies to accept and change them at any time. Learn
                    more about <span className='text-[#3C06CA] cursor-pointer'>how we use our cookies.</span></p>
                <p className='flex cursor-pointer gap-2 text-[#3C06CA]'>  <span>Manage </span>
                    <span>Settings</span></p>
                <div className='flex md:w-[10%] gap-8'> <Button > Reject All</Button>
                    <Button > Accept All</Button></div>

                <span className="material-symbols-outlined cursor-pointer">
                    close
                </span>
            </div> */}
            <div className='grid py-10 px-10 md:grid-cols-4'>
                <div className='col-span-2'>
                    <p className='text-sm '>Some cookies are essential to how our website works, so
                        they're always saved. Other cookies help personalise your
                        experience and remember your preferences. You can choose
                        which cookies to accept and change them at any time. Learn
                        more about <span className='text-[#3C06CA] cursor-pointer'>how we use our cookies.</span></p>
                </div>
                <div className='col-span-2'>
                    <div className='flex mt-6 md:mt-0  flex-col-reverse lg:flex-row md:justify-end gap-6 items-center'>
                        <p className='flex  cursor-pointer gap-2 text-[#3C06CA]'>  <span>Manage </span>
                            <span>Settings</span></p>
                        <div className='flex justify-center  gap-4'>
                            <Button>Reject All</Button>
                            <Button >Accept All</Button>
                            <span className="material-symbols-outlined cursor-pointer">
                                close
                            </span>
                        </div>

                    </div>
                </div>

            </div>

        </div>
    )
}
