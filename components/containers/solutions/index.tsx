import SolutionCard from '@/components/shared/solution-card'
import { solutionsData } from '@/lib/data'
import Image from 'next/image'
import React from 'react'

export default function SolutionSection() {
    return (
        <div className='bg-[#0B0C10] px-4 pt-[112px] pb-[112px] text-white flex-col md:flex-row flex gap-10 justify-between w-full'>
            {solutionsData.map((solution, index) => (
                <SolutionCard key={index} {...solution} />
            ))}
        </div>
    )
}
