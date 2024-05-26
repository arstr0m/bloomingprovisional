const Product = ({ Imagen, Nombre, Descripcion, Precio }) => {
  return (
    <>
      <div
        className="group relative block overflow-hidden"
        data-aos="fade-up"
        data-aos-duration="1500"
        data-aos-anchor-placement="center-bottom"
      >
        <img
          src={Imagen}
          alt={"Imagen de caratula de" + Nombre}
          className="h-64 w-full mx-auto object-cover transition duration-500 group-hover:scale-105 sm:h-72"
        />

        <div className="relative border border-gray-100 bg-white p-6 text-xl">
          <span className="text-right whitespace-nowrap text-white bg-[#854782]  px-3 py-1.5 text-md font-medium">
            {" "}
            Oferta Especial{" "}
          </span>

          <h3 className="mt-4 text-2xl font-medium text-gray-900">{Nombre}</h3>
          <p className=" mt-4 text-balance text-xl">{Descripcion}</p>

          <p className="mt-1.5 text-md text-gray-700">L{Precio}.00</p>

          <div className="mt-4">
            <a
              href="https://wa.me/+50431597965"
              className="block w-full text-white rounded-md bg-[#854782] p-4 font-medium transition hover:scale-105"
            >
              Contactar asistente
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
