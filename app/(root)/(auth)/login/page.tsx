'use client'
import { Button, buttonVariants } from '@/components/shared/button';
import PassInput from '@/components/shared/placeholderColor/Input';

import Link from 'next/link';
import React, { useState } from 'react'

export default function page() {
    const [showPassword, setShowPassword] = useState(false)
    const [inputValue, setInputValue] = useState('');
    const [password, setPasswod] = useState('');

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setInputValue(e.target.value);
    };
    const handlePassword = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setPasswod(e.target.value)
    };

    return (
        <div>


            <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
                <div className="text-center">

                    <h2 className="mt-10 text-2xl font-bold leading-9 tracking-tight text-gray-900">Welcome Back to Talent Hub</h2>
                    <div className='text-[12px] dark:text-gray-300 text-gray-900 font-normal'>
                        <p className='text-center block'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis saepe </p>
                        <span className=''>sed optio </span>
                    </div>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
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
                                <label className='absolute text-gray-400 text-sm left-2 hover:text-gray-500 z-0'>First Name <span className='text-red-500 font-bold'>*</span></label>
                            )}
                        </div>

                        <div className='flex items-center hover:border-gray-400  justify-between border-b border-gray-300 relative' >
                            <input
                                className='bg-[#ffffff00] w-full outline-none py-3 px-2 z-30'
                                type={showPassword ? 'text' : 'password'}
                                name="name"
                                required
                                value={password}
                                onChange={handlePassword}
                            />
                            {
                                <span className="material-symbols-outlined cursor-pointer" onClick={togglePasswordVisibility}>
                                    {showPassword ? "visibility" : "visibility_off"}
                                </span>
                            }
                            {/* Conditionally render the label based on input value */}
                            {password.length === 0 && (
                                <label className='absolute text-gray-400 text-sm left-2 z-0'>Password<span className='text-red-500 font-bold'>*</span></label>
                            )}
                        </div>

                        <Link className='flex justify-end text-xs text-blue-400 ' href='/forgot'>Forgot Password?</Link>
                        <div className="flex items-center h-4">
                            <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />

                            <label htmlFor="remember" className="ms-2 text-xs font-normal text-gray-900 dark:text-gray-300">Keep me signed in</label>
                        </div>


                        <Button className={buttonVariants({ size: 'full', className: '', variant: 'login' })}>
                            Log in
                        </Button>

                    </form>

                    <p className="mt-10 flex justify-center gap-2 text-center text-xs text-gray-500">
                        Don't have an account
                        <Link className='text-blue-400 text-xs' href='/register'>Sign Up</Link>

                    </p>
                </div>
            </div>
        </div>
    )
}
