import React from 'react';
import Image from 'next/image';

interface SolutionItem {
    imageSrc: string;
    text: string;
}

interface SolutionCardProps {
    title: string;
    description: string;
    items: SolutionItem[];
}

const SolutionCard: React.FC<SolutionCardProps> = ({ title, description, items }) => (
    <div className='bg-[#131314] p-4 shadow-md md:w-[70%] w-full lg:mx-10 md:mx-auto'>
        <div className='px-6 py-4'>
            <h1 className='text-xl pb-4 font-semibold'>{title}</h1>
            <p className='text-xs font-light leading-5'>{description}</p>
            <div className='flex text-xs mt-6 text-white font-light justify-around gap-2'>
                {items.map((item, index) => (
                    <div key={index}>
                        <Image src={item.imageSrc} width={25} height={25} alt='' />
                        <p className='pt-2'>{item.text}</p>
                    </div>
                ))}
            </div>
            <button className='flex pt-10 text-white md:mt-0 gap-4 items-center '>
                View More
                <Image alt='' width={10} height={10} src='/arrow_white.svg' />
            </button>
        </div>
    </div>
);

export default SolutionCard;
