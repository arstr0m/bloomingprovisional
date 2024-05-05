const NavLinks = () => {
  return (
    <>
      <ul className="flex flex-wrap gap-[2px] justify-around space-x-[1rem] uppercase my-auto">
        <a href="#Inicio"> <li className="cursor-pointer hover:animate-pulse">Inicio</li> </a>
        <a href="#Nosotros"> <li className="cursor-pointer hover:animate-pulse">Sobre Nosotros</li> </a>
        <a href="#Servicios"> <li className="cursor-pointer hover:animate-pulse">Servicios</li> </a>
        <a href="#Paquetes"> <li className="cursor-pointer hover:animate-pulse">Paquetes</li> </a>
        <a href="#Contacto"> <li className="cursor-pointer hover:animate-pulse">Contacto</li> </a>

      </ul>
    </>
  );
};

export default NavLinks;
