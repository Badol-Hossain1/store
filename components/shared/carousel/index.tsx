'use client'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CSSProperties, MouseEventHandler, useEffect, useRef, useState } from 'react';
import { Transition } from "@headlessui/react";
import logo from '@/public/Vector 1.svg'

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


function NewCarousel() {
    const [currentStep, setCurrentStep] = useState(0);
    const [moving, setMoving] = useState("right");

    const [steps, setSteps] = useState([
        { name: "Step 1", href: "#", status: "current" },
        { name: "Step 2", href: "#", status: "upcoming" },
        { name: "Step 3", href: "#", status: "upcoming" },
        { name: "Step 4", href: "#", status: "upcoming" },
    ]);

    const prevStep = () => {
        setMoving("left");
        setSteps((old) =>
            old.map((v, i) => {
                if (i === currentStep) {
                    v.status = "upcoming";
                } else if (i === currentStep - 1) {
                    v.status = "current";
                }
                return v;
            })
        );
        setCurrentStep(currentStep - 1);
        return false;
    };

    const nextStep = async () => {
        setMoving("right");
        // getValues('firstname')

        if (true) {
            setSteps((old) =>
                old.map((v, i) => {
                    if (i === currentStep) {
                        v.status = "complete";
                    } else if (i === currentStep + 1) {
                        v.status = "current";
                    }
                    return v;
                })
            );
            setCurrentStep(currentStep + 1);
        }
        return false;
    };

    const wrapper = useRef(null);
    const [wrapperWidth, setWrapperWidth] = useState(1);

    useEffect(() => {
        function handleResize() {
            if (wrapper.current !== null) {
                setWrapperWidth(wrapper.current.offsetWidth);
            }
        }
        window.addEventListener("resize", handleResize);
        handleResize();

        return () => window.removeEventListener("resize", handleResize);
    }, []);
    return (
        <div> <div className="min-h-screen rounded-md mt-10 bg-white flex">
            <div className="flex-1 flex flex-col justify-top py-12 px-4 sm:px-6 ">

                <div
                    className="flex items-start overflow-hidden w-[50%] mx-auto sm:w-full"
                    ref={wrapper}
                >
                    <div className="flex flex-nowrap ">
                        <Transition
                            appear={false}
                            unmount={false}
                            show={currentStep === 0}
                            enter="transform transition ease-in-out duration-500"
                            enterFrom={
                                moving === "right"
                                    ? `translate-x-96 opacity-0`
                                    : `-translate-x-96 opacity-0`
                            }
                            enterTo={`translate-x-0 opacity-100`}
                            leave="transform transition ease-in-out duration-500 "
                            leaveFrom={`translate-x-0 opacity-100`}
                            leaveTo={
                                moving === "right"
                                    ? `-translate-x-full opacity-0`
                                    : `translate-x-full opacity-0`
                            }
                            className="w-0 bg-green-200 overflow-visible"
                            as="div"
                        >
                            <div
                                className="bg-green-200 w-full text-black text-center flex justify-center"

                            >
                                google
                                <img className="mx-auto" alt="" src={logo} />
                                <svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1.57848 10.7035L0.708313 9.83331L8.90865 1.62496H1.4535V0.375H11.0368V9.95829H9.78683V2.50315L1.57848 10.7035Z" fill="#131314" />
                                </svg>


                            </div>
                        </Transition>

                        <Transition
                            appear={false}
                            unmount={false}
                            show={currentStep === 1}
                            enter="transform transition ease-in-out duration-500"
                            enterFrom={
                                moving === "right"
                                    ? `translate-x-96 opacity-0`
                                    : `-translate-x-96 opacity-0`
                            }
                            enterTo={`translate-x-0 opacity-100`}
                            leave="transform transition ease-in-out duration-500 "
                            leaveFrom={`translate-x-0 opacity-100`}
                            leaveTo={
                                moving === "right"
                                    ? `-translate-x-96 opacity-0`
                                    : `translate-x-96 opacity-0`
                            }
                            className="bg-red-200 w-0 overflow-visible"
                            as="div"
                        >
                            <div className="text-black" style={{ width: `${wrapperWidth}px` }}>
                                <h2>stuff 2</h2>
                                <p>blar blar blar</p>
                                <p>blar blar blar</p>
                                <p>blar blar blar</p>
                                <p>blar blar blar</p>
                                <p>blar blar blar</p>
                                <p>blar blar blar</p>
                                <p>y
                                    <img className="mx-auto" alt="" src='@/public/Vector 1.svg' />
                                </p>

                                <p>blar blar blar</p>
                            </div>
                        </Transition>

                        <Transition
                            appear={false}
                            unmount={false}
                            show={currentStep === 2}
                            enter="transform transition ease-in-out duration-500"
                            enterFrom={
                                moving === "right"
                                    ? `translate-x-96 opacity-0`
                                    : `-translate-x-96 opacity-0`
                            }
                            enterTo={`translate-x-0 opacity-100`}
                            leave="transform transition ease-in-out duration-500 "
                            leaveFrom={`translate-x-0 opacity-100`}
                            leaveTo={
                                moving === "right"
                                    ? `-translate-x-96 opacity-0`
                                    : `translate-x-96 opacity-0`
                            }
                            className="w-0 overflow-visible"
                            as="div"
                        >
                            <div className="text-black" style={{ width: `${wrapperWidth}px` }}>
                                <h2>stuff 3</h2>
                                <p>blar blar blar</p>
                                <p>blar blar blar</p>
                                <p>blar blar blar</p>
                                <p>blar blar blar</p>
                                <p>blar blar blar</p>
                                <p>blar blar blar</p>
                                <p>blar blar blar</p>
                            </div>
                        </Transition>

                        <Transition
                            appear={false}
                            unmount={false}
                            show={currentStep === 3}
                            enter="transform transition ease-in-out duration-500"
                            enterFrom={
                                moving === "right"
                                    ? `translate-x-96 opacity-0`
                                    : `-translate-x-96 opacity-0`
                            }
                            enterTo={`translate-x-0 opacity-100`}
                            leave="transform transition ease-in-out duration-500 "
                            leaveFrom={`translate-x-0 opacity-100`}
                            leaveTo={
                                moving === "right"
                                    ? `-translate-x-96 opacity-0`
                                    : `translate-x-96 opacity-0`
                            }
                            className="bg-blue-200 w-0 overflow-visible"
                            as="div"
                        >
                            <div className="text-black w-[50%] mx-auto" >
                                <h2>stuff 4</h2>
                                <p>blar blar blar</p>
                                <p>blar blar blar</p>
                                <p>blar blar blar</p>
                                <p>blar blar blar</p>
                                <p>blar blar blar</p>
                                <p>blar blar blar</p>
                                <p>blar blar blar</p>
                            </div>
                        </Transition>
                    </div>
                </div>
                <div className={`mt-2`}>
                    <p className="text-sm text-black font-medium mb-1 mt-3 text-center">
                        Step {steps.findIndex((step) => step.status === "current") + 1} of{" "}
                        {steps.length}
                    </p>
                    <nav
                        className="flex items-center justify-between"
                        aria-label="Progress"
                    >
                        <button
                            type="button"
                            className="text-black"
                            disabled={currentStep === 0}
                            onClick={() => prevStep()}
                        >
                            Prev
                        </button>

                        <button
                            type="button"
                            className=" text-black "
                            disabled={currentStep === 3}
                            onClick={() => nextStep()}
                        >
                            Next
                        </button>
                    </nav>
                </div>
            </div>

        </div>
        </div>
    )
}

export { NewCarousel, CustomCarousel }