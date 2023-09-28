
import { FC } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';

interface criteriosPerfilesProps {
  tipoConsulta: any
  regionSeleccionada: any
  sectorSeleccionado: any
}

const criteriosPerfiles: FC<criteriosPerfilesProps> = ({ tipoConsulta, regionSeleccionada, sectorSeleccionado }) => {

  const router = useRouter();



  return (
    <div  >
      <h2 className='mt-3'>Esto debería escupir todos los perfiles que cuenten con estas características</h2>
      <ul className='flex flex-col   pt-1   text-xs'>
        <li>{tipoConsulta}</li>
        <li>{regionSeleccionada}</li>
        <li>{sectorSeleccionado}</li>
      </ul>
    </div>
  );
};

export default criteriosPerfiles;  