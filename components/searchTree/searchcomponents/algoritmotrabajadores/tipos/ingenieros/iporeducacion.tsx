import { FC } from "react";


const Iporeducacion: FC = () => {


    return (<>
         <h2 className="pt-12">Qué tipo de ingeniero necesita?</h2>
        <div className="px-2 flex flex-row w-full">
            <div className="flex flex-col flex-1 p-2">
                <button className="bg-zinc-100 text-zinc-700 shadow-lg p-2 text-xs h-16 my-2">Ingeniería Mecánica</button>
                <button className="bg-zinc-100 text-zinc-700 shadow-lg p-2 text-xs h-16 my-2">Ingeniería Electrónica</button>
                <button className="bg-zinc-100 text-zinc-700 shadow-lg p-2 text-xs h-16 my-2">Ingeniería Industrial</button>
                <button className="bg-zinc-100 text-zinc-700 shadow-lg p-2 text-xs h-16 my-2">Ingeniería Civil</button>
                <button className="bg-zinc-100 text-zinc-700 shadow-lg p-2 text-xs h-16 my-2">Ingeniería Edificación</button>
                <button className="bg-zinc-100 text-zinc-700 shadow-lg p-2 text-xs h-16 my-2">Ingeniería Informática</button>
                <button className="bg-zinc-100 text-zinc-700 shadow-lg p-2 text-xs h-16 my-2">Ingeniería Telecomunicaciones</button>
                <button className="bg-zinc-100 text-zinc-700 shadow-lg p-2 text-xs h-16 my-2">Otras ingenierías</button>

            </div>
  
        </div>
    </>
    );
};

export default Iporeducacion;