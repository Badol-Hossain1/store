"use client"
import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Image from 'next/image'

import Link from 'next/link'

import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import { closeMenu, openMenu } from '@/redux/slices/menuSlice'
import MobileDropdown from '@/components/containers/MobileDropdown'
import { navMenu } from '@/components/data/data'

const MobileNav = () => {
    const isOpenMenu = useAppSelector((state) => state.menu.isOpenMenu)
    const dispatch = useAppDispatch();


    const handleMobileMenu = () => {
        if (isOpenMenu) {
            dispatch(closeMenu());
        } else {
            dispatch(openMenu());
        }
    };

    return (
        <div className={`fixed top-0 left-0 bg-black h-screen w-[300px] z-50 p-6 transition-all duration-300 ease-in-out ${isOpenMenu ? 'opacity-100 translate-x-[0%] ' : 'translate-x-[-100%] opacity-0'}`}>
            <div>
                <div className='flex items-center justify-between'>
                    <h5 className='flex items-center gap-2'>
                        <Image src="/image85.svg" width={35} height={35} alt='logo' />
                        <p className='text-white text-[14px] leading-5'>
                            Apple

                            Store
                        </p>
                    </h5>
                    <span onClick={handleMobileMenu} className="material-symbols-outlined text-white cursor-pointer">
                        close
                    </span>
                </div>
                <div className='py-20'>
                    <ul className='text-white'>
                        {navMenu.map((menu) => menu.subMenu ?
                            <MobileDropdown key={menu.label} menu={menu} />
                            :
                            <li key={menu.label} className='' >
                                <Link href="/">{menu.label}</Link>
                            </li>
                        )}

                    </ul>
                </div>
            </div>
        </div>
    )
}


export default MobileNav
