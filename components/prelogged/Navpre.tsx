import { FC } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';


interface NavpreProps {
  onPageChange: (pageName: string) => void;
}

const Navpre: React.FC<NavpreProps> = ({ onPageChange }) => {
  const router = useRouter();


  return (
    <nav className="fixed top-0 left-0 right-0 z-10 bg-cyan-950 bg-opacity-25 backdrop-filter backdrop-blur-lg flex items-center justify-between p-4 md:text-xs xl:text-base">
      <button>Registro</button>
      <button>Inciar Sesión</button>
    </nav>
  );
};

export default Navpre;