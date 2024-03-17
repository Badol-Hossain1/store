import React from 'react';
import { Button, buttonVariants } from '../button';
import Image from 'next/image';

import Link from 'next/link';
import CustomCarousel from '../carousel';
const contacts = [
    {
        title: "Cognitive Assessment",
        gradientColor: " from-purple-600 to-indigo-600",

        description:
            "Turpis amet sed ut eget sociis dolor lacus risus. Cras arcu quisque imperdiet commodo sapien mauris laoreet duis massa.",
        tags: ["Digital", "Care", "Locations"],
        imageSrc: "/card1.svg",
        buttonText: "WATCH NOW",
    },
    {
        title: "Personality Assessment",
        gradientColor: " from-blue-900 to-blue-500",

        description:
            "Turpis amet sed ut eget sociis dolor lacus risus. Cras arcu quisque imperdiet commodo sapien mauris laoreet duis massa.",
        tags: ["Digital", "Care", "Locations"],
        imageSrc: "/card2.svg",
        buttonText: "WATCH NOW",
    },
    {
        title: "Team & Leadership",
        gradientColor: " from-gray-900 to-gray-100",

        description:
            "Turpis amet sed ut eget sociis dolor lacus risus. Cras arcu quisque imperdiet commodo sapien mauris laoreet duis massa.",
        tags: ["Digital", "Care", "Locations"],
        imageSrc: "/card3.svg",
        buttonText: "WATCH NOW",
    },
];



export default function Card() {
    return (
        <>
            <div className='h-[100px]'></div>
            <div className='text-[#131314] flex flex-col text-center'>
                <p className='font-normal text-sm'>EXPERIENCE MANAGEMENT</p>
                <span className=' text-2xl rubik '>Three suites to create exceptional customer</span>
                <span className=' text-2xl rubik '>frontlines, high-performing teams, and products</span>
                <span className='text-2xl rubik  '> people love. All on one platform.</span>
            </div>
            <div className='h-[112px]'></div>
            <div className="grid px-2 md:px-0 md:grid-cols-3 md:w-[80%] w-full justify-center h-full mx-auto gap-4">
                {contacts.map((contact, index) => (
                    <div key={index} className="max-w-sm    bg-white overflow-hidden shadow-md">
                        <div className="px-6 pt-[32px]">
                            <div className={`px-6  font-semibold text-xl text-center mb-2  text-transparent bg-clip-text bg-gradient-to-r  ${contact.gradientColor}`}>
                                {contact.title}
                            </div>
                            <p className="text-[#333333] font-light text-center text-base">
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
                        <div className='flex justify-around pb-[32px] '>
                            <Button className={buttonVariants({ size: 'default', className: '', variant: 'default' })}>
                                {contact.buttonText}
                            </Button>
                            <Link href='/products' className='flex gap-2 items-center text-[#131314]'>Learn More
                                <Image alt='' width={12} height={10} src='/arrow_outward.svg' />
                            </Link>
                        </div>
                    </div>
                ))}
            </div>

        </>
    );
}
