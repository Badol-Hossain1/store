'use client'
import React, { useEffect, useRef, useState } from 'react'
import Link from 'next/link'

const MobileDropdown = ({ menu }: any) => {
    const [openMenu, setOpenMenu] = useState(false)

    const dropdownRef = useRef<any>(null);
    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const handleClickOutside = (event: any) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setOpenMenu(false);
        }
    };

    const toggleDropdown = () => {
        setOpenMenu(prev => !prev); // Toggle dropdown
    };


    return (
        <li ref={dropdownRef} key={menu.label}>
            <span className='font-bold cursor-pointer' onClick={() => setOpenMenu((prev) => !prev)}>{menu.label}</span>
            <ul className={` transition-all duration-300 ease-out py-2 font-light  ${openMenu ? 'h-auto visible opacity-100 pointer-events-auto' : 'h-0 invisible opacity-0 pointer-events-none'}`}>
                {menu.subMenu.map((sub: any) => <li className=' text-black px-4 py-2 ' key={sub.label}>
                    <Link onClick={() => toggleDropdown()} className='block text-black bg-white border-b py-2 w-[160px] px-3 hover:text-white hover:bg-gray-600' href={sub.link}>{sub.label}</Link>
                </li>)}
            </ul>
        </li>
    )
}



export default MobileDropdown
