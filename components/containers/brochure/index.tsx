
import { Button, buttonVariants } from '@/components/shared/button'
import React from 'react'
interface BrochureDownloadProps {
    title?: string;
    description: string;
    buttonText: string;
    buttonLink?: string;
}

const BrochureSection: React.FC<BrochureDownloadProps> = ({ title, description, buttonText, buttonLink }) => {
    return (

        <div className='grid grid-cols-1 md:grid-cols-3 items-center bg-gradient-to-r from-indigo-600 to-purple-600 '>
            <div className='text-white col-span-2 lg:px-20 py-6'>
                {title && <h1 className='font-semibold text-xl text-center lg:text-start mb-2'>{title}</h1>}
                <div className='flex lg:gap-14 flex-col lg:flex-row'>
                    <p className='font-light text-center leading-5 md:leading-6 text-xs px-4 md:px-0 lg:w-[60%] lg:text-justify'>{description}</p>
                </div>
            </div>
            <Button href={buttonLink} className={buttonVariants({ size: 'default', className: 'uppercase col-span-1 border-none mx-auto mt-4 mb-8 md:mb-0 md:mt-4 lg:mt-0 ] bg-white', variant: 'login' })}>
                {buttonText}
            </Button>
        </div>
    )
}

export default BrochureSection;

