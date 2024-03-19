import { Button } from '@/components/shared/button';
import React from 'react'
const features = [
    {
        id: 1,
        title: "Apple",
        border: 'border-black xl:border-none border-r'

    },
    {
        id: 2,
        title: "Apple",
        content: "Lorem ipsum dolor sit amet consectetur. Aenean ac vitae gravida cursus. Aliquet et nisi ante ullamcorper...",
        buttonText: "REQUEST PRICING",

        border: 'border-black lg:border-r'
    },
    {
        id: 3,
        title: "Apple",
        content: "Lorem ipsum dolor sit amet consectetur. Aenean ac vitae gravida cursus. Aliquet et nisi ante ullamcorper...",
        buttonText: "REQUEST PRICING",
        border: 'border-black border-r'
    },
    {
        id: 4,
        title: "Apple",
        content: "Lorem ipsum dolor sit amet consectetur. Aenean ac vitae gravida cursus. Aliquet et nisi ante ullamcorper...",
        buttonText: "REQUEST PRICING",
    },
    {
        id: 5,
        title: "Apple",
        bgColor: "bg-[#DCE6E9]",
        border: 'border-black xl:border-none border-r'

    },
    {
        id: 6,
        title: "Apple",
        content: "Lorem ipsum dolor sit amet consectetur. Aenean ac vitae gravida cursus. Aliquet et nisi ante ullamcorper...",

        bgColor: "bg-[#DCE6E9]",
        border: 'border-black border-r',

    },
    {
        id: 7,
        title: "Apple",
        content: "Lorem ipsum dolor sit amet consectetur. Aenean ac vitae gravida cursus. Aliquet et nisi ante ullamcorper...",

        border: 'border-black border-r',
        bgColor: "bg-[#DCE6E9]",
    },
    {
        id: 8,
        title: "Apple",
        content: "Lorem ipsum dolor sit amet consectetur. Aenean ac vitae gravida cursus. Aliquet et nisi ante ullamcorper...",

        bgColor: "bg-[#DCE6E9]",
    }, {
        id: 9,
        title: "Apple",
        border: 'border-black xl:border-none md:border-r'

    },
    {
        id: 10,
        title: "Apple",
        content: "Lorem ipsum dolor sit amet consectetur. Aenean ac vitae gravida cursus. Aliquet et nisi ante ullamcorper...",

        bgColor: "#DCE6E9",
        border: 'border-black xl:border-r'
    },
    {
        id: 11,
        title: "Apple",
        content: "Lorem ipsum dolor sit amet consectetur. Aenean ac vitae gravida cursus. Aliquet et nisi ante ullamcorper...",

        border: 'border-black border-r'
    },
    {
        id: 12,
        title: "Apple",
        content: "Lorem ipsum dolor sit amet consectetur. Aenean ac vitae gravida cursus. Aliquet et nisi ante ullamcorper...",

    }, {
        id: 13,
        title: "Apple",
        bgColor: "bg-[#DCE6E9]",
        border: 'border-black xl:border-none border-r'

    },
    {
        id: 14,
        title: "Apple",
        content: "Lorem ipsum dolor sit amet consectetur. Aenean ac vitae gravida cursus. Aliquet et nisi ante ullamcorper...",

        bgColor: "bg-[#DCE6E9]",
        border: 'border-black border-r'
    },
    {
        id: 15,
        title: "Apple",
        content: "Lorem ipsum dolor sit amet consectetur. Aenean ac vitae gravida cursus. Aliquet et nisi ante ullamcorper...",

        border: 'border-black md:border-r',
        bgColor: "bg-[#DCE6E9]",
    },
    {
        id: 16,
        title: "Apple",
        content: "Lorem ipsum dolor sit amet consectetur. Aenean ac vitae gravida cursus. Aliquet et nisi ante ullamcorper...",

        bgColor: "bg-[#DCE6E9]",
    },
    {
        id: 17,
        title: "Apple",
        border: 'border-black  md:border-r xl:border-none'

    },
    {
        id: 18,
        title: "Apple",
        content: "Lorem ipsum dolor sit amet consectetur. Aenean ac vitae gravida cursus. Aliquet et nisi ante ullamcorper...",
        buttonText: "REQUEST PRICING",

        border: 'border-black  xl:border-r'
    },
    {
        id: 19,
        title: "Apple",
        content: "Lorem ipsum dolor sit amet consectetur. Aenean ac vitae gravida cursus. Aliquet et nisi ante ullamcorper...",
        buttonText: "REQUEST PRICING",
        border: 'border-black border-r',

    },
    {
        id: 20,
        title: "Apple",
        content: "Lorem ipsum dolor sit amet consectetur. Aenean ac vitae gravida cursus. Aliquet et nisi ante ullamcorper...",
        buttonText: "REQUEST PRICING",

    },
];

export default function ProductMain() {
    return (
        <div className='bg-white pt-10 px-8'>
            <div className='grid md:grid-cols-2 xl:grid-cols-4 gap-4 md:gap-0 grid-cols-1 '>
                {features.map((item, index) => (
                    <div className={`md:${item.border}  ${item.bgColor} p-10 `} key={index}>
                        <h2 className="text-[#131314] uppercase dark:text-white text-3xl font-bold">{item.title}</h2>
                        <p className='pb-6'>{item.content}</p>

                        {item.buttonText && <Button>{item.buttonText}</Button>}

                    </div>
                ))}
            </div>

        </div>
    )
}
