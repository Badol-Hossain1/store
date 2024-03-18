"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import { Button, buttonVariants } from '@/components/shared/button';
export default function page() {
    const [selectedOption, setSelectedOption] = useState('')
    const [selectedOption2, setSelectedOption2] = useState('');
    const [isOpen, setIsOpen] = useState(false);
    const [open, setOpen] = useState(false)
    const [inputValue, setInputValue] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [confromEmail, setConfromEmail] = useState('');
    const [password, setPasswod] = useState('');
    const [confromPass, setConfromPass] = useState('');
    const [showPassword, setShowPassword] = useState(false)
    const [showPasswordSecond, setShowPasswordSecond] = useState(false)
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };
    const togglePasswordVisibility2 = () => {
        setShowPasswordSecond(!showPasswordSecond);
    };
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setInputValue(e.target.value);
    };
    const handleEmail = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setEmail(e.target.value)
    }
    const handlePassword = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setPasswod(e.target.value)
    };
    const handleConfromPassword = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setConfromPass(e.target.value)
    };
    const handleLastName = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setLastName(e.target.value)
    };
    const handleConfromEmail = (e: React.ChangeEvent<HTMLInputElement>): void => {

        setConfromEmail(e.target.value)
    };
    const options = ["Option 01", "Option 02", "Option 03", "Option 04"];
    const handleSelect = (option: string): void => {
        setSelectedOption(option);
        setIsOpen(false);

    };
    const handleSelect2 = (option: string): void => {
        setSelectedOption2(option);
        setOpen(false);
    };
    return (
        <div>
            <div className="text-center">
                <h2 className="mt-10 mb-3 px-4 md:px-0 md:text-2xl text-2xl font-bold leading-9 tracking-tight text-gray-900">Welcome Back to Talent Hub</h2>
                <p className='text-center md:px-0 px-4 text-xs font-light text-black  block'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis saepe </p>
                <span className='text-xs font-light text-black '>sed optio </span>
            </div>
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
                                value={email}
                                onChange={handleEmail}
                            />
                            {/* Conditionally render the label based on input value */}
                            {email.length === 0 && (
                                <label className='absolute text-gray-400 text-sm left-2 z-0'>Email <span className='text-red-500 font-bold'>*</span></label>
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
                                value={confromEmail}
                                onChange={handleConfromEmail}
                            />
                            {/* Conditionally render the label based on input value */}
                            {confromEmail.length === 0 && (
                                <label className='absolute text-gray-400 text-sm left-2 z-0'>Confrom Email <span className='text-red-500 font-bold'>*</span></label>
                            )}
                        </div>
                    </div>
                </div> <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <div className='relative' >
                            <div className='flex border-b hover:border-gray-400  border-gray-300 items-center relative justify-between '>
                                <div
                                    className=" outline-none w-full border-b-1 border-solid p-[10px] border-black relative"
                                    onClick={() => setIsOpen(!isOpen)}
                                >
                                    {selectedOption || (<div>Country of Residence <span className='text-red-500 font-bold'>*</span></div>)}
                                </div>
                                <span className=' pt-[4px] pb-[9px]'>
                                    {isOpen ? <span className="material-symbols-outlined">
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
                                                className="bg-white hover:border-gray-400  border-b-1 border-solid hover:bg-[#c7c7c7] duration-300"
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
                    <div className="w-full md:w-1/2 px-3">

                        <div className='relative' >
                            <div className='flex border-b hover:border-gray-400  border-gray-300 items-center relative justify-between '>
                                <div
                                    className=" outline-none w-full border-b-1 border-solid p-[10px] border-black relative"

                                    onClick={() => setOpen(!open)}
                                >
                                    {selectedOption2 || (<div>City <span className='text-red-500 font-bold'>*</span></div>)}
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
                </div > <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
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
                    </div>
                    <div className="w-full md:w-1/2 px-3">
                        <div className='flex items-center hover:border-gray-400  justify-between border-b border-gray-300 relative' >
                            <input
                                className='bg-[#ffffff00] w-full outline-none py-3 px-2 z-30'
                                type={showPasswordSecond ? 'text' : 'password'}
                                name="name"
                                required
                                value={confromPass}
                                onChange={handleConfromPassword}
                            />
                            {
                                <span className="material-symbols-outlined cursor-pointer" onClick={togglePasswordVisibility2}>
                                    {showPasswordSecond ? "visibility" : "visibility_off"}
                                </span>
                            }
                            {/* Conditionally render the label based on input value */}
                            {confromPass.length === 0 && (
                                <label className='absolute text-gray-400 text-sm left-2 z-0'>Re-type Password <span className='text-red-500 font-bold'>*</span></label>
                            )}
                        </div>
                    </div>
                </div>
                <Button className={buttonVariants({ size: 'full', className: '', variant: 'login' })}>
                    CREATE ACCOUNT
                </Button>
                <span className="mt-10 flex justify-center gap-2 text-center text-xs text-gray-500">
                    Already have an account ?
                    <Link className='text-blue-400 text-xs' href='/login'>Sign In</Link>
                </span>
                <p className='text-[10px] mt-6 md:mt-10'>By clicking Create Account, you will sign up to the Talent Hub. When you sign up we will send you relevant jobs, make your protile available to emplovers on our sites unless you ask us not to, and enable you to apply for jobs advertised on the job board. By signing up you agree to our Terms and Conditions and Privacy Policy.</p>
                <span className='flex mt-4 gap-2 justify-center'>
                    <p className='text-blue-400 text-xs' >Terms of Business</p>
                    <span className='h-[4px]'>|</span>
                    <p className='text-blue-400 text-xs'>Privacy Polcy</p>
                </span>
            </form >
        </div >

    )
}
