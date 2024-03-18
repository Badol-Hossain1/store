
import { Button, buttonVariants } from '@/components/shared/button'
import React from 'react'

export default function BrochureSection() {
    return (
        <div className='flex bg-gradient-to-r from-indigo-600 to-purple-600 '>
            <div className='text-white lg:px-20 py-6'>
                <h1 className=' font-semibold text-xl text-center lg:text-start mb-2'>Download our brochure</h1>
                <div className='flex lg:gap-14 flex-col lg:flex-row'>
                    <p className='font-light text-center leading-5 md:leading-6 text-xs px-4 md:px-0 lg:w-[60%]  lg:text-justify'>Elementum semper praesent amet integer orci. Enim molestie magna morbi tempor. Sed nascetur felis dictum a ac eget arcu tempus. Aliquet diam lorem semper leo nascetur eget. Tincidunt libero tristique nisl tristique vitae potenti eget egestas. Adipiscing morbi senectus et gravida orci pellentesque.</p>
                    <Button href='/sendEmail' className={buttonVariants({ size: 'default', className: 'uppercase border-none mx-auto mt-4 md:mt-4 lg:mt-0 md:w-[20%] w-[40%] lg:w-[15%] bg-white', variant: 'login' })}>
                        Download
                    </Button>
                </div>
            </div>

        </div>
    )
}
