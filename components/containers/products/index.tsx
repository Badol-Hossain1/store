import { Button, buttonVariants } from '@/components/shared/button'
import Image from 'next/image'
import React from 'react'
import contact from '../contact'
import Link from 'next/link'

export default function Products() {
    return (
        <div className='bg-[#EEF2F4 pt-20'>
            <h1 className='text-center text-[#131314] font-bold text-2xl'>Products</h1>
            <p className='text-center mt-10 px-4 md:px-0  text-[#131314] font-light'>

                Three category-defining product suites for experience management—powered by leading AI and packaged to suit your programme's needs.
            </p>
            <ul className='flex mt-10 flex-col md:flex-row items-center justify-center text-[#333333] font-light gap-10'>
                <li className='cursor-pointer'>+ Pay for planned usage</li>
                <li className='cursor-pointer'>+ Insights for everyone</li>
                <li className='cursor-pointer'>+ Best-in-class flexibility</li>
            </ul>

            <div className='flex flex-col-reverse md:flex-row mt-10  text-center justify-center items-center gap-8'>
                <Button className={buttonVariants({ size: 'sm', className: '', variant: 'common' })}>
                    WATCH NOW
                </Button>
                <Link href='/products' className='flex justify-center uppercase  gap-2 items-center text-[#131314]'>find your plan
                    <Image className='' alt='' width={20} height={10} src='/arrow_outward.svg' />
                </Link>
            </div>

        </div>
    )
}
