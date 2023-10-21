import { FC } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router'; 

interface NavUnloggedProps {
  currentComponent: string;
  setCurrentComponent: (component: string) => void;

}

const NavUnlogged: FC<NavUnloggedProps> = ({ currentComponent, setCurrentComponent }) => {
  const router = useRouter();  



  return (
    <div className="bg-white shadow-lg p-4 flex justify-between border border-gray-100 px-6 text-black">
      <div className="flex items-center" 
      // onClick={redirectHome}
      >  
        <Image src="/logos/3.png" alt="Logo3" width={50} height={50} />
      </div>
      <div className="flex items-center">
        <div className="mr-4" 
        // onClick={handleSearchClick}
        >
        <button>Registro</button>

        </div>
        <div className="mr-4"
        // onClick={handleNotificationsClick}
        >
        <button>Iniciar Sesión</button>
        </div>
         
      </div>
    </div>
  );
};

export default NavUnlogged;