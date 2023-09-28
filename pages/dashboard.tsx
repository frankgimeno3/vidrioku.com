import Image from 'next/image'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Home from '../components/screens/Home'
import Search from '../components/screens/Search'
import Notifications from '../components/screens/Notifications'
import Perfil from '../components/screens/Perfil'
import Publicaciones from '../components/screens/Publicaciones'
import Seguimientos from '../components/screens/Seguimientos'
import { useState } from 'react'

export default function Dashboard() {
  const [currentComponent, setCurrentComponent] = useState("Home")

  let componentToRender;

  switch (currentComponent) {
    case "Home":
      componentToRender = <Home />;
      break;
    case "Search":
      componentToRender = <Search />;
      break;
    case "Notifications":
      componentToRender = <Notifications />;
      break;
    case "Perfil":
      componentToRender = <Perfil />;
      break;
    case "Publicaciones":
      componentToRender = <Publicaciones />;
      break;
    case "Seguimientos":
      componentToRender = <Seguimientos />;
      break;
    default:
      componentToRender = <Home />; // Renderiza Home por defecto si currentComponent no coincide con ninguna de las opciones anteriores
      break;
  }

  return (
    <main className='h-screen bg-slate-50'>
      <Navbar currentComponent={currentComponent} setCurrentComponent={setCurrentComponent} />
      {componentToRender}
      <Footer />
    </main>
  )
}