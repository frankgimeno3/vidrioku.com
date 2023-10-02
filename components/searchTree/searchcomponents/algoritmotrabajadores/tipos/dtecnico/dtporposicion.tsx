import { FC } from "react";


const Dporposicion: FC = () => {


    return (<>
         <h2 className="pt-12">Según qué criterios desea filtrar los perfiles?</h2>
        <div className="px-2 flex flex-row w-full">
            <div className="flex flex-col flex-1 p-2">
                 <button className="bg-zinc-100 text-zinc-700 shadow-lg p-2 text-xs h-16 my-2">Departamento de compras</button>
                <button className="bg-zinc-100 text-zinc-700 shadow-lg p-2 text-xs h-16 my-2">Departamento comercial</button>
                <button className="bg-zinc-100 text-zinc-700 shadow-lg p-2 text-xs h-16 my-2">Departamento técnico</button>
            </div>
  
        </div>
    </>
    );
};

export default Dporposicion;