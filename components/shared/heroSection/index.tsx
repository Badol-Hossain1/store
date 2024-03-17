import React from 'react'
interface HeroSectionProps {
    index: number;
}

const HeroSection: React.FC<HeroSectionProps> = ({ index }) => {
    return (
        <div className='text-white  h-full bg-gradient-to-r from-indigo-600 to-purple-700 p-8'>
            <div>

                <h1 className='font-semibold text-white text-xl'>Behaviour & Personality</h1>
                <p className='text-justify font-light w-[80%] text-xs'>Commodo libero enim cursus varius ultrices feugiat. Risus pellentesque aliquam tortor adipiscing lorem. Ipsum dui eget nullam at. Lorem ipsum dolor sit amet consectetur. Viverra dictum ultricies aliquam amet. Eget imperdiet nisi nulla viverra lectus.  Commodo libero enim cursus varius ultrices feugiat. Risus pellentesque aliquam tortor adipiscing lorem. Ipsum dui eget nullam at. Lo</p>
            </div>
        </div>
    )
}
export default HeroSection;
