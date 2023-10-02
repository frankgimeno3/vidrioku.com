import React, { FC, useState } from 'react';
import { useRouter } from 'next/router';
import TipoOferta from './searchcomponents/algoritmofertas/TipoOferta'
import TipoTrabajador from './searchcomponents/algoritmotrabajadores/TipoTrabajador'

// import Region from './searchcomponents/Region';
// import Sector from './searchcomponents/sector';
// import CriteriosPerfiles from './searchcomponents/criteriosPerfiles';

const Search: FC = () => {
  const router = useRouter();
  const [tipoConsulta, setTipoConsulta] = useState('');
  // const [regionSeleccionada, setRegionSeleccionada] = useState("");
  // const [sectorSeleccionado, setSectorSeleccionado] = useState("");

  const setOfertas = () => {
    setTipoConsulta('Ofertas');
  };

  const setTrabajadores = () => {
    setTipoConsulta('Trabajadores');
  };

  return (
    <div className="h-screen bg-gradient-to-b from-zinc-900 to-zinc-600">
      <h2 className="bg-zinc-800 mx-6 font-bold text-lg px-5 py-3">Búsqueda</h2>
      <div className=" mx-6  bg-white  h-full text-zinc-900">
        <div className="p-5">
          <h2 >Qué desea consultar?</h2>
          <div className="flex flex-row pt-1 text-xs">
            <button
              className={`${tipoConsulta == 'Ofertas' ? 'bg-zinc-500 text-zinc-100 shadow-lg' : 'bg-zinc-100 text-zinc-700 shadow-lg'
                } p-2 w-full mr-1 rounded-xs`}
              onClick={setOfertas}
            >
              Ofertas de empleo
            </button>
            <button
              className={`${tipoConsulta == 'Trabajadores' ? 'bg-zinc-500 text-zinc-100 shadow-lg' : 'bg-zinc-100 text-zinc-700 shadow-lg'
                } p-2 w-full ml-1 rounded-xs`}
              onClick={setTrabajadores}
            >
              Perfiles de profesionales técnicos
            </button>
          </div>
          {tipoConsulta == "Ofertas" && <TipoOferta/>}
          {tipoConsulta == "Trabajadores" && <TipoTrabajador/>}
          {/* {tipoConsulta != "" && <Region setRegionSeleccionada={setRegionSeleccionada} regionSeleccionada={regionSeleccionada} />}
          {regionSeleccionada != "" && <Sector setSectorSeleccionado={setSectorSeleccionado} sectorSeleccionado={sectorSeleccionado} />}
          {sectorSeleccionado != "" && <CriteriosPerfiles tipoConsulta={tipoConsulta} regionSeleccionada={regionSeleccionada} sectorSeleccionado={sectorSeleccionado} />} */}
        </div>
      </div>
    </div>
  );
};

export default Search;