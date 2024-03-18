import Image from "next/image";
import React, { useState } from "react";
import './index.css'
import { CarouselItem } from "./Item";
let slides = [
    "https://i.pinimg.com/originals/51/82/ac/5182ac536727d576c78a9320ac62de30.jpg",
    "https://wallpapercave.com/wp/wp3386769.jpg",
    "https://wallpaperaccess.com/full/809523.jpg",
    "https://getwallpapers.com/wallpaper/full/5/c/0/606489.jpg",
];
const data = [
    {
        id: 1,
        logo: '/image 78.svg',
        icon: '/card1.svg',
        dec: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium fugit voluptates sapiente excepturi cum! Ut accusamus necessitatibus, delectus voluptates non adipisci quo, tempora iure, ullam culpa repellat error quos optio.',
        btn: 'VIEW MORE'
    }, {
        id: 2,
        logo: '/image 78.svg',
        icon: '/card2.svg',
        dec: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium fugit voluptates sapiente excepturi cum! Ut accusamus necessitatibus, delectus voluptates non adipisci quo, tempora iure, ullam culpa repellat error quos optio.',
        btn: 'VIEW MORE'
    }, {
        id: 3,
        logo: '/image 78.svg',
        icon: '/car.svg',
        dec: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium fugit voluptates sapiente excepturi cum! Ut accusamus necessitatibus, delectus voluptates non adipisci quo, tempora iure, ullam culpa repellat error quos optio.',
        btn: 'VIEW MORE'
    }
]
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