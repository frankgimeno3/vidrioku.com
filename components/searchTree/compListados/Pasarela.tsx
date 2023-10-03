import { FC } from 'react';
import Image from 'next/image';

const Pasarela: FC = () => {
  return (
    <div className='bg-white bg-opacity-10 py-3'>
    <h3 className='text-gray-300 text-sm pl-5 '>Empresas destacadas</h3>
      <div className="flex flex-row justify-center items-center  px-2 ">
        <Image
          src="/inventedLogos/1.png"
          alt="ing1"
          width={85}
          height={20}
          className="rounded-lg shadow-lg border border-grey-300 p-1 hover:w-24"
        />
        <Image
          src="/inventedLogos/2.png"
          alt="ing2"
          width={85}
          height={20}
          className="rounded-lg shadow-lg border border-grey-300 p-1 hover:w-24"
        />
        <Image
          src="/inventedLogos/3.png"
          alt="ing3"
          width={85}
          height={20}
          className="rounded-lg shadow-lg border border-grey-300 p-1 hover:w-24"
        />
        <Image
          src="/inventedLogos/7.png"
          alt="ing7"
          width={85}
          height={20}
          className="rounded-lg shadow-lg border border-grey-300 p-1 hover:w-24"
        />
      </div>
    </div>
  );
};

export default Pasarela;