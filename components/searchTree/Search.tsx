import React, { FC, useState } from 'react';
import { useRouter } from 'next/router';
import TipoOferta from './searchcomponents/algoritmofertas/TipoOferta'
import TipoTrabajador from './searchcomponents/algoritmotrabajadores/TipoTrabajador'
import ListadoTrabajadores from './bolsaTrabajadores/listadoTrabajadores';
import ListadoOfertas from './bolsaOfertas/listadoOfertas'
const Search: FC = () => {
  const router = useRouter();
  const [tipoConsulta, setTipoConsulta] = useState('');
  const [isOfertasSelected, setIsOfertasSelected] = useState('');  //quiero lograr ocultar todo antes de renderizar listado
  const [isTrabajadoresSelected, setIsTrabajadoresSelected] = useState(''); //quiero lograr ocultar todo antes de renderizar listado
  const setOfertas = () => {
    setTipoConsulta('Ofertas');
  };

  const setTrabajadores = () => {
    setTipoConsulta('Trabajadores');
  };

  return (
    <>
      <div className="min-h-screen bg-gradient-to-b from-zinc-900 to-zinc-600">
        <h2 className="bg-zinc-800 mx-6 font-bold text-lg px-5 py-3">Búsqueda</h2>
        <div className=" mx-6  bg-white  h-full text-zinc-900">
          <div className="p-5">
            <h2 >Qué desea consultar?</h2>
            <div className="flex flex-row pt-1 text-xs">
              <button
                className={`${tipoConsulta == 'Ofertas' ? 'bg-zinc-500 text-zinc-100 shadow-lg' : 'bg-zinc-100 text-zinc-700 shadow-lg'
                  } p-2 w-full mr-1 rounded-xs h-14`}
                onClick={setOfertas}
              >
                Ofertas de empleo
              </button>
              <button
                className={`${tipoConsulta == 'Trabajadores' ? 'bg-zinc-500 text-zinc-100 shadow-lg' : 'bg-zinc-100 text-zinc-700 shadow-lg'
                  } p-2 w-full ml-1 rounded-xs h-14`}
                onClick={setTrabajadores}
              >
                Perfiles de profesionales
              </button>
            </div>

          </div>
        </div>

        {tipoConsulta == "Ofertas" && <TipoOferta />}
        {tipoConsulta == "Trabajadores" && <TipoTrabajador />}
      </div>

      {isOfertasSelected  && <TipoOferta />}
      {isTrabajadoresSelected && <TipoOferta />}

    </>

  );
};

export default Search;