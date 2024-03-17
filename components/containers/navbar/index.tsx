"use client"
import { Button } from "@/components/shared/button";
import Image from "next/image";
// import AppleLogo from "@/public/asset/image 85.svg";
// import WorldLogo from "@/public/asset/language.svg";
import Link from "next/link";
import React, { useState } from "react";







const Navbar = () => {
    // State to manage the side menu
    const [isSideMenuOpen, setMenu] = useState(false);
    // State to manage open dropdown
    const [openDropdown, setOpenDropdown] = useState(null);

    // Array of navigation links with sublinks
    const navlinks = [
        {
            label: "PRODUCTS",
            link: "#",
            sublinks: [
                { label: "Product 1", link: "#" },
                { label: "Product 2", link: "#" },
                { label: "Product 3", link: "#" }
            ]
        },
        {
            label: "Solutions",
            link: "#",
            sublinks: [
                { label: "Solution 1", link: "#" },
                { label: "Solution 2", link: "#" }
            ]
        },
        {
            label: "About Us",
            link: "#",
            sublinks: [
                { label: "About Us 1", link: "#" },
                { label: "About Us 2", link: "#" }
            ]
        },
        {
            label: "Resources",
            link: "#",
            sublinks: [
                { label: "Resource 1", link: "#" },
                { label: "Resource 2", link: "#" },
                { label: "Resource 3", link: "#" }
            ]
        }
    ];

    // Function to handle dropdown toggle
    const handleDropdownToggle = (index: any) => {
        setOpenDropdown(openDropdown === index ? null : index);
    };

    // JSX
    return (
        <main>
            <nav className="flex justify-between px-8 bg-white items-center py-6">
                <div className="flex items-center gap-8">
                    <section className="flex items-center gap-4">

                        <span onClick={() => setMenu(true)} className="material-symbols-outlined md:hidden">
                            menu
                        </span>
                        <Link href={"/"} className="flex items-center gap-4 font-mono">
                            <Image
                                width={40}
                                height={40}
                                className="h-8 w-8"
                                src='/next.svg'
                                alt="avatar-img"
                            />
                            <div className="text-black font-semibold pt-1.5 text-[10px] items-center flex flex-col">
                                <span>Apple</span>
                                <span>Store</span>
                            </div>
                        </Link>
                    </section>
                    {/* Displaying navlinks for larger screens */}
                    <div className="hidden lg:flex">
                        {navlinks.map((item, i) => (
                            <div key={i} className="relative">
                                <button
                                    onClick={() => handleDropdownToggle(i)}
                                    className="uppercase text-black px-4 hover:text-black focus:outline-none"
                                >
                                    {item.label}
                                </button>
                                {openDropdown === i && (
                                    <div className="absolute  top-full w-full left-0  shadow-lg p-2 mt-2">
                                        {item.sublinks.map((sublink, j) => (
                                            <Link key={j} href={sublink.link} className="block text-white bg-black border-b py-2 w-[160px] px-3 hover:bg-gray-500">
                                                {sublink.label}
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>


                <div className={"fixed h-full w-screen lg:hidden bg-black/50 backdrop-blur-sm top-0 right-0 transition-all " + (isSideMenuOpen ? "" : "-translate-x-full")}>
                    <section className="text-black bg-white flex-col absolute left-0 top-0 h-screen p-8 gap-8 z-50 w-56 flex">

                        <span onClick={() => setMenu(false)} className="material-symbols-outlined">
                            close
                        </span>
                        {navlinks.map((item, i) => (
                            <div key={i} className="relative">
                                <button
                                    onClick={() => handleDropdownToggle(i)}
                                    className="uppercase text-black px-4 hover:text-black focus:outline-none"
                                >
                                    {item.label}
                                </button>
                                {openDropdown === i && (
                                    <div className="absolute top-0 left-full bg-white shadow-lg p-2 mt-2">
                                        {item.sublinks.map((sublink, j) => (
                                            <Link key={j} href={sublink.link} passHref>
                                                <Link className="block py-2 px-4 text-gray-800 hover:text-black" href={""}>
                                                    {sublink.label}
                                                </Link>
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                    </section>
                </div>

                {/* Last section */}
                <section className="flex text-black items-center gap-4">
                    <Image
                        width={40}
                        height={40}
                        className="h-8 w-8 rounded-full"
                        src='/next.svg'
                        alt="world icon"
                    />
                    <Link className="text-black" href="">
                        LOGIN
                    </Link>
                    <Link className="uppercase hidden lg:block text-black" href="">
                        Support
                    </Link>
                    <Button className="hidden md:block">Request Demo</Button>
                </section>
            </nav>
            <hr />
        </main>
    );
};

// Export the Navbar component
export default Navbar;
