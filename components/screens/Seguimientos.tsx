import { FC } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router'; 

// interface NavbarProps {
//   currentComponent: string;
//   setCurrentComponent: (component: string) => void;
// }

// const Navbar: FC<NavbarProps> = ({ currentComponent, setCurrentComponent }) => {

const Seguimientos: FC = ({  }) => {
   const router = useRouter();  

   

  return (
    <div className="bg-gray-200 h-screen">
            <h2>Esto es el Seguimientos</h2>
    </div>
  );
};

export default Seguimientos;