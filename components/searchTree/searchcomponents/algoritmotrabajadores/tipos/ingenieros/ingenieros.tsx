import { FC, useState } from "react";
import Iporeducacion from './iporeducacion'


const Ingenieros: FC = () => {
    const [segun, setSegun] = useState("")

    const setEducacion = () => {
        setSegun('Educacion')
    }


    return (<>
         <h2 className="pt-12">Para qué departamento está buscando ingenieros?</h2>
        <div className="px-2 flex flex-row w-full">
            <div className="flex flex-col flex-1 p-2">
                 <button className="bg-zinc-100 text-zinc-700 shadow-lg p-2 text-xs h-16 my-2">Prevención y medio ambiente</button>
                <button className="bg-zinc-100 text-zinc-700 shadow-lg p-2 text-xs h-16 my-2">Planificación de la producción</button>
                <button className="bg-zinc-100 text-zinc-700 shadow-lg p-2 text-xs h-16 my-2">Control de calidad</button>
                <button className="bg-zinc-100 text-zinc-700 shadow-lg p-2 text-xs h-16 my-2">Proyectos, documentación y análisis</button>
            </div>
             <div className="flex flex-col flex-1 p-2">
                <button className="bg-zinc-100 text-zinc-700 shadow-lg p-2 text-xs h-16 my-2">Ingenieros técnicos</button>
                <button className="bg-zinc-100 text-zinc-700 shadow-lg p-2 text-xs h-16 my-2">Dirección de operaciones</button>
                <button className="bg-zinc-100 text-zinc-700 shadow-lg p-2 text-xs h-16 my-2">Dirección Logística</button>
                <button className="bg-zinc-100 text-zinc-700 shadow-lg p-2 text-xs h-16 my-2"  
                onClick={setEducacion}> Filtrar por formación específica</button>
            </div>
        </div>
        {segun == "Educacion" && <Iporeducacion />}

    </>
    );
};

export default Ingenieros;