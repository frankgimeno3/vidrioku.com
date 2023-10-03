
import { FC } from 'react';
import Image from 'next/image';
import SearchTrabajadores from './searchTrabajadores'
import FiltroTrabajadores from './filtroTrabajadores'
import Anuncio from '../compListados/Anuncio'
import Oferta from '../compListados/Oferta'
import Pasarela from '../compListados/Pasarela'
import Trabajador from '../compListados/Trabajador'
import PageListButtons from '../compListados/PageListButtons'

const ListadoTrabajadores: FC = ({ }) => {

  return (
    <div className='min-h-screen flex flex-col bg-gray-50'>
      <nav className='flex flex-col p-2 bg-gray-50 text-black'>
        <SearchTrabajadores/>
        <FiltroTrabajadores/>
      </nav>
      <Trabajador/>
      <Trabajador/>
      <Trabajador/>
      <Trabajador/>
      <Trabajador/>
      <Trabajador/>

    </div>
  );
};

export default ListadoTrabajadores;