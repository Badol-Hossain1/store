
import Image from 'next/image';

import Link from 'next/link';
import React from 'react'

export default function page() {


    return (
        <div>


            <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
                <div className="text-center">

                    <h2 className="mt-10 text-3xl font-bold leading-9 tracking-tight text-gray-900">Check your Email</h2>
                    <div className='text-[11px] mt-6 dark:text-gray-300 text-gray-900 font-normal'>
                        <p className='text-center block'> An email has been sent to r********4@gm****com with instructions on how to reset </p>
                        <span>your password</span>

                    </div>
                </div>

                <div className="mt-10 sm:mx-auto   sm:w-full sm:max-w-lg">
                    <Image
                        className='mx-auto'
                        width={100}
                        height={50}
                        src='/open.png'
                        alt=''
                    />



                    <Link className='text-blue-400 text-xs' href='/login'>Go back to Login</Link>


                </div>
            </div>
        </div>
    )
}
