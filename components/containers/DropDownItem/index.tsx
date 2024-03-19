"use client"
import React, { useEffect, useRef, useState } from 'react'

const DropDownItem = ({ menu }: any) => {
    const [isOpen, setIsOpen] = useState(false)
    const dropdownRef = useRef<any>(null);



    const handleClickOutside = (event: any) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setIsOpen(false);
        }
    };

    // Add event listener when the component mounts
    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        // Clean up the event listener when the component unmounts
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);



    return (
        <li key={menu.label} className='relative'>
            <h5 className="flex items-center gap-3 cursor-pointer" onClick={() => setIsOpen((prev) => !prev)}>
                {menu.label}
                <span className="material-symbols-outlined">
                    expand_more
                </span>
            </h5>
            <ul ref={dropdownRef} className={`absolute z-50 top-6 left-0  transition-all duration-300 ease-in-out ${isOpen ? 'translate-y-0 visible pointer-events-auto opacity-100' : 'translate-y-6 invisible pointer-events-none opacity-0'}`}>
                {menu.subMenu.map((sub: any) => <li key={sub.label} className='block text-white bg-black border-b py-2 w-[160px] px-3 hover:bg-gray-500'>{sub.label}</li>)}
            </ul>
        </li>
    )
}


export default DropDownItem

