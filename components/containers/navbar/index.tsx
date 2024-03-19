"use client"
import { Button } from "@/components/ui/button";


import Image from "next/image";
// import AppleLogo from "@/public/asset/image 85.svg";
// import WorldLogo from "@/public/asset/language.svg";
import Link from "next/link";
import React, { useState } from "react";

import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { closeMenu, openMenu } from "@/redux/slices/menuSlice";
import { navMenu } from "@/components/data/data";
import DropDownItem from "../DropDownItem";







const Navbar = () => {
    // State to manage the side menu
    const [isSideMenuOpen, setMenu] = useState(false);
    // State to manage open dropdown
    const [openDropdown, setOpenDropdown] = useState(null);
    const isOpenMenu = useAppSelector((state) => state.menu.isOpenMenu)
    const dispatch = useAppDispatch();

    const handleMobileMenu = () => {
        if (isOpenMenu) {
            dispatch(closeMenu());
        } else {
            dispatch(openMenu());
        }
    };



    // Function to handle dropdown toggle
    const handleDropdownToggle = (index: any) => {
        setOpenDropdown(openDropdown === index ? null : index);
    };

    // JSX
    return (
        <main className="bg-white py-4">
            <nav className="flex justify-between items-center container lg:px-16 xl:px-20">
                <div className="flex items-center gap-10">
                    <Link href='/'><div className="flex items-center gap-2">
                        <Image
                            width={40}
                            height={40}
                            className="h-8 w-8"
                            src='/image85.svg'
                            alt="avatar-img"
                        />
                        <h3 className="leading-4 text-[14px]">
                            Apple
                            <br />
                            Store
                        </h3>
                    </div></Link>
                    <ul className="lg:flex items-center gap-8 uppercase  hidden text-[14px]">
                        {navMenu.map((menu) => menu.subMenu ?
                            <DropDownItem key={menu.label} menu={menu} />
                            :
                            <li key={menu.label}>
                                <Link href="/">{menu.label}</Link>
                            </li>
                        )}
                    </ul>
                </div>
                <div>
                    <ul className="text-[14px] flex items-center gap-4">
                        <li className=" flex items-center justify-center">
                            <span className="md:block hidden material-symbols-outlined">
                                language
                            </span>
                        </li>
                        <li className="uppercase">
                            <Link href='/login'>  Login</Link>
                        </li>
                        <li className="uppercase md:block hidden">
                            Support

                        </li>
                        <li>
                            <Link href='#demo'> <Button
                                variant="outline"
                                className="rounded-full md:block hidden uppercase"
                            >
                                Request Demo
                            </Button></Link>
                        </li>
                        <li className="cursor-pointer " onClick={handleMobileMenu}>
                            <span className="material-symbols-outlined md:hidden block">
                                menu
                            </span>
                        </li>
                    </ul>
                </div>
            </nav>
        </main>
    );
};

// Export the Navbar component
export default Navbar;
