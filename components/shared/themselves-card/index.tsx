
import { ThemselvsCard } from '@/components/data/data'
import React from 'react'



const ThemselvesCard = () => {
    return (
        <div className='bg-white shadow-lg mt-[112px] mb-[112px] rounded-lg w-full md:w-[90%] mx-auto'>
            <h1 className='text-[#131314] text-center mb-4 pt-10'>Our numbers speak for themselves</h1>

            <div className="text-3xl p-6 font-bold grid items-center  md:grid-cols-3 ">
                {ThemselvsCard.map((number, index) => (
                    <div key={index} className={`${number.border} text-center md:text-start px-4  my-2 `}>
                        <div className={`${number.borderb} px-6 py-4 `}>

                            <div className={`   font-bold text-transparent text-5xl  bg-clip-text bg-gradient-to-r ${number.css}`} key={index}>
                                {number.value}
                            </div>
                            <p className='text-xs mb-10   mt-4'>

                                {number.title}
                            </p>
                        </div>

                    </div>
                ))}
            </div>

        </div>
    )
}

export default ThemselvesCard