import { FC } from 'react';
import Image from 'next/image';

interface NavbarProps {
  currentComponent: string;
  setCurrentComponent: (component: string) => void;
}

const Navbar: FC<NavbarProps> = ({ currentComponent, setCurrentComponent }) => {
  return (
    <div className="bg-white shadow-lg p-4 flex justify-between">
      <div className="flex items-center">
        <Image src="/logo.png" alt="Logo" width={100} height={50} />
      </div>
      <div className="flex items-center">
        <div className="mr-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-black cursor-pointer"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-4.35-4.35M8 10H6l-2 6h12l-2-6h-2"
            />
          </svg>
        </div>
        <div className="mr-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-black cursor-pointer"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
            />
          </svg>
        </div>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-black cursor-pointer"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Navbar;