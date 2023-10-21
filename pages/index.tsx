import Image from 'next/image'
import { Inter } from 'next/font/google'
import { useState } from 'react'
import NavUnlogged from '../components/NavUnlogged'
import Hero from '../components/prelogged/Hero'
import Bolsas from '../components/prelogged/Bolsas'
import Contactenos from '../components/prelogged/Contactenos'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const [currentComponent, setCurrentComponent] = useState("Hero")

  return (
     <>
     <NavUnlogged currentComponent={currentComponent} setCurrentComponent={setCurrentComponent}/>
     <div className='bg-gray-50 mx-24 h-screen text-black'>
      {}
        <Hero />
        <Bolsas />
        <Contactenos />
     </div>
     </>
  )
}
