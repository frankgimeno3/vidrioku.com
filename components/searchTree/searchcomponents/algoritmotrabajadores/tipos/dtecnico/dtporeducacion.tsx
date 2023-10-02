import { FC } from "react";


const Dporeducacion: FC = () => {


    return (<>
         <h2 className="pt-12">Qué perfiles le interesan más?</h2>
        <div className="px-2 flex flex-row w-full">
            <div className="flex flex-col flex-1 p-2">
                <button className="bg-zinc-100 text-zinc-700 shadow-lg p-2 text-xs h-16 my-2">Arquitectos, arquitectos técnicos</button>
                <button className="bg-zinc-100 text-zinc-700 shadow-lg p-2 text-xs h-16 my-2">Ingenieros de edificación</button>
                <button className="bg-zinc-100 text-zinc-700 shadow-lg p-2 text-xs h-16 my-2">Ingenieros civiles o de minas</button>
                <button className="bg-zinc-100 text-zinc-700 shadow-lg p-2 text-xs h-16 my-2">Ingenieros técnicos mecánicos</button>
                <button className="bg-zinc-100 text-zinc-700 shadow-lg p-2 text-xs h-16 my-2">Ingenieros técnicos electrónicos</button>
                <button className="bg-zinc-100 text-zinc-700 shadow-lg p-2 text-xs h-16 my-2">Ingenieros industriales</button>
                <button className="bg-zinc-100 text-zinc-700 shadow-lg p-2 text-xs h-16 my-2">Ingenieros informáticos</button>
            </div>
         
        </div>
    </>
    );
};

export default Dporeducacion;