import Image from "next/image";
import React, { useState } from "react";
import './index.css'
import { CarouselItem } from "./Item";
import { slides } from "@/components/data/data";


export const CustomCarousel = () => {
    let [current, setCurrent] = useState(0);

    let previousSlide = () => {
        if (current === 0) setCurrent(slides.length - 1);
        else setCurrent(current - 1);
    };

    let nextSlide = () => {
        if (current === slides.length - 1) setCurrent(0);
        else setCurrent(current + 1);
    };

    return (
        <div className="overflow-hidden ">
            <div
                className={`flex transition ease-out duration-40`}
                style={{
                    transform: `translateX(-${current * 100}%)`,
                }}
            >

                {slides.map((s) => {
                    return <CarouselItem s={s} />
                })}

            </div>

            {/* <div className=" top-0 h-full w-full justify-between items-center flex text-white px-10 text-3xl">
                <button onClick={previousSlide}>
                    back
                </button>
                <button onClick={nextSlide}>
                    go
                </button>
            </div> */}

            <div className=" bottom-0 py-4 flex justify-center gap-3 w-full">
                {slides.map((s, i) => {
                    return (
                        <div
                            onClick={() => {
                                setCurrent(i);
                            }}
                            key={"circle" + i}
                            className={`rounded-full w-5 h-5 cursor-pointer  ${i == current ? "bg-white" : "bg-gray-500"
                                }`}
                        ></div>
                    );
                })}
            </div>
            <div className=" top-0 h-full w-full justify-between items-center flex text-white px-10 text-3xl">
                <button onClick={previousSlide}>
                    back
                </button>
                <button onClick={nextSlide}>
                    go
                </button>
            </div>
        </div>
    );
}