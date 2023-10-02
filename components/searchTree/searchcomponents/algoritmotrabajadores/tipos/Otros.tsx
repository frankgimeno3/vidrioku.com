import { FC } from "react";


const Otros: FC = () => {


    return (<>
         <h2 className="pt-12">Encuentre a otros perfiles con experiencia en el sector del vidrio</h2>
        <div className="px-2 flex flex-col w-full">
            <div className="flex flex-col  p-2">
                 <button className="bg-zinc-100 text-zinc-700 shadow-lg p-2 text-xs h-16 my-2">Administración</button>
                <button className="bg-zinc-100 text-zinc-700 shadow-lg p-2 text-xs h-16 my-2">Márketing</button>
                <button className="bg-zinc-100 text-zinc-700 shadow-lg p-2 text-xs h-16 my-2">Finanzas</button>
             </div>
            
        </div>
    </>
    );
};

export default Otros;