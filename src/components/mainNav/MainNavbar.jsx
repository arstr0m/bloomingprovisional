import NavLinks from "./NavLinks";
import React, { useState } from "react";
const MainNavbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <header className="bg-white fixed w-full z-10 py-2">
      <div className="mx-auto max-w-screen-xl items-center align-middle text-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center align-middle justify-between">
          <div className="md:flex md:items-center md:gap-12">
            <a className="block text-teal-600" href="#">
              <span className="sr-only">Home</span>
              <img
                className="max-w-[200px] h-[80px] relative my-2 left-8"
                src="/src/imgs/logos/bloomingversion2.png"
              ></img>
            </a>
          </div>

          <div className="hidden md:block" id="links">
            <nav aria-label="Global">
              <NavLinks />
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <div className="block md:hidden">
              <button
                onClick={() => setShowMenu(!showMenu)}
                className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
              {showMenu && <p>Hola</p>}
            </div>
          </div>
          <div className="hidden md:block" id="asistencia">
            <a
              href="https://wa.me/+50431597965"
              className="bg-[#854782] text-white py-2 px-1 rounded-lg"
            >
              {" "}
              Solicitar asesoría
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default MainNavbar;
