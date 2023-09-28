import { FC } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router'; 

// interface NavbarProps {
//   currentComponent: string;
//   setCurrentComponent: (component: string) => void;
// }

// const Navbar: FC<NavbarProps> = ({ currentComponent, setCurrentComponent }) => {

const Notifications: FC = ({  }) => {
   const router = useRouter();  

   

   return (
    <div className="bg-zinc-500 h-screen">
      <div className="bg-white mx-6 h-full text-zinc-900">
        <div className='p-5'>
          <h2>Bienvenido a Notificaciones, Usuario</h2>

        </div>
      </div>
    </div>
  );
};

export default Notifications;