import React from 'react'
interface HeroSectionProps {
    index: number;
}

const HeroSection: React.FC<HeroSectionProps> = ({ index }) => {
    return (
        <div className='text-white'>
            {index}
        </div>
    )
}
export default HeroSection;
