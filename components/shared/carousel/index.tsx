'use client'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CSSProperties, MouseEventHandler } from 'react';

import Image from "next/image";
interface SampleNextArrowProps {
    className?: string;
    style?: CSSProperties;
    onClick?: MouseEventHandler;
}
function SampleNextArrow(props: {
    className?: string;
    style?: CSSProperties;
    onClick?: MouseEventHandler<HTMLDivElement>;
}) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "black", textEmphasisColor: 'red' }}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props: {
    className?: string;
    style?: CSSProperties;
    onClick?: MouseEventHandler<HTMLDivElement>;
}) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "black" }}
            onClick={onClick}
        />
    );
}

export default function CustomCarousel() {

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

        <div className="slider-container rounded-2xl w-[80%] mx-auto bg-[#0B0C10]">
            <Slider {...settings} className=" pb-[40px]  pt-[48px]">
                <div>
                    <Image className="mx-auto" width={200} height={100} alt="" src='/company.svg' />
                </div>
                <div>
                    <Image className="mx-auto" width={150} height={100} alt="" src='/Vector.svg' />
                </div>
                <div >
                    <Image className="mx-auto" width={160} height={100} alt="" src='/Vector 1.svg' />
                </div>
                <div>
                    <Image className="mx-auto" width={100} height={100} alt="" src='/Vector 2.svg' />
                </div >
                <div >
                    <Image className="mx-auto" width={160} height={100} alt="" src='/Vector 3.svg' />
                </div >
                <div >
                    <Image className="mx-auto" width={170} height={100} alt="" src='Vector 4.svg' />
                </div>

            </Slider>
        </div>


    )
}
