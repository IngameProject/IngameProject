import { services } from '@/constants'
import React from 'react'

const Services = () => {
     return (
          <div>
               <h1 className='text-3xl my-5 font-semibold'>Xizmatlar</h1>
               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {services.map((service, idx) => (
                         <div
                              key={idx}
                              className="bg-gray-800 text-white rounded-lg overflow-hidden shadow-lg"
                         >
                              <img
                                   src={service.image}
                                   alt={service.title}
                                   className="w-full h-48 object-cover"
                              />
                              <div className="p-4">
                                   <h3 className="text-lg font-bold">{service.title}</h3>
                                   <p className="text-sm text-gray-400 mt-2">{service.description}</p>
                                   <button className="mt-4 w-full bg-pink-600 hover:bg-pink-700 text-white font-semibold py-2 px-4 rounded">
                                        Batafsil
                                   </button>
                              </div>
                         </div>
                    ))}
               </div>

          </div>
     )
}

export default Services