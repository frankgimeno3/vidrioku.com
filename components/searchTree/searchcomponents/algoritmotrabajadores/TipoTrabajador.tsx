import React, { FC, useState } from 'react';
import Compras from './tipos/comercial/Comercial'
import Comercial from './tipos/comercial/Comercial'
import Dtecnico from './tipos/comercial/Comercial'
import Ingenieros from './tipos/comercial/Comercial'
import Operarios from './tipos/operarios/departamentos/Operarios'
import Otros from './tipos/Otros'

const TipoTrabajador: FC = () => {
    const [tipoTrabajador, setTipoTrabajador] = useState('');

    const setCompras = () => {
        setTipoTrabajador('Compras')
    }
    const setComercial = () => {
        setTipoTrabajador('Comercial')
    }
    const setDtecnico = () => {
        setTipoTrabajador('Dtecnico')
    }
    const setIngenieros = () => {
        setTipoTrabajador('Ingenieros')
    }
    const setOperarios = () => {
        setTipoTrabajador('Operarios')
    }
    const setOtros = () => {
        setTipoTrabajador('Otros')
    }

    return (<>
        <h2 className="pt-12">Qué tipo de perfil necesita?</h2>
        <div className="px-2 flex flex-row w-full">
            <div className="flex flex-col flex-1 p-2">
                <button className="bg-zinc-100 text-zinc-700 shadow-lg p-2 text-xs h-16 my-2"
                    onClick={setCompras}>Departamento de compras</button>
                <button className="bg-zinc-100 text-zinc-700 shadow-lg p-2 text-xs h-16 my-2"
                    onClick={setComercial}>Departamento comercial</button>
                <button className="bg-zinc-100 text-zinc-700 shadow-lg p-2 text-xs h-16 my-2"
                    onClick={setDtecnico}>Departamento técnico</button>
            </div>
            <div className="flex flex-col flex-1 p-2">
                <button className="bg-zinc-100 text-zinc-700 shadow-lg p-2 text-xs h-16 my-2"
                    onClick={setIngenieros}>Ingenieros</button>
                <button className="bg-zinc-100 text-zinc-700 shadow-lg p-2 text-xs h-16 my-2"
                    onClick={setOperarios}>Operarios</button>
                <button className="bg-zinc-100 text-zinc-700 shadow-lg p-2 text-xs h-16 my-2"
                    onClick={setOtros}>Otros</button>
            </div>
        </div>
        {tipoTrabajador == "Compras" && <Compras />}
        {tipoTrabajador == "Comercial" && <Comercial />}
        {tipoTrabajador == "Dtecnico" && <Dtecnico />}
        {tipoTrabajador == "Ingenieros" && <Ingenieros />}
        {tipoTrabajador == "Operarios" && <Operarios />}
        {tipoTrabajador == "Otros" && <Otros />}

    </>
    );
};

export default TipoTrabajador;