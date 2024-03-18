import React from 'react';
import { Button, buttonVariants } from '../button';
import Image from 'next/image';

import Link from 'next/link';

import { contacts } from '@/components/data/data';




export default function Card() {
    return (
        <>
            <div className='h-[100px]'></div>
            <div className='text-[#131314] flex flex-col text-center'>
                <p className='font-normal text-sm md:mb-0 mb-4'>EXPERIENCE MANAGEMENT</p>
                <span className=' md:text-2xl rubik '>Three suites to create exceptional customer</span>
                <span className=' md:text-2xl rubik '>frontlines, high-performing teams, and products</span>
                <span className='md:text-2xl rubik  '> people love. All on one platform.</span>
            </div>
            <div className='h-[112px]'></div>
            <div className="grid md:grid-cols-2 w-full lg:grid-cols-3 grid-cols-1 overflow-hidden gap-4 md:px-10  ">
                {contacts.map((contact, index) => (
                    <div key={index} className=" mx-3 md:mx-0   bg-white overflow-hidden shadow-md">
                        <div className="px-6 pt-[32px]">
                            <div className={`md:px-6  font-semibold md:text-xl text-center mb-2  text-transparent bg-clip-text bg-gradient-to-r  ${contact.gradientColor}`}>
                                {contact.title}
                            </div>
                            <p className="text-[#333333]  font-light text-center md:text-base">
                                {contact.description}
                            </p>
                        </div>
                        <div className="px-6 gap-6  flex justify-center pt-4 pb-2">
                            {contact.tags.map((tag: string, i: number) => (
                                <span key={i} className="cursor-pointer font-normal">{tag}</span>
                            ))}
                        </div>
                        <div className="flex justify-center pt-[48px] pb-[48px]">
                            <Image alt='' width={300} height={300} src={contact.imageSrc} />
                        </div>
                        <div className='flex  flex-col-reverse text-center justify-around pb-[32px] '>
                            <Button className={buttonVariants({ size: 'default', className: 'w-[80%] mx-auto', variant: 'default' })}>
                                {contact.buttonText}
                            </Button>
                            <Link href='/products' className='flex justify-center  gap-2 pb-6  items-center text-[#131314]'>Learn More
                                <Image className='' alt='' width={12} height={10} src='/arrow_outward.svg' />
                            </Link>
                        </div>
                    </div>
                ))}
            </div>

        </>
    );
}
