import { FC, useState } from "react";

const Compras: FC = () => {


    return (<div className=" mt-12  ">
        <h2 className=" bg-zinc-700 mx-2 font-bold text-lg px-5 py-3 text-white">Resumen selección</h2>
        <div className="flex flex-col px-2 text-xs">

            <div className="p-2 shadow-lg bg-gray-200 text-sm">
                <h3 className=" py-2 text-sm">Perfil seleccionado:  Compras </h3>
                <h3 className="pl-2 font-bold py-2 text-sm">Perfiles recomendados:</h3>
                <ul className="pl-2">
                    <li  >Administración y Dirección de empresas</li>
                    <li className="py-1 ">Empresariales</li>
                    <li className="py-1 ">Formación específica en exportación, importación, aduanas y transporte</li>
                    <li className="py-1 ">Comercio</li>
                    <li className="py-1 ">Relaciones internacionales</li>
                </ul>
                <h2 className=" mt-10">Qué desea hacer a continuación?</h2>
                <div className="flex flex-col px-4 text-xs">
                    <button className="bg-zinc-100 text-zinc-700 shadow-lg p-2 w-full mr-1 mt-2 rounded-xs h-14 flex-1"> Obtener listado de comerciales</button>

                </div>
            </div>
        </div>
    </div>
    );
};

export default Compras