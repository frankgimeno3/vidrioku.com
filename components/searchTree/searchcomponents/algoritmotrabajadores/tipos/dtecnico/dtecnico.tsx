import { FC, useState } from "react";
import Dtporteducacion from './dtporeducacion'
import Dtporposicion from './dtporeducacion'

const Dtecnico: FC = () => {
const [segun, setSegun] = useState("")

const setEducacion = ()=>{
    setSegun('Educacion')
}
const setPosicion = ()=>{
    setSegun('Posicion')

}


    return (<>
         <h2 className="pt-12">Según qué criterios desea filtrar los perfiles?</h2>
        <div className="px-2 flex flex-row w-full">
 
                <button className="bg-zinc-100 text-zinc-700 shadow-lg p-2 text-xs h-16 my-2"
                onClick={setEducacion}>Según su educación</button>
                <button className="bg-zinc-100 text-zinc-700 shadow-lg p-2 text-xs h-16 my-2"
                onClick={setPosicion}>Por posición</button>
       
        </div>
        {segun == "Educacion" && <Dtporteducacion />}
        {segun == "Posicion" && <Dtporposicion />}
    </>
    );
};

export default Dtecnico;