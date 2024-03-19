import React from 'react'
import PropTypes from 'prop-types'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

const TopNav = () => {
    return (
        <div className='bg-black py-2'>
            <div className='container lg:px-16 xl:px-20'>
                <div className='text-white flex items-center justify-center gap-6'>
                    <p>Assessment Trends Report - Everything you need to support your people</p>
                    <Button className='bg-transparent hover:bg-transparent '>
                        GET REPORT
                        <Image alt="" loading="lazy" width="10" height="10" decoding="async" src="/arrow_white.svg" ></Image>
                    </Button>
                </div>
            </div>
        </div>
    )
}


export default TopNav
