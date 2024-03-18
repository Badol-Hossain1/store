'use client'
import { Button, buttonVariants } from '@/components/shared/button/';
import PassInput from '@/components/shared/placeholderColor/Input';

import Link from 'next/link';
import React, { useState } from 'react'

export default function page() {
    const [inputValue, setInputValue] = useState('');
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setInputValue(e.target.value);
    };


    return (
        <div>


            <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
                <div className="text-center">

                    <h2 className="mt-10 text-3xl font-bold leading-9 tracking-tight text-gray-900">Reset Your Password</h2>
                    <div className='text-[11px] mt-6 dark:text-gray-300 text-gray-900 font-normal'>
                        <p className='text-center block'>Enter your email address to reset your password </p>

                    </div>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-lg">
                    <form className="space-y-6" action="#" method="POST">
                        <div className='flex items-center justify-between hover:border-gray-400  border-b border-gray-300 relative' >
                            <input
                                className='bg-[#ffffff00] w-full outline-none py-3 px-2 z-30'
                                type="text"
                                name="name"
                                required
                                value={inputValue}
                                onChange={handleInputChange}
                            />
                            {/* Conditionally render the label based on input value */}
                            {inputValue.length === 0 && (
                                <label className='absolute text-gray-400 text-sm left-2 hover:text-gray-500 z-0'>Email address <span className='text-red-500 font-bold'>*</span></label>
                            )}
                        </div>




                        <Button href='/sendEmail' className={buttonVariants({ size: 'full', className: '', variant: 'login' })}>
                            RESET PASSWORD
                        </Button>

                    </form>

                    <p className="mt-10 flex justify-center gap-2 text-center text-xs text-gray-500">

                        <Link className='text-blue-400 text-xs' href='/login'>Go back to Login</Link>

                    </p>
                </div>
            </div>
        </div>
    )
}
