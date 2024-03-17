'use client'
import { buttons } from '@/lib/data'
import React, { useState } from 'react'
import HeroSection from '../shared/heroSection'




export default function Hero() {
    const [isSelected, setIsSelected] = useState(0)
    console.log(isSelected)
    return (
        <div className='bg-[#0B0C10] pt-[100px] w-full'>

            <div className=''>
                <h1 className='text-white text-center font-bold text-2xl mb-2'>Use Cases</h1>

                <h5 className='font-light text-center text-[11px] text-white mb-1'>
                    Lorem ipsum dolor sit amet consectetur. Netus neque vitae dignissim nulla nunc non cras sed tellus.
                </h5>
                <h5 className='font-light text-center text-[11px] text-white'>Egestas accumsan ornare pellentesque purus tempus pretium</h5></div>


            {/* <div className='h-[500px]'></div> */}
            <div className='flex justify-between w-full'>
                <div className='grid grid-cols-2 w-[60%]'>
                    {
                        buttons.map((text, index) => {
                            return (

                                <button onClick={() => setIsSelected(index)} className={isSelected == index ? ' text-sm font-medium py-2 text-white  rounded-full    m-4 bg-gradient-to-r from-indigo-600 to-purple-700 ' : '  text-white text-sm font-medium py-2 hover:bg-gradient-to-r from-indigo-600 to-purple-700 rounded-full border border-purple-600  m-4'}>
                                    {text}
                                </button>
                            )

                        }
                        )
                    }
                </div>

                <div className='grid-col-2 '>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus ratione, magni blanditiis cumque expedita, officia voluptas, deserunt consequatur tenetur numquam vitae pariatur quod nihil. Itaque eaque nulla hic quas adipisci.
                </div>
            </div>

            <HeroSection index={isSelected} />
        </div>
    )
}
