const MainHero = () => {
  return (
    <section
      className="main_hero bg-no-repeat object-right  "
      id="Inicio"
    >
      <div className="mx-auto max-w-screen-xl px-4 py-32 sm:px-6  lg:flex  lg:items-center lg:px-8">
        <div
          className="max-w-xl text-start ltr:sm:text-left rtl:sm:text-right"
          data-aos="fade-left"
          data-aos-duration="1300"
          data-aos-anchor-placement="center-bottom"
        >
          <h1 className="text-[3em] uppercase font-extrabold sm:text-5xl">
            TENEMOS UNA
            <strong className="text-[3rem] block uppercase font-extrabold text-purple-700">
              solución para todo
            </strong>
          </h1>

          <p className="mt-4 xl:max-w-xl sm:text-xl xl:text-start text-3xl">
            Ya sea que estés comenzando desde cero o que estés buscando
            expandirte en el mercado digital, estamos aquí para ayudarte en cada
            paso del camino.
          </p>
          <p className="mt-4 xl:max-w-xl sm:text-xl text-start text-3xl">
            Desde pequeñas empresas hasta corporaciones multinacionales,
            adaptamos nuestras estrategias para satisfacer las necesidades
            únicas de tu negocio. Nuestra versatilidad nos permite ofrecer desde
            servicios de gestión de redes sociales hasta campañas publicitarias
            completas, asegurando que tu marca se destaque en un mundo cada vez
            más digitalizado.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MainHero;
