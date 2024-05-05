import DarkMode from "../darkmode/DarkMode";
import OfButton from "../offertButton/OfButton";
import Socials from "../socials/Socials";
import MainMenu from "./MainMenu";
import NavLinks from "./NavLinks";
import Search from "/public/search/search.svg";

const MainNavbar = () => {
  return (


    <header className="bg-white fixed w-full z-10 py-2">
  <div className="mx-auto max-w-screen-xl text-xl px-4 sm:px-6 lg:px-8">
    <div className="flex h-16 items-center justify-between">
      <div className="md:flex md:items-center md:gap-12">
        <a className="block text-teal-600" href="#">
          <span className="sr-only">Home</span>
          <img
            className="max-w-[200px] h-[80px] relative my-2 left-8"
            src="/src/imgs/logos/bloomingversion2.png"
          ></img>

        </a>
      </div>

      <div className="hidden md:block">
        <nav aria-label="Global">
         <NavLinks/>
           
        </nav>
      </div>

      <div className="flex items-center gap-4">
        <div className="sm:flex sm:gap-4">
          <a
            className="rounded-md bg-purple-600 px-5 py-2.5 text-sm font-medium text-white shadow"
            href="#"
          >
            Oferta Especial
          </a>
        </div>

        <div className="block md:hidden">
          <button className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
</header>
    
  );
};

export default MainNavbar;
