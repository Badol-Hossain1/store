import React from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { AccordionItems } from '@/components/data/data'


export default function PricingFaq() {

    return (
        <div className='mt-[112px] mb-[112px]'>
            <h2 className=' text-center text-[#131314] text-lg'>
                EXPERIENCE MANAGEMENT
            </h2>

            <h1 className=' text-center pb-4 uppercase  text-[#131314] front-bold text-3xl'>
                Pricing FAQ
            </h1>

            <Accordion type="single" collapsible className="w-full">
                {
                    AccordionItems.map((item, id) => (

                        <AccordionItem key={id} value={item.value}>
                            <AccordionTrigger>
                                {item.trigger}
                            </AccordionTrigger>
                            <AccordionContent>
                                {item.content}
                            </AccordionContent>
                        </AccordionItem>
                    ))
                }

            </Accordion>
        </div>
    )
}
