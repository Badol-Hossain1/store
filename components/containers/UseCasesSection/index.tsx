'use client'
import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

interface HeroSectionProps {
    isSelected: any;
    setIsSelected: any;

}
interface CustomPrevArrowProps {
    onClick?: () => void;
    className?: string
}

interface Settings {
    infinite: boolean;
    speed: number;
    slidesToShow: number;
    slidesToScroll: number;
    beforeChange?: (oldIndex: number, newIndex: number) => void;
    afterChange?: (current: number) => void;
    prevArrow?: React.ReactNode;
    nextArrow?: React.ReactNode;
}


const UseCasesSection: React.FC<HeroSectionProps> = ({ isSelected, setIsSelected }) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [slidesCount, setSlidesCount] = useState(0);



    useEffect(() => {
        if (sliderRef.current) {
            setSlidesCount(sliderRef.current.props.children.length);
        }
    }, []);







    // new one 

    // Custom previous arrow component
    const CustomPrevArrow: React.FC<CustomPrevArrowProps> = (props) => {
        const { onClick } = props;
        return (
            <div className="custom-prev-arrow  inline absolute right-0  cursor-pointer  text-white  bottom-0 " onClick={onClick}>
                <span className="material-symbols-outlined mt-3">
                    arrow_forward
                </span>
            </div>
        );
    };

    // Custom next arrow component
    const CustomNextArrow: React.FC<CustomPrevArrowProps> = (props) => {
        const { onClick } = props;


        return (
            <div className="custom-next-arrow cursor-pointer right-0  inline left-0  text-end  text-white" onClick={onClick}>

                <span className="material-symbols-outlined">
                    arrow_back
                </span>
            </div>
        );
    };

    const sliderRef = useRef<any>(null);

    const settings: Settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        afterChange: (current) => setCurrentSlide(current + 1),

        prevArrow: <CustomPrevArrow />,
        nextArrow: <CustomNextArrow />,
    };
    useEffect(() => {
        if (sliderRef.current && (isSelected === 1 || isSelected === 2 || isSelected === 3)) {
            sliderRef.current.slickGoTo(isSelected);
        }
    }, [isSelected])




    return (
        <div className='text-white relative  h-full bg-gradient-to-r from-indigo-600 to-purple-700 px-4 md:p-8'>
            <div className='mb-10'>

                {/* <h1 className='font-semibold text-white pt-4 text-xl'>Behaviour & Personality</h1> */}
                <h1 className='font-semibold text-white pt-4 text-xl'>
                    {isSelected === 0 ? 'Behaviour & Personality' :
                        isSelected === 1 ? 'Motives & Values' :
                            isSelected === 2 ? 'Cognitve Ability' :
                                isSelected === 3 ? 'Mental Toughness' :
                                    isSelected === 4 ? '360 & Multi-Rater Surveys' :
                                        isSelected === 5 ? 'Career Development' :
                                            isSelected === 6 ? 'Innovation & Digitisation' :
                                                isSelected === 7 ? 'Wellbeing & Engagement' :

                                                    ''}
                </h1>
                <p className='text-justify mx-auto font-light text-sm mt-4  '>Commodo libero enim cursus varius ultrices feugiat. Risus pellentesque aliquam tortor adipiscing lorem. Ipsum dui eget nullam at. Lorem ipsum dolor sit amet consectetur. Viverra dictum ultricies aliquam amet. Eget imperdiet nisi nulla viverra lectus.  Commodo libero enim cursus varius ultrices feugiat. Risus pellentesque aliquam tortor adipiscing lorem. Ipsum dui eget nullam at. Lo</p>
            </div>



            <div className="   md:w-[600px] md:mx-auto ">
                <Slider ref={sliderRef} {...settings}>
                    <div >
                        <div className='bg-white p-5 rounded-md shadow-md'>
                            <div className='flex gap-4 items-center'>
                                <Image src='/google.svg' width={100} height={100} alt='' />
                                <h1 className='text-black font-bold text-xl'>Google.com</h1>
                            </div>
                            <div className='grid md:grid-cols-2 grid-cols-1 pt-4 gap-4'>
                                <div className='md:border-r  text-black'>
                                    <p>
                                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis qui dolore possimus ullam neque ipsa saepe minima earum cumque tempore maiores alias repellat nisi quae unde adipisci facere, itaque eaque?
                                    </p>

                                    <button className='flex pt-6 text-black gap-4 md:mt-0 items-center '>
                                        View More
                                        <Image alt='' width={10} height={10} src='/arrow_outward.svg' />
                                    </button>

                                </div>
                                <div>
                                    <Image src='/image 78.svg' height={500} width={500} alt='' />
                                </div>

                            </div>


                        </div>
                    </div>










                    <div >
                        <div className='bg-white p-5 rounded-md shadow-md'>
                            <div className='flex gap-4 items-center'>
                                <Image src='/google.svg' width={100} height={100} alt='' />
                                <h1 className='text-black font-bold text-xl'>Micro.com</h1>
                            </div>
                            <div className='grid md:grid-cols-2 grid-cols-1 pt-4 gap-4'>
                                <div className='md:border-r  text-black'>
                                    <p>
                                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis qui dolore possimus ullam neque ipsa saepe minima earum cumque tempore maiores alias repellat nisi quae unde adipisci facere, itaque eaque?
                                    </p>

                                    <button className='flex pt-6 text-black gap-4 md:mt-0 items-center '>
                                        View More
                                        <Image alt='' width={10} height={10} src='/arrow_outward.svg' />
                                    </button>

                                </div>
                                <div>
                                    <Image src='/image 78.svg' height={500} width={500} alt='' />
                                </div>

                            </div>


                        </div>
                    </div>

                    <div >
                        <div className='bg-white p-5 rounded-md shadow-md'>
                            <div className='flex gap-4 items-center'>
                                <Image src='/google.svg' width={100} height={100} alt='' />
                                <h1 className='text-black font-bold text-xl'>Pitch software gmbh</h1>
                            </div>
                            <div className='grid md:grid-cols-2 grid-cols-1 pt-4 gap-4'>
                                <div className='border-r  text-black'>
                                    <p>
                                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis qui dolore possimus ullam neque ipsa saepe minima earum cumque tempore maiores alias repellat nisi quae unde adipisci facere, itaque eaque?
                                    </p>

                                    <button className='flex pt-6 text-black gap-4 md:mt-0 items-center '>
                                        View More
                                        <Image alt='' width={10} height={10} src='/arrow_outward.svg' />
                                    </button>

                                </div>
                                <div>
                                    <Image src='/image 78.svg' height={500} width={500} alt='' />
                                </div>

                            </div>


                        </div>
                    </div>
                </Slider>
                <h1 className='text-center'> {currentSlide}/{slidesCount}</h1>

            </div>




        </div>
    )
}
export default UseCasesSection;
