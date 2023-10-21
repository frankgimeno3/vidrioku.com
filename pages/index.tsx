import Image from 'next/image'
import { Inter } from 'next/font/google'
import { useState } from 'react'
import NavUnlogged from '../components/prelogged/NavUnlogged'
import Hero from '../components/prelogged/Hero'
import Bolsas from '../components/prelogged/Bolsas'
import Contactenos from '../components/prelogged/Contactenos'
import Prefooter from '../components/prelogged/Prefooter'
import IniciarSesion from '../components/prelogged/IniciarSesion'
import Registro from '../components/prelogged/Registro'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const [currentComponent, setCurrentComponent] = useState("Hero")

  return (
    <>
      <NavUnlogged currentComponent={currentComponent} setCurrentComponent={setCurrentComponent} />
      <div className='bg-gray-50 mx-24 h-screen text-black'>
      {currentComponent === "Hero" && <>
          <Hero />
          <Bolsas />
          <Contactenos />
        </>}
        {currentComponent === "Iniciarsesion" && <>
          <IniciarSesion/>
        </>}
        {currentComponent === "Registro" && <>
          <Registro />
        </>}
      </div>
      <Prefooter />
    </>
  )
}
