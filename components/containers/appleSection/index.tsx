import { productsItem } from '@/components/data/data';
import { Button } from '@/components/shared/button';
import React from 'react'


export default function ProductMain() {
    return (
        <div className='bg-white md:mx-10 mx-2 pt-10 md:px-8  md:py-0 py-6'>
            <div className='grid md:grid-cols-2 xl:grid-cols-4 gap-4 md:gap-0 grid-cols-1 '>
                {productsItem.map((item, index) => (
                    <div className={`md:${item.border}  ${item.bgColor} p-2 md:p-10 `} key={index}>
                        <h2 className="text-[#131314] uppercase dark:text-white text-3xl font-bold">{item.title}</h2>
                        <p className='pb-6'>{item.content}</p>

                        {item.buttonText && <Button>{item.buttonText}</Button>}

                    </div>
                ))}
            </div>

        </div>
    )
}
