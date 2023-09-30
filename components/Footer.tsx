import { FC } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';


interface FooterProps {
  onPageChange: (pageName: string) => void;
}

const Footer: React.FC<FooterProps> = ({ onPageChange }) => {
  const router = useRouter();

  const redirection = (pageName: string) => {
    onPageChange(pageName)
    router.push("/");
  };
 

  return (
    <div className="bg-zinc-300 shadow-lg p-4 flex justify-between">
      <div className="mx-10 lg:mx-24 text-zinc-800 relative z-10">
        <div className="flex flex-col sm:flex-row  items-top justify-between align-top">
          <div className="mb-4 flex-1">
            <h3 className="text-sm font-semibold">Sobre Nosotros</h3>
            <p className="text-xs mt-5">
              Giru.es es una agencia de desarrolladores web con sede en Barcelona, comprometidos en ofrecer soluciones de desarrollo de software de alta calidad. Nuestro equipo está formado por expertos en diferentes tecnologías y estamos dedicados a ayudar a nuestros clientes a alcanzar sus objetivos tecnológicos.
            </p>
            <p className="text-xs">
              Actualmente, formamos parte del grupo PROPORCION3,S.A. medios de comunicación .</p>
          </div>
          <div className="mb-4  flex-1 text-left py-10 sm:py-1" >
            <h3 className="text-sm font-semibold">Enlaces Rápidos</h3>
                <div className="  flex flex-col  text-xs">
              <button className="mt-5 text-left md:text-center" onClick={() => redirection('Home')} >Inicio</button>
              <button className="mt-5 text-left md:text-center" onClick={() => redirection('QuienesSomos')} >Nosotros</button>
              <button className="mt-5 text-left md:text-center" onClick={() => redirection('Servicios')} >Servicios</button>
              <button className="mt-5 text-left md:text-center" onClick={() => redirection('Contacto')} >Contacto</button>
            </div>
          </div>
          <div className="flex-1">
            <h3 className="text-md font-semibold">Contáctanos</h3>
            <address className="flex flex-col text-sm mt-5">
              <p>Dirección: Bruc 48, Barcelona</p>
              <p>Teléfono: (+34) *** *** ***</p>
              <p>Email: info@vidrioku.es</p>
            </address>
      <Image src="/logos/4.png" alt="Logo3" width={50} height={50} />
          </div>
        </div>
        <div className="mt-4 text-center text-zinc-800 text-sm">
          &copy; 2023 PROPORCION3,S.A. | Todos los derechos reservados
        </div>
      </div>
    </div>
  );
};

export default Footer;