import React, { FC, useState } from 'react';
import { useRouter } from 'next/router';
import Region from './searchcomponents/Region';
import Sector from './searchcomponents/sector';
import CriteriosPerfiles from './searchcomponents/criteriosPerfiles';

const Search: FC = () => {
  const router = useRouter();
  const [tipoConsulta, setTipoConsulta] = useState('');
   const [regionSeleccionada, setRegionSeleccionada] = useState("");
  const [sectorSeleccionado, setSectorSeleccionado] = useState("");
 
  const setOfertas = () => {
    setTipoConsulta('Ofertas');
   };

  const setTrabajadores = () => {
    setTipoConsulta('Trabajadores');
   };

  return (
    <div className="bg-zinc-500 h-screen">
      <div className="bg-white mx-6 h-full text-zinc-900">
        <div className="p-5">
          <h2 className="font-bold text-zinc-700 text-xl">Búsqueda</h2>
          <h2 className="mt-3">Qué desea consultar?</h2>
          <div className="flex flex-row pt-1 text-xs">
            <button
              className={`${
                tipoConsulta == 'Ofertas' ? 'bg-zinc-500 text-zinc-100' : 'bg-zinc-100 text-zinc-700'
              } p-2 w-full mr-1 rounded-xs`}
              onClick={setOfertas}
            >
              Ofertas de empleo
            </button>
            <button
              className={`${
                tipoConsulta == 'Trabajadores' ? 'bg-zinc-500 text-zinc-100' : 'bg-zinc-100 text-zinc-700'
              } p-2 w-full ml-1 rounded-xs`}
              onClick={setTrabajadores}
            >
              Perfiles de profesionales técnicos
            </button>
          </div>
          {tipoConsulta !="" && <Region setRegionSeleccionada={setRegionSeleccionada} regionSeleccionada={regionSeleccionada}  />}
          {regionSeleccionada !="" && <Sector setSectorSeleccionado={setSectorSeleccionado} sectorSeleccionado={sectorSeleccionado}   />}
          {sectorSeleccionado !="" && <CriteriosPerfiles tipoConsulta={tipoConsulta} regionSeleccionada={regionSeleccionada} sectorSeleccionado={sectorSeleccionado}  />}
        </div>
      </div>
    </div>
  );
};

export default Search;