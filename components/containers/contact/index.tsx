'use client'
import React, { useState } from 'react'

import { options } from '@/components/data/data';
import { Button, buttonVariants } from '@/components/shared/button';


export default function ContactInfo() {
    const [selectedOption, setSelectedOption] = useState('')
    const [selectedOption2, setSelectedOption2] = useState('');
    const [isOpen, setIsOpen] = useState(false);
    const [open, setOpen] = useState(false)
    const [inputValue, setInputValue] = useState('');
    const [lastName, setLastName] = useState('');
    const [job, setJob] = useState('');

    const [company, setCompany] = useState('');
    const [email, setEmail] = useState('');
    const [number, setNumber] = useState('');




    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setInputValue(e.target.value);
    };

    const handleCompany = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setCompany(e.target.value)
    }

    const handleLastName = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setLastName(e.target.value)
    };
    const handleEmail = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setEmail(e.target.value)
    };
    const handleNumber = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setNumber(e.target.value)
    };
    const handleJob = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setJob(e.target.value)
    };


    const handleSelect = (option: string): void => {
        setSelectedOption(option);
        setIsOpen(false);
    };
    const handleSelect2 = (option: string): void => {
        setSelectedOption2(option);
        setOpen(false);
    };
    return (
        <div id='demo' className='bg-[#EEF2F4]  mb-[112px] grid grid-cols-1 lg:grid-cols-2 mt-20  justify-center gap-2'>
            <div className='px-10 pt-16'>
                <h1 className='text-black  font-bold text-2xl mb-4'>Get started with your personalised demo</h1>
                <p className='font-light leading-4 text-xs text-black'>Lorem ipsum dolor sit amet consectetur. Urna eget quam leo pellentesque quis leo. Scelerisque molestie gravida netus turpis. Nunc vel risus viverra ipsum donec scelerisque.</p>


            </div>
            <div>
                <div>

                    <form className="sm:mx-auto sm:w-full sm:max-w-xl flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
                        <div className="flex flex-wrap -mx-3 mb-6">
                            <div className="w-full  md:w-1/2 px-3 mb-6 md:mb-0">
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


                            </div>
                            <div className="w-full md:w-1/2 px-3">

                                <div className='flex items-center justify-between hover:border-gray-400  border-b border-gray-300 relative' >
                                    <input
                                        className='bg-[#ffffff00] w-full outline-none py-3 px-2 z-30'
                                        type="text"
                                        name="name"
                                        required
                                        value={lastName}
                                        onChange={handleLastName}
                                    />
                                    {/* Conditionally render the label based on input value */}
                                    {lastName.length === 0 && (
                                        <label className='absolute text-gray-400 text-sm left-2 z-0'>Last Name <span className='text-red-500 font-bold'>*</span></label>
                                    )}
                                </div>
                            </div>
                        </div>


                        <div className="flex flex-wrap -mx-3 mb-6">
                            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                <div className='flex items-center hover:border-gray-400  justify-between border-b border-gray-300 relative' >
                                    <input
                                        className='bg-[#ffffff00] w-full outline-none py-3 px-2 z-30'
                                        type="text"
                                        name="name"
                                        required
                                        value={company}
                                        onChange={handleCompany}
                                    />
                                    {/* Conditionally render the label based on input value */}
                                    {company.length === 0 && (
                                        <label className='absolute text-gray-400 text-sm left-2 z-0'>Company <span className='text-red-500 font-bold'>*</span></label>
                                    )}
                                </div>

                            </div>
                            <div className="w-full md:w-1/2 px-3">
                                <div className='flex items-center hover:border-gray-400  justify-between border-b border-gray-300 relative' >
                                    <input
                                        className='bg-[#ffffff00] w-full outline-none py-3 px-2 z-30'
                                        type="text"
                                        name="name"
                                        required
                                        value={job}
                                        onChange={handleJob}
                                    />
                                    {/* Conditionally render the label based on input value */}
                                    {job.length === 0 && (
                                        <label className='absolute text-gray-400 text-sm left-2 z-0'>Job Title <span className='text-red-500 font-bold'>*</span></label>
                                    )}
                                </div>
                            </div>
                        </div>


                        <div className="grid grid-cols-1 md:grid-cols-3 -mx-3 mb-6">

                            <div className="w-full  px-3">
                                <div className='flex items-center hover:border-gray-400  justify-between border-b border-gray-300 relative' >
                                    <input
                                        className='bg-[#ffffff00] w-full outline-none py-3 px-2 z-30'
                                        type="text"
                                        name="name"
                                        required
                                        value={email}
                                        onChange={handleEmail}
                                    />
                                    {/* Conditionally render the label based on input value */}
                                    {email.length === 0 && (
                                        <label className='absolute text-gray-400 text-sm left-2 z-0'>Email Address <span className='text-red-500 font-bold'>*</span></label>
                                    )}
                                </div>

                            </div >
                            <div className="w-full  px-3">

                                <div className='relative' >
                                    <div className='flex border-b hover:border-gray-400  border-gray-300 items-center relative justify-between '>
                                        <div
                                            className=" cursor-pointer outline-none w-full border-b-1 border-solid p-[10px] border-black relative"

                                            onClick={() => setOpen(!open)}
                                        >
                                            {selectedOption2 || (<div>STD <span className='text-red-500 font-bold'>*</span></div>)}
                                        </div>
                                        <span className=' pt-[4px] pb-[9px]'>
                                            {open ? <span className="material-symbols-outlined">
                                                keyboard_arrow_up
                                            </span> : <span className="material-symbols-outlined">
                                                expand_more
                                            </span>}
                                        </span>
                                        {open && (
                                            <div className='mt-[1px] z-50 absolute top-[100%] left-0 w-full ' >
                                                {options.map((option, index) => (
                                                    <div
                                                        key={index}
                                                        className="bg-white border-b-1 border-solid hover:bg-[#c7c7c7] duration-300"
                                                        style={{ padding: '10px', cursor: 'pointer' }}
                                                        onClick={() => handleSelect2(option)}
                                                    >
                                                        {option}
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                    <div>

                                    </div>
                                </div>
                            </div>
                            <div className="w-full  px-3">
                                <div className='flex items-center hover:border-gray-400  justify-between border-b border-gray-300 relative' >
                                    <input
                                        className='bg-[#ffffff00] w-full outline-none py-3 px-2 z-30'
                                        type="text"
                                        name="name"
                                        required
                                        value={number}
                                        onChange={handleNumber}
                                    />
                                    {/* Conditionally render the label based on input value */}
                                    {number.length === 0 && (
                                        <label className='absolute text-gray-400 text-sm left-2 z-0'>500 4356 455 <span className='text-red-500 font-bold'>*</span></label>
                                    )}
                                </div>

                            </div >
                        </div>

                        <div className="flex flex-wrap -mx-3 mb-6">

                            <div className="w-full md:w-1/2 px-3">

                                <div className='relative' >
                                    <div className='flex border-b hover:border-gray-400  border-gray-300 items-center relative justify-between '>
                                        <div
                                            className=" outline-none cursor-pointer w-full border-b-1 border-solid p-[10px] border-black relative"

                                            onClick={() => setIsOpen(!isOpen)}
                                        >
                                            {selectedOption || (<div>Country <span className='text-red-500 font-bold'>*</span></div>)}
                                        </div>
                                        <span className=' pt-[4px] pb-[9px]'>
                                            {open ? <span className="material-symbols-outlined">
                                                keyboard_arrow_up
                                            </span> : <span className="material-symbols-outlined">
                                                expand_more
                                            </span>}
                                        </span>
                                        {isOpen && (
                                            <div className='mt-[1px] z-50 absolute top-[100%] left-0 w-full ' >
                                                {options.map((option, index) => (
                                                    <div
                                                        key={index}
                                                        className="bg-white border-b-1 border-solid hover:bg-[#c7c7c7] duration-300"
                                                        style={{ padding: '10px', cursor: 'pointer' }}
                                                        onClick={() => handleSelect(option)}
                                                    >
                                                        {option}
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                    <div>

                                    </div>
                                </div>
                            </div>
                        </div>



                        <div className="flex items-center mb-4">
                            <input id="default-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                            <label htmlFor="default-checkbox" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Yes, I would like to receive marketing communications regarding products, services, and
                                events</label>
                        </div>
                        <div className="flex items-center mb-4">
                            <input id="default-checkbox-item" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                            <label htmlFor="default-checkbox-item" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">By providing this information, you agree that we may process your personal data</label>
                        </div>


                        <Button className='w-[30%] mt-3'> SUBMMIT</Button>


                    </form >
                </div >
            </div>
        </div>
    )
}
