"use client"
import React, { useState } from 'react';
import { Select, Option } from "@material-tailwind/react";
import PassInput from '@/components/shared/placeholderColor/Input';

import Link from 'next/link';
import { Button, buttonVariants } from '@/components/shared/button';





export default function page() {
    const [selectedOption, setSelectedOption] = useState('');
    const [selectedOption2, setSelectedOption2] = useState('');

    const handleSelectChange = (e) => {
        setSelectedOption(e.target.value);
    };
    const handleSelectChange2 = (e) => {
        setSelectedOption2(e.target.value);
    };

    return (
        <div>
            <div className="text-center">

                <h2 className="mt-10 text-2xl font-bold leading-9 tracking-tight text-gray-900">Welcome Back to Talent Hub</h2>
                <p className='text-center block'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis saepe </p>
                <span className=''>sed optio </span>
            </div>
            <form className="sm:mx-auto sm:w-full sm:max-w-xl flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">

                        <input
                            placeholder='First Name *'
                            className='focus:outline-none border-b py-2 text-xs w-full pr-10'
                            type='text'
                        />


                    </div>
                    <div className="w-full md:w-1/2 px-3">

                        <input
                            placeholder='Last Name *'
                            className='focus:outline-none border-b py-2 text-xs w-full pr-10'
                            type='text'
                        />
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <input
                            placeholder='Email *'
                            className='focus:outline-none border-b py-2 text-xs w-full pr-10'
                            type='email'
                        />
                    </div>
                    <div className="w-full md:w-1/2 px-3">
                        <input
                            placeholder='Confirm Email *'
                            className='focus:outline-none border-b py-2 text-xs w-full pr-10'
                            type='email'
                        />
                    </div>
                </div> <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <select
                            value={selectedOption}
                            onChange={handleSelectChange}
                            className='focus:outline-none bg-transparent border-b py-2 text-xs w-full pr-10'
                        >
                            <option value="">Country of Residence *</option>
                            <option className='hover:bg-black' value="option1">bangladesh</option>
                            <option value="option2">India</option>
                            <option value="option3">Naple</option>
                        </select>



                    </div>
                    <div className="w-full md:w-1/2 px-3">
                        <div className="">
                            <select
                                value={selectedOption2}
                                onChange={handleSelectChange2}
                                className='focus:outline-none bg-transparent border-b py-2 text-xs w-full pr-10'
                            >
                                <option value="">City *</option>
                                <option value="option1">bangladesh</option>
                                <option value="option2">India</option>
                                <option value="option3">Naple</option>
                            </select>
                        </div>
                    </div>
                </div> <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <PassInput placeholder='Password *' showVisibilityToggle />
                    </div>
                    <div className="w-full md:w-1/2 px-3">
                        <PassInput placeholder='Re-type Password *' showVisibilityToggle />
                    </div>
                </div>
                <Button className={buttonVariants({ size: 'full', className: '', variant: 'login' })}>
                    CREATE ACCOUNT
                </Button>
                <span className="mt-10 flex justify-center gap-2 text-center text-xs text-gray-500">
                    Already have an account ?
                    <Link className='text-blue-400 text-xs' href='/login'>Sign In</Link>

                </span>

                <p className='text-[10px]'>By clicking Create Account, you will sign up to the Talent Hub. When you sign up we will send you relevant jobs, make your protile available to emplovers on our sites unless you ask us not to, and enable you to apply for jobs advertised on the job board. By signing up you agree to our Terms and Conditions and Privacy Policy.</p>
                <span className='flex gap-2 justify-center'>
                    <p className='text-blue-400 text-xs' >Terms of Business</p>
                    <span className='h-[4px]'>|</span>
                    <p className='text-blue-400 text-xs'>Privacy Polcy</p>
                </span>


            </form>
        </div>

    )
}
