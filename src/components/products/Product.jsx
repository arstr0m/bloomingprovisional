const Product = ({ Imagen, Nombre, Descripcion, Precio, }) => {
  return (
    <>
      <div className="group relative block overflow-hidden" data-aos="fade-up"
        data-aos-duration="1500"
        data-aos-anchor-placement="center-bottom">
      
        <img
          src={Imagen}
          alt={"Imagen de caratula de" + Nombre}
          className="h-64 w-full mx-auto object-cover transition duration-500 group-hover:scale-105 sm:h-72"
        />

        <div className="relative border border-gray-100 bg-white p-6">
          <span className="whitespace-nowrap text-white bg-[#854782]  px-3 py-1.5 text-xl font-medium">
            {" "}
            Oferta Especial{" "}
          </span>

          <h3 className="mt-4 text-xl font-medium text-gray-900">{Nombre}</h3>
          <p className=" mt-4 text-balance text-sm">{Descripcion}</p>

          <p className="mt-1.5 text-md text-gray-700">L{Precio}.00</p>

          <form className="mt-4">
            <button className="block w-full rounded bg-[#854782] 0 p-4 text-sm font-medium transition hover:scale-105">
              Contactar asistente
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Product;
