import { FC } from 'react';
import Image from 'next/image';

const Anuncio: FC = () => {
  return (
    <div className="flex flex-row justify-center items-center py-5 px-4 bg-white ">
       <Image
                src="/anuncio2.jpg"
                alt="ing2"
                width={400}
                height={20}
                className="rounded-lg shadow-lg border border-grey-300"
              />
    </div>
  );
};

export default Anuncio;