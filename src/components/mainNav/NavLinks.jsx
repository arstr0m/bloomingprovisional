const NavLinks = ({classes}) => {
  return (
    <>
      <ul className={`flex text-sm items-center align-middle justify-center gap-4 ${classes}`}>
        <a href="#Inicio">
          {" "}
          <li className="cursor-pointer hover:animate-pulse">Inicio</li>{" "}
        </a>
        <a href="#Nosotros">
          {" "}
          <li className="cursor-pointer hover:animate-pulse">
            Sobre Nosotros
          </li>{" "}
        </a>
        <a href="#Servicios">
          {" "}
          <li className="cursor-pointer hover:animate-pulse">Servicios</li>{" "}
        </a>
        <a href="#Paquetes">
          {" "}
          <li className="cursor-pointer hover:animate-pulse">Paquetes</li>{" "}
        </a>
        <a href="#Contacto">
          {" "}
          <li className="cursor-pointer hover:animate-pulse">Contacto</li>{" "}
        </a>
      </ul>
    </>
  );
};

export default NavLinks;
