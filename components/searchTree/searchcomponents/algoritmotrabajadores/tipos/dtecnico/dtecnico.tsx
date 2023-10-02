import { FC, useState } from "react";
import Dtporposicion from './dtporposicion'

const Dtecnico: FC = () => {
    const [segun, setSegun] = useState("")

    const setPosicion = () => {
        setSegun('Posicion')
    }

    return (<>
        <h2 className="pt-12">Qué perfiles le interesan más?</h2>
        <div className="px-2 flex flex-col w-full">
            <div className="flex flex-row flex-1 p-2">
                <div className="flex flex-col flex-1 p-2">
                    <button className="bg-zinc-100 text-zinc-700 shadow-lg p-2 text-xs h-16 my-2">Arquitectos, arquitectos técnicos</button>
                    <button className="bg-zinc-100 text-zinc-700 shadow-lg p-2 text-xs h-16 my-2">Ingenieros de edificación</button>
                    <button className="bg-zinc-100 text-zinc-700 shadow-lg p-2 text-xs h-16 my-2">Ingenieros civiles o de minas</button>
                </div>
                <div className="flex flex-col flex-1 p-2">
                    <button className="bg-zinc-100 text-zinc-700 shadow-lg p-2 text-xs h-16 my-2">Ingenieros técnicos mecánicos</button>
                    <button className="bg-zinc-100 text-zinc-700 shadow-lg p-2 text-xs h-16 my-2">Ingenieros técnicos electrónicos</button>
                    <button className="bg-zinc-100 text-zinc-700 shadow-lg p-2 text-xs h-16 my-2">Ingenieros industriales</button>
                    <button className="bg-zinc-100 text-zinc-700 shadow-lg p-2 text-xs h-16 my-2"
                        onClick={setPosicion}>Filtrar por posición deseada</button>
                </div>
            </div>
            {segun == "Posicion" && <Dtporposicion />}
        </div>

    </>
    );
};

export default Dtecnico;