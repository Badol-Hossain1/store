'use client'
import React, { useState } from 'react'
import Link from 'next/link'

const MobileDropdown = ({ menu }: any) => {
    const [openMenu, setOpenMenu] = useState(false)

    return (
        <li key={menu.label}>
            <span className='font-bold cursor-pointer' onClick={() => setOpenMenu((prev: any) => !prev)}>{menu.label}</span>
            <ul className={` transition-all duration-300 ease-out py-2 font-light  ${openMenu ? 'h-auto visible opacity-100 pointer-events-auto' : 'h-0 invisible opacity-0 pointer-events-none'}`}>
                {menu.subMenu.map((sub: any) => <li key={sub.label}>
                    <Link href="/">{sub.label}</Link>
                </li>)}
            </ul>
        </li>
    )
}



export default MobileDropdown
