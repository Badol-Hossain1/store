'use client'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CSSProperties, MouseEventHandler, useEffect, useRef, useState } from 'react';


import Image from "next/image";

function SampleNextArrow(props: {
    className?: string;
    style?: CSSProperties;
    onClick?: MouseEventHandler<HTMLDivElement>;
}) {
    const { className, style, onClick } = props;
    return (
        <div className="custom-prev-arrow  inline absolute right-4  cursor-pointer  text-white  bottom-2 " onClick={onClick}>
            <span className="material-symbols-outlined mt-3">
                arrow_forward
            </span>
        </div>
    );
}

function SamplePrevArrow(props: {
    className?: string;
    style?: CSSProperties;
    onClick?: MouseEventHandler<HTMLDivElement>;
}) {
    const { className, style, onClick } = props;
    return (
        <div className="custom-next-arrow cursor-pointer left-4 absolute bottom-2  inline  text-end  text-white" onClick={onClick}>

            <span className="material-symbols-outlined">
                arrow_back
            </span>
        </div>
    );
}

function CustomCarousel() {

    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (

        <div className=" rounded-2xl w-[90%]  mx-auto bg-[#0B0C10]">
            <Slider {...settings} className=" pb-[40px] h-full  pt-[48px]">
                <div>
                    <Image className="mx-auto h-[50px]" width={200} height={100} alt="" src='/company.svg' />
                </div>
                <div>
                    <Image className="mx-auto h-[50px]" width={150} height={100} alt="" src='/Vector.svg' />
                </div>
                <div >
                    <Image className="mx-auto h-[50px]" width={160} height={100} alt="" src='/Vector 1.svg' />
                </div>
                <div>
                    <Image className="mx-auto h-[50px]" width={100} height={100} alt="" src='/Vector 2.svg' />
                </div >
                <div >
                    <Image className="mx-auto h-[50px]" width={160} height={100} alt="" src='/Vector 3.svg' />
                </div >
                <div >
                    <Image className="mx-auto h-[50px]" width={170} height={100} alt="" src='Vector 4.svg' />
                </div>

            </Slider>
        </div>


    )
}




export { CustomCarousel }