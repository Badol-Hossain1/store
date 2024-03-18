'use client'

import React, { useState } from 'react'

import { buttons } from '@/components/data/data'

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



            <div className='flex md:flex-row pt-[48px] flex-col gap-6 justify-between w-full'>
                <div className='   w-full'>
                    <div className='md:w-[70%]  w-full mx-auto'>
                        {
                            buttons.map((text, index) => {
                                return (

                                    <button key={index} style={{ width: 'auto' }} onClick={() => setIsSelected(index)} className={isSelected == index ? ' text-sm font-medium py-2 text-white w-auto  rounded-full  px-4  m-4 bg-gradient-to-r from-indigo-600 to-purple-700 ' : 'w-auto px-4 text-white text-sm font-medium py-2 hover:bg-gradient-to-r from-indigo-600 to-purple-700 rounded-full border border-purple-600  m-4'}>
                                        {text}

                                    </button>
                                )

                            }
                            )
                        }

                    </div>




                </div>

                <div className='w-full'>


                    {/* <UseCasesSection setIsSelected={setIsSelected} isSelected={isSelected} /> */}
                </div>
            </div>

        </div>
    )
}
