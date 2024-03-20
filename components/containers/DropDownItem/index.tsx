"use client"
import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react';

const DropDownItem = ({ menu }: any) => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<any>(null);

    const handleClickOutside = (event: any) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const toggleDropdown = () => {
        setIsOpen(prev => !prev); // Toggle dropdown
    };

    const closeDropdown = () => {
        setIsOpen(false);
    };

    return (
        <li ref={dropdownRef} key={menu.label} className='relative'>
            <h5 className="flex items-center gap-3 cursor-pointer" onClick={() => toggleDropdown()}>
                {menu.label}
                <span className="material-symbols-outlined">
                    {isOpen ? 'expand_less' : 'expand_more'}
                </span>
            </h5>
            <ul className={`absolute z-50 top-6 left-0 transition-all duration-300 ease-in-out ${isOpen ? 'translate-y-0 visible pointer-events-auto opacity-100' : 'translate-y-6 invisible pointer-events-none opacity-0'}`}>
                {menu.subMenu.map((sub: any) => (
                    <Link href={sub.link} key={sub.label} className='block text-white bg-black border-b py-2 w-[160px] px-3 hover:bg-gray-500' onClick={() => { closeDropdown(); }}>
                        {sub.label}
                    </Link>
                ))}
            </ul>
        </li>
    );
};

export default DropDownItem;
