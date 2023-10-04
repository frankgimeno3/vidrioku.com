import { FC } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';

interface NavbarProps {
  currentComponent: string;
  setCurrentComponent: (component: string) => void;
  isMenuOpen: any
  setIsMenuOpen: any
}

const Navbar: FC<NavbarProps> = ({ currentComponent, setCurrentComponent, isMenuOpen,
  setIsMenuOpen }) => {
  const router = useRouter();


  const redirectHome = () => {
    setCurrentComponent('Home')
    setIsMenuOpen(false)
    router.push('/dashboard');
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    console.log(isMenuOpen)
  }


  const handleSearchClick = () => {
    setCurrentComponent('Search')
    setIsMenuOpen(false)
  };
  const handleNotificationsClick = () => {
    setCurrentComponent('Notifications')
    setIsMenuOpen(false)
  };

  return (
    <div className="bg-white shadow-lg p-4 flex justify-between  px-6">
      <div className="flex items-center" onClick={redirectHome}>
        <Image src="/logos/3.png" alt="Logo3" width={50} height={50} />
      </div>
      <div className="flex items-center">
        <div className="mr-4" onClick={handleSearchClick}>
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 text-black cursor-pointer">
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <rect width="24" height="24" fill="white"></rect> <path fillRule="evenodd" clipRule="evenodd" d="M7.25007 2.38782C8.54878 2.0992 10.1243 2 12 2C13.8757 2 15.4512 2.0992 16.7499 2.38782C18.06 2.67897 19.1488 3.176 19.9864 4.01358C20.824 4.85116 21.321 5.94002 21.6122 7.25007C21.9008 8.54878 22 10.1243 22 12C22 13.8757 21.9008 15.4512 21.6122 16.7499C21.321 18.06 20.824 19.1488 19.9864 19.9864C19.1488 20.824 18.06 21.321 16.7499 21.6122C15.4512 21.9008 13.8757 22 12 22C10.1243 22 8.54878 21.9008 7.25007 21.6122C5.94002 21.321 4.85116 20.824 4.01358 19.9864C3.176 19.1488 2.67897 18.06 2.38782 16.7499C2.0992 15.4512 2 13.8757 2 12C2 10.1243 2.0992 8.54878 2.38782 7.25007C2.67897 5.94002 3.176 4.85116 4.01358 4.01358C4.85116 3.176 5.94002 2.67897 7.25007 2.38782ZM9 11.5C9 10.1193 10.1193 9 11.5 9C12.8807 9 14 10.1193 14 11.5C14 12.8807 12.8807 14 11.5 14C10.1193 14 9 12.8807 9 11.5ZM11.5 7C9.01472 7 7 9.01472 7 11.5C7 13.9853 9.01472 16 11.5 16C12.3805 16 13.202 15.7471 13.8957 15.31L15.2929 16.7071C15.6834 17.0976 16.3166 17.0976 16.7071 16.7071C17.0976 16.3166 17.0976 15.6834 16.7071 15.2929L15.31 13.8957C15.7471 13.202 16 12.3805 16 11.5C16 9.01472 13.9853 7 11.5 7Z" fill="#323232"></path> </g></svg>      </div>
        <div className="mr-4" onClick={handleNotificationsClick}>
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 text-black cursor-pointer"
          ><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fillRule="evenodd" clipRule="evenodd" d="M11.9999 2C8.68624 2 5.99995 4.68629 5.99995 8V9.83098C5.99995 11.2503 5.61422 12.6429 4.88401 13.8599L4.3306 14.7823C3.96354 15.3941 3.78001 15.7 3.76744 15.9497C3.74798 16.3366 3.95368 16.6999 4.29544 16.8823C4.51609 17 4.87281 17 5.58624 17H18.4137C19.1271 17 19.4838 17 19.7045 16.8823C20.0463 16.6999 20.252 16.3366 20.2325 15.9497C20.2199 15.7 20.0364 15.3941 19.6694 14.7824L19.6693 14.7823L19.1159 13.8599C18.3857 12.6429 17.9999 11.2503 17.9999 9.83095V9.31701C17.9999 9.15273 17.9999 9.07059 17.9531 9.02622C17.9063 8.98185 17.8163 8.98668 17.6362 8.99635C17.5911 8.99877 17.5457 9 17.5 9C16.1193 9 15 7.88071 15 6.5C15 5.58144 15.4954 4.77858 16.2336 4.34403C16.4107 4.23979 16.4992 4.18767 16.5091 4.11576C16.5191 4.04385 16.4567 3.97881 16.3321 3.84874C15.24 2.70938 13.7028 2 11.9999 2Z" fill="#2A4157" fillOpacity="0.24"></path> <circle cx="17.5" cy="6.5" r="1.5" fill="#222222"></circle> <path d="M14.35 18C14.4328 18 14.5007 18.0673 14.493 18.1498C14.4484 18.6254 14.1923 19.0746 13.7678 19.4142C13.2989 19.7893 12.663 20 12 20C11.337 20 10.7011 19.7893 10.2322 19.4142C9.80772 19.0746 9.55165 18.6254 9.50702 18.1498C9.49928 18.0673 9.56716 18 9.65 18L12 18L14.35 18Z" fill="#222222"></path> </g></svg>

        </div>
        <div onClick={toggleMenu} className='w-100 bg bg-red'>
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