'use client'
import { Button } from '@/components/shared/button';
import Image from 'next/image';
import React, { useState } from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ProductMain from '../appleSection';
import PlatformSection from '../platfrom';
import Brands from '../brands';
import BrochureSection from '../brochure';

// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"


export default function ThereeSuites() {
    const [selectedTabIndex, setSelectedTabIndex] = useState(0);
    return (
        <div className='mt-20  w-full'>

            <h1 className='text-center text-[#131314] font-bold md:text-2xl'>Unlock more value with our three suites</h1>

            <div className='flex  mt-10 justify-center w-full'>

                <Tabs
                    className='w-full md:mx-10 mx-2 '
                    selectedIndex={selectedTabIndex}
                    onSelect={(index) => setSelectedTabIndex(index)}
                >
                    <TabList className='w-full grid md:grid-cols-3'>
                        <Tab className='text-center py-6 font-bold  bg-[#DCE6E9] cursor-pointer border-none outline-none'>
                            {selectedTabIndex === 0 ? (
                                <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600'>Cognitive Assessment</span>
                            ) : (
                                <span className='text-[#888888]'>Cognitive Assessment</span>
                            )}
                        </Tab>
                        <Tab className='text-center py-6 font-bold  bg-[#DCE6E9] cursor-pointer border-none outline-none'>
                            {selectedTabIndex === 1 ? (
                                <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-900 to-blue-500'>Personality Assessment</span>
                            ) : (
                                <span className='text-[#888888]'>Personality Assessment</span>
                            )}
                        </Tab>
                        <Tab className='text-center cursor-pointer font-bold  py-6 bg-[#DCE6E9] border-none outline-none'>
                            {selectedTabIndex === 2 ? (
                                <span className='text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-100'>Team & Leadership</span>
                            ) : (

                                <span className='text-[#888888]'>Team & Leadership</span>
                            )}
                        </Tab>
                    </TabList>

                    <TabPanel className='bg-white'>
                        <h2 className='pt-10'>Any content 1</h2>
                    </TabPanel>
                    <TabPanel className='bg-white pt-10'>
                        <div className='grid lg:grid-cols-2 px-[48px] items-center justify-between'>
                            <div className='w-full'>
                                <h1 className=' text-[#131314] pb-6 font-bold md:text-2xl text-xl'>  People Teams</h1>
                                <p className='pt-4 pb-10 text-[#131314]  font-light leading-8'>Lorem ipsum dolor sit amet consectetur. Aenean ac vitae gravida cursus. Aliquet et nisi ante ullamcorper tortor sagittis suscipit maecenas. Massa dignissim massa commodo fringilla purus pharetra augue in. Purus aliquam dictum integer cursus velit sapien proin blandit. Bibendum eu purus ullamcorper diam egestas ut purus.</p>
                                <Button className='text-[#222222] hidden md:block'>REQUEST SUITE PRICING</Button>
                            </div>
                            <div className='w-full flex items-center flex-col md:flex-row justify-center'>

                                <Image src='image_logo.svg' height={500} width={500} alt='' />
                                <br />
                                <Button className='text-[#222222]  md:hidden '>REQUEST SUITE PRICING</Button>



                            </div>
                        </div>
                        {/* <ProductMain />
                        <PlatformSection />
                        <BrochureSection title="Download our brochure"
                            description="Elementum semper praesent amet integer orci. Enim molestie magna morbi tempor. Sed nascetur felis dictum a ac eget arcu tempus. Aliquet diam lorem semper leo nascetur eget. Tincidunt libero tristique nisl tristique vitae potenti eget egestas. Adipiscing morbi senectus et gravida orci pellentesque."
                            buttonText="Download"
                        /> */}


                        {/* <Brands /> */}
                        {/* <h1 className='h-[500px]'></h1> */}
                    </TabPanel>
                    <TabPanel className='bg-white'>
                        <h2 className='pt-10'>Any content 1</h2>
                    </TabPanel>
                </Tabs>
                <h1 className='h-[400px]'></h1>
            </div>
        </div>
    )
}
