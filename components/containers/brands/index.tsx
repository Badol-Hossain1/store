import Image from 'next/image'
import React from 'react'

export default function Brands() {
    return (
        <div className='mt-20'>
            <h2 className="text-[#131314] text-center uppercase dark:text-white text-3xl font-bold">The world's best brands deliver breakthrough</h2>
            <p className='text-center'>deliver breakthrough customer experiences</p>

            <div className='grid justify-center items-center mt-10 gap-8 grid-cols-2 xl:grid-cols-6 lg:grid-cols-4 md:grid-cols-3'>
                <Image className='mx-auto' src='/brand1.svg' height={100} width={100} alt='' />
                <Image className='mx-auto' src='/brand2.svg' height={100} width={100} alt='' />
                <Image className='mx-auto' src='/brand3.svg' height={100} width={100} alt='' />
                <Image className='mx-auto' src='/brand1.svg' height={100} width={100} alt='' />
                <Image className='mx-auto' src='/brand2.svg' height={100} width={100} alt='' />
                <Image className='mx-auto' src='/brand3.svg' height={100} width={100} alt='' />
                <Image className='mx-auto' src='/brand1.svg' height={100} width={100} alt='' />
                <Image className='mx-auto' src='/brand2.svg' height={100} width={100} alt='' />
                <Image className='mx-auto' src='/brand3.svg' height={100} width={100} alt='' />
                <Image className='mx-auto' src='/brand1.svg' height={100} width={100} alt='' />
                <Image className='mx-auto' src='/brand2.svg' height={100} width={100} alt='' />
                <Image className='mx-auto' src='/brand3.svg' height={100} width={100} alt='' />

            </div>
        </div>
    )
}
