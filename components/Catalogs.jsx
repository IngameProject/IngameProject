import React from 'react'
import { staticProducts } from '@/constants/index'
import Link from 'next/link'

const Catalogs = () => {
  return (
    <div className="flex items-center justify-center flex-col space-y-14 mt-14">
      <div className='flex items-center flex-col space-y-4'>
        <p className="text-3xl font-bold">KATALOG INGAME.UZ</p>
        <p className="text-xl font-medium">Eng qulay o'yin uchun katalogdan tanlang</p>
        <div className='w-32 border border-red-700'></div>
      </div>
      <div className="grid grid-cols-4 gap-20 mt-10">
        {staticProducts.map((item, idx) => (
          <Link key={idx} href={`/categories${item.link}`}>
            <div className="flex flex-col items-center justify-between h-full">
              <img src={item.img} />
              <p className="text-xl font-semibold tracking-tight">{item.title}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Catalogs
