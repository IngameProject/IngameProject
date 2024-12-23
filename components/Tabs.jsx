'use client'

import React from 'react'
import { Tabs, Tab } from "@nextui-org/react";
import { processors, tabPrice, tabProcessor } from '@/constants';

const TabsComponent = () => {
     return (
          <>
               <div className="my-24 flex flex-col justify-center items-center h-full">
                    <h1 className='text-3xl font-semibold'>Kompyuter tanlash</h1>
                    <Tabs variant="underlined" aria-label="Tabs colors" color="primary" radius="full">
                         <Tab key="price" title="Narh boyicha">
                              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                                   {tabPrice.map((item, idx) => (
                                        <div
                                             key={idx}
                                             className="border-2 border-pink-600 cursor-pointer py-2 px-3 rounded-lg shadow-lg text-center  hover:shadow-xl transition-shadow duration-300"
                                        >
                                             <p className="text-xs font-semibold">{item.price}</p>
                                        </div>
                                   ))}
                              </div>

                         </Tab>
                         <Tab key="card" title="Video Karta boyicha">
                              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                                   {tabProcessor.map((item, idx) => (
                                        <div
                                             key={idx}
                                             className="border-2 border-pink-600 py-2 rounded-lg shadow-lg text-center  hover:shadow-xl transition-shadow duration-300"
                                        >
                                             <p className="text-xs font-semibold">{item.title}</p>
                                        </div>
                                   ))}
                              </div>

                         </Tab>
                         <Tab key="processor" title="Processor boyicha">
                              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                                   {processors.map((item, idx) => (
                                        <div
                                             key={idx}
                                             className="border-2 border-pink-600 py-2 px-3 rounded-lg shadow-lg text-center  hover:shadow-xl transition-shadow duration-300"
                                        >
                                             <p className="text-xs font-semibold">{item.title}</p>
                                        </div>
                                   ))}
                              </div>

                         </Tab>
                    </Tabs>
                    <button className='uppercase text-xl tracking-wide font-semibold bg bg-pink-600 rounded-sm py-3 px-10 mt-14'>tayyor</button>
               </div>
          </>
     )
}

export default TabsComponent