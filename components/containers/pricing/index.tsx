import Image from 'next/image'
import React from 'react'




export default function Pricing() {
    return (
        <div className='grid  rounded-md  shadow-md mt-20 grid-cols-1 lg:grid-cols-2'>


            <div className='bg-white rounded-md px-6 py-6 h-[550px] shadow-md'>
                <h1 className=' pb-4 uppercase  text-[#131314] front-bold text-3xl'>
                    More on our pricing philosophy
                </h1>
                <p className='text-[#333333] leading-9 pb-4'>
                    Lorem ipsum dolor sit amet consectetur. Aenean ac vitae gravida cursus. Aliquet et nisi ante ullamcorper tortor sagittis suscipit
                    Lorem ipsum dolor sit amet consectetur. Aenean ac vitae gravida cursus. Aliquet et nisi ante ullamcorper tortor sagittis suscipit


                </p>
                <ul>

                    <li className='flex gap-4 items-center py-2' >
                        <span className="material-symbols-outlined">add</span>
                        Turpis amet sed ut eget sociis dolor

                    </li> <li className='flex gap-4 items-center py-2' >
                        <span className="material-symbols-outlined">add</span>
                        Cras arcu quisque imperdiet

                    </li> <li className='flex gap-4 items-center py-2' >
                        <span className="material-symbols-outlined">add</span>
                        Sapien mauris laoreet duis massa

                    </li> <li className='flex gap-4 items-center py-2' >
                        <span className="material-symbols-outlined">add</span>
                        Turpis amet sed ut eget sociis dolor

                    </li> <li className='flex gap-4 items-center py-2' >
                        <span className="material-symbols-outlined">add</span>
                        Cras arcu quisque imperdiet

                    </li>

                </ul>
            </div>
            <div className=' '>

                <img className='h-[550px] w-full' src="/Frame.jpg" alt="" />
            </div>

        </div>
    )
}
