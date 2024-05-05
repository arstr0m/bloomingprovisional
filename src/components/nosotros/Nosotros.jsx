const Nosotros = () => {
  return (
    <section className=" bg-neutral-200 "  id="Nosotros">
      <div className="mx-auto max-w-screen-2xl px-4 py-16 sm:px-6 lg:px-8 ">
        <div className="grid grid-cols-1  lg:grid-cols-2">
          <div className="relative flex items-center my-auto" data-aos="fade-down"
    data-aos-duration="1200"
    data-aos-anchor-placement="center-bottom">
            <div className="p-8 sm:p-16 lg:p-24">
              <h2 className="md:text-[4em] text-4xl py-2 text-center text-[#854782] font-bold mt-6">
                Sobre Nosotros
              </h2>

              <p className="mt- text-center text-2xl">
               
Desde nuestra fundación en 2020, nuestra empresa de marketing se ha dedicado a proporcionar soluciones creativas y efectivas para potenciar la presencia en línea de nuestros clientes. Nos especializamos en estrategias digitales y en maximizar el impacto de las redes sociales para impulsar el éxito de las marcas que confían en nosotros.
              </p>
              <p className=" text-center text-2xl">
              Nos enorgullece ofrecer un enfoque innovador y orientado a resultados en todas nuestras iniciativas. Creemos firmemente en la importancia de adaptarnos constantemente a las tendencias del mercado y a las nuevas tecnologías para asegurarnos de que nuestras estrategias sean siempre relevantes y eficaces.
              </p>

             
            </div>
          </div>
          <div className=" z-5 lg:py-16">
            <div className="h-full" data-aos="fade-up"
    data-aos-duration="1200"
    data-aos-anchor-placement="center-bottom">
              <a href="https://www.instagram.com/bloomingideashn?igsh=ZmExaWdvNDFvazk=" className="group block">
                <img
                  src="/public/Profile/main.webp"
                  alt=""
                  className="h-[500px] aspect-square w-full rounded object-contain"
                />

                <div className="mt-3">
                  <h3 className="uppercase text-center text-3xl text-[#85478] ">
                  El rostro detrás de Blooming Ideas
                  </h3>
<p className="text-center text-2xl">Una figura fundamental que te respaldará en la mejora de tu negocio. Su compromiso con la excelencia y su capacidad para generar ideas frescas y creativas hacen de ella un recurso invaluable para cualquier emprendedor o empresario que busque llevar su negocio al siguiente nivel. 
</p>


                
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Nosotros;
