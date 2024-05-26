import NavLinks from "./NavLinks";
import React, { useState } from "react";
const MainNavbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <header className="bg-white fixed w-full z-10 py-4 items-center">
      <div className="mx-auto max-w-screen-xl items-center align-middle text-xl ">
        <div className="flex h-16 items-center align-middle justify-center">
          <div className="md:flex md:items-center md:gap-12 flex-1">
            <a className="block text-teal-600" href="#">
              <span className="sr-only">Home</span>
              <img
                className="max-w-[200px] h-[80px] relative my-2 left-8"
                src="/src/imgs/logos/bloomingversion2.png"
              ></img>
            </a>
          </div>

          <div className="hidden md:block my-auto align-middle" id="links">
            <nav aria-label="Global" className="my-auto justify-center">
              <NavLinks classes=" flex-wrap gap-[2px] justify-around space-x-[1rem] uppercase my-auto" />
            </nav>
          </div>

          <div className="flex items-center gap-4 mx-4">
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
              {showMenu && (
                <div className="fixed inset-0 z-50 bg-neutral-200 h-screen flex flex-col m-auto justify-center items-center align-middle">
                  <button
                    className="h-1 w-1 fixed right-4 top-4 flex items-center justify-center rounded-2xl"
                    onClick={() => setShowMenu(false)}
                  >
                    X
                  </button>
                  <NavLinks classes="flex-col " />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default MainNavbar;
