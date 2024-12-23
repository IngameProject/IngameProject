import React from 'react'
import Catalogs from '../components/Catalogs';
import Tabs from '../components/Tabs'
import Services from '../components/Services'
import Accor from '@/components/Accor'
import Footer from '@/components/Footer'
const MainPage = () => {
  return (
    <div className="bg-black ">
      <div className='max-w-[1200px] mx-auto'>
        <Catalogs />
        <Tabs />
        <Services />
        <Accor />
        <Footer />
      </div>
    </div>
  )
}

export default MainPage