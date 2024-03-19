import React from 'react'
import Brands from '../brands';
import { ProductItemsCard } from '@/components/data/data';
import Pricing from '../pricing';


export default function PlatformSection() {
    return (
        <div className='bg-[#EEF2FA] pt-20'>
            <h2 className="text-[#131314] text-center uppercase dark:text-white text-3xl font-bold">Innovate and scale with the unified
                power of one platform</h2>
            <p className='text-center'>Delivering a connected, intelligent system for ALL your customer and employee profile data,
                included in every license</p>
            <div className='grid gap-8 mt-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {ProductItemsCard.map((item, index) => (
                    <div key={index} className='bg-white rounded-md px-6 py-6 shadow-md'>
                        <h1 className=' pb-4 uppercase text-[#131314] front-bold text-3xl'>{item.title}</h1>

                        <p className='text-[#333333] pb-4'>{item.description}</p>
                        <ul>
                            {item.listItems.map((listItem, i) => (
                                <li className='flex items-center py-2' key={i}>
                                    <span className="material-symbols-outlined">add</span>
                                    {listItem}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
            <Brands />
            <Pricing />

        </div>
    )
}
